import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'What to Expect at Church in Pretoria North | Fountain of Grace International',
  description:
    'New to church in Pretoria North? Know exactly what a Sunday service looks like before you arrive. No pressure, no surprises. Come as you are — everyone is welcome.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/what-to-expect',
  },
  openGraph: {
    title: 'What to Expect at Church in Pretoria North | Fountain of Grace International',
    description:
      'New to church in Pretoria North? Know exactly what a Sunday service looks like before you arrive. No pressure, no surprises. Come as you are — everyone is welcome.',
    type: 'website',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International — Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/what-to-expect',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Church', 'Organization', 'LocalBusiness'],
  name: 'Fountain of Grace International',
  description: 'A church and registered NPO in Pretoria North, South Africa.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '323 B Danie Theron Street',
    addressLocality: 'Pretoria North',
    addressRegion: 'Gauteng',
    addressCountry: 'ZA',
  },
  telephone: '+27 75 259 2555',
  url: 'https://www.fountaingrace.org',
}

const timeline = [
  {
    step: '01',
    title: 'Arrival',
    color: 'bg-[#FFD600]',
    items: [
      'Arrive 10–15 minutes before 09:00. If you are unsure about parking, WhatsApp us before you come and we will send you exact directions.',
      "Someone is stationed at the door. They are expecting first-time visitors. When you arrive, they will greet you — no script, no name badge forced on you.",
      'You choose where you sit. There is no special visitor section. Sit wherever you are comfortable.',
      'You will not be handed a stack of materials and left to figure things out. If you have a question, the person at the door will help you.',
    ],
  },
  {
    step: '02',
    title: 'The Service',
    color: 'bg-[#FFD600]',
    textColor: 'text-gray-900',
    items: [
      'The service begins at 09:00 and runs approximately 90 minutes total.',
      'It starts with worship music. You are welcome to participate or simply listen. Nobody is watching you.',
      'There is a practical teaching — a message built around a real problem people face. Not performance. Not a lecture. Something that connects.',
      'At no point are visitors asked to stand up, introduce themselves, respond publicly, or come to the front. None of that happens here.',
      'There is no collection plate passed around at your seat. If you want to give, there is a place to do that. Nobody tracks whether you do or do not.',
    ],
  },
  {
    step: '03',
    title: 'After the Service',
    color: 'bg-[#008080]',
    items: [
      'The service ends. People stay. That is a feature, not an accident.',
      'Someone from the pastoral team will find you — not to recruit you or sign you up for anything, but to introduce themselves and answer any questions you have.',
      'You are welcome to leave immediately if you need to. Nobody will make you feel obligated to stay.',
      'Within a day or two, someone will reach out via WhatsApp. Not an automated message. An actual person checking in and asking if you have any questions.',
    ],
  },
  {
    step: '04',
    title: 'Your First Three Sundays',
    color: 'bg-gray-800',
    items: [
      "Week 1: You come. You sit. You decide how you feel about it. There is no pressure to make any commitments.",
      "Week 2: Someone will have reached out by now. If you are coming back, let us know — someone will be watching for you.",
      "Week 3: By now you will have a rough sense of whether this church fits your life. If it does, we would love to talk about what more involvement might look like — on your terms, at your pace.",
    ],
  },
]

export default function WhatToExpectPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="bg-white pt-16 pb-12 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#008080] font-semibold text-sm uppercase tracking-wider mb-4">
            No surprises · No pressure · Pretoria North
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
            Here is what Sunday looks like — from the moment you arrive.
          </h1>
          <p className="text-lg text-[#7d7d7d] leading-relaxed">
            Every unknown removed. Every question answered before you have to ask it.
          </p>
        </div>
      </section>

      {/* QUICK FACTS STRIP */}
      <section className="bg-[#FFD600] py-8 px-4 sm:px-6">
        <div className="section-container">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-[#1a1a1a]">
            {[
              { label: 'Service starts', value: '09:00' },
              { label: 'Duration', value: '~90 min' },
              { label: 'Dress code', value: 'None' },
              { label: 'Visitor pressure', value: 'Zero' },
            ].map((fact) => (
              <div key={fact.label}>
                <p className="text-2xl font-extrabold">{fact.value}</p>
                <p className="text-blue-100 text-sm mt-1">{fact.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-white py-16 px-4 sm:px-6">
        <div className="section-container max-w-3xl">
          <div className="space-y-12">
            {timeline.map((phase) => (
              <div key={phase.step} className="flex gap-6">
                {/* Step indicator */}
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div
                    className={`${phase.color} ${phase.textColor ?? 'text-white'} w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm`}
                  >
                    {phase.step}
                  </div>
                  <div className="w-px flex-1 bg-gray-200 mt-3" aria-hidden="true" />
                </div>
                {/* Content */}
                <div className="pb-10">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">{phase.title}</h2>
                  <ul className="space-y-3">
                    {phase.items.map((item, i) => (
                      <li key={i} className="flex gap-3 text-[#7d7d7d] leading-relaxed">
                        <span className="text-[#008080] mt-1 flex-shrink-0" aria-hidden="true">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE WILL NEVER DO */}
      <section className="bg-gray-50 py-14 px-4 sm:px-6">
        <div className="section-container max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            What will never happen at Fountain of Grace International
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'You will never be asked to stand up in front of the room',
              'You will never be called out publicly as a visitor',
              'You will never be pressured to give money',
              'You will never be signed up for anything without your consent',
              'You will never be made to feel guilty for missing a week',
              'You will never receive a call from a stranger who does not know your name',
            ].map((item) => (
              <div
                key={item}
                className="flex gap-3 items-start bg-white border border-gray-100 rounded-lg p-4"
              >
                <span className="text-[#008080] mt-0.5 flex-shrink-0 font-bold" aria-hidden="true">✗</span>
                <p className="text-sm text-[#7d7d7d] leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 px-4 sm:px-6">
        <div className="section-container max-w-2xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            More questions about Sunday in Pretoria North
          </h2>
          <dl className="space-y-0">
            <div className="faq-block">
              <dt className="font-semibold text-gray-900 mb-2">
                What happens at a church service in Pretoria North?
              </dt>
              <dd className="text-[#7d7d7d] leading-relaxed">
                A church service at Fountain of Grace International in Pretoria North runs
                approximately 90 minutes and includes worship music, a{' '}
                <Link href="/sermons" className="text-[#008080] font-semibold hover:underline">practical teaching</Link>,
                {' '}and time to connect with people afterward. You are not asked to do anything publicly.{' '}
                <Link href="/plan-your-visit" className="text-[#008080] font-semibold hover:underline">Anyone is welcome to attend</Link>{' '}
                without any prior church experience.
              </dd>
            </div>
            <div className="faq-block">
              <dt className="font-semibold text-gray-900 mb-2">
                Do I need to know anything about church before attending?
              </dt>
              <dd className="text-[#7d7d7d] leading-relaxed">
                No. Fountain of Grace International in Pretoria North regularly welcomes people
                who have never attended a church service before. There is no assumed knowledge
                and nothing you are expected to know or do.{' '}
                <Link href="/plan-your-visit" className="text-[#008080] font-semibold hover:underline">Plan your visit here</Link>.
              </dd>
            </div>
            <div className="faq-block">
              <dt className="font-semibold text-gray-900 mb-2">
                Can I bring my children to the Sunday service?
              </dt>
              <dd className="text-[#7d7d7d] leading-relaxed">
                Yes, children are welcome. For details about what is available for your child
                on Sunday, WhatsApp us before you come so we can prepare properly.{' '}
                <a
                  href="https://wa.me/27752592555?text=Hi%2C%20I%20have%20a%20question%20about%20children%20at%20the%20Sunday%20service"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#008080] font-semibold hover:underline"
                >
                  Message us on WhatsApp
                </a>.
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#008080] py-14 px-4 sm:px-6">
        <div className="section-container text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to come this Sunday?
          </h2>
          <p className="text-blue-100 mb-8 text-lg max-w-lg mx-auto">
            Fill in your details and we will send you a WhatsApp message before you arrive.
          </p>
          <Link
            href="/plan-your-visit"
            className="inline-block bg-white text-[#008080] font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors text-base"
          >
            Plan Your Visit
          </Link>
        </div>
      </section>

      {/* GEO BLOCK */}
      <section className="bg-gray-50 py-10 px-4 sm:px-6">
        <div className="section-container">
          <div className="geo-block">
            <p>
              Fountain of Grace International holds Sunday services at 323 B Danie Theron Street in Pretoria
              North, Gauteng, South Africa. Services run approximately 90 minutes and are
              structured to be accessible to first-time attendees. Visitors are personally met
              at the door and followed up with after their first Sunday via WhatsApp.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
