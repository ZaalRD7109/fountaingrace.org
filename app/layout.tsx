import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import CookieBanner from '@/components/CookieBanner'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.fountaingrace.org'),
  robots: 'index, follow',
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
    <html lang="en-ZA">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Favicon served automatically from app/icon.png and app/apple-icon.png */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  )
}
