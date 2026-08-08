import type { MetadataRoute } from 'next'

// Campaign tracking short-links (defined in public/_redirects).
// These are NOT pages - they are 302 redirect endpoints that exist only to
// attach UTM data to a click from a social bio or a YouTube description.
// They must stay 302 (a 301 is hard-cached by browsers, so changing a UTM or
// destination later would silently keep sending returning visitors to the old
// target and break tracking).
//
// Google was crawling them and reporting every one as "Page with redirect" in
// Search Console, so the fix-validation could never pass - the URLs are
// SUPPOSED to redirect, forever. Blocking them from crawl stops the false
// report without touching how they behave for a real person clicking a link.
//
// Prefix match, verified 2026-07-18 against the live sitemap (135 URLs) and
// every internal link (145): zero real pages start with any of these.
// Note /s/ does not match /sermons/ - the 105 sermon pages are unaffected.
const TRACKING_LINK_PREFIXES = [
  '/s/', // sermon description links -> /sermons/<slug>?utm_...
  '/yt', // /yt, /yt-video, /yt-pray
  '/fb', // /fb, /fb-post, /fb-visit, /fb-sermons, /fb-give, /fb-pray
  '/ig', // /ig, /ig-post, /ig-visit, /ig-sermons, /ig-give, /ig-pray
  '/tt', // /tt, /tt-post, /tt-visit, /tt-sermons, /tt-give, /tt-pray
  // NOT '/pray' - that is a prefix of the real, indexed page /prayer and would
  // have told Google to stop crawling it. Same trap as /s/ vs /sermons/.
  '/wa-pray', // -> wa.me prayer entry point. Not a page, must never be indexed
  '/review', // /review, /review-qr, /review-wa, /review-yt -> the Google review
  // form. Off-site 302s, so identical to the rest: never pages, and if Google
  // crawled them they would land in "Page with redirect" and never validate.
  // Checked 2026-08-02 against the live sitemap and the app/ routes - nothing
  // real starts with "/review", so this cannot swallow a page the way "/pray"
  // would have swallowed /prayer.
  // '/today' IS DELIBERATELY NOT LISTED HERE. DO NOT ADD IT.
  // It was added on 2026-08-08 and removed the same day. /today is a 302 to that
  // day's devotional, and unlike every link above it, it is meant to be PASTED
  // INTO WHATSAPP. WhatsApp builds its link preview with facebookexternalhit,
  // which respects robots.txt, so disallowing it kills the preview card - and the
  // preview IS the product here: the devotional card image, the question and the
  // first line are what make somebody tap. Verified on a real phone that the
  // preview renders. The cost of leaving it crawlable is one informational
  // "Page with redirect" row in Search Console, which is harmless.
  '/ga/', // Google Ads inbound campaign tracking links - not pages
  '/fa/', // Facebook/Instagram Ads inbound campaign tracking links - not pages
]

// A crawler obeys ONLY its most specific matching group. Googlebot has its own
// group below, so a Disallow placed only under "*" would be ignored by exactly
// the crawler this is meant for. Every group therefore carries the same rules.
const USER_AGENTS = ['*', 'GPTBot', 'Claude-Web', 'PerplexityBot', 'Googlebot']

export default function robots(): MetadataRoute.Robots {
  return {
    rules: USER_AGENTS.map((userAgent) => ({
      userAgent,
      allow: '/',
      disallow: TRACKING_LINK_PREFIXES,
    })),
    sitemap: 'https://www.fountaingrace.org/sitemap.xml',
    host: 'https://www.fountaingrace.org',
  }
}
