import { useEffect, useState } from "react";
import { CONFIG } from "../config";
import Logo from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const telHref = `tel:${CONFIG.phone.replace(/\s/g, "")}`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${
        scrolled
          ? "border-b border-white/10 bg-navy/90 backdrop-blur"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-px flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center">
          <Logo variant="dark" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {CONFIG.nav.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-200 transition hover:text-brand-light"
            >
              {l.label}
            </a>
          ))}
          <a
            href={telHref}
            className="inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark"
          >
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
            {CONFIG.phone}
          </a>
        </nav>

        <button
          aria-label="Meny"
          className="md:hidden rounded-lg border border-white/20 p-2 text-slate-200"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-navy">
          <div className="container-px flex flex-col gap-1 py-4">
            {CONFIG.nav.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-brand-light"
              >
                {l.label}
              </a>
            ))}
            <a
              href={telHref}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-4 py-3 text-sm font-semibold text-white hover:bg-brand-dark"
              onClick={() => setOpen(false)}
            >
              Ring {CONFIG.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
