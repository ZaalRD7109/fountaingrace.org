# Project: FGI Website - Work Log

**Status:** Live and deployed. Continuous improvement in progress.
**Last updated:** 2026-04-27

## Tech Stack
- Next.js 14 App Router, static export (`output: 'export'` in next.config.js)
- TypeScript + React
- Tailwind CSS
- Deployed: Cloudflare Pages (GitHub repo ZaalRD7109/fountaingrace.org, branch clean-main)
- Deploy command: `git push origin clean-main:main`
- GA4: G-15FK8BTR4B | Microsoft Clarity: wcq3d0ed7r

---

## Coding Rules (apply to every commit)

1. Run `npm run build` before every commit - zero errors required
2. Never use em dashes (—) anywhere - use plain hyphen (-) instead
3. Every PII touchpoint (email, phone, name, ID) needs full POPIA/GDPR 7-point consent disclosure
4. Use Node.js `fs` with explicit `'utf8'` encoding for any bulk file operations - never PowerShell for UTF-8 files
5. Bio links (/yt /fb /ig /tt) redirect with UTM params - do not change these
6. fgi-link class is the standard for all inline content links across the site

---

## Commit History (newest first)

### 2026-04-27 - b11d871
**Add sermon UTM links and ad tracking redirects**
- Added 13 short sermon links (`/s/<slug>`) in `public/_redirects` for YouTube video descriptions
- Added `/ga/<campaign>` routes for Google Ads inbound tracking (awareness, visit, give, sermon-retarget)
- Added `/fa/<campaign>` routes for Facebook/Instagram Ads inbound tracking
- All carry full UTM params: source, medium, campaign, content
- Ricardo must paste sermon short links manually into YouTube Studio video descriptions

### 2026-04-27 - 286e62e
**Remove all em dashes site-wide**
- Replaced every — with plain hyphen (-) across 47 files
- Covered: all app/ pages, components/, memory/ files
- Permanent rule: em dashes banned from all future output

### 2026-04-27 - 9bd2b02
**Apply fgi-link hover effect to all 35 pages site-wide**
- Every inline content link across all 35 page files now uses the `fgi-link` CSS class
- Replaced old pattern `text-[#008080] font-semibold hover:underline` site-wide
- Done via Node.js UTF-8 safe bulk replacement (PowerShell corrupts encoding - do not use for this)

### 2026-04-27 - 16a5720
**Add fgi-link hover effect - sliding underline, pure CSS, zero JS weight**
- Added `.fgi-link` and `.fgi-link-light` to `app/globals.css` under `@layer components`
- Effect: sliding underline grows left to right on hover using `background-size` transition
- GPU-accelerated, no JavaScript, no performance cost
- `.fgi-link` for links on white/light backgrounds (teal underline)
- `.fgi-link-light` for links on dark/teal backgrounds (gold underline)

### 2026-04-27 - 9d745b2
**FAQ: add internal links to every answer**
- Restructured `FaqItem` interface: `{ q, a: ReactNode, aText: string }`
- `a` field: JSX with `<Link>` and `<a>` elements for display
- `aText` field: plain text for JSON-LD FAQPage schema (Google gets clean text)
- Added 14+ internal links across all FAQ answers: /contact, /sunday-services, /what-to-expect, /plan-your-visit, /pastors, /about, /sermons, /community-impact, /prayer, /donate, /volunteer, WhatsApp deep links

### 2026-04-27 - 587720d
**Fix truncated page.tsx - add missing closing tags to HomePage component**
- CRITICAL FIX: `app/page.tsx` was missing `</>`, `)`, `}` at end of file
- This caused every Cloudflare Pages build to fail silently since the truncation
- All changes made before this fix were NOT live on the website - they deployed all at once after this fix
- Also fixed double-comma syntax: `},,` to `},` in jsonLd array

### 2026-04-27 - ad129ea
**Add POPIA/GDPR consent disclosure to devotional signup sections**
- Added devotional signup section to `app/page.tsx` (homepage) and `app/sermons/page.tsx`
- Both WhatsApp and email options (South Africans use both)
- Full 7-point POPIA/GDPR consent disclosure on both touchpoints
- Green WhatsApp button, teal email button

### Earlier commits (pre-2026-04-27 session)

**Donate page rebuild** (`components/DonateClient.tsx`)
- Added full monthly giving section above one-time PayPal form
- 4 PayPal subscription buttons: R150/R350/R600/R1000 per month using `cmd=_xclick-subscriptions`
- Updated donut chart SVG year label from 2025 to 2026
- PayFast removed entirely

**Security headers** (`public/_headers`)
- Added missing `X-Frame-Options: DENY` (was the only one of 6 required headers missing)
- Full CSP, HSTS, Referrer-Policy, Permissions-Policy, X-Content-Type-Options in place

**Legal pages (all new)**
- `app/privacy-policy/page.tsx` - POPIA-compliant, Information Officer, retention periods
- `app/cookie-policy/page.tsx` - Cookie table: FGI_cookieConsent, GA4, Google Fonts, Maps
- `app/terms/page.tsx` - Site use, donations (non-refundable, 7-day error window), SA law

**Infrastructure**
- `components/CookieBanner.tsx` - Bottom-right banner, localStorage key FGI_cookieConsent, accept/decline
- GA4 and Clarity both gated behind `FGI_cookieConsent === 'accepted'`
- `app/layout.tsx` - CookieBanner imported and rendered
- `app/sitemap.ts` - All pages including legal pages listed
- `public/og-image.jpg` - Added for social sharing
- `next.config.js` - 39 redirects covering old .html URLs, /give, /blog/:slug, etc.

**Contact page**
- Real Google Maps iframe with correct coordinates (-25.672286342520497, 28.172968674468688)
- Removed all placeholder text

**Bio link redirects** (`public/_redirects`)
- /yt, /fb, /ig, /tt all redirect to homepage with full UTM params
- /facebook, /youtube, /tiktok redirect to FGI social profiles
- /visit, /give, /watch short links active

---

## Pending - Needs Ricardo's Input

1. **YouTube Studio updates** - Paste sermon short links into each video description manually:
   - fountaingrace.org/s/right-action
   - fountaingrace.org/s/the-principles
   - fountaingrace.org/s/the-system
   - fountaingrace.org/s/what-if-someone-else
   - fountaingrace.org/s/when-good-things
   - fountaingrace.org/s/when-knowing
   - fountaingrace.org/s/why-collapsing
   - fountaingrace.org/s/why-some-problems
   - fountaingrace.org/s/why-some-things
   - fountaingrace.org/s/not-moving-forward
   - fountaingrace.org/s/prayers-not-changing
   - fountaingrace.org/s/in-the-game
   - fountaingrace.org/s/resolution

2. **Forms backend** - Contact and volunteer forms use `action="#"` - need Formspree or Supabase connected

3. **Google Ads conversion tracking** - Needs to fire on donate and contact success pages

4. **Google Business Profile** - Claim, verify, then add URL to sameAs in app/page.tsx and app/contact/page.tsx

5. **10 older sermon pages without YouTube IDs** - These pages have text content only, no embedded video:
   - be-a-doer-of-gods-word-not-just-a-hearer
   - faith-is-the-router-that-connects-you-to-gods-supply
   - follow-your-inner-voice-discover-your-destiny
   - hosting-the-presence-of-god
   - no-more-waiting-rooms-god-is-live-now
   - pruning-for-progress
   - the-anointing-that-makes-hell-fear-you
   - the-danger-of-overnight-success
   - the-principle-that-activates-everything
   - the-silent-assassin-of-destiny

6. **Google Search Console** - Submit sitemap at https://www.fountaingrace.org/sitemap.xml

7. **PageSpeed Insights** - Run audit and fix any issues above Core Web Vitals threshold

---

## Key Decisions Made

- PayFast removed temporarily (Google Ad Grants risk, verification issues) - add back when resolved
- Parking/transport/children questions all point to WhatsApp (+27 75 259 2555)
- Section 18A disclosed honestly as not yet available
- Cookie consent: GA4 and Clarity only load after user accepts
- No "Watch on YouTube" links on sermon pages - keeps visitors on site for CTR and session duration (targeting 5% Google Ads CTR)
- YouTube traffic flows one direction only: YouTube description to website, not website to YouTube
- Vanity bio links (/yt /fb /ig /tt) are for platform-level tracking; /ga/ and /fa/ prefixes are for specific ad campaigns
- Em dashes banned site-wide - use plain hyphen only
- PowerShell corrupts UTF-8 (em dashes, middle dots) - always use Node.js fs with explicit 'utf8' for bulk file ops
