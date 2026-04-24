import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Fountain of Grace International',
  description:
    'How Fountain of Grace International (NPO 316-193) collects, uses, and protects your personal information under POPIA.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | Fountain of Grace International',
    description:
      'How Fountain of Grace International (NPO 316-193) collects, uses, and protects your personal information under POPIA.',
    type: 'website',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International — Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/privacy-policy',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Privacy Policy | Fountain of Grace International',
  url: 'https://www.fountaingrace.org/privacy-policy',
  description:
    'Privacy Policy for Fountain of Grace International (NPO 316-193), Pretoria North, South Africa. Compliant with the Protection of Personal Information Act (POPIA).',
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

export default function PrivacyPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-white pt-16 pb-12 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#008080] font-semibold text-sm uppercase tracking-wider mb-4">
            Legal · POPIA Compliant
          </p>
          <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-[#7d7d7d]">
            Fountain of Grace International (NPO 316-193) · Last updated: April 2026
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-14 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto space-y-10 text-[#4a4a4a] leading-relaxed">

          <div>
            <p>
              Fountain of Grace International (NPO 316-193), located at 323 B Danie Theron Street,
              Pretoria North, Gauteng, 0182, South Africa, is committed to protecting your personal
              information. This policy explains what we collect, why we collect it, how we use it,
              and your rights under the <strong>Protection of Personal Information Act (POPIA), Act 4 of 2013</strong>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Information Officer</h2>
            <p>
              Our designated Information Officer is responsible for overseeing how personal
              information is handled within Fountain of Grace International. For all privacy-related
              queries or requests, contact us at{' '}
              <a href="mailto:info@fountaingrace.org" className="text-[#008080] font-semibold hover:underline">
                info@fountaingrace.org
              </a>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. What We Collect</h2>
            <p className="mb-3">
              We only collect personal information that is necessary to serve you. This may include:
            </p>
            <ul className="space-y-2 pl-4">
              <li className="flex gap-2">
                <span className="text-[#008080] mt-1 flex-shrink-0">·</span>
                <span>Your name, phone number, and email address when you use our contact or visit planning form.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#008080] mt-1 flex-shrink-0">·</span>
                <span>Your name and contact details when you enquire about volunteering.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#008080] mt-1 flex-shrink-0">·</span>
                <span>Anonymous usage data collected by Google Analytics (pages visited, time on site, device type). This data cannot identify you personally.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#008080] mt-1 flex-shrink-0">·</span>
                <span>Cookies and browser data — see our <a href="/cookie-policy" className="text-[#008080] font-semibold hover:underline">Cookie Policy</a> for full details.</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Why We Collect It</h2>
            <p className="mb-3">Your information is used only for the following purposes:</p>
            <ul className="space-y-2 pl-4">
              <li className="flex gap-2">
                <span className="text-[#008080] mt-1 flex-shrink-0">·</span>
                <span>To respond to enquiries and prepare for your visit.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#008080] mt-1 flex-shrink-0">·</span>
                <span>To follow up with you after your first Sunday via WhatsApp, where you have requested this.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#008080] mt-1 flex-shrink-0">·</span>
                <span>To process and acknowledge donations.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#008080] mt-1 flex-shrink-0">·</span>
                <span>To improve the performance of our website using anonymous analytics data.</span>
              </li>
            </ul>
            <p className="mt-4">
              We never sell, rent, or share your personal information with third parties for
              marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. How We Store and Protect It</h2>
            <p className="mb-3">
              Personal information submitted through our forms is received directly by our pastoral
              team and stored securely. We do not store payment card details — all donations via
              PayPal are processed entirely by those platforms and subject to their own privacy
              policies.
            </p>
            <p>
              We take reasonable technical and organisational steps to protect your information
              from unauthorised access, loss, or misuse.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. How Long We Keep It</h2>
            <p>
              We keep contact and visit enquiry information for as long as it is needed to serve
              you, and no longer than 3 years after your last interaction with us. Donation records
              are kept for 5 years for financial accountability and compliance purposes. You may
              request earlier deletion at any time — see Section 6 below.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Your Rights Under POPIA</h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="space-y-2 pl-4">
              <li className="flex gap-2">
                <span className="text-[#008080] mt-1 flex-shrink-0">·</span>
                <span><strong>Access</strong> the personal information we hold about you.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#008080] mt-1 flex-shrink-0">·</span>
                <span><strong>Correct</strong> any inaccurate or incomplete information.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#008080] mt-1 flex-shrink-0">·</span>
                <span><strong>Request deletion</strong> of your personal information at any time.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#008080] mt-1 flex-shrink-0">·</span>
                <span><strong>Object</strong> to the processing of your information for any purpose.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#008080] mt-1 flex-shrink-0">·</span>
                <span><strong>Lodge a complaint</strong> with the Information Regulator of South Africa at{' '}
                  <a
                    href="https://www.justice.gov.za/inforeg/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#008080] hover:underline"
                  >
                    www.justice.gov.za/inforeg
                  </a>.
                </span>
              </li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, email us at{' '}
              <a href="mailto:info@fountaingrace.org" className="text-[#008080] font-semibold hover:underline">
                info@fountaingrace.org
              </a>{' '}
              or WhatsApp us on{' '}
              <a href="https://wa.me/27752592555" target="_blank" rel="noopener noreferrer" className="text-[#008080] font-semibold hover:underline">
                +27 75 259 2555
              </a>.
              We will respond within 10 business days.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Third-Party Services</h2>
            <p className="mb-3">
              Our website uses the following third-party services that may process data about
              your visit:
            </p>
            <ul className="space-y-2 pl-4">
              <li className="flex gap-2">
                <span className="text-[#008080] mt-1 flex-shrink-0">·</span>
                <span><strong>Google Analytics</strong> — anonymous website usage tracking. IP addresses are anonymised. You can opt out at <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[#008080] hover:underline">tools.google.com/dlpage/gaoptout</a>.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#008080] mt-1 flex-shrink-0">·</span>
                <span><strong>Google Fonts</strong> — fonts loaded from Google servers. See <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#008080] hover:underline">Google's Privacy Policy</a>.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#008080] mt-1 flex-shrink-0">·</span>
                <span><strong>Google Maps</strong> — the embedded map on our contact page is served by Google. See <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#008080] hover:underline">Google's Privacy Policy</a>.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#008080] mt-1 flex-shrink-0">·</span>
                <span><strong>PayPal</strong> — donation processing. Subject to <a href="https://www.paypal.com/za/legalhub/privacy-full" target="_blank" rel="noopener noreferrer" className="text-[#008080] hover:underline">PayPal's Privacy Policy</a>.</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Cookies</h2>
            <p>
              We use cookies to improve your experience and understand how our website is used.
              For full details, see our{' '}
              <a href="/cookie-policy" className="text-[#008080] font-semibold hover:underline">
                Cookie Policy
              </a>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">9. Updates to This Policy</h2>
            <p>
              We may update this policy from time to time. Any changes will be posted on this
              page with a revised date at the top. Continued use of the website after changes
              are posted constitutes acceptance of the updated policy.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-xl p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-3">Contact Us About This Policy</h2>
            <address className="not-italic text-sm space-y-1">
              <p className="font-semibold text-gray-800">Fountain of Grace International (NPO 316-193)</p>
              <p>323 B Danie Theron Street, Pretoria North, Gauteng, 0182</p>
              <p>
                Email:{' '}
                <a href="mailto:info@fountaingrace.org" className="text-[#008080] font-semibold hover:underline">
                  info@fountaingrace.org
                </a>
              </p>
              <p>
                WhatsApp:{' '}
                <a href="https://wa.me/27752592555" target="_blank" rel="noopener noreferrer" className="text-[#008080] font-semibold hover:underline">
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
