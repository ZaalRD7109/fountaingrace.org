import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Why You're Not Moving Forward - And How to Break It | Fountain of Grace International Pretoria North",
  description:
    "You know exactly what to do - but you're not doing it. Pastor Ricardo Zaal unpacks 4 root causes of being stuck and the biblical framework for finally moving. Fountain of Grace International, Pretoria North.",
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/sermons/why-youre-not-moving-forward-and-how-to-break-it',
  },
  openGraph: {
    title: "Why You're Not Moving Forward - And How to Break It",
    description:
      "You know exactly what to do - but you're not doing it. Pastor Ricardo unpacks the real reasons and how to break through. Fountain of Grace International, Pretoria North.",
    type: 'article',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International - Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/sermons/why-youre-not-moving-forward-and-how-to-break-it',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Why You\'re Not Moving Forward - And How to Break It',
    description: 'Pastor Ricardo Zaal unpacks the 4 root causes of being stuck and the biblical framework for finally moving forward. Matthew 14:28, James 1:6-8, Proverbs 3:5-6.',
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
    datePublished: '2026-03-01',
    url: 'https://www.fountaingrace.org/sermons/why-youre-not-moving-forward-and-how-to-break-it',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Sermons', item: 'https://www.fountaingrace.org/sermons' },
      { '@type': 'ListItem', position: 3, name: "Why You're Not Moving Forward - And How to Break It", item: 'https://www.fountaingrace.org/sermons/why-youre-not-moving-forward-and-how-to-break-it' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why do I keep procrastinating even when I know what I need to do?',
        acceptedAnswer: { '@type': 'Answer', text: "According to Pastor Ricardo Zaal at Fountain of Grace International in Pretoria North, procrastination is usually not laziness - it is unclear tasks, double-minded thinking, or fear disguised as wisdom. The solution is getting specific clarity on what the next one action actually is." },
      },
      {
        '@type': 'Question',
        name: 'What does the Bible say about being stuck and not moving forward?',
        acceptedAnswer: { '@type': 'Answer', text: "Matthew 14:28 (Peter walking on water), James 1:6-8 (the double-minded man), Proverbs 3:5-6 (trusting God rather than your own logic), and Ecclesiastes 11:4 (not waiting for perfect conditions) are the key scriptures Pastor Ricardo used in this message at Fountain of Grace International, Pretoria North." },
      },
      {
        '@type': 'Question',
        name: 'How do I break the pattern of planning without executing?',
        acceptedAnswer: { '@type': 'Answer', text: "Pastor Ricardo's framework: capture your ideas, define only the next action (not the final outcome), separate projects from tasks, review weekly, and apply the two-minute rule - if it takes less than two minutes, do it immediately." },
      },
      {
        '@type': 'Question',
        name: 'What does 2 Timothy 1:7 say about fear and why we stay stuck?',
        acceptedAnswer: { '@type': 'Answer', text: "2 Timothy 1:7 says God hath not given us the spirit of fear; but of power, and of love, and of a sound mind. The Greek word for fear used here is delia - cowardice, the spirit of shrinking back. Pastor Ricardo Zaal at Fountain of Grace International teaches that what many people call wisdom or caution is often this spirit of shrinking operating beneath the surface. The antidote is movement - dynamis, the spirit of power in action." },
      },
    ],
  },
]

export default function SermonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article>
        {/* HEADER */}
        <header
          className="pt-16 pb-14 px-4 sm:px-6 text-white"
          style={{ background: 'linear-gradient(145deg, #2a9df4 0%, #008080 100%)' }}
        >
          <div className="max-w-3xl mx-auto">
            <p className="text-[#FFD600] text-sm font-semibold uppercase tracking-wider mb-4">
              Sunday Message · Fountain of Grace International · Pretoria North
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-5">
              Why You&apos;re Not Moving Forward - And How to Break It
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              You know exactly what to do. But you are not doing it. The problem is not a lack of knowledge - it is something deeper.
            </p>
            <p className="text-white/60 text-sm">
              Pastor Ricardo Zaal · Fountain of Grace International, Pretoria North · 1 March 2026
            </p>
          </div>
        </header>

        <section className="bg-white pt-10 pb-2 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/fI9G4-OvxnA"
                title="Why You're Not Moving Forward - And How to Break It"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* BODY */}
        <section className="bg-white py-14 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto prose prose-lg prose-gray max-w-none">

            <p className="text-[#555] leading-relaxed text-lg">
              This message is for the person who has big ideas but has not executed them. For the person who has been planning - but has not yet acted on that plan. For the person who knows God has called them, but keeps staying stuck.
            </p>

            <p className="text-[#555] leading-relaxed">
              The root issue is not that you don&apos;t know what to do. You know exactly what to do. But you&apos;re not doing it. Peter walking on water - in Matthew 14:28 - is the biblical model Pastor Ricardo returned to throughout this message. When Jesus said &quot;Come,&quot; Peter did not wait until the waves calmed. He moved.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mt-10 mb-4">1. Fear disguised as wisdom</h2>
            <p className="text-[#555] leading-relaxed">
              You tell yourself you are being careful. But when you examine it through scripture, 2 Timothy 1:7 is direct: <em>&quot;God has not given us a spirit of fear, but of power and of love and of a sound mind.&quot;</em> The Greek word for fear here is <em>delia</em> - cowardice, shrinking back. The word for power is <em>dynamis</em> - like dynamite, a force in action. You have not been given the spirit of shrinking. You have been given the spirit of movement.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mt-10 mb-4">2. Double-minded thinking</h2>
            <p className="text-[#555] leading-relaxed">
              James 1:6-8 says a double-minded man is unstable in all his ways - and should not expect to receive anything from God. You keep your options open. You say &quot;maybe this, maybe that.&quot; Be specific. If you want a specific outcome, tell God specifically. The brain follows what you give it focus. A vague ask produces a vague result.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mt-10 mb-4">3. Waiting for perfect conditions</h2>
            <p className="text-[#555] leading-relaxed">
              Ecclesiastes 11:4 says: <em>&quot;He who observes the wind will not sow, and he who regards the clouds will not reap.&quot;</em> The Hebrew word for &quot;observe&quot; here means to watch carefully and wait for ideal conditions. If you wait for perfect conditions, you will never plant. The perfect time was yesterday. The next best time is now.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mt-10 mb-4">4. Leaning on your own logic</h2>
            <p className="text-[#555] leading-relaxed">
              Proverbs 3:5-6: <em>&quot;Trust in the Lord with all your heart, and lean not on your own understanding. In all your ways acknowledge him, and he shall direct your paths.&quot;</em> God directs moving people - not people who are standing still. If you are not moving, there is no direction needed. God gives direction to the mover.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mt-10 mb-4">A practical framework for moving</h2>
            <p className="text-[#555] leading-relaxed">
              Pastor Ricardo also shared five principles from David Allen&apos;s <em>Getting Things Done</em> that align directly with this message:
            </p>
            <ol className="space-y-3 text-[#555] mt-4">
              {[
                'Capture everything out of your head. Your mind is for having ideas, not for holding them. Write things down.',
                'Define the next action - not the final outcome. What is the first step toward the result? That is all you need.',
                'Separate projects from actions. A project is anything that needs more than one step. Know the difference.',
                'Do a weekly review. You have captured ideas and defined actions - but do you go back and look at them?',
                'The two-minute rule: if it takes less than two minutes, do it immediately. Do not schedule it, optimize it, or overthink it.',
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-[#FFD600] font-bold flex-shrink-0">{i + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>

            <blockquote className="border-l-4 border-[#FFD600] pl-5 py-2 my-8 bg-[#f0fafa] rounded-r-xl">
              <p className="text-[#2a9df4] font-semibold text-lg italic">
                &quot;You don&apos;t procrastinate because you are lazy. You procrastinate because your tasks are unclear. Get clarity.&quot;
              </p>
              <cite className="text-[#555] text-sm not-italic mt-2 block">- Pastor Ricardo Zaal, Fountain of Grace International</cite>
            </blockquote>

            <p className="text-[#555] leading-relaxed">
              If you are reading this in Pretoria North and something in this message connected with where you are, <Link href="/plan-your-visit" className="fgi-link">come and hear it in person</Link>. Services are every Sunday at 09:00 at 323 B Danie Theron Street, Pretoria North.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#f0fafa] py-14 px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-[#2a9df4] mb-8">Questions this message answers</h2>
            <dl className="space-y-0">
              {[
                {
                  q: 'Why do I keep procrastinating even when I know what I need to do?',
                  a: 'According to Pastor Ricardo Zaal at Fountain of Grace International in Pretoria North, procrastination is usually not laziness - it is unclear tasks, double-minded thinking, or fear disguised as wisdom. The solution is getting specific clarity on what the next one action actually is.',
                },
                {
                  q: 'What does the Bible say about being stuck and not moving forward?',
                  a: 'Matthew 14:28 (Peter walking on water), James 1:6-8 (the double-minded man), Proverbs 3:5-6 (trusting God rather than your own logic), and Ecclesiastes 11:4 (not waiting for perfect conditions) are the key scriptures Pastor Ricardo used in this message at Fountain of Grace International, Pretoria North.',
                },
                {
                  q: 'How do I break the pattern of planning without executing?',
                  a: "Pastor Ricardo's framework: capture your ideas, define only the next action (not the final outcome), separate projects from tasks, review weekly, and apply the two-minute rule - if it takes less than two minutes, do it immediately.",
                },
                {
                  q: 'What does 2 Timothy 1:7 say about fear and why we stay stuck?',
                  a: "2 Timothy 1:7 says God hath not given us the spirit of fear; but of power, and of love, and of a sound mind. The Greek word for fear used here is delia - cowardice, the spirit of shrinking back. Pastor Ricardo Zaal at Fountain of Grace International teaches that what many people call wisdom or caution is often this spirit of shrinking operating beneath the surface. The antidote is movement - dynamis, the spirit of power in action.",
                },
              ].map((item) => (
                <div key={item.q} className="faq-block">
                  <dt className="font-semibold text-[#2a9df4] mb-2">{item.q}</dt>
                  <dd className="text-[#555] leading-relaxed">{item.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* GEO */}
        <section className="bg-white py-10 px-4 sm:px-6">
          <div className="section-container">
            <div className="geo-block">
              <p>
                This message was preached by Pastor Ricardo Zaal at Fountain of Grace International,
                located at 323 B Danie Theron Street, Pretoria North, Gauteng, South Africa. Fountain
                of Grace International is a registered NPO (No: 316-193) that holds Sunday services
                at 09:00 weekly. This teaching is part of a series on action, movement, and breaking
                patterns of stagnation - grounded in scripture and connected to practical everyday life
                in Pretoria North.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#008080] py-14 px-4 sm:px-6">
          <div className="section-container text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              If this connected with where you are - come on Sunday.
            </h2>
            <p className="text-white/70 mb-8 max-w-lg mx-auto">
              Fountain of Grace International in Pretoria North. Every Sunday at 09:00. Someone will meet you at the door.
            </p>
            <Link href="/plan-your-visit" className="btn-primary">
              Plan Your Visit
            </Link>
          </div>
        </section>
      </article>
    </>
  )
}
