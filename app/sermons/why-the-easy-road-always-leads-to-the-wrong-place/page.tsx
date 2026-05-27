import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Why the Easy Road Always Leads to the Wrong Place | Fountain of Grace International',
  description:
    'Every shortcut you have ever taken has cost you more than it promised. This message unpacks why the easy route keeps leading to dead ends - and what the real road looks like. Pastor Ricardo Zaal, Pretoria North.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/sermons/why-the-easy-road-always-leads-to-the-wrong-place',
  },
  openGraph: {
    title: 'Why the Easy Road Always Leads to the Wrong Place',
    description:
      'The shortcut always looks straight. But Proverbs 14:12 says there is a way that seems right to a man, and the end is death. This message shows what the easy road actually costs. Fountain of Grace International, Pretoria North.',
    type: 'article',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International - Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/sermons/why-the-easy-road-always-leads-to-the-wrong-place',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Why the Easy Road Always Leads to the Wrong Place',
    description: "Every shortcut promises faster. Every shortcut costs more. This message uses Matthew 4, Proverbs 14:12, and the life of Jesus to explain why the easy road always delivers the wrong destination - and why Satan's offer was real but ruinous.",
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
    datePublished: '2026-05-17',
    url: 'https://www.fountaingrace.org/sermons/why-the-easy-road-always-leads-to-the-wrong-place',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Why the Easy Road Always Leads to the Wrong Place',
    description: "Every shortcut promises faster. Every shortcut costs more. This message uses Matthew 4 and Proverbs 14:12 to explain why the easy road always delivers the wrong destination.",
    thumbnailUrl: 'https://img.youtube.com/vi/fuG5lS9Q0Fs/maxresdefault.jpg',
    uploadDate: '2026-05-17T12:00:00+02:00',
    embedUrl: 'https://www.youtube.com/embed/fuG5lS9Q0Fs',
    url: 'https://www.youtube.com/watch?v=fuG5lS9Q0Fs',
    author: { '@type': 'Person', name: 'Pastor Ricardo Zaal' },
    publisher: {
      '@type': 'Organization',
      name: 'Fountain of Grace International',
      url: 'https://www.fountaingrace.org',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Sermons', item: 'https://www.fountaingrace.org/sermons' },
      { '@type': 'ListItem', position: 3, name: 'Why the Easy Road Always Leads to the Wrong Place', item: 'https://www.fountaingrace.org/sermons/why-the-easy-road-always-leads-to-the-wrong-place' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why do my shortcuts never work out?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Shortcuts remove the process that builds your capacity for the destination. Without the process, you either fail to arrive or arrive unqualified to handle what is there. Proverbs 14:12 says there is a way that seems right to a man, but the end is death. The shortcut looks straight. The cost is hidden at the front and discovered at the back.",
        },
      },
      {
        '@type': 'Question',
        name: 'Why does the easy way always make things worse?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "The easy way hides its real price upfront. You only discover the full cost once you are already committed - and by then you have lost time, resources, and sometimes ground you had already gained. Every fast route taken leads to a dead end because the destination was reached without the qualification the process was meant to build.",
        },
      },
      {
        '@type': 'Question',
        name: 'How do I stop making bad decisions when I am desperate?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Desperation is exactly when the worst offers look most attractive. Satan offered Jesus the kingdom of the world at the moment of maximum depletion - 40 days without food. He did not attack when Jesus was full. He waited for the vulnerable moment. Recognising that your most desperate seasons are when shortcuts are most aggressively offered can help you pause before you commit.",
        },
      },
      {
        '@type': 'Question',
        name: 'How do I know if an opportunity is a shortcut or a real open door?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "A real open door does not require you to skip the process God has you in. In Matthew 4, Satan offered Jesus all the kingdoms of the world - a real offer, a real destination - but it required bypassing the cross that qualified Him for it. If accepting an opportunity means skipping something God has placed in your path, that is the cost the offer is hiding.",
        },
      },
      {
        '@type': 'Question',
        name: 'Why does it feel like I keep starting over?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Shortcut after shortcut often leaves you further back than where you started. Each fast route that fails costs time, money, and momentum that the longer road would not have cost. The longer road feels slower at the beginning, but it only has to be walked once. The shortcut feels faster until you discover you have to walk the whole road again anyway.",
        },
      },
    ],
  },
]

const points = [
  {
    n: 1,
    title: 'Every Shortcut Hides Its Real Cost at the Front',
    scripture: 'Proverbs 14:12',
    body: '"There is a way which seemeth right unto a man, but the end thereof are the ways of death." The shortcut always looks straight. It always looks reasonable. The person taking it is not usually being reckless - they genuinely believe they have found a better route. The problem is that the real cost of the shortcut is not shown at the front. It is disclosed at the back, after you are already committed. By the time you discover what it actually cost, you have spent what you cannot get back.',
  },
  {
    n: 2,
    title: 'The Destination Without the Process Breaks You',
    scripture: 'Matthew 4:8-10',
    body: '"Again, the devil taketh him up into an exceeding high mountain, and sheweth him all the kingdoms of the world, and the glory of them; And saith unto him, All these things will I give thee, if thou wilt fall down and worship me. Then saith Jesus unto him, Get thee hence, Satan." This was not a fake offer. The kingdoms were real. The destination was real. But accepting the destination without the process that qualified Jesus for it would have broken both Him and the destination. The easy road removes the qualification while it delivers the result. You arrive unprepared - or you do not arrive at all.',
  },
  {
    n: 3,
    title: 'The Enemy Attacks at Your Most Vulnerable Point',
    scripture: 'Matthew 4:2-3',
    body: '"And when he had fasted forty days and forty nights, he was afterward an hungred. And when the tempter came to him..." The Greek word for afterward is histeron - it means after the fact, at the point of maximum depletion. Satan did not approach Jesus at full strength. He waited for forty days. He studied the moment of greatest vulnerability and timed the offer to land precisely there. This is not coincidence. Your most desperate season is when the shortcut is most aggressively marketed to you. That timing is intentional.',
  },
  {
    n: 4,
    title: 'The Enemy Knows Your Bible and Uses It Against You',
    scripture: 'Matthew 4:6',
    body: '"If thou be the Son of God, cast thyself down: for it is written, He shall give his angels charge concerning thee..." Satan quoted Psalm 91 correctly. The verse was real. The scripture was accurate. The application was designed to destroy. When a shortcut arrives with scripture attached - a promise, a word, a confirmation that sounds right - that does not make it legitimate. The enemy knows what you want to hear. He knows which scriptures will speak to your current situation. The test is not whether the offer comes with words from God. The test is whether the offer requires you to skip what God has placed in your path.',
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
              Why the Easy Road Always Leads to the Wrong Place
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              Every shortcut you have taken has cost more than it promised. And somehow you ended up further back than where you started. This message explains exactly why the easy road always delivers the wrong destination - and what the real road actually requires.
            </p>
            <p className="text-white/60 text-sm">
              Pastor Ricardo Zaal · Fountain of Grace International, Pretoria North · 17 May 2026
            </p>
          </div>
        </header>

        <section className="bg-white pt-10 pb-2 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/fuG5lS9Q0Fs"
                title="Why the Easy Road Always Leads to the Wrong Place - Fountain of Grace International"
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
              The shortcut is always attractive because it promises the destination without the cost. Fast money. A quicker route. A way to get there without going through what you are supposed to go through. And every time you take it, you end up further back than where you were when you started.
            </p>
            <p className="text-[#555] leading-relaxed mb-10">
              In Matthew 4, Satan offered Jesus all the kingdoms of the world. The offer was real. The destination was real. But taking it would have required skipping the very process that qualified Jesus to hold it. This message, taught live at Fountain of Grace International in Pretoria North, South Africa, unpacks why the enemy always offers the destination without the obedience - and why saying no to the shortcut is not weakness. It is the harder and only road that actually gets you there.
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
                &quot;The easy road removes the qualification while it delivers the destination. You arrive without being ready. Or you never arrive at all.&quot;
              </p>
              <cite className="text-[#555] text-sm not-italic mt-2 block">- Pastor Ricardo Zaal</cite>
            </blockquote>

            <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">How to Recognise a Shortcut Before You Take It</h2>
            <ol className="list-decimal list-inside space-y-3 text-[#555] leading-relaxed mb-6">
              <li><strong>Check the timing.</strong> The shortcut tends to arrive at your most desperate moment. If an offer comes when you are depleted, that timing is not coincidence. Slow down before you commit.</li>
              <li><strong>Ask what it is skipping.</strong> Every shortcut bypasses something. Ask specifically what the fast route is removing from the process. If what it removes is the thing God has you in right now, the shortcut is more expensive than it looks.</li>
              <li><strong>Check whether it requires compromise.</strong> Satan offered Jesus the kingdom - but it required worship. The easy road almost always requires giving up something that should not be on the table. Identify the hidden price before the offer expires.</li>
            </ol>

            <p className="text-[#555] leading-relaxed">
              If you are in Pretoria North and want to hear messages like this in person,{' '}
              <Link href="/plan-your-visit" className="fgi-link">
                join us on a Sunday
              </Link>{' '}
              - Fountain of Grace International meets every week at 323 B Danie Theron Street.
            </p>
          </div>
        </section>

        <section className="bg-gray-50 py-12 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-[#1a1a1a] mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">Why do my shortcuts never work out?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Shortcuts remove the process that builds your capacity for the destination. Proverbs 14:12 says there is a way that seems right to a man, but the end is death. The shortcut looks straight - the real cost is hidden at the front and discovered at the back, after you are already committed.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">Why does the easy way always make things worse?</h3>
                <p className="text-[#555] leading-relaxed text-sm">The easy way hides its real price upfront. You only discover the full cost once you are already in it - and by then you have lost time, resources, and sometimes ground you had already gained. Every fast route taken leads to a dead end because the destination was reached without the qualification the process was building.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">How do I stop making bad decisions when I am desperate?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Desperation is exactly when the worst offers look most attractive. Satan waited until day 40 of Jesus&apos; fast to make his move - the Greek word histeron means at the point of maximum depletion. Recognise that your most desperate season is when shortcuts are most aggressively offered. That timing is intentional. Slow down before you commit.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">How do I know if an opportunity is a shortcut or a real open door?</h3>
                <p className="text-[#555] leading-relaxed text-sm">A real open door does not require you to skip what God has you in. In Matthew 4, Satan offered Jesus all the kingdoms of the world - a real offer - but it required bypassing the cross that qualified Him for it. If accepting an opportunity means skipping what God has placed in your path right now, that is the cost the offer is not showing you upfront.</p>
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
