# Media assets

Folder pentru imagini grele si video care nu fac parte din identitatea fixă.

## Status curent (15.05.2026): folder gol

Anterior conținea `hero-sting.mp4`, dar **sting-ul a fost rescris în CSS** direct
în `src/components/sections/Hero.astro` (vezi sectiunea de animatii CSS). Avantaje
față de varianta video:

- Sub 1 KB payload (CSS keyframes vs ~220 KB MP4)
- Crisp la orice rezoluție (vector text + monogramă SVG)
- Fără request HTTP suplimentar
- Mai ușor de modificat (timing/culori în CSS, nu re-export video)
- Cache cu CSS-ul existent al site-ului

## Daca ai nevoie sa adaugi alte assets video / imagini

Convenții de naming:

| Tip asset | Sufix | Spec recomandat |
|---|---|---|
| Imagine inline | `.jpg` sau `.webp` | max 1920px, <300KB |
| Imagine OG / social | `og-*.png` | 1200×630, <500KB |
| Video scurt | `.mp4` (H.264) | <2MB, fără sunet, faststart |
| Animație simplă | preferat CSS in cod | vezi `Hero.astro` ca exemplu |

Adaugă o linie în tabelul de mai sus când introduci un asset nou ca alți
dezvoltatori / agenți să știe.
