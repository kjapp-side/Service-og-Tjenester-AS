/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0F172A",
          soft: "#1E293B",
          mute: "#475569",
        },
        brand: {
          DEFAULT: "#EA580C",
          dark: "#C2410C",
          light: "#F97316",
          tint: "#FFF1E6",
        },
        navy: {
          DEFAULT: "#0B1220",
          deep: "#070C16",
          soft: "#1B2436",
          line: "#2A3346",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          alt: "#F5F6F8",
          line: "#E2E5EC",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(11, 18, 32, 0.04), 0 8px 24px rgba(11, 18, 32, 0.06)",
        card: "0 1px 2px rgba(11, 18, 32, 0.05), 0 2px 12px rgba(11, 18, 32, 0.08)",
        glow: "0 8px 32px rgba(234, 88, 12, 0.25)",
      },
      animation: {
        "fade-up": "fadeUp 0.5s ease-out both",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
