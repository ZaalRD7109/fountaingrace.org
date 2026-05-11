import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "You Don't Know Who You Are Yet | Fountain of Grace International",
  description:
    "Most people live by an identity built from failure, other people's words, and what life has done to them. This message from Pastor Ricardo Zaal shows you what God says instead. Pretoria North.",
  robots: 'index, follow',
  alternates: {
    canonical: "https://www.fountaingrace.org/sermons/you-dont-know-who-you-are-yet",
  },
  openGraph: {
    title: "You Don't Know Who You Are Yet",
    description:
      "If you have spent years living by an identity that was handed to you by your worst moments, this message is the interruption you need. Fountain of Grace International, Pretoria North.",
    type: 'article',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International - Church in Pretoria North' }],
    url: "https://www.fountaingrace.org/sermons/you-dont-know-who-you-are-yet",
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "You Don't Know Who You Are Yet",
    description: "Most people define themselves by their history. God defines you by your destiny. This message unpacks the gap between the identity life gave you and the identity God has been forming in you.",
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
    datePublished: '2026-05-03',
    url: 'https://www.fountaingrace.org/sermons/you-dont-know-who-you-are-yet',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Sermons', item: 'https://www.fountaingrace.org/sermons' },
      { '@type': 'ListItem', position: 3, name: "You Don't Know Who You Are Yet", item: 'https://www.fountaingrace.org/sermons/you-dont-know-who-you-are-yet' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: "You Don't Know Who You Are Yet",
    description: "Most people live by an identity built from failure, other people's words, and what life has done to them. This message from Pastor Ricardo Zaal shows you what God says instead.",
    thumbnailUrl: 'https://img.youtube.com/vi/2eUaSyffcIs/maxresdefault.jpg',
    uploadDate: '2026-05-03',
    embedUrl: 'https://www.youtube.com/embed/2eUaSyffcIs',
    url: 'https://www.fountaingrace.org/sermons/you-dont-know-who-you-are-yet',
    author: { '@type': 'Person', name: 'Pastor Ricardo Zaal' },
    publisher: {
      '@type': 'Organization',
      name: 'Fountain of Grace International',
      url: 'https://www.fountaingrace.org',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why do I feel like I have no real sense of who I am?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Most people\'s sense of identity was formed by the environment they grew up in, the words spoken over them, their failures, and how others treated them. None of those things are reliable sources of identity. When you build your identity on unstable ground - performance, approval, or the absence of pain - you end up feeling lost because those foundations keep shifting. The Bible teaches that true identity is rooted in what God says about you, not what your history says about you.",
        },
      },
      {
        '@type': 'Question',
        name: 'What does the Bible say about identity?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Scripture consistently shows God addressing people by who they are becoming, not who they currently appear to be. Gideon was hiding in a winepress when the angel said 'thou mighty man of valour' (Judges 6:12). Abram had no children when God renamed him Abraham - father of many nations. Simon was unstable when Jesus renamed him Peter - the rock. God sees the finished version of you and speaks to that version while you are still in process.",
        },
      },
      {
        '@type': 'Question',
        name: 'How do I discover who God says I am?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "The process starts with replacing the voices you have believed with what the Word of God actually says. Romans 12:2 says you are transformed by the renewing of your mind - not by willpower or self-improvement, but by a change in what you are filling your mind with. Practically: find what the Bible says about you as a child of God, speak it out loud, and stop agreeing with the accusations of the enemy or the limitations of your past. Identity is rebuilt by what you repeatedly hear and believe.",
        },
      },
      {
        '@type': 'Question',
        name: "What does 'you don't know who you are yet' mean?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "It means you are not the finished product. What you have experienced, what you have failed at, and what people said you were - none of that is the final word on who you are. God is still working on you. Philippians 1:6 says He who began a good work in you will perform it until the day of Jesus Christ. The version of you that God started is still being completed. You have not seen your full self yet.",
        },
      },
    ],
  },
]

const points = [
  {
    n: 1,
    title: 'You Have Been Living Someone Else\'s Definition of You',
    scripture: 'Romans 12:2',
    body: 'The world around you has been working to define you since the day you were born. Parents, teachers, failure, rejection, and your own worst moments all contributed a version of who you are. But Romans 12:2 says, "be not conformed to this world: but be ye transformed by the renewing of your mind." Conformed means shaped by external pressure. Most people\'s identity was formed under pressure, not by revelation. The real you is not the version that pressure produced.',
  },
  {
    n: 2,
    title: 'God Speaks to Who You Are Becoming',
    scripture: 'Judges 6:12',
    body: 'Gideon was hiding in a winepress - afraid, small, convinced his family was the weakest in Manasseh and that he was the least in his father\'s house. The angel showed up and said, "The Lord is with thee, thou mighty man of valour." Not who Gideon thought he was. Not who his circumstances said he was. The angel spoke to the identity God had already placed in him that had not yet been activated. This is how God speaks. He names your destiny before you have lived it.',
  },
  {
    n: 3,
    title: 'Your Past Is Not Your Identity',
    scripture: '2 Corinthians 5:17',
    body: '"Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new." The word translated "new" in the Greek is kainos - it means a new kind, a new quality, something that did not exist before. God is not trying to improve the old version of you. He is creating a new one. The reason you keep dragging your past into your future is that no one told you the transaction was complete. In Christ, you are not a repaired version of who you were. You are a different person.',
  },
  {
    n: 4,
    title: 'You Are Not Done Yet',
    scripture: 'Philippians 1:6',
    body: '"Being confident of this very thing, that he which hath begun a good work in you will perform it until the day of Jesus Christ." The phrase "will perform it" means He will carry it through to completion. The work God started in you has a finishing date - and it is not today. What you see in yourself right now is an incomplete picture. The version of you that emerges from the process God is running in your life is not the version you are looking at in the mirror this morning. You have not seen yourself yet.',
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
              You Don&apos;t Know Who You Are Yet
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              You have been living by an identity built from your worst moments, from what people said about you, and from what life has done to you. None of that is who God says you are. This message is about the gap between the version of you that was shaped by pressure and the version God has been forming since before you were born.
            </p>
            <p className="text-white/60 text-sm">
              Pastor Ricardo Zaal · Fountain of Grace International, Pretoria North · 3 May 2026
            </p>
          </div>
        </header>

        <section className="bg-white pt-10 pb-2 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/2eUaSyffcIs"
                title="You Don't Know Who You Are Yet - Fountain of Grace International"
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
              Most people carry an identity they never chose. It was handed to them by the family they grew up in, the school they attended, the relationship that broke them, or the failure they could not recover from. They have been living as a reduced version of themselves ever since - not because they are broken, but because nobody ever showed them the real picture.
            </p>
            <p className="text-[#555] leading-relaxed mb-10">
              The Bible shows a consistent pattern: God addresses people by who they are becoming, not who they currently appear to be. He did it with Gideon. He did it with Abraham. He did it with Simon Peter. He is doing it with you. The statement is not &quot;you are not who you think you are.&quot; It is stronger than that: you have not seen yourself yet.
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
                &quot;God named Abram as father of nations before he had a single child. He speaks to the finished version of you while you are still in process.&quot;
              </p>
              <cite className="text-[#555] text-sm not-italic mt-2 block">- Pastor Ricardo Zaal</cite>
            </blockquote>

            <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">How to Start Living From the Right Identity</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              Identity is not changed by trying harder. It is changed by what you consistently believe. Three steps that shift identity from the inside:
            </p>
            <ol className="list-decimal list-inside space-y-3 text-[#555] leading-relaxed mb-6">
              <li><strong>Stop agreeing with the old report.</strong> Every time you say &quot;I am just like this&quot; or &quot;I always do that,&quot; you are signing off on a false identity. Romans 12:2 says transformation comes by renewing your mind - that starts with what you stop accepting as true.</li>
              <li><strong>Find what God says and speak it.</strong> The same way Gideon had to accept &quot;mighty man of valour&quot; before he became one, you have to receive what God says about you before it shows up in your behavior. Search the Word for what it calls you as a child of God. Declare it.</li>
              <li><strong>Trust the process, not the current picture.</strong> Philippians 1:6 - the work is not finished. What you see in yourself today is incomplete. God is not done. The right response to an unfinished process is not frustration. It is patience and cooperation.</li>
            </ol>

            <p className="text-[#555] leading-relaxed">
              If you are in Pretoria North and want to hear this kind of teaching in person,{' '}
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
                <h3 className="font-semibold text-[#1a1a1a] mb-2">Why do I feel like I have no real sense of who I am?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Most people&apos;s sense of identity was formed by their environment, the words spoken over them, failures, and how others treated them. None of those are reliable. When identity is built on performance or approval, it keeps shifting. The Bible teaches that true identity is rooted in what God says about you - not what your history says.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">What does the Bible say about identity?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Scripture consistently shows God addressing people by who they are becoming, not who they currently appear to be. Gideon was hiding when the angel called him &quot;mighty man of valour.&quot; Abram had no children when God named him father of many nations. God sees the finished version of you and speaks to that version while you are still in process.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">How do I discover who God says I am?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Romans 12:2 says transformation comes by renewing your mind. Start by finding what the Bible says about you as a child of God, declare it out loud, and stop agreeing with the accusations of the enemy or the limitations of your past. Identity is rebuilt by what you repeatedly hear and believe.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">What does &quot;you don&apos;t know who you are yet&quot; mean?</h3>
                <p className="text-[#555] leading-relaxed text-sm">It means you are not the finished product. What you have experienced, failed at, and what people called you - none of that is the final word. Philippians 1:6 says He who began a good work in you will perform it until the day of Jesus Christ. The version of you God started is still being completed. You have not seen your full self yet.</p>
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

        <section className="bg-white py-10 px-4 sm:px-6 border-t border-gray-100">
          <div className="max-w-3xl mx-auto">
            <details className="group">
              <summary className="cursor-pointer text-[#2a9df4] font-semibold text-base select-none list-none flex items-center gap-2">
                <span className="inline-block transition-transform group-open:rotate-90">&#9658;</span>
                Read Full Sermon Transcript
              </summary>
              <div className="mt-6 text-[#555] text-sm leading-relaxed whitespace-pre-wrap">
                Transcript coming soon.
              </div>
            </details>
          </div>
        </section>
      </article>
    </>
  )
}
