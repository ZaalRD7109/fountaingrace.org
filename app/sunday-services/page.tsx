import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sunday Church Service Pretoria North | Fountain of Grace International',
  description:
    'Sunday service every week at 09:00 in Pretoria North. Practical Bible teaching, worship, and real community at Fountain of Grace International. Everyone is welcome.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/sunday-services',
  },
  openGraph: {
    title: 'Sunday Church Service Pretoria North | Fountain of Grace International',
    description:
      'Sunday service every week at 09:00 in Pretoria North. Practical Bible teaching, worship, and real community at Fountain of Grace International. Everyone is welcome.',
    type: 'website',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International — Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/sunday-services',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'Sunday Service — Fountain of Grace International',
  description:
    'Weekly Sunday service at Fountain of Grace International in Pretoria North. Practical teaching, worship, and community. Open to everyone.',
  eventSchedule: {
    '@type': 'Schedule',
    byDay: 'https://schema.org/Sunday',
    startTime: '09:00',
    endTime: '10:30',
    repeatFrequency: 'P1W',
  },
  location: {
    '@type': 'Place',
    name: 'Fountain of Grace International',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '323 B Danie Theron Street',
      addressLocality: 'Pretoria North',
      addressRegion: 'Gauteng',
      postalCode: '0182',
      addressCountry: 'ZA',
    },
  },
  organizer: {
    '@type': 'Church',
    name: 'Fountain of Grace International',
    url: 'https://www.fountaingrace.org',
    telephone: '+27752592555',
  },
  isAccessibleForFree: true,
  audience: {
    '@type': 'Audience',
    audienceType: 'Everyone — no prior church experience required',
  },
}

const serviceDetails = [
  { label: 'Day', value: 'Every Sunday' },
  { label: 'Time', value: '09:00 (arrive 10–15 min early)' },
  { label: 'Duration', value: 'Approximately 90 minutes' },
  { label: 'Address', value: '323 B Danie Theron Street, Pretoria North' },
  { label: 'Dress code', value: 'Casual — come as you are' },
  { label: 'Kids', value: 'Children are welcome' },
  { label: 'Cost', value: 'Free — no obligation' },
  { label: 'Language', value: 'English and Afrikaans' },
]

export default function SundayServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="bg-[#008080] text-white pt-10 pb-10 px-4 sm:px-6">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-teal-200 font-semibold text-xs uppercase tracking-wider mb-3">
            Every Sunday · Pretoria North
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
            Sunday services in Pretoria North
          </h1>
          <p className="text-teal-100 text-base leading-relaxed mb-5">
            Fountain of Grace International holds a Sunday service every week at 09:00.
            323 B Danie Theron Street, Pretoria North. Open to anyone.
          </p>
          <Link href="/plan-your-visit" className="btn-primary text-sm">
            Plan Your Visit
          </Link>
        </div>
      </section>

      {/* SERVICE DETAILS GRID */}
      <section className="bg-white py-16 px-4 sm:px-6">
        <div className="section-container max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Service details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {serviceDetails.map((item) => (
              <div
                key={item.label}
                className="bg-gray-50 rounded-xl border border-gray-100 px-5 py-4 flex flex-col gap-1"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-[#008080]">
                  {item.label}
                </span>
                <span className="text-gray-900 font-semibold">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS */}
      <section className="bg-[#f0fafa] py-16 px-4 sm:px-6">
        <div className="section-container max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What happens at the service</h2>
          <div className="space-y-6">
            {[
              {
                step: '01',
                title: 'Worship',
                body: 'The service opens with worship music. You are not required to sing or stand — come in, find a seat, and settle.',
              },
              {
                step: '02',
                title: 'Teaching',
                body: 'The main part of the service is a practical message built around a real problem. Not theory. Something that connects to your week. You can browse past messages on the sermons page.',
                link: '/sermons',
                linkLabel: 'Browse past messages',
              },
              {
                step: '03',
                title: 'Prayer and community time',
                body: 'After the message there is a short time for prayer and connecting with people. You are not required to participate. Stay for as long as you like.',
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-5 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#008080] text-white flex items-center justify-center font-bold text-sm">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-[#7d7d7d] leading-relaxed">
                    {item.body}
                    {item.link && (
                      <>
                        {' '}
                        <Link href={item.link} className="text-[#008080] font-semibold hover:underline">
                          {item.linkLabel}
                        </Link>
                        .
                      </>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO LEADS */}
      <section className="bg-white py-16 px-4 sm:px-6">
        <div className="section-container max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Who leads the service</h2>
          <p className="text-[#7d7d7d] leading-relaxed text-lg mb-6">
            Sunday services at Fountain of Grace International are led by{' '}
            <Link href="/pastors" className="text-[#008080] font-semibold hover:underline">
              Pastor Ricardo Zaal
            </Link>
            , who founded the church in June 2020 and has been in ministry since 2000.
            The teaching is practical, grounded, and built to be useful outside of church.
          </p>
          <Link href="/pastors" className="btn-teal text-sm">
            Meet the Pastors
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f0fafa] py-16 px-4 sm:px-6">
        <div className="section-container max-w-2xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Questions about Sunday services in Pretoria North
          </h2>
          <dl className="space-y-0">
            {[
              {
                q: 'What time is the Sunday service at Fountain of Grace International?',
                a: 'The Sunday service starts at 09:00 every week. Arrive 10 to 15 minutes early to find a comfortable seat. The service runs for approximately 90 minutes.',
              },
              {
                q: 'Where is the Sunday service held in Pretoria North?',
                a: 'Fountain of Grace International is located at 323 B Danie Theron Street, Pretoria North, Gauteng, 0182. WhatsApp us on +27 75 259 2555 for parking directions before you come.',
              },
              {
                q: 'Do I need to register before attending a Sunday service?',
                a: 'No registration is required. You can walk in on Sunday morning. If you want someone to meet you at the door and help you settle, fill in the plan your visit form and we will reach out beforehand.',
              },
              {
                q: 'Is there a church service in Pretoria North on Sundays for newcomers?',
                a: 'Yes. Fountain of Grace International in Pretoria North specifically welcomes people who are new to church. You will not be asked to stand up, introduce yourself, or participate publicly in any way. Come as you are.',
              },
              {
                q: 'How long is the Sunday service at Fountain of Grace International?',
                a: 'Approximately 90 minutes. The service includes worship, a practical teaching message, and community time afterward.',
              },
              {
                q: 'Are children allowed at the Sunday service?',
                a: 'Yes. Children are welcome at the Sunday service. WhatsApp us beforehand on +27 75 259 2555 if you have any questions about bringing young children.',
              },
            ].map((item) => (
              <div key={item.q} className="faq-block">
                <dt className="font-semibold text-gray-900 mb-2">{item.q}</dt>
                <dd className="text-[#7d7d7d] leading-relaxed">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* PLAN YOUR VISIT CTA */}
      <section className="bg-[#008080] py-14 px-4 sm:px-6">
        <div className="section-container text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to come this Sunday?
          </h2>
          <p className="text-teal-100 mb-8 max-w-xl mx-auto">
            Fill in the visit form and we will reach out before Sunday so you know exactly
            what to expect and where to go.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/plan-your-visit" className="btn-primary">
              Plan Your Visit
            </Link>
            <a
              href="https://wa.me/27752592555"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#25d366] text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-[#1ebe5d] transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* GEO BLOCK */}
      <section className="bg-white py-10 px-4 sm:px-6">
        <div className="section-container">
          <div className="geo-block">
            <p>
              Fountain of Grace International holds Sunday services in Pretoria North every week
              starting at 09:00. The church is located at 323 B Danie Theron Street, Pretoria North,
              Gauteng, 0182. Services are open to everyone — no prior church experience required.
              Serving Pretoria North, Akasia, Orchards, Shosanguve, Montana, Wonderboom, Suiderberg,
              Amandasig, and surrounding areas. Contact us on{' '}
              <a href="tel:+27752592555" className="text-[#008080] font-semibold">+27 75 259 2555</a>{' '}
              or{' '}
              <a href="mailto:info@fountaingrace.org" className="text-[#008080] font-semibold">info@fountaingrace.org</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
