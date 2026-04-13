'use client'

import { useState, useEffect } from 'react'

function getNextSunday() {
  const today = new Date()
  const day = today.getDay()
  const diff = day === 0 ? 0 : 7 - day
  const next = new Date(today)
  next.setDate(today.getDate() + diff)
  return next
}

export function NextSundayISO(): string {
  return getNextSunday().toISOString().split('T')[0]
}

export default function NextSundayDateInput() {
  const [iso, setIso]         = useState('')
  const [display, setDisplay] = useState('')

  useEffect(() => {
    const d = getNextSunday()
    setIso(d.toISOString().split('T')[0])
    setDisplay(
      d.toLocaleDateString('en-ZA', {
        weekday: 'long',
        day:     'numeric',
        month:   'long',
        year:    'numeric',
      })
    )
  }, [])

  return (
    <div>
      <label
        htmlFor="visit-date"
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        Planned Visit Date <span className="text-red-500" aria-hidden="true">*</span>
      </label>
      <input
        id="visit-date"
        name="visitDate"
        type="date"
        required
        value={iso}
        min={iso}
        onChange={(e) => setIso(e.target.value)}
        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FFD600] focus:border-transparent"
      />
      {display && (
        <p className="text-xs text-[#7d7d7d] mt-1">Next Sunday: {display}</p>
      )}
    </div>
  )
}
