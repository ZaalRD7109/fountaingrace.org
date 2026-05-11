'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

type Sermon = {
  slug: string
  title: string
  date: string
  dateDisplay: string
  intro: string
}

export default function SermonsFilter({ sermons }: { sermons: Sermon[] }) {
  const [search, setSearch] = useState('')
  const [year, setYear] = useState<number | null>(null)

  const years = useMemo(() => {
    const set = new Set(sermons.map(s => parseInt(s.date.slice(0, 4))))
    return Array.from(set).sort((a, b) => b - a)
  }, [sermons])

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim()
    return sermons.filter(s => {
      if (year && !s.date.startsWith(String(year))) return false
      if (!q) return true
      return s.title.toLowerCase().includes(q) || s.intro.toLowerCase().includes(q)
    })
  }, [sermons, search, year])

  const isFiltered = search.trim().length > 0 || year !== null

  return (
    <>
      {/* Search + year filter bar */}
      <div className="bg-white border-b border-gray-100 px-4 sm:px-6 py-5 sticky top-0 z-10 shadow-sm">
        <div className="max-w-4xl mx-auto space-y-3">

          {/* Search input */}
          <div className="relative">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4"
              fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search messages by topic or keyword..."
              className="w-full pl-9 pr-10 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#2a9df4] focus:ring-1 focus:ring-[#2a9df4]"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 text-xl leading-none"
                aria-label="Clear search"
              >
                &times;
              </button>
            )}
          </div>

          {/* Year filter pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-gray-400 mr-1">Year:</span>
            <button
              onClick={() => setYear(null)}
              className={`px-3 py-1 rounded-full text-xs font-semibold border transition-colors ${
                year === null
                  ? 'bg-[#008080] text-white border-[#008080]'
                  : 'bg-white text-[#555] border-gray-200 hover:border-[#008080] hover:text-[#008080]'
              }`}
            >
              All
            </button>
            {years.map(y => (
              <button
                key={y}
                onClick={() => setYear(year === y ? null : y)}
                className={`px-3 py-1 rounded-full text-xs font-semibold border transition-colors ${
                  year === y
                    ? 'bg-[#008080] text-white border-[#008080]'
                    : 'bg-white text-[#555] border-gray-200 hover:border-[#008080] hover:text-[#008080]'
                }`}
              >
                {y}
              </button>
            ))}

            {isFiltered && (
              <span className="ml-auto text-xs text-[#555]">
                {filtered.length} of {sermons.length} messages
              </span>
            )}
          </div>

        </div>
      </div>

      {/* Sermon cards */}
      <section className="bg-gray-50 py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-[#555] mb-4">No messages match your search.</p>
              <button
                onClick={() => { setSearch(''); setYear(null) }}
                className="text-[#008080] font-semibold text-sm hover:underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              {filtered.map(post => (
                <article
                  key={post.slug}
                  className="bg-white rounded-xl border border-gray-100 p-6 sm:p-8 hover:shadow-md transition-shadow"
                >
                  <time
                    dateTime={post.date}
                    className="text-xs font-semibold text-[#008080] uppercase tracking-wider"
                  >
                    {post.dateDisplay}
                  </time>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-2 mb-4 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-[#595959] leading-relaxed mb-6">{post.intro}</p>
                  <Link
                    href={`/sermons/${post.slug}`}
                    className="text-[#008080] font-semibold text-sm hover:underline"
                    aria-label={`Read full message: ${post.title}`}
                  >
                    Read More &rarr;
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
