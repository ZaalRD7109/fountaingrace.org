'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      ;(window as any).gtag('event', 'app_error', {
        message: error?.message ?? 'unknown',
        digest: error?.digest ?? '',
      })
    }
  }, [error])

  return (
    <main className="min-h-[60vh] flex items-center justify-center px-6 py-20 bg-white">
      <div className="max-w-xl text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#000000]">
          Something went wrong
        </h1>
        <p className="mt-4 text-[#7d7d7d]">
          Sorry about that. Please try again, or reach us on WhatsApp and we will help right away.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => reset()}
            className="rounded-[30px] bg-[#2a9df4] px-6 py-3 font-semibold text-white hover:opacity-90 transition"
          >
            Try again
          </button>
          <a
            href="https://wa.me/27752592555"
            className="rounded-[30px] bg-[#ffd700] px-6 py-3 font-semibold text-[#000000] hover:opacity-90 transition"
          >
            WhatsApp us
          </a>
        </div>

        <div className="mt-6 text-sm text-[#7d7d7d]">
          <a href="/" className="text-[#008080] hover:underline font-medium">
            Return home
          </a>
        </div>
      </div>
    </main>
  )
}
