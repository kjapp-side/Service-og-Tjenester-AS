import { CONFIG } from "../config";
import { Icon } from "./Icons";

export default function Services() {
  const s = CONFIG.services;

  return (
    <section id="tjenester" className="bg-white py-20 sm:py-28">
      <div className="container-px">
        <div className="max-w-2xl">
          <span className="section-eyebrow reveal">{s.eyebrow}</span>
          <h2 className="section-heading reveal">{s.heading}</h2>
          <p className="reveal mt-4 text-base text-ink-mute sm:text-lg">
            {s.description}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
          {s.items.map((item) => (
            <div
              key={item.title}
              className="reveal group rounded-xl border border-surface-line bg-white p-4 shadow-soft transition hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-card sm:p-6"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-tint text-brand sm:h-11 sm:w-11">
                <Icon name={item.icon} size={20} />
              </span>
              <h3 className="mt-4 text-base font-semibold text-ink sm:mt-5 sm:text-lg">
                {item.title}
              </h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-ink-mute sm:mt-2 sm:text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="reveal mt-12 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-surface-line bg-surface-alt p-6 sm:p-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand">
              Privat og næring
            </p>
            <p className="mt-2 text-base text-ink-soft sm:text-lg">
              Vi tar oppdrag i hele {CONFIG.serviceArea}, fra enkle malejobber
              til komplett oppussing.
            </p>
          </div>
          <a href="#kontakt" className="btn-primary">
            Få gratis pristilbud
          </a>
        </div>
      </div>
    </section>
  );
}
