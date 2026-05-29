import { CONFIG } from "../config";

export default function Reviews() {
  const r = CONFIG.reviews;

  return (
    <section id="omtaler" className="bg-white py-20 sm:py-28">
      <div className="container-px">
        <div className="max-w-2xl">
          <span className="section-eyebrow reveal">{r.eyebrow}</span>
          <h2 className="section-heading reveal">{r.heading}</h2>
          <p className="reveal mt-4 text-base text-ink-mute sm:text-lg">
            {r.description}
          </p>
        </div>

        <div className="reveal mt-12 grid grid-cols-1 gap-3 sm:gap-6">
          <RatingCard
            platform="Google"
            score={String(CONFIG.ratings.google.score).replace(".", ",")}

            outOf="5"
            sub={`${CONFIG.ratings.google.count} anmeldelser`}
          />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {r.items.map((review) => (
            <article
              key={`${review.name}-${review.source}`}
              className="card reveal flex flex-col"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-0.5 text-brand">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <svg
                      key={i}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="m12 2 3 7 7 .6-5.4 4.7L18 22l-6-3.8L6 22l1.4-7.7L2 9.6 9 9z" />
                    </svg>
                  ))}
                </div>
                {review.source && (
                  <span className="rounded-full bg-surface-alt px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-ink-mute">
                    {review.source}
                  </span>
                )}
              </div>
              <p className="mt-4 flex-1 text-base leading-relaxed text-ink-soft">
                "{review.text}"
              </p>
              <div className="mt-6 border-t border-surface-line pt-4">
                <div className="text-sm font-semibold text-ink">
                  {review.name}
                </div>
                <div className="text-xs text-ink-mute">{review.location}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function RatingCard({
  platform,
  score,
  outOf,
  sub,
}: {
  platform: string;
  score: string;
  outOf: string;
  sub: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-surface-line bg-surface-alt p-4 sm:gap-5 sm:p-7">
      <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-brand text-white shadow-glow sm:h-16 sm:w-16 sm:rounded-2xl">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="sm:h-8 sm:w-8"
        >
          <path d="m12 2 3 7 7 .6-5.4 4.7L18 22l-6-3.8L6 22l1.4-7.7L2 9.6 9 9z" />
        </svg>
      </div>
      <div className="min-w-0">
        <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-mute sm:text-xs">
          {platform}
        </div>
        <div className="mt-0.5 flex items-baseline gap-1 sm:mt-1">
          <span className="text-2xl font-bold text-ink sm:text-3xl">
            {score}
          </span>
          <span className="text-xs text-ink-mute sm:text-sm">/ {outOf}</span>
        </div>
        <div className="text-xs text-ink-soft sm:text-sm">{sub}</div>
      </div>
    </div>
  );
}
