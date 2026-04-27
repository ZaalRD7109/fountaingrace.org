import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'What Your R150 a Month Does in Pretoria North | FGI NPO 316-193',
  description: 'Fountain of Grace International runs food programs, community outreach and family support in Pretoria North. Here is exactly where every rand of your giving goes - with real numbers.',
  robots: 'index, follow',
  alternates: { canonical: 'https://www.fountaingrace.org/stories/what-your-giving-does-in-pretoria-north' },
  openGraph: {
    title: 'What Your R150 a Month Does in Pretoria North',
    description: 'Here is exactly where every rand of your giving goes - food programs, outreach, and community support in Pretoria North.',
    type: 'article',
    url: 'https://www.fountaingrace.org/stories/what-your-giving-does-in-pretoria-north',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International' }],
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'What Your R150 a Month Does in Pretoria North',
    description: 'Fountain of Grace International runs food programs, community outreach and family support in Pretoria North. Here is exactly where every rand goes.',
    author: { '@type': 'Person', name: 'Pastor Ricardo Zaal' },
    publisher: {
      '@type': 'Organization',
      name: 'Fountain of Grace International',
      url: 'https://www.fountaingrace.org',
      legalName: 'Fountain of Grace International NPO',
    },
    url: 'https://www.fountaingrace.org/stories/what-your-giving-does-in-pretoria-north',
    inLanguage: 'en',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Stories', item: 'https://www.fountaingrace.org/stories' },
      { '@type': 'ListItem', position: 3, name: 'What Your Giving Does', item: 'https://www.fountaingrace.org/stories/what-your-giving-does-in-pretoria-north' },
    ],
  },
]

export default function WhatYourGivingDoesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="bg-[#008080] text-white pt-10 pb-10 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-white font-semibold text-xs uppercase tracking-wider mb-3">
            Impact Stories - NPO 316-193
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
            What Your R150 a Month Does in Pretoria North
          </h1>
          <p className="text-white text-base leading-relaxed">
            Fountain of Grace International - Pretoria North, Gauteng
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-white py-14 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">

          <p className="text-[#595959] text-base leading-relaxed mb-6">
            When Fountain of Grace International first gathered, there were 15 people in a room.
            No building. No budget. No track record. Just a conviction that a community built around
            real faith could do something real for the people around it.
          </p>

          <p className="text-[#595959] text-base leading-relaxed mb-8">
            That was the beginning. What it has grown into is something that R150 a month from
            someone who cares makes possible - week after week, family after family.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Where every rand goes</h2>

          <p className="text-[#595959] text-base leading-relaxed mb-6">
            FGI is a registered Non-Profit Organisation (NPO 316-193), registered with the South African
            Department of Social Development. That means full transparency is not optional - it is required.
            Here is how giving is allocated:
          </p>

          {/* Allocation blocks */}
          <div className="space-y-4 mb-10">
            <div className="bg-[#f0fafa] border-l-4 border-[#008080] rounded-r-xl px-5 py-4">
              <p className="font-bold text-gray-900 text-lg">58% - Food and basic aid programs</p>
              <p className="text-[#595959] text-sm mt-1 leading-relaxed">
                Direct food parcels, emergency aid, and basic needs support for families in Pretoria North who have nowhere else to turn.
              </p>
            </div>
            <div className="bg-[#f0fafa] border-l-4 border-[#FFD600] rounded-r-xl px-5 py-4">
              <p className="font-bold text-gray-900 text-lg">14% - Programme materials and logistics</p>
              <p className="text-[#595959] text-sm mt-1 leading-relaxed">
                Transportation, storage, packaging, and the materials that keep programs running week after week.
              </p>
            </div>
            <div className="bg-[#f0fafa] border-l-4 border-gray-300 rounded-r-xl px-5 py-4">
              <p className="font-bold text-gray-900 text-lg">28% - Operations and compliance</p>
              <p className="text-[#595959] text-sm mt-1 leading-relaxed">
                NPO administration, financial compliance, and the infrastructure that keeps everything accountable and legally sound.
              </p>
            </div>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">What R150 a month actually looks like</h2>

          <p className="text-[#595959] text-base leading-relaxed mb-6">
            R150 a month is less than a single restaurant meal. Applied through FGI's food program,
            that same amount contributes to feeding a family for a week. When 10 people each give R150,
            that is a month's worth of food security for a family that was going without.
          </p>

          <p className="text-[#595959] text-base leading-relaxed mb-8">
            Monthly giving matters more than once-off giving for exactly this reason. Programs cannot
            operate on unpredictable income. Families cannot eat on unpredictable schedules. Consistent
            monthly support is what allows FGI to plan, commit, and deliver - not just respond to crises.
          </p>

          <blockquote className="border-l-4 border-[#FFD600] pl-5 py-2 my-8 bg-[#fffdf0] rounded-r-xl">
            <p className="text-gray-800 font-semibold italic leading-relaxed">
              "He who is generous will be blessed, for he gives some of his food to the poor."
            </p>
            <cite className="text-sm text-[#595959] not-italic mt-2 block">- Proverbs 22:9</cite>
          </blockquote>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Why FGI and not another organisation</h2>

          <p className="text-[#595959] text-base leading-relaxed mb-6">
            There are many worthy causes in South Africa. What makes FGI different is the combination
            of local accountability and community rootedness. This is not a national charity with
            a head office in Johannesburg. This is a team of people who live in Pretoria North,
            know their neighbours by name, and show up to the same streets every week.
          </p>

          <p className="text-[#595959] text-base leading-relaxed mb-8">
            When you give to FGI, you are giving to people who will see exactly where it goes -
            because they live there. That is not possible at scale. It is only possible in a
            community-rooted NPO like this one.
          </p>

          <p className="text-[#595959] text-base leading-relaxed mb-6">
            See the full breakdown of every programme your giving supports on the{' '}
            <Link href="/community-impact" className="fgi-link">Community Impact page</Link>.
            Or if you have a question about how your giving is used,{' '}
            <a href="https://wa.me/27752592555" target="_blank" rel="noopener noreferrer" className="fgi-link">WhatsApp Pastor Ricardo directly</a>.
            He answers personally.
          </p>

        </div>
      </section>

      {/* DONATE CTA */}
      <section className="bg-gray-50 py-12 px-4 sm:px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Ready to be part of this?</h2>
          <p className="text-[#595959] text-sm leading-relaxed mb-6">
            Monthly giving starts at R150. PayPal, EFT, or WhatsApp. All giving is processed transparently by a registered NPO (316-193).
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/donate" className="btn-primary text-sm">
              Give Monthly
            </Link>
            <Link href="/volunteer" className="inline-block border-2 border-[#008080] text-[#008080] font-semibold px-6 py-3 rounded-lg hover:bg-[#008080] hover:text-white transition-colors text-sm">
              Volunteer Instead
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
