import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'No More Waiting Rooms - God Is Live Now | Fountain of Grace International',
  description:
    'You are not stuck in a waiting room. God is not buffering. This message challenges the believer who has been waiting for God to act - while God has already moved. Pretoria North.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/sermons/no-more-waiting-rooms-god-is-live-now',
  },
  openGraph: {
    title: 'No More Waiting Rooms - God Is Live Now',
    description:
      'The frustration of a waiting room. The buffering screen. The song that never plays. This message says God is already live - the question is whether you have tuned in. Pretoria North.',
    type: 'article',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International - Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/sermons/no-more-waiting-rooms-god-is-live-now',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'No More Waiting Rooms - God Is Live Now',
    description: 'This message addresses the believer stuck in a spiritual waiting room - praying, believing, but not receiving - by showing that God is already active. The waiting is not God\'s delay; it is misalignment with what He has already released.',
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
    datePublished: '2025-09-28',
    url: 'https://www.fountaingrace.org/sermons/no-more-waiting-rooms-god-is-live-now',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Sermons', item: 'https://www.fountaingrace.org/sermons' },
      { '@type': 'ListItem', position: 3, name: 'No More Waiting Rooms - God Is Live Now', item: 'https://www.fountaingrace.org/sermons/no-more-waiting-rooms-god-is-live-now' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why does it feel like God is not moving in my situation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The feeling of God not moving is often a signal of misalignment rather than His absence. God is not in a waiting room. He is already live. The issue is whether you are tuned in - positioned in obedience, expectation, and faith - or whether you are waiting passively for something to happen while He has already released what you need. Isaiah 43:19 says He is doing a new thing - the question He asks is, "will you not perceive it?"',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between waiting on God and being stuck in a waiting room?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Waiting on God is active - it involves preparation, obedience, and positioning. A waiting room is passive - sitting until someone calls your name, doing nothing to prepare for what is coming. God does not call you into passivity. Isaiah 40:31 says those who wait on the Lord shall renew their strength. The waiting is not inactivity. It is preparation while trusting His timing - not paralysis while wondering if He will show up.',
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
              No More Waiting Rooms - God Is Live Now
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              Everyone knows the frustration of a waiting room. The buffering screen. The livestream that won&apos;t load. You are hungry for what is on the other side - and the delay is unbearable. This message says God is not buffering. He is already live. The question is whether you have tuned in.
            </p>
            <p className="text-white/60 text-sm">
              Pastor Ricardo Zaal · Fountain of Grace International, Pretoria North · 28 September 2025
            </p>
          </div>
        </header>

        <section className="bg-white py-14 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">From Cassettes to Streaming</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              There was a time when hearing your favourite song required patience most people today would not tolerate. You waited for the radio presenter to play it - and if he did not, you went home empty. You sat in front of a cassette player, pressing play and stop repeatedly, writing down lyrics line by line. You bought an entire album for one song.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              Today, everything is instant. But the spiritual frustration of a waiting room is something every believer understands - the feeling of being ready, hungry, positioned - but unable to get through. This message addresses that frustration by asking a different question: what if the problem is not that God is delayed, but that you have not tuned in to where He already is?
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">God Is Not Buffering</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              Isaiah 43:19 - &quot;Behold, I will do a new thing; now it shall spring forth; shall ye not know it?&quot; The question God asks is not &quot;will I move?&quot; He says it is already springing forth. The question is: will you perceive it? Will you recognise it when it comes in a form you did not expect?
            </p>
            <p className="text-[#555] leading-relaxed mb-4">
              Many believers are praying for something God has already released - but they are looking in the wrong place. They are waiting for the door to open when God already opened a window. They are asking for a sign while the answer is already in motion around them. The waiting room is not God&apos;s address. He is already live.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              The issue is not the signal. The issue is the receiver. Are you positioned to receive what He has already sent?
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">Active Waiting vs. Passive Sitting</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              Isaiah 40:31 - &quot;But they that wait upon the Lord shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint.&quot;
            </p>
            <p className="text-[#555] leading-relaxed mb-4">
              The word &quot;wait&quot; in this verse carries the idea of expectant hope tied to movement - like a waiter in a restaurant. A waiter does not sit down when there are guests. He is active, attentive, and ready to move the moment he is needed. That is what waiting on God looks like: preparation, obedience, and attentiveness while trusting His timing.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              A waiting room is different. In a waiting room, you are passive. You are not preparing for what is coming. You are simply occupying space until your name is called. God does not call you into that kind of waiting. He calls you to prepare while He moves - so that when the moment comes, you are ready to step into what He has already released.
            </p>

            <blockquote className="border-l-4 border-[#FFD600] pl-5 py-2 my-10 bg-[#f0fafa] rounded-r-xl">
              <p className="text-[#2a9df4] font-semibold text-lg italic">
                &quot;God is not in a waiting room. He is already live. The question is not when He will move - the question is whether you are tuned in to where He already is.&quot;
              </p>
              <cite className="text-[#555] text-sm not-italic mt-2 block">- Pastor Ricardo Zaal</cite>
            </blockquote>

            <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">How to Exit the Waiting Room</h2>
            <ol className="list-decimal list-inside space-y-3 text-[#555] leading-relaxed mb-6">
              <li><strong>Stop waiting for a feeling and start acting on what you know.</strong> God rarely moves through emotion. He moves through obedience. What has He told you to do that you have been waiting to feel ready for?</li>
              <li><strong>Look for what is already springing forth.</strong> Isaiah 43:19 says the new thing is already happening. Open your eyes to what God is already doing around you - not just to what you wish He would do.</li>
              <li><strong>Prepare in the waiting.</strong> Use the season of not yet to build what you will need when the door opens. The person who prepares in the wait steps through the door immediately. The person who waited passively is not ready when it opens.</li>
            </ol>

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
                <h3 className="font-semibold text-[#1a1a1a] mb-2">Why does it feel like God is not moving in my situation?</h3>
                <p className="text-[#555] leading-relaxed text-sm">The feeling of God not moving is often a signal of misalignment rather than His absence. Isaiah 43:19 says He is already doing a new thing - and asks, &quot;will you not perceive it?&quot; The issue is often not that God is delayed but that the believer is looking in the wrong place or waiting passively instead of preparing actively.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">What is the difference between waiting on God and being stuck in a waiting room?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Waiting on God (Isaiah 40:31) is active - preparation, obedience, and expectation while trusting His timing. A waiting room is passive - sitting still until something happens. God calls believers to prepare while He moves, not to occupy space while hoping He will show up.</p>
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
