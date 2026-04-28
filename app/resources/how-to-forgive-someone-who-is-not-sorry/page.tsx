import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Forgive Someone Who Is Not Sorry | Fountain of Grace International',
  description: 'Forgiving someone who has not apologised feels wrong. But holding onto it is costing you more than them. Here is how forgiveness actually works - and why it is for you, not them.',
  robots: 'index, follow',
  alternates: { canonical: 'https://www.fountaingrace.org/resources/how-to-forgive-someone-who-is-not-sorry' },
  openGraph: {
    title: 'How to Forgive Someone Who Is Not Sorry',
    description: 'Forgiving someone who has not apologised feels wrong. But holding onto it is costing you more than them.',
    type: 'article',
    url: 'https://www.fountaingrace.org/resources/how-to-forgive-someone-who-is-not-sorry',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International' }],
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Forgive Someone Who Is Not Sorry',
    author: { '@type': 'Person', name: 'Pastor Ricardo Zaal' },
    publisher: { '@type': 'Organization', name: 'Fountain of Grace International', url: 'https://www.fountaingrace.org' },
    url: 'https://www.fountaingrace.org/resources/how-to-forgive-someone-who-is-not-sorry',
    inLanguage: 'en',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.fountaingrace.org/resources' },
      { '@type': 'ListItem', position: 3, name: 'How to Forgive Someone Who Is Not Sorry', item: 'https://www.fountaingrace.org/resources/how-to-forgive-someone-who-is-not-sorry' },
    ],
  },
]

export default function HowToForgiveNotSorryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="bg-[#008080] text-white pt-10 pb-10 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-white font-semibold text-xs uppercase tracking-wider mb-3">Resources - Relationships</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
            How to Forgive Someone Who Is Not Sorry - And Why It Is for You, Not Them
          </h1>
          <p className="text-white text-base leading-relaxed">By Pastor Ricardo Zaal - Fountain of Grace International, Pretoria North</p>
        </div>
      </section>

      <section className="bg-white py-14 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-[#595959] text-base leading-relaxed mb-6">
            There is a version of forgiveness that most people are waiting for and will never receive.
            It requires the other person to come to them, acknowledge what they did, express genuine remorse,
            and ask to be forgiven. That is reconciliation. It is beautiful when it happens.
            But it is not forgiveness - and you do not need the other person present to do it.
          </p>
          <p className="text-[#595959] text-base leading-relaxed mb-8">
            Forgiveness is something you do inside yourself, for yourself, regardless of whether
            the person who hurt you ever acknowledges it.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">What unforgiveness actually costs</h2>
          <p className="text-[#595959] text-base leading-relaxed mb-6">
            When you hold onto an offence, it does not punish the person who wronged you.
            It anchors you to them. Every time you replay what happened, rehearse what you would say,
            or feel that familiar tightness in your chest when their name comes up - you are spending
            your own energy on something they are often not even thinking about.
          </p>
          <p className="text-[#595959] text-base leading-relaxed mb-8">
            The common image of bitterness is a poison you drink while hoping the other person gets sick.
            It is accurate. The harm does not go where you aim it. It stays where it lives.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">What forgiveness is not</h2>
          <p className="text-[#595959] text-base leading-relaxed mb-4">
            <strong className="text-gray-900">It is not saying what happened was okay.</strong> It was not okay.
            Forgiveness does not change what happened or erase the fact that real harm was done.
          </p>
          <p className="text-[#595959] text-base leading-relaxed mb-4">
            <strong className="text-gray-900">It is not reconciliation.</strong> You can forgive someone and still
            maintain a boundary. Forgiving an abusive parent does not mean moving back in with them.
          </p>
          <p className="text-[#595959] text-base leading-relaxed mb-8">
            <strong className="text-gray-900">It is not a feeling.</strong> Forgiveness is a decision followed by
            a process. The feeling of release usually comes after the decision, not before it.
          </p>

          <blockquote className="border-l-4 border-[#FFD600] pl-5 py-2 my-8 bg-[#fffdf0] rounded-r-xl">
            <p className="text-gray-800 font-semibold italic leading-relaxed">
              "Bear with each other and forgive one another if any of you has a grievance against someone.
              Forgive as the Lord forgave you."
            </p>
            <cite className="text-sm text-[#595959] not-italic mt-2 block">- Colossians 3:13</cite>
          </blockquote>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">How to actually do it</h2>
          <p className="text-[#595959] text-base leading-relaxed mb-6">
            The process starts with a choice, not a feeling. You decide that you are no longer going
            to let this offence hold territory in your life. You name what happened clearly and honestly -
            not minimising it, not dramatising it - and you make a deliberate choice to release the
            debt you feel you are owed.
          </p>
          <p className="text-[#595959] text-base leading-relaxed mb-6">
            You will probably need to make that choice more than once. Forgiveness is rarely a single
            moment. It is more like a direction you keep choosing until the weight of it finally lifts.
            Some people describe it as choosing the same road every morning for months until one day
            they realise the road feels different.
          </p>
          <p className="text-[#595959] text-base leading-relaxed mb-8">
            Prayer accelerates this in ways that are hard to explain until you experience them.
            Bringing the specific person and the specific offence before God - not to complain about them,
            but to genuinely release it - tends to move the process faster than carrying it alone.
            If this is something you are working through,{' '}
            <Link href="/prayer" className="fgi-link">submit a prayer request here</Link> and the pastoral
            team at FGI will pray over it personally.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">This is something we talk about openly at FGI</h2>
          <p className="text-[#595959] text-base leading-relaxed mb-8">
            At <Link href="/" className="fgi-link">Fountain of Grace International</Link> in Pretoria North,
            real problems get real answers on Sundays. Not platitudes. Not "just pray harder."
            Practical, Biblical teaching that you can apply the same week. You can listen to messages
            on related topics in the <Link href="/sermons" className="fgi-link">sermons archive</Link>,
            or <Link href="/plan-your-visit" className="fgi-link">come in person this Sunday</Link> at 09:00.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-12 px-4 sm:px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Carrying something heavy?</h2>
          <p className="text-[#595959] text-sm leading-relaxed mb-6">You do not have to carry it alone. Submit a prayer request or come and hear for yourself this Sunday.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/prayer" className="btn-primary text-sm">Submit a Prayer Request</Link>
            <Link href="/plan-your-visit" className="inline-block border-2 border-[#008080] text-[#008080] font-semibold px-6 py-3 rounded-lg hover:bg-[#008080] hover:text-white transition-colors text-sm">Plan Your Visit</Link>
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
