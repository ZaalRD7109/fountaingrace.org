'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/sunday-services', label: 'Sunday Services' },
  { href: '/about', label: 'About' },
  { href: '/pastors', label: 'Pastors' },
  { href: '/sermons', label: 'Sermons' },
  { href: '/community-impact', label: 'Community' },
  { href: '/donate', label: 'Donate' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.jpg"
              alt="Fountain of Grace International — Church in Pretoria North"
              width={160}
              height={56}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#595959] hover:text-gray-900 font-medium transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/plan-your-visit"
              className="btn-primary text-sm px-5 py-2.5"
            >
              Plan Your Visit
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav
            className="lg:hidden border-t border-gray-100 py-4 flex flex-col gap-3"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-[#595959] hover:text-gray-900 font-medium py-2 px-2 rounded-md hover:bg-gray-50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/plan-your-visit"
              onClick={() => setMenuOpen(false)}
              className="btn-primary text-sm text-center mt-2"
            >
              Plan Your Visit
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
