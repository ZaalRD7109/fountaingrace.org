import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'What We Believe | Fountain of Grace International | Pretoria North',
  description:
    'The core beliefs of Fountain of Grace International in Pretoria North. What we believe about God, the Bible, Jesus, the Holy Spirit, salvation, and how faith works in real life.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/what-we-believe',
  },
  openGraph: {
    title: 'What We Believe | Fountain of Grace International | Pretoria North',
    description:
      'The core beliefs of Fountain of Grace International in Pretoria North. What we believe about God, the Bible, Jesus, the Holy Spirit, salvation, and how faith works in real life.',
    type: 'website',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International - What We Believe' }],
    url: 'https://www.fountaingrace.org/what-we-believe',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Church',
    name: 'Fountain of Grace International',
    url: 'https://www.fountaingrace.org',
    description: 'A Christian church and registered NPO in Pretoria North, South Africa.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '323 B Danie Theron Street',
      addressLocality: 'Pretoria North',
      addressRegion: 'Gauteng',
      postalCode: '0182',
      addressCountry: 'ZA',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What does Fountain of Grace International believe about the Bible?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We believe the Bible is the inspired Word of God - God-breathed, true, and the foundation for everything we teach and how we live. We use the King James Version.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does Fountain of Grace International believe about salvation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We believe salvation comes by grace through faith in Jesus Christ alone - not by effort, performance, or religious routine. Anyone who calls on the name of Jesus is saved.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does Fountain of Grace International believe about the Holy Spirit?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We believe the Holy Spirit is active today - guiding, empowering, and equipping believers. We believe in spiritual gifts including prophecy, healing, and the gift of tongues.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does Fountain of Grace International believe about Jesus Christ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We believe Jesus Christ is the Son of God - born of a virgin, lived without sin, died on the cross for our sins, rose from the dead on the third day, and is coming again.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Fountain of Grace International a Pentecostal or charismatic church?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Fountain of Grace International is a non-denominational, Spirit-filled Christian church. We move in the gifts of the Holy Spirit and believe in the prophetic, but we are not affiliated with any Pentecostal denomination.',
        },
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'What We Believe', item: 'https://www.fountaingrace.org/what-we-believe' },
    ],
  },
]

const beliefs = [
  {
    title: 'The Bible',
    scripture: '"All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness." - 2 Timothy 3:16',
    body: 'We believe the Bible is the inspired Word of God - not a collection of opinions, but the living voice of God recorded for every generation. It is the foundation for everything we teach and how we live. We use the King James Version.',
  },
  {
    title: 'God',
    scripture: '"Hear, O Israel: The LORD our God is one LORD." - Deuteronomy 6:4',
    body: 'We believe in one God who exists as three distinct persons - Father, Son, and Holy Spirit. Not three gods. One God. Three expressions of the same perfect being. He is eternal, all-knowing, all-powerful, and deeply personal.',
  },
  {
    title: 'Jesus Christ',
    scripture: '"For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life." - John 3:16',
    body: 'We believe Jesus Christ is the Son of God - born of a virgin, lived without sin, crucified for the sins of the world, and raised from the dead on the third day. He is alive now. He is coming again. There is no other name by which we are saved.',
  },
  {
    title: 'The Holy Spirit',
    scripture: '"The Spirit of the Lord GOD is upon me; because the LORD hath anointed me to preach good tidings unto the meek; he hath sent me to bind up the brokenhearted." - Isaiah 61:1',
    body: 'We believe the Holy Spirit is active and present today - not a historical force but a living person who guides, comforts, and empowers believers. We move in the gifts of the Spirit: prophecy, healing, discernment, and tongues. We believe God still speaks.',
  },
  {
    title: 'Salvation',
    scripture: '"For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast." - Ephesians 2:8-9',
    body: 'We believe salvation is a gift - not earned by how good you are, how religious you are, or what you have done or not done. It is received by faith in Jesus Christ. You do not have to clean yourself up before you come. You come as you are and He does the work.',
  },
  {
    title: 'Prayer',
    scripture: '"The effectual fervent prayer of a righteous man availeth much." - James 5:16',
    body: 'We believe prayer is direct access to God - not a ritual, not a formula, not something reserved for pastors. Every believer can approach God personally. Prayer changes things. We pray for healing, for breakthrough, for families, and for our community.',
  },
  {
    title: 'The Church',
    scripture: '"For where two or three are gathered together in my name, there am I in the midst of them." - Matthew 18:20',
    body: 'We believe the church is people, not a building. It is a community of believers who carry each other, grow together, and serve the world around them. At FGI, community is small enough that you are known - not a face in a crowd.',
  },
  {
    title: 'Serving Others',
    scripture: '"For I was an hungred, and ye gave me meat: I was thirsty, and ye gave me drink: I was a stranger, and ye took me in." - Matthew 25:35',
    body: 'We believe faith without action is empty. Fountain of Grace International runs community programs in Pretoria North - food support, outreach, and restoration - because what we believe on Sunday must show up in the streets by Monday.',
  },
]

export default function WhatWeBelievePage() {
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
            What We Believe - Fountain of Grace International
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
            Faith that connects to real life.
          </h1>
          <p className="text-white text-base leading-relaxed">
            These are the core beliefs that shape everything we teach, every Sunday, in Pretoria North.
            Plain language. No religious jargon. Just what we actually believe and why it matters to you.
          </p>
        </div>
      </section>

      {/* BELIEFS GRID */}
      <section className="bg-white py-16 px-4 sm:px-6">
        <div className="section-container max-w-4xl">
          <div className="space-y-10">
            {beliefs.map((belief, i) => (
              <div
                key={belief.title}
                className="bg-gray-50 rounded-xl border border-gray-100 p-6 sm:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#008080] text-white flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-gray-900 mb-3">{belief.title}</h2>
                    <blockquote className="border-l-4 border-[#FFD600] pl-4 mb-4">
                      <p className="text-sm text-[#595959] italic leading-relaxed">{belief.scripture}</p>
                    </blockquote>
                    <p className="text-[#595959] leading-relaxed">{belief.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - for AI search and featured snippets */}
      <section className="bg-gray-50 py-14 px-4 sm:px-6">
        <div className="section-container max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Questions people ask about FGI</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Is FGI Pentecostal or charismatic?</h3>
              <p className="text-[#595959] leading-relaxed">
                Neither denomination, but Spirit-filled. We are a non-denominational Christian church. We believe in the gifts of the Holy Spirit - prophecy, healing, tongues - and we move in them. But we are not under any Pentecostal denomination. We follow the Bible and the Spirit, not a denominational structure.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Do I have to agree with everything to visit?</h3>
              <p className="text-[#595959] leading-relaxed">
                No. Many people who attend FGI are still working out what they believe. That is fine here. You are not required to sign a statement of faith before you walk in the door. Come, listen, ask questions. These beliefs describe where we stand - not a test you have to pass.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Which Bible translation does FGI use?</h3>
              <p className="text-[#595959] leading-relaxed">
                We use the King James Version (KJV). Every scripture read from the pulpit and published on this website is KJV.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Where can I hear what FGI teaches?</h3>
              <p className="text-[#595959] leading-relaxed">
                Every Sunday message is available on this site and on our YouTube channel. The best way to understand what we believe is to listen to the teaching - that is where belief becomes practical.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#008080] py-14 px-4 sm:px-6">
        <div className="section-container text-center">
          <h2 className="text-2xl font-bold text-white mb-2">
            Come and see what this looks like in practice.
          </h2>
          <p className="text-white mb-6 text-base">
            Every Sunday at 09:00 in Pretoria North. No dress code. No prior church experience needed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <Link
              href="/plan-your-visit"
              className="inline-block bg-white text-[#008080] font-bold px-7 py-3.5 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Plan Your Visit
            </Link>
            <Link
              href="/sermons"
              className="inline-block bg-[#FFD600] text-[#1a1a1a] font-bold px-7 py-3.5 rounded-lg hover:bg-[#e6c200] transition-colors"
            >
              Watch a Sermon
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
