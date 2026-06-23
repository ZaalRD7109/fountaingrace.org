import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "When It Looks Like God Is Silent - You're Still in the Story",
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
    images: [{ url: "https://img.youtube.com/vi/OOofjfMVZG4/maxresdefault.jpg", width: 1280, height: 720, alt: "When It Looks Like God Is Silent - You're Still in the Story - Fountain of Grace International" }],
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
    datePublished: '2025-06-22T12:00:00+02:00',
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
            <p className="text-[#1a1a1a] text-lg font-semibold leading-snug mb-4">{"Feeling like your story isn't done yet?"}</p>
            <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/OOofjfMVZG4"
                title="You're Still in the Story: When It Looks Like God Is Silent - Fountain of Grace International"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="text-[#555] text-sm mt-4 mb-2">Prefer reading? The full sermon notes are below.</p>
            <div className="mt-4">
              <p className="text-[#1a1a1a] font-semibold text-sm mb-2">Jump to a moment in the message:</p>
              <div className="flex flex-col gap-2">
                <button type="button" data-start="0" className="sermon-chapter text-left w-full bg-[#f7f7f7] hover:bg-[#f0fafa] border border-gray-200 rounded-lg px-4 py-3 text-[#333] transition-colors"><span className="text-[#008080] font-semibold mr-2">0:00</span>{"You need to grow"}</button>
                <button type="button" data-start="45" className="sermon-chapter text-left w-full bg-[#f7f7f7] hover:bg-[#f0fafa] border border-gray-200 rounded-lg px-4 py-3 text-[#333] transition-colors"><span className="text-[#008080] font-semibold mr-2">0:45</span>{"Stories matter"}</button>
                <button type="button" data-start="331" className="sermon-chapter text-left w-full bg-[#f7f7f7] hover:bg-[#f0fafa] border border-gray-200 rounded-lg px-4 py-3 text-[#333] transition-colors"><span className="text-[#008080] font-semibold mr-2">5:31</span>{"Your best days ahead"}</button>
                <button type="button" data-start="1425" className="sermon-chapter text-left w-full bg-[#f7f7f7] hover:bg-[#f0fafa] border border-gray-200 rounded-lg px-4 py-3 text-[#333] transition-colors"><span className="text-[#008080] font-semibold mr-2">23:45</span>{"Don't close the book"}</button>
                <button type="button" data-start="2737" className="sermon-chapter text-left w-full bg-[#f7f7f7] hover:bg-[#f0fafa] border border-gray-200 rounded-lg px-4 py-3 text-[#333] transition-colors"><span className="text-[#008080] font-semibold mr-2">45:37</span>{"Reject the wrong label"}</button>
                <button type="button" data-start="3756" className="sermon-chapter text-left w-full bg-[#f7f7f7] hover:bg-[#f0fafa] border border-gray-200 rounded-lg px-4 py-3 text-[#333] transition-colors"><span className="text-[#008080] font-semibold mr-2">1:02:36</span>{"One chapter isn't everything"}</button>
                <button type="button" data-start="4745" className="sermon-chapter text-left w-full bg-[#f7f7f7] hover:bg-[#f0fafa] border border-gray-200 rounded-lg px-4 py-3 text-[#333] transition-colors"><span className="text-[#008080] font-semibold mr-2">1:19:05</span>{"You are still seen"}</button>
              </div>
            </div>
            <div className="bg-[#f0fafa] border border-[#cfeeee] rounded-xl p-5 mt-6">
              <h2 className="text-lg font-bold text-[#1a1a1a] mb-3">This message is for you if:</h2>
              <ul className="list-disc list-inside space-y-2 text-[#555]">
                <li className="leading-relaxed">{"You feel like silence means the end"}</li>
                <li className="leading-relaxed">{"You think your past defines everything"}</li>
                <li className="leading-relaxed">{"You feel unseen and unfinished"}</li>
                <li className="leading-relaxed">{"You wonder if better days are possible"}</li>
              </ul>
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
              If you are in or around Pretoria or Johannesburg and want to hear messages like this live,{' '}
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
        <section className="bg-white py-12 px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-xl font-bold text-[#1a1a1a] mb-2">Send this to someone who needs it</h2>
            <p className="text-[#555] mb-5">One message can reach someone you cannot. Pass it on.</p>
            <a href={"https://wa.me/?text=I%20thought%20this%20message%20may%20encourage%20you%3A%20https%3A//www.fountaingrace.org/sermons/youre-still-in-the-story-when-god-seems-silent%3Futm_source%3Dwhatsapp"} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold text-lg px-7 py-4 rounded-xl hover:bg-[#1ebe5d] transition-colors w-full sm:w-auto">
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden="true"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.821 11.821 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.477-.911zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
              Share on WhatsApp
            </a>
          </div>
        </section>
      <script dangerouslySetInnerHTML={{ __html: "(function(){var f=document.querySelector('iframe[src*=\"youtube.com/embed/\"]');if(!f)return;var base=f.src.split('?')[0];document.querySelectorAll('.sermon-chapter').forEach(function(b){b.addEventListener('click',function(){var t=this.getAttribute('data-start');f.src=base+'?rel=0&autoplay=1&start='+t;f.scrollIntoView({behavior:'smooth',block:'center'});});});})();" }} />
      </article>
    </>
  )
}
