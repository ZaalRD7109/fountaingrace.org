# FGI PROJECT — QUICK REFERENCE INDEX
# Read this when you forget which module to use.

---

## WHERE ARE YOU RIGHT NOW?

**Site not fully built yet → Start with Module 0.**
Module 0 is a one-time sprint that builds the full foundation.
Run Sessions A through F in order. Deploy after each one.
Only move to Modules 1–6 after Module 0 is fully complete.

**Site is built and live → Use Modules 1–6 for ongoing maintenance.**

---

## MODULE 0 — ONE-TIME LAUNCH SPRINT (Do this first)

| Session | What it builds                              | Run once |
|---------|---------------------------------------------|----------|
| A       | robots.txt, sitemap, _headers, meta tags, OG| Yes      |
| B       | All JSON-LD schema for every page           | Yes      |
| C       | Homepage, About, Donate, Contact, Visit, Prayer pages | Yes |
| D       | Performance: images, fonts, CSS, scripts    | Yes      |
| E       | /llms.txt, AI visibility, internal links, missing pages | Yes |
| F       | POPIA, Privacy Policy, cookie consent, final checklist | Yes |

Trigger: "Run Module 0, Session A." Then B, C, D, E, F.

---

## MODULES 1–6 — ONGOING MAINTENANCE (After Module 0 is done)

| Situation                                          | Module to run         | How often          |
|----------------------------------------------------|-----------------------|--------------------|
| Full site health check + 90-day roadmap            | Module 1 — AUDIT      | Every 3 months     |
| Check what is working and what to fix next         | Module 4 — MEASURE    | First week monthly |
| Fix one specific thing (CTA, schema, speed, copy)  | Module 2 — QUICKWIN   | Weekly             |
| Write or improve a page                            | Module 3 — CONTENT    | Per page needed    |
| Improve Google reviews, testimonials, trust        | Module 5 — REPUTATION | As needed          |
| Fix a technical issue (LCP, headers, schema error) | Module 6 — TECHNICAL  | As needed          |

---

## HOW TO TRIGGER ANY MODULE

Just type one line at the start of your session:

- "Run Module 0, Session A." → Foundation files and meta tags
- "Run Module 0, Session B." → All JSON-LD schema
- "Run Module 0, Session C." → Trust and conversion pages
- "Run Module 0, Session D." → Performance fixes
- "Run Module 0, Session E." → AI visibility and content gaps
- "Run Module 0, Session F." → POPIA, legal, final checklist
- "Run Module 1." → Full quarterly audit
- "Run Module 2. Task: improve the donate page CTA." → Single task
- "Run Module 3. Page: What to Expect. Target: first-time church visitor Pretoria." → Page build
- "Run Module 4. Month: April 2026." → Monthly measurement review
- "Run Module 5. Focus: Google reviews." → Reputation session
- "Run Module 6. Issue: LCP is 3.8s on mobile." → Technical fix

---

## WHAT NEVER CHANGES

Claude always has the master context loaded from Project Instructions.
You never need to paste brand facts, rules, or governance again.
Just pick a module and state the task.

---

## CONTENT DECAY — CHECK EVERY 90 DAYS

- Are all event pages current? Remove or archive past events.
- Are service times still accurate?
- Are contact numbers correct?
- Are any promises or dates on the site now outdated?

---

## MONTHLY MEASUREMENT CHECKLIST (Module 4 inputs)

Before running Module 4, have these ready from GA4 and Clarity:
- Top 5 landing pages this month
- Pages with high exit rates
- Donate page: views, clicks, completions
- WhatsApp button clicks
- Prayer form submissions
- Top search queries bringing traffic

---

## ANNUAL REVIEW CHECKLIST

Run this every 12 months (calendar reminder — January):
- [ ] Domain renewal confirmed and auto-renew on
- [ ] GA4 and Clarity access confirmed
- [ ] Backup of all site files exists in Git
- [ ] Google Business Profile still accurate
- [ ] NPO number still correct and visible on site
- [ ] Privacy Policy still POPIA compliant
- [ ] Uptime monitoring (UptimeRobot) still active and alerting
- [ ] All schema validated at schema.org/validator
- [ ] Core Web Vitals still hitting targets
- [ ] Content decay check done

---

## TECHNOLOGY MIGRATION REVIEW (Every 3 years)

Ask these questions — only upgrade if the gain is proven and migration is simple:
- Is HTML/CSS still the right platform for FGI?
- Is Cloudflare Pages still best for cost and performance?
- Is the forms and donation stack still working well?
- Are there AI search changes requiring site restructuring?

---

## SUCCESSION NOTE

If someone else ever needs to take over this site, they need:
1. GitHub repo access (ZaalRD7109/fountaingrace.org)
2. Cloudflare Pages login
3. Domain registrar login
4. GA4 property access
5. Microsoft Clarity access
6. Google Business Profile access
7. Deploy command: git push origin clean-main:main
8. This claude-project folder — it explains everything

Keep logins stored securely offline. Never in the site files.
