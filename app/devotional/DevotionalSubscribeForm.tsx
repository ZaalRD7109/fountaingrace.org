'use client'

import { useState } from 'react'

export default function DevotionalSubscribeForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
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
        <button
          type="submit"
          disabled={status === 'loading'}
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
