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
- `graphic/`, `digital/`, `photo/`, `video/` – one `index.html` per category: filters and gallery. Their header and footer are copies of the homepage's; keep all pages in sync.
  - Graphic filters: `branding print`
  - Digital filters: `websites social-media animations games`
  - Photo and Video filters: `portraits branding events wedding sport`
- `<category>/<project>/index.html` – one page per project (e.g. `photo/beauty-meets-nature/`). Same header and footer copy; paths start with `../../`.
- `assets/photography/<project_name>/` – photos, one folder per project (e.g. `assets/photography/liquids_atelier/`), named `photography_<tag>_<project_name>_NN.jpg`.
- `css/style.css` – all styles; colors and sizes as variables on `:root`.
- `js/main.js` – shared by all pages: carousel (homepage only), filters (category pages), EN/DE toggle (German strings live here).

The homepage carousel has one card per category; each card links to its category page. Left, front and right cards are visible, a 4th waits hidden behind the front one.

Elements with `data-i18n="key"` get their text swapped; `data-i18n-aria="key"` swaps `aria-label`.
Add a key to both the HTML (English) and the `de` dictionary in `js/main.js`.

When changing `css/style.css` or `js/main.js`, bump the `?v=` number on their links in every page's `index.html` so browsers don't keep the old file.

## Adding a photo

1. Resize to about 1600px on the long side, JPEG, under 400 KB.
2. Upload it to its project folder, e.g. `assets/photography/summer_wedding/photography_wedding_summer_wedding_01.jpg`.
3. In `photo/index.html`, copy a `<figure class="shot">` block inside `.gallery` and set `src`, `alt`, `width` and `height` (the image's real pixel size).
4. Set `data-tags` to one or more of that page's filter keys (listed above), separated by spaces. A photo with several tags shows under each of those filters.

Photos appear in the order they're listed. A new filter needs a button in `.filters` (`data-filter` + `data-i18n`) and a German label in `js/main.js`.

## Adding a project page

1. Copy the folder `photo/beauty-meets-nature/` into the right category and rename it (lowercase with dashes, e.g. `photo/summer-wedding/`).
2. In the copy, change `<title>`, the `<h1>`, the tag list, the intro text, year, location and the `<figure>` photos. Photos sit in a 2-column grid (1 on phones); add `is-wide` to a figure to make it span both columns.
3. On the category page, wrap that photo's `<img>` in `<a href="summer-wedding/" class="shot-link">` and add the "More" tab and hidden title, as on the first photo.

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
