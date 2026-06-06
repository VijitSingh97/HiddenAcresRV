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

echo "✓ All checks passed."
