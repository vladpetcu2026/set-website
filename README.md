# sustainabletech.ro

Website pentru **SET / Sustainable EdTech Romania** — site marketing static bilingv (RO + EN).

**Stack:** Astro 5 + Tailwind 3 + TypeScript. Build static, deploy pe Vercel, DNS pe Cloudflare.

---

## Comenzi

```bash
npm install      # instaleaza dependentele
npm run dev      # dev server pe http://localhost:4321
npm run build    # build static in ./dist/
npm run preview  # serveste build-ul local
```

## Structura

```
src/
  brand/           tokens.css + tailwind preset (single source of truth pentru identitate)
  components/      componente Astro reutilizabile (Monogram, Button, Tag, Card, Kpi, Nav, Footer)
    sections/      sectiuni single-page (Hero, ReadyGo, ForWhom, Services, ...)
  i18n/            ro.ts + en.ts (continut copy in TS, type-safe)
  layouts/         Base.astro (HTML + meta + Schema.org) + LegalLayout.astro (pagini legale)
  pages/
    index.astro              /  → RO home
    termeni.astro            /termeni
    confidentialitate.astro  /confidentialitate
    cookies.astro            /cookies
    404.astro                404
    en/
      index.astro            /en/ → EN home
      terms.astro            /en/terms
      privacy.astro          /en/privacy
      cookies.astro          /en/cookies
  styles/          global.css (imports tokens + components.css + Tailwind) + components.css (.set-* primitives)
public/
  logo/            SVG-uri logo SET
  robots.txt
```

## Identitate vizuala

Tot sistemul de design vine din `../handoff/` (folder paralel cu acest repo).
Reguli stricte (vezi `../handoff/CLAUDE.md`):

- **Doar tokens.** Nicio culoare hex ad-hoc.
- **Spline Sans Mono** singurul font.
- **Brut:** borduri 1.5–2px, border-radius 0, fara shadow, gradient, emoji, animatii la scroll.
- **Copy fara diacritice.**
- **Fara stock images.**

## Bilingv RO/EN

- `/` → RO (default, configurat in `astro.config.mjs`)
- `/en/` → EN
- Switcher in Nav, sus dreapta.
- Continut in `src/i18n/ro.ts` + `src/i18n/en.ts` (TypeScript ca single source).
- Type-safety: `en` este tipat ca `Messages` (derivat din `ro`), deci structura ramane sincronizata.

## Pagini legale

- `/termeni` + `/en/terms` — Termeni si conditii
- `/confidentialitate` + `/en/privacy` — Politica de confidentialitate (GDPR-aware)
- `/cookies` + `/en/cookies` — Politica de cookies (minimal — nu folosim cookies de tracking)

## SEO

- Meta `title` + `description` per pagina (din `Base.astro` props).
- **Open Graph** + Twitter Card pe toate paginile (folosesc `/logo/og-image.svg` ca imagine).
- **Schema.org Organization** JSON-LD embedded in `<head>`.
- `hreflang` pe RO + EN + x-default.
- Sitemap auto-generat la build (`@astrojs/sitemap`) → `/sitemap-index.xml`.
- `public/robots.txt` pointeaza la sitemap.

## Date juridice (footer + Schema.org)

`SUSTAINABLE EDTECH ROMANIA S.R.L. · CUI: RO41226189 · J2019002422354 · contact@sustainabletech.ro`

**Adresa sediului NU se publica** pe site (decizie privacy 13.05.2026). Ramane in ONRC public record pentru cei care chiar au nevoie sa o verifice formal.

---

## Deploy pe Vercel

Recomandare: deployment continuu din GitHub.

1. Push acest repo pe GitHub privat (recomandare: nume `set-website` sub contul tau).
2. Conecteaza-l la Vercel: <https://vercel.com/new> → Import Git Repository → alege `set-website`.
3. Framework Preset: **Astro** (Vercel il detecteaza automat).
4. Build Command: `npm run build` (default).
5. Output Directory: `dist` (default).
6. Deploy → primesti un URL `set-website-xxx.vercel.app` pentru preview.
7. **Adauga domeniul custom** in Vercel: Settings → Domains → `sustainabletech.ro` + `www.sustainabletech.ro`.
8. Vercel iti afiseaza ce CNAME / A records sa adaugi in **Cloudflare DNS**:
   - `sustainabletech.ro` → A record la IP-ul Vercel (e.g., `76.76.21.21`)
   - `www.sustainabletech.ro` → CNAME la `cname.vercel-dns.com`
9. In Cloudflare DNS, adauga records. **Pune Proxy status pe „DNS only" (norișor gri)**, NU Proxied — Vercel are propriu CDN, dublu CDN strica.
10. Asteapta verificare Vercel (~1-5 min). Site-ul e live pe `sustainabletech.ro`.

## Cloudflare Web Analytics (optional, gratuit)

Pentru analytics privacy-friendly fara cookies:

1. Cloudflare dashboard → `sustainabletech.ro` → **Analytics & Logs** → **Web Analytics** → **Enable**.
2. Copy **JSON Beacon Token** (string UUID).
3. In `src/layouts/Base.astro`, decomenteaza scriptul Cloudflare si inlocuieste `BEACON_TOKEN_HERE` cu valoarea ta.
4. Build + redeploy.

## Email setup (deja configurat — referinta)

- **Receive:** Cloudflare Email Routing forwardeaza `contact@sustainabletech.ro` la Gmail-ul personal.
- **Send:** Zoho Mail Free Workplace + Gmail "Send as" + App Password SMTP (`smtp.zoho.eu:465 SSL`).
- **SPF merged:** `v=spf1 include:zohomail.eu include:_spf.mx.cloudflare.net ~all`
- **DKIM:** `zmail._domainkey` (Zoho) + `cf2024-1._domainkey` (Cloudflare).
- **DMARC:** `_dmarc` → `v=DMARC1; p=none; rua=mailto:contact@sustainabletech.ro` (de adaugat de Vlad).

## Imbunatatiri viitoare (nice to have)

- **Formular contact** cu Formspree/Web3Forms — alternativa la mailto: pentru utilizatorii fara client de mail. Cont la <https://formspree.io> (free 50 submissions/luna).
- **OG image rasterizat** ca PNG 1200x630 (acum folosim SVG-ul; cele mai multe platforme accepta, dar PNG e safer).
- **Foto profesionala Vlad** in sectiunea Despre (acum placeholder cu monograma + initiale).
- **Blog / actualizari** daca SET decide sa publice continut periodic.

---

*Construit conform plan-website-set-eu.md v8 (13.05.2026).*
