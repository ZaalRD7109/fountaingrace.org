'use client'

import { useEffect } from 'react'

import { classifyWhatsAppHref, trackWhatsAppTap } from '@/lib/tracking'

/**
 * Set up the queues immediately, load the scripts later.
 *
 * This is the part that makes the delay safe. gtag and fbq are both designed
 * to be called before their script arrives: the calls sit in a queue and are
 * replayed the moment it does. So the queue is primed here, at page load, with
 * no network request at all - and every event fired in between, including a
 * WhatsApp tap, is held rather than dropped.
 *
 * Without this, lib/tracking.ts checks `typeof window.gtag === 'function'` and
 * silently throws the event away, which would have quietly broken the WhatsApp
 * tap tracking built on 2026-07-31 - the church's most honest conversion.
 */
function primeQueues() {
  const w = window as unknown as Record<string, any>
  w.dataLayer = w.dataLayer || []
  if (typeof w.gtag !== 'function') {
    w.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      w.dataLayer.push(arguments)
    }
  }
  if (!w.__fgiGaPrimed) {
    w.__fgiGaPrimed = true
    w.gtag('js', new Date())
    w.gtag('config', 'G-15FK8BTR4B')
  }
  if (typeof w.fbq !== 'function' && window.location.hostname === 'www.fountaingrace.org') {
    const n: any = function () {
      // eslint-disable-next-line prefer-rest-params
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    }
    w.fbq = n
    if (!w._fbq) w._fbq = n
    n.push = n
    n.loaded = true
    n.version = '2.0'
    n.queue = []
    w.fbq('init', '2211800306311040') // FGI Website pixel (Meta dataset 'FGI Website')
    w.fbq('track', 'PageView')
  }
}

function loadGA4() {
  if (document.getElementById('fgi-ga4')) return
  primeQueues()
  const s = document.createElement('script')
  s.id = 'fgi-ga4'
  s.src = 'https://www.googletagmanager.com/gtag/js?id=G-15FK8BTR4B'
  s.async = true
  document.head.appendChild(s)
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
  // init and PageView were already queued by primeQueues() at page load, so
  // fbevents.js drains them the moment it arrives with their original order.
  primeQueues()
  const s = document.createElement('script')
  s.id = 'fgi-meta-pixel'
  s.src = 'https://connect.facebook.net/en_US/fbevents.js'
  s.async = true
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
 * does anything at all (a scroll, a tap, a key) or ten seconds after the page
 * has finished loading, whichever comes first. Any real person who reads,
 * scrolls or taps is recorded exactly as before, and every conversion we care
 * about - a WhatsApp tap, a form, a donation - is an interaction by
 * definition. What is given up is the visitor who lands, touches nothing and
 * leaves inside ten seconds. That is the trade, and it is worth it: the tags
 * were costing 600ms of blocked main thread on the one measurement Google
 * rejected the Ad Grant over, twice.
 */
const IDLE_DELAY_MS = 10000
// 'click' is in the list as well as 'pointerdown' on purpose: a keyboard or an
// assistive device can produce a click with no pointer event in front of it.
const WAKE_EVENTS = ['pointerdown', 'touchstart', 'keydown', 'scroll', 'wheel', 'click'] as const

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
      // Queues open now (no network), scripts arrive later.
      primeQueues()
      loadAllWhenIdle()
    }

    // Still honour an Accept tap in this visit (covers anyone who had previously declined and changes their mind)
    window.addEventListener('fgi:consent-accepted', loadAll)
    return () => window.removeEventListener('fgi:consent-accepted', loadAll)
  }, [])

  return null
}
