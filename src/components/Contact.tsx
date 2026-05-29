import { CONFIG } from "../config";

export default function Contact() {
  const c = CONFIG.contact;
  const telHref = `tel:${CONFIG.phone.replace(/\s/g, "")}`;

  return (
    <section id="kontakt" className="bg-surface-alt py-20 sm:py-28">
      <div className="container-px">
        <div className="max-w-2xl">
          <span className="section-eyebrow reveal">{c.eyebrow}</span>
          <h2 className="section-heading reveal">{c.heading}</h2>
          <p className="reveal mt-4 text-base text-ink-mute sm:text-lg">
            {c.description}
          </p>
        </div>

        <div className="reveal mt-12 overflow-hidden rounded-2xl border border-surface-line bg-white shadow-soft">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 sm:p-8">
              <ul className="space-y-5 text-sm">
                <Row icon={<IconPhone />} label="Telefon">
                  <a
                    href={telHref}
                    className="text-base font-semibold text-brand hover:text-brand-dark"
                  >
                    {CONFIG.phone}
                  </a>
                </Row>
                <Row icon={<IconMail />} label="E-post">
                  <a
                    href={`mailto:${CONFIG.email}`}
                    className="font-semibold text-ink hover:text-brand"
                  >
                    {CONFIG.email}
                  </a>
                </Row>
                <Row icon={<IconPin />} label="Adresse">
                  <span className="text-ink-soft">{CONFIG.address}</span>
                </Row>
              </ul>
            </div>

            <div className="border-t border-surface-line bg-surface-alt p-6 sm:p-8 md:border-l md:border-t-0">
              <div className="text-xs font-semibold uppercase tracking-wider text-ink-mute">
                Åpningstider
              </div>
              <ul className="mt-4 divide-y divide-surface-line">
                {CONFIG.hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex items-center justify-between py-2.5 text-sm"
                  >
                    <span className="text-ink-soft">{h.day}</span>
                    <span className="font-semibold text-ink">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-3">
      <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-brand-tint text-brand">
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <div className="text-xs uppercase tracking-wider text-ink-mute">
          {label}
        </div>
        <div className="mt-0.5 break-words">{children}</div>
      </div>
    </li>
  );
}

function IconPin() {
  return (
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
      <path d="M12 22s-8-7-8-13a8 8 0 0 1 16 0c0 6-8 13-8 13z" />
      <circle cx="12" cy="9" r="3" />
    </svg>
  );
}
function IconPhone() {
  return (
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function IconMail() {
  return (
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
  );
}
