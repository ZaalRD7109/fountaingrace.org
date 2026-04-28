import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.fountaingrace.org'
  const now = new Date()

  return [
    // Core pages
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/plan-your-visit`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/community-impact`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/donate`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/sunday-services`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/what-to-expect`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/pastors`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/volunteer`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/prayer`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/church-pretoria-north`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    // Sermons
    { url: `${base}/sermons`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/sermons/the-principle-that-activates-everything`, lastModified: new Date('2026-04-26'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/sermons/why-some-problems-wont-leave-until-you-understand-this`, lastModified: new Date('2026-04-19'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/sermons/you-love-god-but-are-you-in-the-game`, lastModified: new Date('2026-04-05'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/sermons/when-knowing-is-the-problem`, lastModified: new Date('2026-02-15'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/sermons/when-good-things-block-god-things`, lastModified: new Date('2026-02-08'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/sermons/your-resolution-didnt-fail-you-quit-acting`, lastModified: new Date('2026-01-25'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/sermons/the-system-youre-praying-against-without-knowing-it`, lastModified: new Date('2026-01-18'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/sermons/why-does-your-life-keep-collapsing`, lastModified: new Date('2026-01-11'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/sermons/why-some-things-refuse-to-move`, lastModified: new Date('2026-01-04'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/sermons/why-your-prayers-are-not-changing-your-life`, lastModified: new Date('2026-01-04'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/sermons/right-action-principles-that-move-people-forward-faster`, lastModified: new Date('2026-03-15'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/sermons/the-principles-that-move-people-forward-faster`, lastModified: new Date('2026-03-08'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/sermons/why-youre-not-moving-forward-and-how-to-break-it`, lastModified: new Date('2026-03-01'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/sermons/what-if-someone-else-finishes-what-was-meant-for-you`, lastModified: new Date('2026-02-22'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/sermons/follow-your-inner-voice-discover-your-destiny`, lastModified: new Date('2026-02-24'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/sermons/be-a-doer-of-gods-word-not-just-a-hearer`, lastModified: new Date('2026-02-16'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/sermons/pruning-for-progress`, lastModified: new Date('2025-11-02'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/sermons/no-more-waiting-rooms-god-is-live-now`, lastModified: new Date('2025-09-28'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/sermons/the-silent-assassin-of-destiny`, lastModified: new Date('2025-08-31'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/sermons/the-anointing-that-makes-hell-fear-you`, lastModified: new Date('2025-08-24'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/sermons/releasing-his-presence`, lastModified: new Date('2025-06-29'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/sermons/faith-is-the-router-that-connects-you-to-gods-supply`, lastModified: new Date('2025-06-08'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/sermons/hosting-the-presence-of-god`, lastModified: new Date('2025-06-22'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/sermons/the-danger-of-overnight-success`, lastModified: new Date('2025-05-18'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/sermons/speak-prophetic-into-your-life`, lastModified: new Date('2025-04-06'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/sermons/the-prophetic-encounter`, lastModified: new Date('2025-02-23'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/sermons/the-language-of-the-spirit-interpreting-what-you-hear`, lastModified: new Date('2025-02-09'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/sermons/the-inheritance-test`, lastModified: new Date('2024-09-08'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/sermons/you-are-not-lazy-you-are-a-lot-more`, lastModified: new Date('2024-01-28'), changeFrequency: 'monthly', priority: 0.6 },
    // Resources (Tier 1 - broad audience, problem-first SEO content)
    { url: `${base}/resources`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/resources/why-does-my-life-feel-empty`, lastModified: new Date('2026-04-27'), changeFrequency: 'monthly', priority: 0.7 },
    // Devotional (Tier 2 - existing community, Saturday prep)
    { url: `${base}/devotional`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/devotional/prepare-your-heart-before-you-walk-in`, lastModified: new Date('2026-04-27'), changeFrequency: 'monthly', priority: 0.6 },
    // Stories (Tier 3 - donor-targeted impact content)
    { url: `${base}/stories`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/stories/what-your-giving-does-in-pretoria-north`, lastModified: new Date('2026-04-27'), changeFrequency: 'monthly', priority: 0.7 },
    // Legal
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/cookie-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
