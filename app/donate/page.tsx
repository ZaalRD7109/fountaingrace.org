import type { Metadata } from 'next'
import DonateClient from '@/components/DonateClient'

export const metadata: Metadata = {
  title: 'Donate to FGI | NPO 316-193 | Pretoria North',
  description:
    'Support a verified NPO in Pretoria North. Your donation funds food relief, family support, and community programs. Give via PayPal or EFT. NPO No: 316-193.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/donate',
  },
  openGraph: {
    title: 'Donate to FGI | NPO 316-193 | Pretoria North',
    description:
      'Support a verified NPO in Pretoria North. Your donation funds food relief, family support, and community programs. Give via PayPal or EFT. NPO No: 316-193.',
    type: 'website',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International — Church in Pretoria North' }],
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
      'Support Fountain of Grace International (NPO 316-193) — a nonprofit in Pretoria North serving families and communities through practical programs.',
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
      <DonateClient />
    </>
  )
}
