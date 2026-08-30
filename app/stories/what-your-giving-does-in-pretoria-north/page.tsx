import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'What Your Giving Does in Pretoria North | FGI NPO 316-193',
  description: 'Fountain of Grace International helps local families with food, electricity, rent and pastoral care in Pretoria North. Here is how your giving is used, with the real breakdown from our books.',
  robots: 'index, follow',
  alternates: { canonical: 'https://www.fountaingrace.org/stories/what-your-giving-does-in-pretoria-north' },
  openGraph: {
    title: 'What Your Giving Does in Pretoria North',
    description: 'How your giving is used in Pretoria North - food, electricity, rent and pastoral care for local families.',
    type: 'article',
    url: 'https://www.fountaingrace.org/stories/what-your-giving-does-in-pretoria-north',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International' }],
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'What Your Giving Does in Pretoria North',
    description: 'Fountain of Grace International helps local families with food, electricity, rent and pastoral care in Pretoria North. Here is how your giving is used.',
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
            What Your Giving Does in Pretoria North
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
            When Fountain of Grace International started, a small group met to pray.
            No building. No budget. No track record. Just a conviction that a community built around
            real faith could do something real for the people around it.
          </p>

          <p className="text-[#595959] text-base leading-relaxed mb-8">
            That was the beginning. What it has grown into is a church that has put food on tables,
            covered electricity and rent, and stood with families - and a monthly gift from
            someone who cares is part of what makes that possible.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Where your giving goes</h2>

          <p className="text-[#595959] text-base leading-relaxed mb-6">
            FGI is a registered Non-Profit Organisation (NPO 316-193), registered with the South African
            Department of Social Development. Transparency is not optional for us. We keep proper books
            and report to the Department each year. Here is how giving was used in our 2025 financial year:
          </p>

          {/* Allocation blocks - real 2025 figures */}
          <div className="space-y-4 mb-10">
            <div className="bg-[#f0fafa] border-l-4 border-[#008080] rounded-r-xl px-5 py-4">
              <p className="font-bold text-gray-900 text-lg">58% - Food and basic aid</p>
              <p className="text-[#595959] text-sm mt-1 leading-relaxed">
                Food and basic-needs help for families in Pretoria North who have nowhere else to turn.
              </p>
            </div>
            <div className="bg-[#f0fafa] border-l-4 border-[#FFD600] rounded-r-xl px-5 py-4">
              <p className="font-bold text-gray-900 text-lg">14% - Materials and transport</p>
              <p className="text-[#595959] text-sm mt-1 leading-relaxed">
                Transport, storage and the practical things it takes to get help to people.
              </p>
            </div>
            <div className="bg-[#f0fafa] border-l-4 border-gray-300 rounded-r-xl px-5 py-4">
              <p className="font-bold text-gray-900 text-lg">28% - Running costs and NPO compliance</p>
              <p className="text-[#595959] text-sm mt-1 leading-relaxed">
                Administration and the compliance that keeps the NPO accountable and legally sound.
              </p>
            </div>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Why monthly giving matters</h2>

          <p className="text-[#595959] text-base leading-relaxed mb-6">
            A monthly gift is less than most people spend on a single meal out. Given together, it has
            helped families cover a light bill or a month&apos;s rent.
          </p>

          <p className="text-[#595959] text-base leading-relaxed mb-8">
            Monthly giving matters more than once-off giving for a simple reason. A family in need cannot
            plan around unpredictable help. Steady monthly support is what lets FGI plan, commit, and
            keep showing up - not just respond when things fall apart.
          </p>

          <blockquote className="border-l-4 border-[#FFD600] pl-5 py-2 my-8 bg-[#fffdf0] rounded-r-xl">
            <p className="text-gray-800 font-semibold italic leading-relaxed">
              "He that hath a bountiful eye shall be blessed; for he giveth of his bread to the poor."
            </p>
            <cite className="text-sm text-[#595959] not-italic mt-2 block">- Proverbs 22:9 (KJV)</cite>
          </blockquote>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Why FGI and not another organisation</h2>

          <p className="text-[#595959] text-base leading-relaxed mb-6">
            There are many worthy causes in South Africa. What makes FGI different is local
            accountability and being rooted in the community. This is not a national charity with
            a head office in Johannesburg. This is people rooted in Pretoria North, led by Pastor
            Ricardo, who help their neighbours directly.
          </p>

          <p className="text-[#595959] text-base leading-relaxed mb-8">
            When you give to FGI, you are giving to people who see exactly where it goes,
            because they live there. That is hard to do at scale. It is what a
            community-rooted NPO like this one can do.
          </p>

          <p className="text-[#595959] text-base leading-relaxed mb-6">
            See more about how your giving is used on the{' '}
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
            Give monthly by PayPal, EFT or WhatsApp. All giving is handled by a registered NPO (316-193).
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/donate" className="btn-primary text-sm">
              Give Monthly
            </Link>
            <Link href="/volunteer" className="inline-block border-2 border-[#008080] text-[#006b6b] font-semibold px-6 py-3 rounded-lg hover:bg-[#008080] hover:text-white transition-colors text-sm">
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
