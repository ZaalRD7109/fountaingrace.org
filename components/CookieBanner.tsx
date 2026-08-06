'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  // Starts VISIBLE so the banner ships inside the static HTML and paints with
  // the rest of the page. It used to start hidden and only appear after
  // hydration, which made this box the Largest Contentful Paint element on
  // /plan-your-visit - a page whose own hero text is almost exactly the same
  // size - and pushed LCP to 2.9s against Google's 2.5s bar (measured
  // 2026-08-06, after two Ad Grant rejections for speed). 73% of that LCP was
  // pure render delay, i.e. waiting for JavaScript to draw this box.
  // A visitor who has already answered never SEES it: the inline script in
  // app/layout.tsx stamps `fgi-consent` on <html> before first paint and the
  // CSS rule in globals.css hides it, so there is no flash. The effect below
  // then unmounts it properly once React takes over.
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    // Already answered - take it out of the DOM. It was never painted.
    try {
      if (localStorage.getItem('FGI_cookieConsent')) {
        setVisible(false)
      }
    } catch {
      // Private mode or storage blocked. Leave the banner up rather than
      // assume consent - the visitor can still Accept or Decline.
    }
  }, [])

  function remember(answer: 'accepted' | 'declined') {
    try {
      localStorage.setItem('FGI_cookieConsent', answer)
    } catch {
      // Storage blocked. The banner still closes for this visit.
    }
  }

  function accept() {
    remember('accepted')
    setVisible(false)
    window.dispatchEvent(new Event('fgi:consent-accepted'))
  }

  function decline() {
    remember('declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      id="fgi-cookie-banner"
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-4 left-4 right-4 z-50 max-w-md sm:left-auto sm:right-6 sm:bottom-6"
    >
      <div
        className="rounded-2xl p-5 shadow-2xl text-white text-sm leading-relaxed"
        style={{ background: 'linear-gradient(135deg, #06243d 0%, #0d6fbf 100%)' }}
      >
        <p className="mb-4">
          We use cookies to understand how people use our site. Anonymous analytics only -
          no personal data is sold or shared. Read our{' '}
          <Link
            href="/cookie-policy"
            className="underline font-semibold hover:text-white transition-colors"
          >
            Cookie Policy
          </Link>{' '}
          and{' '}
          <Link
            href="/privacy-policy"
            className="underline font-semibold hover:text-white transition-colors"
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
