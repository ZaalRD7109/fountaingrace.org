'use client'

import { useEffect } from 'react'

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

function loadAll() {
  loadGA4()
}

export default function AnalyticsLoader() {
  useEffect(() => {
    // Fire immediately if user already accepted in a previous visit
    if (localStorage.getItem('FGI_cookieConsent') === 'accepted') {
      loadAll()
    }

    // Fire when user accepts in this visit
    window.addEventListener('fgi:consent-accepted', loadAll)
    return () => window.removeEventListener('fgi:consent-accepted', loadAll)
  }, [])

  return null
}
