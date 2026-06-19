import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: " | Fountain of Grace International",
  description: "",
  robots: 'index, follow',
  alternates: { canonical: "https://www.fountaingrace.org/sermons/" },
  openGraph: {
    title: "",
    description: "",
    type: 'article',
    images: [{ url: "https://img.youtube.com/vi/662IsjaB4zU/maxresdefault.jpg", width: 1280, height: 720, alt: " - Fountain of Grace International" }],
    url: "https://www.fountaingrace.org/sermons/",
  },
}

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "",
    "description": "",
    "author": {
      "@type": "Person",
      "name": "Pastor Ricardo Zaal"
    },
    "publisher": {
      "@type": "Church",
      "name": "Fountain of Grace International",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "323 B Danie Theron Street",
        "addressLocality": "Pretoria North",
        "addressRegion": "Gauteng",
        "addressCountry": "ZA"
      }
    },
    "datePublished": "2022-06-19T12:00:00+02:00",
    "url": "https://www.fountaingrace.org/sermons/"
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.fountaingrace.org"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Sermons",
        "item": "https://www.fountaingrace.org/sermons"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "",
        "item": "https://www.fountaingrace.org/sermons/"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": []
  },
  {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "",
    "description": "",
    "thumbnailUrl": "https://img.youtube.com/vi/662IsjaB4zU/maxresdefault.jpg",
    "uploadDate": "2022-06-19T12:00:00+02:00",
    "embedUrl": "https://www.youtube.com/embed/662IsjaB4zU",
    "url": "https://www.fountaingrace.org/sermons/",
    "author": {
      "@type": "Person",
      "name": "Pastor Ricardo Zaal"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Fountain of Grace International",
      "url": "https://www.fountaingrace.org"
    }
  }
]

const sermonTranscript = "Thank you. Thank you. Thank you. Thank you. Thank you Thank you Thank you. Thank you. Thank you. Thank you. Thank you Thank you. Thank you. Thank you. Thank you. Thank you Thank you. Thank you. Thank you. Thank you. Thank you. Thank you. Thank you. Thank you. Thank you. Thank you Thank you Thank you. Thank you. Thank you. Thank you. Thank you Thank you. Thank you. Thank you. Thank you. Thank you Thank you. Thank you. Thank you. Thank you. Thank you. Thank you. Thank you. Thank you. Thank you. Thank you Thank you Thank you. Thank you. Thank you. Thank you Thank you Thank you. Thank you. Thank you. Thank you Thank you Thank you. Thank you. Thank you. Thank you. Thank you."

export default function SermonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article>
        <header className="pt-16 pb-14 px-4 sm:px-6 text-white" style={{ background: 'linear-gradient(145deg, #2a9df4 0%, #008080 100%)' }}>
          <div className="max-w-3xl mx-auto">
            <p className="text-[#FFD600] text-sm font-semibold uppercase tracking-wider mb-4">Sunday Message · Fountain of Grace International · Pretoria North</p>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-5">{""}</h1>
            <p className="text-white/80 text-lg leading-relaxed mb-4">{""}</p>
            <p className="text-white/60 text-sm">Pastor Ricardo Zaal · Fountain of Grace International, Pretoria North</p>
          </div>
        </header>
        <section className="bg-white pt-10 pb-2 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <iframe src="https://www.youtube.com/embed/662IsjaB4zU" title={""} className="absolute inset-0 w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
            <p className="text-[#555] text-sm mt-4 mb-2">Prefer reading? The full sermon notes are below.</p>
          </div>
        </section>
        <section className="bg-white py-14 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">

            <blockquote className="border-l-4 border-[#FFD600] pl-5 py-2 my-10 bg-[#f0fafa] rounded-r-xl">
              <p className="text-[#2a9df4] font-semibold text-lg italic">{"\"\""}</p>
              <cite className="text-[#555] text-sm not-italic mt-2 block">- Pastor Ricardo Zaal</cite>
            </blockquote>
            <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Key Takeaways</h2>
            <ol className="list-decimal list-inside space-y-3 text-[#555] leading-relaxed mb-6">

            </ol>
            <p className="text-[#555] leading-relaxed">If you are in or around Pretoria or Johannesburg,{' '}<Link href="/plan-your-visit" className="text-[#008080] font-semibold hover:underline">come and join us on a Sunday</Link>{' '}- these messages are preached live every week at Fountain of Grace International, 323 B Danie Theron Street, Pretoria North.</p>
          </div>
        </section>
        <section className="bg-gray-50 py-12 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-[#1a1a1a] mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">

            </div>
          </div>
        </section>
        <section className="bg-[#f0fafa] py-14 px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Hear the next message this Sunday</h2>
            <p className="text-[#555] leading-relaxed mb-7">Fountain of Grace International meets every Sunday at 09:00 at 323 B Danie Theron Street, Pretoria North. Come as you are.</p>
            <Link href="/plan-your-visit" className="inline-block bg-[#008080] text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:bg-[#006666] transition-colors w-full sm:w-auto">Come this Sunday at 09:00</Link>
            <p className="text-[#555] text-sm mt-6">Need prayer?{' '}<a href="https://wa.me/27752592555?text=I%20need%20prayer" target="_blank" rel="noopener noreferrer" className="text-[#008080] font-semibold underline">Send a prayer request</a></p>
          </div>
        </section>
        <section className="bg-white py-12 px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-xl font-bold text-[#1a1a1a] mb-2">Send this to someone who needs it</h2>
            <p className="text-[#555] mb-5">One message can reach someone you cannot. Pass it on.</p>
            <a href={"https://wa.me/?text=I%20thought%20this%20message%20may%20encourage%20you%3A%20https%3A//www.fountaingrace.org/sermons/%3Futm_source%3Dwhatsapp"} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold text-lg px-7 py-4 rounded-xl hover:bg-[#1ebe5d] transition-colors w-full sm:w-auto">
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden="true"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.821 11.821 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.477-.911zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
              Share on WhatsApp
            </a>
          </div>
        </section>
        <section className="bg-white py-10 px-4 sm:px-6 border-t border-gray-100">
          <div className="max-w-3xl mx-auto">
            <details className="group">
              <summary className="cursor-pointer text-[#2a9df4] font-semibold text-base select-none list-none flex items-center gap-2">
                <span className="inline-block transition-transform group-open:rotate-90">&#9658;</span>
                Read Full Sermon Transcript
              </summary>
              <div className="mt-6 text-[#555] text-sm leading-relaxed whitespace-pre-wrap">{sermonTranscript}</div>
            </details>
          </div>
        </section>
      </article>
    </>
  )
}
