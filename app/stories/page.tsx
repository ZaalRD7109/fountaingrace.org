import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Impact Stories | Fountain of Grace International | NPO 316-193 Pretoria North',
  description: 'Real stories of what your giving does in Pretoria North. Fountain of Grace International is a registered NPO (316-193) running food programs, outreach, and community support in Gauteng.',
  robots: 'index, follow',
  alternates: { canonical: 'https://www.fountaingrace.org/stories' },
  openGraph: {
    title: 'Impact Stories | Fountain of Grace International NPO',
    description: 'Real stories of what your giving does in Pretoria North - food programs, outreach, and community support.',
    type: 'website',
    url: 'https://www.fountaingrace.org/stories',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International' }],
  },
}

const stories = [
  {
    slug: 'what-your-giving-does-in-pretoria-north',
    title: 'What Your R150 a Month Does in Pretoria North',
    intro: 'When Fountain of Grace International started, 15 people gathered in a room. Today that gathering funds food programs, community outreach, and support for families who have nowhere else to turn. Here is exactly where every rand goes.',
    category: 'Impact Report',
  },
]

export default function StoriesPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#008080] text-white pt-10 pb-10 px-4 sm:px-6">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-white font-semibold text-xs uppercase tracking-wider mb-3">
            Impact Stories - NPO 316-193
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
            Real stories. Real numbers. Real impact.
          </h1>
          <p className="text-white text-base leading-relaxed">
            Fountain of Grace International is a registered NPO in Pretoria North running food programs, community outreach, and support for families in Gauteng. Here is what your giving makes possible.
          </p>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="bg-white py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8 sm:grid-cols-2">
            {stories.map((s) => (
              <Link
                key={s.slug}
                href={`/stories/${s.slug}`}
                className="block group bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <span className="inline-block text-xs font-semibold text-[#008080] uppercase tracking-wider mb-3">
                  {s.category}
                </span>
                <h2 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#008080] transition-colors leading-snug">
                  {s.title}
                </h2>
                <p className="text-[#595959] text-sm leading-relaxed">
                  {s.intro}
                </p>
                <span className="inline-block mt-4 text-sm font-semibold text-[#008080]">
                  Read the story
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DONATE CTA */}
      <section className="bg-[#008080] py-12 px-4 sm:px-6">
        <div className="section-container text-center">
          <h2 className="text-xl font-bold text-white mb-3">
            Support the work in Pretoria North
          </h2>
          <p className="text-white text-sm mb-6 max-w-md mx-auto">
            Fountain of Grace International is a registered NPO (316-193). Every rand given goes directly to food programs, community outreach, and support for families who have nowhere else to turn.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/donate" className="btn-primary text-sm">
              Donate Now
            </Link>
            <Link href="/community-impact" className="inline-block border-2 border-white text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-white hover:text-[#008080] transition-colors text-sm">
              See Full Impact Report
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
