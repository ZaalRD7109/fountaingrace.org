# Memory — FGI Website Project

## Me
Ricardo (zaalricardo@gmail.com). Managing Fountain of Grace International's website migration from static HTML to Next.js.

## Organisation
| Field | Value |
|-------|-------|
| **Name** | Fountain of Grace International |
| **Short** | FGI |
| **NPO** | 316-193 (Dept of Social Development, South Africa) |
| **Address** | 323 B Danie Theron Street, Pretoria North, Gauteng, 0182 |
| **Phone** | +27 75 259 2555 |
| **Email** | info@fountaingrace.org |
| **Domain** | https://www.fountaingrace.org |
| **PayPal** | https://paypal.me/FGIPretoria |
| **FNB Acc** | 63132764499, Branch 250655 |
| **Facebook** | https://www.facebook.com/FGIPta/ |
| **YouTube** | https://www.youtube.com/@fgipta |
| **TikTok** | https://www.tiktok.com/@fountainofgraceintl |
→ Full details: memory/context/organisation.md

## Active Project
| Name | What |
|------|------|
| **Website migration** | Next.js App Router site at `/mnt/fgi-website`. Deployed to Cloudflare Pages. Static HTML version is deprecated and no longer maintained. |
→ Details: memory/projects/website-migration.md

## Brand (locked — do not guess)

**Colour HIERARCHY decided 2026-08-06 (Ricardo handed the decision over: "it is the psychology of branding that will always win and not the person's preferences ... we make the choice today and we keep it"). Standard: `02-FGI/brand/FGI-Colour-Standard.pdf`.**

| Role | Colour | Share | Where |
|---|---|---|---|
| Identity | `#2a9df4` | - | The logo ONLY. Never text, never a filled button (2.91:1 both ways) |
| **Primary** | `#0d6fbf` | 40-60% | Headings, filled bars, buttons, the church's public face |
| Secondary | `#008080` (`#006b6b` as text) | 20-30% | The NPO side: governance, policies, community, pastoral |
| Accent | `#ffd700` | 5-10% | Rules, underlines, the one thing to click. Never text on white (1.40:1) |
| Dark | `#06243d` | - | Dark sections and video scrims, INSTEAD of pure black. Gold reads 11.28:1 on it |
| Body text | `#595959` | - | `#7d7d7d` measures 4.12:1 and fails |

The reason blue leads rather than teal: the logo is a blue fountain through a cross with gold rays, so blue is the name, not decoration. Teal kept winning by default only because `#2a9df4` is too light to carry text or hold white text - the fix was a darker blue of the same hue, not a different colour. **Public church surfaces lead blue. NPO and governance documents lead teal.** Do not reopen this.
The raw hex values (roles are the table above, not this one):

| Hex | Name |
|-----|------|
| `#ffffff` | White — backgrounds |
| `#000000` | FGI Black — logo background only. For dark SECTIONS use `#06243d` |
| `#2a9df4` | FGI Blue — the logo mark |
| `#0d6fbf` | FGI Working Blue — the primary in practice |
| `#ffd700` | FGI Gold — accent |
| `#008080` | FGI Teal — secondary, NPO context |
| `#06243d` | FGI Deep Blue — dark surfaces |
| `#7d7d7d` | FGI Grey — NOT for body text, use `#595959` |

**Accessible text variants (added 2026-08-03, do not undo).** The brand colours above are correct for logos, fills and large graphics, but three of them fail WCAG AA as small TEXT and Lighthouse flags them:

| Use | Colour | Why |
|-----|--------|-----|
| Blue TEXT or a button with white text | `#0d6fbf` | `#2a9df4` measures 2.90:1 both ways, needs 4.5 |
| Teal TEXT on white or mint | `#006b6b` | `#008080` measures 4.45:1 on the mint backgrounds |
| Grey body text | `#595959` | `#7d7d7d`, `#999` and `gray-400` all measure under 4:1 |
| Gold on teal | use white for TEXT | `#FFD600` on teal measures 3.0:1. Gold stays for borders and fills |

Never put a translucent WHITE or GOLD panel over the teal - it lifts the background to about `#128989` and drops white text to 4.2:1. Use `bg-black/15` with a white or gold border instead. Every page scored 100 on accessibility after this; keep it that way with `python3 /home/ricardo/workspace/scripts/site-speed/contrast_sweep.py --dry` if colours are ever added back.

Logo files: `public/logo.webp` (horizontal, 255x134), `public/logo-square.webp` (square, 512x512), `public/favicon.jpg` (40x40).
Typography: Poppins.
DO NOT use Ricardo's personal book brand (#00ced1) or the navy in tailwind.config.ts — those are wrong.
→ Full spec: memory/context/brand.md

## Analytics
| Tool | ID |
|------|------|
| **Google Analytics 4** | G-15FK8BTR4B |
| **Meta Pixel** | `2211800306311040` (dataset "FGI Website", created 2026-06-23 in the FGI Meta business "Fountain of Grace Ministries", business_id 157402573519371). Loaded in `components/AnalyticsLoader.tsx`, fires PageView + Lead/InitiateCheckout via `lib/tracking.ts`. The other two Meta datasets - FGI Messages (1433664817983649) and n8n AutoPoster (1338430963892130) - are NOT website pixels. |
| **Analytics consent** | OPT-OUT model since 2026-06-23 (for ad measurement): GA4 + Clarity + Meta Pixel load by default for every visitor unless they explicitly Decline the cookie banner. Set in `AnalyticsLoader.tsx` and `lib/tracking.ts` (consentGranted). Clarity masks personal data automatically. |
| **Microsoft Clarity** | `wrvix7z3n5` (LIVE - this is the ID hardcoded in `components/AnalyticsLoader.tsx` and serving real Clarity JS, verified 2026-06-23). The old note `wcq3d0ed7r` is WRONG - that ID returns HTTP 204 (not a real project), so its dashboard is empty. Log into clarity.microsoft.com and open project `wrvix7z3n5` to see data. **CORRECTED 2026-08-02: Clarity is NOT gated on accepting the banner.** `AnalyticsLoader.tsx` loads GA4 + Clarity + Meta Pixel for every visitor UNLESS `localStorage.FGI_cookieConsent === 'declined'`, which is the opt-out model set on 2026-06-23 and described correctly one row above. The old "only records visitors who accept" wording was left over from the pre-2026-06-23 opt-in setup and understates the data we actually hold. Verified against the live site the same day: the Clarity tag, the GA4 tag and the Meta Pixel all fetched and the Pixel fired a PageView with no banner interaction at all. **CORRECTED AGAIN 2026-08-03: Clarity has never actually recorded anything.** The loader tag comes from `www.clarity.ms`, which the CSP allowed, but the tag then pulls its real script from `scripts.clarity.ms` and its beacon from `c.clarity.ms`, and neither was in the CSP - so the browser blocked both and logged a console error on every page view. Found in a Lighthouse run while fixing the Ad Grant speed rejection. Both hosts added to `public/_headers`, along with `static.cloudflareinsights.com` which was blocked the same way. If the Clarity dashboard is still empty after 2026-08-03, that is the reason it was empty before. |

## Terms
| Term | Meaning |
|------|---------|
| **the site** | `/mnt/fgi-website` — Next.js App Router, only active codebase |
| **FGI** | Fountain of Grace International |
| **NPO** | Non-Profit Organisation (South African legal entity) |
| **POPIA** | Protection of Personal Information Act (SA privacy law) |
| **Impact Seed** | FGI entrepreneurship/skills training programme |
| **Section 18A** | SA tax-deductible donation cert — FGI does not have yet |
| **PayFast** | Removed from site (verification issues, Google Ad Grants risk) — DO NOT integrate |
| **Ad Grants** | Google Ad Grants — $10k/month free ads for NPOs, goal post-launch |

## PayPal Integration (Donation → Supabase)
- Supabase Edge Function deployed: `paypal-ipn`
- URL: `https://rdhtphruegorbeigyhto.supabase.co/functions/v1/paypal-ipn`
- Flow: PayPal payment → IPN webhook → verify with PayPal → upsert donor_profiles → insert journal_entries
- DonateClient.tsx updated to use PayPal form with notify_url pointing to Edge Function
- PayPal business email used: `info@fountaingrace.org` — confirm this is the correct PayPal account email
- Also set IPN URL in PayPal account: Profile → Selling Tools → Instant Payment Notifications

## Finance OS Integration
- Supabase project: rdhtphruegorbeigyhto
- Finance OS live at: https://finance.fountaingrace.org
- Settings page: banking + Section 18A + CIPC + VAT fields all restored
- Migration 013 applied: added bank_name, account_number, branch_code, account_type, section_18a, cipc_number to organisations table
- Cloudflare CI/CD fixed: deploy command updated to `npx opennextjs-cloudflare build && npx wrangler deploy`

## Old paths — DO NOT USE
- `C:\Users\User\FGI_Website\fountaingrace.org` — old static HTML site, deprecated
- `fountaingrace.org` mounted folder — same old site, do not read from it

## Sermon page convention (locked — Google Search Console rule)
When you copy an existing sermon `page.tsx` to add a new sermon, the JSON-LD date fields **must** be ISO 8601 with timezone, not date-only. Google's structured-data validator rejects date-only and the whole VideoObject error count goes back up.

- Right: `uploadDate: '2026-05-03T12:00:00+02:00'`
- Wrong: `uploadDate: '2026-05-03'`
- Same rule applies to `datePublished` on the Article block.

Use noon SAST (`T12:00:00+02:00`). It is a neutral time that cannot roll the sermon's apparent date into the wrong day for any viewer in any timezone. Don't use midnight, 23:00, or unusual hours.

The visible "preached on" date string and the listing-page `date` / `dateDisplay` fields are separate and stay as they are — those never leave the website, only Google ever reads the JSON-LD.

Background: Search Console flagged this on 2026-05-23. Fixed across 43 sermon pages and 47 Article blocks on 2026-05-27. See `docs/infrastructure/2026-05-27-fgi-video-uploaddate-fix.md` in the workspace repo.

## Preferences
- Keep writing simple, concise, no bullets in prose responses
- No emojis, no semicolons, no hashtags
- Avoid words list in system prompt (Hence, However, Innovative, etc.)
- Active voice, short sentences
- Do not duplicate work — check what's already done before acting
