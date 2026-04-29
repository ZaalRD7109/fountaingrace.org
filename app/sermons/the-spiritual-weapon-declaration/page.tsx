import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Spiritual Weapon - Declaration Session | Fountain of Grace International Pretoria North',
  description:
    'Part 2 of the Spiritual Weapon series. This is not a passive message - it is a declaration. Speak to the earth. Break family cycles, sickness, financial blockage, and spiritual attack. Pretoria North.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/sermons/the-spiritual-weapon-declaration',
  },
  openGraph: {
    title: 'The Spiritual Weapon - Declaration Session (Part 2)',
    description:
      "Jeremiah 22:29 - O earth, earth, earth, hear the word of the LORD. God called to the earth three times. You have the same authority. Genesis 1:26 gave you dominion. John 14:12 says the works Jesus did, you shall do also. This is your activation session. Fountain of Grace International, Pretoria North.",
    type: 'article',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International - Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/sermons/the-spiritual-weapon-declaration',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Spiritual Weapon - Declaration Session (Part 2)',
    description: "Part 2 follows the Spiritual Weapon teaching. Genesis 1:26 gave man dominion. Jeremiah 22:29 - God spoke to the earth three times. John 14:12 - greater works. This session activates the authority you carry through spoken declarations over family cycles, sickness, finances, and spiritual attack.",
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
    datePublished: '2025-10-26',
    url: 'https://www.fountaingrace.org/sermons/the-spiritual-weapon-declaration',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Sermons', item: 'https://www.fountaingrace.org/sermons' },
      { '@type': 'ListItem', position: 3, name: 'The Spiritual Weapon - Declaration Session', item: 'https://www.fountaingrace.org/sermons/the-spiritual-weapon-declaration' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What does Jeremiah 22:29 mean - O earth, earth, earth, hear the word of the LORD?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Jeremiah 22:29 records God calling to the earth three times - a trinity pattern, a legal declaration, a direct address to creation itself. This mirrors Genesis 1 where God spoke to the earth before He made man, and the earth obeyed. Pastor Ricardo Zaal at Fountain of Grace International teaches this as a foundational scripture for understanding that the earth is designed to hear and respond to the spoken word of God - and that as someone made in God's image, that authority extends to you.",
        },
      },
      {
        '@type': 'Question',
        name: 'What does it mean to speak to the earth and what happens when you do?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Job 12:8 says speak to the earth and it shall teach thee. Genesis 1:26 says God gave man dominion over creation. Speaking to the earth - declaring God's word with authority over your circumstances, family, health, and finances - is not a ritual. It is activating the dominion God gave you at creation. Proverbs 18:21 says death and life are in the power of the tongue. Your spoken declaration, aligned with Scripture, is the weapon. It requires your voice. It does not work in your head.",
        },
      },
      {
        '@type': 'Question',
        name: 'Does declaring God\'s word actually break spiritual cycles?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "John 14:12 records Jesus saying the works that he did, you shall do also - and greater works. The authority Jesus exercised in John 8:6 - where he wrote on the ground and every accuser left - was not exclusive to him. It was a demonstration of the authority every believer carries as one made in God's image and filled with the Holy Spirit. Cycles break when authority is exercised. The declaration session preached at Fountain of Grace International in Pretoria North walks through this step by step - covering family cycles, sickness, financial blockage, relational patterns, and spiritual attack.",
        },
      },
      {
        '@type': 'Question',
        name: 'Why do declarations need to be spoken out loud - why can\'t I just think them?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Proverbs 18:21 says the power is in the tongue - not the mind. Romans 10:10 says with the mouth confession is made. The pattern throughout Scripture is spoken authority: God spoke and creation came forth. Jesus spoke to storms, to fig trees, to sickness, to death. The earth and the spiritual realm respond to the sound of declared authority. A thought kept in your head has no sound. The weapon requires your voice. Pick up something as a point of contact, open your mouth, and speak it.",
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
              Declaration Session · Part 2 · Fountain of Grace International · Pretoria North
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-5">
              The Spiritual Weapon - Declaration Session
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              This is not a passive message. This is an activation. Following the teaching on the weapon Jesus used in John 8:6 - this session puts it in your hands. Pick up something to hold. Open your mouth. Speak. The earth is programmed to answer you.
            </p>
            <p className="text-white/60 text-sm">
              Pastor Ricardo Zaal · Fountain of Grace International, Pretoria North
            </p>
          </div>
        </header>

        <section className="bg-white pt-10 pb-2 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/Ep0FhC0yhyw"
                title="The Spiritual Weapon - Declaration Session Part 2"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-14 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto space-y-6">

            <p className="text-[#555] leading-relaxed text-lg">
              The teaching is done. Now comes the activation. If you watched{' '}
              <Link href="/sermons/the-spiritual-weapon-no-one-speaks-about" className="fgi-link">
                Part 1 - The Spiritual Weapon No One Speaks About
              </Link>
              , you know what the weapon is. This session is about using it. Do not say these declarations in your head. Speak them out loud. The weapon requires your voice.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mt-8 mb-3">The Foundation of Your Authority</h2>
            <p className="text-[#555] leading-relaxed">
              Genesis 1:26 - God made man in His image and gave him dominion over the earth. That dominion was not an experiment. It was a legal assignment. The fall disrupted man&apos;s walk with God - but Jesus restored full authority and said in John 14:12 that the works he did, you shall do also - and greater works than these, because he went to the Father.
            </p>
            <p className="text-[#555] leading-relaxed">
              Jeremiah 22:29 records God speaking directly to the earth: <em>&quot;O earth, earth, earth, hear the word of the LORD.&quot;</em> Three times. A trinity pattern. A legal declaration. The earth was listening then. It is listening now. And as one made in God&apos;s image - it is listening for you.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mt-8 mb-3">Declarations Are Not Positive Thinking</h2>
            <p className="text-[#555] leading-relaxed">
              Proverbs 18:21 does not say death and life are in the power of the mind. It says the power is in the tongue. Romans 10:10 says with the mouth confession is made. The pattern throughout Scripture is spoken authority. God spoke to darkness. Jesus spoke to storms. He spoke to fig trees. He spoke to sickness. He spoke to death. All of it responded.
            </p>
            <p className="text-[#555] leading-relaxed">
              A declaration is not wishful thinking. It is the alignment of your mouth with what God has already said - spoken with the authority He assigned to you in Genesis 1. When you speak it, creation hears it.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mt-8 mb-3">What This Session Covers</h2>
            <ul className="list-disc list-inside space-y-2 text-[#555] leading-relaxed mb-6">
              <li>Breaking family cycles - patterns that have repeated for generations</li>
              <li>Health and healing - speaking life over sickness returning to your body</li>
              <li>Financial breakthrough - breaking the cycle of income that never goes further than the date</li>
              <li>Relationships and destiny - releasing what God assigned to you that has been blocked</li>
              <li>Spiritual attack - standing against what the enemy has written against your name</li>
            </ul>

            <blockquote className="border-l-4 border-[#FFD600] pl-5 py-2 my-8 bg-[#f0fafa] rounded-r-xl">
              <p className="text-[#2a9df4] font-semibold text-lg italic">
                &quot;O earth, earth, earth, hear the word of the LORD. God said it three times. He was not repeating himself. He was establishing legal authority. Now open your mouth - and do the same.&quot;
              </p>
              <cite className="text-[#555] text-sm not-italic mt-2 block">- Pastor Ricardo Zaal, Fountain of Grace International</cite>
            </blockquote>

            <p className="text-[#555] leading-relaxed">
              If you are in Pretoria North,{' '}
              <Link href="/plan-your-visit" className="fgi-link">
                come on a Sunday
              </Link>
              {' '}- Fountain of Grace International meets at 323 B Danie Theron Street at 09:00.
            </p>
          </div>
        </section>

        <section className="bg-[#f0fafa] py-14 px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-[#2a9df4] mb-8">Questions this message answers</h2>
            <dl className="space-y-0">
              {[
                {
                  q: "What does Jeremiah 22:29 mean - O earth, earth, earth, hear the word of the LORD?",
                  a: "God called to the earth three times - a trinity pattern, a legal declaration, a direct address to creation itself. This mirrors Genesis 1 where God spoke to the earth before He made man, and the earth obeyed. Pastor Ricardo Zaal at Fountain of Grace International teaches that the earth is designed to hear and respond to spoken authority - and that authority extends to you as one made in God's image.",
                },
                {
                  q: "What does it mean to speak to the earth and what happens when you do?",
                  a: "Job 12:8 says speak to the earth and it shall teach thee. Genesis 1:26 gave man dominion over creation. Speaking to the earth means declaring God's word with authority over your circumstances, family, health, and finances. Proverbs 18:21 says death and life are in the power of the tongue. Your spoken declaration, aligned with Scripture, is the weapon. It does not work in your head - it requires your voice.",
                },
                {
                  q: "Does declaring God's word actually break spiritual cycles?",
                  a: "John 14:12 records Jesus saying the works that he did, you shall do also - and greater works. The authority Jesus demonstrated in John 8:6 - where he wrote on the ground and every accuser left - was a demonstration of what every believer carries. Cycles break when authority is exercised. The declaration session preached at Fountain of Grace International covers family cycles, sickness, financial blockage, relational patterns, and spiritual attack.",
                },
                {
                  q: "Why do declarations need to be spoken out loud - why can't I just think them?",
                  a: "Proverbs 18:21 says the power is in the tongue - not the mind. Romans 10:10 says with the mouth confession is made. God spoke and creation came forth. Jesus spoke to storms, sickness, and death - and all of it responded. The earth and the spiritual realm respond to sound. A thought kept in your head has no sound. Open your mouth and speak it.",
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
                Preached by Pastor Ricardo Zaal at Fountain of Grace International, 323 B Danie
                Theron Street, Pretoria North, Gauteng, South Africa (NPO No: 316-193). Sunday
                services at 09:00. Fountain of Grace International in Pretoria North teaches
                practical, scripture-based messages designed to connect with real life challenges
                and the specific context of people living in Pretoria North and the surrounding areas.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#008080] py-14 px-4 sm:px-6">
          <div className="section-container text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Come and hear this in person - Pretoria North, every Sunday.
            </h2>
            <p className="text-white/70 mb-8 max-w-lg mx-auto">
              323 B Danie Theron Street. Services at 09:00. Someone will meet you at the door.
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
