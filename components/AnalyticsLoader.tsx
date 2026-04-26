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

function loadClarity() {
  if (document.getElementById('fgi-clarity')) return
  const s = document.createElement('script')
  s.id = 'fgi-clarity'
  s.text = [
    '(function(c,l,a,r,i,t,y){',
    'c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};',
    't=l.createElement(r);t.async=1;',
    't.src="https://www.clarity.ms/tag/"+i;',
    'y=l.getElementsByTagName(r)[0];',
    'y.parentNode.insertBefore(t,y);',
    '})(window,document,"clarity","script","wcq3d0ed7r");',
  ].join('')
  document.head.appendChild(s)
}

function loadAll() {
  loadGA4()
  loadClarity()
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
