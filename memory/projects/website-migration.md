# Project: FGI Website Migration

**Status:** Near go-live. All critical tasks done. Pending items require Ricardo's input.

## Folders
| Folder | What |
|--------|------|
| `/mnt/fgi-website` | Next.js site - only active codebase |

Static HTML version (`/mnt/fountaingrace.org`) is deprecated as of April 2026. Do not edit.

## Tech Stack
- Next.js 14 App Router, static export (`output: 'export'` in next.config.js)
- TypeScript + React
- Tailwind CSS
- Deployed: Cloudflare Pages (connected to GitHub repo ZaalRD7109/fountaingrace.org, branch clean-main)

## What Has Been Done

### Content Fixes
- Contact page: Real Google Maps iframe, real coordinates (-25.672286342520497, 28.172968674468688)
- Contact page: Removed [GOOGLE_BUSINESS_URL] placeholder from sameAs
- Home page: Removed [GOOGLE_BUSINESS_URL], added real social URLs (Facebook, YouTube, TikTok)
- Plan Your Visit: Parking FAQ → WhatsApp redirect
- What to Expect: Parking timeline → WhatsApp, children FAQ → WhatsApp
- Community Impact: Postcode fixed 0116 → 0182, PayFast removed from GEO block

### Donate Page
- DonateClient.tsx completely rebuilt from real live site content
- Includes: hero, trust bar, 6 program cards, amount selector (presets 150/350/600/1000)
- PayPal dynamic links: https://paypal.me/FGIPretoria/${amount}
- Direct EFT block (FNB acc 63132764499, branch 250655)
- WhatsApp giving option
- Full transparency section + NPO details
- Section 18A honestly disclosed as "not yet available"
- PayFast REMOVED entirely

### Legal Pages (all new)
- `app/privacy-policy/page.tsx` - POPIA-compliant, Information Officer, retention periods, POPIA rights
- `app/cookie-policy/page.tsx` - Cookie table: FGI_cookieConsent, GA4, Google Fonts, Maps
- `app/terms/page.tsx` - Site use, donations (non-refundable, 7-day error window), SA law

### Infrastructure
- `components/CookieBanner.tsx` - Bottom-right banner, localStorage key 'FGI_cookieConsent', accept/decline
- `components/Footer.tsx` - Added privacy policy, cookie policy, terms links in bottom bar
- `app/layout.tsx` - CookieBanner imported and added after WhatsAppButton
- `next.config.js` - 39 redirects (all old .html URLs, /give → /donate, /blog/:slug → /sermons, etc.)
- `app/sitemap.ts` - Legal pages and /programs added
- `public/og-image.jpg` - Copied from /mnt/fountaingrace.org/img/og-image.jpg (fixes social sharing)

## Pending - Needs Ricardo's Input
1. ~~**Fund allocation %**~~ - DONE. 58% food, 14% programme materials, 28% operational.
   - community-impact/page.tsx lines 233-235 filled
   - DonateClient.tsx: donut chart + progress bars added (FUND_SLICES constant at top of file)

2. **Forms backend** - Contact and volunteer forms use `action="#"` - need Formspree or similar

3. ~~**Google Analytics GA4**~~ - DONE. G-15FK8BTR4B installed in app/layout.tsx. Microsoft Clarity (wcq3d0ed7r) also installed.

4. **Google Ads conversion tracking** - Needed on donate and contact success pages

5. **Google Business Profile** - Claim, verify, then add URL to sameAs in app/page.tsx and app/contact/page.tsx

6. **PayFast** - Add back when verification resolved

## Go-Live Checklist
- [x] Legal pages live
- [x] Cookie banner live
- [x] Redirects configured
- [x] og-image.jpg in public/
- [x] PayFast removed
- [x] No placeholder text (except [X]% fund table)
- [ ] Fund % placeholders filled
- [ ] Forms backend connected
- [x] GA4 installed
- [x] Microsoft Clarity installed (wcq3d0ed7r)
- [x] Cloudflare Pages deployed (connected to clean-main, auto-deploys on push)
- [ ] Google Search Console: submit sitemap
- [ ] Google Business Profile claimed
- [ ] Google Ad Grants applied

## Key Decisions Made
- PayFast removed temporarily (Google Ad Grants risk, verification issues)
- Parking/transport/children questions all point to WhatsApp (+27 75 259 2555)
- Section 18A: disclosed honestly as not yet available
- Cookie consent: only load GA4 after user accepts
