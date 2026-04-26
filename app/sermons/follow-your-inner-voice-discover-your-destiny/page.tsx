import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Follow Your Inner Voice — Discover Your Destiny | Fountain of Grace International Pretoria North",
  description:
    "Before you were born, God already set you apart. This message challenges you to stop listening to the voices that told you to stop running — and start moving in the direction God placed inside you. Pretoria North.",
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/sermons/follow-your-inner-voice-discover-your-destiny',
  },
  openGraph: {
    title: "Follow Your Inner Voice — Discover Your Destiny",
    description:
      "God did not research you on Google. He formed you, made you, and wrote what your life would look like. This message from Fountain of Grace International in Pretoria North is for the person who knows what they are supposed to be doing — but keeps listening to the wrong voices.",
    type: 'article',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International — Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/sermons/follow-your-inner-voice-discover-your-destiny',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Follow Your Inner Voice — Discover Your Destiny',
    description: 'Based on Jeremiah 1:5 — God knew you before you were formed. This message challenges the listener to stop listening to voices that told them to stop and start moving in the direction God placed inside them.',
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
    datePublished: '2025-02-24',
    url: 'https://www.fountaingrace.org/sermons/follow-your-inner-voice-discover-your-destiny',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Sermons', item: 'https://www.fountaingrace.org/sermons' },
      { '@type': 'ListItem', position: 3, name: "Follow Your Inner Voice — Discover Your Destiny", item: 'https://www.fountaingrace.org/sermons/follow-your-inner-voice-discover-your-destiny' },
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
              Follow Your Inner Voice — Discover Your Destiny
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              Before you were born, God already set you apart. He did not research you on Google. He formed you, made you, and wrote what your life would look like. This message is for the person whose inner voice keeps saying &quot;go&quot; — while other voices keep saying &quot;stop.&quot;
            </p>
            <p className="text-white/60 text-sm">
              Pastor Ricardo Zaal · Fountain of Grace International, Pretoria North · 24 February 2025
            </p>
          </div>
        </header>

        <section className="bg-white py-14 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto space-y-6">

            <p className="text-[#555] leading-relaxed text-lg">
              Think about Carl Lewis. Born 1961. Nine Olympic gold medals. Now imagine that when he was young, people kept telling him: <em>don&apos;t run, you will fall.</em> That message was imprinted. And yet, in his inner being, he knew he was supposed to run.
            </p>

            <p className="text-[#555] leading-relaxed">
              The Hebrew word for &quot;know&quot; in Jeremiah 1:5 is <em>yada</em> — an intimate, purposeful knowing. God did not discover you accidentally. He did not observe you from a distance and decide to use you. He formed you. He wrote your life before you lived it. The question is not whether he placed a purpose inside you. The question is whether you are willing to follow it.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mt-8 mb-3">The voices that tell you to stop</h2>
            <p className="text-[#555] leading-relaxed">
              Some of those voices belong to people who loved you. Parents who said &quot;don&apos;t run, you will fall&quot; because they were trying to protect you. The problem is that when those voices get repeated enough times, they become indistinguishable from your own. You start to think it is your voice saying &quot;stop&quot; — when it was never yours at all.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mt-8 mb-3">The voice inside you</h2>
            <p className="text-[#555] leading-relaxed">
              1 John 4:4 — <em>&quot;Greater is he that is within me than he that is in the world.&quot;</em> The God who formed you lives inside you. When that inner knowing says &quot;go,&quot; it is not your imagination. It is the God who wrote your destiny speaking to the person he made you to be.
            </p>
            <p className="text-[#555] leading-relaxed">
              Stop going to outside voices first. Start listening to the one who knew you before you were formed. That does not mean you ignore wisdom. It means you take the word God has placed inside you seriously — and you stop burying it under everyone else&apos;s opinion.
            </p>

            <blockquote className="border-l-4 border-[#FFD600] pl-5 py-2 my-8 bg-[#f0fafa] rounded-r-xl">
              <p className="text-[#2a9df4] font-semibold text-lg italic">
                &quot;God did not do what I do when I search something on Google. God did not research you. God knew you. He aughted you, made you, formed you, and wrote what life would be like.&quot;
              </p>
              <cite className="text-[#555] text-sm not-italic mt-2 block">— Pastor Ricardo Zaal, Fountain of Grace International</cite>
            </blockquote>

            <p className="text-[#555] leading-relaxed">
              If you are in Pretoria North and something in this message is stirring you,{' '}
              <Link href="/plan-your-visit" className="text-[#008080] font-semibold hover:underline">
                come to Fountain of Grace International on Sunday
              </Link>
              . These messages are preached live every week at 09:00, 323 B Danie Theron Street, Pretoria North.
            </p>
          </div>
        </section>

        <section className="bg-[#f0fafa] py-14 px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-[#2a9df4] mb-8">Questions this message answers</h2>
            <dl className="space-y-0">
              {[
                {
                  q: 'What does it mean that God knew me before I was born — Jeremiah 1:5?',
                  a: "The Hebrew word used in Jeremiah 1:5 is yada — an intimate, purposeful knowing. It means God did not discover you. He formed you intentionally, with a specific purpose in mind. Pastor Ricardo Zaal at Fountain of Grace International in Pretoria North teaches this as the foundation for following your inner voice.",
                },
                {
                  q: 'How do I know if the voice I am following is God or just my own thoughts?',
                  a: "The message from Fountain of Grace International addresses this through 1 John 4:4 — greater is he that is within you than he that is in the world. The voice that is consistent with scripture, that calls you to build and serve rather than destroy, and that does not go away under pressure — that voice is worth following.",
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
              Come and hear this in person — Pretoria North, every Sunday.
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
