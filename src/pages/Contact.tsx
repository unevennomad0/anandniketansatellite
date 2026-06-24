import { useState } from "react";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import PageHero from "../components/PageHero";
import { Section, Card } from "../components/ui";
import { school } from "../data/content";
import { img } from "../data/images";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We'd love to hear from you"
        subtitle="Questions about admissions, a campus visit, or anything else — reach out and we'll be glad to help."
        image={img.banners[3]}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          {/* Info + map */}
          <div className="space-y-5">
            <Card className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-blue/10 text-brand-blue">
                <MapPin size={20} />
              </span>
              <div>
                <h3 className="font-bold text-brand-ink">Visit us</h3>
                <p className="mt-1 text-sm text-brand-ink/70">
                  {school.address}
                </p>
              </div>
            </Card>
            <Card className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-green/20 text-brand-green">
                <Mail size={20} />
              </span>
              <div>
                <h3 className="font-bold text-brand-ink">Email</h3>
                <a
                  href={`mailto:${school.email}`}
                  className="mt-1 block text-sm text-brand-blue"
                >
                  {school.email}
                </a>
              </div>
            </Card>
            <Card className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-blue/10 text-brand-blue">
                <Phone size={20} />
              </span>
              <div>
                <h3 className="font-bold text-brand-ink">Call</h3>
                <a
                  href={school.phoneHref}
                  className="mt-1 block text-sm text-brand-blue"
                >
                  {school.phone}
                </a>
              </div>
            </Card>
            <iframe
              title="Anand Niketan Satellite Campus location"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                school.mapsQuery
              )}&output=embed`}
              className="h-64 w-full rounded-2xl border border-black/5 shadow-soft"
              loading="lazy"
            />
          </div>

          {/* Form (UI only) */}
          <Card>
            <h3 className="text-xl font-bold text-brand-ink">Send a message</h3>
            {sent ? (
              <p className="mt-6 rounded-xl bg-brand-green/15 p-4 text-brand-ink">
                Thank you! Your message has been noted — our team will get back
                to you shortly.
              </p>
            ) : (
              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full name" name="name" />
                  <Field label="Phone" name="phone" type="tel" />
                </div>
                <Field label="Email" name="email" type="email" />
                <div>
                  <label className="text-sm font-medium text-brand-ink/80">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="mt-1.5 w-full rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
                  />
                </div>
                <button type="submit" className="btn-blue w-full sm:w-auto">
                  <Send size={16} /> Send message
                </button>
              </form>
            )}
          </Card>
        </div>
      </Section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-brand-ink/80">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="mt-1.5 w-full rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
      />
    </div>
  );
}
