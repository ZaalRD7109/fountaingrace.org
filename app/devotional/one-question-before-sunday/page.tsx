import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'One Question That Will Change How You Experience Church | Fountain of Grace International',
  description: 'Before this Sunday, ask yourself one honest question. Pastor Ricardo Zaal explains how this single shift changes what you take home from every service.',
  robots: 'index, follow',
  alternates: { canonical: 'https://www.fountaingrace.org/devotional/one-question-before-sunday' },
  openGraph: {
    title: 'One Question That Will Change How You Experience Church',
    description: 'Before this Sunday, ask yourself one honest question. It changes everything about what you receive.',
    type: 'article',
    url: 'https://www.fountaingrace.org/devotional/one-question-before-sunday',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International' }],
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'One Question That Will Change How You Experience Church',
    description: 'Before this Sunday, ask yourself one honest question. It changes everything about what you receive.',
    author: { '@type': 'Person', name: 'Pastor Ricardo Zaal' },
    publisher: {
      '@type': 'Organization',
      name: 'Fountain of Grace International',
      url: 'https://www.fountaingrace.org',
    },
    url: 'https://www.fountaingrace.org/devotional/one-question-before-sunday',
    inLanguage: 'en',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Devotional', item: 'https://www.fountaingrace.org/devotional' },
      { '@type': 'ListItem', position: 3, name: 'One Question Before Sunday', item: 'https://www.fountaingrace.org/devotional/one-question-before-sunday' },
    ],
  },
]

export default function OneQuestionBeforeSundayPage() {
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
            One Question That Will Change How You Experience Church
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
            Most people sit through church services asking an unconscious question: was this good?
            Was the music good? Was the message good? Was the whole thing worth the hour?
          </p>

          <p className="text-[#595959] text-base leading-relaxed mb-8">
            This is the wrong question. And the moment you switch to the right one, everything
            about how you receive a Sunday service changes.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">The question that changes everything</h2>

          <p className="text-[#595959] text-base leading-relaxed mb-6">
            Before this Sunday, ask yourself this:
          </p>

          <p className="text-gray-900 text-lg font-bold text-center py-6 px-4 bg-gray-50 rounded-xl mb-8 leading-snug">
            "What is the one thing I most need God to deal with in my life right now?"
          </p>

          <p className="text-[#595959] text-base leading-relaxed mb-8">
            Write it down. Be specific. Not a vague "I want to grow" or "I need to be better."
            The actual thing. The conversation you have been avoiding. The pattern you have seen
            in yourself that you have not addressed. The area of your life that is not moving
            and you do not know why.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Why it changes what you hear</h2>

          <p className="text-[#595959] text-base leading-relaxed mb-6">
            When you walk into a service with a specific question, you are no longer a passive
            audience. You are a person looking for something specific. That posture shifts
            how your mind processes everything you hear.
          </p>

          <p className="text-[#595959] text-base leading-relaxed mb-8">
            The same message lands differently on an open question than it does on a
            comfortable consumer. You will hear things in the same words that someone else
            with no question completely misses. The Word of God is alive (Hebrews 4:12) -
            but you have to bring the right kind of receptivity to receive what it is carrying.
          </p>

          <blockquote className="border-l-4 border-[#FFD600] pl-5 py-2 my-8 bg-[#fffdf0] rounded-r-xl">
            <p className="text-gray-800 font-semibold italic leading-relaxed">
              "Ask, and it shall be given you; seek, and ye shall find; knock, and it shall be opened unto you."
            </p>
            <cite className="text-sm text-[#595959] not-italic mt-2 block">- Matthew 7:7 (KJV)</cite>
          </blockquote>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">After the service: the one action</h2>

          <p className="text-[#595959] text-base leading-relaxed mb-6">
            Before you leave the building on Sunday - or within an hour of watching online -
            write down one thing you are going to do differently this week because of what you heard.
            Not two things. Not a list. One action, specific and achievable before the next Sunday arrives.
          </p>

          <p className="text-[#595959] text-base leading-relaxed mb-8">
            The gap between people who grow and people who sit for years without changing is
            almost always this: one group acts on what they hear, and the other does not.
            You do not need more information. You need one step.
          </p>

          <p className="text-[#595959] text-base leading-relaxed mb-8">
            Come to <Link href="/sunday-services" className="fgi-link">Fountain of Grace International</Link> this Sunday
            with your question ready. Services begin at 09:00 at 323 B Danie Theron Street, Pretoria North.
            Or listen to a sermon now - try{' '}
            <Link href="/sermons/be-a-doer-of-gods-word-not-just-a-hearer" className="fgi-link">Be a Doer of God's Word, Not Just a Hearer</Link> as
            a starting point.
          </p>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#008080] py-12 px-4 sm:px-6">
        <div className="section-container text-center">
          <h2 className="text-xl font-bold text-white mb-3">
            Come with your question this Sunday
          </h2>
          <p className="text-white text-sm mb-6 max-w-md mx-auto">
            09:00 every Sunday. 323 B Danie Theron Street, Pretoria North. No registration needed.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/plan-your-visit" className="btn-primary text-sm">
              Plan Your Visit
            </Link>
            <Link href="/sermons" className="inline-block border-2 border-white text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-white hover:text-[#008080] transition-colors text-sm">
              Browse Sermons
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
