# Architecture

A developer-oriented tour of how the site is put together. For day-to-day
content edits, see [`EDITING.md`](EDITING.md) instead.

## Philosophy

This is a **static marketing site** with a few hard requirements: it should be
fast, accessible, good for SEO, trivially cheap to host, and — above all —
**low-maintenance for years at a time**. Those goals drove every choice:

- **Hugo, not a JS framework.** Hugo is a single Go binary with **no `npm`
  dependency tree**, so there is essentially nothing to security-patch. Compare
  to the previous Gatsby build, which pulled in hundreds of transitive packages.
- **Content is separated from layout.** All editable text lives in `hugo.toml`,
  `content/`, and `data/`. The templates in `layouts/` rarely change.
- **Zero client-side JavaScript.** Every interaction is done with HTML/CSS, so
  there's no JS to break, bloat, or audit.
- **Plain CSS, no preprocessor or framework.** One stylesheet, themed with CSS
  custom properties. No Tailwind/Sass build step (which would re-introduce npm).

## Directory layout

```
hugo.toml                  Site config + all site-wide [params] (contact, links, SEO)
content/
  _index.md                Home page: hero text + About blocks (front matter) + URL aliases
data/
  amenities.yaml           Amenity cards
  attractions.yaml         Local attractions (linked list)
  faqs.yaml                FAQ questions/answers (Markdown; supports {{shortcuts}})
  gallery.yaml             Gallery photos + alt text
assets/
  css/main.css             The entire stylesheet (design tokens + components)
  images/                  Source photos — processed by Hugo into responsive WebP
  fonts/                   Self-hosted Prata + Average (woff2)
static/                    Copied verbatim to the site root:
  park_rules/…pdf          Park rules (PDF)
  fonts/…                  Served at /fonts/… (referenced by @font-face in main.css)
  _redirects               Netlify/Cloudflare redirect rules
  CNAME                    GitHub Pages custom domain
layouts/
  _default/baseof.html     HTML skeleton (<head> + landmarks + skip link)
  index.html               Home page: composes the section partials
  robots.txt               Custom robots.txt (adds the Sitemap line)
  partials/
    head.html              <title>, meta, canonical, Open Graph/Twitter, favicon, CSS link
    schema.html            JSON-LD (Campground/RVPark) structured data
    header.html            Sticky nav + CSS-only mobile menu
    hero.html  about.html  amenities.html  gallery.html  location.html  faq.html  footer.html
    image.html             Reusable responsive-image helper (see below)
.github/workflows/ci.yml   Build + validate + deploy to GitHub Pages
.htmltest.yml              HTML/link validation config
test.sh                    Local build + validation wrapper
```

## How a page renders

`layouts/_default/baseof.html` is the shell. `layouts/index.html` defines the
`main` block by calling the section partials in order (hero → about → amenities
→ gallery → location → faq). Each partial reads its content from `hugo.toml`
params, the home page's front matter (`.Params…`), or a `data/*.yaml` file via
`hugo.Data`.

The home page is the only page. Hugo also emits `/404.html`, `/sitemap.xml`,
`/robots.txt`, and meta-refresh redirect stubs for the legacy
`/Hidden-Acres-RV-Park/OverView` URLs (declared as `aliases` in
`content/_index.md`).

## Styling

`assets/css/main.css` is plain CSS, served minified + fingerprinted via Hugo
Pipes (`resources.Get | minify | fingerprint` in `head.html`). The palette,
fonts, spacing, and radii are CSS custom properties in the `:root` block — change
them once to re-theme the site. Layout is mobile-first with a few `max-width`
breakpoints; type scales fluidly with `clamp()`.

## Images

`partials/image.html` is the single place images are rendered. Given a path
under `assets/images/`, it uses Hugo's built-in image processing to emit a
WebP `srcset` at multiple widths plus intrinsic `width`/`height` (to prevent
layout shift) and `loading="lazy"`. It **requires** an `alt` argument (pass `""`
for decorative images) so content images can never silently ship without alt
text. The hero and Open Graph images are generated the same way.

## SEO & accessibility

- `head.html` — title, meta description, canonical, Open Graph + Twitter cards
  with an **absolute** generated share image URL.
- `schema.html` — `Campground`/`RVPark` JSON-LD with address, geo, phone, price,
  and amenities (validate at [Rich Results Test](https://search.google.com/test/rich-results)).
- Built-in `sitemap.xml`; custom `robots.txt` linking it.
- One `<h1>` (the hero), semantic landmarks, a skip link, visible focus styles,
  and `prefers-reduced-motion` handling.

## Zero-JS interactions

- **FAQ accordion** — native `<details>`/`<summary>`.
- **Mobile menu** — a hidden checkbox (`#nav-toggle`) toggled by the hamburger
  `<label>`; CSS `:checked ~ .site-nav` reveals the menu.
- **Smooth anchor scrolling** — CSS `scroll-behavior: smooth` + `scroll-padding-top`
  to clear the sticky header.

## Fonts

Prata (display) and Average (body) are **self-hosted** woff2 files in
`static/fonts/`, referenced by `@font-face` in `main.css` — no external Google
Fonts request. To update them, drop new woff2 files in `static/fonts/` and adjust
the `@font-face` `src` URLs.

## Build, test, deploy

- **Local:** `hugo server` to preview; `./test.sh` to validate.
- **`test.sh` / CI:** `hugo --gc --minify --panicOnWarning` (warnings fail the
  build) followed by `htmltest` (internal links, anchors, image refs).
- **CI/CD:** `.github/workflows/ci.yml` runs build + validation on every push and
  PR, and deploys `public/` to GitHub Pages on `master`. Hugo's version is pinned
  via `HUGO_VERSION` — keep it in sync with your local version when upgrading.
