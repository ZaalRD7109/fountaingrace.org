import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "The Principles That Move People Forward Faster | Fountain of Grace International Pretoria North",
  description:
    "You have been praying. Nothing has changed. This message gives 10 biblical principles - obedience, positioning, wisdom, strategy, stewardship, relationships, and more. Pretoria North.",
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/sermons/the-principles-that-move-people-forward-faster',
  },
  openGraph: {
    title: "The Principles That Move People Forward Faster",
    description:
      "10 biblical principles that accelerate progress - for the person who feels stuck, financially trapped, or moving in circles. Fountain of Grace International, Pretoria North.",
    type: 'article',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International - Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/sermons/the-principles-that-move-people-forward-faster',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Principles That Move People Forward Faster',
    description: '10 principles for breaking stagnation: obedience, positioning, wisdom, strategy, stewardship, relationships, preparation, faith with action, sowing seed, and focused attention.',
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
    datePublished: '2026-03-08',
    url: 'https://www.fountaingrace.org/sermons/the-principles-that-move-people-forward-faster',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Sermons', item: 'https://www.fountaingrace.org/sermons' },
      { '@type': 'ListItem', position: 3, name: "The Principles That Move People Forward Faster", item: 'https://www.fountaingrace.org/sermons/the-principles-that-move-people-forward-faster' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What does Ecclesiastes 10:10 mean by sharpening the axe?',
        acceptedAnswer: { '@type': 'Answer', text: "Ecclesiastes 10:10 says if the iron is blunt and you do not sharpen the edge, then you must use more strength. Wisdom sharpens the blade. Working harder in the wrong direction produces less result. Pastor Ricardo Zaal at Fountain of Grace International teaches this as the principle of wisdom - getting the right method multiplies your output without multiplying your effort." },
      },
      {
        '@type': 'Question',
        name: 'Why do I feel stuck even though I am praying and trying hard?',
        acceptedAnswer: { '@type': 'Answer', text: "Feeling stuck despite effort often means one or more of these 10 principles is missing: you may be in the wrong position (Principle 2 - Positioning), or managing current resources poorly (Principle 5 - Stewardship), or working without a clear strategy (Principle 4 - Proverbs 20:18). Pastor Ricardo Zaal at Fountain of Grace International, Pretoria North, teaches that God often changes results through principles - not just through waiting." },
      },
      {
        '@type': 'Question',
        name: 'What does Matthew 25:21 say about stewardship and being given more?',
        acceptedAnswer: { '@type': 'Answer', text: "Matthew 25:21 says 'thou hast been faithful over a few things, I will make thee ruler over many things.' God does not increase what you are not managing well. Stewardship of your current resources - time, money, relationships, skills - is the qualification for greater. This is Principle 5 in this message from Fountain of Grace International, Pretoria North." },
      },
      {
        '@type': 'Question',
        name: 'How does Proverbs 13:20 connect to getting ahead in life?',
        acceptedAnswer: { '@type': 'Answer', text: "Proverbs 13:20 says he that walketh with wise men shall be wise. The people around you shape your direction. One relationship with the right person can advance you further than years of solo effort. Pastor Ricardo Zaal teaches at Fountain of Grace International that positioning yourself near wise and moving people is itself a spiritual and practical principle for progress." },
      },
    ],
  },
]

const principles = [
  {
    n: 1,
    title: 'Obedience',
    scripture: 'Luke 5:4-6',
    body: 'Simon fished all night and caught nothing. One act of obedience - casting the net on the other side - produced a net-breaking result. Obedience to a specific instruction unlocks what effort alone cannot.',
  },
  {
    n: 2,
    title: 'Positioning',
    scripture: 'Ruth 2:2-3',
    body: 'Ruth placed herself in the right field. Position determines what you are exposed to. Being in the wrong environment - even with the right effort - limits what God can connect you to.',
  },
  {
    n: 3,
    title: 'Wisdom',
    scripture: 'Ecclesiastes 10:10',
    body: 'A blunt axe requires more strength. Wisdom sharpens the blade. Working harder in the wrong direction produces less. The right method multiplies output without multiplying effort.',
  },
  {
    n: 4,
    title: 'Strategy',
    scripture: 'Proverbs 20:18',
    body: 'Plans are established by counsel. A goal without a plan is just a wish. God gave Nehemiah a vision and a strategy. Strategy converts faith into action with direction.',
  },
  {
    n: 5,
    title: 'Stewardship',
    scripture: 'Matthew 25:21',
    body: 'You were faithful with little - I will give you more. God does not increase what we are not managing well. Stewardship of current resources is the condition for greater ones.',
  },
  {
    n: 6,
    title: 'Relationships',
    scripture: 'Proverbs 13:20',
    body: 'Walk with the wise and become wise. The people around you shape your direction. One relationship with the right person can advance you further than years of solo effort.',
  },
  {
    n: 7,
    title: 'Preparation',
    scripture: 'Proverbs 24:27',
    body: 'Prepare your work outside - then build your house. Opportunity rarely announces itself. Preparation is what separates those who capitalise on a moment from those who watch it pass.',
  },
  {
    n: 8,
    title: 'Faith with Action',
    scripture: 'James 2:17',
    body: 'Faith without works is dead. Believing God is not passive. Action is the proof of faith. Waiting without movement is not faith - it is avoidance dressed in spiritual language.',
  },
  {
    n: 9,
    title: 'Sowing Seed',
    scripture: 'Galatians 6:7',
    body: 'You reap what you sow. The harvest you want is determined by the seed you plant. Generosity, time, skill, and service are all seeds. Nothing comes from nothing.',
  },
  {
    n: 10,
    title: 'Focused Attention',
    scripture: 'Luke 10:41-42',
    body: 'Martha was distracted by many things - Mary chose the one thing that mattered. Scattered attention produces scattered results. The highest achievers do fewer things with greater focus.',
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
              The Principles That Move People Forward Faster
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              You have been praying. You have been trying. Nothing has changed. This message is for the person who feels stuck, financially trapped, or circling the same spot. God often changes results through principles - not only through waiting.
            </p>
            <p className="text-white/60 text-sm">
              Pastor Ricardo Zaal · Fountain of Grace International, Pretoria North · 8 March 2026
            </p>
          </div>
        </header>

        <section className="bg-white pt-10 pb-2 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/hmBthWSxN6g"
                title="The Principles That Move People Forward Faster"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-14 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#555] leading-relaxed text-lg mb-10">
              God moves through principles. Awaiting is necessary - but if you have been resting for too long, you are over-rested. It is time to put these principles in place.
            </p>

            <div className="space-y-10">
              {principles.map((p) => (
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
                &quot;God often changes lives through one moment of alignment. Years can go slowly - but that one moment changes everything. The key is to live in a way that is ready for that moment.&quot;
              </p>
              <cite className="text-[#555] text-sm not-italic mt-2 block">- Pastor Ricardo Zaal</cite>
            </blockquote>

            <p className="text-[#555] leading-relaxed">
              There is a Part 2 to this message that goes deeper on the action side. If you are in Pretoria North,{' '}
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
                <h3 className="font-semibold text-[#1a1a1a] mb-2">What does Ecclesiastes 10:10 mean by sharpening the axe?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Ecclesiastes 10:10 says if the iron is blunt and you do not sharpen the edge, then you must use more strength. Wisdom sharpens the blade. Working harder in the wrong direction produces less result. Pastor Ricardo Zaal at Fountain of Grace International teaches this as the principle of wisdom - getting the right method multiplies your output without multiplying your effort.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">Why do I feel stuck even though I am praying and trying hard?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Feeling stuck despite effort often means one or more of these 10 principles is missing: you may be in the wrong position (Principle 2 - Positioning), or managing current resources poorly (Principle 5 - Stewardship), or working without a clear strategy (Principle 4 - Proverbs 20:18). God often changes results through principles - not just through waiting.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">What does Matthew 25:21 say about stewardship and being given more?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Matthew 25:21 says thou hast been faithful over a few things, I will make thee ruler over many things. God does not increase what you are not managing well. Stewardship of your current resources - time, money, relationships, skills - is the qualification for greater. This is Principle 5 in this message from Fountain of Grace International, Pretoria North.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">How does Proverbs 13:20 connect to getting ahead in life?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Proverbs 13:20 says he that walketh with wise men shall be wise. The people around you shape your direction. One relationship with the right person can advance you further than years of solo effort. Positioning yourself near wise and moving people is itself a spiritual and practical principle for progress - taught at Fountain of Grace International in Pretoria North.</p>
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
