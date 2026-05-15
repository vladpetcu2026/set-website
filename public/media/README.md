# Media assets

Folder pentru video / imagini grele care nu fac parte din identitatea fixa.

## Convențiile fișierelor așteptate de cod

| Fișier | Folosit de | Spec |
|---|---|---|
| `hero-sting.mp4` | `Hero.astro` (background sting) | H.264 main profile, 1920×1080 sau 1080×1080, max ~2 MB, **fără sunet**, durata 8-12 sec, ultimul frame = monograma SET pe galben (continuitate cu varianta statică) |
| `hero-sting.webm` | `Hero.astro` fallback | VP9 codec, same content as mp4 — folosit de Firefox / Safari unde MP4 ar putea fi mai mare; **opțional, dacă mp4 e sub 2MB nu e necesar** |
| `hero-sting-poster.jpg` | `Hero.astro` poster | JPG, 1920×1080 (sau matching video aspect), ~50KB. Prima frame a video-ului. Apare instant cât timp video-ul se încarcă. |

## Convenții de design pentru Ready? Set. Go. sting

Concept (vezi conversația 2026-05-15):

```
00:00  Black background, complet linistit
00:01  "Ready?" apare cobalt din stânga, cursor pulsând
00:03  pauză scurtă (întrebare în suspendare)
00:04  "Set." apare cu badge galben în centru
00:05  pauză scurtă
00:06  "Go!" apare cu impact lime
00:07  cele 3 cuvinte aliniate pe o linie
00:08  monograma SET uriașă apare suprapusă
00:10  "Sustainable EdTech Romania" tagline jos
00:11  "sustainabletech.ro" finest line
00:12  hold pe frame final (fundal galben + monogramă neagră)
```

Frame final TREBUIE să fie identic cu varianta statică din hero — fundal `#F0DB4F` (set-yellow), monogramă SET neagră cu E la 50% opacity. Astfel când video se termină, frame-ul rămâne și se aliniează vizual cu identitatea statică, fără salt.

## Producția cu AI tool

Tools posibile (oricare merge):
- **Recraft / Recreate** — image gen frame-by-frame + export ca video
- **Runway** — text-to-video sau image-to-video
- **Pika Labs** — animație din prompts
- **Veo / Sora** — generation video full
- **Synthesia** — dacă vrei voice avatar (nu cazul aici)
- **CapCut / Premiere / DaVinci Resolve** — montaj manual din imagini AI gen + text overlays

Asseturi pre-existente:
- Monograma SVG: `../logo/set-monogram-black.svg`, `set-monogram-yellow.svg`
- Tokens culori: vezi `../../src/brand/tokens.css` (set-yellow `#F0DB4F`, set-cobalt `#1D4ED8`, set-lime `#84CC16`, set-black `#0B0B0B`)
- Font: Spline Sans Mono (Google Fonts, weights 400/500/600/700)

## Cum activezi video-ul după producție

1. Exportă din tool-ul tău ca `hero-sting.mp4` (H.264, mute, <2MB).
2. Plasează fișierul în acest folder: `public/media/hero-sting.mp4`.
3. (Optional) Exportă primul frame ca `hero-sting-poster.jpg` și plasează-l în același folder.
4. Commit + push. Vercel detectează și deployează.
5. Video apare în Hero peste monograma statică, autoplay muted, play once.
6. Dacă fișierul lipsește, `<video>` se ascunde automat (`onerror`) și monograma statică rămâne vizibilă — nu se rupe nimic.

## Comportament tehnic detaliat

- **Autoplay:** da, browserele moderne permit autoplay doar pe video mute. Acest video e mut by design.
- **Loop:** NU. Joacă o singură dată per page load. Ultimul frame (monograma) rămâne.
- **`prefers-reduced-motion`:** dacă utilizatorul are setarea de OS activată, video-ul NU se afișează, monograma statică rămâne.
- **Eșec încărcare:** `onerror` handler ascunde video-ul, monograma statică continuă să funcționeze.
- **Mobile:** `playsinline` atribut prezent → nu deschide full-screen pe iOS.
- **Lazy load:** `preload="metadata"` → fișierul nu e descărcat complet pe pagini noi care nu sunt hero.
- **Easter egg tap pe monogramă:** rămâne funcțional după ce video-ul se termină (când static monogram devine vizibil dedesubt).

## Notă finală

Dacă vrei să adaugi alte clipuri în viitor (case study reel, demo capture, etc.), folosește același folder cu naming convention clar. Adaugă o linie în tabel sus.
