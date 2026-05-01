import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Week Did Not Go as Planned - Come Anyway | Fountain of Grace International',
  description: 'The week was hard. Things did not work out. You are not in the mood for Sunday. Pastor Ricardo Zaal on why that is exactly the right time to come.',
  robots: 'index, follow',
  alternates: { canonical: 'https://www.fountaingrace.org/devotional/the-week-did-not-go-as-planned' },
  openGraph: {
    title: 'The Week Did Not Go as Planned - Come Anyway',
    description: 'The week was hard. Things did not work out. You are not in the mood for Sunday. That is exactly the right time to come.',
    type: 'article',
    url: 'https://www.fountaingrace.org/devotional/the-week-did-not-go-as-planned',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International' }],
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Week Did Not Go as Planned - Come Anyway',
    description: 'The week was hard. Things did not work out. You are not in the mood for Sunday. That is exactly the right time to come.',
    author: { '@type': 'Person', name: 'Pastor Ricardo Zaal' },
    publisher: {
      '@type': 'Organization',
      name: 'Fountain of Grace International',
      url: 'https://www.fountaingrace.org',
    },
    url: 'https://www.fountaingrace.org/devotional/the-week-did-not-go-as-planned',
    inLanguage: 'en',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Devotional', item: 'https://www.fountaingrace.org/devotional' },
      { '@type': 'ListItem', position: 3, name: 'The Week Did Not Go as Planned', item: 'https://www.fountaingrace.org/devotional/the-week-did-not-go-as-planned' },
    ],
  },
]

export default function TheWeekDidNotGoAsPlannedPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="bg-[#008080] text-white pt-10 pb-10 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-white font-semibold text-xs uppercase tracking-wider mb-3">
            Devotional - Sunday Prep
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
            The Week Did Not Go as Planned - Come Anyway
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
            The plan was good on Monday. By Friday, it had not worked out the way you hoped.
            Something fell through. Something was said that should not have been. Something you
            were counting on did not come through. And now it is Saturday night and the thought
            of putting on a smile for Sunday feels exhausting.
          </p>

          <p className="text-[#595959] text-base leading-relaxed mb-8">
            This is the moment a lot of people choose to stay home. It feels like the honest choice.
            You are not in a good space. You do not want to pretend. You are tired.
          </p>

          <p className="text-[#595959] text-base leading-relaxed mb-8">
            Come anyway. Here is why.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">The hard week is not a reason to stay away - it is a reason to come</h2>

          <p className="text-[#595959] text-base leading-relaxed mb-6">
            Church is not a reward for a good week. It is a reset for any week. If you only
            showed up when things were going well, you would miss most of the value of it.
            The Sundays that follow a hard week often carry the most for the people who show up.
          </p>

          <p className="text-[#595959] text-base leading-relaxed mb-8">
            There is something that happens when you walk into a gathering of people with
            honest need in your heart. Your defenses are down. The polish is gone. You are
            not there to look a certain way - you are there because you need something.
            That posture is one of the most receptive states a person can be in. The message
            that would have glanced off you on a good week lands differently when you are empty.
          </p>

          <blockquote className="border-l-4 border-[#FFD600] pl-5 py-2 my-8 bg-[#fffdf0] rounded-r-xl">
            <p className="text-gray-800 font-semibold italic leading-relaxed">
              "The LORD is nigh unto them that are of a broken heart; and saveth such as be of a contrite spirit."
            </p>
            <cite className="text-sm text-[#595959] not-italic mt-2 block">- Psalm 34:18 (KJV)</cite>
          </blockquote>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">You do not have to explain the week to anyone</h2>

          <p className="text-[#595959] text-base leading-relaxed mb-6">
            Nobody is going to ask you to give an account of how your week went before you
            can take your seat. You do not have to be cheerful. You do not have to update
            anyone. You can arrive quiet and leave with something you did not have when you walked in.
          </p>

          <p className="text-[#595959] text-base leading-relaxed mb-8">
            The only thing required is showing up. That one decision - even when it is hard -
            is one of the most significant spiritual decisions you can make. Every time you
            choose to come when you did not feel like it, you are building a resilience
            that the good-week version of you will never develop.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">What to do with the week before Sunday</h2>

          <p className="text-[#595959] text-base leading-relaxed mb-4">
            <strong className="text-gray-900">Name it honestly.</strong> Take sixty seconds and name
            what the week actually cost you. Do not minimize it. Do not perform gratitude
            over the top of it before you have processed it. Name it as real.
          </p>

          <p className="text-[#595959] text-base leading-relaxed mb-4">
            <strong className="text-gray-900">Let it come with you.</strong> Do not try to resolve
            it before Sunday. Bring it with you. The service is a place to hear something
            that speaks into what you are carrying - not a place where you arrive already
            having sorted it out.
          </p>

          <p className="text-[#595959] text-base leading-relaxed mb-8">
            <strong className="text-gray-900">One step at a time.</strong> The week is over. Sunday
            is one day. You do not have to fix everything by Monday. Just make it to Sunday first.
            The rest comes after.
          </p>

          <p className="text-[#595959] text-base leading-relaxed mb-8">
            <Link href="/sunday-services" className="fgi-link">Fountain of Grace International</Link> is at
            323 B Danie Theron Street, Pretoria North. Services begin at 09:00.
            You can come exactly as the week left you. That is what the place is for.
            Also read{' '}
            <Link href="/devotional/prepare-your-heart-before-you-walk-in" className="fgi-link">how to prepare your heart before Sunday</Link> -
            it takes five minutes and it helps.
          </p>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#008080] py-12 px-4 sm:px-6">
        <div className="section-container text-center">
          <h2 className="text-xl font-bold text-white mb-3">
            Come as the week left you
          </h2>
          <p className="text-white text-sm mb-6 max-w-md mx-auto">
            09:00 every Sunday. 323 B Danie Theron Street, Pretoria North. No good week required.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/plan-your-visit" className="btn-primary text-sm">
              Plan Your Visit
            </Link>
            <a
              href="https://wa.me/27752592555"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-white text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-white hover:text-[#008080] transition-colors text-sm"
            >
              WhatsApp Us
            </a>
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
