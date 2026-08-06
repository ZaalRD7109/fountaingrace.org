import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Is staying in a painful relationship really love or just fear?",
  description: "You forgive. Again. They hurt you. Again. It's a cycle - like the Pretoria wind that never stops blowing. Fountain of Grace International, Pretoria North.",
  robots: 'index, follow',
  alternates: { canonical: "https://www.fountaingrace.org/devotional/is-staying-in-a-painful-relationship-really-love-or-just-fear" },
  openGraph: {
    title: "Is staying in a painful relationship really love or just fear?",
    description: "You forgive. Again. They hurt you. Again. It's a cycle - like the Pretoria wind that never stops blowing. Fountain of Grace International, Pretoria North.",
    type: 'article',
    images: [{ url: "https://www.fountaingrace.org/devotional-cards/is-staying-in-a-painful-relationship-really-love-or-just-fear.jpg", width: 1080, height: 1350, alt: "Is staying in a painful relationship really love or just fear? - Fountain of Grace International" }],
    url: "https://www.fountaingrace.org/devotional/is-staying-in-a-painful-relationship-really-love-or-just-fear",
  },
  twitter: { card: 'summary_large_image', title: "Is staying in a painful relationship really love or just fear?", description: "You forgive. Again. They hurt you. Again. It's a cycle - like the Pretoria wind that never stops blowing. Fountain of Grace International, Pretoria North.", images: ["https://www.fountaingrace.org/devotional-cards/is-staying-in-a-painful-relationship-really-love-or-just-fear.jpg"] },
}

const jsonLd = [{"@context": "https://schema.org", "@type": "Article", "headline": "Is staying in a painful relationship really love or just fear?", "description": "You forgive. Again. They hurt you. Again. It's a cycle - like the Pretoria wind that never stops blowing. Fountain of Grace International, Pretoria North.", "image": "https://www.fountaingrace.org/devotional-cards/is-staying-in-a-painful-relationship-really-love-or-just-fear.jpg", "author": {"@type": "Person", "name": "Pastor Ricardo Zaal"}, "publisher": {"@type": "Church", "name": "Fountain of Grace International", "address": {"@type": "PostalAddress", "streetAddress": "323 B Danie Theron Street", "addressLocality": "Pretoria North", "addressRegion": "Gauteng", "addressCountry": "ZA"}}, "datePublished": "2026-05-31T06:00:00+02:00", "dateModified": "2026-05-31T06:00:00+02:00", "mainEntityOfPage": "https://www.fountaingrace.org/devotional/is-staying-in-a-painful-relationship-really-love-or-just-fear", "url": "https://www.fountaingrace.org/devotional/is-staying-in-a-painful-relationship-really-love-or-just-fear", "isPartOf": {"@type": "CreativeWorkSeries", "name": "FGI Daily Devotional", "url": "https://www.fountaingrace.org/devotional"}}, {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fountaingrace.org"}, {"@type": "ListItem", "position": 2, "name": "Daily Devotional", "item": "https://www.fountaingrace.org/devotional"}, {"@type": "ListItem", "position": 3, "name": "Is staying in a painful relationship really love or just fear?", "item": "https://www.fountaingrace.org/devotional/is-staying-in-a-painful-relationship-really-love-or-just-fear"}]}]

export default function DevotionalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article>
        <header
          className="pt-14 pb-12 px-4 sm:px-6 text-white"
          style={{ background: 'linear-gradient(145deg, #04302f 0%, #008080 100%)' }}
        >
          <div className="max-w-2xl mx-auto">
            <p className="text-white text-sm font-semibold uppercase tracking-wider mb-3">
              Daily Devotional · Day 151 · Fountain of Grace International
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              {"Is staying in a painful relationship really love or just fear?"}
            </h1>
            <p className="text-white text-sm mt-4">Pretoria North · 31 May 2026</p>
          </div>
        </header>

        <section className="bg-white pt-10 pb-2 px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <img
              src="https://www.fountaingrace.org/devotional-cards/is-staying-in-a-painful-relationship-really-love-or-just-fear.jpg"
              alt="Is staying in a painful relationship really love or just fear? - Fountain of Grace International"
              width={1080}
              height={1350}
              loading="lazy"
              decoding="async"
              className="w-full max-w-[340px] mx-auto rounded-xl shadow-sm"
            />
          </div>
        </section>

        <section className="bg-white py-10 px-4 sm:px-6">
          <div className="max-w-2xl mx-auto space-y-6">

            <blockquote className="border-l-4 border-[#FFD600] pl-5 py-3 my-8 bg-[#f0fafa] rounded-r-xl">
              <p className="text-[#0d6fbf] font-semibold text-lg italic leading-relaxed">&quot;{"And whosoever shall not receive you, nor hear your words, when ye depart out of that house or city, shake off the dust of your feet."}&quot;</p>
              <cite className="text-[#555] text-sm not-italic mt-2 block">- {"Matthew 10:14 (KJV)"}</cite>
            </blockquote>
            <div className="text-[#555] leading-relaxed text-lg whitespace-pre-wrap">{"You forgive. Again. They hurt you. Again. It's a cycle - like the Pretoria wind that never stops blowing. You think you're just loving them, but deep down, you're scared of what lies on the other side of letting go.\n\nLet's get real. It's not just love keeping you there. It's fear. Fear of facing the space that will be left behind. You pretend it's strength, but it's a chain, locking you into a moment that's long turned sour. You wonder if this is your cross to bear, but is it? Some wounds are not from the nails of Christ but the hands of men.\n\nChrist didn't say to be a doormat. He said in Matthew 10:14, \"Shake off the dust of your feet.\" Letting go isn't failure - it's freedom. Freedom for both of you to find peace, be it together or apart.\n\nAre you holding the relationship or is the relationship holding you?\n\nBlessings - Fountain of Grace International"}</div>
          </div>
        </section>

        <section className="bg-white py-10 px-4 sm:px-6 border-t border-gray-100">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-xl font-bold text-[#1a1a1a] mb-2">Send this to someone who needs it</h2>
            <p className="text-[#555] mb-5">One message can reach someone you cannot. Pass it on.</p>
            <a href="https://wa.me/?text=I%20thought%20this%20may%20encourage%20you%3A%20https%3A%2F%2Fwww.fountaingrace.org%2Fdevotional%2Fis-staying-in-a-painful-relationship-really-love-or-just-fear%3Futm_source%3Dwhatsapp%26utm_medium%3Dshare%26utm_campaign%3Ddevotional" target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold text-lg px-7 py-4 rounded-xl hover:bg-[#1ebe5d] transition-colors w-full sm:w-auto">
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden="true"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.821 11.821 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.477-.911zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
              Share on WhatsApp
            </a>
            <p className="mt-6">
              <a href="https://wa.me/27752592555" className="text-teal-700 underline text-base">Need prayer? Send us a prayer request</a>
            </p>
          </div>
        </section>

        <section className="bg-[#008080] py-12 px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Come and worship with us in Pretoria North</h2>
            <p className="text-white mb-7">Every Sunday at 09:00. Fountain of Grace International, 323 B Danie Theron Street, Pretoria North.</p>
            <Link href="/plan-your-visit" className="btn-primary">Plan Your Visit</Link>
          </div>
        </section>

        <section className="bg-white py-8 px-4 sm:px-6 text-center">
          <Link href="/devotional" className="text-[#0d6fbf] font-semibold underline">Read more daily devotionals</Link>
        </section>
      </article>
    </>
  )
}
