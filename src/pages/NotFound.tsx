import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="wrap flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="text-7xl font-extrabold text-brand-blue">404</p>
      <h1 className="mt-4 text-2xl font-bold text-brand-ink">
        Page not found
      </h1>
      <p className="mt-2 text-brand-ink/60">
        The page you're looking for doesn't exist or has moved.
      </p>
      <Link to="/" className="btn-blue mt-8">
        Back to home
      </Link>
    </section>
  );
}
