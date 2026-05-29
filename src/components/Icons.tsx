import type { ServiceKey, WhyKey } from "../config";

type Props = { size?: number; className?: string };

function Svg({
  size = 24,
  className,
  children,
  strokeWidth = 1.75,
}: Props & { children: React.ReactNode; strokeWidth?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {children}
    </svg>
  );
}

const ICONS = {
  renovation: (p: Props) => (
    <Svg {...p}>
      <path d="M3 12 12 3l9 9" />
      <path d="M5 10v10h14V10" />
      <path d="M9 20v-6h6v6" />
    </Svg>
  ),
  pipe: (p: Props) => (
    <Svg {...p}>
      <path d="M3 8h6a3 3 0 0 1 3 3v2a3 3 0 0 0 3 3h6" />
      <path d="M3 6v4M21 14v4" />
    </Svg>
  ),
  hammer: (p: Props) => (
    <Svg {...p}>
      <path d="M15 3 9 9l3 3 6-6-3-3z" />
      <path d="m12 12-8 8 3 3 8-8" />
      <path d="m17 5 4 4" />
    </Svg>
  ),
  brush: (p: Props) => (
    <Svg {...p}>
      <path d="M19.5 3a2 2 0 0 0-2.83 0L9 10.67 13.33 15l7.67-7.67a2 2 0 0 0 0-2.83l-1.5-1.5z" />
      <path d="M9 10.67 5 14.67a2 2 0 0 0 0 2.83L7.5 20 11 16.5" />
      <path d="M3 21h6" />
    </Svg>
  ),
  trowel: (p: Props) => (
    <Svg {...p}>
      <path d="M3 21 21 3" />
      <path d="m14 4 6 6-9 4-1-1 4-9z" />
      <path d="m3 21 4-4" />
    </Svg>
  ),
  bath: (p: Props) => (
    <Svg {...p}>
      <path d="M4 12V6a2 2 0 0 1 4 0v1" />
      <path d="M2 12h20v3a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5v-3z" />
      <path d="M7 20l-1 2M17 20l1 2" />
    </Svg>
  ),
  badge: (p: Props) => (
    <Svg {...p}>
      <path d="M12 2 4 5v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V5l-8-3z" />
      <path d="m9 12 2 2 4-4" />
    </Svg>
  ),
  star: (p: Props) => (
    <Svg {...p}>
      <path d="m12 2 3 7 7 .6-5.4 4.7L18 22l-6-3.8L6 22l1.4-7.7L2 9.6 9 9z" />
    </Svg>
  ),
  handshake: (p: Props) => (
    <Svg {...p}>
      <path d="M11 17 8 14a2 2 0 0 1 0-2.83l5-5a2 2 0 0 1 2.83 0L19 9.34" />
      <path d="m13 19 3-3a2 2 0 0 0 0-2.83l-2-2" />
      <path d="M3 13 7 9l3 3" />
      <path d="m21 11-4 4-3-3" />
    </Svg>
  ),
  broom: (p: Props) => (
    <Svg {...p}>
      <path d="M14 3 21 10" />
      <path d="M8 21h8l2-6H6l2 6z" />
      <path d="M12 15 17 6" />
    </Svg>
  ),
} satisfies Record<ServiceKey | WhyKey, (p: Props) => JSX.Element>;

export function Icon({
  name,
  size,
  className,
}: {
  name: ServiceKey | WhyKey;
  size?: number;
  className?: string;
}) {
  const Cmp = ICONS[name];
  return <Cmp size={size} className={className} />;
}
