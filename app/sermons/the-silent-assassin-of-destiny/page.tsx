import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Silent Assassin of Destiny: Overthinking | Fountain of Grace International',
  description:
    'Overthinking kills destiny before you even start. Based on 2 Corinthians 10:4-5, this message exposes how the enemy uses your own mind against you — and how to stop it. Pretoria North.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/sermons/the-silent-assassin-of-destiny',
  },
  openGraph: {
    title: 'The Silent Assassin of Destiny: Overthinking',
    description:
      'The devil cannot touch you unless you allow him to. His entry point is your mind. This message names the silent pattern that kills destiny before it begins. Pretoria North.',
    type: 'article',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International — Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/sermons/the-silent-assassin-of-destiny',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Silent Assassin of Destiny: Overthinking',
    description: 'Based on 2 Corinthians 10:4-5, this message addresses overthinking as a silent weapon the enemy uses to paralyse destiny before a single decision is made. The battle is in the mind.',
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
    datePublished: '2025-08-31',
    url: 'https://www.fountaingrace.org/sermons/the-silent-assassin-of-destiny',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Sermons', item: 'https://www.fountaingrace.org/sermons' },
      { '@type': 'ListItem', position: 3, name: 'The Silent Assassin of Destiny', item: 'https://www.fountaingrace.org/sermons/the-silent-assassin-of-destiny' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the silent assassin of destiny?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Overthinking. The enemy cannot touch you unless you allow him to — and his entry point is the mind. One neutral comment becomes a spiral of reasons, conclusions, and fear before you have even moved. 2 Corinthians 10:4-5 instructs us to cast down imaginations and every high thing that exalts itself against the knowledge of God. The assassination is silent because it happens entirely inside your mind before it ever reaches action.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does overthinking kill destiny?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Overthinking kills destiny by creating a verdict before evidence. You hear one sentence and your mind builds a courtroom case. By the time you have finished thinking, you have already decided not to move — without a single real obstacle in front of you. The decision is made not by circumstances but by an unchecked thought process. Most people who never stepped into purpose were not stopped by the world. They were stopped by their own mind.',
        },
      },
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
              The Silent Assassin of Destiny: Overthinking
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              The devil cannot touch you unless you allow him to. His entry point is not your circumstances — it is your mind. One comment, one setback, one look from someone — and your mind is already five steps ahead, building a case against your own future.
            </p>
            <p className="text-white/60 text-sm">
              Pastor Ricardo Zaal · Fountain of Grace International, Pretoria North · 31 August 2025
            </p>
          </div>
        </header>

        <section className="bg-white py-14 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">Why It Is Called Silent</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              Picture someone walking into a room and saying, &quot;I think he hates me.&quot; He was not talking to you. He was not about you. But your mind has already started running. Why does he hate me? What did I do? Is it because of what I said last week? By the time you have finished that train of thought, you have a full story — and none of it happened.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              That is the silent assassination. It is silent because no one pulled a trigger. No external event occurred. The damage was done entirely inside your own mind. And because it is silent, you do not recognise it as an attack. You call it thinking. You call it being careful. You call it processing. But the result is the same: you did not move.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">The Battle Is in the Mind</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              2 Corinthians 10:4–5 — &quot;For the weapons of our warfare are not carnal, but mighty through God to the pulling down of strong holds; casting down imaginations, and every high thing that exalteth itself against the knowledge of God, and bringing into captivity every thought to the obedience of Christ.&quot;
            </p>
            <p className="text-[#555] leading-relaxed mb-4">
              Paul does not say cast down circumstances. He says cast down imaginations. The stronghold is not in your bank account or your situation. It is in the pattern of thought that runs unchecked in your mind every time a challenge appears. A stronghold is simply a thought pattern that has been in place so long it feels like reality.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              The instruction is not to stop thinking. It is to bring every thought into obedience. To examine what you are building inside your mind and ask: is this actually true, or is this an imagination I have constructed without evidence?
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">How Overthinking Kills Before You Start</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              Most people who never stepped into purpose were not stopped by the world. They were stopped by a thought. The business was never started because of what might go wrong. The conversation was never had because of how it might be received. The step of obedience was never taken because the mind built ten reasons why it would not work.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              The assassination is complete before the enemy has done anything. He does not need to arrange circumstances. He only needs to hand you a thought and trust your mind to do the rest. This is why Proverbs 4:23 says to guard your heart — because out of it flow the issues of life. What you allow to run in your mind shapes what you allow in your life.
            </p>

            <blockquote className="border-l-4 border-[#FFD600] pl-5 py-2 my-10 bg-[#f0fafa] rounded-r-xl">
              <p className="text-[#2a9df4] font-semibold text-lg italic">
                &quot;The devil can&apos;t touch you unless you allow him to. And you allow him in through one door: an unchecked thought that you never took captive.&quot;
              </p>
              <cite className="text-[#555] text-sm not-italic mt-2 block">— Pastor Ricardo Zaal</cite>
            </blockquote>

            <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Breaking the Pattern</h2>
            <ol className="list-decimal list-inside space-y-3 text-[#555] leading-relaxed mb-6">
              <li><strong>Identify the thought the moment it arrives.</strong> Do not follow where it leads before examining where it came from. Ask: is this from God, from experience, or from fear?</li>
              <li><strong>Cast it down before it builds.</strong> 2 Corinthians 10:5 says bring it into captivity — not after it has run for an hour, but at the point of entry. The longer you entertain a wrong thought, the more real it becomes.</li>
              <li><strong>Replace it with what God has said.</strong> A mind left empty does not stay empty. The casting down must be followed by the filling up. Philippians 4:8 — think on what is true, honest, just, pure, lovely, and of good report.</li>
            </ol>

            <p className="text-[#555] leading-relaxed">
              If you are in Pretoria North,{' '}
              <Link href="/plan-your-visit" className="fgi-link">
                come on a Sunday
              </Link>{' '}
              — these messages are preached live every week at Fountain of Grace International, 323 B Danie Theron Street.
            </p>
          </div>
        </section>

        <section className="bg-gray-50 py-12 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-[#1a1a1a] mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">What is the silent assassin of destiny?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Overthinking. The enemy cannot touch you unless you allow him to — and his entry point is the mind. One neutral comment becomes a spiral of conclusions before you have moved an inch. 2 Corinthians 10:4-5 says to cast down imaginations and take every thought captive. The assassination is silent because it happens entirely inside your mind before it ever affects action.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">How do you stop overthinking from a biblical perspective?</h3>
                <p className="text-[#555] leading-relaxed text-sm">By taking thoughts captive the moment they arrive — not after an hour of following them. 2 Corinthians 10:5 gives the instruction: cast down imaginations and bring every thought into obedience to Christ. Then replace what you cast out with Philippians 4:8 — thinking on what is true, honest, just, and pure. The pattern breaks when you examine thoughts rather than follow them.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f0fafa] py-14 px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Join Us This Sunday</h2>
            <p className="text-[#555] leading-relaxed mb-6">
              Fountain of Grace International meets every Sunday at 09:00 at 323 B Danie Theron Street, Pretoria North. Come as you are.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/plan-your-visit" className="inline-block bg-[#008080] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#006666] transition-colors">
                Plan Your Visit
              </Link>
              <Link href="/prayer" className="inline-block bg-white border border-[#008080] text-[#008080] font-bold px-6 py-3 rounded-lg hover:bg-[#f0fafa] transition-colors">
                Send a Prayer Request
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  )
}
