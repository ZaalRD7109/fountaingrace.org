import type { Metadata } from 'next'
import DonateClient from '@/components/DonateClient'

export const metadata: Metadata = {
  title: 'Donate to FGI | NPO 316-193 | Pretoria North',
  description:
    'Support a registered NPO in Pretoria North. Your gift helps FGI do more of what it already does - food, electricity and rent for families in need, prayer and pastoral care. Give via PayPal or EFT. NPO No: 316-193.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/donate',
  },
  openGraph: {
    title: 'Donate to FGI | NPO 316-193 | Pretoria North',
    description:
      'Support a registered NPO in Pretoria North. Your gift helps FGI do more of what it already does - food, electricity and rent for families in need, prayer and pastoral care. Give via PayPal or EFT. NPO No: 316-193.',
    type: 'website',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International - Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/donate',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'DonateAction',
    name: 'Donate to Fountain of Grace International',
    target: 'https://www.fountaingrace.org/donate',
    description:
      'Support Fountain of Grace International (NPO 316-193) - a small church and registered nonprofit in Pretoria North helping local families with food, electricity, rent, prayer and pastoral care.',
    recipient: {
      '@type': 'NGO',
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
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+27752592555',
        email: 'info@fountaingrace.org',
        contactType: 'donor support',
      },
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Donate', item: 'https://www.fountaingrace.org/donate' },
    ],
  },
]

export default function DonatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO - server-rendered so the LCP element paints without waiting for the client bundle */}
      <section className="bg-[#008080] text-white pt-10 pb-10 px-4 sm:px-6 text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-white font-semibold text-xs uppercase tracking-wider mb-3">
            Support the work · Pretoria North
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
            Your giving changes lives in Pretoria North.
          </h1>
          <p className="text-white text-base leading-relaxed mb-5">
            Your gift helps FGI do more of what it already does for free - food for families,
            help with an electricity or rent bill, prayer and pastoral care.
          </p>
          <span className="inline-block bg-black/15 border border-white/40 text-white px-5 py-2 rounded-full text-sm font-semibold tracking-wide">
            Registered NPO 316-193 · Dept of Social Development, South Africa
          </span>
        </div>
      </section>

      <DonateClient />
    </>
  )
}
