import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pruning for Progress: From Bare Branch to Bountiful Blessing | Fountain of Grace International',
  description:
    'John 15:1-8 - God prunes every branch that bears fruit so it bears more. The cutting is not punishment. It is preparation. This message explains why the season of pruning is the season closest to breakthrough. Pretoria North.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/sermons/pruning-for-progress',
  },
  openGraph: {
    title: 'Pruning for Progress: From Bare Branch to Bountiful Blessing',
    description:
      'The branch that gets cut is the one God is preparing for more fruit. If you are in a season of cutting, this message is for you. John 15:1-8. Pretoria North.',
    type: 'article',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International - Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/sermons/pruning-for-progress',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pruning for Progress: From Bare Branch to Bountiful Blessing',
    description: 'Based on John 15:1-8, this message addresses believers in a season of difficulty, loss, or cutting - showing that God\'s pruning is not punishment but intentional preparation for greater fruitfulness.',
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
    datePublished: '2025-11-02',
    url: 'https://www.fountaingrace.org/sermons/pruning-for-progress',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Sermons', item: 'https://www.fountaingrace.org/sermons' },
      { '@type': 'ListItem', position: 3, name: 'Pruning for Progress', item: 'https://www.fountaingrace.org/sermons/pruning-for-progress' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What does John 15 say about pruning?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'John 15:2 - "Every branch in me that beareth not fruit he taketh away: and every branch that beareth fruit, he purgeth it, that it may bring forth more fruit." The branch that gets pruned is not the dead one - it is the one that is already bearing fruit. God prunes what is productive to make it more productive. Pruning is not punishment. It is the Father\'s intentional act of preparation on a branch He intends to use for greater fruitfulness.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why does God allow difficult seasons in the life of a Christian?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'John 15:2 shows that difficult seasons - the cutting, the loss, the stripping away - are often the Father\'s pruning process on a branch He values. It is rarely that God is absent in hard seasons. It is more often that He is working at the root level. A tree with deep roots survives wind that topples shallow-rooted trees. The difficult season is often the formation of roots deep enough to hold what God is about to place on the branch.',
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
              Pruning for Progress: From Bare Branch to Bountiful Blessing
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              The branch that gets cut is not always the dead one. Sometimes God prunes what is already bearing fruit - because He intends it to bear more. If you are in a season that feels like cutting, this message is for you.
            </p>
            <p className="text-white/60 text-sm">
              Pastor Ricardo Zaal · Fountain of Grace International, Pretoria North · 2 November 2025
            </p>
          </div>
        </header>

        <section className="bg-white pt-10 pb-2 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/o8eS8xBJlLs"
                title="Pruning for Progress: From Bare Branch to Bountiful Blessing"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-14 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">The Tree You Did Not Ask For</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              Some trees in your yard were not planted intentionally. You found them there. And over time, they grew - close to the house, roots lifting the foundation, branches threatening the roof. You prune them not because they are worthless but because of what they could become if left unchecked.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              That is the picture behind John 15. God does not prune what He does not care about. He prunes what He is invested in. The cutting is never random - it is always purposeful. And the purpose is always more fruit.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">John 15:1-2 - The Branch That Gets Cut Is Bearing Fruit</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              John 15:1-2 - &quot;I am the true vine, and my Father is the husbandman. Every branch in me that beareth not fruit he taketh away: and every branch that beareth fruit, he purgeth it, that it may bring forth more fruit.&quot;
            </p>
            <p className="text-[#555] leading-relaxed mb-4">
              Read that carefully. The branch that gets pruned is not the dead one - that one is taken away. The branch that gets pruned is the one already bearing fruit. The pruning is God&apos;s response to fruitfulness - not to failure. If your life is being cut in a season, it is worth asking: could this be the Father pruning what He intends to use more?
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              Pruning is never comfortable. The branch does not understand what the gardener sees. The branch feels the cut without seeing the outcome. But the gardener prunes with the harvest in mind - and He knows exactly how much to cut and where.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">The Root Determines What Wind Can Do to You</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              A tree with a deep taproot can stand in winds that topple trees rooted near the surface. The taproot goes down in search of water and nutrients - not outward. It is less visible than surface roots, but it is the reason the tree stands when everything else falls.
            </p>
            <p className="text-[#555] leading-relaxed mb-4">
              Difficult seasons are often the formation of a taproot. God is not removing your strength - He is taking you deeper. What feels like a season of being cut back is often the season where the roots are being established that will hold everything He is about to place on your life.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              The believer who is rooted in the Word, in relationship with God, and in obedience - that believer can stand in the same storm that dismantles someone whose roots were shallow. Not because of their own strength. Because of how deep they are connected to the vine.
            </p>

            <blockquote className="border-l-4 border-[#FFD600] pl-5 py-2 my-10 bg-[#f0fafa] rounded-r-xl">
              <p className="text-[#2a9df4] font-semibold text-lg italic">
                &quot;A dry branch has two uses: decoration or fire. Stay connected to the vine. The branch that stays connected is the one that bears fruit - and the branch that bears fruit is the one the Father prunes for more.&quot;
              </p>
              <cite className="text-[#555] text-sm not-italic mt-2 block">- Pastor Ricardo Zaal</cite>
            </blockquote>

            <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">What to Do in a Pruning Season</h2>
            <ol className="list-decimal list-inside space-y-3 text-[#555] leading-relaxed mb-6">
              <li><strong>Stay connected to the vine.</strong> John 15:4 - &quot;Abide in me, and I in you.&quot; A branch cut from the vine cannot bear fruit regardless of how much effort it applies. The source of fruitfulness is the connection, not the branch&apos;s activity. In a pruning season, the most important thing is not to disconnect.</li>
              <li><strong>Do not mistake the cutting for abandonment.</strong> The husbandman prunes the branch he values. God&apos;s pruning is not rejection. It is investment. A gardener does not spend time on what he does not care about.</li>
              <li><strong>Let the roots go deeper.</strong> Use the season of cutting to go further into the Word, into prayer, into obedience. What God is building underground will hold what He places above ground.</li>
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
                <h3 className="font-semibold text-[#1a1a1a] mb-2">What does John 15 say about pruning?</h3>
                <p className="text-[#555] leading-relaxed text-sm">John 15:2 - the branch that bears fruit is pruned so it bears more fruit. The pruning is not punishment - it is the Father&apos;s intentional act on a branch He values and intends to use for greater fruitfulness. The branch that gets cut is not the dead one. It is the productive one.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">Why does God allow difficult seasons in a Christian&apos;s life?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Difficult seasons are often the Father&apos;s pruning process. A tree with deep roots stands in wind that topples shallow-rooted trees. Hard seasons often form the roots - the depth in God - that will hold everything He is about to place on your life. It is rarely God&apos;s absence. It is more often God working at the root level.</p>
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
