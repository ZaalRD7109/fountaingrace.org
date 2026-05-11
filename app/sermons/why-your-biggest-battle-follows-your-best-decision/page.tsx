import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Why Your Biggest Battle Always Follows Your Best Decision | Fountain of Grace International',
  description:
    'The moment you make the right decision is often when everything falls apart. This is not failure - it is confirmation. Pastor Ricardo Zaal explains why from Pretoria North.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/sermons/why-your-biggest-battle-follows-your-best-decision',
  },
  openGraph: {
    title: 'Why Your Biggest Battle Always Follows Your Best Decision',
    description:
      'You made the right choice. Then everything collapsed. This message explains why opposition after a breakthrough is not a sign you got it wrong. Fountain of Grace International, Pretoria North.',
    type: 'article',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International - Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/sermons/why-your-biggest-battle-follows-your-best-decision',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Why Your Biggest Battle Always Follows Your Best Decision',
    description: 'Every major breakthrough in Scripture was preceded by intense warfare. David, Jesus, Joseph, Paul - the pattern is consistent. The bigger the decision, the bigger the opposition. This message explains why, and how to hold your ground.',
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
    datePublished: '2026-05-10',
    url: 'https://www.fountaingrace.org/sermons/why-your-biggest-battle-follows-your-best-decision',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Sermons', item: 'https://www.fountaingrace.org/sermons' },
      { '@type': 'ListItem', position: 3, name: 'Why Your Biggest Battle Follows Your Best Decision', item: 'https://www.fountaingrace.org/sermons/why-your-biggest-battle-follows-your-best-decision' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'WHY YOUR BIGGEST BATTLE ALWAYS FOLLOWS YOUR BEST DECISION',
    description: 'The moment you make the right decision is often when everything falls apart. This is not failure - it is confirmation. Pastor Ricardo Zaal explains why opposition after a breakthrough is not a sign you got it wrong.',
    thumbnailUrl: 'https://img.youtube.com/vi/z5QxF4LbCl8/maxresdefault.jpg',
    uploadDate: '2026-05-10',
    embedUrl: 'https://www.youtube.com/embed/z5QxF4LbCl8',
    url: 'https://www.fountaingrace.org/sermons/why-your-biggest-battle-follows-your-best-decision',
    author: { '@type': 'Person', name: 'Pastor Ricardo Zaal' },
    publisher: {
      '@type': 'Organization',
      name: 'Fountain of Grace International',
      url: 'https://www.fountaingrace.org',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why does everything go wrong right after I make a good decision?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'This is a consistent biblical pattern - not an accident and not a punishment. Jesus was baptized - confirmed by the voice of God - and immediately went to the wilderness for 40 days of testing. David was anointed king and immediately spent years being hunted by Saul. Joseph received a dream and immediately ended up in a pit. The opposition that follows a right decision is confirmation that what you decided carries weight. The enemy does not attack what does not matter.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I know if I am in a spiritual battle or just facing consequences of bad choices?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The timing is the key indicator. If opposition comes immediately after you made a clear, God-directed decision - a commitment to something good, a step of obedience, a decision to change direction - that is spiritual warfare. If the consequences follow a pattern of disobedience or poor decisions over time, that is a different conversation. Ephesians 6:12 says our battle is not against flesh and blood. When a new assignment triggers new opposition, that is the context Paul is describing.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does the Bible say about spiritual warfare after making right decisions?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Every major biblical figure faced their greatest battle immediately after their greatest moment. Jesus: baptism, then wilderness. David: anointing, then years of persecution. Paul: conversion, then immediate attempts on his life. 1 Peter 5:8 says the enemy walks about 'seeking whom he may devour' - and the ones most targeted are the ones most committed. The battle is not a sign you are losing. It is a sign you are moving.",
        },
      },
      {
        '@type': 'Question',
        name: 'How do I hold my ground when the battle is intense?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Ephesians 6:13 says 'having done all, to stand.' The instruction after putting on the full armour is not to attack - it is to stand. Holding ground means you do not retreat from the decision you made under pressure. The goal of opposition after a right decision is almost always to get you to reverse the decision. If you understand that the battle is confirmation rather than contradiction, you can stand firm on the original word you received rather than reinterpreting it under fire.",
        },
      },
    ],
  },
]

const points = [
  {
    n: 1,
    title: 'The Pattern Is Consistent Throughout Scripture',
    scripture: 'Matthew 4:1 / 1 Samuel 18:6-11',
    body: 'Jesus was baptized - the Father\'s voice came from heaven, the Spirit descended like a dove. Immediately after, He was led into the wilderness for 40 days of temptation. David was anointed king by Samuel in front of his brothers. Immediately after, the spirit of the Lord departed from Saul and Saul began to pursue David\'s life. This is not coincidence. The moment a God-directed decision is made, it enters contested territory. The opposition that follows is a response to what you just decided, not evidence that you decided wrong.',
  },
  {
    n: 2,
    title: 'The Bigger the Decision, the Bigger the Battle',
    scripture: 'Job 1:6-12 / Luke 22:31-32',
    body: 'Jesus told Peter, "Satan hath desired to have you, that he may sift you as wheat." This was spoken directly before Peter\'s greatest test. The word "desired" implies request - Satan had to ask. What is being targeted is always proportional to what is at stake. Ordinary decisions rarely attract extraordinary opposition. When you suddenly feel like everything is working against a decision you know was right, that opposition itself is information: what you decided carries weight that the enemy recognises, even if you cannot yet see it yourself.',
  },
  {
    n: 3,
    title: 'The Battle Is Confirmation, Not Contradiction',
    scripture: 'Ephesians 6:12-13',
    body: '"For we wrestle not against flesh and blood, but against principalities, against powers, against the rulers of the darkness of this world." Paul wrote this to people who were already walking in their calling. The battle is not a sign you stepped out of God\'s will. It is a sign you stepped into it. If the decision you made did not threaten anything, it would not be resisted. The goal of the opposition is almost always singular: get you to reverse the decision. Understanding that changes how you interpret the intensity of what you are facing.',
  },
  {
    n: 4,
    title: 'Having Done All - Stand',
    scripture: 'Ephesians 6:13',
    body: '"Wherefore take unto you the whole armour of God, that ye may be able to withstand in the evil day, and having done all, to stand." The instruction after putting on every piece of armour is not to charge forward. It is to stand. Holding ground means refusing to retreat from the decision you made before the pressure started. The test of a decision is not whether it brings peace immediately - it is whether you are still standing in it when the opposition has done its worst. Many breakthroughs are abandoned three metres from the finish line because the battle intensified right before the resolution.',
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
              Why Your Biggest Battle Always Follows Your Best Decision
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              You made the right choice. You stepped out in obedience, committed to a change, or finally made a decision you had been avoiding. Then everything fell apart. That is not a sign you got it wrong. In Scripture, the biggest battles come immediately after the biggest decisions. This message explains why - and how to hold your ground.
            </p>
            <p className="text-white/60 text-sm">
              Pastor Ricardo Zaal · Fountain of Grace International, Pretoria North · 10 May 2026
            </p>
          </div>
        </header>

        <section className="bg-white pt-10 pb-2 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/z5QxF4LbCl8"
                title="Why Your Biggest Battle Always Follows Your Best Decision"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-14 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#555] leading-relaxed text-lg mb-4">
              There is a pattern in Scripture that nobody warned you about. Every time a major God-directed decision was made, the opposition that followed was immediate and intense. Jesus was baptized - then went directly to the wilderness. David was anointed king - then spent years running for his life. Joseph received a dream from God - and ended up in a pit before morning.
            </p>
            <p className="text-[#555] leading-relaxed mb-10">
              This pattern is not random. The enemy does not attack what does not matter. When the battle intensifies after a right decision, that is not a sign you made a mistake - it is confirmation that what you decided carries weight. The question is not whether the battle will come. The question is whether you understand it well enough to stand when it does.
            </p>

            <div className="space-y-10">
              {points.map((p) => (
                <div key={p.n} className="flex gap-6 items-start">
                  <div className="bg-[#FFD600] text-[#1a1a1a] font-extrabold w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                    {p.n}
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-[#2a9df4] mb-1">{p.title}</h2>
                    <p className="text-xs text-[#008080] font-semibold mb-3">{p.scripture}</p>
                    <p className="text-[#555] leading-relaxed">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <blockquote className="border-l-4 border-[#FFD600] pl-5 py-2 my-10 bg-[#f0fafa] rounded-r-xl">
              <p className="text-[#2a9df4] font-semibold text-lg italic">
                &quot;Many breakthroughs are abandoned three metres from the finish line because the battle intensified right before the resolution.&quot;
              </p>
              <cite className="text-[#555] text-sm not-italic mt-2 block">- Pastor Ricardo Zaal</cite>
            </blockquote>

            <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">How to Hold Ground Under Fire</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              The goal of opposition after a right decision is almost always to get you to reverse that decision. Three things that help you stand when the pressure peaks:
            </p>
            <ol className="list-decimal list-inside space-y-3 text-[#555] leading-relaxed mb-6">
              <li><strong>Identify what you are actually fighting.</strong> Ephesians 6:12 - the battle is not against the person, the situation, or the finances. It is against principalities. Name it correctly. When you treat a spiritual battle like a practical problem, you fight with the wrong weapons.</li>
              <li><strong>Go back to the original word.</strong> What did God say before the pressure started? The battle will try to make you reinterpret the original word using current circumstances. Do not do it. The word you received before the storm is more reliable than the evidence the storm is showing you.</li>
              <li><strong>Stand - and keep standing.</strong> Ephesians 6:13 - &quot;having done all, to stand.&quot; You do not need a new strategy in every fight. Sometimes the assignment is simply not to move. The battle has an expiry date. The one who stands longest wins.</li>
            </ol>

            <p className="text-[#555] leading-relaxed">
              If you are in Pretoria North and want to hear this kind of teaching live,{' '}
              <Link href="/plan-your-visit" className="fgi-link">
                come on a Sunday
              </Link>{' '}
              - Fountain of Grace International meets every week at 323 B Danie Theron Street.
            </p>
          </div>
        </section>

        <section className="bg-gray-50 py-12 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-[#1a1a1a] mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">Why does everything go wrong right after I make a good decision?</h3>
                <p className="text-[#555] leading-relaxed text-sm">This is a consistent biblical pattern. Jesus was baptized and immediately went to the wilderness. David was anointed king and immediately spent years being hunted. The opposition that follows a right decision is confirmation that what you decided carries weight. The enemy does not attack what does not matter.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">How do I know if I am in a spiritual battle or facing consequences of bad choices?</h3>
                <p className="text-[#555] leading-relaxed text-sm">The timing is the key indicator. If opposition comes immediately after a clear, God-directed decision - a commitment to something good, a step of obedience - that is spiritual warfare. Ephesians 6:12 says our battle is not against flesh and blood. When a new assignment triggers new opposition, that is the context Paul is describing.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">What does the Bible say about spiritual warfare after making right decisions?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Every major biblical figure faced their greatest battle immediately after their greatest moment. Jesus: baptism, then wilderness. David: anointing, then persecution. Paul: conversion, then immediate attempts on his life. 1 Peter 5:8 says the enemy walks about seeking whom he may devour - and the ones most targeted are the ones most committed.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">How do I hold my ground when the battle is intense?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Ephesians 6:13 says &quot;having done all, to stand.&quot; The instruction after putting on the full armour is to stand - not to attack. Holding ground means refusing to retreat from the decision you made before the pressure started. The goal of opposition after a right decision is almost always to get you to reverse it. Understand that, and you can stand firm on the original word you received rather than reinterpreting it under fire.</p>
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
              <Link
                href="/plan-your-visit"
                className="inline-block bg-[#008080] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#006666] transition-colors"
              >
                Plan Your Visit
              </Link>
              <Link
                href="/prayer"
                className="inline-block bg-white border border-[#008080] text-[#008080] font-bold px-6 py-3 rounded-lg hover:bg-[#f0fafa] transition-colors"
              >
                Send a Prayer Request
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white py-10 px-4 sm:px-6 border-t border-gray-100">
          <div className="max-w-3xl mx-auto">
            <details className="group">
              <summary className="cursor-pointer text-[#2a9df4] font-semibold text-base select-none list-none flex items-center gap-2">
                <span className="inline-block transition-transform group-open:rotate-90">&#9658;</span>
                Read Full Sermon Transcript
              </summary>
              <div className="mt-6 text-[#555] text-sm leading-relaxed whitespace-pre-wrap">
                Transcript coming soon.
              </div>
            </details>
          </div>
        </section>
      </article>
    </>
  )
}
