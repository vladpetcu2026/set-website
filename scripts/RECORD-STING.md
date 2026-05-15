# Cum produci hero sting-ul (12 sec, .mp4)

3 pași: **deschizi HTML-ul → înregistrezi ecranul → convertești la MP4.**

## 1. Deschide preview-ul în Chrome

```bash
open "scripts/sting-preview.html"
```

(Sau dublu-click pe fișier în Finder. Trebuie să se deschidă într-un browser modern — Chrome/Safari/Firefox merg toate.)

Vei vedea un dreptunghi pătrat (1080×1080) cu animația care rulează 12 secunde. La final, rămâne pe monograma SET pe galben. Bara neagră de jos cu instrucțiuni e doar pe ecran, **nu apare în înregistrare** dacă cropuiești corect.

**Pentru ca animația să se vadă la mărime completă:**
- Mărește fereastra browser la maximum (Ctrl+Cmd+F sau buton verde maximize)
- Ascunde bara de bookmark-uri (Cmd+Shift+B pe Mac) ca să ai mai mult ecran

## 2. Înregistrează cu macOS screen recorder

Cmd+Shift+5 → bara de tools apare jos.

1. Click pe **"Record Selected Portion"** (al 4-lea buton, dreptunghi cu colțuri întrerupte).
2. Trage să frame-uiești **STRICT dreptunghiul colorat** (animația). Lasă afară bara de help de jos și restul interfaței browser.
3. Click **"Record"** (sau apasă spațiu).
4. Imediat reîncarcă pagina cu **Cmd+R** ca animația să pornească de la T=0.
5. Așteaptă 13 secunde (12 pentru animație + 1 buffer).
6. **Stop**: Cmd+Ctrl+Esc, sau click pe icon-ul stop din menu bar.
7. Macul salvează pe Desktop ca `Screen Recording 2026-... .mov`.

## 3. Convertește MOV → MP4

Macul înregistrează în .mov (codec H.264 by default), care e similar cu .mp4 dar nu universal acceptat de browsere ca `<video>` source. Convertești simplu.

### Opțiunea A — FFmpeg (terminal, gratuit, rapid)

Dacă ai Homebrew:
```bash
brew install ffmpeg
```

Apoi:
```bash
cd ~/Desktop
ffmpeg -i "Screen Recording 2026-XX-XX at XX.XX.XX.mov" \
  -c:v libx264 -preset slow -crf 23 -movflags +faststart \
  -an \
  -vf "scale=1080:1080:flags=lanczos" \
  hero-sting.mp4
```

Explicații:
- `-c:v libx264` → codec H.264 (universal)
- `-crf 23` → calitate ~bună (mai mic = mai bun, mai mare fișier; 23 e default rezonabil)
- `-movflags +faststart` → metadata la început, esențial pt streaming web
- `-an` → fără audio (animația e mută by design)
- `-vf scale=1080:1080` → forțează 1080×1080 (Retina îți va da inițial 2160×2160; downscale la 1080)

Output: ~500KB-1.5MB. Perfect pt site.

### Opțiunea B — Online (fără terminal)

Du-te la <https://cloudconvert.com/mov-to-mp4>:
1. Drag .mov în pagină.
2. Settings → Output: MP4, codec H.264, fără audio.
3. Convert.
4. Download.

Dacă fișierul rezultat e > 2MB, urcă-l pe <https://www.freeconvert.com/video-compressor> și comprimă la sub 2MB.

### Opțiunea C — QuickTime "Export As..."

1. Deschide .mov în QuickTime Player.
2. File → Export As → **1080p**.
3. Salvează — apare ca .mov tot, dar comprimat.
4. Pentru a-l face .mp4, schimbă extensia manual sau folosește A/B.

## 4. Plasează fișierul și deployează

```bash
cd "/Users/vladpetcu/Documents/2026/_Sustainable EdTech Romania/website"

# Plasează MP4-ul în folderul așteptat de cod:
mv ~/Desktop/hero-sting.mp4 public/media/

# (Optional) salvează si primul frame ca poster
# Poți face screenshot la primul frame al video-ului în QuickTime și salva ca JPG:
# - Deschide video în QuickTime → pune pe frame 0 → File → Export As → ca imagine? 
# - Sau folosește ffmpeg: ffmpeg -i public/media/hero-sting.mp4 -vframes 1 public/media/hero-sting-poster.jpg

git add public/media/
git commit -m "add: hero sting video (12 sec, mp4)"
git push
```

Vercel deployează în 1-2 min. Hard refresh pe pagina home și sting-ul apare peste monogramă.

## Troubleshooting

| Problemă | Soluție |
|---|---|
| Video nu apare după push | Verifică în Cloudflare/Vercel Network tab dacă fișierul se încarcă cu 200. Dacă e 404, fișierul nu e în git (verifică `git status`). |
| Video apare dar e prea mare (> 5MB) | Re-export cu `-crf 28` (mai mic file, calitate ușor mai joasă). |
| Animația nu pornește la reload | Browser bug rar. Închide tab, redeschide. |
| Frame final nu se aliniează cu monograma statică | Verifică în `sting-preview.html` că `.monogram` are exact `--yellow` background și culorile match cu `tokens.css`. |
| Recording prea zgomotos audio | Nu ai bifat "mute" la export. Re-export cu `-an`. |

## Bonus: dacă vrei să modifici animația

Editează `sting-preview.html` în secțiunea `<style>`. Toate animațiile sunt CSS keyframes cu denumiri clare (`@keyframes ready`, `@keyframes setword`, `@keyframes go`, `@keyframes mono`, etc.). Procentele sunt în 12 sec — 8.33% = 1 sec.

Ești bun, dă-i drumul.
