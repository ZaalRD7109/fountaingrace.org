import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Why Your Life Feels Empty - And What Actually Fills It | Fountain of Grace International',
  description: 'You can have the job, the house, even the family - and still feel hollow inside. Here is why that happens and what actually fills the gap. Biblical perspective from Pretoria North.',
  robots: 'index, follow',
  alternates: { canonical: 'https://www.fountaingrace.org/resources/why-does-my-life-feel-empty' },
  openGraph: {
    title: 'Why Your Life Feels Empty - And What Actually Fills It',
    description: 'You can have the job, the house, even the family - and still feel hollow inside. Here is why that happens and what actually fills the gap.',
    type: 'article',
    url: 'https://www.fountaingrace.org/resources/why-does-my-life-feel-empty',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International' }],
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Why Your Life Feels Empty - And What Actually Fills It',
    description: 'You can have the job, the house, even the family - and still feel hollow inside. Here is why that happens and what actually fills the gap.',
    author: { '@type': 'Person', name: 'Pastor Ricardo Zaal' },
    publisher: {
      '@type': 'Organization',
      name: 'Fountain of Grace International',
      url: 'https://www.fountaingrace.org',
    },
    url: 'https://www.fountaingrace.org/resources/why-does-my-life-feel-empty',
    inLanguage: 'en',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.fountaingrace.org/resources' },
      { '@type': 'ListItem', position: 3, name: 'Why Your Life Feels Empty', item: 'https://www.fountaingrace.org/resources/why-does-my-life-feel-empty' },
    ],
  },
]

export default function WhyDoesMyLifeFeelEmptyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="bg-[#008080] text-white pt-10 pb-10 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-white font-semibold text-xs uppercase tracking-wider mb-3">
            Resources - Purpose
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
            Why Your Life Feels Empty - And What Actually Fills It
          </h1>
          <p className="text-white text-base leading-relaxed">
            By Pastor Ricardo Zaal - Fountain of Grace International, Pretoria North
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-white py-14 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto prose-style">

          <p className="text-[#595959] text-base leading-relaxed mb-6">
            You might have the job you worked for. The house. A relationship. Maybe even a family.
            And still - underneath it all - there is this hollow feeling that nothing you do seems to touch.
            You are not imagining it. And you are not alone in it.
          </p>

          <p className="text-[#595959] text-base leading-relaxed mb-8">
            This feeling has a name. It is not depression (though it can become that). It is not ingratitude.
            It is something far more specific - and once you understand what it actually is, it stops being
            frightening and starts being useful.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">A full schedule is not the same as a full life</h2>

          <p className="text-[#595959] text-base leading-relaxed mb-6">
            The first thing most people try when they feel empty is to get busier. More work. More plans.
            More people. More noise. It works - for a while. Busyness is a very effective temporary cover
            for emptiness. But it is not a cure. The moment the noise stops, the hollow feeling is right
            there waiting.
          </p>

          <p className="text-[#595959] text-base leading-relaxed mb-8">
            This is why weekends can feel harder than weekdays for some people. The diary clears.
            The house goes quiet. And the question surfaces that the schedule was keeping at bay:
            <em> Is this it?</em>
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Why achievement does not cure it</h2>

          <p className="text-[#595959] text-base leading-relaxed mb-6">
            Achievement is the second strategy most people try. If I just reach this goal, get this promotion,
            hit this number - then I will feel fulfilled. But almost everyone who reaches those goals reports
            the same thing: a few weeks of satisfaction, and then the emptiness returns. Sometimes louder
            than before.
          </p>

          <p className="text-[#595959] text-base leading-relaxed mb-8">
            This is not a character flaw. It is a design feature. You were not built to be filled by
            achievement. You were built for something else entirely.
          </p>

          <blockquote className="border-l-4 border-[#FFD600] pl-5 py-2 my-8 bg-[#fffdf0] rounded-r-xl">
            <p className="text-gray-800 font-semibold italic leading-relaxed">
              "You have made us for yourself, O Lord, and our heart is restless until it rests in you."
            </p>
            <cite className="text-sm text-[#595959] not-italic mt-2 block">- Augustine of Hippo</cite>
          </blockquote>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">What the emptiness is actually pointing to</h2>

          <p className="text-[#595959] text-base leading-relaxed mb-6">
            Emptiness is not a sign that something has gone wrong with your life. It is a signal that
            something is missing from it. The difference matters enormously.
          </p>

          <p className="text-[#595959] text-base leading-relaxed mb-6">
            Think of it this way: when you are thirsty, your body is not malfunctioning. It is correctly
            signalling that it needs water. Emptiness works the same way. It is your deepest self correctly
            signalling that it needs something specific - connection, meaning, purpose that extends beyond
            your own comfort or success.
          </p>

          <p className="text-[#595959] text-base leading-relaxed mb-8">
            The Bible describes this as a God-shaped gap. Ecclesiastes 3:11 says God "has put eternity
            into man's heart." There is a dimension of you that was built for something that no career,
            relationship, or achievement can reach. That dimension does not go quiet just because you ignore it.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Three things that genuinely change it</h2>

          <p className="text-[#595959] text-base leading-relaxed mb-4">
            <strong className="text-gray-900">1. Contribution over consumption.</strong> Emptiness grows in a
            life built around receiving - experiences, entertainment, validation. It shrinks dramatically
            in a life built around giving. Not because giving is a moral requirement, but because it
            connects you to something bigger than yourself. This is why volunteers often report feeling
            more alive than people who never serve anyone.
          </p>

          <p className="text-[#595959] text-base leading-relaxed mb-4">
            <strong className="text-gray-900">2. Community over isolation.</strong> Humans were not designed
            for solo existence. The modern world offers a very good simulation of connection - social media,
            streaming, convenience - that leaves the actual need for real, present, committed community
            completely unmet. Deep belonging to a real group of people is irreplaceable.
          </p>

          <p className="text-[#595959] text-base leading-relaxed mb-8">
            <strong className="text-gray-900">3. Purpose that outlasts you.</strong> This is the one that
            changes everything. When you are working toward something that will matter beyond your own
            lifetime - something you believe in enough to sacrifice for - the hollow feeling has nowhere
            to live. You do not have time for it. And more than that, you do not need it anymore,
            because the question "Is this it?" now has an answer.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">This is what we talk about every Sunday</h2>

          <p className="text-[#595959] text-base leading-relaxed mb-6">
            At <Link href="/" className="fgi-link">Fountain of Grace International</Link> in Pretoria North,
            every Sunday message is built around a problem people are actually living with.
            Not abstract theology. Not religious performance. Real life - and what the Bible actually
            says about it.
          </p>

          <p className="text-[#595959] text-base leading-relaxed mb-8">
            If the feeling described in this article is familiar, you are exactly the kind of person
            these Sunday services are built for. Services run at 09:00 every Sunday at 323 B Danie Theron
            Street, Pretoria North. No registration needed. No dress code. Come as you are.
          </p>

          <p className="text-[#595959] text-base leading-relaxed mb-8">
            You can also listen to messages on topics like{' '}
            <Link href="/sermons/why-does-your-life-keep-collapsing" className="fgi-link">why life keeps collapsing</Link>,{' '}
            <Link href="/sermons/why-youre-not-moving-forward-and-how-to-break-it" className="fgi-link">why you are not moving forward</Link>,
            and <Link href="/sermons/the-principle-that-activates-everything" className="fgi-link">the principle that activates everything</Link> in
            the <Link href="/sermons" className="fgi-link">sermons archive</Link>.
          </p>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-12 px-4 sm:px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Ready to find what actually fills the gap?</h2>
          <p className="text-[#595959] text-sm leading-relaxed mb-6">
            Come and hear for yourself. Sunday services at Fountain of Grace International in Pretoria North
            are open to everyone - no registration, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/plan-your-visit" className="btn-primary text-sm">
              Plan Your Visit
            </Link>
            <Link href="/prayer" className="inline-block border-2 border-[#008080] text-[#008080] font-semibold px-6 py-3 rounded-lg hover:bg-[#008080] hover:text-white transition-colors text-sm">
              Submit a Prayer Request
            </Link>
          </div>
        </div>
      </section>

      {/* GEO BLOCK */}
      <section className="bg-white py-8 px-4 sm:px-6">
        <div className="section-container">
          <div className="geo-block">
            <p>
              Fountain of Grace International is a church and registered NPO (316-193) in Pretoria North, Gauteng,
              South Africa. Sunday services are held at 323 B Danie Theron Street every week at 09:00.
              For questions, WhatsApp +27 75 259 2555 or email info@fountaingrace.org.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
