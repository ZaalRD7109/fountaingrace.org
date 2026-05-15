'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function DevotionalSubscribeForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [consent, setConsent] = useState(false)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!consent) return
    setStatus('loading')

    try {
      const res = await fetch('https://n8n.ricardozaal.com/webhook/devotional-subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim() }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setMessage(data.message || 'You are subscribed. Check your inbox.')
        setEmail('')
        setName('')
        setConsent(false)
      } else {
        setStatus('error')
        setMessage(data.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setMessage('Could not connect. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-[#008080] text-white rounded-xl px-6 py-5 text-center max-w-md mx-auto">
        <p className="font-bold text-base mb-1">You are in.</p>
        <p className="text-sm opacity-90">{message}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Your name (optional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#008080]"
        />
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#008080]"
        />

        {/* POPIA Consent */}
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            required
            className="mt-0.5 h-4 w-4 shrink-0 accent-[#008080]"
          />
          <span className="text-xs text-[#595959] leading-relaxed">
            By subscribing I consent to Fountain of Grace International (NPO 316-193)
            sending me a daily devotional email. My email address will be used only for
            this purpose and will never be sold or shared with third parties. I can
            unsubscribe at any time by replying STOP or clicking the unsubscribe link in
            any email.{' '}
            <Link href="/privacy-policy" className="underline hover:text-[#008080]" target="_blank">
              Privacy Policy
            </Link>
            .
          </span>
        </label>

        <button
          type="submit"
          disabled={status === 'loading' || !consent}
          className="w-full bg-[#008080] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#006666] transition-colors text-sm disabled:opacity-60"
        >
          {status === 'loading' ? 'Subscribing...' : 'Send me the daily word'}
        </button>
        {status === 'error' && (
          <p className="text-red-600 text-xs text-center">{message}</p>
        )}
      </div>
    </form>
  )
}
