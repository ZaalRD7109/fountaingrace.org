'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo - clickable home, tooltip for less technical users */}
          <Link
            href="/"
            className="flex-shrink-0"
            onClick={() => setMenuOpen(false)}
            title="Go to Homepage"
            aria-label="Fountain of Grace International - Go to Homepage"
          >
            <Image
              src="/logo.jpg"
              alt="Fountain of Grace International - Church in Pretoria North"
              width={160}
              height={56}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav - two items only: Sermons + Plan Your Visit */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            <Link
              href="/sermons"
              className="text-sm text-[#595959] hover:text-gray-900 font-medium transition-colors duration-150 px-3 py-2 rounded-md hover:bg-gray-50"
            >
              Sermons
            </Link>
            <Link href="/plan-your-visit" className="btn-primary text-sm px-5 py-2.5 ml-2">
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

        {/* Mobile menu - full site navigation, organised by journey stage */}
        {menuOpen && (
          <nav
            className="lg:hidden border-t border-gray-100 py-4 flex flex-col gap-1"
            aria-label="Mobile navigation"
          >
            {/* Primary action - always first and most prominent */}
            <Link
              href="/plan-your-visit"
              onClick={() => setMenuOpen(false)}
              className="btn-primary text-sm text-center mb-3"
            >
              Plan Your Visit
            </Link>

            <Link
              href="/sermons"
              onClick={() => setMenuOpen(false)}
              className="text-sm text-[#595959] hover:text-gray-900 font-medium py-2 px-2 rounded-md hover:bg-gray-50 transition-colors"
            >
              Sermons
            </Link>

            {/* Visit section */}
            <div className="border-t border-gray-100 mt-2 pt-3">
              <p className="text-xs font-semibold text-[#999] uppercase tracking-wider px-2 mb-1">Your Visit</p>
              <Link href="/what-to-expect" onClick={() => setMenuOpen(false)} className="block text-sm text-[#595959] hover:text-gray-900 font-medium py-2 px-2 rounded-md hover:bg-gray-50 transition-colors">What to Expect</Link>
              <Link href="/faq" onClick={() => setMenuOpen(false)} className="block text-sm text-[#595959] hover:text-gray-900 font-medium py-2 px-2 rounded-md hover:bg-gray-50 transition-colors">FAQ</Link>
              <Link href="/about" onClick={() => setMenuOpen(false)} className="block text-sm text-[#595959] hover:text-gray-900 font-medium py-2 px-2 rounded-md hover:bg-gray-50 transition-colors">About Us</Link>
              <Link href="/pastors" onClick={() => setMenuOpen(false)} className="block text-sm text-[#595959] hover:text-gray-900 font-medium py-2 px-2 rounded-md hover:bg-gray-50 transition-colors">Pastors</Link>
            </div>

            {/* Resources section */}
            <div className="border-t border-gray-100 mt-2 pt-3">
              <p className="text-xs font-semibold text-[#999] uppercase tracking-wider px-2 mb-1">Resources</p>
              <Link href="/resources" onClick={() => setMenuOpen(false)} className="block text-sm text-[#595959] hover:text-gray-900 font-medium py-2 px-2 rounded-md hover:bg-gray-50 transition-colors">Articles</Link>
              <Link href="/devotional" onClick={() => setMenuOpen(false)} className="block text-sm text-[#595959] hover:text-gray-900 font-medium py-2 px-2 rounded-md hover:bg-gray-50 transition-colors">Devotionals</Link>
            </div>

            {/* Community section */}
            <div className="border-t border-gray-100 mt-2 pt-3">
              <p className="text-xs font-semibold text-[#999] uppercase tracking-wider px-2 mb-1">Community</p>
              <Link href="/community-impact" onClick={() => setMenuOpen(false)} className="block text-sm text-[#595959] hover:text-gray-900 font-medium py-2 px-2 rounded-md hover:bg-gray-50 transition-colors">Community Impact</Link>
              <Link href="/volunteer" onClick={() => setMenuOpen(false)} className="block text-sm text-[#595959] hover:text-gray-900 font-medium py-2 px-2 rounded-md hover:bg-gray-50 transition-colors">Volunteer</Link>
              <Link href="/stories" onClick={() => setMenuOpen(false)} className="block text-sm text-[#595959] hover:text-gray-900 font-medium py-2 px-2 rounded-md hover:bg-gray-50 transition-colors">Stories</Link>
              <Link href="/programs" onClick={() => setMenuOpen(false)} className="block text-sm text-[#595959] hover:text-gray-900 font-medium py-2 px-2 rounded-md hover:bg-gray-50 transition-colors">Programs</Link>
            </div>

            {/* Connect section */}
            <div className="border-t border-gray-100 mt-2 pt-3">
              <p className="text-xs font-semibold text-[#999] uppercase tracking-wider px-2 mb-1">Connect</p>
              <Link href="/prayer" onClick={() => setMenuOpen(false)} className="block text-sm text-[#595959] hover:text-gray-900 font-medium py-2 px-2 rounded-md hover:bg-gray-50 transition-colors">Prayer Request</Link>
              <Link href="/donate" onClick={() => setMenuOpen(false)} className="block text-sm text-[#595959] hover:text-gray-900 font-medium py-2 px-2 rounded-md hover:bg-gray-50 transition-colors">Donate</Link>
              <Link href="/contact" onClick={() => setMenuOpen(false)} className="block text-sm text-[#595959] hover:text-gray-900 font-medium py-2 px-2 rounded-md hover:bg-gray-50 transition-colors">Contact</Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
