import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import CookieBanner from '@/components/CookieBanner'
import AnalyticsLoader from '@/components/AnalyticsLoader'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-poppins',
  // Five weights preloaded at highest priority is about 100KB of font files
  // competing with the page's own picture on a phone connection, which showed
  // up as 891ms of Load Delay in front of Largest Contentful Paint. The fonts
  // still load and still swap in; they simply stop going first.
  preload: true,
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.fountaingrace.org'),
  robots: 'index, follow',
  verification: {
    google: 'tj2UtOjgKmGsrYwOwYPKH929JoEN3dpDpJZx-h9F0dE',
  },
  // Global fallback OG image - override per-page by adding openGraph.images in each page's metadata
  openGraph: {
    siteName: 'Fountain of Grace International',
    locale: 'en_ZA',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Fountain of Grace International - Church in Pretoria North, South Africa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@FGIPta',
    // No hardcoded image: Next derives twitter:image from each page's openGraph.images,
    // so sermon shares use their own YouTube thumbnail (the root openGraph fallback
    // below still covers the homepage and any page that sets no openGraph.images).
  },
  other: {
    // IndexNow key for Bing/Yandex instant indexing
    'indexnow-key': 'fgi-indexnow-7f4a2b9c',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-ZA" className={poppins.variable}>
      <head>
        {/* Favicon served automatically from app/icon.png and app/apple-icon.png */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />
        <link rel="dns-prefetch" href="https://challenges.cloudflare.com" />
        {/* Site-wide Organization entity. Read by Google and by the AI answer
            engines to work out who publishes this site and whether to trust it
            enough to cite. It existed on 3 sermon pages by accident and nowhere
            site-wide, so it is declared once here instead. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': ['Organization', 'Church'],
              '@id': 'https://www.fountaingrace.org/#organization',
              name: 'Fountain of Grace International',
              alternateName: 'FGI',
              url: 'https://www.fountaingrace.org',
              logo: 'https://www.fountaingrace.org/logo.webp',
              email: 'info@fountaingrace.org',
              telephone: '+27752592555',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '323 B Danie Theron Street',
                addressLocality: 'Pretoria North',
                addressRegion: 'Gauteng',
                postalCode: '0182',
                addressCountry: 'ZA',
              },
              sameAs: [
                'https://www.facebook.com/FGIPta/',
                'https://www.youtube.com/@fgipta',
                'https://www.tiktok.com/@fountainofgraceintl',
              ],
            }),
          }}
        />
      </head>
      <body className={poppins.className}>
        {/* Skip to main content - accessibility for keyboard and screen reader users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 focus:bg-white focus:text-[#008080] focus:font-bold focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
        <AnalyticsLoader />
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          strategy="lazyOnload"
          id="cf-turnstile"
        />
        {/* Clean UTM params from URL after analytics capture */}
        <Script id="clean-utm" strategy="afterInteractive">
          {`
            setTimeout(function(){
              if (window.location.search.indexOf('utm_') !== -1) {
                var cleanUrl = window.location.origin + window.location.pathname + window.location.hash;
                window.history.replaceState({}, document.title, cleanUrl);
              }
            }, 1500);
          `}
        </Script>
      </body>
    </html>
  )
}
