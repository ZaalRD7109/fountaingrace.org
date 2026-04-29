'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
    gtag?: (...args: unknown[]) => void
  }
}

export default function VisitThankYouClient() {
  useEffect(() => {
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'ViewContent', {
        content_name: 'Plan Your Visit - Thank You',
        content_category: 'Church Visit Intent',
      })
    }
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'visit_form_complete', {
        event_category: 'engagement',
        event_label: 'plan_your_visit',
      })
    }
  }, [])

  return null
}
