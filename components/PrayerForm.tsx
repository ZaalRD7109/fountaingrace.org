'use client'

import { useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import TurnstileWidget from '@/components/TurnstileWidget'

export default function PrayerForm() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [prayer, setPrayer] = useState('')
  const [confidential, setConfidential] = useState(false)
  const [turnstileToken, setTurnstileToken] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleVerify = useCallback((token: string) => setTurnstileToken(token), [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!turnstileToken) {
      setError('Please complete the security check.')
      return
    }
    setLoading(true)
    setError('')
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SUPABASE_EDGE_BASE}/handle-prayer-form`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email: email || null, prayer, confidential, turnstileToken }),
        }
      )
      if (!res.ok) throw new Error('Submission failed')
      router.push('/thank-you/prayer')
    } catch {
      setError('Something went wrong. Please try again or WhatsApp us on +27 75 259 2555.')
      setLoading(false)
    }
  }

  const inputClass =
    'w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#008080] focus:border-transparent transition-colors'
  const labelClass = 'block text-sm font-semibold text-gray-700 mb-1'

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="prayer-name" className={labelClass}>
          Your Name <span className="text-red-500">*</span>
        </label>
        <input
          id="prayer-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="prayer-email" className={labelClass}>
          Email Address{' '}
          <span className="text-[#595959] font-normal text-xs">(optional - we will follow up if you include one)</span>
        </label>
        <input
          id="prayer-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="prayer-request" className={labelClass}>
          Your Prayer Request <span className="text-red-500">*</span>
        </label>
        <textarea
          id="prayer-request"
          required
          rows={6}
          value={prayer}
          onChange={(e) => setPrayer(e.target.value)}
          placeholder="Share what is on your heart..."
          className={inputClass}
        />
      </div>

      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={confidential}
          onChange={(e) => setConfidential(e.target.checked)}
          className="mt-0.5 h-4 w-4 rounded border-gray-300 text-[#008080] focus:ring-[#008080]"
        />
        <span className="text-sm text-gray-700">
          Please keep this between the pastor and me (confidential)
        </span>
      </label>

      <TurnstileWidget onVerify={handleVerify} />

      <p className="text-xs text-[#595959] leading-relaxed border border-gray-100 rounded-lg bg-gray-50 px-4 py-3">
        Your prayer request is received by Fountain of Grace International (NPO 316-193) and
        handled by the pastoral team only. Nothing is shared publicly. Data is stored securely
        for up to 24 months and is never sold or shared with third parties. You may request
        deletion at any time by emailing{' '}
        <a href="mailto:info@fountaingrace.org" className="text-[#008080] hover:underline">
          info@fountaingrace.org
        </a>
        . By submitting you consent to this in line with POPIA. See our{' '}
        <Link href="/privacy-policy" className="text-[#008080] hover:underline">
          Privacy Policy
        </Link>
        .
      </p>

      {error && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-4 py-3">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#008080] text-white font-bold py-3.5 px-6 rounded-[30px] hover:bg-[#006666] transition-colors disabled:opacity-60 disabled:cursor-not-allowed text-sm"
      >
        {loading ? 'Submitting...' : 'Submit Prayer Request'}
      </button>
    </form>
  )
}
