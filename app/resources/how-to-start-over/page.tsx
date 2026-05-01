import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Start Over When Everything Has Fallen Apart | Fountain of Grace International',
  description: 'When your life collapses - the marriage, the business, the career, the plan - what do you actually do next? A practical, honest guide to starting over from Pretoria North.',
  robots: 'index, follow',
  alternates: { canonical: 'https://www.fountaingrace.org/resources/how-to-start-over' },
  openGraph: {
    title: 'How to Start Over When Everything Has Fallen Apart',
    description: 'When your life collapses, what do you actually do next? A practical, honest guide to starting over.',
    type: 'article',
    url: 'https://www.fountaingrace.org/resources/how-to-start-over',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International' }],
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Start Over When Everything Has Fallen Apart',
    description: 'When your life collapses, what do you actually do next? A practical, honest guide to starting over.',
    author: { '@type': 'Person', name: 'Pastor Ricardo Zaal' },
    publisher: {
      '@type': 'Organization',
      name: 'Fountain of Grace International',
      url: 'https://www.fountaingrace.org',
    },
    url: 'https://www.fountaingrace.org/resources/how-to-start-over',
    inLanguage: 'en',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.fountaingrace.org/resources' },
      { '@type': 'ListItem', position: 3, name: 'How to Start Over', item: 'https://www.fountaingrace.org/resources/how-to-start-over' },
    ],
  },
]

export default function HowToStartOverPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="bg-[#008080] text-white pt-10 pb-10 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-white font-semibold text-xs uppercase tracking-wider mb-3">
            Resources - Starting Over
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
            How to Start Over When Everything Has Fallen Apart
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
            There is a specific kind of silence that comes after a collapse.
            After the marriage ends. After the business closes. After the plan you built your life around
            proves it was not going to work. After the thing you could not imagine losing is gone.
          </p>

          <p className="text-[#595959] text-base leading-relaxed mb-8">
            In that silence, most people do one of two things: they try to rebuild the same thing,
            or they freeze and build nothing. Both responses are understandable. Neither one is the answer.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">First: stop treating it as only a failure</h2>

          <p className="text-[#595959] text-base leading-relaxed mb-6">
            The first obstacle to starting over is the story you tell yourself about what happened.
            If you frame a collapse purely as failure, you carry it into every new beginning as evidence
            that you cannot succeed. Every new attempt is haunted by the last one.
          </p>

          <p className="text-[#595959] text-base leading-relaxed mb-8">
            Collapse strips things down to what is real. That is painful - but it is also clarifying.
            A lot of what fell apart may have been something you were holding together by willpower alone,
            something that was never meant to be permanent. The collapse, as brutal as it is, can be
            the thing that finally creates space for something that actually fits.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Grieve it properly before you replace it</h2>

          <p className="text-[#595959] text-base leading-relaxed mb-6">
            One of the biggest mistakes people make after a collapse is trying to rebuild too fast.
            The instinct to get moving again - to prove to yourself and everyone else that you are
            fine - is powerful. But skipping grief does not remove it. It just delays it and stores it.
          </p>

          <p className="text-[#595959] text-base leading-relaxed mb-8">
            Give yourself permission to name what you lost. Not just the external thing - the job,
            the relationship, the money - but the future you had planned around it. That future was real
            to you. Losing it is a real loss. Acknowledge it before you build the next thing.
          </p>

          <blockquote className="border-l-4 border-[#FFD600] pl-5 py-2 my-8 bg-[#fffdf0] rounded-r-xl">
            <p className="text-gray-800 font-semibold italic leading-relaxed">
              "He restoreth my soul: he leadeth me in the paths of righteousness for his name's sake."
            </p>
            <cite className="text-sm text-[#595959] not-italic mt-2 block">- Psalm 23:3 (KJV)</cite>
          </blockquote>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Four practical steps to starting over</h2>

          <p className="text-[#595959] text-base leading-relaxed mb-4">
            <strong className="text-gray-900">1. Audit what is still true.</strong> When everything falls apart,
            the temptation is to assume everything is lost. It is not. Your character, your skills,
            your relationships that did not leave, your faith, your ability to choose your next step -
            these are still yours. Take inventory of what remains before deciding what to build next.
          </p>

          <p className="text-[#595959] text-base leading-relaxed mb-4">
            <strong className="text-gray-900">2. Pick the smallest possible next step.</strong> Not the plan.
            Not the vision. Not the full picture. One small, concrete, achievable thing. Starting over
            is not one giant leap - it is a series of small, unglamorous steps that accumulate over time.
            The people who rebuild are not the ones with the best plans. They are the ones who kept
            taking one step, then another.
          </p>

          <p className="text-[#595959] text-base leading-relaxed mb-4">
            <strong className="text-gray-900">3. Find people who have been where you are.</strong> Isolation
            after collapse is one of the things that makes recovery hardest. You need people who have
            walked through something similar and come out the other side - not to tell you it will
            be fine, but to show you that it can be. That community exists. Seek it out.
          </p>

          <p className="text-[#595959] text-base leading-relaxed mb-8">
            <strong className="text-gray-900">4. Build around purpose, not position.</strong> The thing
            that collapsed was almost certainly tied to a position - a role, a title, a status, a place
            in someone else's life. Purpose is different from position. Purpose belongs to you whether
            you hold any particular role or not. Building the next chapter around who you are called
            to be - rather than what you are called to have - produces something that collapses do not
            take with them.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Starting over is not starting from zero</h2>

          <p className="text-[#595959] text-base leading-relaxed mb-6">
            This is one of the most important reframes available to you. When you start over after
            a collapse, you are not the same person who started before. You carry the experience.
            The lessons. The clarity that only comes from having something stripped away.
          </p>

          <p className="text-[#595959] text-base leading-relaxed mb-8">
            The person rebuilding after a collapse is often building something far more solid than
            the person who never had anything fall. Not because collapse is good - but because what
            survives a collapse tends to be the things worth keeping.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">This is what we talk about at FGI</h2>

          <p className="text-[#595959] text-base leading-relaxed mb-6">
            Every Sunday at <Link href="/" className="fgi-link">Fountain of Grace International</Link> in Pretoria North,
            the message is built around real problems people are living with.
            Not inspirational theology for people who are doing fine. Practical truth for people in the middle of something.
          </p>

          <p className="text-[#595959] text-base leading-relaxed mb-8">
            If starting over is where you are right now, you will fit right in. Services are at 09:00
            every Sunday at 323 B Danie Theron Street. No registration needed.
            Or listen to sermons on{' '}
            <Link href="/sermons/why-does-your-life-keep-collapsing" className="fgi-link">why life keeps collapsing</Link>,{' '}
            <Link href="/sermons/why-youre-not-moving-forward-and-how-to-break-it" className="fgi-link">how to break through when you are not moving forward</Link>, and{' '}
            <Link href="/sermons/the-principle-that-activates-everything" className="fgi-link">the principle that activates everything</Link>.
          </p>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-12 px-4 sm:px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-3">You do not have to figure out the next chapter alone</h2>
          <p className="text-[#595959] text-sm leading-relaxed mb-6">
            Fountain of Grace International is a church in Pretoria North built for people in the middle of something real.
            Come and hear what the Bible actually says about rebuilding.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/plan-your-visit" className="btn-primary text-sm">
              Plan Your Visit
            </Link>
            <Link href="/sermons" className="inline-block border-2 border-[#008080] text-[#008080] font-semibold px-6 py-3 rounded-lg hover:bg-[#008080] hover:text-white transition-colors text-sm">
              Browse Sermons
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
