import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Language of the Spirit: Interpreting What You Hear | Numbers 12:6 | Fountain of Grace International',
  description:
    'The problem is not God\'s silence - it is our translation. Numbers 12:6 says God speaks in visions and dreams. This message teaches you how to interpret what He is saying. Pretoria North.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/sermons/the-language-of-the-spirit-interpreting-what-you-hear',
  },
  openGraph: {
    title: 'The Language of the Spirit: Interpreting What You Hear',
    description:
      'Numbers 12:6 - God speaks in visions and dreams. The problem is not that He has gone silent. The problem is translation. Learn to read the grammar of the Spirit. Pretoria North.',
    type: 'article',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International - Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/sermons/the-language-of-the-spirit-interpreting-what-you-hear',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Language of the Spirit: Interpreting What You Hear',
    description: 'Based on Numbers 12:6, Acts 2:17, Habakkuk 2:2-3, and Colossians 3:15, this message teaches believers how to correctly interpret what God communicates through visions, dreams, impressions, peace, and scripture - because the problem is rarely God\'s silence. It is our translation.',
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
    datePublished: '2025-02-09',
    url: 'https://www.fountaingrace.org/sermons/the-language-of-the-spirit-interpreting-what-you-hear',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Sermons', item: 'https://www.fountaingrace.org/sermons' },
      { '@type': 'ListItem', position: 3, name: 'The Language of the Spirit', item: 'https://www.fountaingrace.org/sermons/the-language-of-the-spirit-interpreting-what-you-hear' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What does Numbers 12:6 say about how God speaks?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Numbers 12:6 - "And he said, Hear now my words: If there be a prophet among you, I the Lord will make myself known unto him in a vision, and will speak unto him in a dream." God speaks through visions and dreams, but hearing the vision does not automatically mean you understand it. The vision still requires interpretation. The same way a baby communicates through expressions and sounds, God communicates in picture language - and reading that language correctly is the difference between clarity and confusion.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you know if a dream or vision is from God?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Three questions help: Does it align with scripture - because God will not contradict His own word? Does it bring peace or fear - because Colossians 3:15 says to let the peace of God rule as an umpire in your decisions? And what truth is God showing you - not just what happened in the dream, but what it is pointing toward? Genesis 40:8 makes clear that interpretation belongs to God, not to guesswork. Ask God directly for the meaning. If the interpretation is unclear, do not force it. True interpretation brings clarity, not more confusion.',
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
              The Language of the Spirit: Interpreting What You Hear
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              The problem is not that God has gone silent. The problem is translation. Numbers 12:6 says God makes himself known through visions and speaks in dreams - but receiving the vision is only half of it. Interpreting it correctly is what changes your life. This message teaches you to read the grammar of the Spirit.
            </p>
            <p className="text-white/60 text-sm">
              Pastor Ricardo Zaal · Fountain of Grace International, Pretoria North · 9 February 2025
            </p>
          </div>
        </header>

        <section className="bg-white py-14 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">The Baby Who Is Speaking But Cannot Be Understood</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              A baby communicates constantly - but you cannot interpret a crying baby by just hearing the sound. You read the face. You read the body. You ask what the whole picture is showing you. If the child is laughing and you reach for a pain tablet, you have heard the child without interpreting the child. The result is that you respond to something entirely different from what was actually said.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              That is the exact situation many believers find themselves in with God. He is speaking. He has always been speaking. But when we get the communication wrong - when we interpret fear as God warning us, when we interpret anxiety as confirmation, when we act on a fragment without asking for the whole message - we end up frustrated and confused, convinced that God has gone quiet. He has not. Our translation is the issue.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">Numbers 12:6 - God Speaks in Visions and Dreams</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              Numbers 12:6 - &quot;And he said, Hear now my words: If there be a prophet among you, I the Lord will make myself known unto him in a vision, and will speak unto him in a dream.&quot;
            </p>
            <p className="text-[#555] leading-relaxed mb-4">
              Acts 2:17 confirms this for every believer - &quot;It shall come to pass in the last days, saith God, I will pour out of my Spirit upon all flesh: and your sons and your daughters shall prophesy, and your young men shall see visions, and your old men shall dream dreams.&quot; This is not reserved for the platform. It is for the whole body.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              Dreams are not random thoughts that float in while you sleep. They are spiritual pictures that carry meaning. The same God who spoke to Moses through a burning bush, who spoke to Joseph through grain and stars, who spoke to Pharaoh through cows and rivers - He still speaks in picture language today. And that language has a grammar. Learning it changes how you respond to what He is saying.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">Reading the Symbols - What the Spirit Uses</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              When God communicates through visions or dreams, the details matter. A door in a vision is not just a door. Revelation 3:8 says, &quot;I have set before thee an open door, and no man can shut it.&quot; An open door is an opportunity or a transition - a next realm being made available. A closed door is a closed chapter. But you must ask: was the door open or closed when you saw it? Because the answer changes everything about how you respond.
            </p>
            <p className="text-[#555] leading-relaxed mb-4">
              Water can represent the Holy Spirit - John 7:38 says out of the believer shall flow rivers of living water. But stormy water carries a different meaning altogether. Calm, flowing water says the Spirit is moving through you. Turbulent water signals danger or disruption. Light represents revelation, knowledge, or truth coming through (John 1:4-5). Darkness represents something hidden or not yet understood. Oil in the Psalms represents anointing and the favour of God. Each symbol must be read in context - not in isolation.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              God uses symbols to reveal His will, just as Jesus used parables to reveal kingdom principles. The parable was never random. It was a picture chosen to communicate something specific. When you receive a vision or dream, the first question is not just &quot;what did I see?&quot; but &quot;what was the context around what I saw?&quot;
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">Habakkuk 2:2-3 - Write It Down</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              Habakkuk 2:2-3 - &quot;And the Lord answered me, and said, Write the vision, and make it plain upon tables, that he may run that readeth it. For the vision is yet for an appointed time, but at the end it shall speak, and not lie: though it tarry, wait for it; because it will surely come, it will not tarry.&quot;
            </p>
            <p className="text-[#555] leading-relaxed mb-4">
              The instruction to write the vision is not ceremonial. Writing the vision forces clarity - it slows you down long enough to capture detail you would otherwise lose. And the date matters too. A vision written with a date gives you a reference point. When the interpretation becomes clear six months later, you can look back and see exactly when God first showed it to you.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              Revelation matures over time. God may show one part now and another later. What looked confusing in a dream can become unmistakably clear after a season of obedience. The act of writing is itself an act of faith - you are saying, Lord, I received this, I am holding onto it, and I will not rush past it.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">Genesis 40:8 and Colossians 3:15 - Interpretation Belongs to God</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              Genesis 40:8 - Joseph said to the cupbearer and the baker, &quot;Do not interpretations belong to God? Tell me them, I pray you.&quot; Joseph did not interpret from his own knowledge. He operated from a partnership - he invited them to speak, but pointed toward God as the source of the meaning. Interpretation is not guesswork. It is not pattern-matching from what someone else told you in a different season. It is a conversation with the Spirit who gave the vision in the first place.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              Colossians 3:15 - &quot;And let the peace of God rule in your hearts, to the which also ye are called in one body; and be thankful.&quot; Peace is heaven&apos;s confirmation. If the interpretation brings anxiety, something is not adding up. God&apos;s word will not contradict His peace. When you arrive at the correct interpretation, something settles. That settling is not wishful thinking - it is the umpire of the Spirit calling the play correctly.
            </p>

            <blockquote className="border-l-4 border-[#FFD600] pl-5 py-2 my-10 bg-[#f0fafa] rounded-r-xl">
              <p className="text-[#2a9df4] font-semibold text-lg italic">
                &quot;The problem is not God&apos;s silence. The problem is translation. God is always speaking. The question is whether you have learned the grammar of His language well enough to understand what He is actually saying.&quot;
              </p>
              <cite className="text-[#555] text-sm not-italic mt-2 block">- Pastor Ricardo Zaal</cite>
            </blockquote>

            <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Three Steps to Interpret What You Are Hearing</h2>
            <ol className="list-decimal list-inside space-y-3 text-[#555] leading-relaxed mb-6">
              <li><strong>Write it down with the date.</strong> When you receive a dream or vision, record it the same day. Include as much detail as you can remember - what you saw, the order it happened, the feeling you had. Revelation matures. What seems unclear today can become precise confirmation after your next act of obedience.</li>
              <li><strong>Test it against three questions.</strong> Does it align with scripture? God will not contradict what He has already written. Does it bring peace or fear? True revelation settles - it does not unravel you. What is the truth God is pointing toward? Not just the symbol, but the principle behind it.</li>
              <li><strong>Ask God for the interpretation - do not force it.</strong> Genesis 40:8 makes clear that interpretation belongs to God. If the meaning is not clear, do not manufacture one from pressure or impatience. Call unto God - Jeremiah 33:3 promises He will show you great and mighty things that you do not yet know. True interpretation brings clarity, not more confusion. When it is right, you will know.</li>
            </ol>

            <p className="text-[#555] leading-relaxed">
              If you are in Pretoria North,{' '}
              <Link href="/plan-your-visit" className="text-[#008080] font-semibold hover:underline">
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
                <h3 className="font-semibold text-[#1a1a1a] mb-2">What does Numbers 12:6 say about how God speaks?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Numbers 12:6 - God makes himself known in visions and speaks in dreams. This is not limited to prophets or pastors. Acts 2:17 says sons and daughters shall prophesy, young men shall see visions, and old men shall dream dreams. Receiving the communication is only part of it. Correctly interpreting it is what allows you to respond well. The problem most believers face is not God&apos;s silence - it is that they have not yet learned to read the grammar of the Spirit.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">How do you know if a dream or vision is from God?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Three questions help: Does it align with scripture? Does it bring peace or does it bring fear - because Colossians 3:15 says the peace of God should rule as umpire? And what truth is God pointing you toward - not just the symbols, but the principle behind them? Genesis 40:8 says interpretation belongs to God. Ask Him directly. If the meaning is unclear, do not force it. True interpretation brings clarity. When you have it right, something settles.</p>
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
