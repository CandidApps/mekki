import Link from "next/link";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  ctaHref?: string;
  ctaLabel?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  ctaHref = "/contact#appointment",
  ctaLabel = "Request an Appointment",
}: PageHeroProps) {
  return (
    <section className="section-hero surface-paper">
      <div className="container-site">
        {eyebrow ? (
          <p className="text-sm font-semibold tracking-[0.16em] text-teal uppercase">{eyebrow}</p>
        ) : null}
        <h1 className="font-display mt-3 max-w-4xl text-4xl leading-tight text-ink md:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-ink-soft">{description}</p>
        <div className="mt-8">
          <Link href={ctaHref} className="btn btn-primary">
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
