import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'FAQ | Fountain of Grace International | Pretoria North',
  description:
    'Answers to common questions about Fountain of Grace International in Pretoria North — service times, what to expect, how to donate, prayer requests, and more.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/faq',
  },
  openGraph: {
    title: 'FAQ | Fountain of Grace International | Pretoria North',
    description:
      'Answers to common questions about Fountain of Grace International in Pretoria North — service times, what to expect, how to donate, prayer requests, and more.',
    type: 'website',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International — Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/faq',
  },
}

const faqs = [
  {
    category: 'Visiting for the first time',
    items: [
      {
        q: 'Where is Fountain of Grace International?',
        a: 'We meet at 323 B Danie Theron Street, Pretoria North, Gauteng, 0182. If you need directions, WhatsApp us at +27 75 259 2555 and we will send you a Google Maps pin.',
      },
      {
        q: 'What time are Sunday services?',
        a: 'Every Sunday at 09:00. Arrive 10–15 minutes early to find a seat and meet someone before the service starts. Services last approximately 90 minutes.',
      },
      {
        q: 'Do I need to register before coming?',
        a: 'No. You can walk in. There is no registration, no reservation, and no obligation. Just come.',
      },
      {
        q: 'What should I wear?',
        a: 'Casual. There is no dress code. Come as you are.',
      },
      {
        q: 'Is there parking?',
        a: 'Yes. If you are not sure where to park, WhatsApp us before your visit and we will send you exact directions.',
      },
      {
        q: 'Are children welcome?',
        a: 'Yes. Children are welcome in the service.',
      },
    ],
  },
  {
    category: 'The church',
    items: [
      {
        q: 'Who leads Fountain of Grace International?',
        a: 'The church is founded and led by Pastor Ricardo Zaal. You can learn more on the About page and the Pastors page.',
      },
      {
        q: 'What kind of teaching happens on Sundays?',
        a: 'Practical Bible teaching. Every message is built around a problem people are actually living with — not abstract theology. The goal is that you leave with something you can apply that week.',
      },
      {
        q: 'What languages are services held in?',
        a: 'English and Afrikaans.',
      },
      {
        q: 'Is Fountain of Grace International a registered organisation?',
        a: 'Yes. FGI is a registered Non-Profit Organisation (NPO No: 316-193) registered with the South African Department of Social Development on 16 December 2024.',
      },
    ],
  },
  {
    category: 'Prayer and pastoral care',
    items: [
      {
        q: 'Can I submit a prayer request without attending the church?',
        a: 'Yes. Anyone can submit a prayer request — you do not need to be a member or attendee. Use the prayer request form at fountaingrace.org/prayer.',
      },
      {
        q: 'Is my prayer request kept private?',
        a: 'Yes. Prayer requests are read by the pastoral team and prayed over. They are never posted publicly or shared without your permission.',
      },
      {
        q: 'What if I need urgent pastoral support?',
        a: 'WhatsApp Pastor Ricardo directly at +27 75 259 2555. He responds personally.',
      },
    ],
  },
  {
    category: 'Giving and donations',
    items: [
      {
        q: 'How can I donate to Fountain of Grace International?',
        a: 'You can give via PayPal at paypal.me/FGIPretoria or by EFT to FNB account 63132764499, branch 250655, account name: Fountain of Grace International.',
      },
      {
        q: 'Is my donation tax-deductible?',
        a: 'FGI is registered as a Non-Profit Organisation (NPO 316-193). We do not yet hold Section 18A tax-deductibility status — so donations are not currently tax-deductible. We will update this as soon as that changes.',
      },
      {
        q: 'How are donations used?',
        a: '58% goes to food and basic aid programs. 14% covers program materials and logistics. 28% covers operational costs including admin and compliance. See the Community Impact page for a full breakdown.',
      },
    ],
  },
  {
    category: 'Volunteering',
    items: [
      {
        q: 'Can I volunteer with FGI?',
        a: 'Yes. No prior experience is needed. Fill in the volunteer form at fountaingrace.org/volunteer and we will reach out with next steps.',
      },
      {
        q: 'What volunteer roles are available?',
        a: 'Food programs, administration, events, outreach, and more. Tell us your availability and we will match you to something practical.',
      },
    ],
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.flatMap((cat) =>
      cat.items.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a,
        },
      }))
    ),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://www.fountaingrace.org/faq' },
    ],
  },
]

export default function FAQPage() {
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
            Frequently Asked Questions · Pretoria North
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
            Questions about Fountain of Grace International
          </h1>
          <p className="text-teal-100 text-base leading-relaxed">
            Answers about visiting, giving, prayer, volunteering, and the church in Pretoria North.
          </p>
        </div>
      </section>

      {/* FAQ SECTIONS */}
      <section className="bg-white py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto space-y-14">
          {faqs.map((cat) => (
            <div key={cat.category}>
              <h2 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-3 mb-6">
                {cat.category}
              </h2>
              <dl className="space-y-8">
                {cat.items.map((item) => (
                  <div key={item.q}>
                    <dt className="font-semibold text-gray-900 mb-2">{item.q}</dt>
                    <dd className="text-[#7d7d7d] leading-relaxed text-sm">{item.a}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </section>

      {/* STILL HAVE A QUESTION */}
      <section className="bg-gray-50 py-12 px-4 sm:px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Still have a question?</h2>
          <p className="text-[#7d7d7d] text-sm leading-relaxed mb-6">
            WhatsApp or email us and we will answer directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/27752592555"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#25d366] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#1ebe5d] transition-colors text-sm"
            >
              WhatsApp Us
            </a>
            <Link href="/contact" className="inline-block border-2 border-[#008080] text-[#008080] font-semibold px-6 py-3 rounded-lg hover:bg-[#008080] hover:text-white transition-colors text-sm">
              Contact Page
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#008080] py-12 px-4 sm:px-6">
        <div className="section-container text-center">
          <h2 className="text-xl font-bold text-white mb-3">
            Ready to come and see for yourself?
          </h2>
          <p className="text-teal-100 text-sm mb-6 max-w-md mx-auto">
            Sunday services at Fountain of Grace International in Pretoria North are open to everyone. No registration needed.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/plan-your-visit" className="btn-primary text-sm">
              Plan Your Visit
            </Link>
            <Link href="/prayer" className="inline-block border-2 border-white text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-white hover:text-[#008080] transition-colors text-sm">
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
              For questions, call or WhatsApp +27 75 259 2555 or email info@fountaingrace.org.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
