# MODULE 6 — TECHNICAL FIX SESSION
# Use: When a specific technical issue needs resolving.
# Trigger: "Run Module 6. Issue: [describe the problem]"

---

## WHAT THIS MODULE DOES

Diagnoses and fixes one specific technical problem.
Delivers production-ready code for a Custom HTML/CSS site on Cloudflare Pages.
Does not run a full audit. Does not list unrelated issues.

---

## EXAMPLE TRIGGERS

- "Run Module 6. Issue: LCP is 3.8s on mobile. PageSpeed score is 71."
- "Run Module 6. Issue: the _headers file is missing — security headers need adding."
- "Run Module 6. Issue: schema validation is failing on the homepage."
- "Run Module 6. Issue: the sitemap.xml is missing from the site root."
- "Run Module 6. Issue: images are not in WebP format and slowing the site."
- "Run Module 6. Issue: GA4 is loading before cookie consent — POPIA problem."
- "Run Module 6. Issue: the robots.txt is blocking Google from crawling key pages."

---

## REQUIRED OUTPUT FORMAT

**ISSUE:** [restate the problem]

**ROOT CAUSE:** [what is actually causing it — plain English]

**DECISION MATRIX:**
| Field             | Answer                          |
|-------------------|---------------------------------|
| What it does      |                                 |
| Why now           |                                 |
| If ignored        |                                 |
| Time to implement |                                 |
| Technical risk    |                                 |
| Estimated upside  |                                 |
| Worth doing?      |                                 |

**FIX:**
[Production-ready code — complete file or exact replacement block]

**FILE TO UPDATE:**
[Exact filename and path]

**HOW TO DEPLOY:**
[Step-by-step for a non-technical operator — maximum 5 steps]

**HOW TO TEST:**
[How to confirm the fix worked — simple, specific]

**BEFORE / AFTER:**
[Expected metric improvement: e.g., LCP 3.8s → under 2.5s]

**NEXT STEP:**
[One action only after this is deployed]

---

## TECHNICAL STANDARDS

**Platform:** Custom HTML/CSS on Cloudflare Pages
**Deploy:** git push origin clean-main:main

**Performance targets:**
- Mobile PageSpeed: 85+
- LCP: under 2.5s
- CLS: under 0.1
- INP: under 200ms

**Image standards:**
- WebP format (AVIF where supported)
- Explicit width and height on every image
- fetchpriority="high" on LCP hero image — never lazy load it
- loading="lazy" on all images below the fold

**Font standards:**
- font-display: swap on all web fonts
- Subset fonts to used characters
- preconnect to font origins in <head>

**CSS standards:**
- Critical above-the-fold CSS inlined in <head>
- Non-critical CSS deferred
- No unused CSS loaded

**Cloudflare _headers file — required security headers:**
```
/*
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://clarity.ms; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com https://clarity.ms
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```
Note: Adjust CSP to match exact third-party domains used on the site.

**POPIA rule:**
GA4 and Clarity must not load until cookie consent is given.
No exceptions.

**Schema validation:**
All JSON-LD must pass https://validator.schema.org before publishing.

**robots.txt minimum:**
```
User-agent: *
Allow: /

Sitemap: https://www.fountaingrace.org/sitemap.xml
```
Never block CSS or JS files. Never block pages that should rank.

**Rollback plan:**
Always commit current state to Git before applying any fix.
Cloudflare Pages retains previous deployments — know how to roll back in the dashboard.
