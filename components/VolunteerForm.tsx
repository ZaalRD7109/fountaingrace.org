'use client'

import { useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import TurnstileWidget from '@/components/TurnstileWidget'
import { EDGE_BASE } from '@/lib/edgeBase'

export default function VolunteerForm() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [skills, setSkills] = useState('')
  const [availability, setAvailability] = useState('')
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
        `${EDGE_BASE}/handle-volunteer-form`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name,
            email,
            phone: phone || null,
            skills: skills || null,
            availability: availability || null,
            turnstileToken,
          }),
        }
      )
      if (!res.ok) throw new Error('Submission failed')
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
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
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
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          id="vol-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="vol-phone" className={labelClass}>
          Phone / WhatsApp{' '}
          <span className="text-[#595959] font-normal text-xs">(optional)</span>
        </label>
        <input
          id="vol-phone"
          type="tel"
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

      <p className="text-xs text-[#595959] leading-relaxed border border-gray-100 rounded-lg bg-gray-50 px-4 py-3">
        Your information is collected by Fountain of Grace International (NPO 316-193) for the
        purpose of connecting you with volunteer opportunities. Data is stored securely and is
        not shared with or sold to any third party. You may request access, correction, or
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
        {loading ? 'Submitting...' : 'Submit Volunteer Application'}
      </button>
    </form>
  )
}
