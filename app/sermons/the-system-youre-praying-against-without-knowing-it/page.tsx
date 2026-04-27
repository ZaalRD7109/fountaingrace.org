import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The System You\'re Praying Against Without Knowing It | Fountain of Grace International',
  description:
    'You have prayed. You have obeyed. Nothing moved. This message reveals how believers unknowingly pray against the very system God set up for their breakthrough. Pretoria North.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/sermons/the-system-youre-praying-against-without-knowing-it',
  },
  openGraph: {
    title: 'The System You\'re Praying Against Without Knowing It',
    description:
      'Something in the system is locked — not because God ignored you, but because a specific biblical mechanism has been misunderstood. Fountain of Grace International, Pretoria North.',
    type: 'article',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International — Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/sermons/the-system-youre-praying-against-without-knowing-it',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The System You\'re Praying Against Without Knowing It',
    description: 'God already opened the doors. The system is already set. But disobedience, ingratitude, and praying for what is already provided — while not walking through the open door — is unknowingly working against the system God established.',
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
    datePublished: '2026-01-18',
    url: 'https://www.fountaingrace.org/sermons/the-system-youre-praying-against-without-knowing-it',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Sermons', item: 'https://www.fountaingrace.org/sermons' },
      { '@type': 'ListItem', position: 3, name: 'The System You\'re Praying Against', item: 'https://www.fountaingrace.org/sermons/the-system-youre-praying-against-without-knowing-it' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why does God seem to not answer some prayers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Many times God has already answered — the door is already open. But the believer is still praying for the door to open instead of walking through it. Revelation 3:8 says God has set before us an open door. John 10:10 says Jesus came that we might have life abundantly. The system is set. The issue is whether we are walking in obedience to what the system requires.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does it mean to pray against God\'s system?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'God\'s system requires obedience to activate what He has already provided. Praying for something God already gave — while not doing what He said to do to receive it — is praying against the system. Obedience is better than sacrifice (1 Samuel 15:22). The sacrifice of prayer without the obedience of action creates a contradiction in the system.',
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
              The System You&apos;re Praying Against Without Knowing It
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              Your prayers go up. Nothing moves. You have obeyed when God asked. You have fasted. You have believed. But something in the system feels locked. This message explains why — and it is not what most people expect to hear.
            </p>
            <p className="text-white/60 text-sm">
              Pastor Ricardo Zaal · Fountain of Grace International, Pretoria North · 18 January 2026
            </p>
          </div>
        </header>

        <section className="bg-white pt-10 pb-2 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/TLZitG4cpqA"
                title="The System You're Praying Against Without Knowing It"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-14 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">The Door Is Already Open</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              Revelation 3:8 — &quot;I have set before thee an open door.&quot; Past tense. God already opened the door. John 10:10 — &quot;I am come that they might have life, and that they might have it more abundantly.&quot; The provision is already set. The abundant life was not a future promise — it was the reason Jesus came.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              Too many believers are praying for God to open doors that are already open. They are asking for what has already been provided. And in doing so — while not walking through the door, while not accepting the promotion that feels too large, while not taking the step that God already confirmed — they are unknowingly praying against their own breakthrough.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">Disobedience Locks the System</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              The system God set is not complicated. It runs on obedience. &quot;Obedience is better than sacrifice&quot; — 1 Samuel 15:22. When God says go, go. When God says wait, wait. When God says it is time to step into the next level — even if it does not feel comfortable — step.
            </p>
            <p className="text-[#555] leading-relaxed mb-4">
              The transition into the next level often comes with inner resistance. You get the promotion, and suddenly you feel unworthy. God confirms the direction, and something inside says &quot;not me.&quot; That resistance is not humility — it is disobedience wearing a humble face. God has already made you worthy for what He called you to. Walking away from it does not honour Him.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              Exodus 14:14 — &quot;The LORD shall fight for you, and ye shall hold your peace.&quot; The condition for God fighting for you is that you hold your peace — not panic, not run backwards, not second-guess the instruction. The system works when obedience is present.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">Ingratitude Closes What Obedience Opens</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              You see the doors God opened. But instead of thanking Him for open doors, you ask why they are not bigger. Instead of stepping through the door, you compare it to what someone else received. This is the system being worked against from the inside.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              God said before you life and death — and He then instructed you to choose life (Deuteronomy 30:19). He gave you the choice but also the instruction. The system is designed for you to choose, not to wait for the choice to be made for you. When you choose life — with obedience, with gratitude, with forward movement — the system operates exactly as it was designed.
            </p>

            <blockquote className="border-l-4 border-[#FFD600] pl-5 py-2 my-10 bg-[#f0fafa] rounded-r-xl">
              <p className="text-[#2a9df4] font-semibold text-lg italic">
                &quot;God already opened the door. Your prayer is for an open door. But your disobedience keeps you standing in front of it. The system is not broken. Your position in it is.&quot;
              </p>
              <cite className="text-[#555] text-sm not-italic mt-2 block">— Pastor Ricardo Zaal</cite>
            </blockquote>

            <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">How to Realign With the System</h2>
            <ol className="list-decimal list-inside space-y-3 text-[#555] leading-relaxed mb-6">
              <li><strong>Obey what God already said.</strong> Not a new word — the one He already gave you that you have been delaying.</li>
              <li><strong>Accept the transition.</strong> The level you feel unworthy for is probably the level God already promoted you to. Walk into it.</li>
              <li><strong>Thank God for what is already open.</strong> Gratitude keeps the system flowing. Complaint and comparison lock it.</li>
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
                <h3 className="font-semibold text-[#1a1a1a] mb-2">Why does God seem to not answer some prayers?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Many times God has already answered — the door is already open. The believer is still asking for what has been provided. Revelation 3:8 says God has set before us an open door. The issue is whether obedience is present to walk through it.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">Is it possible to pray against your own breakthrough?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Yes. When you pray for something God already provided — while not doing what He instructed to receive it — you are working against the system. Obedience is better than sacrifice. The prayer is the sacrifice. The obedience is what activates the provision.</p>
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
