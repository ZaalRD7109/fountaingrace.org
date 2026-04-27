import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'When Good Things Block God Things | Fountain of Grace International',
  description:
    'You can be climbing a ladder leaned against the wrong wall. Good intentions, constant busyness — but misaligned with God\'s timing. This message names the pattern. Pretoria North.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/sermons/when-good-things-block-god-things',
  },
  openGraph: {
    title: 'When Good Things Block God Things',
    description:
      'Misalignment is not weakness — it is a direction problem. You may be doing right things at the wrong time and not know it. Fountain of Grace International, Pretoria North.',
    type: 'article',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International — Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/sermons/when-good-things-block-god-things',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'When Good Things Block God Things',
    description: 'A message about chronos fatigue — doing many good things but in the wrong season. Using the contrast between Mary and Martha (Luke 10:38-42), this message identifies the difference between productive busyness and godly fruitfulness.',
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
    datePublished: '2026-02-08',
    url: 'https://www.fountaingrace.org/sermons/when-good-things-block-god-things',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Sermons', item: 'https://www.fountaingrace.org/sermons' },
      { '@type': 'ListItem', position: 3, name: 'When Good Things Block God Things', item: 'https://www.fountaingrace.org/sermons/when-good-things-block-god-things' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is chronos fatigue and how does it affect Christians?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Chronos fatigue is the exhaustion that comes from filling every hour with activity without aligning to God\'s appointed moments (kairos). You can be genuinely busy, genuinely disciplined, and genuinely productive — but if you are doing the right things in the wrong season, you will be tired with nothing to show for it spiritually.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between being busy for God and being available to God?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Martha was busy serving when Jesus was present — her intentions were good. Mary chose to sit at Jesus\' feet. Jesus said Mary had chosen the better part. Being busy for God can become a substitute for being with God. The good activity crowds out the God activity.',
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
              When Good Things Block God Things
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              You have real responsibilities. Real pressure. Real results to show. And yet, underneath all of it, something feels off. You are busy but not fruitful. Disciplined but not a disciple. Doing many right things in the wrong direction. This message is for the person who is tired — not because they are lazy, but because they are misaligned.
            </p>
            <p className="text-white/60 text-sm">
              Pastor Ricardo Zaal · Fountain of Grace International, Pretoria North · 8 February 2026
            </p>
          </div>
        </header>

        <section className="bg-white pt-10 pb-2 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/RvGYWIJ6XQo"
                title="When Good Things Block God Things"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-14 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">Chronos vs Kairos: Two Types of Time</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              The Bible uses two Greek words for time. Chronos is clock time — every hour of every day, the steady accumulation of activity and obligation. Kairos is appointed time — the specific moment God has set for something to happen. You can be fully occupied in chronos and completely miss the kairos.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              Chronos fatigue is what happens when you fill every hour with activity but none of it is aligned to the appointed moment. You are busy — genuinely busy — but the busyness is on the wrong wall. Like a person who climbs a ladder with great effort and discipline, only to reach the top and find it was leaned against the wrong building. They worked hard. Nothing was wasted in terms of effort. But everything was wasted in terms of direction.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">The Martha Pattern: Good Intentions, Wrong Moment</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              Luke 10:38–42 describes two sisters in the same house when Jesus was present. Martha was serving — cooking, preparing, managing. Her intentions were good. She was doing something that would normally be commendable. Mary sat at Jesus&apos; feet and listened.
            </p>
            <p className="text-[#555] leading-relaxed mb-4">
              Martha grew frustrated. She even appealed to Jesus: &quot;Lord, dost thou not care that my sister hath left me to serve alone?&quot; And Jesus answered: &quot;Martha, Martha, thou art careful and troubled about many things: but one thing is needful: and Mary hath chosen that good part, which shall not be taken away from her.&quot;
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              Martha was not lazy. Martha was not rebellious. Martha was doing a genuinely good thing — at the wrong moment. The presence of Jesus in the house changed what the &quot;right thing&quot; was. When the kairos arrives, the old good things may need to pause.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">Misalignment Is Not Weakness — It Is a Direction Problem</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              The person who feels stuck while doing everything right is often experiencing misalignment, not failure. They are disciplined — but not a disciple. Busy — but not productive for the kingdom. Doing things that are good — but not the thing that God is asking in this season.
            </p>
            <p className="text-[#555] leading-relaxed mb-4">
              Recognising this is not a reason for guilt. It is a reason to pause, assess, and ask the question: of everything I am currently doing, what is the one thing that is needful right now? What is the kairos moment I am in? What has God been trying to get my attention toward while I have been occupied with good things?
            </p>

            <blockquote className="border-l-4 border-[#FFD600] pl-5 py-2 my-10 bg-[#f0fafa] rounded-r-xl">
              <p className="text-[#2a9df4] font-semibold text-lg italic">
                &quot;You can be very busy climbing the right ladder, but when you get to the top and see the building — you realise it was the wrong one. The effort was real. The direction was wrong.&quot;
              </p>
              <cite className="text-[#555] text-sm not-italic mt-2 block">— Pastor Ricardo Zaal</cite>
            </blockquote>

            <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">One Practical Step</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              Stop and list the five things you are currently giving the most time to. Then ask this about each one: is this what God is asking in this season, or is this what I have defaulted to because it feels productive? The answer may be uncomfortable — but it is more useful than another year of climbing the wrong wall.
            </p>

            <p className="text-[#555] leading-relaxed">
              If you are in Pretoria North,{' '}
              <Link href="/plan-your-visit" className="fgi-link">
                come on a Sunday
              </Link>{' '}
              — these messages are preached live every week at Fountain of Grace International, 323 B Danie Theron Street.
            </p>
          </div>
        </section>

        <section className="bg-gray-50 py-12 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-[#1a1a1a] mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">What is chronos fatigue?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Chronos fatigue is the exhaustion that comes from filling every hour with activity without aligning to God&apos;s appointed moments (kairos). You can be genuinely busy and genuinely disciplined — but if you are doing the right things in the wrong season, you will be tired with little spiritual fruit to show for it.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">Is it wrong to be busy serving God?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Not inherently. Martha&apos;s serving was not wrong — the timing was wrong. Jesus was present. That changed the priority. Being busy for God can become a substitute for being with God when the season calls for presence rather than activity. The question is not whether you are busy, but whether your busyness is aligned to the current kairos.</p>
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
