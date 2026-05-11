import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Born Original, Marked by God | Psalm 139:14 | Pastor Ricardo Zaal | Fountain of Grace International",
  description: "Struggling to find your identity? Pastor Ricardo Zaal of Pretoria North unpacks why God crafted you as a one-of-a-kind original with purpose only you can fulfil.",
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/sermons/born-original-marked-by-god-identity-purpose',
  },
  openGraph: {
    title: "Born Original, Marked by God | Psalm 139:14 | Pastor Ricardo Zaal",
    description: "You were never meant to live in someone else's shadow. Discover your God-given identity with Pastor Ricardo Zaal.",
    type: 'article',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International - Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/sermons/born-original-marked-by-god-identity-purpose',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "Born Original, Marked by God | Psalm 139:14 | Pastor Ricardo Zaal",
    description: "In this sermon, Pastor Ricardo Zaal of Fountain of Grace International in Pretoria North explores what it means to be born original and marked by God. Drawing from Psalm 139:14 and Jeremiah 1:5, he unpacks the Hebrew roots of being fearfully and wonderfully made and calls believers to stop imitating others and walk fully in their unique divine design.",
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
    datePublished: '2025-08-30',
    url: 'https://www.fountaingrace.org/sermons/born-original-marked-by-god-identity-purpose',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Sermons', item: 'https://www.fountaingrace.org/sermons' },
      { '@type': 'ListItem', position: 3, name: "Born Original, Marked by God | Psalm 139:14 | Pastor Ricardo Zaal", item: 'https://www.fountaingrace.org/sermons/born-original-marked-by-god-identity-purpose' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "What does Psalm 139:14 mean when it says fearfully and wonderfully made?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "The Hebrew word for fearfully in Psalm 139:14 is yare, which means to stand in awe, while wonderfully comes from pala, meaning to be set apart and distinguished through supernatural skill. Together they declare that you were not mass-produced but individually crafted by God with divine intentionality. The KJV says, I will praise thee; for I am fearfully and wonderfully made: marvellous are thy works; and that my soul knoweth right well.",
        },
      },
      {
        '@type': 'Question',
        name: "Why do I keep comparing myself to others and never feel good enough?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Comparison is rooted in a misunderstanding of how God made you - when you do not know your own unique design and purpose, you naturally reach for someone else's identity to fill the gap. Pastor Ricardo Zaal points out that even famous people like Michael Jackson rejected who they were, and yet others then imitate that already-distorted version, moving even further from their original selves. The Bible says in Jeremiah 1:5 that God knew you and ordained you before birth, which means there is a specific purpose only you can fulfil.",
        },
      },
      {
        '@type': 'Question',
        name: "How do I find my God-given identity when I was born in difficult or painful circumstances?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "God's knowledge of you, described in Jeremiah 1:5 with the Hebrew word yada, is an intimate, experiential knowledge - He was aware of every detail of your conception and birth, including painful or traumatic ones. Pastor Ricardo Zaal teaches that even a child born out of violation or hardship was placed into that family by God because they carry something that is needed there - a healing, a purpose, a breakthrough. Your origins do not define your destiny; God's design does.",
        },
      },
      {
        '@type': 'Question',
        name: "What does it mean that humans are made in the image of God?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Genesis 1:27 says God created man in his own image, and the Hebrew word for image is tselem, meaning an imprint, an essence, and a shadow. This means you do not merely resemble God in a general way - you carry Him imprinted in your very makeup and DNA. Colossians 1:15 also describes Christ as the image of the invisible God, using the Greek word eikon, which means an exact representation, showing that bearing God's image is a call to represent Him accurately in the world.",
        },
      }
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: "Born Original, Marked by God | Psalm 139:14 | Pastor Ricardo Zaal",
    description: "Born Original, Marked by God | Psalm 139:14 | Pastor Ricardo Zaal",
    thumbnailUrl: 'https://img.youtube.com/vi/PENDING/maxresdefault.jpg',
    uploadDate: '2025-08-30',
    embedUrl: 'https://www.youtube.com/embed/PENDING',
    url: 'https://www.fountaingrace.org/sermons/born-original-marked-by-god-identity-purpose',
    author: { '@type': 'Person', name: 'Pastor Ricardo Zaal' },
    publisher: {
      '@type': 'Organization',
      name: 'Fountain of Grace International',
      url: 'https://www.fountaingrace.org',
    },
  }
]

const sd = {
  "headline": "Born Original, Marked by God | Psalm 139:14 | Pastor Ricardo Zaal",
  "intro": "Do you ever feel like you were born into the wrong story - comparing yourself to others, wishing you looked different, or trying to fit a mould someone else set for you? Pastor Ricardo Zaal tackles that pressure head-on in this message, showing that God did not clone you - He crafted you. From the Hebrew meaning of fearfully and wonderfully made to the intimate knowledge God had of you before birth, this sermon reminds you that your fingerprints, your quirks, and your calling are not accidents.",
  "scripture": "Psalm 139:14",
  "quote": "God didn't clone us - He crafted us. Every one of us carries a distinct imprint of His divine spiritual DNA, formed even before birth, tied to a purpose only we can fulfil.",
  "dateDisplay": "30 August 2025",
  "sections": [
    {
      "heading": "No Two People Are the Same and That Is the Point",
      "paragraphs": [
        "Billions of people have walked this earth across thousands of years of human history, and not one of them shares your fingerprints. That single fact - so ordinary we rarely stop to think about it - carries the weight of an extraordinary truth. God did not run out of unique designs after a few thousand people and start repeating Himself. He has never repeated Himself. Every person born into this world arrives as a first edition, never to be reprinted. Pastor Ricardo Zaal opens this message by sitting with that reality and asking why, given such clear evidence of God's creative intentionality, so many people spend their lives trying to become someone else.",
        "The examples are everywhere. People who reshape their bodies, their voices, their mannerisms, their entire personalities to match a celebrity, a peer, or a parent's unfulfilled dream. Pastor Ricardo points to Michael Jackson as a striking case - a man who was born uniquely Black, with a natural afro, and who by the end of his life had altered his appearance so dramatically he was unrecognisable as the person he once was. And yet people still try to imitate that imitation. When you copy a copy, you move further and further from the original. God's invitation is always back to the original."
      ]
    },
    {
      "heading": "Fearfully and Wonderfully Made - What the Hebrew Actually Says",
      "paragraphs": [
        "Psalm 139:14 is one of the most quoted verses in church culture, but its depth is often reduced to a feel-good affirmation. When Pastor Ricardo unpacks the Hebrew behind it, the verse becomes something far more confrontational and far more liberating. The word translated fearfully comes from yare, which carries the meaning of standing in awe - you were made in such a way that the appropriate response is wonder and reverence. The word wonderfully comes from pala, meaning to be set apart, to be distinguished, to be done through supernatural skill. You were not assembled on a production line. You were distinguished from every other human being through a process that only God could execute.",
        "This is not poetry designed to make insecure people feel better for a moment. It is a foundational statement about the nature of your existence. You are an awe-inspiring, supernaturally distinguished original. The problem is not that God made you wrong - the problem is that you have believed other people's assessments of you more than you have believed His. Pastor Ricardo shares honestly about growing up being teased for the size of his ears, and the temptation to want surgery to fix what felt like a flaw. But what others mock as a flaw is often simply a distinction - and distinctions are exactly what God specialises in."
      ]
    },
    {
      "heading": "God Knew You Before You Were Formed - Jeremiah 1:5 and the Intimacy of Yada",
      "paragraphs": [
        "Jeremiah 1:5 records God saying, Before I formed thee in the belly I knew thee; and before thou camest forth out of the womb I sanctified thee, and I ordained thee a prophet unto the nations. The word translated knew here is the Hebrew yada, and it is not a casual, surface-level awareness. It is the word used for the deepest kind of knowing - intimate, experiential, relational. Pastor Ricardo illustrates the difference with a simple story: he has greeted the same man near a purple building in Pretoria for over a decade, knows his name is Peter, but knows nothing else about him. That is awareness. What God has toward you is something incomparably deeper.",
        "God knows your thoughts before you think them. He knows the fears you have never spoken aloud. He knows the promises you made in desperation and forgot. He knew all of this before your mother knew she was pregnant. The weight of that intimacy means that no painful label placed on you by another person - no name you were called in school, no narrative assigned to you by your family, no identity stolen from you by trauma - can override what God established about you before time began. You were sanctified, which means set apart. You were ordained, which means appointed for a specific work. These are not rewards for good behaviour. They are the conditions of your birth."
      ]
    },
    {
      "heading": "You Carry God Imprinted in Your Makeup - Do Not Trade That for a Lower Grade",
      "paragraphs": [
        "Genesis 1:27 says God created man in his own image - and the Hebrew word tselem means an imprint, an essence, and a shadow. You do not merely look like God in some vague theological sense. You carry Him imprinted in your very constitution. When Pastor Ricardo connects this to Colossians 1:15, where Christ is described as the image of the invisible God using the Greek eikon - meaning an exact representation - the point becomes clear. To walk in your God-given identity is not arrogance. It is representation. You are meant to make God visible in the world, and you can only do that as yourself, not as a diluted version of someone else.",
        "Pastor Ricardo closes with an image from the South African school system that will resonate with many. Some learners were pushed from higher grade Mathematics to standard grade - or today's equivalent - simply because those around them were afraid they would fail. He names this as a trap. When you accept a lower-grade version of yourself to fit in, to avoid rejection, or to escape the pressure of your own potential, you do not just lower your performance - you lower your character. God has designed you to stand out wherever you are placed. The goal is not to survive by taking the easier paper. The goal is to walk in the fullness of what you were originally made to be."
      ]
    }
  ],
  "faqs": [
    {
      "q": "What does Psalm 139:14 mean when it says fearfully and wonderfully made?",
      "a": "The Hebrew word for fearfully in Psalm 139:14 is yare, which means to stand in awe, while wonderfully comes from pala, meaning to be set apart and distinguished through supernatural skill. Together they declare that you were not mass-produced but individually crafted by God with divine intentionality. The KJV says, I will praise thee; for I am fearfully and wonderfully made: marvellous are thy works; and that my soul knoweth right well."
    },
    {
      "q": "Why do I keep comparing myself to others and never feel good enough?",
      "a": "Comparison is rooted in a misunderstanding of how God made you - when you do not know your own unique design and purpose, you naturally reach for someone else's identity to fill the gap. Pastor Ricardo Zaal points out that even famous people like Michael Jackson rejected who they were, and yet others then imitate that already-distorted version, moving even further from their original selves. The Bible says in Jeremiah 1:5 that God knew you and ordained you before birth, which means there is a specific purpose only you can fulfil."
    },
    {
      "q": "How do I find my God-given identity when I was born in difficult or painful circumstances?",
      "a": "God's knowledge of you, described in Jeremiah 1:5 with the Hebrew word yada, is an intimate, experiential knowledge - He was aware of every detail of your conception and birth, including painful or traumatic ones. Pastor Ricardo Zaal teaches that even a child born out of violation or hardship was placed into that family by God because they carry something that is needed there - a healing, a purpose, a breakthrough. Your origins do not define your destiny; God's design does."
    },
    {
      "q": "What does it mean that humans are made in the image of God?",
      "a": "Genesis 1:27 says God created man in his own image, and the Hebrew word for image is tselem, meaning an imprint, an essence, and a shadow. This means you do not merely resemble God in a general way - you carry Him imprinted in your very makeup and DNA. Colossians 1:15 also describes Christ as the image of the invisible God, using the Greek word eikon, which means an exact representation, showing that bearing God's image is a call to represent Him accurately in the world."
    }
  ],
  "steps": [
    "Read Psalm 139:13-16 daily this week and replace any negative self-talk with the declaration that you are fearfully and wonderfully made - not as a cliche but as a Hebrew covenant statement of how God set you apart.",
    "Identify one area where you have been imitating someone else's style, calling, or identity out of insecurity and make a deliberate choice to develop your own voice in that area, trusting that what God placed in you is sufficient.",
    "Write down two or three qualities about yourself that others have mocked or that you have been ashamed of, then ask God in prayer whether those same qualities might actually be the distinguishing marks of your specific purpose - as He told Jeremiah in Jeremiah 1:5."
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
