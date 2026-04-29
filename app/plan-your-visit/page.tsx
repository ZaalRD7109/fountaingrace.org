import type { Metadata } from 'next'
import Link from 'next/link'
import VisitForm from '@/components/VisitForm'

export const metadata: Metadata = {
  title: 'Plan Your Visit | Church in Pretoria North | FGI',
  description:
    'Planning your first visit to a Christian church in Pretoria North? Fill in the form - we reach out before Sunday so you know exactly where to go and what to expect.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/plan-your-visit',
  },
  openGraph: {
    title: 'Plan Your Visit | Church in Pretoria North | FGI',
    description:
      'Planning your first visit to a Christian church in Pretoria North? Fill in the form - we reach out before Sunday so you know exactly where to go and what to expect.',
    type: 'website',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International - Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/plan-your-visit',
  },
}

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
    { '@type': 'ListItem', position: 2, name: 'Plan Your Visit', item: 'https://www.fountaingrace.org/plan-your-visit' },
  ],
}

export default function PlanYourVisitPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'Sunday Service - Fountain of Grace International',
    eventSchedule: {
      '@type': 'Schedule',
      byDay: 'https://schema.org/Sunday',
      startTime: '09:00',
      endTime: '10:30',
    },
    location: {
      '@type': 'Place',
      name: 'Fountain of Grace International',
      address: '323 B Danie Theron Street, Pretoria North',
    },
    organizer: {
      '@type': 'Organization',
      name: 'Fountain of Grace International',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* HERO */}
      <section className="bg-[#008080] text-white pt-10 pb-10 px-4 sm:px-6">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-white font-semibold text-xs uppercase tracking-wider mb-3">
            Your First Sunday · Pretoria North
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
            Everything you need to know before Sunday.
          </h1>
          <p className="text-white text-base leading-relaxed">
            Fill in the form below and we will reach out before you arrive.{' '}
            Want to know what Sunday looks like first?{' '}
            <Link href="/what-to-expect" className="text-white font-semibold underline hover:text-[#1a1a1a]">See what to expect</Link>.
          </p>
        </div>
      </section>

      {/* FORM - full width */}
      <section className="bg-white py-6 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <VisitForm />
        </div>
      </section>

      {/* SERVICE INFO - compact 3-col strip below form */}
      <section className="bg-gray-50 py-8 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-4 border border-gray-100">
            <p className="text-[#008080] font-bold text-sm mb-1">Service time</p>
            <p className="text-sm text-gray-700">Every Sunday at 09:00</p>
            <p className="text-xs text-[#595959] mt-1">Approx 90 minutes</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-100">
            <p className="text-[#008080] font-bold text-sm mb-1">What to wear</p>
            <p className="text-sm text-gray-700">Come exactly as you are.</p>
            <p className="text-xs text-[#595959] mt-1">Jeans, casual - no one will care.</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-100">
            <p className="text-[#008080] font-bold text-sm mb-1">Arrive early</p>
            <p className="text-sm text-gray-700">10–15 min before 09:00.</p>
            <p className="text-xs text-[#595959] mt-1">Someone will meet you at the door.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-12 px-4 sm:px-6">
        <div className="section-container max-w-2xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Questions about your first visit
          </h2>
          <dl className="space-y-0">
            {[
              {
                q: 'What do I wear to church in Pretoria North?',
                a: 'Wear whatever makes you comfortable - jeans, casual clothes, whatever you have on. At Fountain of Grace International in Pretoria North, no one will notice or care. Come dressed exactly as you are.',
              },
              {
                q: 'Where do I park at Fountain of Grace International?',
                a: 'The easiest way to get parking directions is to WhatsApp us before you come - we will send you exactly where to go. Message us on +27 75 259 2555 and we will sort it out.',
              },
              {
                q: 'What happens during a Sunday service at Fountain of Grace?',
                a: 'The service runs approximately 90 minutes and includes worship music, a practical teaching, and time to connect with people afterward. Nothing unexpected happens and you will not be asked to do anything you are not ready for.',
              },
              {
                q: 'Will I be singled out or put on the spot at church?',
                a: 'No. At Fountain of Grace International, visitors are never asked to stand up, introduce themselves to the room, or respond publicly in any way. You are welcome to stay quiet for your entire first visit.',
              },
              {
                q: 'What time should I arrive for the Sunday service in Pretoria North?',
                a: 'Arrive 10 to 15 minutes before the service starts to find a comfortable seat. Service starts at 09:00 every Sunday.',
              },
            ].map((item) => (
              <div key={item.q} className="faq-block">
                <dt className="font-semibold text-gray-900 mb-2">{item.q}</dt>
                <dd className="text-[#595959] leading-relaxed">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* GEO BLOCK */}
      <section className="bg-gray-50 py-8 px-4 sm:px-6">
        <div className="section-container">
          <div className="geo-block">
            <p>
              Fountain of Grace International holds Sunday services in Pretoria North starting at
              09:00. First-time visitors are met at the door by name and are never asked to
              participate publicly. The Plan Your Visit form connects new attendees directly to the
              pastoral team via WhatsApp before their first Sunday.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
