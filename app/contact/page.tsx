import type { Metadata } from 'next'
import Link from 'next/link'
import TallyEmbed from '@/components/TallyEmbed'

export const metadata: Metadata = {
  title: 'Contact Us | Christian Church in Pretoria North | Fountain of Grace International',
  description:
    'Get in touch with Fountain of Grace International in Pretoria North. WhatsApp +27 75 259 2555, email, or fill in the contact form. We respond quickly.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/contact',
  },
  openGraph: {
    title: 'Contact Us | Christian Church in Pretoria North | Fountain of Grace International',
    description:
      'Get in touch with Fountain of Grace International in Pretoria North. WhatsApp +27 75 259 2555, email, or fill in the contact form. We respond quickly.',
    type: 'website',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International — Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/contact',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Fountain of Grace International',
  description: 'A church and registered NPO in Pretoria North, South Africa.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '323 B Danie Theron Street',
    addressLocality: 'Pretoria North',
    addressRegion: 'Gauteng',
    postalCode: '0182',
    addressCountry: 'ZA',
  },
  telephone: '+27 75 259 2555',
  url: 'https://www.fountaingrace.org',
  openingHours: 'Su 09:00',
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -25.672286342520497,
    longitude: 28.172968674468688,
  },
  hasMap: 'https://www.google.com/maps?q=323+B+Danie+Theron+Street+Pretoria+North',
  sameAs: ['https://www.facebook.com/FGIPta/'],
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="bg-[#008080] text-white pt-10 pb-10 px-4 sm:px-6">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-teal-200 font-semibold text-xs uppercase tracking-wider mb-3">
            Find Us · Pretoria North
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
            We are easy to find and easy to reach.
          </h1>
          <p className="text-teal-100 text-base leading-relaxed">
            Service times, address, parking, phone and WhatsApp — all in one place.
          </p>
        </div>
      </section>

      {/* NAP + SERVICE INFO BLOCK */}
      <section className="bg-[#008080] py-12 px-4 sm:px-6">
        <div className="section-container max-w-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-white text-center sm:text-left">
            <div>
              <h2 className="text-white font-bold text-lg mb-3">Fountain of Grace International</h2>
              <address className="not-italic text-blue-100 text-sm leading-relaxed">
                <p>323 B Danie Theron Street</p>
                <p>Pretoria North, Gauteng</p>
                <p className="mt-2">
                  Tel:{' '}
                  <a href="tel:+27752592555" className="hover:text-white underline">
                    +27 75 259 2555
                  </a>
                </p>
                <p>
                  WhatsApp:{' '}
                  <a
                    href="https://wa.me/27752592555"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white underline"
                  >
                    +27 75 259 2555
                  </a>
                </p>
                <p className="mt-2 text-xs text-blue-200">NPO No: 316-193</p>
              </address>
            </div>
            <div>
              <h2 className="text-white font-bold text-lg mb-3">Service Times</h2>
              <p className="text-blue-100 text-sm">Sunday: 09:00</p>
              <p className="text-blue-100 text-sm mt-1">
                Arrive 10–15 minutes early
              </p>
              <div className="mt-4">
                <Link
                  href="/plan-your-visit"
                  className="inline-block bg-white text-[#008080] text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Plan Your Visit
                </Link>
              </div>
            </div>
            <div>
              <h2 className="text-white font-bold text-lg mb-3">Get In Touch</h2>
              <div className="space-y-3">
                <a
                  href="tel:+27752592555"
                  className="flex items-center gap-2 text-blue-100 hover:text-white text-sm transition-colors"
                >
                  <span aria-hidden="true">📞</span> Call us
                </a>
                <a
                  href="https://wa.me/27752592555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-100 hover:text-white text-sm transition-colors"
                >
                  <span aria-hidden="true">💬</span> WhatsApp us
                </a>
                <a
                  href="mailto:info@fountaingrace.org"
                  className="flex items-center gap-2 text-blue-100 hover:text-white text-sm transition-colors"
                >
                  <span aria-hidden="true">✉️</span> Email us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP + PARKING */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6">
        <div className="section-container max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Google Maps embed */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Find us on the map</h2>
              <div className="w-full rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.9700856038157!2d28.172968674468688!3d-25.672286342520497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ebfd96cb4791b5d%3A0x71fcbb14ba78e896!2s323%20B%20Danie%20Theron%20St%2C%20Pretoria%20North%2C%20Pretoria%2C%200182!5e0!3m2!1sen!2sza!4v1775845642448!5m2!1sen!2sza"
                  width="600"
                  height="350"
                  style={{ border: 0, width: '100%', height: '350px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Fountain of Grace International — 323 B Danie Theron Street, Pretoria North"
                />
              </div>
              <p className="text-xs text-[#7d7d7d] mt-2">
                323 B Danie Theron Street, Pretoria North, Gauteng, 0182
              </p>
            </div>

            {/* Parking */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Getting there</h2>
              <div className="space-y-5">
                <div className="bg-white rounded-xl border border-gray-100 p-5">
                  <h3 className="font-semibold text-gray-800 mb-2 flex gap-2 items-center">
                    <span aria-hidden="true">🚗</span> Parking
                  </h3>
                  <p className="text-sm text-[#7d7d7d] leading-relaxed">
                    Not sure where to park? WhatsApp us before you come and we will send you
                    exact directions to make it easy.{' '}
                    <a
                      href="https://wa.me/27752592555?text=Hi%2C%20I%20need%20parking%20directions%20for%20Sunday"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#008080] font-semibold hover:underline"
                    >
                      WhatsApp us here
                    </a>.
                  </p>
                </div>
                <div className="bg-white rounded-xl border border-gray-100 p-5">
                  <h3 className="font-semibold text-gray-800 mb-2 flex gap-2 items-center">
                    <span aria-hidden="true">🚌</span> Public Transport
                  </h3>
                  <p className="text-sm text-[#7d7d7d] leading-relaxed">
                    We are close to major public transport routes via Gerrit Maritz Street.
                    If you need specific route guidance, WhatsApp us and we will help you
                    plan your trip.
                  </p>
                </div>
                <div className="bg-white rounded-xl border border-gray-100 p-5">
                  <h3 className="font-semibold text-gray-800 mb-2 flex gap-2 items-center">
                    <span aria-hidden="true">💬</span> Need directions?
                  </h3>
                  <p className="text-sm text-[#7d7d7d] leading-relaxed">
                    The fastest way to get directions is to message us directly. We will
                    reply with exactly what you need.{' '}
                    <a
                      href="https://wa.me/27752592555?text=Hi%2C%20I%20need%20directions%20to%20Fountain%20of%20Grace%20International"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#008080] font-semibold hover:underline"
                    >
                      Send us a WhatsApp
                    </a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="bg-white py-8 px-4 sm:px-6">
        <div className="section-container max-w-2xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a message</h2>
          <p className="text-[#7d7d7d] mb-4 text-sm leading-relaxed">
            For your first visit use the{' '}
            <Link href="/plan-your-visit" className="text-[#008080] hover:underline font-medium">
              Plan Your Visit
            </Link>{' '}
            form so we can prepare specifically for you.
          </p>
          <TallyEmbed formId="WOMeYP" />
        </div>
      </section>

      {/* NAP BLOCK — styled, prominent, mandatory on every page footer area */}
      <section className="bg-gray-50 py-12 px-4 sm:px-6">
        <div className="section-container max-w-2xl">
          <div className="bg-white border border-gray-100 rounded-xl p-7 shadow-sm">
            <h2 className="font-bold text-gray-900 text-lg mb-4">Fountain of Grace International</h2>
            <address className="not-italic space-y-1 text-sm text-[#7d7d7d]">
              <p>323 B Danie Theron Street, Pretoria North, Gauteng</p>
              <p>
                Tel:{' '}
                <a href="tel:+27752592555" className="text-[#008080] hover:underline font-medium">
                  +27 75 259 2555
                </a>
              </p>
              <p>
                WhatsApp:{' '}
                <a
                  href="https://wa.me/27752592555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#008080] hover:underline font-medium"
                >
                  +27 75 259 2555
                </a>
              </p>
              <p className="text-xs text-gray-400 mt-1">NPO No: 316-193</p>
            </address>
            <div className="mt-5 pt-5 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
              <Link href="/plan-your-visit" className="btn-primary text-sm text-center">
                Plan Your Visit
              </Link>
              <a
                href="https://wa.me/27752592555"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#25d366] text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-[#1ebe5d] transition-colors text-sm text-center"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
