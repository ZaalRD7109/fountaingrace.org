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

### 2026-05-01 - f38b94a
**Replace Turnstile test key with real site key - "For testing only" red text gone**
- Cloudflare Turnstile widget created for fountaingrace.org (via API)
- Site key `0x4AAAAAADISxaCUIm1wYMw0` hardcoded as fallback in TurnstileWidget.tsx
- Secret key added to Supabase Edge Function secrets as `TURNSTILE_SECRET_KEY`
- Real spam protection now active on all 4 forms - no more red test warning

### 2026-05-01 - DNS/Resend (no code commit)
**Add Resend DNS records to Cloudflare - email notifications active pending propagation**
- DKIM TXT (resend._domainkey), SPF CNAME (send), SPF TXT (send), DMARC TXT (_dmarc) added to Cloudflare DNS
- Resend domain fountaingrace.org status: pending verification
- Cloudflare is authoritative - propagation expected within minutes
- Once verified: all 4 form Edge Functions will send email to info@fountaingrace.org on every submission
- Sender: noreply@fountaingrace.org (Resend) | Recipient: info@fountaingrace.org

### 2026-05-01 - 30dfacc
**Deploy Supabase Edge Functions and wire up all 4 forms end-to-end**
- 4 Edge Functions deployed and ACTIVE on Supabase project rmurdihrhcxevtzkrbmx:
  - `handle-contact-form` - saves to contact_submissions table
  - `handle-visit-form` - saves to visitor_submissions table
  - `handle-prayer-form` - saves to prayer_requests table
  - `handle-volunteer-form` - saves to volunteer_submissions table
- Each function: validates input, verifies Turnstile (skips if `TURNSTILE_SECRET_KEY` not set), saves to DB, sends Resend email (skips if `RESEND_API_KEY` not set)
- `lib/edgeBase.ts`: hardcodes Supabase URL as fallback - forms work even without env vars set in Cloudflare Pages
- `TurnstileWidget.tsx`: falls back to Cloudflare official test key `1x00000000000000000000AA` - widget renders on live site immediately
- Forms are now FULLY FUNCTIONAL. Submissions land in Supabase DB. Email notifications pending Resend setup.

### 2026-05-01 - 3078631
**Add 6 new content pages: Resources and Devotional now at 5 articles each**
- Resources: added `why-do-good-people-suffer` and `how-to-start-over`
- Devotional: added `when-god-seems-silent`, `one-question-before-sunday`, `what-sunday-is-not`, `the-week-did-not-go-as-planned`
- Updated `app/resources/page.tsx` index array - all 5 articles now showing
- Updated `app/devotional/page.tsx` index array - all 5 devotionals now showing
- Updated `app/sitemap.ts` with all new article URLs (4 Resources + 5 Devotional entries)

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

1. **YouTube Studio updates** - Claude did the first 13 sermon tracking links via browser automation. Still need tracking links added for these 6 older sermons (redirects already in _redirects):
   - fountaingrace.org/s/releasing-his-presence
   - fountaingrace.org/s/speak-prophetic
   - fountaingrace.org/s/not-lazy
   - fountaingrace.org/s/inheritance-test
   - fountaingrace.org/s/language-of-spirit
   - fountaingrace.org/s/prophetic-encounter

2. **Email notifications - Resend DNS PENDING VERIFICATION** (2026-05-01):
   - RESEND_API_KEY: added to Supabase Edge Function secrets - DONE
   - DNS records added to Cloudflare manually - DONE (2026-05-01):
     - TXT resend._domainkey - DKIM key added
     - CNAME send -> feedback-smtp.eu-west-1.amazonses.com - SPF bounce
     - TXT send -> v=spf1 include:amazonses.com ~all - SPF
     - TXT _dmarc -> v=DMARC1; p=none; - DMARC (optional)
   - Resend domain status: PENDING (verification running, Cloudflare propagates in minutes)
   - Sender: noreply@fountaingrace.org | Recipient: info@fountaingrace.org
   - Once verified: every form submission emails info@fountaingrace.org instantly

3. **Real spam protection - Cloudflare Turnstile** - DONE (2026-05-01)
   - Widget created for fountaingrace.org. Site key hardcoded in TurnstileWidget.tsx.
   - TURNSTILE_SECRET_KEY saved to Supabase Edge Function secrets.
   - All 4 forms now have real spam protection. Red "For testing only" text gone.

3. **Conversion tracking + form-abandonment retargeting** - Needs to fire on all success pages
   - **Success pages already exist** (noindex): `/thank-you/contact`, `/thank-you/prayer`, `/thank-you/visit`, `/thank-you/volunteer`, plus the donate success state on `/donate`. Old static URL `/contact-success.htm` is gone — use the new clean URLs.
   - **Fire conversion events** on those pages: GA4 (`form_submit_success` event with form name), Google Ads conversion tag, Meta Pixel `Lead` event, Microsoft Clarity custom tag. Each platform needs its own conversion ID/label set up in the ad account first.
   - **Abandonment retargeting**: build remarketing audiences from "visited form page (contact / prayer / plan-your-visit / volunteer / donate) AND did NOT visit matching /thank-you/* page" in Google Ads and Meta. Run "you filled in the form and did not finish, how can we help?" ads against those audiences. Requires GA4 audiences synced to Google Ads, and Meta Pixel custom audiences with URL inclusion/exclusion rules.
   - **Form-start event** (optional but improves audience accuracy): fire `form_start` on first field focus so we can build the funnel `form_start → form_submit_success` and measure drop-off rate.

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

8. **Daily schema monitor** - Scheduled task `fgi-schema-daily-check` created to run at 08:00 daily. Checks Event schema dates and alerts if invalid datetime found (the startDate/endDate bug from Google Search Console error email).

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
