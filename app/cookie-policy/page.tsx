import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy | Fountain of Grace International',
  description:
    'How Fountain of Grace International (NPO 316-193) uses cookies on its website and how you can manage them.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/cookie-policy',
  },
  openGraph: {
    title: 'Cookie Policy | Fountain of Grace International',
    description:
      'How Fountain of Grace International (NPO 316-193) uses cookies on its website and how you can manage them.',
    type: 'website',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International — Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/cookie-policy',
  },
}

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
    { '@type': 'ListItem', position: 2, name: 'Cookie Policy', item: 'https://www.fountaingrace.org/cookie-policy' },
  ],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Cookie Policy | Fountain of Grace International',
  url: 'https://www.fountaingrace.org/cookie-policy',
  description:
    'Cookie Policy for Fountain of Grace International (NPO 316-193), Pretoria North. Explains cookies used, their purpose, and how to manage them under POPIA.',
  publisher: {
    '@type': 'Organization',
    name: 'Fountain of Grace International',
    identifier: { '@type': 'PropertyValue', propertyID: 'NPO', value: '316-193' },
  },
}

export default function CookiePolicyPage() {
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
            Legal · POPIA Compliant
          </p>
          <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Cookie Policy
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
              This Cookie Policy explains what cookies are, which cookies this website uses, why
              we use them, and how you can control them. It should be read alongside our{' '}
              <a href="/privacy-policy" className="text-[#008080] font-semibold hover:underline">
                Privacy Policy
              </a>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. What Are Cookies</h2>
            <p>
              Cookies are small text files stored on your device when you visit a website. They
              help websites remember information about your visit — such as whether you have
              accepted the cookie notice — so your next visit can be smoother. Cookies cannot
              run programmes or deliver viruses to your device.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Cookies We Use</h2>
            <p className="mb-5">
              Below is the full list of cookies used on this website.
            </p>

            <div className="space-y-5">

              <div className="bg-white rounded-xl border border-gray-100 p-5">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="font-bold text-gray-900">Cookie Consent</h3>
                  <span className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-1 rounded-full flex-shrink-0">Essential</span>
                </div>
                <p className="text-sm text-[#7d7d7d] mb-2">
                  <strong>Name:</strong> FGI_cookieConsent
                </p>
                <p className="text-sm text-[#7d7d7d] mb-2">
                  <strong>Purpose:</strong> Remembers whether you have accepted or declined our
                  cookie notice so we do not ask you every time you visit.
                </p>
                <p className="text-sm text-[#7d7d7d]">
                  <strong>Expires:</strong> 12 months · <strong>Set by:</strong> fountaingrace.org
                </p>
              </div>

              <div className="bg-white rounded-xl border border-gray-100 p-5">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="font-bold text-gray-900">Google Analytics</h3>
                  <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-2 py-1 rounded-full flex-shrink-0">Analytics</span>
                </div>
                <p className="text-sm text-[#7d7d7d] mb-2">
                  <strong>Names:</strong> _ga, _ga_XXXXXXXX
                </p>
                <p className="text-sm text-[#7d7d7d] mb-2">
                  <strong>Purpose:</strong> Counts how many people visit our site, which pages
                  are most useful, and where visitors come from. All data is anonymous — no
                  personal information is collected. IP addresses are anonymised before
                  storage. These cookies only load after you accept the cookie notice.
                </p>
                <p className="text-sm text-[#7d7d7d]">
                  <strong>Expires:</strong> Up to 2 years · <strong>Set by:</strong> Google (google.com)
                </p>
              </div>

              <div className="bg-white rounded-xl border border-gray-100 p-5">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="font-bold text-gray-900">Google Fonts</h3>
                  <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-2 py-1 rounded-full flex-shrink-0">Functional</span>
                </div>
                <p className="text-sm text-[#7d7d7d] mb-2">
                  <strong>Purpose:</strong> We load the Poppins font from Google's servers to
                  ensure consistent text display across all devices. Google may set cookies
                  or log your IP address as part of this request.
                </p>
                <p className="text-sm text-[#7d7d7d]">
                  <strong>Set by:</strong> Google (fonts.googleapis.com) ·{' '}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#008080] hover:underline"
                  >
                    Google Privacy Policy
                  </a>
                </p>
              </div>

              <div className="bg-white rounded-xl border border-gray-100 p-5">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="font-bold text-gray-900">Google Maps</h3>
                  <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-2 py-1 rounded-full flex-shrink-0">Functional</span>
                </div>
                <p className="text-sm text-[#7d7d7d] mb-2">
                  <strong>Purpose:</strong> The embedded map on our Contact page is served by
                  Google Maps. Google may set cookies to personalise the map and measure
                  interactions.
                </p>
                <p className="text-sm text-[#7d7d7d]">
                  <strong>Set by:</strong> Google (google.com) ·{' '}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#008080] hover:underline"
                  >
                    Google Privacy Policy
                  </a>
                </p>
              </div>

            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. How to Control Cookies</h2>
            <p className="mb-4">
              You can control and delete cookies in several ways:
            </p>
            <ul className="space-y-3 pl-4">
              <li className="flex gap-2">
                <span className="text-[#008080] mt-1 flex-shrink-0">·</span>
                <span>
                  <strong>On this website:</strong> Use the cookie consent banner when you first
                  visit to accept or decline analytics cookies. Declining means only essential
                  cookies run.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#008080] mt-1 flex-shrink-0">·</span>
                <span>
                  <strong>In your browser:</strong> Most browsers allow you to view, manage,
                  and delete cookies in their settings. Look for Privacy or Security settings.
                  Note that disabling all cookies may affect how some websites function.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#008080] mt-1 flex-shrink-0">·</span>
                <span>
                  <strong>Google Analytics opt-out:</strong> Install the{' '}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#008080] hover:underline"
                  >
                    Google Analytics Opt-out Browser Add-on
                  </a>{' '}
                  to stop Google Analytics from collecting data across all websites.
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Updates to This Policy</h2>
            <p>
              We may update this Cookie Policy when we add or remove services on the website.
              Any changes will appear on this page with a revised date. We will not add new
              analytics or tracking cookies without updating this policy first.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-xl p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-3">Questions About Cookies</h2>
            <p className="text-sm text-[#7d7d7d] mb-3">
              Contact us if you have any questions about how we use cookies.
            </p>
            <address className="not-italic text-sm space-y-1">
              <p className="font-semibold text-gray-800">Fountain of Grace International (NPO 316-193)</p>
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
