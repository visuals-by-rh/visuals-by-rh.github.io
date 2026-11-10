# visuals-by-rh.github.io

Portfolio of Regula Huber (graphic, digital, photo, video work).
Design proposal: https://claude.ai/artifact/Hv2pcb1JzeR6Cdmju54PZf

## Stack

- Plain HTML, CSS and vanilla JS. No framework, no build step, no npm.
- Hosted on GitHub Pages from the repo root: pushing to the default branch deploys.
- `.nojekyll` keeps GitHub Pages from running Jekyll.
- Fonts from Google Fonts: Space Grotesk (headings), Inter (body).

## Layout

- `index.html` – the homepage. English copy lives here.
- `photo/index.html` – the Photo page: filters and gallery. Its header and footer are copies of the homepage's; keep them in sync.
- `photo/<project>/index.html` – one page per photo project (e.g. `photo/beauty-meets-nature/`). Same header and footer copy; paths start with `../../`.
- `assets/` – images. Photos for the Photo page go in `assets/photo/`.
- `css/style.css` – all styles; colors and sizes as variables on `:root`.
- `js/main.js` – shared by both pages: carousel (homepage only), photo filters (Photo page only), EN/DE toggle (German strings live here).

Elements with `data-i18n="key"` get their text swapped; `data-i18n-aria="key"` swaps `aria-label`.
Add a key to both the HTML (English) and the `de` dictionary in `js/main.js`.

When changing `css/style.css` or `js/main.js`, bump the `?v=` number on its link in `index.html` so browsers don't keep the old file.

## Adding a photo

1. Resize to about 1600px on the long side, JPEG, under 400 KB.
2. Upload it to `assets/photo/` (lowercase name with dashes, e.g. `anna-wedding.jpg`).
3. In `photo/index.html`, copy a `<figure class="shot">` block inside `.gallery` and set `src`, `alt`, `width` and `height` (the image's real pixel size).
4. Set `data-tags` to one or more of `portraits branding events wedding sport`, separated by spaces. A photo with several tags shows under each of those filters.

Photos appear in the order they're listed. A new filter needs a button in `.filters` (`data-filter` + `data-i18n`) and a German label in `js/main.js`.

## Adding a project page

1. Copy the folder `photo/beauty-meets-nature/` and rename it (lowercase with dashes, e.g. `photo/summer-wedding/`).
2. In the copy, change `<title>`, the `<h1>`, the tag list, the intro text, year, location and the `<figure>` photos.
3. On the Photo page, wrap that photo's `<img>` in `<a href="summer-wedding/" class="shot-link">` and add the "More" tab and hidden title, as on the first photo.

Project titles are names and stay the same in German. Intro text needs a `data-i18n` key with a German version in `js/main.js`.

## Preview locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Branches

- Clean, readable branch names that say what the branch does, e.g. `add-homepage`, `fix-mobile-nav`.

## Commits

- Concise and atomic: one logical change per commit.
- Subject line only: no description/body.
- No attribution: no `Co-Authored-By`, no session links or other trailers.

## Plans

Every plan must include:

- Success criteria.
- Failure criteria.
- An estimate of expected changed lines of code (per file and total).
