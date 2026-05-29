import { useEffect } from "react";
import { CONFIG, fillTemplate } from "../config";

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  if (!content) return;
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`
  );
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertJsonLd(id: string, data: unknown) {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.id = id;
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export function useSEO() {
  useEffect(() => {
    const title = fillTemplate(CONFIG.seo.title);
    const description = fillTemplate(CONFIG.seo.description);
    const url =
      CONFIG.seo.siteUrl ||
      (typeof window !== "undefined" ? window.location.origin : "");

    document.title = title;
    document.documentElement.lang = "no";

    upsertMeta("name", "description", description);
    upsertMeta("name", "keywords", CONFIG.seo.keywords);

    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:locale", CONFIG.seo.locale);
    upsertMeta("property", "og:site_name", CONFIG.businessName);
    if (url) upsertMeta("property", "og:url", url);
    if (CONFIG.seo.ogImage) upsertMeta("property", "og:image", CONFIG.seo.ogImage);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    if (CONFIG.seo.ogImage) upsertMeta("name", "twitter:image", CONFIG.seo.ogImage);

    upsertJsonLd("ld-localbusiness", {
      "@context": "https://schema.org",
      "@type": CONFIG.seo.businessType,
      name: CONFIG.businessName,
      description,
      telephone: CONFIG.phone,
      email: CONFIG.email,
      url: url || undefined,
      image: CONFIG.seo.ogImage || undefined,
      sameAs: [],
      address: {
        "@type": "PostalAddress",
        streetAddress: CONFIG.address,
        postalCode: CONFIG.seo.postalCode,
        addressLocality: CONFIG.town,
        addressRegion: CONFIG.region,
        addressCountry: "NO",
      },
      areaServed: [CONFIG.town, CONFIG.region],
      foundingDate: String(CONFIG.foundedYear),
      founder: { "@type": "Person", name: CONFIG.owner },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: String(CONFIG.ratings.google.score),
        reviewCount: String(CONFIG.ratings.google.count),
        bestRating: "5",
        worstRating: "1",
      },
      makesOffer: CONFIG.services.items.map((s) => ({
        "@type": "Offer",
        name: s.title,
        description: s.description,
      })),
    });
  }, []);
}
