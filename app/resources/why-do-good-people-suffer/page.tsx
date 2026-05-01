import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Why Do Good People Suffer - An Honest Answer | Fountain of Grace International',
  description: 'If God is good, why do good people suffer? This question has broken more faith than almost anything else. Here is an honest, Biblical answer that does not dismiss the pain.',
  robots: 'index, follow',
  alternates: { canonical: 'https://www.fountaingrace.org/resources/why-do-good-people-suffer' },
  openGraph: {
    title: 'Why Do Good People Suffer - An Honest Answer',
    description: 'If God is good, why do good people suffer? An honest, Biblical answer that does not dismiss the pain.',
    type: 'article',
    url: 'https://www.fountaingrace.org/resources/why-do-good-people-suffer',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International' }],
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Why Do Good People Suffer - An Honest Answer',
    description: 'If God is good, why do good people suffer? An honest, Biblical answer that does not dismiss the pain.',
    author: { '@type': 'Person', name: 'Pastor Ricardo Zaal' },
    publisher: {
      '@type': 'Organization',
      name: 'Fountain of Grace International',
      url: 'https://www.fountaingrace.org',
    },
    url: 'https://www.fountaingrace.org/resources/why-do-good-people-suffer',
    inLanguage: 'en',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.fountaingrace.org/resources' },
      { '@type': 'ListItem', position: 3, name: 'Why Do Good People Suffer', item: 'https://www.fountaingrace.org/resources/why-do-good-people-suffer' },
    ],
  },
]

export default function WhyDoGoodPeopleSufferPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="bg-[#008080] text-white pt-10 pb-10 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-white font-semibold text-xs uppercase tracking-wider mb-3">
            Resources - Faith and Doubt
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
            Why Do Good People Suffer - An Honest Answer
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
            This is the question that has silenced more faith than almost any other.
            Not theological arguments. Not intellectual doubt. Just this: a good person,
            living right, doing their best - and then something terrible happens to them anyway.
          </p>

          <p className="text-[#595959] text-base leading-relaxed mb-8">
            If you have watched someone lose a child, or been through a diagnosis that made no sense,
            or had something taken from you that you did not deserve to lose - this question is not
            academic for you. It is personal. And it deserves a real answer, not a religious deflection.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">What the Bible actually says</h2>

          <p className="text-[#595959] text-base leading-relaxed mb-6">
            The first thing to say is that the Bible does not pretend this question is easy.
            The book of Job is an entire book dedicated to a man who suffered severely despite
            living with integrity. His friends insisted he must have done something wrong.
            God said they were the ones who were wrong.
          </p>

          <p className="text-[#595959] text-base leading-relaxed mb-8">
            Jesus himself made it plain that suffering does not work on a merit system.
            In John 9, when his disciples asked whether a man was born blind because of
            his own sin or his parents', Jesus said neither. He rejected the cause-and-effect
            framing entirely. Suffering is not always punishment. Sometimes it is not punishment at all.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Three things that are true at the same time</h2>

          <p className="text-[#595959] text-base leading-relaxed mb-4">
            <strong className="text-gray-900">1. The world is broken.</strong> We live in a world that
            is not operating the way it was designed to. Pain, disease, injustice, and loss are real
            features of a broken world - not proof that God has abandoned it or is punishing individuals.
            Good people suffer in a broken world the same way good people get rained on: it is not about
            them. Rain falls on the just and the unjust alike (Matthew 5:45).
          </p>

          <p className="text-[#595959] text-base leading-relaxed mb-4">
            <strong className="text-gray-900">2. God does not waste pain.</strong> This is different from
            saying God causes pain. But Romans 8:28 is one of the most tested and confirmed statements
            in all of Scripture: God works all things together for good for those who love him.
            Not some things. Not easy things. All things - including the things that make no sense
            while you are inside them. The people who have walked through the worst and come out the other
            side tend to say the same thing: they would not trade what they learned.
          </p>

          <p className="text-[#595959] text-base leading-relaxed mb-8">
            <strong className="text-gray-900">3. Suffering is not the end of the story.</strong> The Christian
            understanding of suffering is unique in one specific way: it places suffering inside a larger
            narrative that ends with restoration, not loss. The resurrection is not a metaphor. It is a
            direct statement that death does not have the final word - and neither does any other form
            of loss. That does not make the pain smaller. But it does mean the pain is not pointless.
          </p>

          <blockquote className="border-l-4 border-[#FFD600] pl-5 py-2 my-8 bg-[#fffdf0] rounded-r-xl">
            <p className="text-gray-800 font-semibold italic leading-relaxed">
              "For our light and momentary troubles are achieving for us an eternal glory that far outweighs them all."
            </p>
            <cite className="text-sm text-[#595959] not-italic mt-2 block">- 2 Corinthians 4:17 (KJV)</cite>
          </blockquote>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">What this does not answer</h2>

          <p className="text-[#595959] text-base leading-relaxed mb-6">
            Honest theology has to admit what it cannot fully explain. There are moments of suffering
            where no framework feels adequate. Where the theological answer and the lived experience
            are so far apart that holding them in the same sentence feels dishonest.
          </p>

          <p className="text-[#595959] text-base leading-relaxed mb-8">
            In those moments, the most important thing is not to have the right answer.
            It is to not be alone. Community that does not rush to fix your pain - that simply
            stays present in it with you - is one of the most powerful forces in human experience.
            It is also one of the primary purposes of a church.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">You do not have to pretend it makes sense</h2>

          <p className="text-[#595959] text-base leading-relaxed mb-6">
            At <Link href="/" className="fgi-link">Fountain of Grace International</Link> in Pretoria North,
            no one is going to ask you to pretend. We are not a congregation of people who have
            everything sorted out. We are people who are working through real things - and choosing
            to do it together, with faith as the foundation.
          </p>

          <p className="text-[#595959] text-base leading-relaxed mb-8">
            If you are carrying something heavy right now - something that does not make sense and
            should not have happened - you are welcome here. Services are at 09:00 every Sunday at
            323 B Danie Theron Street, Pretoria North. Or <Link href="/prayer" className="fgi-link">submit a prayer request</Link> and
            we will pray with you directly.
          </p>

          <p className="text-[#595959] text-base leading-relaxed mb-8">
            You may also find it helpful to read{' '}
            <Link href="/resources/why-does-my-life-feel-empty" className="fgi-link">why life feels empty</Link> or
            listen to sermons on{' '}
            <Link href="/sermons/why-does-your-life-keep-collapsing" className="fgi-link">why life keeps collapsing</Link> and{' '}
            <Link href="/sermons/why-some-problems-wont-leave-until-you-understand-this" className="fgi-link">why some problems will not leave</Link>.
          </p>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-12 px-4 sm:px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-3">You do not have to carry this alone</h2>
          <p className="text-[#595959] text-sm leading-relaxed mb-6">
            Whatever you are walking through right now, there is a place for it at Fountain of Grace International.
            No performance required. No answers needed. Just come.
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
