import type { Metadata } from 'next'
import Link from 'next/link'
import TallyEmbed from '@/components/TallyEmbed'

export const metadata: Metadata = {
  title: 'Volunteer with FGI | NPO in Pretoria North',
  description:
    'Volunteer with a registered NPO in Pretoria North. No experience needed. Food programs, admin, events and more. Fill in the form - we reach out with next steps.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/volunteer',
  },
  openGraph: {
    title: 'Volunteer with FGI | NPO in Pretoria North',
    description:
      'Volunteer with a registered NPO in Pretoria North. No experience needed. Food programs, admin, events and more. Fill in the form - we reach out with next steps.',
    type: 'website',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International - Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/volunteer',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': ['NGO', 'Organization'],
    name: 'Fountain of Grace International',
    nonprofitStatus: 'RegisteredNonprofit',
    identifier: { '@type': 'PropertyValue', propertyID: 'NPO', value: '316-193' },
    url: 'https://www.fountaingrace.org',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '323 B Danie Theron Street',
      addressLocality: 'Pretoria North',
      addressRegion: 'Gauteng',
      postalCode: '0182',
      addressCountry: 'ZA',
    },
    telephone: '+27752592555',
    email: 'info@fountaingrace.org',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Volunteer', item: 'https://www.fountaingrace.org/volunteer' },
    ],
  },
]

export default function VolunteerPage() {
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
            Get Involved · Pretoria North
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
            Volunteer with Fountain of Grace International
          </h1>
          <p className="text-white text-base leading-relaxed">
            Every programme we run depends on people who show up. Fill in the form and we will be in touch.
          </p>
        </div>
      </section>

      {/* FORM - full width */}
      <section className="bg-white py-6 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <TallyEmbed formId="ODJjJA" />
          <p className="text-xs text-[#595959] leading-relaxed border border-gray-100 rounded-lg bg-white px-4 py-3 mt-4">
            Your information is collected by Fountain of Grace International (NPO 316-193) and used
            only to process your volunteer application and contact you with next steps. We do not share or sell your data. See our{' '}
            <Link href="/privacy-policy" className="text-[#008080] hover:underline font-medium">
              Privacy Policy
            </Link>{' '}
            for full details. POPIA compliant.
          </p>
        </div>
      </section>

      {/* AREAS - compact 4-col strip below form */}
      <section className="bg-gray-50 py-8 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-gray-700 mb-4">Ways to get involved</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { icon: '🥫', label: 'Food programmes' },
              { icon: '📋', label: 'Administration' },
              { icon: '🎉', label: 'Events' },
              { icon: '🤝', label: 'Other skills' },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-xl p-3 border border-gray-100 text-center">
                <div className="text-xl mb-1" aria-hidden="true">{item.icon}</div>
                <p className="text-xs font-medium text-gray-700">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GEO BLOCK */}
      <section className="bg-white py-8 px-4 sm:px-6">
        <div className="section-container">
          <div className="geo-block">
            <p>
              Fountain of Grace International is a registered NPO (316-193) in Pretoria North,
              Gauteng. Volunteers support food distributions, community events, and weekly Sunday
              services at 323 B Danie Theron Street, Pretoria North.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
