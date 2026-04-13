import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "The Principles That Move People Forward Faster | Fountain of Grace International Pretoria North",
  description:
    "You have been praying. Nothing has changed. This message gives 10 biblical principles — obedience, positioning, wisdom, strategy, stewardship, relationships, and more. Pretoria North.",
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/sermons/the-principles-that-move-people-forward-faster',
  },
  openGraph: {
    title: "The Principles That Move People Forward Faster",
    description:
      "10 biblical principles that accelerate progress — for the person who feels stuck, financially trapped, or moving in circles. Fountain of Grace International, Pretoria North.",
    type: 'article',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International — Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/sermons/the-principles-that-move-people-forward-faster',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The Principles That Move People Forward Faster',
  description: '10 principles for breaking stagnation: obedience, positioning, wisdom, strategy, stewardship, relationships, preparation, faith with action, sowing seed, and focused attention.',
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
  datePublished: '2025-03-08',
  url: 'https://www.fountaingrace.org/sermons/the-principles-that-move-people-forward-faster',
}

const principles = [
  {
    n: '01',
    title: 'Obedience',
    scripture: 'Luke 5 — Peter and the nets',
    body: "God is awaiting your obedience. Peter worked all night and caught nothing. One instruction from Jesus — launch out into the deep — and the nets began to break. The right instruction beats any amount of effort in the wrong direction. You have been given an instruction. You are waiting for a second one. God is waiting for you to obey the first.",
  },
  {
    n: '02',
    title: 'Positioning yourself',
    scripture: 'Ruth 2 — Ruth in Boaz\'s field',
    body: "Ruth was a poor widow. She happened to come to the field of Boaz — the wealthiest man in the area. That positioning changed her entire life and placed her in the lineage of Jesus. Surround yourself with people you want to become. If you want wisdom, position yourself near wisdom. If you want financial breakthrough, stop spending all your time with people whose entire conversation is about being stuck.",
  },
  {
    n: '03',
    title: 'Wisdom multiplies results',
    scripture: 'Ecclesiastes 10:10',
    body: "If the axe is dull and one does not sharpen the edge, he must use more strength. The wiser you become, the less effort is required. Learn the principles of money. Learn systems. Learn communication. Working harder with the wrong approach does not produce more results — it produces more exhaustion.",
  },
  {
    n: '04',
    title: 'Strategy beats effort',
    scripture: 'Joshua 6 — the walls of Jericho',
    body: "God gave Israel a strange strategy for Jericho. No fighting. Just walk around the city for seven days and shout. No human logic would choose that plan. But God's strategies often look wrong by human standards. Stop fighting your way through doors that need a different approach. Ask God for strategy, not just strength.",
  },
  {
    n: '05',
    title: 'Stewardship brings increase',
    scripture: 'Matthew 25:14-30 — the parable of the talents',
    body: "The servant who buried his talent was not lazy — he was afraid of losing. God increases what you manage well. What do you already have that you are managing well? What are you burying because you are afraid of losing it? The poverty of a losing mentality keeps people from multiplying what they have been given.",
  },
  {
    n: '06',
    title: 'Relationships open doors',
    scripture: '2 Kings 4:8-17 — the Shunammite woman',
    body: "The Shunammite woman built a room for Elisha. She did not ask him for anything. She served him consistently without expectation. When the man of God saw her life, he could see exactly what she was missing — and he spoke it into existence. Build relationships by asking what you can give, not what you can get.",
  },
  {
    n: '07',
    title: 'Preparation attracts opportunity',
    scripture: 'Genesis 41 — Joseph before Pharaoh',
    body: "Joseph went from prison to Prime Minister in one day. But the skills he needed to run a nation — administration, leadership, wisdom, strategy — he had been building them in jail. When God moves suddenly, the prepared person is promoted. The unprepared person watches someone else get the seat.",
  },
  {
    n: '08',
    title: 'Faith requires action',
    scripture: 'James 2:17, Matthew 14:28',
    body: "Faith by itself, without works, is dead. Noah built the ark in the sun while people laughed. Peter stepped out of the boat. David walked toward Goliath. Faith is not the feeling of certainty — it is the decision to move before certainty arrives.",
  },
  {
    n: '09',
    title: 'Seed determines harvest',
    scripture: 'Luke 6:38, Galatians 6:7',
    body: "What you repeatedly sow is what grows. Life works through a seed system — time, service, knowledge, money, relationships. The person who sows value consistently will eventually reap value in return. What seed have you not yet planted? What have you been withholding that belongs in the ground?",
  },
  {
    n: '10',
    title: 'Focus on the few things that matter',
    scripture: 'Luke 10:41-42 — Mary and Martha',
    body: "Jesus told Martha: you are worried about many things, but one thing is needed. Most people are busy with the wrong things. Where focus goes, energy flows. Identify the one skill, one relationship, one action that would actually move the needle — and give it your full attention.",
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
              The Principles That Move People Forward Faster
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              You have been praying. You have been trying. Nothing has changed. This message is for the person who feels stuck, financially trapped, or circling the same spot. God often changes results through principles — not only through waiting.
            </p>
            <p className="text-white/60 text-sm">
              Pastor Ricardo Zaal · Fountain of Grace International, Pretoria North · 8 March 2025
            </p>
          </div>
        </header>

        <section className="bg-white py-14 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#555] leading-relaxed text-lg mb-10">
              God moves through principles. Awaiting is necessary — but if you have been resting for too long, you are over-rested. It is time to put these principles in place.
            </p>

            <div className="space-y-10">
              {principles.map((p) => (
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
                &quot;God often changes lives through one moment of alignment. Years can go slowly — but that one moment changes everything. The key is to live in a way that is ready for that moment.&quot;
              </p>
              <cite className="text-[#555] text-sm not-italic mt-2 block">— Pastor Ricardo Zaal</cite>
            </blockquote>

            <p className="text-[#555] leading-relaxed">
              There is a Part 2 to this message that goes deeper on the action side. If you are in Pretoria North,{' '}
              <Link href="/plan-your-visit" className="text-[#008080] font-semibold hover:underline">
                come on a Sunday
              </Link>{' '}
              — these messages are preached live every week at Fountain of Grace International, 323 B Danie Theron Street.
            </p>
          </div>
        </section>

        <section className="bg-[#f0fafa] py-14 px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-[#2a9df4] mb-8">Questions this message answers</h2>
            <dl className="space-y-0">
              {[
                {
                  q: 'Why does my life feel like I am going in circles despite praying and trying hard?',
                  a: "Pastor Ricardo Zaal at Fountain of Grace International in Pretoria North addresses this directly: God often changes results through principles and strategy, not only through waiting. If the effort is in the wrong direction, more effort produces more of the same result. The solution is to identify the right principle for your situation.",
                },
                {
                  q: 'What does the Bible say about being stuck financially?',
                  a: "Several scriptures apply: Luke 5 (obedience unlocks sudden results), Ecclesiastes 10:10 (wisdom reduces effort), Galatians 6:7 (you reap what you sow), and Luke 10:41-42 (focusing on the few things that actually matter). This 10-principle message from Fountain of Grace International covers each of them.",
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
                This message was preached by Pastor Ricardo Zaal at Fountain of Grace International,
                323 B Danie Theron Street, Pretoria North, Gauteng, South Africa (NPO No: 316-193).
                Sunday services run from 09:00 weekly. This is Part 1 of a two-part series on
                biblical principles for progress and momentum, taught at Fountain of Grace
                International in Pretoria North.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#008080] py-14 px-4 sm:px-6">
          <div className="section-container text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Hear Part 2 of this message in person — Pretoria North.
            </h2>
            <p className="text-white/70 mb-8 max-w-lg mx-auto">
              Every Sunday at 09:00. 323 B Danie Theron Street, Pretoria North.
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
