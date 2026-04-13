import type { Metadata, ReactNode } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Meet the Pastors | Fountain of Grace International — Pretoria North',
  description:
    'Meet the team behind Fountain of Grace International in Pretoria North. A small, accessible church led by real people who live in your community.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/about',
  },
  openGraph: {
    title: 'Meet the Pastors | Fountain of Grace International — Pretoria North',
    description:
      'Meet the team behind Fountain of Grace International in Pretoria North.',
    type: 'website',
    images: [
      {
        url: 'https://www.fountaingrace.org/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    url: 'https://www.fountaingrace.org/about',
  },
}

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
        , someone contacts you personally.
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
        is built around real problems people face.
      </>
    ),
  },
  {
    title: 'Small enough to matter',
    body: 'When you are not there, someone notices.',
  },
  {
    title: 'NPO registered',
    body: (
      <>
        <Link href="/community-impact" className="text-[#008080] font-semibold hover:underline">
          Community programs
        </Link>{' '}
        run actively in Pretoria North.
      </>
    ),
  },
  {
    title: 'No performance culture',
    body: 'Come as you are.',
  },
  {
    title: 'Available leadership',
    body: 'You can reach the pastor directly.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* HERO — MATCHES COMMUNITY STYLE */}
      <section className="bg-[#008080] text-white pt-16 pb-14 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">

          <p className="text-teal-200 font-semibold text-sm uppercase tracking-wider mb-4">
            About FGI · Pretoria North
          </p>

          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
            The people behind Fountain of Grace International.
          </h1>

          <p className="text-teal-100 text-lg leading-relaxed mb-8">
            A small church in Pretoria North led by real people who live in your community.
          </p>

          <div className="inline-block bg-white text-[#008080] rounded-xl px-8 py-5 shadow-sm text-left">

            <p className="font-extrabold text-lg">
              Pastor Ricardo Zaal
            </p>

            <p className="text-sm font-medium text-[#7d7d7d] mt-1">
              Founder & Lead Pastor
            </p>

            <p className="text-xs text-gray-400 mt-1">
              In ministry since 10 February 2000
            </p>

            <div className="mt-4">
              <Link href="/pastors" className="text-[#008080] font-semibold text-sm hover:underline">
                Read full biography →
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* PASTOR SECTION */}
      <section className="bg-white py-16 px-4 sm:px-6">
        <div className="section-container max-w-4xl grid md:grid-cols-2 gap-10">

          <div className="relative h-80 rounded-xl overflow-hidden">
            <Image
              src="/pastor-bio.jpg"
              alt="Pastor Ricardo Zaal"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-4 text-[#7d7d7d] leading-relaxed">
            <p>
              Pastor Ricardo Zaal is the founder and lead pastor of Fountain of Grace International.
            </p>
            <p>
              He has been serving in ministry since 2000 with over two decades of leadership experience.
            </p>
            <p>
              His focus is practical teaching, strong families, and building people who can lead their own lives.
            </p>
            <p>
              You can reach him directly through the{' '}
              <Link href="/contact" className="text-[#008080] font-semibold hover:underline">
                contact page
              </Link>.
            </p>

            <div className="pt-4">
              <Link href="/plan-your-visit" className="btn-teal text-sm">
                Plan Your Visit
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* WHY SECTION */}
      <section className="bg-[#f0fafa] py-16 px-4 sm:px-6">
        <div className="section-container max-w-3xl">

          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Why this church exists
          </h2>

          <div className="space-y-4 text-[#7d7d7d]">
            <p>
              Many people feel lost in church environments.
            </p>
            <p>
              This church exists for people who need something real.
            </p>
            <p>
              Simple. Practical. Personal.
            </p>
          </div>

        </div>
      </section>

      {/* VALUES */}
      <section className="bg-white py-16 px-4 sm:px-6">
        <div className="section-container max-w-4xl">

          <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">
            How it works
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="border rounded-xl p-5">
                <h3 className="font-bold mb-2">{v.title}</h3>
                <p className="text-sm text-[#7d7d7d]">{v.body}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#008080] py-14 px-4 sm:px-6 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Come this Sunday.
        </h2>

        <Link href="/plan-your-visit" className="btn-primary">
          Plan Your Visit
        </Link>
      </section>
    </>
  )
}