# Editing the website

This is the only guide you need for routine updates. **You edit plain text
files — never the design.** After saving, [preview your changes](#previewing-your-changes)
and [publish them](#publishing-your-changes).

All file paths below are relative to the project's main folder.

---

## "I want to change ___" → edit this file

| I want to change… | Edit this file | Where in the file |
| --- | --- | --- |
| Phone number | `hugo.toml` | `phone` (display) **and** `phoneRaw` (digits only, for tap-to-call) |
| Street address | `hugo.toml` | `[params.address]` |
| Email address | `hugo.toml` | `email` |
| Reservation / waitlist links | `hugo.toml` | `[params.links]` → `reserve`, `waitlist` |
| "Take a tour" / map links | `hugo.toml` | `[params.links]` → `tour`, `map` |
| Social media links | `hugo.toml` | `[params.social]` |
| Nightly rate ("starts at $60") | `hugo.toml` | `priceFrom` — **also** update the FAQ answer in `data/faqs.yaml` |
| Map pin coordinates (for Google) | `hugo.toml` | `[params.geo]` — see [Setting the map coordinates](#setting-the-map-coordinates) |
| Page title / description (for Google & social) | `hugo.toml` | `brand`, `tagline`, `description` |
| Social share/preview image | `hugo.toml` | `ogImage` |
| Big hero background photo | `hugo.toml` | `heroImage` |
| Hero headline & subtext | `content/_index.md` | the `hero:` section |
| "More lots now available!" banner | `content/_index.md` | `hero:` → `note` (delete the line to remove it) |
| The "About" paragraphs | `content/_index.md` | the `about:` section |
| Amenities (the cards) | `data/amenities.yaml` | one block per amenity |
| Local attractions list | `data/attractions.yaml` | one line per attraction |
| FAQ questions & answers | `data/faqs.yaml` | one block per question |
| Gallery photos | `data/gallery.yaml` | one line per photo |
| Navigation menu items | `hugo.toml` | the `[[menu.main]]` entries |
| Park rules PDF | `static/park_rules/campground-rules.pdf` | replace the file (keep the same name) |
| Logo / favicon | `assets/images/logo/` | replace the image files |

> **Golden rule for these files:** keep the existing punctuation and spacing
> (the `-`, the `:`, and the indentation) the same — just change the words
> between the quotes. If something breaks, it's almost always a missing quote
> or wrong indentation.

---

## Step-by-step examples

### Change the phone number

Open `hugo.toml` and edit **both** lines:

```toml
phone    = "(972) 736-1264"   # what visitors see
phoneRaw = "9727361264"       # digits only, so tapping it on a phone dials
```

### Change the nightly rate

1. In `hugo.toml`, update `priceFrom = "$60"`.
2. In `data/faqs.yaml`, find the "What are the lot fees…" answer and update the
   amount there too.

### Add a new amenity

1. Put the photo in `assets/images/amenities/` (e.g. `firepit.jpg`).
2. In `data/amenities.yaml`, copy an existing block and edit it:

```yaml
- name: "Fire pits"
  image: "firepit.jpg"          # the filename you just added
  blurb: "Gather around in the evenings"
```

### Add an FAQ

In `data/faqs.yaml`, copy a block and edit it. Answers use simple
[Markdown](https://www.markdownguide.org/basic-syntax/) — `**bold**`, bullet
lists, and `[link text](https://example.com)`:

```yaml
- question: "Do you have weekly rates?"
  answer: |
    Yes! Weekly and monthly rates are available — see our
    [reservation portal]({{reserve}}) for details.
```

You can use these handy shortcuts inside any FAQ answer (they fill in
automatically from `hugo.toml`):

| Shortcut | Becomes |
| --- | --- |
| `{{reserve}}` | the reservation link |
| `{{waitlist}}` | the waitlist link |
| `{{rules}}` | the park rules PDF |

### Swap or add a gallery photo

1. Add the photo to `assets/images/` (e.g. `assets/images/park/sunset.jpg`).
2. In `data/gallery.yaml`, add a line. **Always include `alt`** — a short
   description used by screen readers and Google:

```yaml
- image: "park/sunset.jpg"
  alt: "Sunset over Lake Lavon from the park"
```

### Add or remove a menu item

In `hugo.toml`, edit the `[[menu.main]]` entries. `url` can be an in-page
anchor like `#about` or a full web address. `weight` controls the order
(smaller = further left):

```toml
[[menu.main]]
  name = "Rates"
  url = "#faq"
  weight = 35
```

---

## Setting the map coordinates

The `[params.geo]` coordinates in `hugo.toml` help Google show the park in
the right place. The values shipped are approximate. To set them exactly:

1. Open [Google Maps](https://maps.google.com) and find the park.
2. **Right-click** the exact spot → the menu shows the latitude and longitude at
   the top → click them to copy.
3. Paste into `hugo.toml`:

```toml
[params.geo]
  lat = 33.1577     # first number
  lng = -96.4347    # second number
```

---

## Previewing your changes

In a terminal, from the project folder:

```sh
hugo server
```

Open <http://localhost:1313>. Leave it running — the page updates the moment you
save a file. (First time? See [README.md](../README.md) to install Hugo.)

---

## Publishing your changes

When you're happy with the preview, commit and push to the `master` branch:

```sh
git add -A
git commit -m "Update nightly rate"
git push
```

That's it. GitHub automatically rebuilds and publishes the live site within a
couple of minutes — no manual upload step.

---

## If something looks broken

- **The site won't build / shows an error:** you probably removed a quote or
  changed the indentation in a `.yaml`/`.toml`/`.md` file. Compare your change
  to a neighboring block — they should look structurally identical.
- **A photo doesn't show:** check the filename in the data file matches the
  actual file in `assets/images/` exactly (capitalization counts).
- **Still stuck?** Undo your last change (`git checkout -- <file>`), or ask the
  developer credited in the site footer.
