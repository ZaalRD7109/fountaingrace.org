import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Church in Pretoria North | Fountain of Grace International',
  description:
    'A welcoming Christian church in Pretoria North. Sunday services at 09:00. Practical Bible teaching, real community, personal follow-up. Everyone is welcome.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org',
  },
  openGraph: {
    title: 'Church in Pretoria North | Fountain of Grace International',
    description:
      'A welcoming Christian church in Pretoria North. Sunday services at 09:00. Practical Bible teaching, real community, personal follow-up. Everyone is welcome.',
    type: 'website',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International — Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': ['Church', 'Organization', 'NGO'],
    name: 'Fountain of Grace International',
    description: 'A Christian church and registered NPO in Pretoria North, South Africa.',
    nonprofitStatus: 'RegisteredNonprofit',
    identifier: { '@type': 'PropertyValue', propertyID: 'NPO', value: '316-193' },
    foundingDate: '2020-06',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '323 B Danie Theron Street',
      addressLocality: 'Pretoria North',
      addressRegion: 'Gauteng',
      postalCode: '0182',
      addressCountry: 'ZA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -25.672286342520497,
      longitude: 28.172968674468688,
    },
    telephone: '+27752592555',
    email: 'info@fountaingrace.org',
    url: 'https://www.fountaingrace.org',
    openingHours: 'Su 09:00',
    logo: 'https://www.fountaingrace.org/logo-square.png',
    image: 'https://www.fountaingrace.org/og-image.jpg',
    sameAs: [
      'https://www.facebook.com/FGIPta/',
      'https://www.youtube.com/@fgipta',
      'https://www.tiktok.com/@fountainofgraceintl',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Fountain of Grace International',
    url: 'https://www.fountaingrace.org',
    description: 'A Christian church and registered NPO in Pretoria North, South Africa.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What church is in Pretoria North?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Fountain of Grace International is a church in Pretoria North, South Africa. It holds weekly Sunday services focused on practical teaching connected to everyday challenges. Anyone is welcome to attend — no prior church experience required.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is there a welcoming church in Pretoria North for first-timers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Fountain of Grace International in Pretoria North is designed for people attending church for the first time. Visitors are met at the door by name, never singled out publicly, and followed up with personally after their visit.',
        },
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
    ],
  },
]

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="bg-[#008080] text-white pt-10 pb-10 px-4 sm:px-6">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-[#1a1a1a] font-semibold text-xs uppercase tracking-wider mb-3">
            Pretoria North · Every Sunday at 09:00
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
            A church in Pretoria North built for real people.
          </h1>
          <p className="text-white text-base leading-relaxed mb-6">
            Fountain of Grace International is a Christian church in Pretoria North where you are personally
            welcomed, genuinely followed up with, and taught things that connect to your life right now.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/plan-your-visit" className="btn-primary text-sm">
              Plan Your Visit
            </Link>
            <Link href="/sunday-services" className="inline-block border-2 border-white text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-white hover:text-[#008080] transition-colors text-sm">
              Sunday Services
            </Link>
            <a
              href="https://wa.me/27752592555"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#25d366] text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-[#1ebe5d] transition-colors text-sm"
            >
              WhatsApp Us
            </a>
          </div>
          <p className="text-white text-xs mt-5">
            323 B Danie Theron Street, Pretoria North · +27 75 259 2555
          </p>
        </div>
      </section>

      {/* WHAT YOUR FIRST SUNDAY FEELS LIKE */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-md">
              <Image
                src="/sunday-service.webp"
                alt="Sunday service at Fountain of Grace International, Pretoria North"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
                What Your First Sunday Actually Feels Like
              </h2>
              <div className="space-y-4 text-[#7d7d7d] leading-relaxed">
                <p>
                  You arrive. Someone meets you at the door — not a greeter handing out a bulletin,
                  an actual person who is expecting you. You sit where you are comfortable. No one
                  calls you to the front. No one makes you introduce yourself to the room.
                </p>
                <p>
                  The service runs about <Link href="/what-to-expect" className="text-[#008080] font-semibold hover:underline">90 minutes</Link>. The <Link href="/sermons" className="text-[#008080] font-semibold hover:underline">teaching connects to real problems</Link>. After
                  the service, people talk to you. Because this church is small enough that
                  everyone matters.
                </p>
                <div className="bg-white border border-gray-200 rounded-lg px-5 py-4 mt-4">
                  <p className="text-sm font-semibold text-gray-700">
                    Service Time: <span className="text-[#008080]">09:00 every Sunday</span>
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Address: 323 B Danie Theron Street, Pretoria North
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <Link href="/what-to-expect" className="text-[#008080] font-semibold text-sm hover:underline">
                  See exactly what to expect on your first Sunday →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY PEOPLE COME */}
      <section className="bg-white py-16 px-4 sm:px-6">
        <div className="section-container">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">
            Church in Pretoria North that is different in three specific ways
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                icon: '🤝',
                title: 'You are met by name',
                body: 'Before you arrive, we send you a WhatsApp message. When you get there, someone is actually looking for you. You will not walk in and feel invisible.',
              },
              {
                icon: '📞',
                title: 'We follow up — personally',
                body: 'After your first visit, someone reaches out. Not an automated email. An actual person who noticed you were there and wants to know if you are coming back.',
              },
              {
                icon: '🗣️',
                title: 'Teaching that connects to real life',
                body: "Every Sunday message is built around a problem people are actually living. Not theory. Not performance. Things that connect to your week.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-3" aria-hidden="true">{card.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-[#7d7d7d] text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEET THE PASTORS */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#008080] font-semibold text-sm uppercase tracking-wider mb-3">
                The People Behind FGI
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
                Meet the Pastors
              </h2>
              <div className="space-y-4 text-[#7d7d7d] leading-relaxed">
                <p>
                  <strong className="text-gray-800">Pastor Ricardo Zaal</strong> founded Fountain
                  of Grace International in June 2020 because he knew what it felt like to need a
                  community and not find one. With over two decades in ministry — starting in
                  Postmasburg, then Johannesburg, then Pretoria North — he built FGI for the people
                  who are still looking.
                </p>
                <p>
                  His ministry is grounded in practical teaching, personal responsibility, and
                  equipping people to lead in their own lives. He is a husband and father. He is
                  accessible — not behind an appointment wall.
                </p>
                <p>
                  Fountain of Grace International holds NPO registration 316-193, and the
                  pastoral team is directly involved in the community programs it runs.
                </p>
              </div>
              <div className="mt-6">
                <Link href="/about" className="btn-outline text-sm">
                  Read Their Full Story
                </Link>
              </div>
            </div>

            <div className="relative w-full h-72 rounded-xl overflow-hidden shadow-md">
              <Image
                src="/pastor-ricardo.webp"
                alt="Pastor Ricardo Zaal, founder and lead pastor of Fountain of Grace International, Pretoria North"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* NPO CALLOUT */}
      <section className="bg-[#008080] text-white py-14 px-4 sm:px-6">
        <div className="section-container text-center">
          <p className="text-[#1a1a1a] font-semibold text-sm uppercase tracking-wider mb-3">
            Registered NPO · Pretoria North
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-5">
            We Are Also a Registered NPO
          </h2>
          <p className="text-white text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Fountain of Grace International holds NPO registration 316-193. We run community
            programs in Pretoria North that put practical support directly into the hands of people
            who need it.
          </p>
          <Link
            href="/community-impact"
            className="inline-block bg-white text-[#008080] font-semibold px-7 py-3 rounded-lg hover:bg-teal-50 transition-colors"
          >
            Learn About Our Community Work →
          </Link>
        </div>
      </section>

      {/* AEO FAQ BLOCK */}
      <section className="bg-white py-16 px-4 sm:px-6">
        <div className="section-container max-w-2xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Common questions about Fountain of Grace International
          </h2>
          <dl className="space-y-0">
            <div className="faq-block">
              <dt className="font-semibold text-gray-900 mb-2 text-base">
                What church is in Pretoria North?
              </dt>
              <dd className="text-[#7d7d7d] leading-relaxed">
                Fountain of Grace International is a church in Pretoria North, South Africa. It
                holds weekly Sunday services focused on practical teaching connected to everyday
                challenges. Anyone is welcome to attend — no prior church experience required.
              </dd>
            </div>
            <div className="faq-block">
              <dt className="font-semibold text-gray-900 mb-2 text-base">
                Is there a welcoming church in Pretoria North for first-timers?
              </dt>
              <dd className="text-[#7d7d7d] leading-relaxed">
                Fountain of Grace International in Pretoria North is designed for people attending
                church for the first time. Visitors are met at the door by name, never singled out
                publicly, and followed up with personally after their visit.
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="bg-[#008080] py-14 px-4 sm:px-6">
        <div className="section-container text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to come on Sunday?
          </h2>
          <p className="text-white text-lg mb-8 max-w-xl mx-auto">
            Plan your visit — we will send you a WhatsApp message before you arrive so you know
            exactly what to expect.
          </p>
          <Link
            href="/plan-your-visit"
            className="inline-block bg-white text-[#008080] font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors shadow-sm text-base"
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
              Fountain of Grace International is a registered Christian church and NPO located in
              Pretoria North, South Africa. The church offers weekly services focused on practical
              teaching connected to everyday challenges, and operates community outreach programs
              under its NPO registration. It serves both individuals seeking a local church
              community and organisations looking to partner with a verified non-profit in the
              Pretoria North area.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
