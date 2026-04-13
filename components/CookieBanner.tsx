'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Only show if consent has not been given yet
    const consent = localStorage.getItem('FGI_cookieConsent')
    if (!consent) {
      setVisible(true)
    }
  }, [])

  function accept() {
    localStorage.setItem('FGI_cookieConsent', 'accepted')
    setVisible(false)
  }

  function decline() {
    localStorage.setItem('FGI_cookieConsent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-4 left-4 right-4 z-50 max-w-md sm:left-auto sm:right-6 sm:bottom-6"
    >
      <div
        className="rounded-2xl p-5 shadow-2xl text-white text-sm leading-relaxed"
        style={{ background: 'linear-gradient(135deg, #2a9df4 0%, #008080 100%)' }}
      >
        <p className="mb-4">
          We use cookies to understand how people use our site. Anonymous analytics only —
          no personal data is sold or shared. Read our{' '}
          <Link
            href="/cookie-policy"
            className="underline font-semibold hover:text-[#FFD600] transition-colors"
          >
            Cookie Policy
          </Link>{' '}
          and{' '}
          <Link
            href="/privacy-policy"
            className="underline font-semibold hover:text-[#FFD600] transition-colors"
          >
            Privacy Policy
          </Link>.
        </p>
        <div className="flex gap-3">
          <button
            onClick={accept}
            className="flex-1 bg-[#FFD600] text-[#1a1a1a] font-bold rounded-lg px-4 py-2.5 text-sm hover:bg-[#e6c200] transition-colors"
          >
            Accept
          </button>
          <button
            onClick={decline}
            className="flex-1 bg-white/10 text-white font-semibold rounded-lg px-4 py-2.5 text-sm hover:bg-white/20 transition-colors border border-white/20"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  )
}
