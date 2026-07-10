#!/usr/bin/env bash
# =============================================================================
#  test.sh — build the site and validate it.
#
#  Three layers of checks, all with ZERO npm/Node dependencies:
#    1. Strict production build (warnings fail the build).
#    2. HTML + internal-link validation (htmltest — a Go binary, optional).
#    3. Assertions on the built page covering the things that matter to a
#       visitor: booking/contact links, navigation, the FAQ/menu/map, images,
#       accessibility, SEO, and the files search engines expect.
#
#  Usage:    ./test.sh
#  Needs:    Hugo (extended).  htmltest is optional and auto-detected.
#  See:      docs/TESTING.md for what each check protects.
# =============================================================================
# shellcheck disable=SC2015  # `[ … ] && ok || no` is safe here: ok/no never fail
set -uo pipefail
cd "$(dirname "$0")" || exit 1

if [ -t 1 ]; then
  G=$'\033[32m'
  R=$'\033[31m'
  Z=$'\033[0m'
else
  G=
  R=
  Z=
fi
pass=0
fail=0
ok() {
  printf '  %s✓%s %s\n' "$G" "$Z" "$1"
  pass=$((pass + 1))
}
no() {
  printf '  %s✗ %s%s\n' "$R" "$1" "$Z"
  fail=$((fail + 1))
}
has() { if grep -qF -- "$1" public/index.html; then ok "$2"; else no "$2"; fi; } # substring
isfile() { if [ -f "public/$1" ]; then ok "$1"; else no "$1 (missing)"; fi; }
count() { grep -oE "$1" public/index.html | wc -l | tr -d ' '; } # # of matches

# --- 1. Strict build ---------------------------------------------------------
echo "==> Building (strict — warnings fail the build)…"
command -v hugo >/dev/null 2>&1 || {
  echo "✗ Hugo is not installed — see README.md."
  exit 1
}
hugo --gc --minify --panicOnWarning || {
  echo "✗ Build failed."
  exit 1
}

# --- 2. HTML & internal-link validation -------------------------------------
if ! command -v htmltest >/dev/null 2>&1 && [ -x "$(go env GOPATH 2>/dev/null)/bin/htmltest" ]; then
  PATH="$(go env GOPATH)/bin:$PATH"
  export PATH
fi
if command -v htmltest >/dev/null 2>&1; then
  echo "==> Validating HTML & internal links (htmltest)…"
  htmltest || {
    echo "✗ htmltest found problems."
    exit 1
  }
else
  echo "⚠ htmltest not installed — skipping link validation."
  echo "  Install once with:  go install github.com/wjdp/htmltest@latest"
fi

echo "==> Checking the built page…"

# --- 3a. Booking & contact — the conversion paths that matter most -----------
has 'app.fireflyreservations.com/reserve?propertyGUID=8b116da5' 'Reservation link present & correct'
has 'reserve/joinwaitlist?propertyGUID=8b116da5' 'Waitlist link present'
has 'tel:9727361264' 'Tap-to-call phone link'
has 'mailto:reservations@hiddenacresrv.com' 'Email link'

# --- 3b. Navigation — every menu anchor lands on a real section --------------
for s in about amenities gallery location faq; do
  if grep -qF "#$s" public/index.html && grep -qE "id=\"?${s}[\" >/]" public/index.html; then
    ok "Nav '#$s' → matching section"
  else
    no "Nav '#$s' has no matching section"
  fi
done

# --- 3c. Interactions (native HTML/CSS + the one lazy-map script) -----------
faqs=$(count '<details')
[ "$faqs" -ge 8 ] && ok "FAQ accordion present ($faqs <details>)" || no "FAQ accordion missing (found $faqs)"
has 'nav-toggle' 'Mobile menu toggle present'
has 'nav-burger' 'Mobile menu button present'
has 'map-facade' 'Interactive map (lazy facade) present'
has 'data-map-embed' 'Map embed URL wired up'

# --- 3d. Content the visitor needs ------------------------------------------
amen=$(count 'amenity-card')
[ "$amen" -ge 8 ] && ok "Amenities rendered ($amen cards)" || no "Amenities missing (found $amen)"
has 'attraction-list' 'Local attractions list present'
has 'TUPPS' 'Attractions look current (TUPPS Brewery)'
has 'Driving directions' 'Driving directions present'
has 'Full hookups' 'Highlight pills present'

# --- 3e. Accessibility ------------------------------------------------------
h1=$(count '<h1')
[ "$h1" -eq 1 ] && ok "Exactly one <h1>" || no "Expected one <h1>, found $h1"
imgs=$(count '<img ')
noalt=$(grep -oE '<img [^>]*>' public/index.html | grep -vcE ' alt[=> ]' || true)
[ "$noalt" -eq 0 ] && ok "All $imgs images have alt text" || no "$noalt image(s) missing alt text"
has 'skip-link' 'Skip-to-content link present'

# --- 3f. Safe new-tab links (no reverse-tabnabbing) -------------------------
blanks=$(count 'target=.?_blank')
noop=$(count 'noopener')
[ "$noop" -ge "$blanks" ] && ok "All $blanks new-tab links use rel=noopener" || no "$blanks new-tab links but only $noop noopener"

# --- 3g. SEO essentials ------------------------------------------------------
has '<title>' 'Page title'
has 'canonical' 'Canonical URL'
has 'og:image' 'Open Graph share image'
has 'application/ld+json' 'JSON-LD structured data'
has 'viewport' 'Responsive viewport'
if command -v python3 >/dev/null 2>&1; then
  if python3 - <<'PY' 2>/dev/null; then ok "JSON-LD is valid and complete"; else no "JSON-LD invalid or missing fields"; fi
import re, sys, json
h = open('public/index.html', encoding='utf-8').read()
m = re.search(r'application/ld\+json[^>]*>(.*?)</script>', h, re.S)
d = json.loads(m.group(1))
sys.exit(0 if all(k in d for k in ('@type','name','address','geo','telephone')) else 1)
PY
fi

# --- 3h. Files search engines & browsers expect -----------------------------
isfile sitemap.xml
isfile robots.txt
isfile site.webmanifest
isfile 404.html

# --- Summary -----------------------------------------------------------------
echo
if [ "$fail" -eq 0 ]; then
  printf '%s✓ All %d checks passed.%s\n' "$G" "$pass" "$Z"
else
  printf '%s✗ %d of %d checks failed.%s\n' "$R" "$fail" "$((pass + fail))" "$Z"
  exit 1
fi
