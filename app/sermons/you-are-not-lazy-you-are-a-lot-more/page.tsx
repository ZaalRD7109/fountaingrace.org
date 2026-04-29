import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "You Are Not Lazy — You Are a Lot More | Proverbs 6:6-8 | Fountain of Grace International",
  description:
    "You are not lazy. You are disconnected. The ant in Proverbs 6 works without a commander because it knows its purpose. This message challenges you to stop calling yourself what God never called you. Pretoria North.",
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/sermons/you-are-not-lazy-you-are-a-lot-more',
  },
  openGraph: {
    title: "You Are Not Lazy — You Are a Lot More | Proverbs 6:6-8",
    description:
      "When you lift up Jesus, He draws people to Himself. When you lift up your problems, they grow. This message stops the wrong confession and starts the right one. Pretoria North.",
    type: 'article',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International - Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/sermons/you-are-not-lazy-you-are-a-lot-more',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'You Are Not Lazy - You Are a Lot More',
    description: 'Based on Proverbs 6:6-8, Joel 3:10, and Psalm 22:3, this message challenges the believer who has accepted a false identity - that they are lazy, incapable, or stuck. The ant does not need a commander to work. You already have everything you need. The question is what you are glorifying with your words.',
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
    datePublished: '2024-01-28',
    url: 'https://www.fountaingrace.org/sermons/you-are-not-lazy-you-are-a-lot-more',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Sermons', item: 'https://www.fountaingrace.org/sermons' },
      { '@type': 'ListItem', position: 3, name: 'You Are Not Lazy', item: 'https://www.fountaingrace.org/sermons/you-are-not-lazy-you-are-a-lot-more' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What does Proverbs 6:6-8 say about laziness?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Proverbs 6:6-8 - "Go to the ant, thou sluggard; consider her ways, and be wise: Which having no guide, overseer, or ruler, provideth her meat in the summer, and gathereth her food in the harvest." The ant does not need a manager to motivate it. It does not need constant direction to do what it was created to do. God is not calling you lazy - He is showing you a picture of what you are capable of when you operate from purpose rather than pressure.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does "let the weak say I am strong" mean in Joel 3:10?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Joel 3:10 - "Beat your plowshares into swords, and your pruninghooks into spears: let the weak say, I am strong." God is not asking the weak to lie. He is asking them to agree with what He says about them rather than what their circumstances say. When you confess weakness, you are glorifying the weakness. When you confess strength - even when you do not feel it - you are glorifying God. And Psalm 22:3 says God inhabits the praises of His people. What you glorify is what you invite in.',
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
              You Are Not Lazy — You Are a Lot More
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              Somewhere along the way, you accepted a label. Lazy. Incapable. Behind. And now that label has become a confession — something you say about yourself without even thinking. This message challenges that label at its root. You are not what your worst season called you. You are what God says you are.
            </p>
            <p className="text-white/60 text-sm">
              Pastor Ricardo Zaal · Fountain of Grace International, Pretoria North · 28 January 2024
            </p>
          </div>
        </header>

        <section className="bg-white pt-10 pb-2 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/Aq0r8tRWP-Y"
                title="You Are Not Lazy - You Are a Lot More"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-14 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">What You Glorify Is What You Invite</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              Whatever you talk about most, you are lifting up. And what you lift up is what draws. Jesus said it plainly — &quot;And I, if I be lifted up from the earth, will draw all men unto me&quot; (John 12:32). When you lift up Jesus, He draws people to Himself. When you lift up your problems, they grow. When you lift up Satan by constantly talking about what he is doing in your life, you are handing him attention and authority he was never meant to have.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              Every time you open your mouth and say &quot;life is so hard,&quot; &quot;things never work out for me,&quot; &quot;I am so far behind&quot; — you are glorifying the problem. And Psalm 22:3 says God inhabits the praises of His people. Praise is not just the songs before the sermon. Praise is every declaration that lifts God above your circumstances. When you stop glorifying the struggle and start glorifying God, the atmosphere shifts.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">Proverbs 6:6-8 — The Ant That Needs No Commander</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              Proverbs 6:6-8 — &quot;Go to the ant, thou sluggard; consider her ways, and be wise: Which having no guide, overseer, or ruler, provideth her meat in the summer, and gathereth her food in the harvest.&quot;
            </p>
            <p className="text-[#555] leading-relaxed mb-4">
              The ant does not need a manager standing over it to motivate it to work. It does not need a supervisor to confirm what it already knows it was created to do. It operates from internal purpose — and the result is consistent, diligent, well-timed preparation.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              God is not pointing to the ant to shame you. He is showing you a picture of what you are already capable of. You are not lazy. You are a person who has been told they are lazy often enough that they started agreeing with it. But God&apos;s Word says something different. It says you have been given a spirit of power, of love, and of a sound mind (2 Timothy 1:7). The ant does not question whether it can do what it was made to do. Neither should you.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">Joel 3:10 — Let the Weak Say I Am Strong</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              Joel 3:10 — &quot;Beat your plowshares into swords, and your pruninghooks into spears: let the weak say, I am strong.&quot;
            </p>
            <p className="text-[#555] leading-relaxed mb-4">
              God is not asking you to pretend you are not struggling. He is asking you to choose whose report you will believe. The weak person in Joel 3 is genuinely weak — they are not being asked to manufacture a feeling of strength. They are being asked to declare what God says rather than what the situation says. There is a difference between ignoring reality and refusing to let reality have the last word.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              Romans 10:17 — faith comes by hearing. When you hear yourself say &quot;I am strong in the Lord,&quot; faith grows. When you hear yourself say &quot;I am a failure,&quot; defeat grows. What you are building with your words right now is the environment you will live in tomorrow. Joel 3:10 is an invitation to build a different one.
            </p>

            <blockquote className="border-l-4 border-[#FFD600] pl-5 py-2 my-10 bg-[#f0fafa] rounded-r-xl">
              <p className="text-[#2a9df4] font-semibold text-lg italic">
                &quot;Stop confessing who your worst week said you were. Start confessing who God says you are. You are not lazy. You are not behind. You are not forgotten. You are chosen, capable, and purposefully placed. Say it until you believe it.&quot;
              </p>
              <cite className="text-[#555] text-sm not-italic mt-2 block">— Pastor Ricardo Zaal</cite>
            </blockquote>

            <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Three Things to Change Starting Today</h2>
            <ol className="list-decimal list-inside space-y-3 text-[#555] leading-relaxed mb-6">
              <li><strong>Stop glorifying the problem.</strong> Every time you catch yourself talking about how hard life is, how impossible things feel, how behind you are — pause. That is a declaration, and it is building something. Choose to lift up Jesus instead of the struggle.</li>
              <li><strong>Let the weak say I am strong.</strong> Find a scripture that speaks directly to the weakness you keep confessing. Say it out loud, every day. Not because you already feel it — but because faith comes by hearing, and you need to hear it from your own mouth.</li>
              <li><strong>Operate from purpose, not pressure.</strong> The ant in Proverbs 6 does not need a supervisor. You have been given the Spirit of God, the Word of God, and a God-appointed purpose. You do not need someone standing over you to activate what is already inside you.</li>
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
                <h3 className="font-semibold text-[#1a1a1a] mb-2">What does Proverbs 6:6-8 say about laziness?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Proverbs 6:6-8 - &quot;Go to the ant, thou sluggard; consider her ways.&quot; The ant has no guide, overseer, or ruler - yet it works diligently and prepares for the harvest. God is not shaming you with this verse. He is showing you a picture of what you are already capable of when you operate from purpose. You are not lazy. You are a person who has been told they are lazy and started agreeing with it.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">What does &quot;let the weak say I am strong&quot; mean in Joel 3:10?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Joel 3:10 is not asking you to pretend. It is asking you to choose whose report you believe. The weak person is genuinely weak - but the instruction is to declare what God says rather than what circumstances say. Romans 10:17 - faith comes by hearing. What you say about yourself out loud, you hear. And what you hear shapes what you believe is possible. Say what God says, even before you feel it.</p>
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
