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
  try {
    return w.localStorage?.getItem('FGI_cookieConsent') === 'accepted'
  } catch {
    return false
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

export function useFormStartOnce(formName: FormName): () => void {
  const fired = useRef(false)
  return () => {
    if (fired.current) return
    fired.current = true
    trackFormStart(formName)
  }
}
