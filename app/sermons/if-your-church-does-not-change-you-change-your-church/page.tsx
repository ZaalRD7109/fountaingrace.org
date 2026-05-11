import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Are You Actually Being Transformed or Just Showing Up? | Fountain of Grace International",
  description: "Feeling stuck spiritually? Pastor Ricardo Zaal of Pretoria North asks the hard question - is your church truly transforming you? A bold word from Joel 2.",
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/sermons/if-your-church-does-not-change-you-change-your-church',
  },
  openGraph: {
    title: "Are You Actually Being Transformed or Just Showing Up?",
    description: "If your church is not changing you, something is missing. Pastor Ricardo Zaal delivers a bold, Spirit-led challenge from Joel 2.",
    type: 'article',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International - Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/sermons/if-your-church-does-not-change-you-change-your-church',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "Are You Actually Being Transformed or Just Showing Up?",
    description: "Pastor Ricardo Zaal of Fountain of Grace International in Pretoria North challenges believers to evaluate whether their church is truly producing spiritual transformation. Drawing from Joel 2:27-28, he makes the case that where the Spirit of God is present, change is inevitable.",
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
    datePublished: '2023-07-02',
    url: 'https://www.fountaingrace.org/sermons/if-your-church-does-not-change-you-change-your-church',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Sermons', item: 'https://www.fountaingrace.org/sermons' },
      { '@type': 'ListItem', position: 3, name: "Are You Actually Being Transformed or Just Showing Up?", item: 'https://www.fountaingrace.org/sermons/if-your-church-does-not-change-you-change-your-church' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "What does Joel 2:28 say about the Holy Spirit?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Joel 2:28 in the KJV says, And it shall come to pass afterward that I will pour out my spirit upon all flesh, and your sons and your daughters shall prophesy, your old men shall dream dreams, your young men shall see visions. This verse is a direct promise from God that His Spirit would be poured out on believers, evidenced by prophecy, dreams, and visions. Pastor Ricardo uses this scripture to show that a Spirit-filled church should carry these visible marks of God's presence.",
        },
      },
      {
        '@type': 'Question',
        name: "How do I know if I should leave my church?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "If you have been attending a church for a long time and sense no growth, no conviction, and no evident presence of the Holy Spirit, it may be time to ask honest questions about whether Jesus is truly the centre of that church. Pastor Ricardo points out that a church centred on the personality of its leader rather than on Jesus is a warning sign. Where Jesus is present, change is inevitable - if change is absent, something is missing.",
        },
      },
      {
        '@type': 'Question',
        name: "How can I tell if the Holy Spirit is present in a church?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "According to Pastor Ricardo, drawing from Joel 2 and the broader New Testament, the presence of the Holy Spirit in a church produces conviction, transformation, and spiritual gifts such as prophecy and vision. If a congregation regularly meets with no sense of God's Spirit moving and no change in the lives of its members, that is a serious concern. The Spirit was sent by Jesus Himself to teach and guide believers into all truth, as He promised before His ascension.",
        },
      },
      {
        '@type': 'Question',
        name: "What is the sign of a church that is not centred on Jesus?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Pastor Ricardo identifies a clear warning sign - when the leader or church culture constantly focuses on self, using language centred on their own greatness or achievements rather than pointing people to Jesus, it reveals that Jesus is not truly the centre. A genuine church should make Jesus evident in every gathering so that anyone who comes into contact with its members sees Jesus reflected in their lives. If people cannot see Jesus through you, the church environment may not be producing real transformation.",
        },
      }
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: "Are You Actually Being Transformed or Just Showing Up?",
    description: "Are You Actually Being Transformed or Just Showing Up?",
    thumbnailUrl: 'https://img.youtube.com/vi/PENDING/maxresdefault.jpg',
    uploadDate: '2023-07-02',
    embedUrl: 'https://www.youtube.com/embed/PENDING',
    url: 'https://www.fountaingrace.org/sermons/if-your-church-does-not-change-you-change-your-church',
    author: { '@type': 'Person', name: 'Pastor Ricardo Zaal' },
    publisher: {
      '@type': 'Organization',
      name: 'Fountain of Grace International',
      url: 'https://www.fountaingrace.org',
    },
  }
]

const sd = {
  "headline": "Are You Actually Being Transformed or Just Showing Up?",
  "intro": "Sitting in a church week after week but feeling no different can be one of the most quietly painful experiences a believer faces. Pastor Ricardo Zaal tackles this head-on with a bold statement - if your church does not change you, change your church. This sermon from Fountain of Grace International in Pretoria North is a Spirit-filled call to stop settling for a church experience that leaves you exactly where you started.",
  "scripture": "Joel 2:27-28",
  "quote": "If your church does not change you, change your church - because where Jesus is, change is not optional. He cannot enter a room and leave it the same.",
  "dateDisplay": "2 July 2023",
  "sections": [
    {
      "heading": "The Question That Makes Church People Uncomfortable",
      "paragraphs": [
        "There are few things more quietly painful than sitting in a church week after week, month after month, and realising that nothing is changing inside you. You know the songs. You know the order of service. You even know which row you prefer to sit in. But if someone asked you honestly whether the church is transforming you, making you more like Jesus, producing growth and conviction and hunger for God - what would your answer be? Pastor Ricardo Zaal opens this message with a statement that cuts straight through religious comfort: if your church does not change you, change your church. It is not a statement made to cause division. It is a statement made to provoke honest reflection.",
        "The context matters. Pastor Ricardo preached this message on a Sunday morning in Pretoria North when the equipment failed, the microphone would not cooperate, and everything seemed to conspire against the service happening at all. Yet he pressed on, because he understood that the assignment God places on a person does not lift when circumstances become inconvenient. That very experience of pushing through distraction became the doorway into the message - because the same distractions that try to stop a preacher from delivering the word are the same subtle forces that keep believers stuck in environments that are not producing the fruit God intends for their lives."
      ]
    },
    {
      "heading": "Where Jesus Is, Change Is Not Optional",
      "paragraphs": [
        "Pastor Ricardo makes a clear and bold claim: if Jesus is truly present in a church, change will happen. It is not a maybe. It is not dependent on how talented the worship team is or how polished the preaching sounds. Where Jesus is, transformation follows as naturally as light follows sunrise. He points to the accounts in the Gospels where people were so desperate to get near Jesus that they broke open a roof to lower a man down to Him. That kind of hunger, that kind of expectation, is what a genuine encounter with Jesus produces. If a church environment is not stirring that hunger in people, it is worth asking whether Jesus is truly at the centre of it.",
        "One of the warning signs Pastor Ricardo identifies is a church culture where the leader constantly draws attention to themselves - where the message is more about the man than about the Master. When the language of a church revolves around the personality, achievements, or greatness of its leader, and Jesus is pushed to the edges, that is not a minor issue. It is a fundamental problem. God's word through the Apostle Paul makes it clear that one person plants, another waters, but it is God alone who gives the increase. A church that forgets this and elevates a human voice above the voice of the Holy Spirit is a church where genuine growth will eventually stop."
      ]
    },
    {
      "heading": "Joel 2 and the Evidence of a Spirit-Filled Church",
      "paragraphs": [
        "Pastor Ricardo anchors the message in Joel 2:27-28, where the Lord declares, And ye shall know that I am in the midst of Israel, and that I am the Lord your God, and none else, and my people shall never be ashamed. And it shall come to pass afterward that I will pour out my spirit upon all flesh, and your sons and your daughters shall prophesy, your old men shall dream dreams, your young men shall see visions. This promise was not given for a single generation. It was given as a marker of what life looks like when God is genuinely present among His people. The outpouring of the Spirit is the evidence. Prophecy, dreams, and visions are not decorations on top of church life - they are signs that God is at home in a congregation.",
        "For any believer who has sat in services that feel empty of Spirit, who has gone through the motions of worship without any sense of God's nearness, this passage is both a comfort and a challenge. It is a comfort because it shows what God wants for His people - His Spirit poured out, His presence tangible and real. It is a challenge because it invites honest comparison. If that outpouring has not been sensed in your church for a long season, it is not enough to simply carry on out of loyalty or habit. Pastor Ricardo calls believers to take responsibility for their own spiritual environment, to seek out a place where the Spirit of God is genuinely at work, and to stop allowing the fear of change to keep them spiritually stagnant."
      ]
    },
    {
      "heading": "Encouragement for Leaders Who Are Pushing Through",
      "paragraphs": [
        "While the sermon is primarily a challenge to church members, Pastor Ricardo also carries a strong word for every pastor, elder, deacon, and anyone who stands up to minister the word in any setting - whether that is a polished church building, a small lounge gathering, or a street corner in Pretoria North. He speaks directly to the discouragement that comes when things do not go to plan, when the crowd is small, when the technology fails, and when it feels like the effort is not producing visible results. His word is simple and clear - do not stop pushing. Do not stop pressing forward with the assignment God has given you.",
        "He reminds leaders that the person who benefits most from preparation is often the one doing the preparing. Every hour spent with God in study, in prayer, in wrestling with a text, is an hour of transformation for the one who is about to stand and preach. Any minute with God is better than a thousand years in what this world offers. This is not a cliche - it is a conviction that shapes how a Spirit-filled minister approaches their calling. Whether two people or two hundred people are in the room, the assignment remains the same. Start small, be faithful, and trust that God is bigger than the smallness of any beginning."
      ]
    }
  ],
  "faqs": [
    {
      "q": "What does Joel 2:28 say about the Holy Spirit?",
      "a": "Joel 2:28 in the KJV says, And it shall come to pass afterward that I will pour out my spirit upon all flesh, and your sons and your daughters shall prophesy, your old men shall dream dreams, your young men shall see visions. This verse is a direct promise from God that His Spirit would be poured out on believers, evidenced by prophecy, dreams, and visions. Pastor Ricardo uses this scripture to show that a Spirit-filled church should carry these visible marks of God's presence."
    },
    {
      "q": "How do I know if I should leave my church?",
      "a": "If you have been attending a church for a long time and sense no growth, no conviction, and no evident presence of the Holy Spirit, it may be time to ask honest questions about whether Jesus is truly the centre of that church. Pastor Ricardo points out that a church centred on the personality of its leader rather than on Jesus is a warning sign. Where Jesus is present, change is inevitable - if change is absent, something is missing."
    },
    {
      "q": "How can I tell if the Holy Spirit is present in a church?",
      "a": "According to Pastor Ricardo, drawing from Joel 2 and the broader New Testament, the presence of the Holy Spirit in a church produces conviction, transformation, and spiritual gifts such as prophecy and vision. If a congregation regularly meets with no sense of God's Spirit moving and no change in the lives of its members, that is a serious concern. The Spirit was sent by Jesus Himself to teach and guide believers into all truth, as He promised before His ascension."
    },
    {
      "q": "What is the sign of a church that is not centred on Jesus?",
      "a": "Pastor Ricardo identifies a clear warning sign - when the leader or church culture constantly focuses on self, using language centred on their own greatness or achievements rather than pointing people to Jesus, it reveals that Jesus is not truly the centre. A genuine church should make Jesus evident in every gathering so that anyone who comes into contact with its members sees Jesus reflected in their lives. If people cannot see Jesus through you, the church environment may not be producing real transformation."
    }
  ],
  "steps": [
    "Honestly evaluate your spiritual growth over the past year and identify whether your church environment is producing genuine change in your character, hunger for God, and love for people - anchor this in 2 Corinthians 3:18 which says we are changed from glory to glory by the Spirit of the Lord.",
    "Look for the evidence of the Holy Spirit in your church - not just emotional atmosphere but conviction, transformation, and the gifts described in Joel 2:28 - and if those marks are consistently absent, begin praying with an open heart about whether God is calling you somewhere else.",
    "If you are a leader or minister, recommit to your assignment regardless of circumstances - write down where you are spiritually today so you can measure growth, and remember that any time spent in God's presence preparing to serve others is time that transforms you first."
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
