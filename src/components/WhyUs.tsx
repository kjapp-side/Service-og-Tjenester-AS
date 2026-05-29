import { useEffect, useState } from "react";
import { CONFIG } from "../config";
import { Icon } from "./Icons";
import { useTypewriter } from "../hooks/useTypewriter";

const PHRASES_DESKTOP = [
  "topp service",
  "grundig forarbeid",
  "fornøyde kunder",
];
const PHRASES_MOBILE = ["topp service", "fornøyde kunder"];

export default function WhyUs() {
  const w = CONFIG.whyUs;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const typed = useTypewriter(isMobile ? PHRASES_MOBILE : PHRASES_DESKTOP, {
    typeSpeed: 75,
    deleteSpeed: 40,
    holdTime: 1800,
  });

  return (
    <section id="hvorfor-oss" className="bg-navy text-white py-20 sm:py-28">
      <div
        aria-hidden
        className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent"
      />
      <div className="container-px">
        <div className="max-w-3xl">
          <span className="section-eyebrow-on-dark reveal">{w.eyebrow}</span>
          <h2 className="section-heading-on-dark reveal">
            Kvalitet og{" "}
            <span className="inline-block text-brand-light">
              {typed}
              <span
                aria-hidden
                className="ml-0.5 inline-block w-[3px] -translate-y-1 animate-pulse bg-brand-light align-middle"
                style={{ height: "0.9em" }}
              />
            </span>
          </h2>
          <p className="reveal mt-4 text-base text-slate-300 sm:text-lg">
            Vi tar oss tid til å gjøre jobben skikkelig, fra grundig forarbeid
            til siste strøk. Du får et resultat du kan være stolt av.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {w.points.map((p) => (
            <div
              key={p.title}
              className="reveal rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition hover:border-brand/40 hover:bg-white/10 sm:p-6"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-white shadow-glow sm:h-12 sm:w-12">
                <Icon name={p.icon} size={22} />
              </span>
              <h3 className="mt-4 text-base font-semibold text-white sm:mt-5 sm:text-lg">
                {p.title}
              </h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-slate-300 sm:mt-2 sm:text-sm">
                {p.description}
              </p>
            </div>
          ))}
        </div>

        <div className="reveal mt-14 grid grid-cols-1 gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 md:grid-cols-2 md:gap-8">
          <RatingStat
            score={String(CONFIG.ratings.google.score).replace(".", ",")}
            label="Google"
            sub={`${CONFIG.ratings.google.count} anmeldelser`}
          />
          <RatingStat score="100 %" label="Kvalitetsgaranti" sub="Grundig og pålitelig" />
        </div>
      </div>
    </section>
  );
}

function RatingStat({
  score,
  label,
  sub,
}: {
  score: string;
  label: string;
  sub: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-14 w-14 flex-none items-center justify-center rounded-xl bg-brand/10 text-brand-light">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
          <path d="m12 2 3 7 7 .6-5.4 4.7L18 22l-6-3.8L6 22l1.4-7.7L2 9.6 9 9z" />
        </svg>
      </div>
      <div>
        <div className="text-2xl font-bold text-white">{score}</div>
        <div className="text-xs uppercase tracking-wider text-slate-400">
          {label}
        </div>
        <div className="text-xs text-slate-400">{sub}</div>
      </div>
    </div>
  );
}
