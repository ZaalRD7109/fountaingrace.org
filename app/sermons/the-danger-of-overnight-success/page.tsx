import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Danger of Overnight Success and the Power of Long Obedience | Fountain of Grace International',
  description:
    'You can\'t cheat growth — you can only delay maturity. This message shows why heaven builds in seasons, not speed, and why the unseen roots determine everything visible above ground. Pretoria North.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/sermons/the-danger-of-overnight-success',
  },
  openGraph: {
    title: 'The Danger of Overnight Success and the Power of Long Obedience',
    description:
      'Nobody becomes an overnight success overnight. Judas didn\'t betray Jesus in a moment. Samson didn\'t fall in a day. Little compromises are seeds of great falls. Pretoria North.',
    type: 'article',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International — Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/sermons/the-danger-of-overnight-success',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Danger of Overnight Success and the Power of Long Obedience',
    description: 'Based on Ecclesiastes 3:1, Song of Solomon 2:15, and Luke 2:46, this message addresses the generation looking for instant results — showing that God builds in appointed seasons, little compromises become great falls, and preparation is heaven\'s proof of trust.',
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
    datePublished: '2025-05-18',
    url: 'https://www.fountaingrace.org/sermons/the-danger-of-overnight-success',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Sermons', item: 'https://www.fountaingrace.org/sermons' },
      { '@type': 'ListItem', position: 3, name: 'The Danger of Overnight Success', item: 'https://www.fountaingrace.org/sermons/the-danger-of-overnight-success' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What does Ecclesiastes 3:1 say about God\'s timing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ecclesiastes 3:1 — "To every thing there is a season, and a time to every purpose under the heaven." The Hebrew word for season is "zeman" — an appointed time that requires preparation. Growth is not proof of God\'s blessing. Rooting is. What God is building beneath the surface — in the hidden places of your character, your obedience, and your faith — is the foundation that determines whether what appears above ground will stand or fall when pressure comes.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why do little compromises lead to great failures?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Song of Solomon 2:15 — "catch us the foxes, the little foxes, that spoil the vines." The Greek word translated "spoil" means to loosen or make slack. Sin does not begin by breaking conviction — it begins by loosening it. Judas did not betray Jesus in a single impulsive moment. His betrayal was built through nursed disappointments, small thefts, quiet compromises, until one day opportunity met his weakness and walked in. You can\'t cheat growth. You can only delay maturity.',
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
              The Danger of Overnight Success and the Power of Long Obedience
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              Nobody becomes an overnight success overnight. It just looks that way from the outside. The visible result came from years of unseen roots going deeper. This message is not against success — it is about the danger of pursuing the result while skipping the process that makes it possible to hold what God gives you.
            </p>
            <p className="text-white/60 text-sm">
              Pastor Ricardo Zaal · Fountain of Grace International, Pretoria North · 18 May 2025
            </p>
          </div>
        </header>

        <section className="bg-white py-14 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">You Don&apos;t Get Dirty Overnight</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              You don&apos;t get dirty overnight and you don&apos;t get clean overnight. Nobody wakes up with Rastafarian hair the morning after they decide they want it. The hair had to grow, had to be tended through every stage, had to avoid the scissors through every temptation to just cut and start again. The visible thing is the result of a long, mostly invisible process.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              The same is true in reverse. Judas did not betray Jesus in one impulsive moment. He had been building toward it — through small offences nursed privately, through quiet greed, through gradual disappointment that was never resolved. By the time the opportunity appeared, his weakness was already waiting to receive it. You can&apos;t cheat growth. You can only delay maturity.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">Ecclesiastes 3:1 — God Builds in Seasons, Not Speed</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              Ecclesiastes 3:1 — &quot;To every thing there is a season, and a time to every purpose under the heaven.&quot;
            </p>
            <p className="text-[#555] leading-relaxed mb-4">
              The Hebrew word for season here is <em>zeman</em> — an appointed time that requires preparation. Not a time that simply arrives. A time you must be prepared to enter. You cannot have a harvest season if you have not prepared the ground in the planting season. The blessing is already appointed. The question is whether you will be ready when the season comes.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              Growth is not the proof of God&apos;s blessing. Rooting is. A tree can have green leaves in unfertile soil — the leaves show. But fruit is different. Fruit only appears when the root system is deep enough, stable enough, nourished enough to produce something beyond appearance. People see branches. God is watching roots.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">Song of Solomon 2:15 — The Little Foxes</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              Song of Solomon 2:15 — &quot;Take us the foxes, the little foxes, that spoil the vines: for our vines have tender grapes.&quot;
            </p>
            <p className="text-[#555] leading-relaxed mb-4">
              The word <em>spoil</em> in the original language means to loosen, to make slack. Sin does not start by breaking conviction. It starts by loosening it. Taking one pen from work because the kids need it at home. Telling one small lie because the full truth is inconvenient right now. Skipping the decision you know you should make because today is not the day for that confrontation.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              Over time the loosening becomes a crack, and the crack becomes a collapse — and on the day it collapses, the person watching from the outside will say it happened overnight. It did not. The enemy does not huff and puff and blow your house down. He sends termites. Gradual, invisible, until the ceiling starts getting closer and you think you are growing taller.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">Luke 2:46 — Even Jesus Prepared</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              Luke 2:46 — &quot;And it came to pass, that after three days they found him in the temple, sitting in the midst of the doctors, both hearing them, and asking them questions.&quot;
            </p>
            <p className="text-[#555] leading-relaxed mb-4">
              Jesus at twelve years old was not yet preaching to thousands. He was sitting. Listening. Asking questions. Putting the foundation in correctly. Those who heard Him were amazed — but the amazement was not the product of overnight inspiration. It was the product of deep, deliberate roots laid in the years before anyone was watching.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              Preparation is heaven&apos;s proof of trust. When you prepare well in the hidden season, you are telling God you believe the harvest is coming. You are making yourself ready for the weight of what He intends to place on your life. The person who skips the preparation is not ready when the door opens — and opportunity does not typically wait.
            </p>

            <blockquote className="border-l-4 border-[#FFD600] pl-5 py-2 my-10 bg-[#f0fafa] rounded-r-xl">
              <p className="text-[#2a9df4] font-semibold text-lg italic">
                &quot;You can uproot yourself looking for faster soil. You&apos;ll get green leaves — but no fruit. Green leaves come from soil. Fruit comes from roots. And roots take time that shortcuts cannot replace.&quot;
              </p>
              <cite className="text-[#555] text-sm not-italic mt-2 block">— Pastor Ricardo Zaal</cite>
            </blockquote>

            <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Three Things This Message Asks of You</h2>
            <ol className="list-decimal list-inside space-y-3 text-[#555] leading-relaxed mb-6">
              <li><strong>Stop uprooting yourself for faster soil.</strong> God planted you where you are for a season. Moving before the season is complete means you leave the harvest to someone who stayed. The fertility of the new place is irrelevant if you left your roots behind.</li>
              <li><strong>Catch the little foxes before they loosen the foundation.</strong> The compromise you are tolerating today is not small. It is loosening something. Song of Solomon 2:15 — it is the little foxes that spoil the tender grapes. Deal with what feels minor before it becomes structural.</li>
              <li><strong>Prepare as if the season is coming, because it is.</strong> Do not wait to feel ready. The appointed time requires preparation before it arrives. Preparation in the hidden season is the thing that makes the visible season fruitful when God opens it.</li>
            </ol>

            <p className="text-[#555] leading-relaxed">
              If you are in Pretoria North,{' '}
              <Link href="/plan-your-visit" className="text-[#008080] font-semibold hover:underline">
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
                <h3 className="font-semibold text-[#1a1a1a] mb-2">What does Ecclesiastes 3:1 say about God&apos;s timing?</h3>
                <p className="text-[#555] leading-relaxed text-sm">The Hebrew word for season is zeman — an appointed time requiring preparation. You cannot enter a harvest season if you skipped the planting. Growth is not proof of God&apos;s blessing. Rooting is. What God builds beneath the surface — in hidden obedience and unseen faithfulness — determines whether what appears above ground will stand or fall.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">Why do little compromises lead to great failures?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Song of Solomon 2:15 — the little foxes spoil the tender grapes. The word spoil means to loosen, make slack. Sin begins not by breaking conviction but by loosening it, small compromise by small compromise. Judas&apos; betrayal was built through nursed disappointment and quiet greed until one day opportunity met his weakness. Guarding the small things is how you protect the large ones.</p>
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
