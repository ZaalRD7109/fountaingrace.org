import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Church in Pretoria North | Fountain of Grace International',
  description:
    'Looking for a church in Pretoria North? Fountain of Grace International meets every Sunday at 09:00 at 323 B Danie Theron Street. Everyone is welcome.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/church-pretoria-north',
  },
  openGraph: {
    title: 'Church in Pretoria North | Fountain of Grace International',
    description:
      'Looking for a church in Pretoria North? Fountain of Grace International meets every Sunday at 09:00 at 323 B Danie Theron Street. Everyone is welcome.',
    type: 'website',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International — Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/church-pretoria-north',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': ['Church', 'Organization', 'NGO'],
    name: 'Fountain of Grace International',
    description:
      'A Christian church and registered NPO (316-193) in Pretoria North, South Africa. Sunday services every week at 09:00. Everyone is welcome.',
    nonprofitStatus: 'RegisteredNonprofit',
    identifier: { '@type': 'PropertyValue', propertyID: 'NPO', value: '316-193' },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '323 B Danie Theron Street',
      addressLocality: 'Pretoria North',
      addressRegion: 'Gauteng',
      postalCode: '0182',
      addressCountry: 'ZA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -25.672286342520497,
      longitude: 28.172968674468688,
    },
    telephone: '+27752592555',
    email: 'info@fountaingrace.org',
    url: 'https://www.fountaingrace.org',
    openingHours: 'Su 09:00',
    sameAs: [
      'https://www.facebook.com/FGIPta/',
      'https://www.youtube.com/@fgipta',
      'https://www.tiktok.com/@fountainofgraceintl',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Church in Pretoria North', item: 'https://www.fountaingrace.org/church-pretoria-north' },
    ],
  },
]

const serviceAreas = [
  'Pretoria North', 'Karenpark', 'Akasia', 'Dorandia', 'Wonderboom',
  'Montana', 'Orchards', 'Rosslyn', 'Amandasig', 'Suiderberg',
  'Shosanguve', 'Mabopane',
]

export default function ChurchPretoriaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="bg-[#008080] text-white pt-10 pb-10 px-4 sm:px-6">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-white font-semibold text-xs uppercase tracking-wider mb-3">
            Pretoria North · Every Sunday at 09:00
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
            A church in Pretoria North for real people.
          </h1>
          <p className="text-white text-base leading-relaxed mb-6">
            Fountain of Grace International is a Christian church in Pretoria North that meets every Sunday at 09:00.
            Practical teaching. Real community. Everyone is welcome — no experience needed.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/plan-your-visit" className="btn-primary text-sm">
              Plan Your Visit
            </Link>
            <a
              href="https://wa.me/27752592555"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#25d366] text-[#1a1a1a] font-semibold px-6 py-2.5 rounded-lg hover:bg-[#1ebe5d] transition-colors text-sm"
            >
              WhatsApp Us
            </a>
          </div>
          <p className="text-white text-xs mt-5">
            323 B Danie Theron Street, Pretoria North · +27 75 259 2555
          </p>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="bg-white py-14 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What this church in Pretoria North is like</h2>
          <div className="space-y-5 text-[#595959] leading-relaxed">
            <p>
              Fountain of Grace International is not built for people who already have it together. It is built for
              people who are dealing with something real — a difficult season, unanswered questions, or a need for
              community that actually shows up.
            </p>
            <p>
              Every Sunday message is practical and connected to everyday life. The teaching is Bible-based but
              addressed to the problems you are actually facing — not abstract theology for its own sake.
            </p>
            <p>
              When you walk in, someone will greet you. You will not be singled out or made to stand up in front of
              the congregation. After your first visit, someone will follow up personally to check how you are doing.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICE DETAILS */}
      <section className="bg-gray-50 py-14 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Service details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: 'Day', value: 'Every Sunday' },
              { label: 'Time', value: '09:00 — arrive 10–15 min early' },
              { label: 'Duration', value: 'Approximately 90 minutes' },
              { label: 'Address', value: '323 B Danie Theron Street, Pretoria North' },
              { label: 'Languages', value: 'English and Afrikaans' },
              { label: 'Dress code', value: 'Casual — come as you are' },
              { label: 'Children', value: 'Welcome in the service' },
              { label: 'Cost', value: 'Free. No obligation.' },
            ].map((row) => (
              <div key={row.label} className="bg-white rounded-xl border border-gray-100 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-[#008080] mb-1">{row.label}</p>
                <p className="text-gray-900 font-semibold text-sm">{row.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NPO SECTION */}
      <section className="bg-white py-14 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">More than a church</h2>
          <div className="space-y-4 text-[#595959] leading-relaxed">
            <p>
              Fountain of Grace International is also a registered Non-Profit Organisation (NPO 316-193), operating
              six community programs in Pretoria North. These programs address food insecurity, emotional distress,
              family breakdown, youth development, and social isolation.
            </p>
            <p>
              The church and the NPO work together — the Sunday community is the same community that runs the
              programs. If you want to get involved in the practical side of the work, the{' '}
              <Link href="/community-impact" className="text-[#008080] font-semibold hover:underline">
                Community Impact page
              </Link>{' '}
              has the full breakdown.
            </p>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link href="/community-impact" className="btn-primary text-sm">
              See Our Programs
            </Link>
            <Link href="/donate" className="inline-block border-2 border-[#008080] text-[#008080] font-semibold px-6 py-2.5 rounded-lg hover:bg-[#008080] hover:text-white transition-colors text-sm">
              Support the Work
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="bg-gray-50 py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Areas we serve</h2>
          <p className="text-[#595959] text-sm leading-relaxed mb-5">
            People attend Fountain of Grace International from across the Pretoria North area:
          </p>
          <div className="flex flex-wrap gap-2">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="bg-white border border-gray-200 text-[#595959] text-sm rounded-full px-4 py-1.5 font-medium"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#008080] py-12 px-4 sm:px-6">
        <div className="section-container text-center">
          <h2 className="text-xl font-bold text-white mb-3">
            Come and see this Sunday.
          </h2>
          <p className="text-white text-sm mb-6 max-w-md mx-auto">
            You do not have to have it together to walk through the door. Sunday at 09:00,
            323 B Danie Theron Street, Pretoria North.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/plan-your-visit" className="btn-primary text-sm">
              Plan Your Visit
            </Link>
            <Link href="/what-to-expect" className="inline-block border-2 border-white text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-white hover:text-[#008080] transition-colors text-sm">
              What to Expect
            </Link>
          </div>
        </div>
      </section>

      {/* GEO BLOCK */}
      <section className="bg-white py-8 px-4 sm:px-6">
        <div className="section-container">
          <div className="geo-block">
            <p>
              Fountain of Grace International is a church in Pretoria North located at 323 B Danie Theron Street,
              Pretoria North, Gauteng, 0182. Sunday services run every week at 09:00. The church is a registered
              NPO (316-193) serving Pretoria North, Karenpark, Akasia, Dorandia, Wonderboom, and surrounding
              Gauteng communities. Contact: +27 75 259 2555 · info@fountaingrace.org.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
