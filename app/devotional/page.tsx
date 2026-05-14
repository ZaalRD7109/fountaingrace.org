import type { Metadata } from 'next'
import Link from 'next/link'
import DevotionalSubscribeForm from './DevotionalSubscribeForm'

export const metadata: Metadata = {
  title: 'Daily Devotional | Fountain of Grace International | Pretoria North',
  description: 'A fresh word from God every morning - sent to you by Fountain of Grace International in Pretoria North. Subscribe free and receive your daily devotional by email or WhatsApp.',
  robots: 'index, follow',
  alternates: { canonical: 'https://www.fountaingrace.org/devotional' },
  openGraph: {
    title: 'Daily Devotional | Fountain of Grace International',
    description: 'A fresh word from God every morning - free daily devotional from Fountain of Grace International.',
    type: 'website',
    url: 'https://www.fountaingrace.org/devotional',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International' }],
  },
}

const devotionals = [
  {
    slug: 'prepare-your-heart-before-you-walk-in',
    title: 'Before You Walk In: What to Bring to Church This Sunday',
    intro: 'Most people prepare what they wear on Sunday. Very few prepare what they carry inside. Five minutes before Sunday changes everything about what you receive when you get there.',
    category: 'Sunday Prep',
  },
  {
    slug: 'when-god-seems-silent',
    title: 'When God Seems Silent - What to Do in the Waiting',
    intro: 'You prayed. You waited. Nothing came. The silence is not the answer you expected - but it is not the end of the story either. Here is what to hold onto and what to do.',
    category: 'Faith',
  },
  {
    slug: 'one-question-before-sunday',
    title: 'One Question That Will Change How You Experience Church',
    intro: 'Most people sit through church asking the wrong question. One small shift in what you bring through the door changes everything about what you take home.',
    category: 'Sunday Prep',
  },
  {
    slug: 'what-sunday-is-not',
    title: 'What Sunday Is Not - Clearing Up the Biggest Misunderstanding About Church',
    intro: 'Most people who walk away from church leave because they had the wrong idea of what it was supposed to be. Let us clear that up before it costs you something real.',
    category: 'Church Life',
  },
  {
    slug: 'the-week-did-not-go-as-planned',
    title: 'The Week Did Not Go as Planned - Come Anyway',
    intro: 'The week was hard. Things did not work out. You are not in the mood for Sunday. That is exactly the right time to come - and here is why it matters more than you think.',
    category: 'Sunday Prep',
  },
]

export default function DevotionalPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#008080] text-white pt-10 pb-10 px-4 sm:px-6">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-white font-semibold text-xs uppercase tracking-wider mb-3">
            Daily Devotional - Fountain of Grace International
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
            A fresh word. Every morning.
          </h1>
          <p className="text-white text-base leading-relaxed">
            A short, direct word from God - delivered to you every morning at 6 AM.
            No filler. No religious performance. Just the truth you need for the day ahead.
          </p>
        </div>
      </section>

      {/* SUBSCRIBE - EMAIL */}
      <section className="bg-white py-14 px-4 sm:px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Get it every morning - free</h2>
          <p className="text-[#595959] text-sm leading-relaxed mb-8">
            Subscribe and receive the daily devotional by email every morning at 6 AM.
            No spam. One word from God. That is it.
          </p>
          <DevotionalSubscribeForm />
          <p className="text-xs text-[#888] mt-5 max-w-sm mx-auto">
            By subscribing you consent to receiving the FGI Daily Devotional by email from Fountain of Grace International (NPO 316-193).
            Used only for this purpose. Never sold or shared. Reply STOP to unsubscribe at any time.{' '}
            <Link href="/privacy-policy" className="underline">Privacy Policy</Link>.
          </p>
        </div>
      </section>

      {/* SUBSCRIBE - WHATSAPP */}
      <section className="bg-gray-50 py-10 px-4 sm:px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Prefer WhatsApp?</h2>
          <p className="text-[#595959] text-sm leading-relaxed mb-5">
            Message us on WhatsApp and type <strong>daily devotion</strong> - we will add you to the broadcast list.
          </p>
          <a
            href="https://wa.me/27752592555?text=daily%20devotion"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#25d366] text-[#1a1a1a] font-semibold px-6 py-3 rounded-lg hover:bg-[#1ebe5d] transition-colors text-sm"
          >
            Subscribe on WhatsApp
          </a>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="bg-white py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-8 text-center">Recent devotionals</h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {devotionals.map((d) => (
              <Link
                key={d.slug}
                href={`/devotional/${d.slug}`}
                className="block group bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <span className="inline-block text-xs font-semibold text-[#008080] uppercase tracking-wider mb-3">
                  {d.category}
                </span>
                <h2 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#008080] transition-colors leading-snug">
                  {d.title}
                </h2>
                <p className="text-[#595959] text-sm leading-relaxed">
                  {d.intro}
                </p>
                <span className="inline-block mt-4 text-sm font-semibold text-[#008080]">
                  Read more
                </span>
              </Link>
            ))}
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
