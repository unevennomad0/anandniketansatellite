import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { school, navLinks } from "../data/content";
import { img } from "../data/images";

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C21.4 8.65 22 11 22 14.1V21h-4v-6.1c0-1.45-.03-3.3-2-3.3-2 0-2.3 1.57-2.3 3.2V21h-4z" />
    </svg>
  );
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white/80">
      <div className="wrap grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1.3fr]">
        <div>
          <img src={img.footerLogo} alt="Anand Niketan" className="h-14 w-auto" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
            A student-centred school in Ahmedabad where global teaching meets
            Indian values — nurturing confident, curious and self-motivated
            learners.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={school.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-brand-blue"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={school.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-brand-green hover:text-brand-ink"
            >
              <InstagramIcon size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            Explore
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition hover:text-brand-green">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            Get in Touch
          </h4>
          <ul className="mt-4 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-brand-green" />
              <span>{school.address}</span>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="shrink-0 text-brand-green" />
              <a href={`mailto:${school.email}`} className="hover:text-brand-green">
                {school.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="shrink-0 text-brand-green" />
              <a href={school.phoneHref} className="hover:text-brand-green">
                {school.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Anand Niketan Group of Schools. All rights
        reserved.
      </div>
    </footer>
  );
}
