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
| Hex | Use |
|-----|-----|
| `#ffffff` | White — backgrounds |
| `#2a9df4` | FGI Blue — primary, logo, CTAs |
| `#ffd700` | FGI Gold — accent, highlights |
| `#008080` | FGI Teal — secondary, NPO context |
| `#7d7d7d` | FGI Grey — body text |

Logo files: `public/logo.webp` (horizontal, 255x134), `public/logo-square.webp` (square, 512x512), `public/favicon.jpg` (40x40).
Typography: Poppins.
DO NOT use Ricardo's personal book brand (#00ced1) or the navy in tailwind.config.ts — those are wrong.
→ Full spec: memory/context/brand.md

## Analytics
| Tool | ID |
|------|------|
| **Google Analytics 4** | G-15FK8BTR4B |
| **Microsoft Clarity** | wcq3d0ed7r |

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

## Preferences
- Keep writing simple, concise, no bullets in prose responses
- No emojis, no semicolons, no hashtags
- Avoid words list in system prompt (Hence, However, Innovative, etc.)
- Active voice, short sentences
- Do not duplicate work — check what's already done before acting
