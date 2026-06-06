#!/usr/bin/env bash
# -----------------------------------------------------------------------------
#  Build the site strictly and validate the output.
#  Run from the project root:  ./test.sh
# -----------------------------------------------------------------------------
set -euo pipefail

if ! command -v hugo >/dev/null 2>&1; then
  echo "✗ Hugo is not installed. See README.md (Getting started)."
  exit 1
fi

echo "==> Building site (strict — warnings fail the build)…"
hugo --gc --minify --panicOnWarning

# Make a go-installed htmltest discoverable even if ~/go/bin isn't on PATH.
if ! command -v htmltest >/dev/null 2>&1 && [ -x "$(go env GOPATH 2>/dev/null)/bin/htmltest" ]; then
  export PATH="$(go env GOPATH)/bin:$PATH"
fi

if command -v htmltest >/dev/null 2>&1; then
  echo "==> Validating HTML & internal links (htmltest)…"
  htmltest
else
  echo "⚠ htmltest not installed — skipping link validation."
  echo "  Install it with:  go install github.com/wjdp/htmltest@latest"
fi

echo "==> Checking key SEO elements are present…"
seo_ok=1
check() { if grep -q "$1" public/index.html; then echo "  ✓ $2"; else echo "  ✗ MISSING: $2"; seo_ok=0; fi; }
check '<title>'              'page title'
check 'canonical'           'canonical URL'
check 'og:image'            'Open Graph share image'
check 'application/ld+json' 'JSON-LD structured data'
check 'viewport'            'responsive viewport'
for f in sitemap.xml robots.txt site.webmanifest; do
  if [ -f "public/$f" ]; then echo "  ✓ $f"; else echo "  ✗ MISSING: public/$f"; seo_ok=0; fi
done
[ "$seo_ok" -eq 1 ] || { echo "✗ SEO checks failed."; exit 1; }

echo "✓ All checks passed."
