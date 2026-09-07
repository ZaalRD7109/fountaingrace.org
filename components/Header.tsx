'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'

// One source of truth for the full site menu. Both the phone menu (hamburger)
// and the desktop "Menu" dropdown render from this, so the two never drift.
// Sermons and Plan Your Visit are kept out on purpose - they are their own
// buttons in the top bar and do not belong inside the grouped list.
const MENU_GROUPS: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: 'Your Visit',
    links: [
      { href: '/what-to-expect', label: 'What to Expect' },
      { href: '/faq', label: 'FAQ' },
      { href: '/about', label: 'About Us' },
      { href: '/pastors', label: 'Pastors' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { href: '/resources', label: 'Articles' },
      { href: '/devotional', label: 'Devotionals' },
    ],
  },
  {
    title: 'Community',
    links: [
      { href: '/community-impact', label: 'Community Impact' },
      { href: '/volunteer', label: 'Volunteer' },
      { href: '/stories', label: 'Stories' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { href: '/prayer', label: 'Prayer Request' },
      { href: '/fountain-of-prayers', label: 'Fountain of Prayers' },
      { href: '/donate', label: 'Donate' },
      { href: '/contact', label: 'Contact' },
    ],
  },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [deskOpen, setDeskOpen] = useState(false)
  const deskRef = useRef<HTMLDivElement>(null)

  // Close the desktop dropdown on an outside click or the Escape key.
  useEffect(() => {
    if (!deskOpen) return
    function onDown(e: MouseEvent) {
      if (deskRef.current && !deskRef.current.contains(e.target as Node)) setDeskOpen(false)
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setDeskOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [deskOpen])

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo - clickable home, tooltip for less technical users */}
          <Link prefetch={false}
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

          {/* Desktop nav - a quiet "Menu" dropdown (the rest of the site), then
              Sermons (outline) and Plan Your Visit (the one gold CTA). The Menu
              trigger is plain grey text on purpose so it never competes with the
              gold button. */}
          <nav className="hidden lg:flex items-center gap-3" aria-label="Main navigation">
            <div className="relative" ref={deskRef}>
              <button
                type="button"
                onClick={() => setDeskOpen((v) => !v)}
                className="inline-flex items-center gap-1 text-[#595959] hover:text-gray-900 font-medium text-sm px-2 py-2.5 transition-colors"
                aria-haspopup="true"
                aria-expanded={deskOpen}
              >
                Menu
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${deskOpen ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {deskOpen && (
                <div
                  className="absolute right-0 mt-2 w-[34rem] max-w-[90vw] bg-white border border-gray-100 rounded-xl shadow-lg p-5 grid grid-cols-2 gap-x-8 gap-y-4"
                  role="menu"
                >
                  {MENU_GROUPS.map((group) => (
                    <div key={group.title}>
                      <p className="text-xs font-semibold text-[#595959] uppercase tracking-wider mb-2">{group.title}</p>
                      <ul className="space-y-1">
                        {group.links.map((link) => (
                          <li key={link.label}>
                            <Link prefetch={false}
                              href={link.href}
                              onClick={() => setDeskOpen(false)}
                              className="block text-sm text-[#595959] hover:text-gray-900 font-medium py-1.5 rounded-md hover:bg-gray-50 px-2 -mx-2 transition-colors"
                              role="menuitem"
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link prefetch={false}
              href="/sermons"
              className="inline-block border-2 border-[#008080] text-[#006b6b] font-bold px-5 py-2.5 rounded-[30px] text-sm hover:bg-[#008080] hover:text-white transition-all duration-300 tracking-wide"
            >
              Sermons
            </Link>
            <Link prefetch={false} href="/plan-your-visit" className="btn-primary text-sm px-5 py-2.5">
              Plan Your Visit
            </Link>
          </nav>

          {/* Mobile hamburger - labelled "Menu" so it is obvious there is a whole
              site behind it, not just sermons and a visit. */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden inline-flex items-center gap-1.5 p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span className="text-sm font-medium">Menu</span>
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

        {/* Mobile menu - full site navigation, organised by journey stage.
            It scrolls on its own (max-height + overflow) so every section is
            reachable on a short phone screen, and the extra bottom padding lifts
            the last link (Contact) clear of the floating WhatsApp button. */}
        {menuOpen && (
          <nav
            className="lg:hidden border-t border-gray-100 py-4 flex flex-col gap-1 max-h-[calc(100dvh-4rem)] overflow-y-auto pb-28"
            aria-label="Mobile navigation"
          >
            {/* Primary action - always first and most prominent */}
            <Link prefetch={false}
              href="/plan-your-visit"
              onClick={() => setMenuOpen(false)}
              className="btn-primary text-sm text-center mb-3"
            >
              Plan Your Visit
            </Link>

            <Link prefetch={false}
              href="/sermons"
              onClick={() => setMenuOpen(false)}
              className="text-sm text-[#595959] hover:text-gray-900 font-medium py-2 px-2 rounded-md hover:bg-gray-50 transition-colors"
            >
              Sermons
            </Link>

            {MENU_GROUPS.map((group) => (
              <div key={group.title} className="border-t border-gray-100 mt-2 pt-3">
                <p className="text-xs font-semibold text-[#595959] uppercase tracking-wider px-2 mb-1">{group.title}</p>
                {group.links.map((link) => (
                  <Link prefetch={false}
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-sm text-[#595959] hover:text-gray-900 font-medium py-2 px-2 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
