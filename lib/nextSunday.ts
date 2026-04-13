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
