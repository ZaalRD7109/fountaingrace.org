import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#008080] mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* NAP Block */}
          <div>
            <Link href="/" className="block mb-4">
              <Image
                src="/logo-square.webp"
                alt="Fountain of Grace International logo"
                width={80}
                height={80}
                className="rounded-lg"
              />
            </Link>
            <h3 className="text-[#1a1a1a] font-bold text-lg mb-3">Fountain of Grace International</h3>
            <address className="not-italic text-sm leading-relaxed text-[#1a1a1a]">
              <p>323 B Danie Theron Street</p>
              <p>Pretoria North, Gauteng</p>
              <p className="mt-2">
                Tel:{' '}
                <a href="tel:+27752592555" className="font-semibold hover:underline">
                  +27 75 259 2555
                </a>
              </p>
              <p>
                WhatsApp:{' '}
                <a
                  href="https://wa.me/27752592555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:underline"
                >
                  +27 75 259 2555
                </a>
              </p>
              <p className="mt-2 text-xs text-[#1a1a1a]">NPO No: 316-193</p>
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#1a1a1a] font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: '/plan-your-visit', label: 'Plan Your Visit' },
                { href: '/what-to-expect', label: 'What to Expect' },
                { href: '/about', label: 'About Us' },
                { href: '/community-impact', label: 'Community Impact' },
                { href: '/donate', label: 'Donate' },
                { href: '/prayer', label: 'Prayer Request' },
                { href: '/volunteer', label: 'Volunteer' },
                { href: '/faq', label: 'FAQ' },
                { href: '/sermons', label: 'Sermons' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#1a1a1a] font-medium hover:underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Info */}
          <div>
            <h3 className="text-[#1a1a1a] font-bold mb-3">Sunday Services</h3>
            <p className="text-sm text-[#1a1a1a] font-medium">Every Sunday at 09:00</p>
            <p className="text-sm text-[#1a1a1a] mt-1">323 B Danie Theron Street, Pretoria North</p>
            <div className="mt-4">
              <Link
                href="/plan-your-visit"
                className="inline-block bg-[#FFD600] text-[#1a1a1a] text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-[#e6c200] transition-colors"
              >
                Plan Your Visit
              </Link>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="https://www.facebook.com/FGIPta/" target="_blank" rel="noopener noreferrer"
                className="text-[#1a1a1a] font-medium hover:underline text-sm"
                aria-label="Fountain of Grace International on Facebook">
                Facebook
              </a>
              <a href="https://www.youtube.com/@fgipta" target="_blank" rel="noopener noreferrer"
                className="text-[#1a1a1a] font-medium hover:underline text-sm"
                aria-label="Fountain of Grace International on YouTube">
                YouTube
              </a>
              <a href="https://www.tiktok.com/@fountainofgraceintl" target="_blank" rel="noopener noreferrer"
                className="text-[#1a1a1a] font-medium hover:underline text-sm"
                aria-label="Fountain of Grace International on TikTok">
                TikTok
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#006666] mt-10 pt-6 text-xs text-[#1a1a1a] flex flex-col sm:flex-row justify-between gap-3">
          <p>© {new Date().getFullYear()} Fountain of Grace International. Registered NPO No: 316-193. Pretoria North, South Africa.</p>
          <nav aria-label="Legal links" className="flex flex-wrap gap-x-4 gap-y-1">
            <Link href="/privacy-policy" className="font-medium hover:underline transition-colors">Privacy Policy</Link>
            <Link href="/cookie-policy" className="font-medium hover:underline transition-colors">Cookie Policy</Link>
            <Link href="/terms" className="font-medium hover:underline transition-colors">Terms of Use</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}