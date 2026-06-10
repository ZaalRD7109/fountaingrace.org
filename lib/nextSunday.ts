/**
 * Returns the date of the next upcoming Sunday (or today if today is Sunday)
 * as an ISO string: "YYYY-MM-DD"
 */
export function getNextSundayISO(): string {
  const today = new Date()
  const dayOfWeek = today.getDay() // 0 = Sunday
  const daysUntilSunday = dayOfWeek === 0 ? 0 : 7 - dayOfWeek
  const nextSunday = new Date(today)
  nextSunday.setDate(today.getDate() + daysUntilSunday)
  return nextSunday.toISOString().split('T')[0]
}

/**
 * Returns the next Sunday formatted for display: "Sunday, 13 April 2025"
 */
export function getNextSundayDisplay(): string {
  const today = new Date()
  const dayOfWeek = today.getDay()
  const daysUntilSunday = dayOfWeek === 0 ? 0 : 7 - dayOfWeek
  const nextSunday = new Date(today)
  nextSunday.setDate(today.getDate() + daysUntilSunday)
  return nextSunday.toLocaleDateString('en-ZA', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

/**
 * Returns the next `count` upcoming Sundays as { iso, label } pairs, e.g.
 * { iso: "2026-06-21", label: "Sunday, 21 June 2026" }.
 * Services are Sunday-only, so the Plan Your Visit form offers these as a
 * dropdown - no one can pick a weekday by mistake. Dates use local components
 * (not toISOString) so the day never shifts for a SAST visitor.
 */
export function getUpcomingSundays(count: number): { iso: string; label: string }[] {
  const out: { iso: string; label: string }[] = []
  const today = new Date()
  const dayOfWeek = today.getDay()
  const daysUntilSunday = dayOfWeek === 0 ? 0 : 7 - dayOfWeek
  const first = new Date(today)
  first.setDate(today.getDate() + daysUntilSunday)
  for (let i = 0; i < count; i++) {
    const d = new Date(first)
    d.setDate(first.getDate() + i * 7)
    const iso = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
    const label = d.toLocaleDateString('en-ZA', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
    out.push({ iso, label })
  }
  return out
}
