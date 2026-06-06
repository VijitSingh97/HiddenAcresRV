# Hidden Acres RV Campground

The website for [Hidden Acres RV Campground](https://www.hiddenacresrv.com) in
[Princeton, TX](https://www.google.com/maps/search/?api=1&query=10364+County+Rd+740+Princeton+TX+75407)
— a quiet, friendly campground on Lake Lavon. The site describes the campground,
its amenities and local attractions, answers common questions, and points
visitors to the online reservation and waitlist portals.

Built with **[Hugo](https://gohugo.io)**, a single-binary static site generator.
There is **no `npm`, no Node, and no dependency tree** to keep patched — the
whole site is plain HTML and CSS once built, which keeps it fast, secure, and
low-maintenance for years.

![Hidden Acres RV Campground](assets/images/signage/big_sign.jpg)

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
