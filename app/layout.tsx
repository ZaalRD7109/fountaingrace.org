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
  // Global fallback OG image — override per-page by adding openGraph.images in each page's metadata
  openGraph: {
    siteName: 'Fountain of Grace International',
    locale: 'en_ZA',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Fountain of Grace International — Church in Pretoria North, South Africa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@FGIPta',
    images: ['/og-image.jpg'],
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
      </head>
      <body className={poppins.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
        <AnalyticsLoader />
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
