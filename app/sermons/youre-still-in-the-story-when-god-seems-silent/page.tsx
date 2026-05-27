import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "When It Looks Like God Is Silent - You're Still in the Story | Fountain of Grace International",
  description:
    "When everything goes quiet and nothing seems to be moving, most people assume God stopped. Romans 8:28 says something different. Pastor Ricardo Zaal, Pretoria North.",
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/sermons/youre-still-in-the-story-when-god-seems-silent',
  },
  openGraph: {
    title: "When It Looks Like God Is Silent - You're Still in the Story",
    description:
      "The silence is not the end. Romans 8:28 says all things - not some things - work together for good. You are still in the story. Fountain of Grace International, Pretoria North.",
    type: 'article',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International - Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/sermons/youre-still-in-the-story-when-god-seems-silent',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "When It Looks Like God Is Silent - You're Still in the Story",
    description: "Romans 8:28 says all things work together for good. This message unpacks what it means to stay in the story when God seems silent - and why silence is not the same as absence.",
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
    url: 'https://www.fountaingrace.org/sermons/youre-still-in-the-story-when-god-seems-silent',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: "When It Looks Like God Is Silent - You're Still in the Story",
    description: "When everything goes quiet and nothing seems to be moving, most people assume God stopped. Romans 8:28 says something different. This message shows why silence is not the same as absence.",
    thumbnailUrl: 'https://img.youtube.com/vi/OOofjfMVZG4/maxresdefault.jpg',
    uploadDate: '2025-06-22T12:00:00+02:00',
    embedUrl: 'https://www.youtube.com/embed/OOofjfMVZG4',
    url: 'https://www.youtube.com/watch?v=OOofjfMVZG4',
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
      { '@type': 'ListItem', position: 3, name: "You're Still in the Story", item: 'https://www.fountaingrace.org/sermons/youre-still-in-the-story-when-god-seems-silent' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What does Romans 8:28 actually mean?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Romans 8:28 says "And we know that all things work together for good to them that love God, to them who are the called according to his purpose." The word "all" is the key. Not the good things only. Not the things that make sense. All things - including the silence, the delay, the loss, and the confusion. God is not working despite those things. He is working through them. The verse does not say all things feel good or look good. It says they work together for good.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why does God go silent sometimes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "God's silence is not the same as His absence. In the Bible, some of the most significant things God was building happened in seasons that looked completely quiet from the outside. Joseph spent years in a pit and a prison with no visible sign of the promise. The disciples spent three days at the tomb with no sign of the resurrection. Silence is often the season between the promise and the fulfillment - not a sign that God stopped, but a sign that something is being prepared that you cannot yet see.",
        },
      },
      {
        '@type': 'Question',
        name: 'How do you keep faith when God is not responding?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Faith was never designed to operate on feelings or visible evidence. Hebrews 11:1 says faith is the substance of things hoped for, the evidence of things not seen. When you cannot see God moving, faith says He is still in it. The practical response to a silent season is not to increase your volume of prayer - it is to hold your position. Stay in the Word, stay in community, stay obedient to the last thing God said, and trust that the Author of your story has not stopped writing.",
        },
      },
      {
        '@type': 'Question',
        name: "What does it mean that you're still in the story?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Every story has chapters that look like the end but are not. The cross looked like the end of the story. The empty tomb was the next chapter. When your life goes quiet - when the door closes, the relationship ends, the job disappears, or the prayer is not answered - that is not the final chapter. God is still the Author. Romans 8:28 is a guarantee written into the structure of reality for those who love God: the story is not over, and it ends well.",
        },
      },
    ],
  },
]

const points = [
  {
    n: 1,
    title: 'Silence Is Not the Same as Absence',
    scripture: 'Romans 8:28',
    body: '"And we know that all things work together for good to them that love God, to them who are the called according to his purpose." God does not stop working when He stops speaking. A surgeon does not talk to you while he is operating. The silence in the theatre is not evidence that nothing is happening - it is evidence that something precise and serious is underway. The silence you are in right now may be the most active season of what God is building.',
  },
  {
    n: 2,
    title: 'All Things Means All Things',
    scripture: 'Romans 8:28',
    body: 'The word "all" in Romans 8:28 does not come with exceptions. It is not "most things" or "the things that make sense." All things. The diagnosis. The betrayal. The delay. The door that closed. The prayer that went unanswered for years. God is not working despite those things - He is working through them. When you edit out the hard chapters, you are editing out the parts of the story that produce the greatest transformation.',
  },
  {
    n: 3,
    title: 'The Story Is Not Over',
    scripture: 'Philippians 1:6',
    body: '"He which hath begun a good work in you will perform it until the day of Jesus Christ." The word "perform" means to carry through to completion. What God started in you has a finishing date - and it is not the day the silence started. Joseph did not know in the pit what the pit was producing. The disciples did not know on Friday what Sunday was preparing. You are still in the middle of the story. The Author has not closed the book.',
  },
  {
    n: 4,
    title: 'Stay in Your Position',
    scripture: 'Hebrews 11:1',
    body: '"Now faith is the substance of things hoped for, the evidence of things not seen." Faith was never built for seasons when everything is visible. It was built for exactly this - the gap between the promise and the fulfillment, the silence between the word and the breakthrough. The practical instruction for a silent season is not to panic or change direction. Hold your position. Stay obedient to the last thing God said. The breakthrough is not delayed because God forgot. It is being assembled.',
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
              You&apos;re Still in the Story: When It Looks Like God Is Silent
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              The silence does not mean He stopped. It does not mean you failed. It does not mean the promise is cancelled. Romans 8:28 says all things - not some things - work together for good. You are still in the story. The Author has not closed the book.
            </p>
            <p className="text-white/60 text-sm">
              Pastor Ricardo Zaal · Fountain of Grace International, Pretoria North · 22 June 2025
            </p>
          </div>
        </header>

        <section className="bg-white pt-10 pb-2 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/OOofjfMVZG4"
                title="You're Still in the Story: When It Looks Like God Is Silent - Fountain of Grace International"
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
              Most people can handle hard seasons. What breaks people is the silent ones. When the prayer is not answered, the door does not open, the situation does not change, and there is no clear word from God - that is when most people conclude that either God is not real, or He is real but not interested in their situation.
            </p>
            <p className="text-[#555] leading-relaxed mb-10">
              Romans 8:28 was not written for people in breakthrough. It was written for people in the gap. The promise was given. The fulfillment has not arrived. And in between those two points, God is doing exactly what He said He would do - working all of it, every single part, together for your good. The silence is not the problem. The silence is the process.
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
                &quot;God is not working despite the hard chapters. He is working through them. The silence is not evidence that He stopped. It is evidence that something precise is underway.&quot;
              </p>
              <cite className="text-[#555] text-sm not-italic mt-2 block">- Pastor Ricardo Zaal</cite>
            </blockquote>

            <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">What to Do in a Silent Season</h2>
            <ol className="list-decimal list-inside space-y-3 text-[#555] leading-relaxed mb-6">
              <li><strong>Do not change direction based on silence.</strong> Stay obedient to the last thing God said. Silence is not a redirect. It is a holding pattern with a purpose.</li>
              <li><strong>Do not edit the promise.</strong> When nothing visible confirms what God said, the temptation is to downsize the promise to something more manageable. Resist it. The promise was not conditional on how quickly it came.</li>
              <li><strong>Trust the Author, not the chapter.</strong> You are in the middle of a story. The chapter you are in looks like an ending. It is not. The Author does not abandon the story at the hard part - He uses the hard part to write the breakthrough.</li>
            </ol>

            <p className="text-[#555] leading-relaxed">
              If you are in Pretoria North and want to hear messages like this live,{' '}
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
                <h3 className="font-semibold text-[#1a1a1a] mb-2">What does Romans 8:28 actually mean?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Romans 8:28 says all things work together for good to those who love God and are called according to His purpose. The word &quot;all&quot; is the key - not the good things only, not the things that make sense. All things. God is not working despite the hard things. He is working through them.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">Why does God go silent sometimes?</h3>
                <p className="text-[#555] leading-relaxed text-sm">God&apos;s silence is not the same as His absence. Joseph spent years in a pit and a prison with no visible sign of the promise. The disciples spent three days at the tomb with no sign of the resurrection. Silence is often the season between the promise and the fulfillment - not a sign that God stopped, but a sign that something is being prepared that you cannot yet see.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">How do you keep faith when God is not responding?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Hebrews 11:1 says faith is the substance of things hoped for, the evidence of things not seen. Faith was built for the silence between the promise and the fulfillment. Stay in the Word, stay in community, stay obedient to the last thing God said. The breakthrough is not delayed because God forgot - it is being assembled.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">What does it mean that you&apos;re still in the story?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Every story has chapters that look like endings but are not. The cross looked like the end of the story. The empty tomb was the next chapter. When your life goes quiet - when the door closes, the relationship ends, or the prayer is not answered - that is not the final chapter. Romans 8:28 is a guarantee written into reality for those who love God: the story is not over, and it ends well.</p>
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
