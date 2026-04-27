import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Hosting the Presence of God | Psalm 27:8 | Fountain of Grace International',
  description:
    'Psalm 27:8 — seek my face, require my presence. This message explains the difference between attending church and hosting God\'s presence, and what changes when you carry it daily. Pretoria North.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/sermons/hosting-the-presence-of-god',
  },
  openGraph: {
    title: 'Hosting the Presence of God | Psalm 27:8',
    description:
      'Samson lost his strength without noticing. Obed-Edom\'s house overflowed in 3 months. The difference was not effort — it was how each one treated the presence. Pretoria North.',
    type: 'article',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International — Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/sermons/hosting-the-presence-of-god',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Hosting the Presence of God',
    description: 'Based on Psalm 27:8, 2 Samuel 6:11, 1 Corinthians 6:19-20, and Judges 16:20, this message addresses the difference between attending religious events and hosting God\'s presence as a daily reality — and what Obed-Edom\'s overflowing household shows about what happens when you make room for Him.',
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
    datePublished: '2025-06-22',
    url: 'https://www.fountaingrace.org/sermons/hosting-the-presence-of-god',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Sermons', item: 'https://www.fountaingrace.org/sermons' },
      { '@type': 'ListItem', position: 3, name: 'Hosting the Presence of God', item: 'https://www.fountaingrace.org/sermons/hosting-the-presence-of-god' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What does it mean to host the presence of God?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Psalm 27:8 says to seek His face — the Hebrew word for presence (panim) means His face turned toward you, not just His location. Hosting the presence means making daily, deliberate room for God — not just attending church but carrying Him into your home, your workplace, and your decisions. 2 Samuel 6:11 shows that when the ark stayed at Obed-Edom\'s house, his entire household was blessed in three months — not because of what he did, but because of what he made room for.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why do some Christians go to church but nothing changes in their lives?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Judges 16:20 shows that Samson lost the presence of God without even noticing — he went out to shake himself as before and did not know the Lord had departed. Casual familiarity with the presence can cause the same thing. Attending a service is not the same as hosting the presence. Presence is not a Sunday feeling — it is a daily reality. Luke 24:32 says the disciples\' hearts burned while Jesus walked with them. That burning is the evidence of hosting, not performing.',
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
              Hosting the Presence of God
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              We live in a world full of connections but very little communion. People scroll all night and still feel empty. Christians attend services and go home unchanged. The problem is not the absence of God — it is that we have confused performance for presence. This message is about what changes when you stop performing and start hosting.
            </p>
            <p className="text-white/60 text-sm">
              Pastor Ricardo Zaal · Fountain of Grace International, Pretoria North · 22 June 2025
            </p>
          </div>
        </header>

        <section className="bg-white py-14 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">Wi-Fi Without the Fire</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              You can have followers without fellowship. A full house at church without a single changed life. Families sitting at the same dinner table staring at separate screens — present, but not present. This is the condition of a generation with more connection technology than any before it and less actual connection than most.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              The problem is not information. The problem is the absence of presence. A sermon can be excellent and the presence of God not be in it. Luke 24:32 — when the two disciples walked with Jesus on the road, they said, &quot;Did not our heart burn within us while he talked with us?&quot; Their hearts did not burn because of the information. They burned because of the presence of the One walking with them.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">Psalm 27:8 — What Presence Actually Means</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              Psalm 27:8 — &quot;When thou saidst, Seek ye my face; my heart said unto thee, Thy face, LORD, will I seek.&quot; The Hebrew word for face is <em>panim</em> — presence is not just location, it is the face of God turned toward you. Being alongside, not merely nearby. The way two people in love want to be seen together — not just in the same room, but visibly, deliberately in each other&apos;s company.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              This is not a Sunday feeling. It is a daily reality. The person who experiences God on Sunday and cannot find their Bible on Monday has not hosted the presence — they experienced an event. Hosting is different. Hosting means you have made room for Him to stay.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">2 Samuel 6:11 — Three Months at Obed-Edom&apos;s House</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              2 Samuel 6:11 — &quot;And the ark of the LORD continued in the house of Obededom the Gittite three months: and the LORD blessed Obededom, and all his household.&quot;
            </p>
            <p className="text-[#555] leading-relaxed mb-4">
              His entire house overflowed with blessing — not because of what he did, but because of what he made room for. The ark, which represented the presence of God, stayed three months. That was enough. Everything changed.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              Picture what it would mean if God stayed in your house for three months — not as a visitor, but as a resident. He is not a guest with restrictions. He is the owner. 1 Corinthians 6:19-20 — &quot;What? know ye not that your body is the temple of the Holy Ghost which is in you?&quot; You are not the host offering Him temporary space. You are the temple He already inhabits. The question is whether you are cultivating that reality or ignoring it.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">Judges 16:20 — When You Lose Presence Without Noticing</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              Judges 16:20 — &quot;And she said, The Philistines be upon thee, Samson. And he awoke out of his sleep, and said, I will go out as at other times before, and shake myself. And he wist not that the LORD was departed from him.&quot;
            </p>
            <p className="text-[#555] leading-relaxed mb-4">
              He did not know. He still thought he was the same man. He tried to shake himself as before — and nothing happened. The departure of presence does not always announce itself. It happens gradually, through casual treatment, through familiarity, through treating what is sacred as ordinary.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              Guarding the presence is not paranoia — it is stewardship. The same way some people protect their Wi-Fi password more carefully than their prayer life. What you guard tells you what you value. What you neglect tells you what you have started treating as guaranteed.
            </p>

            <blockquote className="border-l-4 border-[#FFD600] pl-5 py-2 my-10 bg-[#f0fafa] rounded-r-xl">
              <p className="text-[#2a9df4] font-semibold text-lg italic">
                &quot;Psalm 16:11 — in His presence is fullness of joy. Not partial joy. Fullness. When you host the presence of God, joy is not the goal — it is the evidence. It shows up because He is there.&quot;
              </p>
              <cite className="text-[#555] text-sm not-italic mt-2 block">— Pastor Ricardo Zaal</cite>
            </blockquote>

            <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">What Hosting the Presence Looks Like</h2>
            <ol className="list-decimal list-inside space-y-3 text-[#555] leading-relaxed mb-6">
              <li><strong>Seek His face, not just His hand.</strong> Most prayer is about what we need. Hosting presence begins when you start asking for Him — not just for what He can provide. Psalm 27:8 says His face. The face, not the favour. When you seek the face, the favour follows.</li>
              <li><strong>Guard what you have invited in.</strong> The presence you cultivate on Sunday can be lost by Tuesday if you treat it casually. Judges 16 is a warning. What you built in the secret place can be undone by what you allow in the public space.</li>
              <li><strong>Treat your body as the temple it is.</strong> 1 Corinthians 6:19 is not only about avoiding serious sin — it is about every choice, every thought, every habit that either creates space for the presence or fills the temple with noise. What you fill it with will determine what you experience in it.</li>
            </ol>

            <p className="text-[#555] leading-relaxed">
              If you are in Pretoria North,{' '}
              <Link href="/plan-your-visit" className="fgi-link">
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
                <h3 className="font-semibold text-[#1a1a1a] mb-2">What does it mean to host the presence of God?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Psalm 27:8 says to seek His face — presence in Hebrew (panim) means His face turned toward you, His alongside-ness, not just His location. Hosting means making daily, deliberate room — not just attending events but carrying Him through your daily life. 2 Samuel 6:11 shows that when the ark stayed at Obed-Edom&apos;s house, his entire household was blessed in three months.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">Why do some Christians attend church but nothing changes?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Judges 16:20 — Samson lost the presence of God without noticing. He tried to function as before and could not. Casual familiarity with holy things causes the presence to quietly depart. Attending a service is not the same as hosting presence. Presence is not a Sunday feeling — it is a daily reality that must be sought, guarded, and cultivated.</p>
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
