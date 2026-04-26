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
    // Legal
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/cookie-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
