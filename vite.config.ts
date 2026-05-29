import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

function seoFilesPlugin() {
  return {
    name: "seo-files-rewrite",
    apply: "build" as const,
    closeBundle() {
      const cfgPath = resolve(__dirname, "src/config.ts");
      if (!existsSync(cfgPath)) return;
      const cfg = readFileSync(cfgPath, "utf8");
      const m = cfg.match(/siteUrl:\s*"([^"]*)"/);
      const siteUrl = m?.[1]?.trim();
      if (!siteUrl) return;
      const url = siteUrl.replace(/\/+$/, "");
      for (const file of ["dist/sitemap.xml", "dist/robots.txt"]) {
        const p = resolve(__dirname, file);
        if (!existsSync(p)) continue;
        writeFileSync(p, readFileSync(p, "utf8").replace(/https:\/\/example\.com/g, url));
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), seoFilesPlugin()],
  server: {
    port: 5173,
    open: true,
    allowedHosts: true,
  },
  preview: {
    allowedHosts: true,
  },
});
