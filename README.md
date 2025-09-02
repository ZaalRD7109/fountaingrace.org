# Fountain of Grace International — Website (Astro + Vercel)

## Quick Start
1) Install Node 18+ and PNPM or NPM.
2) `npm install`
3) `npm run dev`

## Deploy on Vercel
- Push this repo to GitHub.
- In Vercel, import the repo → Framework: Astro → Deploy.
- Add `fountaingrace.org` as a domain in Vercel.
- In GoDaddy DNS:
    - Keep MX records (email) as-is.
    - Add A record (@) → 76.76.21.21
    - Add CNAME (www) → cname.vercel-dns.com
- Wait up to 30 minutes for DNS.

## Customize
- Edit `src/pages/index.astro` to update times/locations.
- Replace donate link in `src/pages/give.astro`.
- Blog lives at `src/pages/blog/`.
