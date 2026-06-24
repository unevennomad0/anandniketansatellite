import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Section, SectionHeading, Card } from "../components/ui";
import Reveal from "../components/Reveal";
import { stats, elements, school, results } from "../data/content";
import { img, elementImg, elementPic } from "../data/images";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-dark text-white">
        <img
          src={img.banners[0]}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark/90 to-brand-blue/50" />
        {/* Floating colour blobs */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-blue/30 blur-3xl animate-blob"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-brand-green/20 blur-3xl animate-blob [animation-delay:-7s]"
        />
        <div className="wrap relative py-20 sm:py-28">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-green ring-1 ring-white/10 backdrop-blur-sm">
              <Sparkles size={14} className="animate-pulse" /> Satellite Campus ·
              Ahmedabad
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-6xl">
              Where{" "}
              <span className="bg-gradient-to-r from-brand-green via-white to-brand-blue bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-x">
                Ambition
              </span>{" "}
              <br className="hidden sm:block" /> Finds Direction
            </h1>
            <p className="mt-5 max-w-xl text-base text-white/80 sm:text-lg animate-fade-up [animation-delay:150ms]">
              At Anand Niketan, global teaching meets Indian values. We nurture
              confident, curious and self-motivated learners — ready for the
              world and rooted in who they are.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 animate-fade-up [animation-delay:300ms]">
              <Link
                to="/admissions"
                className="btn-green transition-transform hover:scale-105 active:scale-95"
              >
                Apply for Admission{" "}
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                to="/about"
                className="btn-outline transition-transform hover:scale-105 active:scale-95"
              >
                Discover the School
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-black/5 bg-white">
        <div className="wrap grid grid-cols-2 gap-6 py-12 sm:grid-cols-3 lg:grid-cols-6">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 80}
              className="group text-center"
            >
              <div className="text-3xl font-extrabold text-brand-blue transition-transform duration-300 group-hover:scale-110 sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs leading-snug text-brand-ink/60">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* About teaser */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="grid grid-cols-2 gap-4">
            {elements.map((e, i) => (
              <img
                key={e.key}
                src={elementImg[e.key]}
                alt={`${e.name} — ${e.meaning}`}
                className={`h-44 w-full object-contain transition-transform duration-500 hover:scale-110 hover:-rotate-2 animate-float ${
                  i % 2 ? "mt-6 [animation-delay:-3s]" : ""
                }`}
              />
            ))}
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading
              eyebrow="Who we are"
              title="A school built around the child"
              subtitle="Inspired by Sri Aurobindo, Gijubhai Badheka and J. Krishnamurti, our student-centred approach balances academics with sport, art, debate and theatre — so every learner grows in full."
            />
            <p className="mt-4 text-brand-ink/70">
              Welcoming reception areas, colourful classrooms and creatively
              designed corridors make our campus a place where curiosity and
              design thinking come alive every single day.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-blue hover:gap-3 transition-all"
            >
              More about us <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </Section>

      {/* Four elements */}
      <Section className="bg-[#f5f9fc]">
        <SectionHeading
          center
          eyebrow="Our philosophy"
          title="Where Elements Meet Education"
          subtitle="Four elements shape the spirit of Anand Niketan — fire, air, water and earth — each a promise about how your child will learn and grow."
        />
        <div className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {elements.map((e, i) => (
            <Reveal
              key={e.key}
              delay={i * 120}
              className="group rounded-2xl p-4 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-soft"
            >
              <img
                src={elementPic[e.key]}
                alt={`${e.name} (${e.meaning})`}
                className="mx-auto aspect-[3/2] w-full max-w-[240px] object-contain transition-transform duration-500 group-hover:scale-110"
              />
              <h3 className="mt-4 text-lg font-bold text-brand-ink">
                {e.name}{" "}
                <span className="text-sm font-medium text-brand-blue">
                  · {e.meaning}
                </span>
              </h3>
              <p className="mt-2 text-sm text-brand-ink/65">{e.blurb}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Results */}
      <Section>
        <SectionHeading
          center
          eyebrow="Results 2026"
          title="Excellence, year after year"
          subtitle="Our students continue to shine in the ICSE and ISC examinations."
        />
        <div className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-2">
          {results.map((r, i) => (
            <Reveal key={r.key} delay={i * 140} className="group">
              <Card className="card-hover overflow-hidden p-0">
                <div className="overflow-hidden">
                  <img
                    src={r.key === "isc" ? img.resultIsc : img.resultIcse}
                    alt={r.label}
                    className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-green">
                    {r.grade}
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-brand-ink">
                    {r.label}
                  </h3>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-brand-blue">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl animate-blob"
        />
        <Reveal
          as="div"
          className="wrap flex flex-col items-center gap-6 py-16 text-center text-white"
        >
          <h2 className="max-w-2xl text-3xl font-bold sm:text-4xl">
            Give your child a place to grow with purpose
          </h2>
          <p className="max-w-xl text-white/85">
            Admissions are open. Visit our Satellite campus and see learning
            come alive.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/admissions"
              className="btn-green transition-transform hover:scale-105 active:scale-95"
            >
              Start your enquiry
            </Link>
            <a
              href={school.phoneHref}
              className="btn-outline transition-transform hover:scale-105 active:scale-95"
            >
              Call {school.phone}
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
