import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Resources | Fountain of Grace International | Pretoria North',
  description: 'Practical answers to real life questions - purpose, emptiness, failure, anxiety, forgiveness, and more. Biblical perspective from Fountain of Grace International in Pretoria North.',
  robots: 'index, follow',
  alternates: { canonical: 'https://www.fountaingrace.org/resources' },
  openGraph: {
    title: 'Resources | Fountain of Grace International',
    description: 'Practical answers to real life questions from Fountain of Grace International in Pretoria North.',
    type: 'website',
    url: 'https://www.fountaingrace.org/resources',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International' }],
  },
}

const articles = [
  {
    slug: 'why-does-my-life-feel-empty',
    title: 'Why Your Life Feels Empty - And What Actually Fills It',
    intro: 'You can have the job, the house, the relationship - and still feel hollow. This is one of the most common feelings people carry silently. Here is what is actually happening and what genuinely changes it.',
    category: 'Purpose',
  },
]

export default function ResourcesPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#008080] text-white pt-10 pb-10 px-4 sm:px-6">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-white font-semibold text-xs uppercase tracking-wider mb-3">
            Resources - Fountain of Grace International
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
            Real answers to real questions
          </h1>
          <p className="text-white text-base leading-relaxed">
            Practical, Biblical perspective on the questions people are actually asking - purpose, emptiness, failure, anxiety, and more.
          </p>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="bg-white py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8 sm:grid-cols-2">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/resources/${article.slug}`}
                className="block group bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <span className="inline-block text-xs font-semibold text-[#008080] uppercase tracking-wider mb-3">
                  {article.category}
                </span>
                <h2 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#008080] transition-colors leading-snug">
                  {article.title}
                </h2>
                <p className="text-[#595959] text-sm leading-relaxed">
                  {article.intro}
                </p>
                <span className="inline-block mt-4 text-sm font-semibold text-[#008080]">
                  Read more
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#008080] py-12 px-4 sm:px-6">
        <div className="section-container text-center">
          <h2 className="text-xl font-bold text-white mb-3">
            Looking for something specific?
          </h2>
          <p className="text-white text-sm mb-6 max-w-md mx-auto">
            Every Sunday at Fountain of Grace International, Pastor Ricardo teaches practical Biblical answers to the questions people are actually living with.
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
              For questions, call or WhatsApp +27 75 259 2555 or email info@fountaingrace.org.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
