import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Stop Fighting a Battle That Was Never Yours to Win | Fountain of Grace International",
  description: "Tired of fighting battles alone and losing? Pastor Ricardo Zaal of Fountain of Grace, Pretoria North, shows you why the battle belongs to God - not you.",
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/sermons/victory-battle-the-lords-fight-not-yours',
  },
  openGraph: {
    title: "Stop Fighting a Battle That Was Never Yours to Win",
    description: "Stop fighting battles alone. Pastor Ricardo Zaal reveals how to win life's hardest battles by surrendering them to God.",
    type: 'article',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International - Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/sermons/victory-battle-the-lords-fight-not-yours',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "Stop Fighting a Battle That Was Never Yours to Win",
    description: "Pastor Ricardo Zaal of Fountain of Grace International in Pretoria North delivers a powerful sermon on winning life's battles by recognising they belong to God. Drawing from 1 Samuel 17:47 and the story of David and Goliath, this message shows believers how to stop losing in their minds and start walking in victory.",
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
    datePublished: '2024-06-01',
    url: 'https://www.fountaingrace.org/sermons/victory-battle-the-lords-fight-not-yours',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Sermons', item: 'https://www.fountaingrace.org/sermons' },
      { '@type': 'ListItem', position: 3, name: "Stop Fighting a Battle That Was Never Yours to Win", item: 'https://www.fountaingrace.org/sermons/victory-battle-the-lords-fight-not-yours' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "What does 1 Samuel 17:47 say about spiritual battles?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "1 Samuel 17:47 says, 'And all this assembly shall know that the LORD saveth not with sword and spear: for the battle is the LORD's, and he will give you into our hands.' This verse, spoken by David before defeating Goliath, reminds believers that God does not need human strength or weapons to win battles. When you truly believe the battle belongs to God, victory is already on its way.",
        },
      },
      {
        '@type': 'Question',
        name: "Why do I keep losing the same battles over and over again?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Most repeated defeats begin in the mind - when you have already accepted a negative outcome before the battle is even over. Pastor Ricardo points out that Job said 'the thing which I greatly feared is come upon me,' showing that fear and a defeated mindset can actually draw the very outcome you dread. Changing what you believe about the battle changes the result.",
        },
      },
      {
        '@type': 'Question',
        name: "How do I know when to walk away from a fight instead of standing my ground?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Not every battle is meant to be won by pushing harder - some are won by stepping back with wisdom. Pastor Ricardo uses the example of an abusive relationship to show that choosing your life over the fight is not weakness but victory. Proverbs and the New Testament both affirm that wisdom knows which battles belong to you and which ones belong to God.",
        },
      },
      {
        '@type': 'Question',
        name: "What does it mean that the battle is the Lord's in everyday life?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "It means you are not designed to carry the full weight of every conflict, fear, sickness, or struggle on your own. Romans 8:37 declares that believers are more than conquerors through Christ Jesus. Practically, it means bringing your battle to God in prayer, resisting the enemy as James 4:7 instructs, and trusting that God is already working on your behalf even when you cannot see it.",
        },
      }
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: "Stop Fighting a Battle That Was Never Yours to Win",
    description: "Stop Fighting a Battle That Was Never Yours to Win",
    thumbnailUrl: 'https://img.youtube.com/vi/PENDING/maxresdefault.jpg',
    uploadDate: '2024-06-01',
    embedUrl: 'https://www.youtube.com/embed/PENDING',
    url: 'https://www.fountaingrace.org/sermons/victory-battle-the-lords-fight-not-yours',
    author: { '@type': 'Person', name: 'Pastor Ricardo Zaal' },
    publisher: {
      '@type': 'Organization',
      name: 'Fountain of Grace International',
      url: 'https://www.fountaingrace.org',
    },
  }
]

const sd = {
  "headline": "Stop Fighting a Battle That Was Never Yours to Win",
  "intro": "Are you exhausted from fighting battles that seem impossible to win? Whether it is sickness, broken relationships, fear, or daily struggles, Pastor Ricardo Zaal brings a word that will shift your perspective completely. The battle is not yours to fight alone - it belongs to God, and that truth alone changes everything.",
  "scripture": "1 Samuel 17:47",
  "quote": "The battle is not yours. The moment you know that, you have already won - because it is He, the Lord, who wins the battle, not you.",
  "dateDisplay": "1 June 2024",
  "sections": [
    {
      "heading": "What Is a Battle and Why Does It Feel So Personal?",
      "paragraphs": [
        "A battle, by definition, is a sustained fight - something you resist, confront, endure, and push back against over time. Pastor Ricardo Zaal opened this message by reminding the congregation that battles come in every shape: illness, broken relationships, financial pressure, spiritual attacks, and even the silent war that rages inside your own thoughts. When someone overcomes cancer or walks away from a toxic situation, we say they fought a battle and won. That language is not accidental - life really is a series of battles, and knowing that changes how you respond to hardship.",
        "What makes this truth so freeing is the declaration found in 1 Samuel 17:47. When young David stood before the giant Goliath, he did not boast in his own ability. He boldly declared that the Lord does not save by sword or spear - because the battle is the Lord's. A timid shepherd boy walked into a fight that terrified an entire army, and he won it not with superior weapons but with a superior understanding of who was truly fighting."
      ]
    },
    {
      "heading": "How Most People Lose Before the Battle Even Starts",
      "paragraphs": [
        "Pastor Ricardo identifies three common ways believers lose battles long before they reach the finish line. The first is a defeated mindset - the habit of imagining the worst outcome before anything has been decided. As a man thinketh in his heart, so he is, and when your thoughts rehearse defeat, your actions follow. Job himself acknowledged that the very thing he feared came upon him, a sobering warning about the power of fear-filled thinking.",
        "The second battle-killer is the belief that you are fighting alone. The moment you reduce your identity to 'I' - isolated, self-reliant, carrying everything on your own - you have already cut yourself off from the greatest strategic advantage available to any believer. God never designed you to go into battle as a one-person army. The third trap is constantly fighting back in your own strength, escalating every conflict instead of stepping back and allowing God to be your defence. Sometimes the battle is won the moment you stop swinging and start trusting."
      ]
    },
    {
      "heading": "Preparing for Battle and Walking in Victory",
      "paragraphs": [
        "Preparing for battle begins with the mind. Confidence rooted not in your own ability but in the knowledge that God is for you is the starting point of every spiritual victory. Pastor Ricardo draws on the image of an army that deploys different people with different skill sets - communicators, fighters, strategists - to show that no battle is won by one person acting alone. In the same way, the body of Christ, the Word of God, prayer, and the Holy Spirit are all part of the arsenal God has already placed in your hands.",
        "Victory also requires wisdom about which battles deserve your full fight and which ones require you to walk away. Some situations - like a relationship built on repeated harm - are not won by fighting harder. They are won by declaring that your life carries more value than the conflict. Pastor Ricardo's closing challenge is simple and direct: stop telling yourself you have already lost. Stand confident. Resist the devil and he will flee. Declare with David that the battle is the Lord's - and watch God move on your behalf."
      ]
    }
  ],
  "faqs": [
    {
      "q": "What does 1 Samuel 17:47 say about spiritual battles?",
      "a": "1 Samuel 17:47 says, 'And all this assembly shall know that the LORD saveth not with sword and spear: for the battle is the LORD's, and he will give you into our hands.' This verse, spoken by David before defeating Goliath, reminds believers that God does not need human strength or weapons to win battles. When you truly believe the battle belongs to God, victory is already on its way."
    },
    {
      "q": "Why do I keep losing the same battles over and over again?",
      "a": "Most repeated defeats begin in the mind - when you have already accepted a negative outcome before the battle is even over. Pastor Ricardo points out that Job said 'the thing which I greatly feared is come upon me,' showing that fear and a defeated mindset can actually draw the very outcome you dread. Changing what you believe about the battle changes the result."
    },
    {
      "q": "How do I know when to walk away from a fight instead of standing my ground?",
      "a": "Not every battle is meant to be won by pushing harder - some are won by stepping back with wisdom. Pastor Ricardo uses the example of an abusive relationship to show that choosing your life over the fight is not weakness but victory. Proverbs and the New Testament both affirm that wisdom knows which battles belong to you and which ones belong to God."
    },
    {
      "q": "What does it mean that the battle is the Lord's in everyday life?",
      "a": "It means you are not designed to carry the full weight of every conflict, fear, sickness, or struggle on your own. Romans 8:37 declares that believers are more than conquerors through Christ Jesus. Practically, it means bringing your battle to God in prayer, resisting the enemy as James 4:7 instructs, and trusting that God is already working on your behalf even when you cannot see it."
    }
  ],
  "steps": [
    "Surrender your specific battle to God today in prayer - speak it out loud and declare with David from 1 Samuel 17:47 that the battle belongs to the Lord, not to you.",
    "Identify one battle you have already been losing in your mind - write down the fear or defeat you keep rehearsing, then replace it with a scripture like Romans 8:37 that declares you are more than a conqueror through Christ Jesus.",
    "Choose your battles with wisdom this week - ask God to show you which conflicts require you to stand firm, and which ones require you to walk away, trusting that walking away in faith is not defeat but victory."
  ]
}

type Section = { heading: string; paragraphs: string[] }
type Faq     = { q: string; a: string }

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
              Sunday Message - Fountain of Grace International - Pretoria North
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-5">
              {sd.headline}
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              {sd.intro}
            </p>
            <p className="text-white/60 text-sm">
              Pastor Ricardo Zaal - Fountain of Grace International, Pretoria North - {sd.dateDisplay}
            </p>
          </div>
        </header>

        <section className="bg-white pt-10 pb-2 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/PENDING"
                title={sd.headline}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-14 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">

            {(sd.sections as Section[]).map((section, i) => (
              <div key={i} className="mb-10">
                <h2 className="text-xl font-bold text-[#2a9df4] mb-3">{section.heading}</h2>
                {section.paragraphs.map((para, j) => (
                  <p key={j} className="text-[#555] leading-relaxed mb-4">{para}</p>
                ))}
              </div>
            ))}

            <blockquote className="border-l-4 border-[#FFD600] pl-5 py-2 my-10 bg-[#f0fafa] rounded-r-xl">
              <p className="text-[#2a9df4] font-semibold text-lg italic">
                &quot;{sd.quote}&quot;
              </p>
              <cite className="text-[#555] text-sm not-italic mt-2 block">- Pastor Ricardo Zaal</cite>
            </blockquote>

            <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">What to Do Next</h2>
            <ol className="list-decimal list-inside space-y-3 text-[#555] leading-relaxed mb-6">
              {(sd.steps as string[]).map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>

            <p className="text-[#555] leading-relaxed">
              If you are in Pretoria North,{' '}
              <Link href="/plan-your-visit" className="fgi-link">
                come on a Sunday
              </Link>
              {' '} - these messages are preached live every week at Fountain of Grace International, 323 B Danie Theron Street.
            </p>
          </div>
        </section>

        <section className="bg-gray-50 py-12 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-[#1a1a1a] mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {(sd.faqs as Faq[]).map((faq, i) => (
                <div key={i}>
                  <h3 className="font-semibold text-[#1a1a1a] mb-2">{faq.q}</h3>
                  <p className="text-[#555] leading-relaxed text-sm">{faq.a}</p>
                </div>
              ))}
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
      </article>
    </>
  )
}
