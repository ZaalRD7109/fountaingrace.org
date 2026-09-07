import type { Metadata } from 'next'
import Link from 'next/link'
import { prayers } from './_prayers'

export const metadata: Metadata = {
  title: 'Fountain of Prayers - Weekly Prayers | Fountain of Grace International',
  description: 'A new set of prayers every Monday from Fountain of Grace International, Pretoria North. Prayers for strength, healing, peace, provision and wisdom, written in the words you can pray right now.',
  robots: 'index, follow',
  alternates: { canonical: 'https://www.fountaingrace.org/fountain-of-prayers' },
  openGraph: {
    title: 'Fountain of Prayers - Weekly Prayers',
    description: 'A new set of prayers every Monday, in the words you can pray right now. Pretoria North.',
    type: 'website',
    url: 'https://www.fountaingrace.org/fountain-of-prayers',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International - Church in Pretoria North' }],
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Fountain of Prayers',
    description: 'Weekly prayers from Fountain of Grace International, Pretoria North.',
    url: 'https://www.fountaingrace.org/fountain-of-prayers',
    hasPart: prayers.slice(0, 60).map((p) => ({
      '@type': 'Article',
      headline: p.title,
      url: 'https://www.fountaingrace.org/fountain-of-prayers/' + p.slug,
      datePublished: p.date,
    })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Fountain of Prayers', item: 'https://www.fountaingrace.org/fountain-of-prayers' },
    ],
  },
]

export default function PrayersHub() {
  const [latest, ...rest] = prayers
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="bg-white">
        <header className="pt-14 pb-10 px-4 sm:px-6 text-white" style={{ background: 'linear-gradient(145deg, #04302f 0%, #008080 100%)' }}>
          <div className="max-w-3xl mx-auto">
            <p className="text-white text-sm font-semibold uppercase tracking-wider mb-3">Fountain of Grace International · Pretoria North</p>
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight text-white">Fountain of Prayers</h1>
            <p className="text-white text-lg mt-4">A new set of prayers every Monday morning, written in the words you can pray right now. These are the prayers our church prays together every Thursday at 19:00. Pray them at home, pray them on the taxi, pray them at 3am.</p>
          </div>
        </header>

        <section className="px-4 sm:px-6 py-8">
          <div className="max-w-3xl mx-auto">
            <a href="https://wa.me/27752592555?text=Hi%20FGI%2C%20please%20pray%20for%20me.%20" target="_blank" rel="noopener noreferrer"
               className="flex items-center justify-center gap-3 bg-[#25D366] text-white font-extrabold text-lg px-6 py-5 rounded-2xl shadow-md hover:bg-[#1ebe5d] transition-colors text-center leading-snug">
              <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0" fill="currentColor" aria-hidden="true"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.821 11.821 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg>
              <span>Leave your prayer request on our WhatsApp and we will pray for you</span>
            </a>
          </div>
        </section>

        {latest && (
          <section className="px-4 sm:px-6 py-6 border-b border-gray-100">
            <div className="max-w-3xl mx-auto">
              <p className="text-[#006b6b] text-xs font-bold uppercase tracking-wider mb-4">This week</p>
              <Link href={'/fountain-of-prayers/' + latest.slug} className="block rounded-2xl border-2 border-[#008080] p-6 hover:shadow-md transition group">
                <h2 className="text-2xl font-bold text-[#1a1a1a] group-hover:text-[#0d6fbf] leading-snug">{latest.title}</h2>
                <p className="text-[#006b6b] font-semibold mt-2">{latest.theme} · {latest.scriptureRef}</p>
                <p className="text-[#595959] text-sm mt-2">{latest.weekLabel} · {latest.dateDisplay}</p>
              </Link>
            </div>
          </section>
        )}

        {rest.length > 0 && (
        <section className="px-4 sm:px-6 py-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-lg font-bold text-[#1a1a1a] mb-6">Earlier weeks</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {rest.map((p) => (
                <Link key={p.slug} href={'/fountain-of-prayers/' + p.slug} className="block rounded-xl border border-gray-100 p-5 hover:border-[#2a9df4] hover:shadow-sm transition group">
                  <h3 className="font-bold text-[#1a1a1a] group-hover:text-[#0d6fbf] leading-snug">{p.title}</h3>
                  <p className="text-[#006b6b] text-sm font-semibold mt-2">{p.theme} · {p.scriptureRef}</p>
                  <p className="text-[#595959] text-xs mt-2">{p.weekLabel} · {p.dateDisplay}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
        )}

        <section className="bg-[#f7fbfb] py-10 px-4 sm:px-6 border-t border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl font-bold text-[#1a1a1a] mb-2">Pray with us on a Thursday</h2>
            <p className="text-[#595959] mb-5">Every Thursday, 19:00 to 20:00, in Pretoria North. Worship, thanks, and the prayers on this page. Send us a WhatsApp and we will add you.</p>
            <a href="https://wa.me/27752592555?text=Hi%20FGI%2C%20I%20would%20like%20to%20join%20the%20Thursday%20prayer%20meeting." target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center justify-center gap-2 bg-[#008080] text-white font-bold text-lg px-7 py-4 rounded-xl hover:bg-[#006b6b] transition-colors w-full sm:w-auto">
              Join the Thursday prayer meeting
            </a>
          </div>
        </section>
      </main>
    </>
  )
}
