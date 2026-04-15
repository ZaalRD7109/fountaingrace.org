import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sermons & Bible Teaching | Fountain of Grace International Pretoria North',
  description:
    'Practical Bible teaching from a Christian church in Pretoria North. Every Sunday message addresses a real problem you are facing. Listen online or come in person.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/sermons',
  },
  openGraph: {
    title: 'Sermons & Bible Teaching | Fountain of Grace International Pretoria North',
    description:
      'Practical Bible teaching from a Christian church in Pretoria North. Every Sunday message addresses a real problem you are facing. Listen online or come in person.',
    type: 'website',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International — Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/sermons',
  },
}

const sermonPosts = [
  {
    slug: 'right-action-principles-that-move-people-forward-faster',
    title: 'Part 2: Right Action — The Principles That Move People Forward Faster',
    date: '2025-03-15',
    dateDisplay: '15 March 2025',
    intro:
      'Knowing the principles is not the same as applying them. Part 2 asks the harder question: why do you still know, but not act? What separates the person who plans from the person who moves?',
  },
  {
    slug: 'the-principles-that-move-people-forward-faster',
    title: 'The Principles That Move People Forward Faster',
    date: '2025-03-08',
    dateDisplay: '8 March 2025',
    intro:
      'You have been praying. You have been trying. Nothing has changed. This message gives 10 biblical principles — obedience, positioning, wisdom, strategy, stewardship, relationships, and more.',
  },
  {
    slug: 'what-if-someone-else-finishes-what-was-meant-for-you',
    title: 'What If Someone Else Finishes What Was Meant for You?',
    date: '2025-02-22',
    dateDisplay: '22 February 2025',
    intro:
      'You know your potential. You keep postponing. Based on Esther 4:14, this message asks the uncomfortable question: what if your window closes and someone else steps into your assignment?',
  },
  {
    slug: 'follow-your-inner-voice-discover-your-destiny',
    title: 'Follow Your Inner Voice — Discover Your Destiny',
    date: '2025-02-24',
    dateDisplay: '24 February 2025',
    intro:
      'Before you were born, God already set you apart. This message challenges you to stop listening to the voices that told you to stop running — and start moving in the direction God placed inside you.',
  },
  {
    slug: 'be-a-doer-of-gods-word-not-just-a-hearer',
    title: "Be a Doer of God's Word, Not Just a Hearer",
    date: '2025-02-16',
    dateDisplay: '16 February 2025',
    intro:
      'James 1:21-25 — the person who hears and forgets is like a man who looks in a mirror and walks away. The blessing is attached to the doing, not the hearing.',
  },
  {
    slug: 'why-youre-not-moving-forward-and-how-to-break-it',
    title: "Why You're Not Moving Forward — And How to Break It",
    date: '2025-03-01',
    dateDisplay: '1 March 2025',
    intro:
      'Most people are not stuck because of a lack of information. They are stuck because of four specific patterns that disguise themselves as wisdom. This message names them and breaks them.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Sermons — Fountain of Grace International',
  description: 'Practical teaching for real life from Fountain of Grace International in Pretoria North.',
  url: 'https://www.fountaingrace.org/sermons',
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
}

export default function SermonsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* HERO */}
      <section className="bg-white pt-16 pb-12 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#008080] font-semibold text-sm uppercase tracking-wider mb-4">
            Sunday Teaching · Pretoria North
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
            Practical teaching for real life — Pretoria North
          </h1>
          <p className="text-lg text-[#7d7d7d] leading-relaxed">
            Every message at{' '}
            <Link href="/about" className="text-[#008080] font-semibold hover:underline">Fountain of Grace International</Link>{' '}
            in Pretoria North is built around a problem people are actually living with. Not theory. Not performance. Things that
            connect to your week. Want to come in person?{' '}
            <Link href="/plan-your-visit" className="text-[#008080] font-semibold hover:underline">Plan your visit</Link>.
          </p>
        </div>
      </section>

      {/* SERMON CARDS */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6">
        <div className="section-container max-w-4xl">
          <div className="space-y-8">
            {sermonPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-xl border border-gray-100 p-6 sm:p-8 hover:shadow-md transition-shadow"
              >
                <time
                  dateTime={post.date}
                  className="text-xs font-semibold text-[#008080] uppercase tracking-wider"
                >
                  {post.dateDisplay}
                </time>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-2 mb-4 leading-snug">
                  {post.title}
                </h2>
                <p className="text-[#7d7d7d] leading-relaxed mb-6">{post.intro}</p>
                <Link
                  href={`/sermons/${post.slug}`}
                  className="text-[#008080] font-semibold text-sm hover:underline"
                  aria-label={`Read full message: ${post.title}`}
                >
                  Read More →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#008080] py-14 px-4 sm:px-6">
        <div className="section-container text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Come and hear this in person — Pretoria North
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Every Sunday at 09:00. Fountain of Grace International, 323 B Danie Theron Street, Pretoria North.
          </p>
          <Link href="/plan-your-visit" className="btn-primary">
            Plan Your Visit
          </Link>
        </div>
      </section>
    </>
  )
}
