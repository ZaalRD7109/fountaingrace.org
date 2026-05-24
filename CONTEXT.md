# CONTEXT — fountaingrace.org

Last audited: 2026-05-24

## Project name and purpose
Fountain of Grace International (FGI) church website. Registered NPO 316-193 (Dept of Social Development, South Africa) based at 323 B Danie Theron Street, Pretoria North, Gauteng, 0182. The site exists to convert a first-time visitor into a Sunday attendee, surface practical sermon content, take prayer and contact requests, drive donations to NPO programmes, and remain Google Ad Grants ready.

## Stack
- Framework: Next.js 14.2.35 (App Router) — bumped from 14.2.3 by Q1 on 2026-05-24
- Output: static export (`output: 'export'` in next.config.js, `images.unoptimized: true`)
- React 18.3.1, TypeScript 5, Tailwind 3.4.3, Poppins via next/font/google
- Package manager: npm
- Node modules installed locally as of 2026-05-24 (Q1 install)
- Forms backend: Supabase Edge Functions (Deno)
- Email: Resend (sender noreply@fountaingrace.org, recipient info@fountaingrace.org)
- Spam protection: Cloudflare Turnstile (real site key 0x4AAAAAADISxaCUIm1wYMw0)
- Payments: PayPal (one-time and monthly subscriptions) plus EFT into FNB 63132764499 / branch 250655
- Analytics: GA4 G-15FK8BTR4B and Microsoft Clarity wrvix7z3n5 (both gated on cookie consent)
- Conversion tracking: Facebook Pixel via fbq, Google Ads via gtag

## Hosting and deploy
- Cloudflare Pages serves the static export. Repo on GitHub at ZaalRD7109/fountaingrace.org. Deploy command Ricardo uses: `git push origin clean-main:main`.
- Cloudflare Worker `fgi-apex-redirect` (source in `apex-redirect-worker/`) handles apex → www 301 with 1 hour cache. Account 562021304fa80353a114b0b9fe662364, route `fountaingrace.org/*`, zone c8aedf54fd9e2cfc49778e4d415f0012. `wrangler.toml` has `workers_dev = true`.
- `public/_headers` applies a tight CSP (default-src 'self', script-src whitelist for GTM, GA, Clarity, Turnstile, Facebook, font-src self plus Google Fonts, frame-src YouTube and Google Maps and Turnstile, connect-src includes both Supabase projects rmurdihrhcxevtzkrbmx and rdhtphruegorbeigyhto and Resend API), X-Frame-Options DENY, X-Content-Type-Options nosniff, Referrer-Policy strict-origin-when-cross-origin, Permissions-Policy disables camera/mic/geo, HSTS max-age 31536000 with includeSubDomains and preload.
- `public/_redirects` contains 150+ rules: legacy .html → clean URLs, sermon shortlinks for YouTube descriptions with full UTM payloads, /blog/* → /sermons, social bio shortcuts (/yt, /fb, /ig, /tt), Google Ads (/ga/...) and Facebook Ads (/fa/...) inbound tracking, and canonical consolidation (/sunday-services → /plan-your-visit, /church-pretoria-north → /).
- Vercel: not used.
- Local wrangler CLI not installed (cannot interrogate Cloudflare zone state from this terminal).

## Primary flow
1. Visitor lands on `/` (home). Hero CTA "Plan Your Visit" (primary) and "Watch a Sermon" (secondary). Address, phone, 09:00 Sunday time visible above the fold.
2. Visitor clicks Plan Your Visit → `/plan-your-visit`. FAQ block sits above the form to neutralise objections (parking, dress, being singled out). Form requires name, email, planned date (defaults to next Sunday), Turnstile token. Optional: phone, kids, heard-via source.
3. Form POSTs to `${EDGE_BASE}/handle-visit-form` where EDGE_BASE defaults to `https://rmurdihrhcxevtzkrbmx.supabase.co/functions/v1`. Edge function: validates fields, verifies Turnstile, inserts into `visitor_submissions` (with `followup_stage:0`, `followup_done:false`), sends confirmation email to visitor and notification email to info@fountaingrace.org with WhatsApp deep link to the visitor's first name.
4. Visitor is redirected to `/thank-you/visit`. Conversion fires `form_submit_success` on GA4 and `Lead` on Facebook Pixel (consent-gated).
5. `send-followup-email` Edge Function (auth required: Bearer SUPABASE_SERVICE_ROLE_KEY) runs through stages 1-8 of an 8-email drop sequence over 42 days, gated on `daysSince(created_at)` thresholds [0, 1, 3, 7, 14, 21, 28, 35, 42]. Sets `followup_done:true` when stage 8 completes.

## Secondary flows
- Sermons: `/sermons` index lists 55 messages. Each sermon detail at `/sermons/<slug>`. Some older sermons lack a YouTube embed (10 noted in memory). YouTube → website only, never the reverse, to protect site CTR and session duration.
- Prayer: `/prayer` → `handle-prayer-form` → `prayer_requests` table → email to info@.
- Contact: `/contact` → `handle-contact-form` → `contact_submissions` table → email to info@.
- Volunteer: `/volunteer` → `handle-volunteer-form` → `volunteer_submissions` table → email to info@.
- Donate: `/donate` posts directly to PayPal (no proxy). Monthly subscription forms use `cmd=_xclick-subscriptions`. One-time donation form sets `notify_url` to `https://rdhtphruegorbeigyhto.supabase.co/functions/v1/paypal-ipn` (Finance OS project — different Supabase project from the form Edge Functions). EFT details and a WhatsApp give option are shown alongside.
- Resources, Devotional, Stories: SEO content tiers targeting general search intent (resources), existing community (devotional), and donors (stories).
- About / Pastors / What We Believe / FAQ: trust-building pages indexable from sitemap and footer.
- Legal: Privacy Policy, Cookie Policy, Terms — all POPIA-aware and linked in footer.
- Sticky WhatsApp button (bottom-right) on every page → `https://wa.me/27752592555`.

## Integrations
- Supabase project rmurdihrhcxevtzkrbmx — forms backend (handle-contact-form, handle-visit-form, handle-prayer-form, handle-volunteer-form, send-followup-email). Tables referenced: visitor_submissions, prayer_requests, contact_submissions, volunteer_submissions.
- Supabase project rdhtphruegorbeigyhto — Finance OS (separate project), hosts the `paypal-ipn` Edge Function consumed by the donate flow.
- Resend — transactional email. DNS records (DKIM, SPF CNAME, SPF TXT, DMARC) added to Cloudflare on 2026-05-01; verification was pending at last log. Status today not verified in this audit.
- Cloudflare Turnstile — real site key live. Secret stored as `TURNSTILE_SECRET_KEY` in the forms project's Edge Function secrets.
- PayPal — business account `info@fountaingrace.org`, currency ZAR. IPN URL set on the one-time donate form.
- GA4, Microsoft Clarity, Facebook Pixel — all consent-gated via `localStorage.FGI_cookieConsent === 'accepted'`. Loader fires on the `fgi:consent-accepted` window event from CookieBanner.
- Google Maps embed on `/contact` (frame-src whitelisted in CSP).
- IndexNow key `fgi-indexnow-7f4a2b9c` published at `/fgi-indexnow-7f4a2b9c.txt` and referenced in metadata.
- BingSiteAuth.xml present in public/ (Bing Webmaster verification).
- llms.txt published at `/llms.txt` — full structured organisation profile for AI crawlers (GPTBot, Claude-Web, PerplexityBot explicitly allowed in robots.ts).

## Automations and health-check status
| Automation | What it does | Trigger | Health-check companion |
|---|---|---|---|
| `handle-visit-form` | Insert visitor + dual email | HTTP POST from VisitForm | None. Silent failure path: try/catch logs `console.error` and returns 500. No external uptime ping. |
| `handle-contact-form` | Insert contact + email | HTTP POST | None. Same pattern. |
| `handle-prayer-form` | Insert prayer + email | HTTP POST | None. |
| `handle-volunteer-form` | Insert volunteer + email | HTTP POST | None. |
| `send-followup-email` | Drip-send 8 follow-up emails over 42 days from `visitor_submissions` | Authenticated invocation (Bearer service role key). No cron defined in this repo. | None. No health-check workflow. No alert if a run errors, hits Resend quota, or stops running entirely. Violates the rule "every automation needs a health-check companion". |
| `fgi-apex-redirect` Worker | 301 apex → www | Cloudflare route `fountaingrace.org/*` | None visible in this repo. Could be a synthetic curl-based check from Vultr. |
| `paypal-ipn` Edge Function | Verify PayPal IPN, upsert donor profile, insert journal entry | PayPal POST | Lives in Finance OS repo — not audited here. |
| Daily schema monitor `fgi-schema-daily-check` (referenced in memory) | Checks Event schema dates at 08:00 daily | Scheduled task (location not in this repo) | Itself acts as the health check, but no meta-check on the meta-check. |

## SEO / AEO / GEO state
- Metadata: `metadataBase` set to www, per-page `title`, `description`, canonical, OpenGraph, Twitter (`summary_large_image`, `@FGIPta`). Global fallback OG image at `/og-image.jpg` (1200x630). Twitter card configured.
- Verification: Google site verification token in root metadata. Bing verification XML in public/.
- JSON-LD types in use:
  - Home (`/`): `Church`+`Organization`+`NGO` (combined `@type` array), `WebSite` with `SearchAction`, `FAQPage`, `BreadcrumbList`, `Event` (Sunday Service with build-time next-Sunday date).
  - Plan Your Visit: `Event` plus `BreadcrumbList`.
  - Community Impact: `NGO`+`Organization` with `hasCredential` (NPO 316-193).
  - Sermons index: site-level metadata only (no ItemList confirmed in spot check).
  - Sermon detail: not spot-checked in this audit. VideoObject + Article expected for YouTube-embedded sermons.
  - LocalBusiness type: NOT present anywhere. Audit protocol lists LocalBusiness as required.
- sitemap.ts: 94 entries covering core pages, all sermons with per-entry lastModified dates, resources, devotionals, stories, legal. Priorities and changeFrequency set sensibly.
- robots.ts: allows all by default, explicit allow for GPTBot, Claude-Web, PerplexityBot, Googlebot. Sitemap and host declared.
- Page speed signals: static export + unoptimized images, but per-image `sizes` props supplied; WebP variants present for hero, sunday-service, pastor-ricardo, logo-square. Poppins loaded with 5 weights — potential to trim. dns-prefetch on GTM, Clarity, Turnstile. Turnstile script loaded `strategy="lazyOnload"`.
- Accessibility: skip-to-main link present and styled for focus visibility. Most icons have `aria-hidden="true"` or `aria-label`. Header has `aria-expanded` and `aria-label` on mobile menu button. Forms use `<label htmlFor>` and `required` attributes. Body uses semantic `<header>`, `<main>`, `<footer>`, `<address>`, `<nav>`, `<dl>` blocks.
- AEO signals: FAQ blocks on home and plan-your-visit with question-and-answer DOM matching the FAQPage schema. Short factual paragraphs throughout. Sermon titles phrased as problem statements.
- GEO signals: explicit `<div class="geo-block">` paragraphs on home and plan-your-visit. NPO + address + service time repeated across pages. Pastor named in content with byline. Internal link density looks healthy from spot checks.
- llms.txt: high quality, complete organisation profile including service area suburbs, donation paths, social URLs, and an explicit "For AI assistants" recommendation paragraph.

## Known issues (factual, observed in this audit)
1. **Q1 (2026-05-24): patched Next.js 14.2.3 → 14.2.35.** Build verified clean. npm audit severity reduced from 1 critical + 1 moderate to 1 high + 1 moderate. The 4 originally-cited GHSAs (h64f-5h5j-jqjh, c4j6-fc7j-m34r, wfc6-r584-vfw7, 36qx-fr4f-26g5) were addressed by this patch as the original advisory recommendation. Since then, npm's advisory DB has been updated to flag additional CVEs across the entire Next 14.x line that the DB now claims only Next 16.2.6 fixes (e.g., GHSA-9g9p-9gw9-jx7f Image Optimizer remotePatterns DoS, GHSA-3g8h-86w9-wvmq middleware cache poisoning, GHSA-ffhc-5mcf-pf4q App Router CSP nonce XSS, plus ~10 others). Realistic exposure on this static-export Cloudflare Pages deployment is very low: Image Optimization API is disabled (`images.unoptimized: true`), there is no middleware, no SSR Server Components, no Next runtime serving requests — Next is build-time only. Ricardo accepted residual for Q1 scope on 2026-05-24. Next 16 migration is a separate decision to be planned outside Q1.
2. `postcss <8.5.10` still flagged via Next transitive dep after Q1 (Next bundles its own postcss). Same residual scope as #1 — only Next 16 fixes per current advisory DB. Build does not invoke the affected stringify path.
3. `tailwind.config.ts` brand colours (navy `#001F54`, teal `#00796B`, gold `#FFD600`) do NOT match the locked palette in project CLAUDE.md (`#2a9df4`, `#008080`, `#ffd700`). CLAUDE.md explicitly flags these as wrong. Pages all use hex literals inline, so the config tokens are dormant — but they are a footgun for any auto-generated page that resolves `brand.teal`.
4. `send-followup-email` has no scheduled invoker defined in this repo and no health-check companion. If the cron stops firing, no one knows.
5. None of the four form Edge Functions emit telemetry or have an uptime probe.
6. No `app/not-found.tsx`. Static export falls back to a generic 404 served by Cloudflare Pages.
7. No `app/error.tsx` for runtime client errors.
8. Apex redirect worker has no automated verification — `curl -I https://fountaingrace.org/` would have to be done manually.
9. Two Supabase projects in play (`rmurdihrhcxevtzkrbmx` for forms, `rdhtphruegorbeigyhto` for Finance OS). PayPal IPN is wired to the Finance OS project. Worth confirming the donor data lands where Ricardo expects.
10. Resend domain verification was pending on 2026-05-01 per project memory. Today is 2026-05-24. Not re-verified in this audit.
11. Header JSON-LD logo points to `/logo-square.png` but the visual UI mixes `/logo.jpg` (Header), `/logo-square.webp` (Footer), and `/logo.webp` (CLAUDE.md says canonical horizontal). Inconsistent.
12. Mobile header: above the fold a user only sees the logo and a hamburger. Plan Your Visit is not visible until the menu is opened. Desktop is fine. Audit protocol requires Plan Your Visit "above the fold every page".
13. Five Poppins font weights loaded (400, 500, 600, 700, 800). Spot-checked pages use 600, 700, 800 mostly. Two weights look removable.
14. No LocalBusiness JSON-LD anywhere. Audit protocol lists this as required for the church site.
15. `deploy-fix.bat` hardcodes a Windows path (`C:\Users\User\Projects\fgi-website`). Workspace is Linux now. Legacy file.
16. `apple-icon.jpg` lives at repo root but Next 14 conventions put icons in `app/`. `app/icon.png` is the one Next actually wires up. Root file is likely unused.
17. 10 older sermon pages have text content only, no YouTube embed (listed in `memory/projects/website-migration.md`).
18. Sermons index page is hand-maintained in `app/sermons/page.tsx` (typed array of objects). The sitemap is also a hand-maintained list. Two sources of truth for sermon metadata.
19. `lib/edgeBase.ts` correctly hardcodes the forms Supabase URL as a fallback for resilience, but it means the wrong Supabase URL would silently work in dev if `NEXT_PUBLIC_SUPABASE_EDGE_BASE` were never set.
20. No `.env.example` or env reference file at repo root — onboarding any future contributor would need the CLAUDE.md table.
21. Google Business Profile is not yet linked in `Organization.sameAs` on the home page (audit protocol item, called out in memory pending list).
22. Google Search Console sitemap submission still pending per project memory.

## Pre-flight artefact
- Drive folder for this repo: https://drive.google.com/drive/folders/1ZZrIyr5hEIH8UGtLKir0P20Dmq58-TFm
- State file: `.audit-state.json` at repo root, backed up to `/R&R-FGI-Backups/fountaingrace.org/state/`
- All folders and backups owned by info@fountaingrace.org
