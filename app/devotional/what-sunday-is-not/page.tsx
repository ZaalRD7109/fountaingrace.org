import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'What Sunday Is Not - Clearing Up the Biggest Misunderstanding About Church | Fountain of Grace International',
  description: 'Most people who stop going to church leave for the same reason - they had the wrong idea of what it was supposed to be. Pastor Ricardo Zaal on what Sunday is actually for.',
  robots: 'index, follow',
  alternates: { canonical: 'https://www.fountaingrace.org/devotional/what-sunday-is-not' },
  openGraph: {
    title: 'What Sunday Is Not - Clearing Up the Biggest Misunderstanding About Church',
    description: 'Most people who stop going to church leave for the same reason - they had the wrong idea of what it was supposed to be.',
    type: 'article',
    url: 'https://www.fountaingrace.org/devotional/what-sunday-is-not',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International' }],
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'What Sunday Is Not - Clearing Up the Biggest Misunderstanding About Church',
    description: 'Most people who stop going to church leave for the same reason - they had the wrong idea of what it was supposed to be.',
    author: { '@type': 'Person', name: 'Pastor Ricardo Zaal' },
    publisher: {
      '@type': 'Organization',
      name: 'Fountain of Grace International',
      url: 'https://www.fountaingrace.org',
    },
    url: 'https://www.fountaingrace.org/devotional/what-sunday-is-not',
    inLanguage: 'en',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Devotional', item: 'https://www.fountaingrace.org/devotional' },
      { '@type': 'ListItem', position: 3, name: 'What Sunday Is Not', item: 'https://www.fountaingrace.org/devotional/what-sunday-is-not' },
    ],
  },
]

export default function WhatSundayIsNotPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="bg-[#008080] text-white pt-10 pb-10 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-white font-semibold text-xs uppercase tracking-wider mb-3">
            Devotional - Church Life
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
            What Sunday Is Not - Clearing Up the Biggest Misunderstanding About Church
          </h1>
          <p className="text-white text-base leading-relaxed">
            By Pastor Ricardo Zaal - Fountain of Grace International, Pretoria North
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-white py-14 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">

          <p className="text-[#595959] text-base leading-relaxed mb-6">
            A lot of people who have walked away from church did not walk away from God.
            They walked away from an experience that was not what they expected - or needed.
          </p>

          <p className="text-[#595959] text-base leading-relaxed mb-8">
            Most of the time, the problem was not the church. It was the expectation they brought in.
            Let us clear up a few of the biggest ones.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Sunday is not a performance review</h2>

          <p className="text-[#595959] text-base leading-relaxed mb-6">
            Many people attend church as if they are being evaluated. Will I be good enough?
            Do I know enough? Am I too late, too far gone, too much of a mess to be here?
          </p>

          <p className="text-[#595959] text-base leading-relaxed mb-8">
            This turns Sunday into a performance and church into an audience watching you.
            Neither is accurate. Church is a gathering of people who have agreed that they need
            something they cannot generate on their own. The only requirement to belong is
            the honesty to admit that.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Sunday is not a motivational event</h2>

          <p className="text-[#595959] text-base leading-relaxed mb-6">
            There is a version of church that functions like an emotional booster shot.
            You go in feeling low, you come out feeling inspired, and by Wednesday the effect
            has worn off. This is church as a product, not church as a community.
          </p>

          <p className="text-[#595959] text-base leading-relaxed mb-8">
            The motivation that comes from a single Sunday fades. The transformation that comes
            from consistent community, from sitting under teaching week after week, from being
            known and knowing others - that produces something that does not fade because it
            changes who you are, not just how you feel.
          </p>

          <blockquote className="border-l-4 border-[#FFD600] pl-5 py-2 my-8 bg-[#fffdf0] rounded-r-xl">
            <p className="text-gray-800 font-semibold italic leading-relaxed">
              "And let us consider one another to provoke unto love and to good works: not forsaking the assembling of ourselves together."
            </p>
            <cite className="text-sm text-[#595959] not-italic mt-2 block">- Hebrews 10:24-25 (KJV)</cite>
          </blockquote>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Sunday is not only for people who are doing well</h2>

          <p className="text-[#595959] text-base leading-relaxed mb-6">
            This one keeps more people away from church than almost anything else.
            The belief that you need to have your life together before you show up.
            That church is for people who are already growing, already strong, already consistent.
          </p>

          <p className="text-[#595959] text-base leading-relaxed mb-8">
            Jesus described the purpose of his presence in terms of a doctor: "They that are whole
            need not a physician; but they that are sick" (Luke 5:31 KJV). Church is for people
            who know they need something. If you have it all sorted out, you probably do not feel
            the need to be there. If you do not - you are exactly the right candidate.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">What Sunday actually is</h2>

          <p className="text-[#595959] text-base leading-relaxed mb-6">
            Sunday is a gathering of people choosing to keep faith alive in the company of others
            who are doing the same. It is a place to receive, to be challenged, to belong,
            and to encounter something that you did not manufacture yourself.
          </p>

          <p className="text-[#595959] text-base leading-relaxed mb-8">
            At <Link href="/" className="fgi-link">Fountain of Grace International</Link> in Pretoria North,
            Sunday mornings are built around that purpose. Not performance, not entertainment -
            real community around real truth. Services begin at 09:00. Read our{' '}
            <Link href="/what-to-expect" className="fgi-link">what to expect guide</Link> before
            you come, or <Link href="/plan-your-visit" className="fgi-link">plan your visit</Link> and
            we will reach out before Sunday.
          </p>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#008080] py-12 px-4 sm:px-6">
        <div className="section-container text-center">
          <h2 className="text-xl font-bold text-white mb-3">
            Come as you are this Sunday
          </h2>
          <p className="text-white text-sm mb-6 max-w-md mx-auto">
            09:00 every Sunday. 323 B Danie Theron Street, Pretoria North. No performance required.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/plan-your-visit" className="btn-primary text-sm">
              Plan Your Visit
            </Link>
            <Link href="/what-to-expect" className="inline-block border-2 border-white text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-white hover:text-[#008080] transition-colors text-sm">
              What to Expect
            </Link>
          </div>
        </div>
      </section>

      {/* GEO BLOCK */}
      <section className="bg-white py-8 px-4 sm:px-6">
        <div className="section-container">
          <div className="geo-block">
            <p>
              Fountain of Grace International is a church and registered NPO (316-193) in Pretoria North, Gauteng,
              South Africa. Sunday services are held at 323 B Danie Theron Street every week at 09:00.
              For questions, WhatsApp +27 75 259 2555 or email info@fountaingrace.org.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
