import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "What If Someone Else Finishes What Was Meant for You? | Fountain of Grace International Pretoria North",
  description:
    "You know your potential. You keep postponing. This message — based on Esther 4:14 — asks the uncomfortable question: what if your window closes? Pretoria North.",
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/sermons/what-if-someone-else-finishes-what-was-meant-for-you',
  },
  openGraph: {
    title: "What If Someone Else Finishes What Was Meant for You?",
    description:
      "The assignment does not wait. Based on Esther 4:14 and the story of Jonah. Preached by Pastor Ricardo Zaal at Fountain of Grace International, Pretoria North.",
    type: 'article',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International — Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/sermons/what-if-someone-else-finishes-what-was-meant-for-you',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'What If Someone Else Finishes What Was Meant for You?',
    description: 'Pastor Ricardo Zaal explores the difference between substitution and replacement, using Jonah, Saul, Esther, and the book of Revelation to challenge the listener to act before their window closes.',
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
    datePublished: '2026-02-22',
    url: 'https://www.fountaingrace.org/sermons/what-if-someone-else-finishes-what-was-meant-for-you',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Sermons', item: 'https://www.fountaingrace.org/sermons' },
      { '@type': 'ListItem', position: 3, name: "What If Someone Else Finishes What Was Meant for You?", item: 'https://www.fountaingrace.org/sermons/what-if-someone-else-finishes-what-was-meant-for-you' },
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
              What If Someone Else Finishes What Was Meant for You?
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              This message is not about religion. It is about life. You know you are capable of more. You keep postponing. What if the window closes?
            </p>
            <p className="text-white/60 text-sm">
              Pastor Ricardo Zaal · Fountain of Grace International, Pretoria North · 22 February 2026
            </p>
          </div>
        </header>

        <section className="bg-white pt-10 pb-2 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/jwUGYb3uuQI"
                title="What If Someone Else Finishes What Was Meant for You?"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-14 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#555] leading-relaxed text-lg mb-6">
              There is a difference between being substituted and being replaced. Pastor Ricardo unpacks both with precision — and challenges the listener to understand which one they are currently experiencing.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mt-10 mb-4">Substitution vs. Replacement</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              When a player is substituted in soccer, their position is still there. It is a correction, not a removal. Jonah ran from Nineveh — and God did not replace him. He sent a fish. The word of the Lord came to Jonah a <em>second time</em>. That is substitution: you are benched, corrected, but still in the game.
            </p>
            <p className="text-[#555] leading-relaxed">
              Replacement is different. With Saul, in 1 Samuel 15:26, Samuel declared: <em>&quot;The Lord has rejected you from being king over Israel.&quot;</em> Saul was still alive — but his authority was removed. David was anointed while Saul still sat on the throne. The mission had transferred. That is replacement.
            </p>

            <div className="card-teal-border my-8">
              <p className="text-[#2a9df4] font-semibold">
                The difference: substitution brings pressure to improve. Replacement brings the silence of distance — no more conviction, no more correction.
              </p>
            </div>

            <h2 className="text-xl font-bold text-[#2a9df4] mt-10 mb-4">Esther 4:14 — the full verse</h2>
            <p className="text-[#555] leading-relaxed">
              People use this verse as motivation: &quot;for such a time as this.&quot; But read the full passage. Mordecai is saying: if you hold your peace, help will come from another place — and <em>you and your father&apos;s house will be destroyed.</em> The church will go on. Ministry will go on. Progress will happen. The only question is whether it will happen through you or through someone else who said yes.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mt-10 mb-4">How to make sure life does not move on without you</h2>
            <ol className="space-y-4 text-[#555] mt-4">
              {[
                { n: '1', title: 'Act immediately.', body: 'Do not wait until you feel ready. James 1:22 — be a doer of the word, not just a hearer. Waiting for confidence is how the moment passes.' },
                { n: '2', title: "Stop editing God's plan.", body: "Jonah tried to rewrite his assignment by boarding a ship to Tarshish. You know what God has spoken. Stop editing it. Go where you were sent." },
                { n: '3', title: 'Accept correction.', body: 'Proverbs 3:7 — do not be wise in your own eyes. When correction comes, receive it. The person who refuses correction is the one who gets replaced.' },
                { n: '4', title: 'Finish what you start.', body: 'Ecclesiastes 7:8 — better is the end of a thing than its beginning. Inconsistency is what causes replacement. Finish what you started.' },
              ].map((item) => (
                <li key={item.n} className="flex gap-4">
                  <span className="bg-[#FFD600] text-[#1a1a1a] font-extrabold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                    {item.n}
                  </span>
                  <div>
                    <p className="font-semibold text-[#2a9df4]">{item.title}</p>
                    <p className="text-[#555]">{item.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <blockquote className="border-l-4 border-[#FFD600] pl-5 py-2 my-8 bg-[#f0fafa] rounded-r-xl">
              <p className="text-[#2a9df4] font-semibold text-lg italic">
                &quot;Let us rather rest than be replaced. If you need rest, rest. But do not be replaced.&quot;
              </p>
              <cite className="text-[#555] text-sm not-italic mt-2 block">— Pastor Ricardo Zaal · 2 Timothy 4:7</cite>
            </blockquote>

            <p className="text-[#555] leading-relaxed">
              This message was preached at Fountain of Grace International in Pretoria North. If you are in Pretoria North and these questions are sitting with you,{' '}
              <Link href="/plan-your-visit" className="text-[#008080] font-semibold hover:underline">
                come on a Sunday
              </Link>{' '}
              and hear it in person. 09:00, every Sunday.
            </p>
          </div>
        </section>

        <section className="bg-[#f0fafa] py-14 px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-[#2a9df4] mb-8">Questions this message answers</h2>
            <dl className="space-y-0">
              {[
                {
                  q: 'What is the difference between substitution and replacement in the Bible?',
                  a: "Substitution is a correction — your position remains and God is still working on you, as with Jonah. Replacement is the permanent transfer of your assignment to another person, as with Saul in 1 Samuel 15. Pastor Ricardo Zaal explains both at Fountain of Grace International, Pretoria North.",
                },
                {
                  q: 'What does Esther 4:14 actually mean — the full verse, not just "such a time as this"?',
                  a: 'The full verse says if you remain silent, deliverance will come from another place — and you and your house will be destroyed. The opportunity is real. But so is the consequence of not taking it. This is the core of this message from Fountain of Grace International.',
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
                This Sunday message was preached by Pastor Ricardo Zaal at Fountain of Grace
                International, 323 B Danie Theron Street, Pretoria North, Gauteng. Fountain of Grace
                International is a registered NPO (No: 316-193) and holds weekly Sunday services at
                09:00. Messages focus on practical application of biblical principles to everyday life
                situations in Pretoria North and beyond.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#008080] py-14 px-4 sm:px-6">
          <div className="section-container text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Come and hear this in person — Pretoria North, every Sunday.
            </h2>
            <p className="text-white/70 mb-8 max-w-lg mx-auto">
              Fountain of Grace International. 323 B Danie Theron Street. Services at 09:00.
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
