import { CONFIG } from "../config";
import Logo from "./Logo";

export default function Footer() {
  const telHref = `tel:${CONFIG.phone.replace(/\s/g, "")}`;

  return (
    <footer className="bg-navy-deep text-slate-300">
      <div className="container-px py-6 md:hidden">
        <div className="flex flex-col items-center gap-2 text-center text-xs text-slate-500">
          <span>
            © {new Date().getFullYear()} {CONFIG.businessName}
          </span>
          <a href={telHref} className="font-semibold text-white">
            {CONFIG.phone}
          </a>
        </div>
      </div>
      <div className="container-px hidden py-14 md:block">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <Logo variant="dark" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              {CONFIG.tagline}. Profesjonell malerservice for privat og næring.
            </p>
            <a
              href={telHref}
              className="mt-6 inline-block text-2xl font-bold text-white hover:text-brand-light"
            >
              {CONFIG.phone}
            </a>
            <div className="mt-4 flex items-center gap-3">
              <a
                href={`mailto:${CONFIG.email}`}
                aria-label="E-post"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-300 transition hover:border-brand hover:text-brand-light"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Kontakt
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>{CONFIG.address}</li>
              <li>
                <a
                  href={`mailto:${CONFIG.email}`}
                  className="hover:text-white"
                >
                  {CONFIG.email}
                </a>
              </li>
              <li className="text-slate-500">Eier: {CONFIG.owner}</li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Åpningstider
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {CONFIG.hours.map((h) => (
                <li
                  key={h.day}
                  className="flex items-center justify-between gap-4"
                >
                  <span>{h.day}</span>
                  <span className="text-slate-500">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} {CONFIG.businessName}. Alle rettigheter
            reservert.
          </div>
          <div>Betjener {CONFIG.serviceArea}</div>
        </div>
      </div>
    </footer>
  );
}
