import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Anointing That Makes Hell Fear You | Isaiah 10:27 | Fountain of Grace International',
  description:
    'The anointing is not eloquence or performance. Isaiah 10:27 says the yoke is destroyed because of it. This message explains what the anointing actually is and why hell fears it. Pretoria North.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/sermons/the-anointing-that-makes-hell-fear-you',
  },
  openGraph: {
    title: 'The Anointing That Makes Hell Fear You | Isaiah 10:27',
    description:
      'God marks you as His property. The anointing takes you beyond your natural ability, breaks every yoke, and stops spiritual infection. Pretoria North.',
    type: 'article',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International - Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/sermons/the-anointing-that-makes-hell-fear-you',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Anointing That Makes Hell Fear You',
    description: 'Based on Isaiah 10:27, 1 Samuel 16:13, and Exodus 31:3, this message explains the anointing as God\'s mark of ownership - breaking yokes, taking believers beyond natural ability, and stopping spiritual infection.',
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
    datePublished: '2025-08-24',
    url: 'https://www.fountaingrace.org/sermons/the-anointing-that-makes-hell-fear-you',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Sermons', item: 'https://www.fountaingrace.org/sermons' },
      { '@type': 'ListItem', position: 3, name: 'The Anointing That Makes Hell Fear You', item: 'https://www.fountaingrace.org/sermons/the-anointing-that-makes-hell-fear-you' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What does the anointing actually do according to the Bible?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Isaiah 10:27 says the yoke shall be destroyed because of the anointing. The Hebrew word for "destroyed" means to snap or to spoil beyond repair - not just loosened, rendered useless. The anointing also marks you as God\'s property (1 Samuel 16:13), takes you beyond your natural ability (Exodus 31:3), and stops spiritual infection - like the shepherd anointing the sheep\'s head with oil to keep insects from laying eggs in their ears. Psalm 23:5 - "thou anointest my head with oil."',
        },
      },
      {
        '@type': 'Question',
        name: 'Why does hell fear someone who has the anointing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Because the anointing is God\'s mark of ownership - and the enemy recognises who belongs to God. Just as predators in nature recognise territory markings, the anointing signals divine ownership. It is not the volume of your prayer or the strength of your personality. It is the mark God has placed on your life. When that mark is present, the yoke does not just loosen - it is rendered completely useless.',
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
              The Anointing That Makes Hell Fear You
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              The anointing is not eloquent words. It is not a confident stage presence. Isaiah 10:27 says the yoke shall be destroyed because of it - not because of you. This message is about what the anointing actually is, what it does, and why you need it in every area of your life.
            </p>
            <p className="text-white/60 text-sm">
              Pastor Ricardo Zaal · Fountain of Grace International, Pretoria North · 24 August 2025
            </p>
          </div>
        </header>

        <section className="bg-white pt-10 pb-2 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/J8AX_0vYDLs"
                title="The Anointing That Makes Hell Fear You"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-14 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">The Crocodile in the Calm Water</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              You approach a river. The surface is calm - no waves, nothing visible. You think it is safe. But the sign at the riverbank says: crocodile-infested. The danger was there the whole time. You simply could not see it.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              Life works the same way. There are no signs warning you of what is ahead. But the anointing upon you is the reason the crocodile does not move. Not because of your alertness. Not because of your strength. Because God has marked His territory - and what He has marked, the enemy recognises.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">Isaiah 10:27 - The Yoke Rendered Useless</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              Isaiah 10:27 - &quot;And it shall come to pass in that day, that his burden shall be taken away from off thy shoulder, and his yoke from off thy neck, and the yoke shall be destroyed because of the anointing.&quot;
            </p>
            <p className="text-[#555] leading-relaxed mb-4">
              The Hebrew word translated &quot;destroyed&quot; means to snap, to spoil beyond repair. Not loosened. Not weakened. Rendered completely useless. The yoke does not just come off - it cannot function any more. That is what the anointing does. Not your effort, not your prayers alone, not your fasting - the yoke breaks because of what God has placed on you.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              An ox under a yoke feels the pressure of bone against wood. When God&apos;s anointing comes - described as fat or oil between the bone and the yoke - the pressure disappears. His yoke is easy. His burden is light. Not because the yoke is removed, but because the anointing cushions everything it touches.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">Three Things the Anointing Does</h2>
            <ol className="list-decimal list-inside space-y-4 text-[#555] leading-relaxed mb-8">
              <li>
                <strong>It marks you as God&apos;s property.</strong> When Samuel anointed David in 1 Samuel 16:13, David was in the field - overlooked, underestimated, not even invited to the ceremony. But God chose him. The anointing does not follow the most visible person in the room. It follows the one God has chosen. When you carry it, you are marked as His - and that mark is recognised in realms you cannot see.
              </li>
              <li>
                <strong>It takes you beyond your natural ability.</strong> Exodus 31:3 - God filled Bezalel with the Spirit of God in wisdom, understanding, and knowledge. The Hebrew word for &quot;filled&quot; means to saturate to capacity. God does not give you half measures. He fills you to the point where what you produce exceeds what your training, talent, or background could explain. David could not wear Saul&apos;s armour. But anointed, he brought down the giant.
              </li>
              <li>
                <strong>It stops spiritual infection.</strong> Psalm 23:5 - &quot;thou anointest my head with oil.&quot; In ancient times, shepherds anointed the heads of their sheep to keep insects from laying eggs in their ears - a practice that prevented fatal infection. God&apos;s anointing does the same for your mind. It stops the thoughts, the doubts, the contamination from taking root and growing into something that destroys you from the inside.
              </li>
            </ol>

            <blockquote className="border-l-4 border-[#FFD600] pl-5 py-2 my-10 bg-[#f0fafa] rounded-r-xl">
              <p className="text-[#2a9df4] font-semibold text-lg italic">
                &quot;God does not see you the way you look at yourself. He has anointed you already - and sometimes the one everybody overlooked is the one God has already set apart.&quot;
              </p>
              <cite className="text-[#555] text-sm not-italic mt-2 block">- Pastor Ricardo Zaal</cite>
            </blockquote>

            <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">You Already Have It - Walk in It</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              You do not need to earn the anointing. You need to stop trusting your own ability over it. The moment you say &quot;it is me that gets things done&quot; - you have stepped out from under what God placed on you. The anointing does not work alongside self-reliance. It works through surrender.
            </p>
            <p className="text-[#555] leading-relaxed">
              If you are in Pretoria North,{' '}
              <Link href="/plan-your-visit" className="fgi-link">
                come on a Sunday
              </Link>{' '}
              - these messages are preached live every week at Fountain of Grace International, 323 B Danie Theron Street.
            </p>
          </div>
        </section>

        <section className="bg-gray-50 py-12 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-[#1a1a1a] mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">What does the anointing actually do according to the Bible?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Isaiah 10:27 says the yoke is destroyed because of the anointing - the Hebrew word means to snap or spoil beyond repair. The anointing also marks you as God&apos;s property (1 Samuel 16:13), takes you beyond natural ability (Exodus 31:3), and guards your mind from spiritual infection - as Psalm 23:5 illustrates through the shepherd anointing the sheep&apos;s head.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">Does the anointing require me to be outstanding or talented?</h3>
                <p className="text-[#555] leading-relaxed text-sm">No. David was the last one anyone thought of when Samuel came to anoint a king. He was in the field - overlooked, not even called in. The anointing follows God&apos;s choice, not human assessment. What the anointing produces will consistently exceed what your background, education, or natural ability can explain.</p>
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
