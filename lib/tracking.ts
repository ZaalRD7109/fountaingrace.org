'use client'

import { useRef } from 'react'

export type FormName =
  | 'contact'
  | 'prayer'
  | 'plan_your_visit'
  | 'volunteer'
  | 'donate'

type GtagFn = (...args: unknown[]) => void
type FbqFn = (...args: unknown[]) => void

type TrackWindow = {
  dataLayer?: unknown[]
  gtag?: GtagFn
  fbq?: FbqFn
  localStorage?: Storage
}

function getWin(): TrackWindow | null {
  if (typeof window === 'undefined') return null
  return window as unknown as TrackWindow
}

function consentGranted(w: TrackWindow): boolean {
  // Opt-out model (matches AnalyticsLoader): fire for everyone EXCEPT visitors who
  // explicitly declined. This keeps conversion events (Lead, InitiateCheckout) in sync
  // with the analytics that actually load, so ad-driven conversions are not undercounted.
  try {
    return w.localStorage?.getItem('FGI_cookieConsent') !== 'declined'
  } catch {
    return true
  }
}

export function trackFormStart(formName: FormName): void {
  const w = getWin()
  if (!w || !consentGranted(w)) return
  w.dataLayer = w.dataLayer || []
  w.dataLayer.push({ event: 'form_start', form_name: formName })
  if (typeof w.gtag === 'function') {
    w.gtag('event', 'form_start', { form_name: formName })
  }
}

export function trackFormSubmitSuccess(
  formName: FormName,
  params: Record<string, unknown> = {}
): void {
  const w = getWin()
  if (!w || !consentGranted(w)) return
  const payload = { form_name: formName, ...params }
  w.dataLayer = w.dataLayer || []
  w.dataLayer.push({ event: 'form_submit_success', ...payload })
  if (typeof w.gtag === 'function') {
    w.gtag('event', 'form_submit_success', payload)
  }
  if (typeof w.fbq === 'function') {
    w.fbq('track', 'Lead', { content_name: formName, ...params })
  }
}

export function trackDonateInitiated(amountZar: number, kind: 'one_time' | 'monthly'): void {
  const w = getWin()
  if (!w || !consentGranted(w)) return
  const payload = { form_name: 'donate' as const, amount_zar: amountZar, kind }
  w.dataLayer = w.dataLayer || []
  w.dataLayer.push({ event: 'donate_initiated', ...payload })
  if (typeof w.gtag === 'function') {
    w.gtag('event', 'donate_initiated', payload)
  }
  if (typeof w.fbq === 'function') {
    w.fbq('track', 'InitiateCheckout', {
      content_name: 'donate',
      value: amountZar,
      currency: 'ZAR',
      content_category: kind,
    })
  }
}

/**
 * WhatsApp taps.
 *
 * Two very different things share the same wa.me domain and only one of them
 * is a conversion:
 *   contact - a tap on wa.me/27752592555, someone actually messaging the church.
 *             This is the most honest signal we have that an ad worked, because
 *             it is a real person reaching out, often at night.
 *   share   - a tap on wa.me/?text=..., someone forwarding a sermon to a friend.
 *             Valuable, but it is not a lead. Counting it as one would inflate
 *             the conversion count, and Google Ad Grants treats a conversion
 *             rate that looks too good as a fault rather than a success.
 */
export type WhatsAppKind = 'contact' | 'share'

export function trackWhatsAppTap(kind: WhatsAppKind, href: string): void {
  const w = getWin()
  if (!w || !consentGranted(w)) return

  const payload = {
    link_url: href.split('?')[0],
    page_path: typeof location !== 'undefined' ? location.pathname : '',
  }
  const eventName = kind === 'contact' ? 'whatsapp_contact' : 'whatsapp_share'

  w.dataLayer = w.dataLayer || []
  w.dataLayer.push({ event: eventName, ...payload })

  if (typeof w.gtag === 'function') {
    // beacon so the hit survives the browser leaving for WhatsApp
    w.gtag('event', eventName, { ...payload, transport_type: 'beacon' })
  }
  if (typeof w.fbq === 'function') {
    if (kind === 'contact') {
      w.fbq('track', 'Contact', payload)
    } else {
      w.fbq('trackCustom', 'WhatsAppShare', payload)
    }
  }
}

/** Classify a href. Returns null when it is not a WhatsApp link at all. */
export function classifyWhatsAppHref(href: string): WhatsAppKind | null {
  if (!href) return null
  if (!/(^|\/\/|\.)wa\.me\//i.test(href) && !/api\.whatsapp\.com\/send/i.test(href)) {
    return null
  }
  // wa.me/<number> is the church. wa.me/?text= is a share sheet with no recipient.
  if (/wa\.me\/\+?\d/i.test(href)) return 'contact'
  if (/api\.whatsapp\.com\/send\?[^#]*phone=\d/i.test(href)) return 'contact'
  return 'share'
}

export function useFormStartOnce(formName: FormName): () => void {
  const fired = useRef(false)
  return () => {
    if (fired.current) return
    fired.current = true
    trackFormStart(formName)
  }
}
