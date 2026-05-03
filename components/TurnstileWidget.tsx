'use client'

import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    turnstile: {
      render: (el: HTMLElement, options: Record<string, unknown>) => string
      reset: (widgetId: string) => void
      remove: (widgetId: string) => void
    }
  }
}

interface Props {
  onVerify: (token: string) => void
  onExpire?: () => void
  onError?: () => void
}

export default function TurnstileWidget({ onVerify, onExpire, onError }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const widgetId = useRef<string | null>(null)

  useEffect(() => {
    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '0x4AAAAAADISxaCUIm1wYMw0'

    function renderWidget() {
      if (!containerRef.current || widgetId.current) return
      widgetId.current = window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        callback: onVerify,
        'expired-callback': onExpire ?? (() => {}),
        'error-callback': onError ?? (() => {}),
        theme: 'light',
      })
    }

    if (typeof window !== 'undefined' && window.turnstile) {
      renderWidget()
    } else {
      const interval = setInterval(() => {
        if (typeof window !== 'undefined' && window.turnstile) {
          clearInterval(interval)
          renderWidget()
        }
      }, 100)
      return () => clearInterval(interval)
    }

    return () => {
      if (widgetId.current && typeof window !== 'undefined' && window.turnstile) {
        window.turnstile.remove(widgetId.current)
        widgetId.current = null
      }
    }
  }, [onVerify, onExpire, onError])

  return <div ref={containerRef} className="my-4" />
}
