'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

type NavChild = { href: string; label: string; desc: string }
type NavItem =
  | { href: string; label: string; children?: undefined }
  | { href?: string; label: string; children: NavChild[] }

const navItems: NavItem[] = [
  { href: '/plan-your-visit', label: 'Plan Your Visit' },
  { href: '/sermons', label: 'Sermons' },
  {
    label: 'Resources',
    children: [
      { href: '/resources', label: 'Resources', desc: 'Answers to real life questions' },
      { href: '/devotional', label: 'Devotional', desc: 'Saturday prep for Sunday' },
    ],
  },
  {
    label: 'Community',
    children: [
      { href: '/community-impact', label: 'Community Impact', desc: 'How we serve Pretoria North' },
      { href: '/stories', label: 'Stories', desc: 'Where your giving goes' },
      { href: '/volunteer', label: 'Volunteer', desc: 'Join the team' },
    ],
  },
  { href: '/donate', label: 'Donate' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label)
  }

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0" onClick={() => setMenuOpen(false)}>
            <Image
              src="/logo.jpg"
              alt="Fountain of Grace International - Church in Pretoria North"
              width={160}
              height={56}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navItems.map((item) =>
              item.children ? (
                // Dropdown item
                <div key={item.label} className="relative group">
                  <button
                    className="flex items-center gap-1 text-sm text-[#595959] hover:text-gray-900 font-medium transition-colors duration-150 px-3 py-2 rounded-md hover:bg-gray-50"
                    aria-haspopup="true"
                  >
                    {item.label}
                    <svg
                      className="w-3.5 h-3.5 mt-0.5 text-[#595959] group-hover:text-gray-900 transition-transform duration-200 group-hover:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Dropdown panel */}
                  <div className="absolute left-0 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 ease-out z-50">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 py-2 min-w-[220px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex flex-col px-4 py-3 hover:bg-[#f0fafa] transition-colors duration-100 group/item"
                        >
                          <span className="text-sm font-semibold text-gray-900 group-hover/item:text-[#008080] transition-colors">
                            {child.label}
                          </span>
                          <span className="text-xs text-[#595959] mt-0.5">{child.desc}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                // Direct link
                <Link
                  key={item.href}
                  href={item.href!}
                  className="text-sm text-[#595959] hover:text-gray-900 font-medium transition-colors duration-150 px-3 py-2 rounded-md hover:bg-gray-50"
                >
                  {item.label}
                </Link>
              )
            )}
            <Link href="/plan-your-visit" className="btn-primary text-sm px-5 py-2.5 ml-2">
              Plan Your Visit
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => { setMenuOpen(!menuOpen); setOpenDropdown(null) }}
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
            className="lg:hidden border-t border-gray-100 py-4 flex flex-col gap-1"
            aria-label="Mobile navigation"
          >
            {navItems.map((item) =>
              item.children ? (
                // Mobile accordion dropdown
                <div key={item.label}>
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="w-full flex items-center justify-between text-sm text-[#595959] hover:text-gray-900 font-medium py-2 px-2 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    {item.label}
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openDropdown === item.label && (
                    <div className="ml-3 mt-1 flex flex-col gap-1 border-l-2 border-[#008080] pl-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => { setMenuOpen(false); setOpenDropdown(null) }}
                          className="text-sm text-[#595959] hover:text-[#008080] font-medium py-2 px-2 rounded-md hover:bg-[#f0fafa] transition-colors"
                        >
                          {child.label}
                          <span className="block text-xs text-[#888] font-normal">{child.desc}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href!}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm text-[#595959] hover:text-gray-900 font-medium py-2 px-2 rounded-md hover:bg-gray-50 transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
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
