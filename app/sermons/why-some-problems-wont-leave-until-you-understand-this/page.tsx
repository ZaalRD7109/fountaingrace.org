import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Why Some Problems Won\'t Leave Until You Understand This | Fountain of Grace International',
  description:
    'Problems that keep returning do so for a reason. The blood of Jesus has five specific functions that break persistent cycles. Pretoria North.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/sermons/why-some-problems-wont-leave-until-you-understand-this',
  },
  openGraph: {
    title: 'Why Some Problems Won\'t Leave Until You Understand This',
    description:
      'If a problem keeps returning after prayer, fasting, and faith — this message explains what most people are missing. Fountain of Grace International, Pretoria North.',
    type: 'article',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International — Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/sermons/why-some-problems-wont-leave-until-you-understand-this',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Why Some Problems Won\'t Leave Until You Understand This',
    description: 'The blood of Jesus does five specific things: speaks better than your past, protects what belongs to God, cleanses deeply, brings healing, and gives direct access to God.',
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
    datePublished: '2026-04-19',
    url: 'https://www.fountaingrace.org/sermons/why-some-problems-wont-leave-until-you-understand-this',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Sermons', item: 'https://www.fountaingrace.org/sermons' },
      { '@type': 'ListItem', position: 3, name: 'Why Some Problems Won\'t Leave', item: 'https://www.fountaingrace.org/sermons/why-some-problems-wont-leave-until-you-understand-this' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why do some problems keep coming back even after prayer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'According to Revelation 12:11, overcoming happens by specific means — not automatically. Many persistent problems continue because the person is fighting the symptom without applying the power of the blood of Jesus to the root. The blood speaks better than your past, protects, cleanses deeply, brings healing, and gives access to God.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does the blood of Jesus actually do in a believer\'s life?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The blood of Jesus does five things: (1) It speaks better than your past — Hebrews 12:24. (2) It protects what belongs to God — Exodus 12:13. (3) It cleanses deeply from inner torment and sin — 1 John 1:7. (4) It brings healing to body and emotions — Isaiah 53:5. (5) It gives direct access to God without you needing to fix yourself first — Hebrews 10:19.',
        },
      },
    ],
  },
]

const points = [
  {
    n: 1,
    title: 'The Blood Speaks Better Than Your Past',
    scripture: 'Hebrews 12:24',
    body: 'Hebrews 12:24 says Jesus is "the mediator of the new covenant, and to the blood of sprinkling, that speaketh better things." Your past mistakes do not define what God can do now. Abel\'s blood cried for vengeance. The blood of Jesus cries for mercy. Guilt has a voice — but the blood speaks louder.',
  },
  {
    n: 2,
    title: 'The Blood Protects What Belongs to God',
    scripture: 'Exodus 12:13',
    body: '"And the blood shall be to you for a token upon the houses where ye are: and when I see the blood, I will pass over you." The blood marks ownership. Some things that would have destroyed you have passed over you not because of your performance, but because you belong to God. The question is not whether you are protected — it is whether you are His.',
  },
  {
    n: 3,
    title: 'The Blood Cleanses Deeply',
    scripture: '1 John 1:7 / Hebrews 9:14',
    body: '"The blood of Jesus Christ his Son cleanseth us from all sin" — not surface-level. Hebrews 9:14 says it purges the conscience. Many people look clean on the outside while carrying torment on the inside: shame, grief, inner accusation. The blood reaches where no one else can. It cleanses what is hidden.',
  },
  {
    n: 4,
    title: 'The Blood Brings Healing',
    scripture: 'Isaiah 53:5',
    body: '"He was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed." The stripes were not only for forgiveness — they were for healing. Physical healing. Emotional healing. The pain Jesus endured was so that your pain has a basis for removal.',
  },
  {
    n: 5,
    title: 'The Blood Gives Direct Access to God',
    scripture: 'Hebrews 10:19',
    body: '"Having therefore, brethren, boldness to enter into the holiest by the blood of Jesus." You do not need to fix yourself before coming to God. You do not need to earn the right. The blood already paid for your access. Coming to God as you are is not boldness — it is the correct response to what the blood purchased.',
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
              Why Some Problems Won&apos;t Leave Until You Understand This
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              Some problems keep coming back. You pray, you fast, you believe — and yet it returns. The reason is almost never what you think. Revelation 12:11 says they overcame by a specific means. Not by effort. Not by waiting. By something most people have not yet applied.
            </p>
            <p className="text-white/60 text-sm">
              Pastor Ricardo Zaal · Fountain of Grace International, Pretoria North · 19 April 2026
            </p>
          </div>
        </header>

        <section className="bg-white pt-10 pb-2 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/N1_YYrEGtto"
                title="Why Some Problems Won't Leave Until You Understand This"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-14 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#555] leading-relaxed text-lg mb-4">
              Many people fight the symptom. The headache returns, the financial pressure cycles back, the same relationship pattern repeats. They treat the visible problem without touching the invisible root. Revelation 12:11 says, &quot;And they overcame him by the blood of the Lamb, and by the word of their testimony.&quot; Overcoming does not happen automatically — it happens by specific means.
            </p>
            <p className="text-[#555] leading-relaxed mb-10">
              The blood of Jesus is not a passive concept. It is an active, speaking, covering, cleansing, healing force. Here are five things it does — and why understanding them changes what you are dealing with.
            </p>

            <div className="space-y-10">
              {points.map((p) => (
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
                &quot;Guilt has a voice. Shame has a voice. Accusation has a voice. But the blood of Jesus speaks louder than all of them.&quot;
              </p>
              <cite className="text-[#555] text-sm not-italic mt-2 block">— Pastor Ricardo Zaal</cite>
            </blockquote>

            <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">How to Actually Apply This</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              Applying the blood is not ritual — it is faith in what the Bible says it does. Three practical steps:
            </p>
            <ol className="list-decimal list-inside space-y-3 text-[#555] leading-relaxed mb-6">
              <li><strong>Believe it is already done.</strong> The blood was shed. The work is complete. Your faith activates what already exists — it does not manufacture it.</li>
              <li><strong>Declare what the Word says.</strong> &quot;By the blood of Jesus I have overcome. By his stripes I am healed.&quot; Confession is not repetition — it is alignment with what is true.</li>
              <li><strong>Reject condemnation.</strong> Romans 8:1 — &quot;There is therefore now no condemnation to them which are in Christ Jesus.&quot; Stop agreeing with accusation. You have confessed. The blood covered it. Move.</li>
            </ol>

            <p className="text-[#555] leading-relaxed">
              If you are in Pretoria North and want to hear this kind of teaching live,{' '}
              <Link href="/plan-your-visit" className="text-[#008080] font-semibold hover:underline">
                come on a Sunday
              </Link>{' '}
              — Fountain of Grace International meets every week at 323 B Danie Theron Street.
            </p>
          </div>
        </section>

        <section className="bg-gray-50 py-12 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-[#1a1a1a] mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">Why do some problems keep coming back even after prayer?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Persistent problems often continue because the person is fighting the symptom without applying what overcomes the root. Revelation 12:11 identifies the specific means of overcoming: the blood of the Lamb and the word of your testimony. Applying the blood means believing and declaring what it does — not waiting for results without engaging the spiritual mechanism.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">Do I need to clean my life up before coming to God?</h3>
                <p className="text-[#555] leading-relaxed text-sm">No. Hebrews 10:19 says you have &quot;boldness to enter into the holiest by the blood of Jesus.&quot; The access is not earned — it was purchased. Coming to God as you are is the correct response to what the blood provided. The idea that you must fix yourself first before approaching God is a false doctrine.</p>
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
