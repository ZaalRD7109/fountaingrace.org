'use client'

import { useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import TurnstileWidget from '@/components/TurnstileWidget'
import { EDGE_BASE } from '@/lib/edgeBase'
import { getNextSundayISO } from '@/lib/nextSunday'

export default function VisitForm() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [plannedDate, setPlannedDate] = useState(getNextSundayISO())
  const [bringingKids, setBringingKids] = useState(false)
  const [heardVia, setHeardVia] = useState('')
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
        `${EDGE_BASE}/handle-visit-form`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name,
            email,
            phone: phone || null,
            plannedDate,
            bringingKids,
            heardVia: heardVia || null,
            turnstileToken,
          }),
        }
      )
      if (!res.ok) throw new Error('Submission failed')
      router.push('/thank-you/visit')
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
        <label htmlFor="visit-name" className={labelClass}>
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          id="visit-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="visit-email" className={labelClass}>
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          id="visit-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="visit-phone" className={labelClass}>
          Phone / WhatsApp{' '}
          <span className="text-[#595959] font-normal text-xs">(optional - so we can reach you before Sunday)</span>
        </label>
        <input
          id="visit-phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+27 75 000 0000"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="visit-date" className={labelClass}>
          Which Sunday are you planning to visit? <span className="text-red-500">*</span>
        </label>
        <input
          id="visit-date"
          type="date"
          required
          value={plannedDate}
          min={getNextSundayISO()}
          onChange={(e) => setPlannedDate(e.target.value)}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="visit-heard" className={labelClass}>
          How did you hear about us?
        </label>
        <select
          id="visit-heard"
          value={heardVia}
          onChange={(e) => setHeardVia(e.target.value)}
          className={inputClass}
        >
          <option value="">Select an option...</option>
          <option value="Google Search">Google Search</option>
          <option value="Facebook">Facebook</option>
          <option value="Instagram">Instagram</option>
          <option value="TikTok">TikTok</option>
          <option value="YouTube">YouTube</option>
          <option value="Friend or Family">Friend or Family</option>
          <option value="Drove Past">Drove Past</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={bringingKids}
          onChange={(e) => setBringingKids(e.target.checked)}
          className="mt-0.5 h-4 w-4 rounded border-gray-300 text-[#008080] focus:ring-[#008080]"
        />
        <span className="text-sm text-gray-700">
          I am bringing children with me
        </span>
      </label>

      <TurnstileWidget onVerify={handleVerify} />

      <p className="text-xs text-[#595959] leading-relaxed border border-gray-100 rounded-lg bg-gray-50 px-4 py-3">
        Your information is collected by Fountain of Grace International (NPO 316-193) for the
        purpose of preparing for your visit and following up with you. Data is stored securely
        and is not shared with or sold to any third party. You may request access, correction,
        or deletion at any time by emailing{' '}
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
        {loading ? 'Submitting...' : 'Plan My Visit'}
      </button>
    </form>
  )
}
