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
    datePublished: '2026-05-17',
    url: 'https://www.fountaingrace.org/sermons/you-already-know-what-to-do-so-why-arent-you-doing-it',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: "You Already Know What To Do - So Why Aren't You Doing It?",
    description: "The gap between knowing and doing is not about information. Fear disguised as wisdom, double-minded thinking, and waiting for perfect conditions keep capable people frozen.",
    thumbnailUrl: 'https://img.youtube.com/vi/XC1uMayfflI/maxresdefault.jpg',
    uploadDate: '2026-05-17',
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
              Pastor Ricardo Zaal · Fountain of Grace International, Pretoria North · 17 May 2026
            </p>
          </div>
        </header>

        <section className="bg-white pt-10 pb-2 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/XC1uMayfflI"
                title="You Already Know What To Do - So Why Aren't You Doing It? - Fountain of Grace International"
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
      </article>
    </>
  )
}
