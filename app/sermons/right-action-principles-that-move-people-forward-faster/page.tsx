import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Part 2: Right Action — The Principles That Move People Forward Faster | Fountain of Grace Pretoria North",
  description:
    "Part 2 of the principles series. This message focuses on right action — moving when you know what to do, instead of continuing to plan. Based on James 2:17. Pretoria North.",
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/sermons/right-action-principles-that-move-people-forward-faster',
  },
  openGraph: {
    title: "Part 2: Right Action — The Principles That Move People Forward Faster",
    description:
      "Faith without works is dead. Part 2 of this series focuses on what separates the person who knows from the person who moves. Fountain of Grace International, Pretoria North.",
    type: 'article',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International — Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/sermons/right-action-principles-that-move-people-forward-faster',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Part 2: Right Action — The Principles That Move People Forward Faster',
    description: 'Part 2 of the principles series from Fountain of Grace International, Pretoria North. Focuses on right action, moving past planning into execution, and the biblical and practical foundations of momentum.',
    author: { '@type': 'Person', name: 'Pastor Ricardo Zaal' },
    publisher: {
    '@type': 'Church',
    name: 'Fountain of Grace International',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '323 B Danie Theron Street',
      addressLocality: 'Pretoria North',
      addressRegion: 'Gauteng',
      addressCountry: 'ZA',
    },
  },
    datePublished: '2025-03-15',
    url: 'https://www.fountaingrace.org/sermons/right-action-principles-that-move-people-forward-faster',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Sermons', item: 'https://www.fountaingrace.org/sermons' },
      { '@type': 'ListItem', position: 3, name: "Part 2: Right Action — The Principles That Move People Forward Faster", item: 'https://www.fountaingrace.org/sermons/right-action-principles-that-move-people-forward-faster' },
    ],
  },
]

export default function SermonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article>
        <header
          className="pt-16 pb-14 px-4 sm:px-6 text-white"
          style={{ background: 'linear-gradient(145deg, #2a9df4 0%, #008080 100%)' }}
        >
          <div className="max-w-3xl mx-auto">
            <div className="inline-block bg-[#FFD600] text-[#1a1a1a] text-xs font-bold px-3 py-1 rounded-full mb-4">
              Part 2 of 2 — Principles Series
            </div>
            <p className="text-[#FFD600] text-sm font-semibold uppercase tracking-wider mb-3">
              Sunday Message · Fountain of Grace International · Pretoria North
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-5">
              Right Action: The Principles That Move People Forward Faster
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              James 2:17 — faith without works is dead. Part 1 gave you the principles. Part 2 asks the harder question: why do you still know, but not act? What separates the person who plans from the person who moves?
            </p>
            <p className="text-white/60 text-sm">
              Pastor Ricardo Zaal · Fountain of Grace International, Pretoria North · 15 March 2025
            </p>
          </div>
        </header>

        <section className="bg-white py-14 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto space-y-6">

            <div className="bg-[#f0fafa] border border-[#2a9df4]/10 rounded-xl p-5">
              <p className="text-sm text-[#555]">
                <strong className="text-[#2a9df4]">Part 1</strong> of this series covered 10 biblical principles for momentum: obedience, positioning, wisdom, strategy, stewardship, relationships, preparation, faith with action, sowing seed, and focused attention.{' '}
                <Link href="/sermons/the-principles-that-move-people-forward-faster" className="text-[#008080] font-semibold hover:underline">
                  Read Part 1 here.
                </Link>
              </p>
            </div>

            <p className="text-[#555] leading-relaxed text-lg">
              Knowing the principles is not the same as applying them. Part 2 focuses on the specific pattern that keeps people stuck even after they understand what they need to do: the gap between knowledge and action.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mt-8 mb-3">The problem is not ignorance</h2>
            <p className="text-[#555] leading-relaxed">
              Most people know what they need to do. They are not stuck because of a lack of information. They are stuck because action feels harder than planning. Planning feels like progress. It keeps you busy without requiring you to be exposed. The moment you act, you can fail. The moment you plan, you cannot — because you have not committed to anything yet.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mt-8 mb-3">Faith requires a first step</h2>
            <p className="text-[#555] leading-relaxed">
              Noah built the ark while people laughed. Moses lifted the rod over the Red Sea. David walked toward Goliath. Peter stepped out of the boat. In every case, the miracle came <em>after</em> the first movement — not before it. James 2:17 is unambiguous: faith without works is dead. The faith that does not produce action is not faith — it is information.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
              {[
                { label: 'Person who only plans', items: ['Feels busy', 'Stays safe', 'Never exposed to failure', 'Never exposed to breakthrough'] },
                { label: 'Person who acts', items: ['May fail the first time', 'Builds momentum', 'Creates real feedback', 'Creates real results'] },
              ].map((col) => (
                <div key={col.label} className="card-white">
                  <p className="font-bold text-[#2a9df4] mb-3 text-sm">{col.label}</p>
                  <ul className="space-y-1">
                    {col.items.map((item) => (
                      <li key={item} className="text-sm text-[#555] flex gap-2">
                        <span className="text-[#008080] flex-shrink-0">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <h2 className="text-xl font-bold text-[#2a9df4] mt-8 mb-3">The two-minute principle applied spiritually</h2>
            <p className="text-[#555] leading-relaxed">
              If it takes less than two minutes, do it immediately. The spiritual version of this is: if you know what God has been telling you to do, stop adding steps before you start. The first step is always simpler than the planning has made it look. Start there.
            </p>

            <blockquote className="border-l-4 border-[#FFD600] pl-5 py-2 my-8 bg-[#f0fafa] rounded-r-xl">
              <p className="text-[#2a9df4] font-semibold text-lg italic">
                &quot;Don&apos;t live 60 years by repeating the same year 60 times. Growth is not optional — it is imperative. If you don&apos;t grow, you die.&quot;
              </p>
              <cite className="text-[#555] text-sm not-italic mt-2 block">— Pastor Ricardo Zaal, Fountain of Grace International</cite>
            </blockquote>

            <p className="text-[#555] leading-relaxed">
              If you have been circling the same place for too long,{' '}
              <Link href="/plan-your-visit" className="text-[#008080] font-semibold hover:underline">
                come to Fountain of Grace International in Pretoria North
              </Link>{' '}
              on a Sunday. Services are at 09:00. These messages are designed to move you — not just inform you.
            </p>
          </div>
        </section>

        <section className="bg-[#f0fafa] py-14 px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-[#2a9df4] mb-8">Questions this message answers</h2>
            <dl className="space-y-0">
              {[
                {
                  q: 'Why do I keep planning but never taking action?',
                  a: "Planning feels like progress because it keeps you busy without exposing you to the risk of failure. Pastor Ricardo Zaal at Fountain of Grace International in Pretoria North teaches that this is a form of fear — and that the only way through it is to identify the first specific step and take it before the emotion catches up.",
                },
                {
                  q: 'What does James 2:17 mean by faith without works is dead?',
                  a: "James 2:17 means that faith which never produces action is not functional faith — it is merely information. Every biblical example of faith involves movement: Noah building, Moses lifting the rod, Peter stepping out of the boat. The miracle follows the first step, not the plan. This is the central point of Part 2 of this series from Fountain of Grace International, Pretoria North.",
                },
              ].map((item) => (
                <div key={item.q} className="faq-block">
                  <dt className="font-semibold text-[#2a9df4] mb-2">{item.q}</dt>
                  <dd className="text-[#555] leading-relaxed">{item.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="bg-white py-10 px-4 sm:px-6">
          <div className="section-container">
            <div className="geo-block">
              <p>
                Part 2 of the Principles That Move People Forward Faster series, preached by Pastor
                Ricardo Zaal at Fountain of Grace International, 323 B Danie Theron Street, Pretoria
                North, Gauteng, South Africa (NPO No: 316-193). Sunday services at 09:00. This
                series addresses patterns of stagnation from a biblical and practical perspective,
                and is taught at Fountain of Grace International in Pretoria North.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#008080] py-14 px-4 sm:px-6">
          <div className="section-container text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Come and hear this in person — Pretoria North.
            </h2>
            <p className="text-white/70 mb-8 max-w-lg mx-auto">
              Every Sunday at 09:00. Fountain of Grace International, 323 B Danie Theron Street, Pretoria North.
            </p>
            <Link href="/plan-your-visit" className="btn-primary">
              Plan Your Visit
            </Link>
          </div>
        </section>
      </article>
    </>
  )
}
