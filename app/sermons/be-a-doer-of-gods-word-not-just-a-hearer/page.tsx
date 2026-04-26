import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Be a Doer of God's Word, Not Just a Hearer | Fountain of Grace International Pretoria North",
  description:
    "James 1:21-25 — the person who hears and forgets is like a man who looks in a mirror and walks away. This message calls for active response to truth. Pretoria North.",
  robots: 'index, follow',
  alternates: {
    canonical: "https://www.fountaingrace.org/sermons/be-a-doer-of-gods-word-not-just-a-hearer",
  },
  openGraph: {
    title: "Be a Doer of God's Word, Not Just a Hearer",
    description:
      "James 1:21-25. What is the difference between a person who hears and a person who does? Fountain of Grace International, Pretoria North.",
    type: 'article',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International — Church in Pretoria North' }],
    url: "https://www.fountaingrace.org/sermons/be-a-doer-of-gods-word-not-just-a-hearer",
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Be a Doer of God\'s Word, Not Just a Hearer',
    description: 'Based on James 1:21-25. Pastor Ricardo Zaal teaches on the difference between passive hearing and active doing of God\'s word — and the blessing that comes to those who act.',
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
    datePublished: '2025-02-16',
    url: 'https://www.fountaingrace.org/sermons/be-a-doer-of-gods-word-not-just-a-hearer',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Sermons', item: 'https://www.fountaingrace.org/sermons' },
      { '@type': 'ListItem', position: 3, name: "Be a Doer of God's Word, Not Just a Hearer", item: 'https://www.fountaingrace.org/sermons/be-a-doer-of-gods-word-not-just-a-hearer' },
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
            <p className="text-[#FFD600] text-sm font-semibold uppercase tracking-wider mb-4">
              Sunday Message · Fountain of Grace International · Pretoria North
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-5">
              Be a Doer of God&apos;s Word, Not Just a Hearer
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              James 1:21-25. The person who only hears and does not act is like someone who looks in a mirror, sees what they look like, and immediately forgets. The one who acts — this one will be blessed in what they do.
            </p>
            <p className="text-white/60 text-sm">
              Pastor Ricardo Zaal · Fountain of Grace International, Pretoria North · 16 February 2025
            </p>
          </div>
        </header>

        <section className="bg-white py-14 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-[#555] leading-relaxed text-lg">
              James 1:21-25 (NKJV) — <em>&quot;Therefore, lay aside all filthiness and overflow of wickedness, and receive with meekness the implanted word, which is able to save your souls. But be doers of the word, and not hearers only, deceiving yourselves.&quot;</em>
            </p>

            <p className="text-[#555] leading-relaxed">
              The person who hears and does not act is not neutral. They are actively deceiving themselves. James does not say they are uninformed — he says they are deceived. They have the knowledge. They have heard truth. But they have walked away unchanged.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mt-8 mb-3">The mirror illustration</h2>
            <p className="text-[#555] leading-relaxed">
              James uses one of the most vivid images in the New Testament: a man who looks at his face in a mirror, then walks away and immediately forgets what he looked like. That is what passive hearing does. You sit in a service, you receive truth, you feel something move — and by the time you reach your car, it is already fading.
            </p>
            <p className="text-[#555] leading-relaxed">
              The person who looks into the perfect law of liberty and <em>continues in it</em> — who does not forget but acts — this one will be blessed in what they do. The blessing is attached to the doing, not the hearing.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mt-8 mb-3">What does active receiving look like?</h2>
            <div className="space-y-4">
              {[
                { title: 'Lay aside', body: 'The word calls you to put something down before you can pick something up. You cannot receive with full hands. Laying aside means actively clearing out what has been filling the space where the word should go.' },
                { title: 'Receive with meekness', body: 'Meekness is not weakness. It is teachability — the posture of someone who is ready to be corrected, shaped, and directed. Pride blocks the implanted word from taking root.' },
                { title: 'Continue in it', body: 'Continuing in the law of liberty means staying under it. Not walking away. Not hearing on Sunday and living contrary on Monday. The word you received is supposed to accompany your decisions throughout the week.' },
              ].map((item) => (
                <div key={item.title} className="card-teal-border">
                  <p className="font-bold text-[#2a9df4] mb-1">{item.title}</p>
                  <p className="text-[#555] text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>

            <blockquote className="border-l-4 border-[#FFD600] pl-5 py-2 my-8 bg-[#f0fafa] rounded-r-xl">
              <p className="text-[#2a9df4] font-semibold text-lg italic">
                &quot;This one will be blessed in what he does.&quot;
              </p>
              <cite className="text-[#555] text-sm not-italic mt-1 block">— James 1:25</cite>
            </blockquote>

            <p className="text-[#555] leading-relaxed">
              If you are in Pretoria North and you are ready to hear something that challenges you to actually move,{' '}
              <Link href="/plan-your-visit" className="text-[#008080] font-semibold hover:underline">
                plan your visit to Fountain of Grace International
              </Link>
              . Services are every Sunday at 09:00.
            </p>
          </div>
        </section>

        <section className="bg-[#f0fafa] py-14 px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-[#2a9df4] mb-8">Questions this message answers</h2>
            <dl className="space-y-0">
              {[
                {
                  q: "What is James 1:22 talking about when it says 'doers of the word'?",
                  a: "James 1:22 says to be doers of the word and not hearers only, warning that those who only hear are deceiving themselves. Pastor Ricardo Zaal at Fountain of Grace International, Pretoria North, teaches that the blessing in James 1:25 is attached to doing — not to merely receiving information.",
                },
                {
                  q: 'What is the difference between hearing the word and receiving the word?',
                  a: "Hearing is passive — it happens without any change to behaviour. Receiving with meekness, as James 1:21 describes, is an active posture of laying aside what is already in you, being teachable, and continuing under what you receive. The message from Fountain of Grace International in Pretoria North draws this distinction clearly.",
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
                This message was preached by Pastor Ricardo Zaal at Fountain of Grace International,
                323 B Danie Theron Street, Pretoria North, Gauteng, South Africa. Fountain of Grace
                International (NPO No: 316-193) holds weekly Sunday services at 09:00. Teachings are
                practical and scripture-grounded, designed to connect with the everyday life of people
                in Pretoria North.
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
