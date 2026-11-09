# visuals-by-rh.github.io

Portfolio of Regula Huber (graphic, digital, photo, video work).
Design proposal: https://claude.ai/artifact/Hv2pcb1JzeR6Cdmju54PZf

## Stack

- Plain HTML, CSS and vanilla JS. No framework, no build step, no npm.
- Hosted on GitHub Pages from the repo root: pushing to the default branch deploys.
- `.nojekyll` keeps GitHub Pages from running Jekyll.
- Fonts from Google Fonts: Space Grotesk (headings), Inter (body).

## Layout

- `index.html` – the one-page site. English copy lives here.
- `css/style.css` – all styles; colors and sizes as variables on `:root`.
- `js/main.js` – category carousel and EN/DE language toggle (German strings live here).

Elements with `data-i18n="key"` get their text swapped; `data-i18n-aria="key"` swaps `aria-label`.
Add a key to both the HTML (English) and the `de` dictionary in `js/main.js`.

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
