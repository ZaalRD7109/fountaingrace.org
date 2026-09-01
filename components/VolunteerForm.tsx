'use client'

import { useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import TurnstileWidget from '@/components/TurnstileWidget'
import { EDGE_BASE } from '@/lib/edgeBase'
import { useFormStartOnce } from '@/lib/tracking'

export default function VolunteerForm() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [skills, setSkills] = useState('')
  const [availability, setAvailability] = useState('')
  const [contactOptin, setContactOptin] = useState(false)
  const [turnstileToken, setTurnstileToken] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const handleFormStart = useFormStartOnce('volunteer')

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
        `${EDGE_BASE}/handle-volunteer-form`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name,
            email,
            phone,
            skills: skills || null,
            availability: availability || null,
            contactOptin,
            turnstileToken,
          }),
        }
      )
      if (!res.ok) throw new Error('Submission failed')
      if (contactOptin) {
        try {
          await fetch(`${EDGE_BASE}/record-consent`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ phone, source: 'volunteer-form' }),
          })
        } catch { /* consent is best-effort; never block the submission */ }
      }
      router.push('/thank-you/volunteer')
    } catch {
      setError('Something went wrong. Please try again or WhatsApp us on +27 75 259 2555.')
      setLoading(false)
    }
  }

  const inputClass =
    'w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#008080] focus:border-transparent transition-colors'
  const labelClass = 'block text-sm font-semibold text-gray-700 mb-1'

  return (
    <form onSubmit={handleSubmit} onFocus={handleFormStart} noValidate className="space-y-5">
      <div>
        <label htmlFor="vol-name" className={labelClass}>
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          id="vol-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="vol-email" className={labelClass}>
          Email Address
        </label>
        <p className="text-xs text-[#595959] mb-1">We send the important things by email, so please add it if you have one.</p>
        <input
          id="vol-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="vol-phone" className={labelClass}>
          Phone / WhatsApp <span className="text-red-500">*</span>
        </label>
        <input
          id="vol-phone"
          type="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+27 75 000 0000"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="vol-skills" className={labelClass}>
          What can you offer?{' '}
          <span className="text-[#595959] font-normal text-xs">(optional)</span>
        </label>
        <textarea
          id="vol-skills"
          rows={3}
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          placeholder="eg. music, greeting, children's ministry, admin, media..."
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="vol-availability" className={labelClass}>
          When are you available?
        </label>
        <select
          id="vol-availability"
          value={availability}
          onChange={(e) => setAvailability(e.target.value)}
          className={inputClass}
        >
          <option value="">Select an option...</option>
          <option value="Weekends Only">Weekends Only</option>
          <option value="Weekdays Only">Weekdays Only</option>
          <option value="Both">Both Weekdays and Weekends</option>
          <option value="Flexible">Flexible</option>
        </select>
      </div>

      <TurnstileWidget onVerify={handleVerify} />

      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={contactOptin}
          onChange={(e) => setContactOptin(e.target.checked)}
          className="mt-0.5 h-4 w-4 rounded border-gray-300 text-[#006b6b] focus:ring-[#008080]"
        />
        <span className="text-sm text-gray-700">
          Fountain of Grace may contact me. I can opt out anytime.
        </span>
      </label>

      <p className="text-xs text-[#595959] leading-relaxed border border-gray-100 rounded-lg bg-gray-50 px-4 py-3">
        Your information is collected by Fountain of Grace International (NPO 316-193) for the
        purpose of connecting you with volunteer opportunities. Data is stored securely and is
        not shared with or sold to any third party. You may request access, correction, or
        deletion at any time by emailing{' '}
        <a href="mailto:info@fountaingrace.org" className="text-[#006b6b] underline">
          info@fountaingrace.org
        </a>
        . By submitting you consent to this in line with POPIA. See our{' '}
        <Link href="/privacy-policy" className="text-[#006b6b] underline">
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
        {loading ? 'Submitting...' : 'Submit Volunteer Application'}
      </button>
    </form>
  )
}
