import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Why Does Your Life Keep Collapsing If God Is For You? | Fountain of Grace International',
  description:
    'You believe in God. But your life keeps breaking in the same places. This message addresses the root of repeated collapse for people who know the Bible but can\'t seem to stand. Pretoria North.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/sermons/why-does-your-life-keep-collapsing',
  },
  openGraph: {
    title: 'Why Does Your Life Keep Collapsing If God Is For You?',
    description:
      'Living the same year on repeat. Collapsing under the same pressure. Knowing scripture but not standing in it. This message names the root cause. Pretoria North.',
    type: 'article',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International — Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/sermons/why-does-your-life-keep-collapsing',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Why Does Your Life Keep Collapsing If God Is For You?',
    description: 'This message addresses the pattern of repeated collapse in believers — living 70 years but repeating the same one year of growth. The toothpaste illustration shows that pressure exposes what is already inside, not what you appear to be on Sunday.',
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
    datePublished: '2026-01-11',
    url: 'https://www.fountaingrace.org/sermons/why-does-your-life-keep-collapsing',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Sermons', item: 'https://www.fountaingrace.org/sermons' },
      { '@type': 'ListItem', position: 3, name: 'Why Does Your Life Keep Collapsing', item: 'https://www.fountaingrace.org/sermons/why-does-your-life-keep-collapsing' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why do Christians keep failing in the same areas?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Repeated failure in the same areas usually points to something unaddressed at the root — not just the symptom being treated. Financial stress reveals fear, not peace. Relationship conflicts reveal immaturity. Temptations reveal lack of discipline. The storm does not cause the problem — it reveals what was already inside. What you carry inside is what spills out when pressure is applied.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does it mean to live the same year on repeat?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It means going through the motions of calendar years without genuine growth. The situations change — the job, the relationship, the location — but the same patterns, fears, and responses repeat. God\'s delay is not denial. But if you are 40 years old and look back at the last 15 years and see the same patterns, something needs to change at the level of internal character, not external circumstances.',
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
              Why Does Your Life Keep Collapsing If God Is For You?
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              You believe in God. You have for years. But your life keeps breaking in the same places — the same financial pressure, the same relationship patterns, the same collapse under the same kind of storm. You walk out of church feeling strong. Life meets you at the door and you fall again. This message names why.
            </p>
            <p className="text-white/60 text-sm">
              Pastor Ricardo Zaal · Fountain of Grace International, Pretoria North · 11 January 2026
            </p>
          </div>
        </header>

        <section className="bg-white pt-10 pb-2 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/vorvFFUxyRE"
                title="Why Does Your Life Keep Collapsing If God Is For You?"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-14 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">Living 70 Years But Repeating One</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              There is a pattern described this way: you live a life of 70 years but you repeat the same one year over and over again. The dates change. The situations change. But the responses, the fears, the failures — they stay exactly the same. A person can be in their forties and look back at the last fifteen years and see the identical cycle running on repeat.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              The question to ask is not &quot;what did I do wrong this time?&quot; The question is &quot;what has not changed inside me in the last ten years?&quot; Circumstances can change completely. If the internal landscape has not shifted, the same outcomes will follow you to every new environment.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">What You Carry Is What Spills</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              Pressure does not create what comes out of you. It reveals what was already there. When someone bumps you while you are carrying a glass of tea, tea spills — not because they bumped you, but because tea was in the glass. If coffee was in the glass, coffee would have spilled. The bump was not the cause. The content was.
            </p>
            <p className="text-[#555] leading-relaxed mb-4">
              When financial stress hits, what comes out? Fear — or peace? When relationships come under pressure, what spills — immaturity or stability? When temptation arrives, what is revealed — discipline or the lack of it? The storm does not test your appearance. It tests what is inside.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              This is not condemnation. It is diagnosis. The person who identifies what is actually inside and addresses it at the root stops the cycle. The person who only manages the external — better job, new relationship, new church — finds the same content spilling in the new container.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">Strong in Church, Collapsed at Home</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              There is a version of faith that performs in public and collapses in private. Bible in hand on Sunday. But at home, the same anger, the same anxiety, the same instability that has been there for years. The people watching — your children, your family — are not convinced by the Sunday version. They are watching the Tuesday and Wednesday version.
            </p>
            <p className="text-[#555] leading-relaxed mb-4">
              Jesus asked in Matthew 7:26–27 about the man who heard His words and did not do them — and when the storm came, the house fell. The collapse was &quot;great.&quot; The foundation was wrong. The issue was not the storm. It was what the house was built on.
            </p>

            <blockquote className="border-l-4 border-[#FFD600] pl-5 py-2 my-10 bg-[#f0fafa] rounded-r-xl">
              <p className="text-[#2a9df4] font-semibold text-lg italic">
                &quot;God&apos;s delay is not denial. But if you are still in the same place after ten years, ask the honest question: what has not changed inside me — not around me.&quot;
              </p>
              <cite className="text-[#555] text-sm not-italic mt-2 block">— Pastor Ricardo Zaal</cite>
            </blockquote>

            <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">The Practical Step Forward</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              Identify one area where you keep collapsing. Not the most recent situation — the pattern underneath it. Then ask what character quality, what inner discipline, what unresolved fear is feeding that pattern. Address that. Not the symptom — the root. That is where the cycle breaks.
            </p>

            <p className="text-[#555] leading-relaxed">
              If you are in Pretoria North,{' '}
              <Link href="/plan-your-visit" className="text-[#008080] font-semibold hover:underline">
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
                <h3 className="font-semibold text-[#1a1a1a] mb-2">Why do Christians keep failing in the same areas?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Repeated failure usually points to something unaddressed at the root. Financial stress reveals fear, not peace. Relationship conflicts reveal immaturity. The storm does not cause the collapse — it reveals what was already inside. What you carry inside is what spills out when pressure is applied.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">Is it possible to grow spiritually without changing your circumstances?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Yes — in fact, that is where real growth happens. Circumstances that change without internal change simply move the same pattern to a new location. Character built under pressure, faith tested in real life, discipline developed through repeated choices — these produce a person who does not collapse when the storm comes, regardless of what the circumstances look like.</p>
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
