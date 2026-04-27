import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Why Your Prayers Are Not Changing Your Life | Fountain of Grace International',
  description:
    'A prophetic word only activates when you combine faith with the right action step. Most regrets come from what you did not do, not what you did wrong. Pretoria North.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/sermons/why-your-prayers-are-not-changing-your-life',
  },
  openGraph: {
    title: 'Why Your Prayers Are Not Changing Your Life',
    description:
      'You had the idea. Somebody else took it. You had the word from God. Nothing happened. This message explains the missing piece between prayer and result. Pretoria North.',
    type: 'article',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International - Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/sermons/why-your-prayers-are-not-changing-your-life',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Why Your Prayers Are Not Changing Your Life',
    description: 'A prophetic word only becomes reality when faith and corresponding action steps are present. Most regrets are not about wrong actions - they are about inaction. The building with the foundation but no bricks is still just an idea.',
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
    datePublished: '2026-01-04',
    url: 'https://www.fountaingrace.org/sermons/why-your-prayers-are-not-changing-your-life',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Sermons', item: 'https://www.fountaingrace.org/sermons' },
      { '@type': 'ListItem', position: 3, name: 'Why Your Prayers Are Not Changing Your Life', item: 'https://www.fountaingrace.org/sermons/why-your-prayers-are-not-changing-your-life' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Does prayer alone produce results?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Prayer is essential - but a prophetic word or answered prayer only becomes real when faith is combined with a corresponding action step. James 2:17 says faith without works is dead. If you pray for a job and send no CVs, the prayer is faith without action. God designed prayer to be the starting point, not the complete circuit.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the most common regret people have at the end of life?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The most common regret is not actions taken but actions not taken. The idea not pursued. The step not made. The word from God not responded to. The foundation was laid, the materials were present, but no bricks were ever added. The building remained an idea because the action steps were delayed indefinitely.',
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
              Why Your Prayers Are Not Changing Your Life
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              We have been preaching. Nothing has changed. We have been prophesying. Nothing has changed. We have been praying over you. Nothing has changed. At some point, the honest question has to be asked: what is missing between the prayer and the result?
            </p>
            <p className="text-white/60 text-sm">
              Pastor Ricardo Zaal · Fountain of Grace International, Pretoria North · 4 January 2026
            </p>
          </div>
        </header>

        <section className="bg-white pt-10 pb-2 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/r9Cqow1ffcE"
                title="Why Your Prayers Are Not Changing Your Life | James 1:22"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-14 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">The Regret in the Grave</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              If you could ask someone who has died what they most regret, the answer almost never involves something they did wrong. It is almost always something they did not do. The idea they did not pursue. The step they did not take. The word they received but sat on while someone else moved on it.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              You had the idea. You had the prompting. Then you hesitated - and watched someone else step into what you knew was meant for you. Not because they were more talented. Not because God favoured them more. Because they acted when you delayed. The opportunity was not about who deserved it. It was about who moved.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">A Prophetic Word Only Activates With Action</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              A prophetic word only becomes real when two things are present: faith and a corresponding action step. The word alone is a seed in your hand. Faith alone, without movement, does not plant it. James 2:17 - &quot;Faith by itself, if it does not have works, is dead.&quot;
            </p>
            <p className="text-[#555] leading-relaxed mb-4">
              The image that makes this clear: you have the foundation. You have the bricks. You have the mortar. You even have the building plans. But if you never move a single brick to the mortar, the building remains an idea. Years pass. The foundation is still there. The vision is still there. But it is still just a foundation. The action is what builds.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              You can know F sharp, G, and A major. You can name every key on the keyboard. But if you have never sat down and played it consistently, the knowledge produces no music. The knowing is not the playing. The prayer is not the action.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">What Changes When You Add the Action Step</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              The moment you identify what God has been prompting you toward and attach a specific, immediate action step to it - the system changes. Not because you earned something. Because you aligned yourself with how God designed the system to work.
            </p>
            <p className="text-[#555] leading-relaxed mb-4">
              He said &quot;lower your net&quot; - and Simon did. Immediately. The catch broke the nets. The action did not create the fish. The fish were already there. The action created the context for what was already provided to be received.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              God told you to do something. Not five things. One thing. You know what it is. It keeps coming up - in prayer, in sermons, in quiet moments. Write it down. Take one specific step toward it this week. That is what changes the circuit from prayer to result.
            </p>

            <blockquote className="border-l-4 border-[#FFD600] pl-5 py-2 my-10 bg-[#f0fafa] rounded-r-xl">
              <p className="text-[#2a9df4] font-semibold text-lg italic">
                &quot;Most regrets are not about what you did. They are about what you did not do. The moment has passed - but you are still standing at the building site with unbaked bricks and unused mortar.&quot;
              </p>
              <cite className="text-[#555] text-sm not-italic mt-2 block">- Pastor Ricardo Zaal</cite>
            </blockquote>

            <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">One Question to Answer Before This Week Ends</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              What is the one thing God has told you to do that you have not done? Write it down. Then write down the smallest first step. Not the full plan. Not the completed vision. The first action. And do it before Sunday.
            </p>

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
                <h3 className="font-semibold text-[#1a1a1a] mb-2">Does prayer alone produce results?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Prayer is essential - but a prophetic word only becomes real when faith is combined with a corresponding action step. James 2:17 says faith without works is dead. If you pray for a job and send no CVs, the prayer is incomplete. God designed prayer as the starting point, not the complete circuit.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">What is the first step when God gives you a direction?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Identify the smallest concrete action that aligns with the direction and do it immediately. Not the full plan - the first step. Abraham did not negotiate with God about the details before moving (Genesis 12:4). He departed as the Lord had spoken. Immediate obedience creates the context for the full provision to follow.</p>
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
