import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use | Fountain of Grace International',
  description:
    'Terms of use for the Fountain of Grace International (NPO 316-193) website. Governed by the laws of the Republic of South Africa.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/terms',
  },
  openGraph: {
    title: 'Terms of Use | Fountain of Grace International',
    description:
      'Terms of use for the Fountain of Grace International (NPO 316-193) website. Governed by the laws of the Republic of South Africa.',
    type: 'website',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International - Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/terms',
  },
}

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
    { '@type': 'ListItem', position: 2, name: 'Terms of Use', item: 'https://www.fountaingrace.org/terms' },
  ],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Terms of Use | Fountain of Grace International',
  url: 'https://www.fountaingrace.org/terms',
  description:
    'Terms governing the use of the Fountain of Grace International website and related services.',
  publisher: {
    '@type': 'Organization',
    name: 'Fountain of Grace International',
    identifier: { '@type': 'PropertyValue', propertyID: 'NPO', value: '316-193' },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '323 B Danie Theron Street',
      addressLocality: 'Pretoria North',
      addressRegion: 'Gauteng',
      postalCode: '0182',
      addressCountry: 'ZA',
    },
  },
}

export default function TermsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <section className="bg-white pt-16 pb-12 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#008080] font-semibold text-sm uppercase tracking-wider mb-4">
            Legal · South Africa
          </p>
          <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Terms of Use
          </h1>
          <p className="text-sm text-[#595959]">
            Fountain of Grace International (NPO 316-193) · Last updated: April 2026
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-14 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto space-y-10 text-[#4a4a4a] leading-relaxed">

          <div>
            <p>
              Welcome to the official website of Fountain of Grace International (NPO 316-193).
              By accessing or using this site, you agree to these Terms of Use and our{' '}
              <a href="/privacy-policy" className="fgi-link">
                Privacy Policy
              </a>. If you do not agree, please do not use this website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Who We Are</h2>
            <p>
              Fountain of Grace International is a registered non-profit organisation in South
              Africa (NPO 316-193), registered under the Department of Social Development. Our
              physical address is 323 B Danie Theron Street, Pretoria North, Gauteng, 0182.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Use of This Website</h2>
            <p className="mb-3">
              All content on this website - including text, images, logos, and design - is the
              property of Fountain of Grace International unless otherwise stated. You may not
              copy, reproduce, distribute, or republish any content without prior written
              permission.
            </p>
            <p>
              You agree to use this website only for lawful purposes and in a way that does not
              infringe the rights of others or restrict their use of the website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Donations</h2>
            <p className="mb-3">
              All donations made through this website or via our banking details are voluntary.
              Donations are non-refundable once processed, except in cases where a payment was
              made in error - in which case, contact us within 7 days at{' '}
              <a href="mailto:info@fountaingrace.org" className="fgi-link">
                info@fountaingrace.org
              </a>.
            </p>
            <p className="mb-3">
              Payments processed via PayPal are subject to their respective terms and
              privacy policies. Fountain of Grace International does not store or handle your
              card or banking details.
            </p>
            <p>
              Direct EFT payments to our FNB account are received and managed by the
              organisation with full transparency and accountability as required under our NPO
              registration.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Contact Forms</h2>
            <p>
              Information submitted through our contact and visit planning forms is used solely
              to respond to your enquiry or prepare for your visit. We do not use this
              information for any other purpose without your consent. See our{' '}
              <a href="/privacy-policy" className="fgi-link">
                Privacy Policy
              </a>{' '}
              for full details.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. External Links</h2>
            <p>
              This website may contain links to external websites - including social media
              platforms and payment providers - for your convenience. We are not responsible
              for the content, accuracy, privacy practices, or security of those third-party
              websites. Visiting external links is at your own risk.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Limitation of Liability</h2>
            <p>
              Fountain of Grace International provides this website on an as-is basis. We make
              no warranties - express or implied - about the accuracy, completeness, or
              suitability of the content for any purpose. To the extent permitted by South
              African law, we are not liable for any direct, indirect, incidental, or
              consequential damages arising from your use of or inability to use this website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Governing Law</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of the
              Republic of South Africa. Any disputes arising from your use of this website will
              be subject to the jurisdiction of the relevant South African courts.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. Changes take effect as soon as they
              are posted on this page with a revised date. Continued use of the website after
              changes are posted means you accept the updated terms.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-xl p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-3">Contact Us</h2>
            <p className="text-sm text-[#595959] mb-3">
              For any questions about these Terms of Use:
            </p>
            <address className="not-italic text-sm space-y-1">
              <p className="font-semibold text-gray-800">Fountain of Grace International (NPO 316-193)</p>
              <p>323 B Danie Theron Street, Pretoria North, Gauteng, 0182</p>
              <p>
                Email:{' '}
                <a href="mailto:info@fountaingrace.org" className="fgi-link">
                  info@fountaingrace.org
                </a>
              </p>
              <p>
                WhatsApp:{' '}
                <a href="https://wa.me/27752592555" target="_blank" rel="noopener noreferrer" className="fgi-link">
                  +27 75 259 2555
                </a>
              </p>
            </address>
          </div>

        </div>
      </section>
    </>
  )
}
