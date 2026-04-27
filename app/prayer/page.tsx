import type { Metadata } from 'next'
import Link from 'next/link'
import TallyEmbed from '@/components/TallyEmbed'

export const metadata: Metadata = {
  title: 'Prayer Request | Fountain of Grace International | Pretoria North',
  description:
    'Submit a prayer request to Fountain of Grace International in Pretoria North. Your request is received by the pastoral team — not shared publicly. We pray with you.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/prayer',
  },
  openGraph: {
    title: 'Prayer Request | Fountain of Grace International | Pretoria North',
    description:
      'Submit a prayer request to Fountain of Grace International in Pretoria North. Your request is received by the pastoral team — not shared publicly. We pray with you.',
    type: 'website',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International — Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/prayer',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': ['Church', 'Organization'],
    name: 'Fountain of Grace International',
    description: 'A Christian church and registered NPO in Pretoria North, South Africa.',
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
    url: 'https://www.fountaingrace.org',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Prayer', item: 'https://www.fountaingrace.org/prayer' },
    ],
  },
]

export default function PrayerPage() {
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
            Prayer · Pretoria North
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
            We will pray with you.
          </h1>
          <p className="text-white text-base leading-relaxed">
            Submit your request below. The pastoral team at Fountain of Grace International
            receives every request personally — nothing is shared publicly.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white py-12 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto space-y-5 text-[#595959] leading-relaxed">
          <p>
            If you are going through something difficult — a health crisis, a broken
            relationship, financial pressure, grief, or something you cannot put into words
            yet — you are not alone in it.
          </p>
          <p>
            The pastoral team at Fountain of Grace International takes prayer seriously. Your
            request is read, prayed over, and kept confidential. You do not need to attend
            the church to submit a request. Anyone is welcome.
          </p>
          <p>
            For urgent needs, WhatsApp Pastor Ricardo directly on{' '}
            <a
              href="https://wa.me/27752592555?text=Hi%2C%20I%20need%20prayer%20for%20something%20urgent"
              target="_blank"
              rel="noopener noreferrer"
              className="fgi-link"
            >
              +27 75 259 2555
            </a>
            . He will respond personally.
          </p>
        </div>
      </section>

      {/* PRAYER REQUEST FORM */}
      <section className="bg-gray-50 py-10 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Submit a prayer request</h2>
          <TallyEmbed formId="pb00PZ" />
          <p className="text-xs text-[#595959] leading-relaxed border border-gray-100 rounded-lg bg-white px-4 py-3 mt-4">
            Your information is collected by Fountain of Grace International (NPO 316-193) and used
            only to respond to your prayer request. We do not share or sell your data. See our{' '}
            <Link href="/privacy-policy" className="text-[#008080] hover:underline font-medium">
              Privacy Policy
            </Link>{' '}
            for full details. POPIA compliant.
          </p>
        </div>
      </section>

      {/* URGENT — WHATSAPP */}
      <section className="bg-white py-10 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-[#f0fafa] border border-teal-100 rounded-xl p-6 flex flex-col sm:flex-row gap-5 items-start sm:items-center">
            <div className="flex-1">
              <h2 className="text-base font-bold text-gray-900 mb-1">Need someone right now?</h2>
              <p className="text-sm text-[#595959] leading-relaxed">
                For urgent needs — a crisis, a medical situation, a moment you cannot carry
                alone — WhatsApp Pastor Ricardo directly. He responds personally.
              </p>
            </div>
            <a
              href="https://wa.me/27752592555?text=Hi%2C%20I%20need%20prayer%20for%20something%20urgent"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-block bg-[#25d366] text-[#1a1a1a] font-semibold px-6 py-3 rounded-lg hover:bg-[#1ebe5d] transition-colors text-sm text-center"
            >
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS */}
      <section className="bg-gray-50 py-12 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6">What happens after you submit</h2>
          <div className="space-y-4">
            {[
              {
                step: '01',
                text: 'Your request is received by the pastoral team at Fountain of Grace International in Pretoria North.',
              },
              {
                step: '02',
                text: 'It is prayed over — not forwarded to a committee, not posted anywhere. Kept between you and the pastoral team.',
              },
              {
                step: '03',
                text: 'If you included an email address, someone will respond within 48 hours to follow up personally.',
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 items-start bg-white rounded-xl border border-gray-100 p-5">
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#008080] text-white flex items-center justify-center text-xs font-bold">
                  {item.step}
                </div>
                <p className="text-sm text-[#595959] leading-relaxed pt-1">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#008080] py-12 px-4 sm:px-6">
        <div className="section-container text-center">
          <h2 className="text-xl font-bold text-white mb-3">
            Want to connect in person?
          </h2>
          <p className="text-white text-sm mb-6 max-w-md mx-auto">
            Sunday services at Fountain of Grace International are open to anyone going
            through anything. You do not have to have it together to walk through the door.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/plan-your-visit" className="btn-primary text-sm">
              Plan Your Visit
            </Link>
            <Link href="/contact" className="inline-block border-2 border-white text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-white hover:text-[#008080] transition-colors text-sm">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* GEO BLOCK */}
      <section className="bg-white py-8 px-4 sm:px-6">
        <div className="section-container">
          <div className="geo-block">
            <p>
              Fountain of Grace International accepts prayer requests from anyone in Pretoria
              North and surrounding areas. Requests are received by the pastoral team and
              kept confidential. For urgent prayer needs, contact Pastor Ricardo Zaal directly
              on WhatsApp at +27 75 259 2555 or via the form above.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
