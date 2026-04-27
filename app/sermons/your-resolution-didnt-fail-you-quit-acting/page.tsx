import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Your Resolution Didn\'t Fail - You Quit Acting | Fountain of Grace International',
  description:
    'You are not lazy. You are tired of failing. But the resolution itself wasn\'t the problem - your habits never changed. This message shows exactly why and what to do. Pretoria North.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/sermons/your-resolution-didnt-fail-you-quit-acting',
  },
  openGraph: {
    title: 'Your Resolution Didn\'t Fail - You Quit Acting',
    description:
      'Every year the resolution is made. Every year it fades. This message explains why declarations without habit change produce nothing - and what to do differently. Pretoria North.',
    type: 'article',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International - Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/sermons/your-resolution-didnt-fail-you-quit-acting',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Your Resolution Didn\'t Fail - You Quit Acting',
    description: 'New year declarations rarely change lives because the habits that govern daily behavior did not hear the declaration. This message addresses the gap between motivation and consistent action.',
    author: { '@type': 'Person', name: 'Pastor Ricardo Zaal' },
    publisher: {
      '@type': 'Church',
      name: 'Fountain of Grace International',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '323 B Danie Theron Street',
        addressLocality: 'Pretoria North',
        addressRegion: 'Gauteng',
        addressCountry: 'ZA',
      },
    },
    datePublished: '2026-01-25',
    url: 'https://www.fountaingrace.org/sermons/your-resolution-didnt-fail-you-quit-acting',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Sermons', item: 'https://www.fountaingrace.org/sermons' },
      { '@type': 'ListItem', position: 3, name: 'Your Resolution Didn\'t Fail - You Quit Acting', item: 'https://www.fountaingrace.org/sermons/your-resolution-didnt-fail-you-quit-acting' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why do New Year resolutions fail?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Resolutions fail because the declaration changes but the habits do not. The person says "this is my year" with full sincerity - but the alarm still gets snoozed, the budget app stays unopened, the same patterns repeat. Declarations are not enough. The underlying behavior has to change, and that requires consistent action, not emotional momentum.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between motivation and discipline?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Motivation responds to how you feel. Discipline executes regardless of how you feel. Resolutions that depend on motivation always fade because the feeling that launched them cannot sustain itself. Proverbs 13:4 says the soul of the diligent is richly supplied. Diligence is not inspired - it is chosen, consistently, over time.',
        },
      },
    ],
  },
]

export default function SermonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article>
        <header
          className="pt-16 pb-14 px-4 sm:px-6 text-white"
          style={{ background: 'linear-gradient(145deg, #2a9df4 0%, #008080 100%)' }}
        >
          <div className="max-w-3xl mx-auto">
            <p className="text-[#FFD600] text-sm font-semibold uppercase tracking-wider mb-4">
              Sunday Message · Fountain of Grace International · Pretoria North
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-5">
              Your Resolution Didn&apos;t Fail - You Quit Acting
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              Every year, the same cycle. Loud declaration on day one. Budget apps downloaded. Walking trackers activated. Step goals set. And by the third week - the alarm is snoozed, the app is ignored, and the goal is quietly shelved. The resolution was not the problem. Something else stopped it.
            </p>
            <p className="text-white/60 text-sm">
              Pastor Ricardo Zaal · Fountain of Grace International, Pretoria North · 25 January 2026
            </p>
          </div>
        </header>

        <section className="bg-white pt-10 pb-2 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/MmHgI9ybwSM"
                title="Your Resolution Didn't Fail - You Quit Acting"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-14 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">Your Habits Did Not Hear Your Declaration</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              When you said &quot;this is my year,&quot; you meant it. The energy was real. The vision was clear. But your habits were not in the room when you made the declaration. They were already set - morning routines, default responses, patterns of avoidance - and they continued exactly as before.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              This is not laziness. Lazy people do not download budget apps or write out step-by-step plans. You are not lazy - you are tired of failing. There is a difference. The person who is tired of failing has tried. The person who is lazy has not. You have tried. The issue is not trying harder. It is understanding why your effort keeps stopping at the same place.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">You Know What to Do - But You Can&apos;t Open the Cap</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              If you are thirsty, you know exactly what to do - drink water. But if you cannot open the cap, the knowing is useless. Many people are in that exact position spiritually and practically. They know the vision. They know the scripture. They know what obedience looks like. But there is a gap between knowing and executing - and that gap is filled with unaddressed resistance.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              The resistance has a name: overload. You are not stuck because you have no information. You are stuck because you are carrying too much at once with no system for moving any of it. Proverbs 13:4 puts it plainly - &quot;The soul of the sluggard craves, and gets nothing, while the soul of the diligent is richly supplied.&quot; Craving without direction produces nothing. Diligence with direction produces supply.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">Motivation Wears Off - Consistency Does Not</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              The most common mistake is building a resolution on motivation. Motivation is real - but it is temporary. It responds to the feeling you had in the moment you made the decision. When the feeling changes, the motivation changes. When the motivation changes, the action stops.
            </p>
            <p className="text-[#555] leading-relaxed mb-4">
              Consistency, by contrast, does not depend on the feeling. It depends on a prior commitment that is honoured regardless of how the day started. The ant in Proverbs 6 does not gather food because it feels motivated that morning. It gathers because gathering is what it does in summer. That is consistency.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              The shift from motivation to consistency is the difference between a resolution that fades by February and a habit that produces results by December.
            </p>

            <blockquote className="border-l-4 border-[#FFD600] pl-5 py-2 my-10 bg-[#f0fafa] rounded-r-xl">
              <p className="text-[#2a9df4] font-semibold text-lg italic">
                &quot;You said this is your year. But your habits didn&apos;t hear it. And habits do not change by declaration - they change by consistent action, chosen daily, whether you feel like it or not.&quot;
              </p>
              <cite className="text-[#555] text-sm not-italic mt-2 block">- Pastor Ricardo Zaal</cite>
            </blockquote>

            <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">One Concrete Action This Week</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              Pick one thing - not five. One thing that, if done consistently for the next 30 days, would move your life in a specific direction. Then commit to doing it daily for 30 days regardless of how you feel. Not because you are motivated. Because you decided. That is the start of a new habit. That is where the resolution becomes real.
            </p>

            <p className="text-[#555] leading-relaxed">
              If you are in Pretoria North,{' '}
              <Link href="/plan-your-visit" className="fgi-link">
                come on a Sunday
              </Link>{' '}
              - these messages are preached live every week at Fountain of Grace International, 323 B Danie Theron Street.
            </p>
          </div>
        </section>

        <section className="bg-gray-50 py-12 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-[#1a1a1a] mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">Why do New Year resolutions fail?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Resolutions fail because the declaration changes but the habits do not. The person says &quot;this is my year&quot; with full sincerity - but the alarm still gets snoozed and the same patterns repeat. Declarations are not enough. Behaviour has to change, and that requires consistent action, not emotional momentum.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">How do you break a cycle of starting and stopping?</h3>
                <p className="text-[#555] leading-relaxed text-sm">The cycle breaks when you move from motivation-based action to commitment-based action. Pick one specific thing. Commit to it for 30 days regardless of how you feel. Proverbs 13:4 - the soul of the diligent is richly supplied. Diligence is not something you feel - it is something you choose, consistently, over time.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f0fafa] py-14 px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Join Us This Sunday</h2>
            <p className="text-[#555] leading-relaxed mb-6">
              Fountain of Grace International meets every Sunday at 09:00 at 323 B Danie Theron Street, Pretoria North. Come as you are.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/plan-your-visit"
                className="inline-block bg-[#008080] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#006666] transition-colors"
              >
                Plan Your Visit
              </Link>
              <Link
                href="/prayer"
                className="inline-block bg-white border border-[#008080] text-[#008080] font-bold px-6 py-3 rounded-lg hover:bg-[#f0fafa] transition-colors"
              >
                Send a Prayer Request
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  )
}
