import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Devotional | Fountain of Grace International | Pretoria North',
  description: 'Weekly devotional content from Pastor Ricardo Zaal at Fountain of Grace International - short readings to prepare your heart before Sunday and keep you grounded through the week.',
  robots: 'index, follow',
  alternates: { canonical: 'https://www.fountaingrace.org/devotional' },
  openGraph: {
    title: 'Devotional | Fountain of Grace International',
    description: 'Weekly devotional content from Pastor Ricardo Zaal - prepare your heart before Sunday.',
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
]

export default function DevotionalPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#008080] text-white pt-10 pb-10 px-4 sm:px-6">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-white font-semibold text-xs uppercase tracking-wider mb-3">
            Devotional - Fountain of Grace International
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
            A word for the week
          </h1>
          <p className="text-white text-base leading-relaxed">
            Short, direct readings from Pastor Ricardo Zaal - published every Saturday to prepare you for Sunday and every Wednesday to keep you grounded through the week.
          </p>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="bg-white py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
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

      {/* SUBSCRIBE CTA */}
      <section className="bg-gray-50 py-12 px-4 sm:px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Get the devotional every week</h2>
          <p className="text-[#595959] text-sm leading-relaxed mb-6">
            Receive the Saturday devotional before Sunday and the Wednesday resource directly on WhatsApp or email.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/27752592555?text=Hi%2C%20I%20would%20like%20to%20subscribe%20to%20the%20weekly%20devotional"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#25d366] text-[#1a1a1a] font-semibold px-6 py-3 rounded-lg hover:bg-[#1ebe5d] transition-colors text-sm"
            >
              Subscribe on WhatsApp
            </a>
            <Link href="/sunday-services" className="inline-block border-2 border-[#008080] text-[#008080] font-semibold px-6 py-3 rounded-lg hover:bg-[#008080] hover:text-white transition-colors text-sm">
              Sunday Services Info
            </Link>
          </div>
          <p className="text-xs text-[#888] mt-4 max-w-sm mx-auto">
            By subscribing you consent to receiving weekly devotional content from Fountain of Grace International (NPO 316-193). Used only for this purpose. Never sold or shared. Reply STOP to unsubscribe at any time. <Link href="/privacy-policy" className="underline">Privacy Policy</Link>.
          </p>
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
