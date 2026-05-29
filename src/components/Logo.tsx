import { CONFIG } from "../config";

export default function Logo({
  className = "",
  variant = "light",
}: {
  className?: string;
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";
  return (
    <div
      className={`flex items-center gap-2.5 text-lg font-bold tracking-tight ${
        isDark ? "text-white" : "text-ink"
      } ${className}`}
    >
      <span className="flex flex-col leading-none">
        <span>{CONFIG.shortName}</span>
        <span
          className={`mt-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] ${
            isDark ? "text-slate-400" : "text-ink-mute"
          }`}
        >
          {CONFIG.serviceArea}
        </span>
      </span>
    </div>
  );
}
