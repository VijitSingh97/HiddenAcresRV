# Testing

Everything is validated by one command — **`./test.sh`** — which runs on every
push and pull request (GitHub Actions) and which you can run locally before
publishing a change. It exits non-zero if anything is wrong, so a broken change
can't reach the live site.

The whole suite is **zero-dependency**: it needs only Hugo and (optionally) the
Go-based [`htmltest`](https://github.com/wjdp/htmltest). No Node, no
`npm install`, nothing to rot while the site sits untouched for months.

## Why this approach

This site's user experience is built on **native HTML/CSS**, not JavaScript: the
FAQ is a real `<details>` accordion, the mobile menu is a CSS checkbox, the nav
is plain anchors. For native elements, **the structure guarantees the behavior** —
so asserting that the right HTML is present in the built page is an honest way to
test the experience without spinning up a browser. (The only JavaScript on the
site is the ~10-line lazy-map loader, which is verified to be present and wired
up.) That keeps testing fast, dependency-free, and durable.

## What it checks

`./test.sh` runs three layers against the real production build:

1. **Strict build** — `hugo --gc --minify --panicOnWarning`. Any warning (a
   missing image, a bad template reference) fails the build.
2. **HTML & internal links** — `htmltest` confirms every page, in-page anchor,
   and image reference resolves.
3. **Page assertions** on the built HTML:

   | Area | What's protected |
   | --- | --- |
   | **Booking & contact** | Reserve + Waitlist links (correct FireflyReservations property), tap-to-call number, email |
   | **Navigation** | every menu anchor (`#about`, `#amenities`, …) lands on a real section |
   | **Interactions** | FAQ accordion, mobile-menu toggle, and the lazy map are present and wired up |
   | **Content** | amenities, the (current) attractions list, highlights, and driving directions render |
   | **Accessibility** | exactly one `<h1>`, every image has alt text, skip-to-content link present |
   | **Safe links** | every `target="_blank"` link uses `rel="noopener"` |
   | **SEO** | title, canonical, Open Graph image, a valid & complete JSON-LD block, viewport |
   | **Required files** | `sitemap.xml`, `robots.txt`, `site.webmanifest`, `404.html` |

Each check prints a ✓ or ✗ with a plain-English label, so a failure tells you
exactly what broke.

## Running it

```sh
./test.sh
```

Install the optional link checker once (a single Go binary — no npm):

```sh
go install github.com/wjdp/htmltest@latest
```

Without `htmltest` the suite still runs; it just skips the link-validation layer.

## Manual spot-checks (occasional)

A few things are best eyeballed after a big change:

- **Performance & accessibility scores** — run a
  [Lighthouse](https://developer.chrome.com/docs/lighthouse/) audit in Chrome
  DevTools against `hugo server` or the live site.
- **Narrow screens** — the layout is verified to have no horizontal overflow from
  280 px (a folded Galaxy Fold) upward; use your browser's device toolbar to
  spot-check after editing `assets/css/main.css`.
- **Rich results** — paste the live URL into Google's
  [Rich Results Test](https://search.google.com/test/rich-results) to preview the
  structured data.
- **Share previews** — check the Open Graph image with the
  [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/).
