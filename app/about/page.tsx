import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Fountain of Grace International | Pretoria North',
  description:
    'Fountain of Grace International is a Christian church and registered NPO in Pretoria North. Founded in 2020 by Pastor Ricardo Zaal. Real people, practical faith.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/about',
  },
  openGraph: {
    title: 'About Fountain of Grace International | Pretoria North',
    description:
      'Fountain of Grace International is a Christian church and registered NPO in Pretoria North. Founded in 2020 by Pastor Ricardo Zaal. Real people, practical faith.',
    type: 'website',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International — Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/about',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Church',
    name: 'Fountain of Grace International',
    description:
      'A church and registered NPO in Pretoria North, South Africa, founded by Pastor Ricardo Zaal in June 2020.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '323 B Danie Theron Street',
      addressLocality: 'Pretoria North',
      addressRegion: 'Gauteng',
      addressCountry: 'ZA',
    },
    telephone: '+27 75 259 2555',
    url: 'https://www.fountaingrace.org',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ricardo Zaal',
    jobTitle: 'Founder and Lead Pastor',
    worksFor: {
      '@type': 'Organization',
      name: 'Fountain of Grace International',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Pretoria North',
      addressCountry: 'ZA',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'About', item: 'https://www.fountaingrace.org/about' },
    ],
  },
]

type Value = {
  title: string
  body: ReactNode
}

const values: Value[] = [
  {
    title: 'You are followed up',
    body: (
      <>
        After your{' '}
        <Link href="/plan-your-visit" className="text-[#008080] font-semibold hover:underline">
          first visit
        </Link>
        , someone contacts you personally — not an email sequence, not a form letter. A real person.
      </>
    ),
  },
  {
    title: 'Teaching connects to life',
    body: (
      <>
        Every{' '}
        <Link href="/sermons" className="text-[#008080] font-semibold hover:underline">
          Sunday message
        </Link>{' '}
        is built around a problem people are actually facing. Not theory. Things you can use in your week.
      </>
    ),
  },
  {
    title: 'Small enough to matter',
    body: 'This is not a crowd. It is a community. When you are not there, someone notices.',
  },
  {
    title: 'NPO registered',
    body: (
      <>
        <Link href="/community-impact" className="text-[#008080] font-semibold hover:underline">
          Fountain of Grace International runs community programs
        </Link>{' '}
        in Pretoria North under NPO registration 316-193. Service extends beyond Sunday.
      </>
    ),
  },
  {
    title: 'No performance culture',
    body: 'You will never be made to feel guilty for where you are in life. Come as you are — that is not a slogan here.',
  },
  {
    title: 'Available leadership',
    body: 'The pastors are not behind appointment systems. If you need to talk, you can reach them directly.',
  },
]

export default function AboutPage() {
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
            About FGI · Pretoria North
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
            The people behind Fountain of Grace International.
          </h1>
          <p className="text-teal-100 text-base leading-relaxed mb-5">
            A small church in Pretoria North led by real people who live in your community.
          </p>
          <Link href="/pastors" className="inline-block border-2 border-white text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-white hover:text-[#008080] transition-colors text-sm">
            Meet the Pastors
          </Link>
        </div>
      </section>

      {/* PASTOR PROFILES */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6">
        <div className="section-container max-w-4xl">
          <article className="grid grid-cols-1 md:grid-cols-5 gap-10 items-start">
            <div className="md:col-span-2">
              <div className="relative w-full h-72 rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/pastor-bio.jpg"
                  alt="Pastor Ricardo Zaal — founder and lead pastor of Fountain of Grace International, Pretoria North"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              <div className="mt-5 bg-white rounded-xl border border-gray-100 p-5 space-y-3">
                <div>
                  <p className="text-xs text-[#7d7d7d] uppercase tracking-wider font-semibold">In ministry since</p>
                  <p className="text-gray-900 font-bold">10 February 2000</p>
                </div>
                <div>
                  <p className="text-xs text-[#7d7d7d] uppercase tracking-wider font-semibold">FGI founded</p>
                  <p className="text-gray-900 font-bold">June 2020</p>
                </div>
                <div>
                  <p className="text-xs text-[#7d7d7d] uppercase tracking-wider font-semibold">NPO registered</p>
                  <p className="text-gray-900 font-bold">16 December 2024</p>
                </div>
                <div>
                  <p className="text-xs text-[#7d7d7d] uppercase tracking-wider font-semibold">Based in</p>
                  <p className="text-gray-900 font-bold">Pretoria North</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-3">
              <div className="inline-block bg-[#FFD600] text-[#1a1a1a] text-xs font-semibold px-3 py-1 rounded-full mb-3">
                Founder &amp; Lead Pastor
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-5">
                <Link href="/pastors" className="hover:text-[#008080] transition-colors">
                  Pastor Ricardo Zaal
                </Link>
              </h2>
              <div className="space-y-4 text-[#7d7d7d] leading-relaxed">
                <p>
                  Pastor Ricardo Zaal is the founder and lead pastor of Fountain of Grace
                  International in Pretoria North, South Africa. He has been serving in ministry
                  since 10 February 2000 — giving him over two decades of consistent leadership,
                  discipleship, and pastoral experience.
                </p>
                <p>
                  He began his ministry journey in Postmasburg, where he gave his life fully to
                  Christ and committed to a life of faith and discipline. He later served at
                  Bread of Life Ministries in Riverlea, Johannesburg — working closely with
                  leadership as the youth leader&apos;s right hand, and eventually as an elder —
                  where he developed a deep foundation in ministry and people development.
                </p>
                <p>
                  After relocating to Pretoria North, he continued in ministry and served as a
                  pastor at Rehoboth Chapel International until 2018. In June 2020, during the
                  Covid-19 season, he founded Fountain of Grace International — a ministry focused
                  on discipleship, restoration, and equipping individuals and families to build
                  stable, purpose-driven lives through faith.
                </p>
                <p>
                  He is a husband and father, committed to building strong families, strong faith,
                  and a lasting legacy. He lives in Pretoria North and is available directly — not
                  behind an appointment wall. You can reach him via WhatsApp or through the{' '}
                  <Link href="/contact" className="text-[#008080] font-semibold hover:underline">
                    contact form on this site
                  </Link>.
                </p>
              </div>
              <div className="mt-4 mb-2">
                <Link href="/pastors" className="text-[#008080] font-semibold text-sm hover:underline">
                  Read the full pastor biography →
                </Link>
              </div>
              <div className="mt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/27752592555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#25d366] text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-[#1ebe5d] transition-colors text-sm text-center"
                >
                  WhatsApp Pastor Ricardo
                </a>
                <Link href="/plan-your-visit" className="btn-outline text-sm text-center">
                  Plan Your Visit
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* WHY FGI EXISTS */}
      <section className="bg-white py-16 px-4 sm:px-6">
        <div className="section-container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Why Fountain of Grace International exists
          </h2>
          <div className="space-y-5 text-[#7d7d7d] leading-relaxed text-lg">
            <p>
              Most churches in Pretoria North are not bad. But many of them are set up for people
              who already know how church works. People who know the songs, know the culture, know
              where to stand and what to say.
            </p>
            <p>
              Fountain of Grace International was built for the people who do not already know. And
              for the people who used to know — but got tired, or hurt, or just stopped finding it
              relevant to what they were actually dealing with.
            </p>
            <p>
              That is the gap this church exists to fill. Practical. Personal. In Pretoria North.
              Small enough that you are known. Structured enough that you are not left on your own.
            </p>
          </div>
          <div className="mt-8">
            <p className="text-sm text-[#7d7d7d]">
              Fountain of Grace International is a registered NPO (No: 316-193) under the
              Nonprofit Organisations Act, 71 of 1997, registered on 16 December 2024. It
              operates community programs in Pretoria North alongside its church ministry,
              serving families across Pretoria North, Karenpark, Akasia, Dorandia,
              Wonderboom, and surrounding Gauteng communities.
            </p>
            <div className="mt-4">
              <Link href="/community-impact" className="btn-teal text-sm">
                See Our Community Programs →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-gray-50 py-14 px-4 sm:px-6">
        <div className="section-container max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
            How we operate
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((val) => (
              <div
                key={val.title}
                className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-sm transition-shadow"
              >
                <h3 className="font-bold text-gray-900 mb-2">{val.title}</h3>
                <p className="text-sm text-[#7d7d7d] leading-relaxed">{val.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#008080] py-14 px-4 sm:px-6">
        <div className="section-container text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Come and meet them this Sunday in Pretoria North.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <Link
              href="/plan-your-visit"
              className="inline-block bg-white text-[#008080] font-bold px-7 py-3.5 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Plan Your Visit
            </Link>
            <Link
              href="/donate"
              className="inline-block bg-[#FFD600] text-[#1a1a1a] font-bold px-7 py-3.5 rounded-lg hover:bg-[#e6c200] transition-colors"
            >
              Support FGI
            </Link>
            <Link
              href="/prayer"
              className="inline-block border-2 border-white text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-white hover:text-[#008080] transition-colors"
            >
              Prayer Request
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
