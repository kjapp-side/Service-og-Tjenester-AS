# template-mekaniker

Config-drevet nettside for norske bilverksteder. Alt innhold styres fra én fil: `src/config.ts`.

## Kom i gang

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # produksjonsbygg til /dist
```

## Ny kunde — sjekkliste (5–15 min)

Rediger kun `src/config.ts`. Etterpå: `npm run build` og last opp `/dist`.

### 1. Grunnleggende info
| Felt | Eksempel |
| --- | --- |
| `businessName` | `"OSLO BIL & SERVICE AS"` |
| `shortName` | `"OSLO BIL & SERVICE"` *(brukes i logo/footer)* |
| `tagline` | `"Verkstedet som tar vare på bilen din"` |
| `phone` / `email` / `address` / `town` | kundens verdier |
| `foundedYear` | årstall — brukes til "X år i drift" |
| `orgNumber` | organisasjonsnummer |

### 2. Farger (gir hver kunde unikt preg)
Under `theme`:
- `primary` — hovedfarge (knapper, aksenter). F.eks. `#D62828` (rød), `#2E86AB` (blå), `#F4A259` (gul-orange).
- `primaryDark` / `primaryLight` — litt mørkere/lysere variant.
- `bg` / `bgDeep` / `bgSoft` — bakgrunnsnyanser. Behold `#1a2332`-familien for mørkt look, eller prøv `#0f1e1c` (grønn-svart), `#1c1a22` (lilla-svart).
- `headingFont` / `bodyFont` — Google Fonts-navn. Husk å oppdatere `<link>` i `index.html` hvis du velger en annen font enn Oswald/Inter.
- `accentShape` — `"square"`, `"circle"` eller `"diamond"` (logo-ikon-form).

### 3. Bilder
Under `images`:
- `heroBackground`, `heroPortrait`, `about` — bytt ut placeholder-URLer med lokale filer i `/public` (f.eks. `/images/hero.jpg`) eller direktelenker.
- Sett `logo.src` til `/logo.svg` hvis kunden har egen logo. Hvis tom, genereres tekst-logo automatisk.

### 4. Tjenester
Under `services.items` — legg til / fjern / omrokkér. Hver tjeneste har `title`, `description` og `icon`.
Tilgjengelige ikoner: `wrench`, `tire`, `shield`, `brake`, `snow`, `car`, `bolt`, `spark`, `oil`, `battery`.

Gridet justerer seg automatisk til antall tjenester.

### 5. Typewriter-setninger
`services.headingPhrases` — animerte fraser som skrives/slettes i loop. Behold 2–4 setninger av lignende lengde.

### 6. Hvorfor oss
`whyUs.points` — 3 (eller flere) salgspunkter. Ikoner: `bolt`, `shield`, `search`, `clock`, `star`, `heart`.

### 7. Åpningstider, Om oss, Kontakt
Alle tekster er redigerbare. Bruk plassholdere i strenger:
- `{businessName}`, `{shortName}`, `{tagline}`
- `{phone}`, `{email}`, `{address}`, `{town}`
- `{year}` (grunnlagt), `{currentYear}`, `{years}` (antall år i drift)

Eksempel: `"Familieid verksted i {town} siden {year}"` → `"Familieid verksted i Oslo siden 1998"`.

### 8. Kart
Lim inn Google Maps embed-URL i `contact.mapsEmbedSrc`. Tom streng = stilig grå placeholder.

### 9. SEO
`seo.title` og `seo.description` — plassholdere støttes. Settes automatisk i `<head>` ved oppstart.

### 10. Navigasjon og sosiale medier
`nav` — lenker i topp-meny. `social.facebook` / `social.instagram` — tom = skjult.

## Variasjon mellom kunder (samme mal, ulikt uttrykk)

For at ingen to sider skal se helt like ut, varier:
1. **Farge** (`theme.primary`) — viktigste visuelle forskjell
2. **Bakgrunn** (`theme.bg`) — dypere navy vs. grønn-svart vs. lilla-svart
3. **Logo-form** (`theme.accentShape`) — square / circle / diamond
4. **Fonter** — Oswald, Bebas Neue, Barlow Condensed, Teko, Russo One
5. **Bilder** — unike helt.
6. **Rekkefølge/antall tjenester** — 4, 6 eller 8 kort
7. **Typewriter-fraser** — skreddersy språket per kunde

## Produksjonsbygg

```bash
npm run build
```

Ferdig statisk side i `/dist` — last opp til Netlify, Vercel, GitHub Pages, eller hvilken som helst vanlig webhost.

## Struktur

```
src/
  config.ts              ← rediger her per kunde
  App.tsx                ← monterer alle seksjoner
  hooks/
    useTheme.ts          ← dytter CONFIG.theme til CSS-variabler
    useReveal.ts         ← scroll-inn-animasjoner
    useTypewriter.ts     ← skrivemaskin-animasjon
  components/
    Navbar, Hero, Services, WhyUs, Hours, About, Contact, Footer
    Logo.tsx             ← bilde eller tekst-logo
    Icons.tsx            ← delt SVG-ikon-register
  styles/index.css       ← Tailwind + CSS-variabler
```
