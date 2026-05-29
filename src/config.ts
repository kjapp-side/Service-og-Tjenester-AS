export type ServiceKey =
  | "renovation"
  | "pipe"
  | "hammer"
  | "brush"
  | "trowel"
  | "bath";

export type WhyKey = "badge" | "star" | "handshake" | "broom";

export type ServiceItem = {
  title: string;
  description: string;
  icon: ServiceKey;
};

export type WhyPoint = {
  title: string;
  description: string;
  icon: WhyKey;
};

export type HourRow = { day: string; time: string };

export type Review = {
  name: string;
  location: string;
  text: string;
  rating: number;
  source?: string;
};

export const CONFIG = {
  businessName: "Service og Tjenester AS",
  shortName: "Service og Tjenester",
  tagline: "Profesjonell maler i Alta",
  owner: "Eivind Thorbjørnsen",
  phone: "45 66 28 27",
  email: "eivindlevin@gmail.com",
  address: "Knut Kvens vei 26, 9514 Alta",
  town: "Alta",
  region: "Troms og Finnmark",
  serviceArea: "Alta og omegn",
  foundedYear: 2018,

  ratings: {
    google: { score: 4.6, count: 7 },
  },

  seo: {
    title:
      "Service og Tjenester AS | Profesjonell maler i {town}",
    description:
      "Profesjonell malerservice i {town}. Innvendig og utvendig maling, tapetsering og overflatebehandling. Serviceinnstilt og pålitelig.",
    businessType: "Painter",
    postalCode: "9514",
    locale: "nb_NO",
    siteUrl: "",
    ogImage: "",
    keywords:
      "maler Alta, malerservice Alta, innvendig maling Alta, utvendig maling Finnmark, maler Troms og Finnmark, håndverker Alta",
  },

  hero: {
    eyebrow: "Profesjonell maler i {town}",
    headline: "Malerarbeid med kvalitet og service",
    subtitle: "Serviceinnstilt, pålitelig og grundig.",
    description:
      "Vi leverer profesjonelt malerarbeid i Alta og omegn. Fra innvendig oppussing til utvendig vedlikehold, alltid med fokus på kvalitet og kundetilfredshet.",
    primaryCtaLabel: "Få gratis pristilbud",
    secondaryCtaLabel: "Ring oss nå",
  },

  services: {
    eyebrow: "Tjenester",
    heading: "Alt innen malerarbeid",
    description:
      "Enten du skal pusse opp stua, male huset utvendig eller trenger hjelp med tapetsering, vi leverer kvalitet fra start til slutt.",
    items: [
      {
        title: "Innvendig maling",
        description:
          "Vegger, tak og listverk. Vi sørger for jevnt resultat med riktig forarbeid og kvalitetsmaling.",
        icon: "brush",
      },
      {
        title: "Utvendig maling",
        description:
          "Husfasader, garasjer og terrasser. Grundig forarbeid og værbestandig maling som varer i nordnorsk klima.",
        icon: "renovation",
      },
      {
        title: "Tapetsering",
        description:
          "Profesjonell tapetsering med presist arbeid. Vi hjelper gjerne med valg av tapet og mønster.",
        icon: "trowel",
      },
      {
        title: "Våtromsmaling",
        description:
          "Spesialmaling for bad og våtrom. Fuktbestandige produkter og fagmessig utførelse.",
        icon: "bath",
      },
      {
        title: "Sparkling og underarbeid",
        description:
          "Grundig sparkling, sliping og grunnarbeid for et perfekt sluttresultat. Vi tar oss tid til detaljene.",
        icon: "hammer",
      },
      {
        title: "Beising og lakkering",
        description:
          "Treflater, panel og møbler. Vi beiser, lakkerer og oljer for et naturlig og holdbart resultat.",
        icon: "pipe",
      },
    ] as ServiceItem[],
  },

  whyUs: {
    eyebrow: "Hvorfor velge oss",
    heading: "Kvalitet, service og pålitelighet",
    points: [
      {
        title: "Topp service",
        description:
          "Kundene våre fremhever vår serviceinnstilling. Vi er hyggelige, fleksible og enkle å samarbeide med.",
        icon: "star",
      },
      {
        title: "Ryddig og punktlig",
        description:
          "Vi kommer når vi har avtalt, holder deg oppdatert og rydder etter oss når jobben er ferdig.",
        icon: "broom",
      },
      {
        title: "Grundig forarbeid",
        description:
          "Et godt malerresultat starter med riktig underarbeid. Vi kutter ingen hjørner.",
        icon: "handshake",
      },
      {
        title: "Lokalkjent i Alta",
        description:
          "Vi kjenner forholdene i Nord-Norge og vet hva som trengs for å tåle det arktiske klimaet.",
        icon: "badge",
      },
    ] as WhyPoint[],
  },

  reviews: {
    eyebrow: "Omtaler",
    heading: "Hva kundene sier",
    description:
      "Vi er stolte av tilbakemeldingene vi får fra kundene våre.",
    items: [
      {
        name: "Kenneth Pryneid Hansen",
        location: "1 år siden",
        text: "Listet etter dårlig jobb fra annen entreprenør, hyggelig og serviceinnstilt!",
        rating: 5,
        source: "Google",
      },
      {
        name: "Eivind Fermann",
        location: "5 år siden",
        text: "Topp service",
        rating: 5,
        source: "Google",
      },
      {
        name: "Svein Arne Kristiansen",
        location: "7 år siden",
        text: "Anbefales!",
        rating: 5,
        source: "Google",
      },
    ] as Review[],
  },

  hours: [
    { day: "Mandag – Fredag", time: "07:00 – 17:00" },
    { day: "Lørdag", time: "Etter avtale" },
    { day: "Søndag", time: "Stengt" },
  ] as HourRow[],

  contact: {
    eyebrow: "Kontakt",
    heading: "Ta kontakt for et uforpliktende tilbud",
    description:
      "Ring eller send oss en melding. Vi gir deg gjerne et pristilbud basert på jobben som skal gjøres.",
  },

  nav: [
    { href: "#tjenester", label: "Tjenester" },
    { href: "#hvorfor-oss", label: "Hvorfor oss" },
    { href: "#omtaler", label: "Omtaler" },
    { href: "#kontakt", label: "Kontakt" },
  ],
} as const;

export type AppConfig = typeof CONFIG;

export function fillTemplate(s: string): string {
  const y = new Date().getFullYear();
  return s
    .replace(/\{businessName\}/g, CONFIG.businessName)
    .replace(/\{shortName\}/g, CONFIG.shortName)
    .replace(/\{tagline\}/g, CONFIG.tagline)
    .replace(/\{phone\}/g, CONFIG.phone)
    .replace(/\{email\}/g, CONFIG.email)
    .replace(/\{address\}/g, CONFIG.address)
    .replace(/\{town\}/g, CONFIG.town)
    .replace(/\{region\}/g, CONFIG.region)
    .replace(/\{serviceArea\}/g, CONFIG.serviceArea)
    .replace(/\{year\}/g, String(CONFIG.foundedYear))
    .replace(/\{currentYear\}/g, String(y))
    .replace(/\{years\}/g, String(y - CONFIG.foundedYear));
}
