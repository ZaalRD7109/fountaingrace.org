'use client'

import { useEffect } from 'react'

import { classifyWhatsAppHref, trackWhatsAppTap } from '@/lib/tracking'

function loadGA4() {
  if (document.getElementById('fgi-ga4')) return
  const s = document.createElement('script')
  s.id = 'fgi-ga4'
  s.src = 'https://www.googletagmanager.com/gtag/js?id=G-15FK8BTR4B'
  s.async = true
  document.head.appendChild(s)
  const init = document.createElement('script')
  init.id = 'fgi-ga4-init'
  init.text = [
    'window.dataLayer=window.dataLayer||[];',
    'function gtag(){dataLayer.push(arguments);}',
    "gtag('js',new Date());",
    "gtag('config','G-15FK8BTR4B');",
  ].join('')
  document.head.appendChild(init)
}

function loadClarity() {
  if (document.getElementById('fgi-clarity')) return
  const s = document.createElement('script')
  s.id = 'fgi-clarity'
  s.text = [
    '(function(c,l,a,r,i,t,y){',
    'c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};',
    't=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";',
    'y=l.getElementsByTagName(r)[0];',
    'y.parentNode.insertBefore(t,y);',
    '})(window,document,"clarity","script","wrvix7z3n5");',
  ].join('')
  document.head.appendChild(s)
}

function loadMetaPixel() {
  if (document.getElementById('fgi-meta-pixel')) return
  // Only fire on the production domain - never on .pages.dev staging URLs
  if (window.location.hostname !== 'www.fountaingrace.org') return
  const s = document.createElement('script')
  s.id = 'fgi-meta-pixel'
  s.text = [
    "!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?",
    "n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;",
    "n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;",
    "t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}",
    "(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');",
    "fbq('init','2211800306311040');",  // FGI Website pixel (Meta dataset 'FGI Website')
    "fbq('track','PageView');",
  ].join('')
  document.head.appendChild(s)
}

function loadAll() {
  loadGA4()
  loadClarity()
  loadMetaPixel()
}

/**
 * Third-party tags are loaded LATE, on purpose.
 *
 * Measured on 2026-08-03 with Google's own PageSpeed Insights after the Ad
 * Grant application was rejected a second time for "load quickly": the Meta
 * pixel and the GA4 tag together were 342KB and blocked the phone's main
 * thread for 590ms, on a page whose own code is small. Largest Contentful
 * Paint on mobile was 6.2s against Google's 2.5s bar.
 *
 * Nothing is dropped. Everything still loads, either the moment the visitor
 * does anything at all (a scroll, a tap, a key) or shortly after the page has
 * finished loading, whichever comes first. A real person is recorded exactly
 * as before. What changes is that the church's own words paint first and the
 * trackers wait their turn.
 */
const IDLE_DELAY_MS = 3500
const WAKE_EVENTS = ['pointerdown', 'touchstart', 'keydown', 'scroll', 'wheel'] as const

function loadAllWhenIdle() {
  let fired = false
  const run = () => {
    if (fired) return
    fired = true
    WAKE_EVENTS.forEach((e) => window.removeEventListener(e, run))
    loadAll()
  }

  // Whichever happens first: the visitor moves, or the page has been quiet.
  WAKE_EVENTS.forEach((e) => window.addEventListener(e, run, { once: true, passive: true }))

  const startTimer = () => window.setTimeout(run, IDLE_DELAY_MS)
  if (document.readyState === 'complete') startTimer()
  else window.addEventListener('load', startTimer, { once: true })

  return run
}

/**
 * One document-level listener covers every WhatsApp link on the site.
 *
 * There are over 200 pages carrying a wa.me link and more are generated every
 * week by the sermon and devotional engines, so editing them individually would
 * be wrong twice over: it would miss the ones written tomorrow. This catches
 * every existing link and every future one, including links inside content that
 * was rendered server-side.
 */
function whatsAppClickListener(e: MouseEvent) {
  const target = e.target as HTMLElement | null
  const anchor = target?.closest?.('a') as HTMLAnchorElement | null
  if (!anchor) return
  const kind = classifyWhatsAppHref(anchor.getAttribute('href') || '')
  if (!kind) return
  trackWhatsAppTap(kind, anchor.href)
}

export default function AnalyticsLoader() {
  useEffect(() => {
    // Capture phase, so it still records even if something downstream stops
    // the event. It never calls preventDefault, so the tap always goes through
    // to WhatsApp exactly as before.
    document.addEventListener('click', whatsAppClickListener, true)
    return () => document.removeEventListener('click', whatsAppClickListener, true)
  }, [])

  useEffect(() => {
    // Load analytics by default (privacy-safe: Clarity masks names/emails/typed text),
    // UNLESS the visitor has explicitly declined. Opt-out model so Clarity + GA4 actually
    // capture visitor behaviour instead of only the rare person who taps Accept.
    // (Ricardo 2026-06-23 - the dashboard was empty because the old setup tracked only Accept-clickers.)
    if (localStorage.getItem('FGI_cookieConsent') !== 'declined') {
      loadAllWhenIdle()
    }

    // Still honour an Accept tap in this visit (covers anyone who had previously declined and changes their mind)
    window.addEventListener('fgi:consent-accepted', loadAll)
    return () => window.removeEventListener('fgi:consent-accepted', loadAll)
  }, [])

  return null
}
