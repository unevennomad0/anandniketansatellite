type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
};

export default function PageHero({ eyebrow, title, subtitle, image }: Props) {
  return (
    <section className="relative overflow-hidden bg-brand-dark">
      <img
        src={image}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/85 to-brand-blue/40" />
      <div className="wrap relative py-20 text-white sm:py-24">
        {eyebrow && (
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-green">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
