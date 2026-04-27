import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Before You Walk In: What to Bring to Church This Sunday | Fountain of Grace International',
  description: 'Most people prepare what they wear on Sunday. Very few prepare what they carry inside. A five-minute read from Pastor Ricardo Zaal before this Sunday.',
  robots: 'index, follow',
  alternates: { canonical: 'https://www.fountaingrace.org/devotional/prepare-your-heart-before-you-walk-in' },
  openGraph: {
    title: 'Before You Walk In: What to Bring to Church This Sunday',
    description: 'Most people prepare what they wear on Sunday. Very few prepare what they carry inside.',
    type: 'article',
    url: 'https://www.fountaingrace.org/devotional/prepare-your-heart-before-you-walk-in',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International' }],
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Before You Walk In: What to Bring to Church This Sunday',
    description: 'Most people prepare what they wear on Sunday. Very few prepare what they carry inside.',
    author: { '@type': 'Person', name: 'Pastor Ricardo Zaal' },
    publisher: {
      '@type': 'Organization',
      name: 'Fountain of Grace International',
      url: 'https://www.fountaingrace.org',
    },
    url: 'https://www.fountaingrace.org/devotional/prepare-your-heart-before-you-walk-in',
    inLanguage: 'en',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Devotional', item: 'https://www.fountaingrace.org/devotional' },
      { '@type': 'ListItem', position: 3, name: 'Before You Walk In', item: 'https://www.fountaingrace.org/devotional/prepare-your-heart-before-you-walk-in' },
    ],
  },
]

export default function PrepareYourHeartPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="bg-[#008080] text-white pt-10 pb-10 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-white font-semibold text-xs uppercase tracking-wider mb-3">
            Devotional - Sunday Prep
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
            Before You Walk In: What to Bring to Church This Sunday
          </h1>
          <p className="text-white text-base leading-relaxed">
            By Pastor Ricardo Zaal - Fountain of Grace International, Pretoria North
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-white py-14 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">

          <p className="text-[#595959] text-base leading-relaxed mb-6">
            Most people spend time on Saturday preparing what they are going to wear on Sunday.
            Very few spend five minutes preparing what they are going to carry inside when they walk through the door.
          </p>

          <p className="text-[#595959] text-base leading-relaxed mb-8">
            Those five minutes are the difference between sitting in a church service and actually receiving something from it.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Leave your performance at the door</h2>

          <p className="text-[#595959] text-base leading-relaxed mb-6">
            There is a version of church attendance that is mostly about being seen to be there.
            Saying the right words. Knowing the right songs. Looking like someone who has it together.
          </p>

          <p className="text-[#595959] text-base leading-relaxed mb-8">
            That version exhausts people and produces very little. Church is not a performance hall.
            It is a field hospital for people who know they are not okay and have decided to do something about it.
            The only thing you need to bring is honesty about where you actually are right now.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Bring your actual question</h2>

          <p className="text-[#595959] text-base leading-relaxed mb-6">
            Before Sunday, take two minutes to identify the one thing that is sitting heaviest on you right now.
            Not the one you are supposed to be worried about. The actual one.
          </p>

          <p className="text-[#595959] text-base leading-relaxed mb-8">
            Write it down if you need to. Bring it with you. You will be surprised how often the message
            you hear on Sunday is aimed precisely at the question you carried in the door.
            That is not coincidence. That is what happens when a church is built around real problems
            instead of religious schedules.
          </p>

          <blockquote className="border-l-4 border-[#FFD600] pl-5 py-2 my-8 bg-[#fffdf0] rounded-r-xl">
            <p className="text-gray-800 font-semibold italic leading-relaxed">
              "Come to me, all you who are weary and burdened, and I will give you rest."
            </p>
            <cite className="text-sm text-[#595959] not-italic mt-2 block">- Matthew 11:28</cite>
          </blockquote>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Bring expectation - not certainty</h2>

          <p className="text-[#595959] text-base leading-relaxed mb-6">
            There is a difference between walking in expecting nothing and walking in not knowing what to expect.
            The first closes you. The second opens you.
          </p>

          <p className="text-[#595959] text-base leading-relaxed mb-8">
            You do not have to be certain about God. You do not have to have your theology figured out.
            You do not even have to be sure you believe. You just have to be willing to hear something
            that might shift something. That is enough to start with.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">This Sunday at FGI</h2>

          <p className="text-[#595959] text-base leading-relaxed mb-6">
            <Link href="/sunday-services" className="fgi-link">Sunday services at Fountain of Grace International</Link> begin
            at 09:00. Come 10 minutes early and someone will meet you at the door.
            323 B Danie Theron Street, Pretoria North.
          </p>

          <p className="text-[#595959] text-base leading-relaxed mb-8">
            If you have never been before, the <Link href="/what-to-expect" className="fgi-link">what to expect guide</Link> tells
            you exactly what Sunday looks like from the moment you park to the moment you leave.
            Or <Link href="/plan-your-visit" className="fgi-link">plan your visit</Link> and we will reach out before Sunday.
          </p>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#008080] py-12 px-4 sm:px-6">
        <div className="section-container text-center">
          <h2 className="text-xl font-bold text-white mb-3">
            See you Sunday
          </h2>
          <p className="text-white text-sm mb-6 max-w-md mx-auto">
            09:00 every Sunday. 323 B Danie Theron Street, Pretoria North. No registration needed.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/plan-your-visit" className="btn-primary text-sm">
              Plan Your Visit
            </Link>
            <a
              href="https://wa.me/27752592555"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-white text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-white hover:text-[#008080] transition-colors text-sm"
            >
              WhatsApp Us
            </a>
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
              For questions, WhatsApp +27 75 259 2555 or email info@fountaingrace.org.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
