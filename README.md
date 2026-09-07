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
- **SEO & AI discovery** — JSON-LD `Campground`/`RVPark` + `FAQPage` schema, accurate geo, sitemap, robots, Open Graph, and a generated [`/llms.txt`](https://llmstxt.org) so AI assistants can recommend the park accurately
- **Accessibility** — semantic landmarks, a single `<h1>`, real alt text, keyboard support, and visible focus styles
- **Content/layout separation** — every word lives in plain config/data files, so the owner updates text without touching templates
- **CI/CD + testing** — every push is built, link-checked, and SEO-asserted, then deployed to GitHub Pages

---

## 👋 Coming back after a while?

Everything you need to pick this back up, at a glance:

| To… | Do this |
| --- | --- |
| **Change text** (phone, rates, FAQs, photos…) | Edit a file in `hugo.toml`, `content/`, or `data/` — see **[`docs/EDITING.md`](docs/EDITING.md)** |
| **Preview your changes live** | `hugo server`, then open <http://localhost:1313> |
| **Check nothing broke** | `./test.sh` |
| **Publish** | `git commit` + `git push` — GitHub rebuilds & redeploys automatically |

Routine updates never require touching the design or any code. On a new computer?
See [Getting started](#getting-started-running-it-on-your-computer).

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

One command builds the site and validates it. Run it before you publish — and
it runs automatically on every push and pull request:

```sh
./test.sh
```

It does a **strict build**, validates **HTML & links** with
[`htmltest`](https://github.com/wjdp/htmltest), then asserts the things a visitor
relies on — the **Reserve / Waitlist / phone / email** links, that every menu
item lands on a real section, the **FAQ / mobile menu / map**, **alt text** on
every image, **safe** new-tab links, and the **SEO** essentials. See
**[`docs/TESTING.md`](docs/TESTING.md)** for the full list and why each one matters.

The whole suite is **zero-dependency** (Hugo plus an optional Go binary — no
Node). Install the optional link checker once:

```sh
go install github.com/wjdp/htmltest@latest
```

---

## Building & deploying

### Automatic (recommended)

Pushing to the `master` branch triggers
[`.github/workflows/ci.yml`](.github/workflows/ci.yml), which builds the site,
validates it, and publishes it to **GitHub Pages**.

**One-time setup:** in the GitHub repo, go to **Settings → Pages** and set
**Source = GitHub Actions**.

### Custom domain (DNS)

The domain is `www.hiddenacresrv.com`, set by [`static/CNAME`](static/CNAME)
(Pages re-reads it on every deploy, so don't set the domain only in the UI).

`hiddenacresrv.com` also runs **mail** and other subdomains on the old server
at `162.254.209.226`, so this is not a "repoint the domain" job — it's four
records. Full target zone, at the DNS host (`grass1`/`grass2.26max.com`):

| Type    | Name           | Value                                   | TTL  | Action     |
| ------- | -------------- | --------------------------------------- | ---- | ---------- |
| `A`     | `@`            | `162.254.209.226`                       | 3600 | **delete** |
| `A`     | `@`            | `185.199.108.153`                       | 3600 | **add**    |
| `A`     | `@`            | `185.199.109.153`                       | 3600 | **add**    |
| `A`     | `@`            | `185.199.110.153`                       | 3600 | **add**    |
| `A`     | `@`            | `185.199.111.153`                       | 3600 | **add**    |
| `AAAA`  | `@`            | `2606:50c0:8000::153`                   | 3600 | **add**    |
| `AAAA`  | `@`            | `2606:50c0:8001::153`                   | 3600 | **add**    |
| `AAAA`  | `@`            | `2606:50c0:8002::153`                   | 3600 | **add**    |
| `AAAA`  | `@`            | `2606:50c0:8003::153`                   | 3600 | **add**    |
| `A`     | `www`          | `162.254.209.226`                       | 3600 | **delete** |
| `CNAME` | `www`          | `vijitsingh97.github.io.`               | 3600 | **add**    |
| `TXT`   | `@`            | SPF — see below                         | 3600 | **edit**   |
| `MX`    | `@`            | `10 iotondemand-com.p10.spamhero.com.`  | 3600 | keep       |
| `MX`    | `@`            | `20 iotondemand-com.p20.spamhero.net.`  | 3600 | keep       |
| `MX`    | `@`            | `30 iotondemand-com.p30.spamhero.net.`  | 3600 | keep       |
| `MX`    | `@`            | `40 iotondemand-com.p40.spamhero.net.`  | 3600 | keep       |
| `CNAME` | `autodiscover` | `mxjohn1.johntesla.com.`                | 3600 | keep       |
| `TXT`   | `@`            | `google-site-verification=SyArl1V2Q6…`  | 3600 | keep       |
| `TXT`   | `@`            | `google-site-verification=yDCfLhLCj0…`  | 3600 | keep       |
| `NS`    | `@`            | `grass1.26max.com.` / `grass2.26max.com.` | —  | keep       |

Nine adds, three deletes, one edit. **Everything else stays.**

#### Why the apex changes are safe for email

- `MX` points at **spamhero** (external), not at the apex hostname — so
  repointing the apex `A`/`AAAA` does not touch inbound mail.
- `autodiscover` is its own `CNAME` to a different host. Unaffected.

#### The one edit: the apex SPF `TXT`

```
v=spf1 mx a a:mxjohn1.johntesla.com ip4:162.254.209.170 ip4:162.254.209.235 include:spf.spamhero.com ~all
          ^
```

The bare `a` means "whatever the apex `A` record resolves to is an authorized
sender" — today `162.254.209.226`. Repoint the apex and that mechanism
silently starts naming GitHub's web servers instead, dropping the old box.
Pin it explicitly, same send-permissions as today:

```
v=spf1 mx ip4:162.254.209.226 a:mxjohn1.johntesla.com ip4:162.254.209.170 ip4:162.254.209.235 include:spf.spamhero.com ~all
```

#### Before you switch

The table above is what resolves **from outside**; a zone transfer is
(correctly) refused, so private records aren't visible. In the registrar's zone
editor, check for any record whose **value** is `hiddenacresrv.com` or `@` — a
subdomain `CNAME`d to the apex would follow it to Pages and 404. None were
visible externally.

Note: there is no `DMARC` record and no `CAA` record. No `CAA` is good here —
nothing blocks GitHub from issuing the Let's Encrypt certificate.

#### Order matters

1. **SPF edit first** — harmless on its own, and lets its TTL expire before the
   apex moves.
2. **Merge to `master`** so Pages deploys with the `CNAME` file present.
3. **Then** the apex `A`/`AAAA` and `www` `CNAME` changes.
4. Once propagated, **Settings → Pages → Enforce HTTPS**. The checkbox only
   becomes available after GitHub issues the certificate — up to ~24h. Until
   then `https://` may show a warning, so cut over at a low-traffic hour.

Verify:

```sh
dig +short www.hiddenacresrv.com        # -> vijitsingh97.github.io -> 185.199.x.153
dig +short AAAA hiddenacresrv.com       # -> the four 2606:50c0:800x::153
dig +short MX hiddenacresrv.com         # -> still the four spamhero hosts
dig +short TXT hiddenacresrv.com        # -> SPF with ip4:162.254.209.226, no bare "a"
curl -sI https://www.hiddenacresrv.com | head -1
```

Full reference:
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
