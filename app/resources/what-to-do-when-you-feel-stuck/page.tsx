import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'What to Do When You Feel Stuck and Cannot Move Forward | Fountain of Grace International',
  description: 'Feeling stuck is not a sign that something is wrong with you. It is a signal that something specific needs to change. Here is how to identify what it is and start moving again.',
  robots: 'index, follow',
  alternates: { canonical: 'https://www.fountaingrace.org/resources/what-to-do-when-you-feel-stuck' },
  openGraph: {
    title: 'What to Do When You Feel Stuck and Cannot Move Forward',
    description: 'Feeling stuck is not a sign that something is wrong with you. It is a signal that something specific needs to change.',
    type: 'article',
    url: 'https://www.fountaingrace.org/resources/what-to-do-when-you-feel-stuck',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International' }],
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'What to Do When You Feel Stuck and Cannot Move Forward',
    author: { '@type': 'Person', name: 'Pastor Ricardo Zaal' },
    publisher: { '@type': 'Organization', name: 'Fountain of Grace International', url: 'https://www.fountaingrace.org' },
    url: 'https://www.fountaingrace.org/resources/what-to-do-when-you-feel-stuck',
    inLanguage: 'en',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.fountaingrace.org/resources' },
      { '@type': 'ListItem', position: 3, name: 'What to Do When You Feel Stuck', item: 'https://www.fountaingrace.org/resources/what-to-do-when-you-feel-stuck' },
    ],
  },
]

export default function WhatToDoWhenStuckPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="bg-[#008080] text-white pt-10 pb-10 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-white font-semibold text-xs uppercase tracking-wider mb-3">Resources - Growth</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
            What to Do When You Feel Stuck and Cannot Move Forward
          </h1>
          <p className="text-white text-base leading-relaxed">By Pastor Ricardo Zaal - Fountain of Grace International, Pretoria North</p>
        </div>
      </section>

      <section className="bg-white py-14 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-[#595959] text-base leading-relaxed mb-6">
            There is a particular frustration that comes with being stuck. It is not just the absence
            of progress - it is the feeling that you should be moving, that others are moving,
            that something about your situation is your fault even though you cannot identify what.
            You push. Nothing shifts. You push harder. Still nothing.
          </p>
          <p className="text-[#595959] text-base leading-relaxed mb-8">
            Before you conclude that you are the problem, consider that being stuck is almost always
            a symptom - not the diagnosis. Something underneath is causing it. And until you find
            what that is, pushing harder only exhausts you.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Three things that cause stuckness</h2>
          <p className="text-[#595959] text-base leading-relaxed mb-4">
            <strong className="text-gray-900">Wrong direction, maximum effort.</strong> You can work
            extremely hard and go nowhere if the direction is wrong. A car stuck in sand spins its
            wheels harder the more you accelerate. Sometimes the most useful thing you can do is stop,
            get out of the car, and look at where you are actually pointing.
          </p>
          <p className="text-[#595959] text-base leading-relaxed mb-4">
            <strong className="text-gray-900">An unresolved decision you are avoiding.</strong> Most
            stuckness has a specific decision at its root. Something you know you need to do or stop
            doing, but have not committed to yet. The avoidance of that decision creates a gridlock
            that blocks everything connected to it.
          </p>
          <p className="text-[#595959] text-base leading-relaxed mb-8">
            <strong className="text-gray-900">A season of preparation being mistaken for a delay.</strong>
            Not every stillness is being stuck. Some of it is foundation work - the kind that looks
            like nothing from the outside but is everything from the inside. Jesus spent thirty years
            in preparation before three years of ministry. The ratio looks wrong until you see the fruit.
          </p>

          <blockquote className="border-l-4 border-[#FFD600] pl-5 py-2 my-8 bg-[#fffdf0] rounded-r-xl">
            <p className="text-gray-800 font-semibold italic leading-relaxed">
              "Those who wait on the Lord shall renew their strength; they shall mount up with wings like eagles,
              they shall run and not be weary, they shall walk and not faint."
            </p>
            <cite className="text-sm text-[#595959] not-italic mt-2 block">- Isaiah 40:31</cite>
          </blockquote>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">What actually breaks it</h2>
          <p className="text-[#595959] text-base leading-relaxed mb-6">
            The first practical step is clarity, not action. Write down where you think you are stuck
            and what you believe is blocking you. The act of putting it on paper often reveals that
            you already know what needs to happen - you have just been hoping you could avoid it.
          </p>
          <p className="text-[#595959] text-base leading-relaxed mb-6">
            The second step is the one decision you have been postponing. Not ten decisions - one.
            Most stuckness breaks with a single committed choice that everything else can align around.
          </p>
          <p className="text-[#595959] text-base leading-relaxed mb-8">
            And the third - which consistently produces results that the first two cannot explain on
            their own - is prayer. Not as a last resort. As a first resource. There is a reason that
            people who pray consistently report a different quality of clarity about their direction
            than people who do not. It is not mysticism. It is access to a perspective that is wider
            than your own.
          </p>

          <p className="text-[#595959] text-base leading-relaxed mb-6">
            Sermons like{' '}
            <Link href="/sermons/why-youre-not-moving-forward-and-how-to-break-it" className="fgi-link">
              Why You Are Not Moving Forward and How to Break It
            </Link>{' '}
            and{' '}
            <Link href="/sermons/the-principle-that-activates-everything" className="fgi-link">
              The Principle That Activates Everything
            </Link>{' '}
            go deeper on this. Both are available free in the{' '}
            <Link href="/sermons" className="fgi-link">sermons archive</Link>.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-12 px-4 sm:px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Ready to stop spinning your wheels?</h2>
          <p className="text-[#595959] text-sm leading-relaxed mb-6">Come and hear practical teaching built around exactly this kind of problem. Every Sunday at 09:00, Pretoria North.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/plan-your-visit" className="btn-primary text-sm">Plan Your Visit</Link>
            <Link href="/sermons" className="inline-block border-2 border-[#008080] text-[#008080] font-semibold px-6 py-3 rounded-lg hover:bg-[#008080] hover:text-white transition-colors text-sm">Browse Sermons</Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-8 px-4 sm:px-6">
        <div className="section-container">
          <div className="geo-block">
            <p>Fountain of Grace International is a church and registered NPO (316-193) in Pretoria North, Gauteng, South Africa. Sunday services at 323 B Danie Theron Street every week at 09:00. WhatsApp +27 75 259 2555 or email info@fountaingrace.org.</p>
          </div>
        </div>
      </section>
    </>
  )
}
