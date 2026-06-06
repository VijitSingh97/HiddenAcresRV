# Hidden Acres RV Park

A fast, accessible, SEO-optimized marketing site for [Hidden Acres RV Park](https://www.hiddenacresrv.com)
— a quiet RV park on Lake Lavon in Princeton, TX.

This is a **showcase rebuild.** The site was previously a Gatsby app carrying a
deep npm dependency tree and dozens of security advisories. It's now a
**[Hugo](https://gohugo.io)** static site — a single Go binary with **zero npm
dependency tree** — that compiles to plain HTML/CSS and is built to stay fast,
secure, and nearly maintenance-free for years.

![Hidden Acres RV Park](assets/images/signage/big_sign.jpg)

### What this build demonstrates

- **Zero-dependency static architecture** — no Node or npm tree to patch; almost nothing to keep secure
- **Performance-first** — ships ~no JavaScript (one tiny click-to-load map script), self-hosted fonts, and build-time responsive WebP images
- **SEO & local discovery** — JSON-LD `Campground`/`RVPark` schema, accurate geo, sitemap, robots, Open Graph, and a reviews section
- **Accessibility** — semantic landmarks, a single `<h1>`, real alt text, keyboard support, and visible focus styles
- **Content/layout separation** — every word lives in plain config/data files, so the owner updates text without touching templates
- **CI/CD + testing** — every push is built, link-checked, and SEO-asserted, then deployed to GitHub Pages

---

## ✏️ I just want to update some text

You almost never need to touch the design. Day-to-day content (phone number,
rates, amenities, FAQs, photos, etc.) lives in a handful of plain text files.

👉 **See [`docs/EDITING.md`](docs/EDITING.md)** — a simple "I want to change X →
edit this file" guide with copy-paste examples. Start there.

---

## Getting started (running it on your computer)

### 1. Install Hugo (extended edition)

You need the **extended** edition (it processes images). Pick your platform:

| Platform | Command |
| --- | --- |
| macOS (Homebrew) | `brew install hugo` |
| Windows (winget) | `winget install Hugo.Hugo.Extended` |
| Windows (Chocolatey) | `choco install hugo-extended` |
| Linux / other | <https://gohugo.io/installation/> |

Confirm it worked (you should see `+extended` in the version):

```sh
hugo version
```

### 2. Preview the site locally

From the project folder:

```sh
hugo server
```

Then open **<http://localhost:1313>** in your browser. The page reloads
automatically as you edit files — great for checking text changes live.

Press `Ctrl+C` to stop.

---

## Project layout (the short version)

```
hugo.toml          Site settings — phone, address, links, etc. (edit me)
content/_index.md  Hero headline + the "About" paragraphs        (edit me)
data/              Lists: amenities, attractions, FAQs, gallery  (edit me)
assets/            Photos, fonts, and the stylesheet (main.css)
static/            Files served as-is (PDF rules, favicon, redirects)
layouts/           The HTML templates (the design — rarely touched)
```

A fuller tour is in [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).

---

## Testing

```sh
./test.sh
```

This does a strict production build (warnings are treated as errors) and then
runs [`htmltest`](https://github.com/wjdp/htmltest) to confirm every internal
link, page anchor, and image reference resolves. The same checks run
automatically on GitHub for every change (see below).

`htmltest` is optional locally; install it once with:

```sh
go install github.com/wjdp/htmltest@latest
```

> **Tip:** to spot-check performance/SEO/accessibility, run a
> [Lighthouse](https://developer.chrome.com/docs/lighthouse/) audit in Chrome
> DevTools against a local `hugo server` (or the live site).

---

## Building & deploying

### Automatic (recommended)

Pushing to the `master` branch triggers
[`.github/workflows/ci.yml`](.github/workflows/ci.yml), which builds the site,
validates it, and publishes it to **GitHub Pages**.

**One-time setup:** in the GitHub repo, go to **Settings → Pages** and set
**Source = GitHub Actions**. The custom domain is handled by
[`static/CNAME`](static/CNAME); point your DNS at GitHub Pages per
[GitHub's custom-domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

### Manual

```sh
hugo --gc --minify
```

The finished site is written to `public/`. Serve that folder with any static
host or web server.

### Other hosts (Netlify / Cloudflare Pages)

Both auto-build Hugo from this repo with zero extra config:

- **Build command:** `hugo --gc --minify`
- **Publish directory:** `public`
- **Environment variable:** `HUGO_VERSION = 0.162.1` (and `HUGO_EXTENDED = true` on Netlify)

They also honor [`static/_redirects`](static/_redirects) for the legacy URL
redirect and give you preview deploys on every pull request.

---

## Upgrading Hugo

1. Upgrade locally: `brew upgrade hugo` (or your platform's equivalent).
2. Update the pinned version in [`.github/workflows/ci.yml`](.github/workflows/ci.yml)
   (`HUGO_VERSION`) so CI matches.
3. Run `./test.sh` to confirm everything still builds.

---

## License

[MIT](LICENSE). Originally a Gatsby site adapted from
[gatsby-absurd](https://github.com/ajayns/gatsby-absurd); rebuilt on Hugo in 2026.
