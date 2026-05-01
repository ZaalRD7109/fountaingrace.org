import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'When God Seems Silent - What to Do in the Waiting | Fountain of Grace International',
  description: 'You prayed. You waited. Nothing came. The silence is not the answer you expected. Pastor Ricardo Zaal on what to do when God seems quiet.',
  robots: 'index, follow',
  alternates: { canonical: 'https://www.fountaingrace.org/devotional/when-god-seems-silent' },
  openGraph: {
    title: 'When God Seems Silent - What to Do in the Waiting',
    description: 'You prayed. You waited. Nothing came. What to do when God seems quiet.',
    type: 'article',
    url: 'https://www.fountaingrace.org/devotional/when-god-seems-silent',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International' }],
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'When God Seems Silent - What to Do in the Waiting',
    description: 'You prayed. You waited. Nothing came. What to do when God seems quiet.',
    author: { '@type': 'Person', name: 'Pastor Ricardo Zaal' },
    publisher: {
      '@type': 'Organization',
      name: 'Fountain of Grace International',
      url: 'https://www.fountaingrace.org',
    },
    url: 'https://www.fountaingrace.org/devotional/when-god-seems-silent',
    inLanguage: 'en',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Devotional', item: 'https://www.fountaingrace.org/devotional' },
      { '@type': 'ListItem', position: 3, name: 'When God Seems Silent', item: 'https://www.fountaingrace.org/devotional/when-god-seems-silent' },
    ],
  },
]

export default function WhenGodSeemsSilentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="bg-[#008080] text-white pt-10 pb-10 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-white font-semibold text-xs uppercase tracking-wider mb-3">
            Devotional - Faith
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
            When God Seems Silent - What to Do in the Waiting
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
            You prayed. You meant it. You waited.
            And what came back was not an answer - it was silence.
          </p>

          <p className="text-[#595959] text-base leading-relaxed mb-8">
            If that is where you are right now, this is for you.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Silence is not the same as absence</h2>

          <p className="text-[#595959] text-base leading-relaxed mb-6">
            The first thing to hold onto in the silence is this: the absence of an audible answer
            is not the same thing as the absence of God. These two feel identical from the inside.
            But they are not the same thing.
          </p>

          <p className="text-[#595959] text-base leading-relaxed mb-8">
            Every major figure in the Bible experienced extended periods of silence between the
            promise and the fulfillment. Joseph waited years in a prison. Abraham waited decades
            for the son he was promised. David was anointed king and then spent years running for
            his life. The silence was not God withdrawing. It was God working in a way that could
            not be seen yet.
          </p>

          <blockquote className="border-l-4 border-[#FFD600] pl-5 py-2 my-8 bg-[#fffdf0] rounded-r-xl">
            <p className="text-gray-800 font-semibold italic leading-relaxed">
              "They that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles."
            </p>
            <cite className="text-sm text-[#595959] not-italic mt-2 block">- Isaiah 40:31 (KJV)</cite>
          </blockquote>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">What to do while you wait</h2>

          <p className="text-[#595959] text-base leading-relaxed mb-4">
            <strong className="text-gray-900">Keep doing what you know to do.</strong> When the answer is not
            coming, the temptation is to either push harder or stop entirely. Both are reactions to
            anxiety rather than responses to faith. Keep doing the last thing you were clearly led to do,
            until you receive new direction. Faithfulness in the small thing is often what unlocks the next.
          </p>

          <p className="text-[#595959] text-base leading-relaxed mb-4">
            <strong className="text-gray-900">Do not let the silence rewrite what you heard.</strong>
            When you are waiting and nothing is happening, the mind starts to question whether you
            heard God at all. Write down what you believed you received. Do not let the duration of
            the silence talk you out of what was real in the moment you received it.
          </p>

          <p className="text-[#595959] text-base leading-relaxed mb-8">
            <strong className="text-gray-900">Stay in community.</strong> Isolation makes silence
            louder. The period of waiting is not the time to withdraw from church, from prayer,
            from people who know what you are walking through. Hebrews 10:25 warns against this
            specifically. The assembly is not optional when things are hard - it is most necessary then.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">What the silence may be doing</h2>

          <p className="text-[#595959] text-base leading-relaxed mb-6">
            Silence strips away a certain kind of faith - the kind built entirely on receiving.
            When the answers come easily, it is hard to know whether you are trusting God or
            trusting the answers. The silence separates the two. It asks: do you trust me when
            there is nothing to show for it?
          </p>

          <p className="text-[#595959] text-base leading-relaxed mb-8">
            The people who come out of extended silence with their faith intact tend to say the
            same thing on the other side: the waiting produced something in them that the answered
            prayer alone could not have produced. Not because silence is better than answers -
            but because it builds a different kind of foundation.
          </p>

          <p className="text-[#595959] text-base leading-relaxed mb-8">
            This Sunday at <Link href="/sunday-services" className="fgi-link">Fountain of Grace International</Link>, bring the silence with you.
            You do not need to resolve it before you walk in. You also may want to read{' '}
            <Link href="/devotional/prepare-your-heart-before-you-walk-in" className="fgi-link">how to prepare your heart before Sunday</Link>.
          </p>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#008080] py-12 px-4 sm:px-6">
        <div className="section-container text-center">
          <h2 className="text-xl font-bold text-white mb-3">
            See you Sunday
          </h2>
          <p className="text-white text-sm mb-6 max-w-md mx-auto">
            09:00 every Sunday. 323 B Danie Theron Street, Pretoria North. No registration needed.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/plan-your-visit" className="btn-primary text-sm">
              Plan Your Visit
            </Link>
            <Link href="/prayer" className="inline-block border-2 border-white text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-white hover:text-[#008080] transition-colors text-sm">
              Submit a Prayer Request
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
