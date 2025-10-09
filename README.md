# Fountain of Grace International — Deployment & Ops Guide

## 1) Deploy to GitHub + Vercel
1. Create a **public repo** and add all files from this project.
2. In Vercel, **New Project → Import** the repo.
3. Framework preset: **Other**; Output directory: **/** (root). No build step needed.
4. Add your domain: **fountaingrace.org** → set **www** → redirect non‑www to **www** or vice versa (match canonical).

## 2) Configure Donations
### PayFast (ZAR)
- Replace `YOUR_MERCHANT_ID` and `YOUR_MERCHANT_KEY` in `donate.html`.
- Set `notify_url` to a listener you control (e.g., n8n webhook) for IPN.

### PayPal (International)
- Replace `business=info%40fountaingrace.org` in the PayPal link with your **PayPal merchant email or ID**.
- Currency is `ZAR`.

## 3) Image Compression & Lazy Loading
- Replace placeholders in `assets/img/` with your real images.
- Use Squoosh (web) or Squoosh CLI to export **hero.webp** (1900×900, ~70 quality) and **og-image.jpg** (1200×630, <200KB).
- All `<img>` tags include `loading="lazy"` where appropriate and `decoding="async"`. Keep width/height attributes.

## 4) Performance Targets (< 2s)
- System fonts only; single CSS and tiny deferred JS.
- Preload the hero image; lazy-load the rest.
- Vercel edge hosting + compression by default.

## 5) Accessibility
- Skip link, focus outlines, color contrast safe.
- Ensure final alt text is accurate for your real photos.

## 6) SEO/AEO Content Plan (South Africa)
Core keywords: christian charity south africa, nonprofit pretoria, npo pretoria north, donate to charity south africa, npo donations, church charity pretoria, food relief pretoria, youth mentorship pretoria, addiction recovery pretoria, prayer line south africa

## 7) Structured Data
- Organization (home), FAQPage (home/get-involved), DonateAction (donate), Article (blog posts).

## 8) Final Checklist
- Replace merchant IDs and PayPal business.
- Drop in real logo.svg/hero.webp/og-image.jpg.
- Verify sitemap in Search Console.
- DNS + redirects consistent with canonical.
- Test a small R10 donation.
