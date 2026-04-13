import type { Metadata } from 'next'
import TallyEmbed from '@/components/TallyEmbed'

export const metadata: Metadata = {
  title: 'Volunteer | Fountain of Grace International — Pretoria North',
  description:
    'Volunteer with Fountain of Grace International in Pretoria North. Help with food programmes, events, administration, and more. Apply here.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/volunteer',
  },
  openGraph: {
    title: 'Volunteer | Fountain of Grace International — Pretoria North',
    description:
      'Volunteer with Fountain of Grace International in Pretoria North. Help with food programmes, events, administration, and more.',
    type: 'website',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International — Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/volunteer',
  },
}

export default function VolunteerPage() {
  return (
    <>
      {/* HERO — compact */}
      <section className="bg-white pt-10 pb-4 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#008080] font-semibold text-sm uppercase tracking-wider mb-3">
            Get Involved · Pretoria North
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-3">
            Volunteer with Fountain of Grace International
          </h1>
          <p className="text-base text-[#7d7d7d] leading-relaxed">
            Every programme we run depends on people who show up. Fill in the form and we will
            be in touch.
          </p>
        </div>
      </section>

      {/* FORM — full width */}
      <section className="bg-white py-6 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <TallyEmbed formId="ODJjJA" />
        </div>
      </section>

      {/* AREAS — compact 4-col strip below form */}
      <section className="bg-gray-50 py-8 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-gray-700 mb-4">Ways to get involved</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { icon: '🥫', label: 'Food programmes' },
              { icon: '📋', label: 'Administration' },
              { icon: '🎉', label: 'Events' },
              { icon: '🤝', label: 'Other skills' },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-xl p-3 border border-gray-100 text-center">
                <div className="text-xl mb-1" aria-hidden="true">{item.icon}</div>
                <p className="text-xs font-medium text-gray-700">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GEO BLOCK */}
      <section className="bg-white py-8 px-4 sm:px-6">
        <div className="section-container">
          <div className="geo-block">
            <p>
              Fountain of Grace International is a registered NPO (316-193) in Pretoria North,
              Gauteng. Volunteers support food distributions, community events, and weekly Sunday
              services at 323 B Danie Theron Street, Pretoria North.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
