#!/bin/bash
# Run this after every deploy to confirm the site is healthy.
# Usage: bash check-deploy.sh

URL="https://www.fountaingrace.org"
PASS=0
FAIL=0

echo ""
echo "Checking $URL ..."
echo ""

HEADERS=$(curl -sI "$URL")

check() {
  local label="$1"
  local pattern="$2"
  if echo "$HEADERS" | grep -qi "$pattern"; then
    echo "  PASS  $label"
    PASS=$((PASS + 1))
  else
    echo "  FAIL  $label"
    FAIL=$((FAIL + 1))
  fi
}

echo "--- Security headers ---"
check "Strict-Transport-Security" "strict-transport-security"
check "Content-Security-Policy"   "content-security-policy"
check "X-Frame-Options"           "x-frame-options"
check "X-Content-Type-Options"    "x-content-type-options"
check "Referrer-Policy"           "referrer-policy"
check "Permissions-Policy"        "permissions-policy"

echo ""
echo "--- Site reachability ---"
STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$URL")
if [ "$STATUS" = "200" ]; then
  echo "  PASS  Homepage returns 200"
  PASS=$((PASS + 1))
else
  echo "  FAIL  Homepage returned $STATUS (expected 200)"
  FAIL=$((FAIL + 1))
fi

SITEMAP=$(curl -s -o /dev/null -w "%{http_code}" "$URL/sitemap.xml")
if [ "$SITEMAP" = "200" ]; then
  echo "  PASS  /sitemap.xml returns 200"
  PASS=$((PASS + 1))
else
  echo "  FAIL  /sitemap.xml returned $SITEMAP"
  FAIL=$((FAIL + 1))
fi

ROBOTS=$(curl -s -o /dev/null -w "%{http_code}" "$URL/robots.txt")
if [ "$ROBOTS" = "200" ]; then
  echo "  PASS  /robots.txt returns 200"
  PASS=$((PASS + 1))
else
  echo "  FAIL  /robots.txt returned $ROBOTS"
  FAIL=$((FAIL + 1))
fi

echo ""
echo "--- Result: $PASS passed, $FAIL failed ---"
echo ""

if [ "$FAIL" -gt 0 ]; then
  exit 1
fi
