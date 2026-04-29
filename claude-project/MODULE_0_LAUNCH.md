# MODULE 0 — SITE LAUNCH SPRINT
# Use: RIGHT NOW. Run this once to build the full foundation.
# After this module is complete, switch to Modules 1–6 for ongoing maintenance.
# Trigger: "Run Module 0, Session [A / B / C / D / E / F]."

---

## WHAT THIS MODULE DOES

This is the one-time build sprint.
It fixes everything on the current site that is missing or broken.
It delivers real, production-ready code and copy — not plans or lists.
Run one session at a time. Deploy after each session. Then run the next.

When all 6 sessions are complete, the site is launch-ready.
After that, Modules 1–6 take over for ongoing maintenance.

---

## SESSION ORDER — DO NOT SKIP AHEAD

Run sessions in this exact order. Each session depends on the previous.

| Session | Focus                                | Time estimate  | Deploy after? |
|---------|--------------------------------------|----------------|---------------|
| A       | Foundation files + meta tags         | 1–2 hours      | Yes           |
| B       | All JSON-LD schema                   | 1–2 hours      | Yes           |
| C       | Trust and conversion pages           | 2–3 hours      | Yes           |
| D       | Performance fixes                    | 1–2 hours      | Yes           |
| E       | AI visibility + content gaps         | 1–2 hours      | Yes           |
| F       | POPIA, legal, and final check        | 1 hour         | Yes           |

---

## SESSION A — FOUNDATION FILES AND META TAGS
Trigger: "Run Module 0, Session A."

### What gets built in this session:

**1. robots.txt** (create or replace)
Correct version that allows all key pages and points to sitemap.
Deliver complete file ready to place at site root.

**2. sitemap.xml** (create or replace)
All current pages listed with correct URLs.
Deliver complete file ready to place at site root.
Include: homepage, about, contact, sermons, events, donate, FAQ, plan-your-visit, prayer.

**3. Cloudflare _headers file** (create or replace)
Security headers for all pages:
- Content-Security-Policy (matched to actual third-party domains used)
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: camera=(), microphone=(), geolocation=()
- Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
Deliver complete _headers file ready for Cloudflare Pages root.

**4. Cloudflare _redirects file** (create or replace)
Ensure www to non-www (or vice versa) is consistent.
Catch any old URLs that may have changed.
Deliver complete _redirects file.

**5. Meta tags audit and fixes — every page**
For each page that exists on the site, deliver:
- Meta title (unique, under 60 chars, keyword-rich)
- Meta description (unique, under 160 chars, compelling)
- Canonical tag (self-referencing)

**6. Open Graph tags — every page**
For each page, deliver:
- og:title
- og:description
- og:image (note: 1200x630px — operator must supply image file)
- og:url
- og:type

**7. Web app manifest** (create if missing)
manifest.json with name, short_name, theme_color (#2a9df4), background_color (#FFFFFF).
Link tag in <head> on every page.

**Deliver:** Complete files. List of every page updated and what changed.
**After session A:** Commit to clean-main. Deploy. Verify in browser and Google Search Console.

---

## SESSION B — ALL JSON-LD SCHEMA
Trigger: "Run Module 0, Session B."

### What gets built in this session:

Deliver validated JSON-LD blocks for every page type.
All schema based on verified brand facts only. No placeholders.
Validate all at schema.org/validator before delivering.

**Homepage:**
- Organization (name, url, logo, address, telephone, NPO number)
- NGO (extends Organization — nonprofitStatus)
- Church (extends Organization — service times, denomination if applicable)
- WebSite with SearchAction
- BreadcrumbList

**About page:**
- Organization
- Person — Ricardo Zaal (name, jobTitle: Founder / Chairman / Pastor, worksFor: FGI)
- BreadcrumbList

**Contact page:**
- ContactPoint (telephone, email, contactType)
- PostalAddress (323 B Danie Theron Street, Pretoria North, 0116, Gauteng)
- BreadcrumbList

**Sermons page:**
- Article (per sermon — headline, datePublished, author, description)
- VideoObject (if YouTube or video link exists — name, description, thumbnailUrl, uploadDate, contentUrl)
- BreadcrumbList

**Events page:**
- Event (per upcoming event — name, startDate, location, organizer, description)
- BreadcrumbList

**FAQ page:**
- FAQPage with Question and Answer for every FAQ item
- BreadcrumbList

**Donate page:**
- DonateAction
- Organization with nonprofitStatus
- BreadcrumbList

**Plan Your Visit page:**
- Event or SpecialAnnouncement if applicable
- BreadcrumbList

**Deliver:** One JSON-LD block per page type, ready to paste into <head>.
**After session B:** Deploy. Validate live URLs at search.google.com/test/rich-results.

---

## SESSION C — TRUST AND CONVERSION PAGES
Trigger: "Run Module 0, Session C."

### What gets built in this session:

**1. Homepage conversion audit and rewrite**
- Does the headline immediately communicate who FGI is and where?
- Is there a clear next action above the fold?
- Is the WhatsApp CTA present and using correct wa.me/27XXXXXXXXX format?
- Is the service time and address visible without scrolling?
Deliver: rewritten homepage sections with correct HTML structure.

**2. About page — full rewrite if needed**
Must include:
- Ricardo Zaal: name, photo, role (Founder, Chairman, Pastor)
- FGI mission in plain language
- NPO number (316-193 NPO) visible
- Registration date (16 December 2024) mentioned
- Serving Pretoria North and surrounding areas (list all service areas)
- Invitation to visit or connect
Deliver: complete About page HTML.

**3. Donate page — full rewrite if needed**
Must include:
- Clear headline stating why donations matter
- NPO number visible
- Section 18A status disclosed honestly (not yet approved)
- How donations are used — specific, not vague
- Payment options clearly listed
- One-time and recurring giving options
- WhatsApp or contact option for donation questions
- No friction between intention and action
Deliver: complete Donate page HTML.

**4. Contact page — audit and fix**
Must include:
- Name, address, phone, email all consistent with verified brand facts
- Physical address: 323 B Danie Theron Street, Pretoria North, 0116
- Google Maps embed
- WhatsApp CTA
- Working contact form with POPIA-compliant data disclosure line
Deliver: complete Contact page HTML.

**5. Plan Your Visit page — create if missing**
Must answer:
- When do services happen?
- Where exactly is FGI?
- What should I expect when I arrive?
- What should I wear?
- Is there parking?
- Is there something for children?
- What happens after the service?
Deliver: complete Plan Your Visit page HTML.

**6. Prayer page — create or improve**
Must include:
- Short, warm intro for someone in need
- Prayer request form (name, email, prayer request — POPIA disclosure included)
- WhatsApp option for urgent needs
Deliver: complete Prayer page HTML.

**After session C:** Deploy. Walk through each page as a first-time visitor. Check every CTA works.

---

## SESSION D — PERFORMANCE FIXES
Trigger: "Run Module 0, Session D."

### What gets built in this session:

**1. Image audit**
List all images currently on the site.
For each image:
- Is it WebP format? If not, flag for conversion.
- Does it have explicit width and height attributes?
- Is it lazy loaded correctly? (below fold = lazy, LCP hero = fetchpriority="high", no lazy)
- Is it compressed?
Deliver: updated HTML with correct image attributes. List of images needing WebP conversion.

**2. Font performance**
Check all web fonts used.
Add font-display: swap to all @font-face declarations.
Add preconnect to font origins in <head>.
Deliver: updated CSS and <head> HTML.

**3. Critical CSS**
Identify above-the-fold CSS (what is visible before scrolling on mobile).
Inline that CSS directly in <head>.
Defer the main stylesheet for non-critical styles.
Deliver: updated <head> HTML and CSS changes.

**4. Resource hints in <head>**
Add preconnect for: Google Fonts, Google Analytics, Microsoft Clarity.
Add dns-prefetch for any other external domains.
Add preload for the LCP hero image.
Deliver: updated <head> HTML block.

**5. Script loading**
Confirm GA4 and Clarity only load after cookie consent.
All other non-critical JS must use defer or async.
Deliver: updated script tags.

**6. Run PageSpeed check**
After fixing above: run https://pagespeed.web.dev on homepage.
Report mobile score and top remaining issues.
If score is still under 85, identify the next fix.

**After session D:** Deploy. Run PageSpeed. Target 85+ mobile.

---

## SESSION E — AI VISIBILITY AND CONTENT GAPS
Trigger: "Run Module 0, Session E."

### What gets built in this session:

**1. /llms.txt** (create — place at site root)
Concise, factual, machine-readable.
Include:
- Organization name, type, NPO number
- Physical address and all service areas
- Mission statement (2–3 sentences, factual)
- Services offered (worship, prayer, community help, youth, food support)
- Priority pages with full URLs and one-line descriptions
- Donation page URL and payment methods
- Contact page URL
- FAQ page URL
Deliver: complete llms.txt file ready to publish.

**2. Answer-first audit — all key pages**
Check the first 100 words of each key page.
Does it state:
- What this page is about?
- Who FGI is?
- Where FGI is based?
If not, deliver updated opening paragraph for each page that fails this check.

**3. Entity consistency check**
Search the site HTML for every variation of the organization name.
All instances must be "Fountain of Grace International" or "FGI."
No variations, no abbreviations not in that set.
Deliver: list of all inconsistencies found and corrected HTML.

**4. Internal linking map**
Identify which key pages have no links pointing to them.
Identify which pages should link to the donate page but do not.
Deliver: specific internal links to add, with exact anchor text and placement.

**5. Missing pages — create stubs if not built**
Check if these exist. If not, deliver a complete page for each:
- Church in Pretoria North (local SEO anchor page)
- FAQ page
- Youth / Youth mentorship page
- Community help page (food support, practical assistance)
Deliver: complete HTML for any missing page.

**After session E:** Deploy. Submit updated sitemap to Google Search Console.

---

## SESSION F — POPIA, LEGAL, AND FINAL CHECK
Trigger: "Run Module 0, Session F."

### What gets built in this session:

**1. Cookie consent system**
GA4 and Clarity must NOT load before consent.
Deliver: complete cookie consent implementation.
- Consent banner HTML and CSS (lightweight, no external library needed)
- JS that blocks GA4 and Clarity until user accepts
- Consent stored in localStorage so banner does not repeat
- "Accept" and "Decline" options clearly labelled

**2. Privacy Policy page** (create or rewrite)
Must cover under POPIA (South Africa):
- What personal data is collected (name, email from forms; IP via analytics)
- Why it is collected and how it is used
- How long it is retained
- Whether it is shared with third parties (Google, Microsoft)
- How a user can request deletion of their data
- Contact detail for data queries (Ricardo Zaal's email)
Deliver: complete Privacy Policy page HTML.

**3. Form POPIA disclosure**
Every form on the site (contact, prayer, email signup) must include near the submit button:
"Your information is collected by Fountain of Grace International and used only to respond
to your request. We do not sell or share your data. See our Privacy Policy."
Deliver: updated form HTML for every form on the site.

**4. Footer audit**
Footer must include:
- Privacy Policy link
- NPO number (316-193 NPO)
- Physical address (323 B Danie Theron Street, Pretoria North, 0116)
- Copyright line with current year
Deliver: updated footer HTML.

**5. Uptime monitoring — set up instruction**
Go to uptimerobot.com. Create free account.
Add monitor: HTTPS | https://www.fountaingrace.org | Check every 5 minutes.
Set alert to: [operator email]
This takes 5 minutes. Do it now. It is free.

**6. Final pre-launch checklist**
Run through every item below. Mark pass or fail:
- [ ] robots.txt in root and correct
- [ ] sitemap.xml in root and submitted to Google Search Console
- [ ] _headers file deployed and security headers confirmed (check at securityheaders.com)
- [ ] All pages have unique meta title and meta description
- [ ] All pages have Open Graph tags
- [ ] All JSON-LD validates at schema.org/validator
- [ ] /llms.txt in root and accessible
- [ ] GA4 and Clarity load only after consent
- [ ] Privacy Policy page exists and linked in footer
- [ ] All forms have POPIA disclosure
- [ ] Donate page: NPO number visible, Section 18A status honest
- [ ] About page: Ricardo Zaal named with role
- [ ] Contact page: address consistent with verified brand facts
- [ ] Plan Your Visit page exists
- [ ] Prayer page exists with working form
- [ ] Mobile PageSpeed 85+ confirmed
- [ ] LCP under 2.5s confirmed
- [ ] UptimeRobot monitoring active
- [ ] Google Business Profile claimed and accurate

**When all items pass:** Module 0 is complete.
Switch to the ongoing maintenance modules (1–6).
Set calendar reminders:
- Monthly: Module 4 (first week of each month)
- Quarterly: Module 1 (every 3 months)

---

## DELIVERY STANDARD FOR ALL SESSIONS

Every deliverable in Module 0 must be:
- Production-ready (not draft, not partial, not "here is how you could do it")
- Complete files — not snippets unless a snippet is the full solution
- Specific about which file to create or update and exactly where
- Accompanied by plain English deploy instructions (max 5 steps)
- Followed by one simple test to confirm it worked

No session ends with a plan. Every session ends with deployed, working code.
