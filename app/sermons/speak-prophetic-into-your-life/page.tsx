import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Speak Prophetic Into Your Life | 1 Corinthians 14:3 | Fountain of Grace International',
  description:
    'Whether you know it or not, you are always prophesying over yourself. The question is whether your words are building you up or tearing you down. Based on 1 Corinthians 14:3. Pretoria North.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/sermons/speak-prophetic-into-your-life',
  },
  openGraph: {
    title: 'Speak Prophetic Into Your Life | 1 Corinthians 14:3',
    description:
      'You are always prophesying. Every word you speak over your life is either building faith or destroying it. This message shows you how to change the confession. Pretoria North.',
    type: 'article',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International - Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/sermons/speak-prophetic-into-your-life',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Speak Prophetic Into Your Life',
    description: 'Based on 1 Corinthians 14:3, Romans 10:17, and Ezekiel 37, this message challenges believers to replace negative self-talk with the prophetic words of God - because you are always speaking a future into existence, whether you intend to or not.',
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
    datePublished: '2025-04-06',
    url: 'https://www.fountaingrace.org/sermons/speak-prophetic-into-your-life',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Sermons', item: 'https://www.fountaingrace.org/sermons' },
      { '@type': 'ListItem', position: 3, name: 'Speak Prophetic Into Your Life', item: 'https://www.fountaingrace.org/sermons/speak-prophetic-into-your-life' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What does 1 Corinthians 14:3 say about prophecy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '1 Corinthians 14:3 - "But he that prophesieth speaketh unto men to edification, and exhortation, and comfort." Prophecy is not primarily about predicting the future. It is about declaring God\'s Word into the present - to build up, to encourage, and to bring comfort. When you speak the Word of God over your life, you are speaking prophetically. The question is whether what you are speaking is edifying, exhorting, and comforting - or tearing down, discouraging, and bringing fear.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I prophesy into my own life?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Romans 10:17 says faith comes by hearing - and hearing by the Word of God. When you declare scripture over your situation out loud, faith grows. Find a scripture that addresses what you are facing. Speak it in the present tense - not "I will be healed" but "by His stripes I am healed." Not "God will provide" but "my God supplies all my need." Ezekiel 37:4 - God told Ezekiel to prophesy to dry bones, and they lived. The dry bones in your life need a prophetic word, not more silence.',
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
              Speak Prophetic Into Your Life
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              You are always prophesying. Every time you say &quot;life is hard&quot; or &quot;I can&apos;t do this&quot; or &quot;nothing ever works for me&quot; — you are releasing a prophetic word over your own life. The problem is not that you are not prophesying. The problem is what you are prophesying. This message shows you how to change it.
            </p>
            <p className="text-white/60 text-sm">
              Pastor Ricardo Zaal · Fountain of Grace International, Pretoria North · 6 April 2025
            </p>
          </div>
        </header>

        <section className="bg-white pt-10 pb-2 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/FuHfZ89YcOM"
                title="Speak Prophetic Into Your Life"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-14 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">The Rudder You Are Already Using</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              The Bible compares the tongue to a rudder on a ship. A rudder is not the engine — it does not provide the power. But it determines the direction. Without a functioning rudder, a ship with a full engine will end up on rocks. A ship is not destroyed by lack of power. It is destroyed by going the wrong direction.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              Your words work the same way. They are steering your life. Every time you open your mouth and say &quot;I&apos;m broke,&quot; &quot;I&apos;m useless,&quot; &quot;nothing ever changes for me&quot; — the rudder turns. That is a prophetic word. It is a negative prophetic word, but it is prophetic. It is setting a direction. The question is whether the direction it is setting is aligned with what God says about you.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">1 Corinthians 14:3 - What Prophecy Is Actually For</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              1 Corinthians 14:3 - &quot;But he that prophesieth speaketh unto men to edification, and exhortation, and comfort.&quot;
            </p>
            <p className="text-[#555] leading-relaxed mb-4">
              Prophecy has a specific function: to build up, to encourage, and to bring comfort. If a word does not do any of these three things, it is not a godly prophetic word — regardless of how confidently it is delivered. When you prophesy over yourself, the question to ask is: does this word build me up? Does it encourage me? Does it bring comfort? Or does it reinforce fear, limitation, and defeat?
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              Prophecy is not primarily about predicting the future. It is about declaring God&apos;s Word into the present. Not &quot;one day I will be&quot; but &quot;right now I am&quot; — because God&apos;s Word is present tense. Romans 10:17 — &quot;So then faith cometh by hearing, and hearing by the word of God.&quot; When you hear yourself say what God says, faith grows. That is the mechanism.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">Ezekiel 37:4 - Prophesy to Your Dry Bones</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              Ezekiel 37:4 - &quot;Again he said unto me, Prophesy upon these bones, and say unto them, O ye dry bones, hear the word of the LORD.&quot;
            </p>
            <p className="text-[#555] leading-relaxed mb-4">
              God did not tell Ezekiel to pray about the dry bones, or to feel sad about them, or to analyse why they were dry. He told him to prophesy to them. To speak the word of God directly at the situation. And the bones came together. Flesh came on them. Breath entered them.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              Your dry bones are different from someone else&apos;s. Maybe it is a marriage that looks lifeless. A career that looks finished. A relationship that looks beyond repair. A body that feels broken. The instruction from Ezekiel 37 is not to accept the dry bones as the final word — it is to prophesy to them. Speak the Word of God at the thing that looks dead. That is your assignment.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">Jeremiah 29:11 - God&apos;s Thoughts Are Already Set</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              Jeremiah 29:11 - &quot;For I know the thoughts that I think toward you, saith the LORD, thoughts of peace, and not of evil, to give you an expected end.&quot;
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              God&apos;s thoughts toward you are already decided. They are thoughts of peace — not evil. The expected end is already set. The prophetic word you need to speak over your life is not something you are creating — it is something you are agreeing with. You are aligning your mouth with what God has already declared. When you do that, the rudder turns toward the outcome God intended. And faith — which comes by hearing — begins to carry you there.
            </p>

            <blockquote className="border-l-4 border-[#FFD600] pl-5 py-2 my-10 bg-[#f0fafa] rounded-r-xl">
              <p className="text-[#2a9df4] font-semibold text-lg italic">
                &quot;Stop prophesying the problem. Start prophesying the promise. You are always speaking a future into existence — make sure it is the future God intended for you.&quot;
              </p>
              <cite className="text-[#555] text-sm not-italic mt-2 block">— Pastor Ricardo Zaal</cite>
            </blockquote>

            <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">How to Prophesy Into Your Life Starting Today</h2>
            <ol className="list-decimal list-inside space-y-3 text-[#555] leading-relaxed mb-6">
              <li><strong>Find the scripture that speaks to your situation.</strong> Not a general feel-good phrase — a specific verse that addresses what you are facing. That is your prophetic word.</li>
              <li><strong>Speak it in the present tense, out loud.</strong> Not &quot;God will heal me&quot; but &quot;by His stripes I am healed.&quot; Not &quot;God might provide&quot; but &quot;my God supplies all my need.&quot; Faith comes by hearing — so make sure you hear it.</li>
              <li><strong>Replace every negative confession with its scriptural opposite.</strong> Every time you catch yourself speaking defeat, replace it immediately with what God says. The rudder does not change direction once — it is constantly being adjusted. Keep adjusting it toward God&apos;s Word.</li>
            </ol>

            <p className="text-[#555] leading-relaxed">
              If you are in Pretoria North,{' '}
              <Link href="/plan-your-visit" className="text-[#008080] font-semibold hover:underline">
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
                <h3 className="font-semibold text-[#1a1a1a] mb-2">What does 1 Corinthians 14:3 say about prophecy?</h3>
                <p className="text-[#555] leading-relaxed text-sm">1 Corinthians 14:3 says prophecy is to speak to men for edification, exhortation, and comfort. It is not primarily about predicting the future - it is about declaring God&apos;s Word into the present moment. Romans 10:17 confirms that faith comes by hearing the Word of God. When you speak scripture over your life out loud, you are speaking prophetically - and faith grows by what you hear yourself say.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">How do I prophesy into my own life?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Find a scripture that addresses what you are facing. Speak it in the present tense - not &quot;I will be&quot; but &quot;I am.&quot; Ezekiel 37:4 - God told Ezekiel to prophesy to dry bones, and they lived. Whatever looks lifeless in your life needs a prophetic word spoken at it. Jeremiah 29:11 - God&apos;s thoughts toward you are already settled as peace and a good future. Your job is to agree with that out loud.</p>
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
