import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "You Already Know What To Do - So Why Aren't You Doing It? | Fountain of Grace International",
  description:
    "You have the idea, the plan, and the calling. The problem is not knowledge - it is execution. Pastor Ricardo Zaal breaks down exactly what keeps people frozen. Pretoria North, South Africa.",
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/sermons/you-already-know-what-to-do-so-why-arent-you-doing-it',
  },
  openGraph: {
    title: "You Already Know What To Do - So Why Aren't You Doing It?",
    description:
      "The gap between knowing and doing is not about information. It is about fear, double-mindedness, and waiting for perfect conditions that will never come. Fountain of Grace International, Pretoria North.",
    type: 'article',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International - Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/sermons/you-already-know-what-to-do-so-why-arent-you-doing-it',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "You Already Know What To Do - So Why Aren't You Doing It?",
    description: "The gap between knowing and doing is not about information. Fear disguised as wisdom, double-minded thinking, and waiting for perfect conditions keep capable people frozen. This message names each one and shows what to do instead.",
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
    datePublished: '2026-03-01T12:00:00+02:00',
    url: 'https://www.fountaingrace.org/sermons/you-already-know-what-to-do-so-why-arent-you-doing-it',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: "You Already Know What To Do - So Why Aren't You Doing It?",
    description: "The gap between knowing and doing is not about information. Fear disguised as wisdom, double-minded thinking, and waiting for perfect conditions keep capable people frozen.",
    thumbnailUrl: 'https://img.youtube.com/vi/XC1uMayfflI/maxresdefault.jpg',
    uploadDate: '2026-03-01T12:00:00+02:00',
    embedUrl: 'https://www.youtube.com/embed/XC1uMayfflI',
    url: 'https://www.youtube.com/watch?v=XC1uMayfflI',
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
      { '@type': 'ListItem', position: 3, name: "You Already Know What To Do", item: 'https://www.fountaingrace.org/sermons/you-already-know-what-to-do-so-why-arent-you-doing-it' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why do I keep procrastinating on something I really want to do?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Procrastination is almost always fear of failure dressed up as careful thinking. Once you name it as fear rather than wisdom, 2 Timothy 1:7 gives you the response: God has not given you the spirit of fear but of power, love, and a sound mind. The spirit of timidity and shrinking back is not from God. You can choose to act anyway.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I stop overthinking and start taking action?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Overthinking is a loop of conflicting thoughts with no decision ever being made. James 1:6-8 describes the double-minded man as unstable in all his ways, driven by the wind and tossed. The solution is to pick one direction and commit. Your mind follows focus - not endless options.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why do I feel called to do something but never actually do it?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "The gap between calling and action is rarely a knowledge problem. It is a courage problem. Peter did not need more information about walking on water - he needed to get out of the boat. Matthew 14:28 shows that the invitation had already come. God has already given you the strength to move. The step is yours to take.",
        },
      },
      {
        '@type': 'Question',
        name: 'How do I know when the right time is to start a business or new project?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "There is no perfect time. Ecclesiastes 11:4 says the person who watches the wind will never plant, and the one who looks at the clouds will never harvest. The Hebrew word for 'observe' in that verse means to watch carefully and wait for ideal conditions - which is exactly what God warns against. Start where you are.",
        },
      },
      {
        '@type': 'Question',
        name: 'Why do I start things strong but never finish them?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Starting strong without finishing usually comes from double-minded thinking - always keeping options open instead of committing fully to one path. The double-minded man of James 1 never receives anything because he never truly decides. Clarity and full commitment are what carry you from start to finish line.",
        },
      },
    ],
  },
]

const points = [
  {
    n: 1,
    title: 'Fear Disguised as Wisdom',
    scripture: '2 Timothy 1:7',
    body: '"For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind." The Greek word for fear here is delia - it means timidity, cowardice, and shrinking back. The word for power is dynamis - the same root as dynamite. A force, a strength in action. When you tell yourself you are just being careful, check whether you are actually shrinking. Careful is a decision made in faith. Shrinking is fear wearing a reasonable face. God has given you dynamis. The spirit that keeps you frozen is not from Him.',
  },
  {
    n: 2,
    title: 'Double-Minded Thinking',
    scripture: 'James 1:6-8',
    body: '"Let him ask in faith, nothing wavering. For he that wavereth is like a wave of the sea driven with the wind and tossed. A double minded man is unstable in all his ways." Keeping all your options open is not flexibility - it is instability. The double-minded person thinks he is being wise by not committing, but James says he will receive nothing from God. When you want a Toyota and a Jeep at the same time, you get neither. Be specific. Commit to the direction and move in it.',
  },
  {
    n: 3,
    title: 'Waiting for Perfect Conditions',
    scripture: 'Ecclesiastes 11:4',
    body: '"He that observeth the wind shall not sow; and he that regardeth the clouds shall not reap." The Hebrew word for observe in this verse literally means to watch carefully and wait for ideal conditions. Solomon wrote this warning specifically for the person who will not plant until everything aligns. The person watching the wind never plants. The person waiting for perfect clouds never harvests. The conditions you are waiting for are not coming. Start with what you have, where you are.',
  },
  {
    n: 4,
    title: 'The Invitation Has Already Come',
    scripture: 'Matthew 14:28',
    body: '"And Peter answered him and said, Lord, if it be thou, bid me come unto thee on the water. And he said, Come." Peter did not wait for perfect conditions. He did not wait for someone else to go first. He saw someone who had done the extraordinary and he asked for permission to step into it himself. The invitation had come. The question is whether you will get out of the boat. What you are waiting for permission to do - the invitation has already been extended. The word is "Come."',
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
              You Already Know What To Do - So Why Aren&apos;t You Doing It?
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              The problem is not that you need more information. You already know what to do. The gap is between knowing and doing - and that gap has a name. This message identifies what is actually keeping you stuck and shows you how to move.
            </p>
            <p className="text-white/60 text-sm">
              Pastor Ricardo Zaal · Fountain of Grace International, Pretoria North · 1 March 2026
            </p>
          </div>
        </header>

        <section className="bg-white pt-10 pb-2 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#1a1a1a] text-lg font-semibold leading-snug mb-4">{"Ever wondered why you aren't moving forward?"}</p>
            <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/XC1uMayfflI"
                title="You Already Know What To Do - So Why Aren't You Doing It? - Fountain of Grace International"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="text-[#555] text-sm mt-4 mb-2">Prefer reading? The full sermon notes are below.</p>
            <div className="mt-4">
              <p className="text-[#1a1a1a] font-semibold text-sm mb-2">Jump to a moment in the message:</p>
              <div className="flex flex-col gap-2">
                <button type="button" data-start="0" className="sermon-chapter text-left w-full bg-[#f7f7f7] hover:bg-[#f0fafa] border border-gray-200 rounded-lg px-4 py-3 text-[#333] transition-colors"><span className="text-[#008080] font-semibold mr-2">0:00</span>{"Why you're stuck"}</button>
                <button type="button" data-start="104" className="sermon-chapter text-left w-full bg-[#f7f7f7] hover:bg-[#f0fafa] border border-gray-200 rounded-lg px-4 py-3 text-[#333] transition-colors"><span className="text-[#008080] font-semibold mr-2">1:44</span>{"Waiting for permission"}</button>
                <button type="button" data-start="384" className="sermon-chapter text-left w-full bg-[#f7f7f7] hover:bg-[#f0fafa] border border-gray-200 rounded-lg px-4 py-3 text-[#333] transition-colors"><span className="text-[#008080] font-semibold mr-2">6:24</span>{"Overthinking kills action"}</button>
                <button type="button" data-start="966" className="sermon-chapter text-left w-full bg-[#f7f7f7] hover:bg-[#f0fafa] border border-gray-200 rounded-lg px-4 py-3 text-[#333] transition-colors"><span className="text-[#008080] font-semibold mr-2">16:06</span>{"Be crystal clear"}</button>
                <button type="button" data-start="1638" className="sermon-chapter text-left w-full bg-[#f7f7f7] hover:bg-[#f0fafa] border border-gray-200 rounded-lg px-4 py-3 text-[#333] transition-colors"><span className="text-[#008080] font-semibold mr-2">27:18</span>{"Stop relying on logic"}</button>
                <button type="button" data-start="2737" className="sermon-chapter text-left w-full bg-[#f7f7f7] hover:bg-[#f0fafa] border border-gray-200 rounded-lg px-4 py-3 text-[#333] transition-colors"><span className="text-[#008080] font-semibold mr-2">45:37</span>{"Take 24 hour action"}</button>
              </div>
            </div>
            <div className="bg-[#f0fafa] border border-[#cfeeee] rounded-xl p-5 mt-6">
              <h2 className="text-lg font-bold text-[#1a1a1a] mb-3">This message is for you if:</h2>
              <ul className="list-disc list-inside space-y-2 text-[#555]">
                <li className="leading-relaxed">{"You have lots of plans with no action"}</li>
                <li className="leading-relaxed">{"You feel frustrated watching others succeed"}</li>
                <li className="leading-relaxed">{"You overthink everything you want to start"}</li>
                <li className="leading-relaxed">{"You wait for perfect conditions to begin"}</li>
              </ul>
            </div>

          </div>
        </section>

        <section className="bg-white py-14 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#555] leading-relaxed text-lg mb-4">
              Most people who are stuck are not stuck because they lack knowledge. They know the idea. They have seen the opportunity. They have heard what God is calling them toward. The problem is not information - it is execution. And execution is blocked by something specific.
            </p>
            <p className="text-[#555] leading-relaxed mb-10">
              This message, recorded live at Fountain of Grace International in Pretoria North, South Africa, names the four things that keep capable people frozen. Fear that disguises itself as wisdom. Double-minded thinking that holds every option open and commits to none. Waiting for conditions that will never be perfect. And sitting in the boat when the invitation to come has already been given.
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
                &quot;You are not waiting for the right moment. You are waiting for the fear to leave. It will not leave before you move. It leaves when you move.&quot;
              </p>
              <cite className="text-[#555] text-sm not-italic mt-2 block">- Pastor Ricardo Zaal</cite>
            </blockquote>

            <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">How to Break the Pattern</h2>
            <ol className="list-decimal list-inside space-y-3 text-[#555] leading-relaxed mb-6">
              <li><strong>Name what is actually stopping you.</strong> Call it fear, not caution. Call it double-mindedness, not flexibility. You cannot deal with something you have not correctly identified.</li>
              <li><strong>Make a specific decision and commit to it.</strong> Not two options, not a backup plan that keeps the original door open. One direction. The double-minded man receives nothing because he never truly decides.</li>
              <li><strong>Start where the conditions are, not where you wish they were.</strong> Ecclesiastes 11 is clear: the one watching the wind does not plant. The one waiting for perfect clouds does not harvest. The next step does not require ideal conditions - it requires a decision.</li>
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
                <h3 className="font-semibold text-[#1a1a1a] mb-2">Why do I keep procrastinating on something I really want to do?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Procrastination is almost always fear of failure dressed up as careful thinking. 2 Timothy 1:7 is direct: God has not given you the spirit of fear but of power, love, and a sound mind. Once you name what is actually happening, you can choose to move anyway.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">How do I stop overthinking and start taking action?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Overthinking is a loop of conflicting thoughts with no decision ever made. James 1:6-8 says the double-minded man is unstable in all his ways and receives nothing from the Lord. Pick one direction and commit to it. Your mind follows focus - not a list of options you keep open.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">How do I know when the right time is to start a business or new project?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Ecclesiastes 11:4 says the person who watches the wind will never plant, and the one looking at the clouds will never harvest. The Hebrew word for &quot;observe&quot; there literally means waiting for ideal conditions - which Solomon is warning you not to do. There is no perfect moment. Start where the conditions are.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">Why do I start things strong but never finish them?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Starting strong without finishing usually comes from double-minded thinking - always keeping another option available so the original commitment is never fully made. The double-minded person of James 1 receives nothing because he never truly decides. Full commitment is what carries you from start to finish.</p>
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
            <a href={"https://wa.me/?text=I%20thought%20this%20message%20may%20encourage%20you%3A%20https%3A//www.fountaingrace.org/sermons/you-already-know-what-to-do-so-why-arent-you-doing-it%3Futm_source%3Dwhatsapp"} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold text-lg px-7 py-4 rounded-xl hover:bg-[#1ebe5d] transition-colors w-full sm:w-auto">
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
