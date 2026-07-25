import type { Metadata } from 'next'
import Link from 'next/link'
import { devotionals } from './_devotionals'

export const metadata: Metadata = {
  title: 'Daily Devotional - Fountain of Grace International',
  description: 'A short daily devotional from Fountain of Grace International, Pretoria North. One real question, answered from scripture, every day. Read, be encouraged, and share.',
  robots: 'index, follow',
  alternates: { canonical: 'https://www.fountaingrace.org/devotional' },
  openGraph: {
    title: 'Daily Devotional - Fountain of Grace International',
    description: 'One real question, answered from scripture, every day. Pretoria North.',
    type: 'website',
    url: 'https://www.fountaingrace.org/devotional',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'FGI Daily Devotional',
  description: 'A daily devotional from Fountain of Grace International, Pretoria North.',
  url: 'https://www.fountaingrace.org/devotional',
  hasPart: devotionals.slice(0, 60).map((d) => ({
    '@type': 'Article',
    headline: d.headline,
    url: 'https://www.fountaingrace.org/devotional/' + d.slug,
    datePublished: d.date,
  })),
}

export default function DevotionalHub() {
  const [today, ...rest] = devotionals
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="bg-white">
        <header className="pt-14 pb-10 px-4 sm:px-6 text-white" style={{ background: 'linear-gradient(145deg, #2a9df4 0%, #008080 100%)' }}>
          <div className="max-w-3xl mx-auto">
            <p className="text-[#FFD600] text-sm font-semibold uppercase tracking-wider mb-3">Fountain of Grace International · Pretoria North</p>
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">Daily Devotional</h1>
            <p className="text-white/80 text-lg mt-4">One real question, answered from scripture, every day. Read it, let it lift you, and send it to someone who needs it.</p>
          </div>
        </header>

        {today && (
          <section className="px-4 sm:px-6 py-10 border-b border-gray-100">
            <div className="max-w-3xl mx-auto">
              <p className="text-[#008080] text-xs font-bold uppercase tracking-wider mb-4">Today</p>
              <Link href={'/devotional/' + today.slug} className="block sm:flex gap-6 group">
                {today.card && (
                  <img src={today.card} alt={today.headline} width={1080} height={1350} loading="eager" className="w-full sm:w-48 shrink-0 rounded-xl mb-4 sm:mb-0" />
                )}
                <div>
                  <h2 className="text-2xl font-bold text-[#1a1a1a] group-hover:text-[#2a9df4] leading-snug">{today.headline}</h2>
                  {today.verseRef && <p className="text-[#008080] font-semibold mt-2">{today.verseRef} (KJV)</p>}
                  <p className="text-[#999] text-sm mt-2">{today.dateDisplay}</p>
                </div>
              </Link>
            </div>
          </section>
        )}

        <section className="px-4 sm:px-6 py-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-lg font-bold text-[#1a1a1a] mb-6">More devotionals</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {rest.map((d) => (
                <Link key={d.slug} href={'/devotional/' + d.slug} className="block rounded-xl border border-gray-100 p-5 hover:border-[#2a9df4] hover:shadow-sm transition group">
                  <h3 className="font-bold text-[#1a1a1a] group-hover:text-[#2a9df4] leading-snug">{d.headline}</h3>
                  {d.verseRef && <p className="text-[#008080] text-sm font-semibold mt-2">{d.verseRef} (KJV)</p>}
                  <p className="text-[#999] text-xs mt-2">{d.dateDisplay}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
