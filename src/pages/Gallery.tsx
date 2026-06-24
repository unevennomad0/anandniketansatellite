import { useState } from "react";
import { X } from "lucide-react";
import PageHero from "../components/PageHero";
import { Section } from "../components/ui";
import { img, galleryImages } from "../data/images";

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A glimpse of life at Anand Niketan"
        subtitle="Classrooms, studios, sport and celebration — moments that capture the spirit of our campus."
        image={img.banners[2]}
      />

      <Section>
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {galleryImages.map((g, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="block w-full overflow-hidden rounded-2xl shadow-soft focus:outline-none focus:ring-2 focus:ring-brand-blue"
            >
              <img
                src={g.src}
                alt={g.alt}
                className="w-full transition-transform duration-500 hover:scale-105"
              />
            </button>
          ))}
        </div>
      </Section>

      {active !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute right-5 top-5 text-white"
            aria-label="Close"
            onClick={() => setActive(null)}
          >
            <X size={32} />
          </button>
          <img
            src={galleryImages[active].src}
            alt={galleryImages[active].alt}
            className="max-h-[85vh] max-w-full rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
