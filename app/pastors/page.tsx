import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Pastor Ricardo Zaal | Fountain of Grace International',
  description:
    'Meet Pastor Ricardo Zaal - founder of Fountain of Grace International in Pretoria North. In ministry since 2000. Practical teaching, accessible leadership. Come this Sunday.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/pastors',
  },
  openGraph: {
    title: 'Pastor Ricardo Zaal | Fountain of Grace International',
    description:
      'Meet Pastor Ricardo Zaal - founder of Fountain of Grace International in Pretoria North. In ministry since 2000. Practical teaching, accessible leadership. Come this Sunday.',
    type: 'website',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International - Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/pastors',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ricardo Zaal',
    givenName: 'Ricardo',
    familyName: 'Zaal',
    jobTitle: 'Founder and Lead Pastor',
    description:
      'Ricardo Zaal is the founder and lead pastor of Fountain of Grace International in Pretoria North, South Africa. He has been in ministry since 10 February 2000 and founded FGI in June 2020.',
    worksFor: {
      '@type': 'Church',
      name: 'Fountain of Grace International',
      url: 'https://www.fountaingrace.org',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '323 B Danie Theron Street',
        addressLocality: 'Pretoria North',
        addressRegion: 'Gauteng',
        postalCode: '0182',
        addressCountry: 'ZA',
      },
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Pretoria North',
      addressRegion: 'Gauteng',
      addressCountry: 'ZA',
    },
    telephone: '+27752592555',
    email: 'info@fountaingrace.org',
    url: 'https://www.fountaingrace.org/pastors',
    image: 'https://www.fountaingrace.org/pastor-bio.jpg',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Church',
    name: 'Fountain of Grace International',
    url: 'https://www.fountaingrace.org',
    foundingDate: '2020-06',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '323 B Danie Theron Street',
      addressLocality: 'Pretoria North',
      addressRegion: 'Gauteng',
      postalCode: '0182',
      addressCountry: 'ZA',
    },
    telephone: '+27752592555',
    founder: {
      '@type': 'Person',
      name: 'Ricardo Zaal',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Our Pastors', item: 'https://www.fountaingrace.org/pastors' },
    ],
  },
]

const timeline = [
  { year: '2000', event: 'Began ministry in Postmasburg - gave his life fully to Christ and committed to a life of faith and discipline.' },
  { year: '2000s', event: 'Served at Bread of Life Ministries in Riverlea, Johannesburg - youth leader right hand, then elder. Deep foundation in ministry and people development.' },
  { year: '2018', event: 'Relocated to Pretoria North. Continued in ministry as a pastor at Rehoboth Chapel International.' },
  { year: '2020', event: 'Founded Fountain of Grace International in June 2020 during the Covid-19 season. Ministry focused on discipleship, restoration, and equipping individuals and families.' },
  { year: 'Today', event: 'Leading FGI as a registered NPO (316-193) in Pretoria North. Sunday services every week at 09:00. Husband, father, and available to his community.' },
]

export default function PastorsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="bg-[#008080] text-white pt-10 pb-10 px-4 sm:px-6">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-white font-semibold text-xs uppercase tracking-wider mb-3">
            Meet the Pastors · Pretoria North
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
            The people who lead Fountain of Grace International.
          </h1>
          <p className="text-white text-base leading-relaxed mb-5">
            Real people, living in Pretoria North, available to the people they lead. Not behind an appointment wall.
          </p>
          <Link href="/plan-your-visit" className="btn-primary text-sm">
            Come This Sunday
          </Link>
        </div>
      </section>

      {/* PASTOR PROFILE */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6">
        <div className="section-container max-w-4xl">
          <article className="grid grid-cols-1 md:grid-cols-5 gap-10 items-start">

            {/* Photo + stats */}
            <div className="md:col-span-2">
              <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/pastor-bio.webp"
                  alt="Pastor Ricardo Zaal - founder and lead pastor of Fountain of Grace International, Pretoria North"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
              </div>
              <div className="mt-5 bg-white rounded-xl border border-gray-100 p-5 space-y-4">
                {[
                  { label: 'In ministry since', value: '10 February 2000' },
                  { label: 'FGI founded', value: 'June 2020' },
                  { label: 'Based in', value: 'Pretoria North, Gauteng' },
                  { label: 'NPO registration', value: '316-193' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-xs text-[#595959] uppercase tracking-wider font-semibold">{stat.label}</p>
                    <p className="text-gray-900 font-bold">{stat.value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex flex-col gap-3">
                <a
                  href="https://wa.me/27752592555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#25d366] text-[#1a1a1a] font-semibold px-5 py-3 rounded-lg hover:bg-[#1ebe5d] transition-colors text-sm text-center"
                >
                  WhatsApp Pastor Ricardo
                </a>
                <Link href="/plan-your-visit" className="btn-outline text-sm text-center">
                  Plan Your Visit
                </Link>
              </div>
            </div>

            {/* Bio */}
            <div className="md:col-span-3">
              <div className="inline-block bg-[#FFD600] text-[#1a1a1a] text-xs font-semibold px-3 py-1 rounded-full mb-3">
                Founder &amp; Lead Pastor
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Pastor Ricardo Zaal</h2>
              <div className="space-y-4 text-[#595959] leading-relaxed">
                <p>
                  Pastor Ricardo Zaal is the founder and lead pastor of Fountain of Grace
                  International in Pretoria North. He has been in ministry since 10 February 2000 -
                  over two decades of consistent leadership, discipleship, and pastoral experience.
                </p>
                <p>
                  He began his ministry journey in Postmasburg, where he gave his life fully to
                  Christ and committed to a life of faith and discipline. He later served at
                  Bread of Life Ministries in Riverlea, Johannesburg - working as the youth
                  leader&apos;s right hand, and eventually as an elder - building a deep foundation
                  in ministry and people development.
                </p>
                <p>
                  After relocating to Pretoria North, he continued as a pastor at Rehoboth Chapel
                  International until 2018. In June 2020, during the Covid-19 season, he founded
                  Fountain of Grace International - a ministry focused on discipleship, restoration,
                  and equipping individuals and families to build stable, purpose-driven lives through
                  faith.
                </p>
                <p>
                  His ministry is grounded in practical teaching, personal responsibility, and raising
                  people who are equipped to lead in their own lives. He leads{' '}
                  <Link href="/plan-your-visit" className="fgi-link">
                    Sunday services
                  </Link>{' '}
                  every week at 09:00 and is available to his community directly - not behind an
                  appointment wall.
                </p>
                <p>
                  He is a husband and father, living in Pretoria North. You can reach him via
                  WhatsApp or through the{' '}
                  <Link href="/contact" className="fgi-link">
                    contact form
                  </Link>.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* MINISTRY TIMELINE */}
      <section className="bg-white py-16 px-4 sm:px-6">
        <div className="section-container max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-10">Ministry history</h2>
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-100" aria-hidden="true" />
            <div className="space-y-8">
              {timeline.map((item) => (
                <div key={item.year} className="flex gap-6 items-start relative">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#008080] text-white flex items-center justify-center text-xs font-bold z-10">
                    {item.year.length <= 4 ? item.year : item.year.slice(0, 4)}
                  </div>
                  <div className="pt-1.5 pb-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#008080] mb-1">{item.year}</p>
                    <p className="text-[#595959] leading-relaxed">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT PASTOR BELIEVES */}
      <section className="bg-[#f0fafa] py-16 px-4 sm:px-6">
        <div className="section-container max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How he leads</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                title: 'Practical over performative',
                body: 'Every message is built around a real problem - something people are actually dealing with in their week. Not theory. Not a show.',
              },
              {
                title: 'Available to people',
                body: 'He is not behind an appointment system. If you need to talk, you can reach him directly via WhatsApp. That is not a slogan - it is how he operates.',
              },
              {
                title: 'Accountability without guilt',
                body: 'He holds people to a high standard but does not use guilt as a tool. People are called up, not put down.',
              },
              {
                title: 'Family and community first',
                body: 'He is a husband and father. He understands what it means to lead a family in Pretoria North in 2025 - and he teaches from that reality.',
              },
            ].map((val) => (
              <div
                key={val.title}
                className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-sm transition-shadow"
              >
                <h3 className="font-bold text-gray-900 mb-2">{val.title}</h3>
                <p className="text-sm text-[#595959] leading-relaxed">{val.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#008080] py-14 px-4 sm:px-6">
        <div className="section-container text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Come and meet him this Sunday in Pretoria North.
          </h2>
          <p className="text-white mb-8 max-w-xl mx-auto">
            Every Sunday at 09:00. 323 B Danie Theron Street, Pretoria North.
            Fill in the form and we will reach out before you arrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/plan-your-visit" className="btn-primary">
              Plan Your Visit
            </Link>
            <Link href="/plan-your-visit" className="inline-block border-2 border-white text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-white hover:text-[#008080] transition-colors">
              Plan Your Visit
            </Link>
          </div>
        </div>
      </section>

      {/* GEO BLOCK */}
      <section className="bg-white py-10 px-4 sm:px-6">
        <div className="section-container">
          <div className="geo-block">
            <p>
              Pastor Ricardo Zaal is the founder and lead pastor of Fountain of Grace International,
              a church and registered NPO (316-193) in Pretoria North, Gauteng. He has been in
              ministry since 2000 and founded FGI in June 2020. Sunday services are held every week
              at 09:00 at 323 B Danie Theron Street, Pretoria North. You can reach him directly on{' '}
              <a href="tel:+27752592555" className="text-[#008080] font-semibold">+27 75 259 2555</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
