import { CONFIG, fillTemplate } from "../config";

export default function Hero() {
  const telHref = `tel:${CONFIG.phone.replace(/\s/g, "")}`;
  const h = CONFIG.hero;

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy text-white pt-24 sm:pt-28"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-hero-grid opacity-50"
        style={{ backgroundSize: "44px 44px" }}
      />
      <div
        aria-hidden
        className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand/20 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-brand/10 blur-3xl"
      />

      <div className="container-px relative grid grid-cols-1 gap-10 pb-20 sm:pb-24 lg:grid-cols-12 lg:items-center lg:gap-x-12 lg:gap-y-10 lg:pb-32 lg:pt-12">
        <div className="lg:col-span-7 lg:col-start-1 lg:row-start-1">
          <span className="section-eyebrow-on-dark reveal">
            {fillTemplate(h.eyebrow)}
          </span>
          <h1 className="reveal mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {fillTemplate(h.headline)}
          </h1>
          <p className="reveal mt-5 text-xl font-medium text-slate-200 sm:text-2xl">
            {h.subtitle}
          </p>
          <p className="reveal mt-4 max-w-xl text-base text-slate-300 sm:text-lg">
            {h.description}
          </p>
        </div>

        <div className="lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 bg-navy-soft shadow-2xl">
              <img src="/hero.jpg" alt={CONFIG.businessName} className="h-full w-full object-cover" />
            </div>

            <div className="absolute -top-4 -right-2 hidden rounded-xl border border-white/10 bg-white px-4 py-3 shadow-card sm:right-4 lg:block">
              <div className="flex items-center gap-3">
                <div className="flex text-brand">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="m12 2 3 7 7 .6-5.4 4.7L18 22l-6-3.8L6 22l1.4-7.7L2 9.6 9 9z" />
                    </svg>
                  ))}
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-ink-mute">
                    Google
                  </div>
                  <div className="text-sm font-semibold text-ink">
                    {CONFIG.ratings.google.score} · {CONFIG.ratings.google.count} anmeldelser
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 lg:col-start-1 lg:row-start-2">
          <div className="reveal flex flex-col gap-3 sm:flex-row">
            <a href="#kontakt" className="btn-primary">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
              {h.primaryCtaLabel}
            </a>
            <a href={telHref} className="btn-ghost-dark">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
              </svg>
              {h.secondaryCtaLabel} {CONFIG.phone}
            </a>
          </div>

          <div className="reveal mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-300">
            <span className="flex items-center gap-2">
              <Check />
              {CONFIG.ratings.google.score} ★ på Google
            </span>
            <span className="flex items-center gap-2">
              <Check />
              Innvendig og utvendig
            </span>
            <span className="flex items-center gap-2">
              <Check />
              Gratis pristilbud
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Check() {
  return (
    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand/20 text-brand-light">
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    </span>
  );
}
