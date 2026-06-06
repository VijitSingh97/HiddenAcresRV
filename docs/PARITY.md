# Content parity: previous site → Hugo rebuild

A one-time audit confirming the Hugo rebuild preserves every link and content
detail from the previous (Gatsby) site, so visitors can still reach the same
information. Captured at the time of the migration (2026-06).

**Method:** every link (`http(s)`, `tel:`, `mailto:`) was extracted from the old
Gatsby source (preserved at the `pre-hugo-archive` git tag) and compared against
the generated HTML of the new site, then content sections were checked by hand.

## Links — all present ✅

| Link / detail | Old site | New site | Status |
| --- | --- | --- | --- |
| Reservation portal | ✔ | ✔ (header, hero, FAQ, contact) | Same URL |
| Waitlist | ✔ | ✔ (hero, FAQ, contact) | Same URL |
| Phone `tel:` | ✔ | ✔ (header, contact, footer) | Same |
| Email `mailto:` | ✔ | ✔ (contact, footer) | Same |
| Street address | ✔ | ✔ (contact, footer, SEO) | Same |
| Campground rules PDF | ✔ | ✔ (FAQ) | Renamed `Campground Rules.pdf` → `campground-rules.pdf` (no spaces in URL) |
| 13 local attractions | ✔ | ✔ (About) | All 13 present |
| 3 Princeton ISD school links | ✔ | ✔ (FAQ) | Same |
| Instagram / X / GitHub | ✔ | ✔ (footer) | Same |
| LinkedIn (site credit) | ✔ | ✔ (footer) | Same |
| Legacy redirect `/Hidden-Acres-RV-Park/OverView` → `/` | ✔ | ✔ | Preserved via alias + `_redirects` |
| 8 amenities, 8 FAQs, About sections | ✔ | ✔ | All carried over |

## Changes worth noting

| Item | Change | Why |
| --- | --- | --- |
| **360° virtual tour** | Restored to the original `goo.gl/maps/9URNXTdFGi63TMXj7` | Was briefly mis-pointed during the rebuild; now fixed. ⚠️ It's a legacy goo.gl short link (Google is sunsetting these) — verify it still resolves and update if needed. |
| **"Find us" map link** | `goo.gl/maps/5jtXzJ2n8rnDhJY37` → a durable `google.com/maps/search?query=<address>` link | Reaches the same location; avoids the deprecated goo.gl shortener. |
| `#contactus` anchor | The contact section is now `#location`, but the old `#contactus` anchor is preserved | So any old in-page links still land correctly. |
| `americanairlinescenter.com` | `http` → `https` | Security upgrade; same destination. |
| `<meta name="keywords">` | Removed | Keyword meta tags are ignored by modern search engines; the page description and JSON-LD do the real SEO work. Not visitor-facing. |

## New additions (not in the old site)

- A **photo gallery** section (uses existing park photos).
- **JSON-LD** structured data, `sitemap.xml`, and `robots.txt` for SEO.
