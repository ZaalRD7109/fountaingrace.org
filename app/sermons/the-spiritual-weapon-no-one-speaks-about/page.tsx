import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Spiritual Weapon No One Speaks About | Fountain of Grace International Pretoria North',
  description:
    'Jesus stooped and wrote on the ground. Every accuser left. That act was a weapon - and it still works. This message unpacks the authority you carry to break cycles, patterns, and spiritual blockage. Pretoria North.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/sermons/the-spiritual-weapon-no-one-speaks-about',
  },
  openGraph: {
    title: 'The Spiritual Weapon No One Speaks About',
    description:
      'John 8:6 - He wrote on the ground and every accuser left. Genesis 1 shows God spoke to the earth before He spoke to man. Creation is programmed to respond to spoken authority. This message from Fountain of Grace International in Pretoria North shows you how to use the weapon.',
    type: 'article',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International - Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/sermons/the-spiritual-weapon-no-one-speaks-about',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Spiritual Weapon No One Speaks About',
    description: 'John 8:6 - Jesus stooped and wrote on the ground. Every accuser left. Creation responds to spoken and written authority. This message teaches how to break cycles, patterns, and spiritual blockage using the authority God placed in you.',
    author: { '@type': 'Person', name: 'Pastor Ricardo Zaal' },
    publisher: {
      '@type': 'Church',
      name: 'Fountain of Grace International',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '323 B Danie Theron Street',
        addressLocality: 'Pretoria North',
        addressRegion: 'Gauteng',
        addressCountry: 'ZA',
      },
    },
    datePublished: '2025-10-19',
    url: 'https://www.fountaingrace.org/sermons/the-spiritual-weapon-no-one-speaks-about',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Sermons', item: 'https://www.fountaingrace.org/sermons' },
      { '@type': 'ListItem', position: 3, name: 'The Spiritual Weapon No One Speaks About', item: 'https://www.fountaingrace.org/sermons/the-spiritual-weapon-no-one-speaks-about' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What did Jesus write on the ground in John 8:6 and why does it matter?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "John 8:6 records that Jesus stooped down and wrote on the ground with his finger as though he heard them not. Scripture does not tell us what he wrote - but the result is undeniable: every accuser left one by one. Pastor Ricardo Zaal at Fountain of Grace International teaches that this act was not random. It was the deliberate use of spoken and written authority over the earth - the same authority God demonstrated in Genesis 1 when He spoke to the earth before He ever spoke to man. The earth responded to God's voice. It is still programmed to respond to yours.",
        },
      },
      {
        '@type': 'Question',
        name: 'What does Job 12:8 mean - speak to the earth and it shall teach thee?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Job 12:8 says: 'Or speak to the earth, and it shall teach thee.' This verse is often overlooked but it reveals a principle woven into creation itself - the earth was designed to respond to the sound of God's image-bearer. Genesis 1 shows that before God made man, He spoke to the earth: 'Let the earth bring forth.' And it did. That pattern did not stop at Genesis. Proverbs 18:21 says death and life are in the power of the tongue. The enemy knows this. He has been using cycles, patterns, and generational blockages against you - but you carry the same authority. The weapon is real. It requires your voice.",
        },
      },
      {
        '@type': 'Question',
        name: 'How do I break a cycle that keeps repeating in my family?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Cycles repeat because nothing has spoken against them with authority. Job 12:8 and Proverbs 18:21 both point to the same truth: the earth and the patterns in your life respond to the authority of the spoken word. The message preached at Fountain of Grace International in Pretoria North identifies that the enemy uses generational patterns because no one has confronted them using the authority God gave in Genesis 1:26. You were made in God's image and given dominion. What has been written against your family name can be overwritten - but it requires you to open your mouth and speak with the authority you already carry.",
        },
      },
      {
        '@type': 'Question',
        name: 'What is spiritual authority and how do I use it?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Spiritual authority is not a feeling - it is a position. Genesis 1:26 says God made man in His image and gave him dominion over the earth. That dominion did not disappear when Adam fell - Jesus restored it and John 14:12 says the works He did, you shall do also. Pastor Ricardo Zaal teaches that spiritual authority is activated through the spoken word aligned with Scripture. Jesus wrote and spoke. He did not argue. He did not defend. He exercised authority - and creation responded. That weapon is available to every believer who understands what they carry.",
        },
      },
    ],
  },
]

export default function SermonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article>
        <header
          className="pt-16 pb-14 px-4 sm:px-6 text-white"
          style={{ background: 'linear-gradient(145deg, #2a9df4 0%, #008080 100%)' }}
        >
          <div className="max-w-3xl mx-auto">
            <p className="text-[#FFD600] text-sm font-semibold uppercase tracking-wider mb-4">
              Sunday Message · Fountain of Grace International · Pretoria North
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-5">
              The Spiritual Weapon No One Speaks About
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              If cycles in your family keep repeating - sickness, debt, broken relationships, blocked progress - this message is for you. Jesus stooped and wrote on the ground. Every accuser left. That was not a coincidence. It was a weapon. And it still works.
            </p>
            <p className="text-white/60 text-sm">
              Pastor Ricardo Zaal · Fountain of Grace International, Pretoria North
            </p>
          </div>
        </header>

        <section className="bg-white pt-10 pb-2 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/nun01KlLnVE"
                title="The Spiritual Weapon No One Speaks About"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-14 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto space-y-6">

            <p className="text-[#555] leading-relaxed text-lg">
              This message is not for everyone. If the patterns in your family do not bother you - if sickness returning, finances blocked, relationships breaking down is something you have accepted - this is not for you. But if you are tired of cycles repeating and nothing you try seems to break them, you need to hear this.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mt-8 mb-3">He Wrote on the Ground and They All Left</h2>
            <p className="text-[#555] leading-relaxed">
              John 8:6 records one of the most mysterious moments in the Gospels. A woman caught in adultery was brought before Jesus. The accusers were ready. And Jesus stooped down, and with his finger wrote on the ground as though he heard them not. He did not argue. He did not defend. He wrote. And one by one, every accuser left - convicted, silent, gone.
            </p>
            <p className="text-[#555] leading-relaxed">
              What he wrote, Scripture does not tell us. But what happened after tells us everything. That act - writing on the ground with authority - was not incidental. It connects directly to the pattern God established at the very beginning of creation.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mt-8 mb-3">God Spoke to the Earth Before He Spoke to Man</h2>
            <p className="text-[#555] leading-relaxed">
              Genesis 1:11 - God said, let the earth bring forth. He spoke to the earth. He commanded it. And it produced exactly what He said. This is the pattern. The earth was designed to respond to spoken and written authority from the beginning.
            </p>
            <p className="text-[#555] leading-relaxed">
              Job 12:8 makes it plain: <em>&quot;Speak to the earth, and it shall teach thee.&quot;</em> This is not metaphor. It is instruction. The earth is listening. Creation is programmed to respond to the sound of God&apos;s image-bearer speaking with authority.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mt-8 mb-3">Your Enemy Has Been Using This Against You</h2>
            <p className="text-[#555] leading-relaxed">
              Proverbs 18:21 says death and life are in the power of the tongue. The enemy knows this better than most believers do. He has been using cycles, patterns, and generational blockages against families for decades - because no one has stood up and used the authority God placed in them to respond.
            </p>
            <p className="text-[#555] leading-relaxed">
              You were made in God&apos;s image. Genesis 1:26 gave you dominion. That dominion was not removed. Jesus restored full authority and in John 14:12 said the works he did, you shall do also. The weapon is real. The question is whether you will pick it up.
            </p>

            <blockquote className="border-l-4 border-[#FFD600] pl-5 py-2 my-8 bg-[#f0fafa] rounded-r-xl">
              <p className="text-[#2a9df4] font-semibold text-lg italic">
                &quot;He did not argue. He did not defend. He wrote on the ground - and every single accuser left. That is the weapon. And it is still available to you.&quot;
              </p>
              <cite className="text-[#555] text-sm not-italic mt-2 block">- Pastor Ricardo Zaal, Fountain of Grace International</cite>
            </blockquote>

            <p className="text-[#555] leading-relaxed">
              Watch the{' '}
              <Link href="/sermons/the-spiritual-weapon-declaration" className="fgi-link">
                Declaration Session (Part 2)
              </Link>
              {' '}to activate what this message teaches. And if you are in Pretoria North,{' '}
              <Link href="/plan-your-visit" className="fgi-link">
                come on a Sunday
              </Link>
              {' '}- Fountain of Grace International meets at 323 B Danie Theron Street at 09:00.
            </p>
          </div>
        </section>

        <section className="bg-[#f0fafa] py-14 px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-[#2a9df4] mb-8">Questions this message answers</h2>
            <dl className="space-y-0">
              {[
                {
                  q: 'What did Jesus write on the ground in John 8:6 and why does it matter?',
                  a: "John 8:6 records that Jesus stooped down and wrote on the ground with his finger as though he heard them not. Every accuser left. Pastor Ricardo Zaal at Fountain of Grace International teaches this was the deliberate use of written and spoken authority over the earth - the same authority God demonstrated in Genesis 1 when He spoke to the earth before He ever spoke to man. Creation is still programmed to respond to that authority.",
                },
                {
                  q: 'What does Job 12:8 mean - speak to the earth and it shall teach thee?',
                  a: "Job 12:8 reveals that the earth was designed to respond to the sound of God's image-bearer. Genesis 1 shows God spoke to the earth - 'Let the earth bring forth' - before man existed. That pattern did not stop. Proverbs 18:21 confirms: death and life are in the power of the tongue. The enemy has used generational cycles against families because most believers have not activated the authority they carry. Your voice is the weapon.",
                },
                {
                  q: 'How do I break a cycle that keeps repeating in my family?',
                  a: "Cycles repeat because nothing has spoken against them with authority. Job 12:8 and Proverbs 18:21 point to the same truth: patterns in your life respond to the authority of the spoken word. Genesis 1:26 gave man dominion over the earth. What has been written against your family can be overwritten - but you must open your mouth and speak with the authority you already carry as one made in God's image.",
                },
                {
                  q: 'What is spiritual authority and how do I use it?',
                  a: "Spiritual authority is not a feeling - it is a position. Genesis 1:26 gave man dominion. Jesus restored that authority fully and John 14:12 says the works He did, you shall do also. Pastor Ricardo Zaal teaches that authority is activated through the spoken word aligned with Scripture. Jesus wrote and spoke. He did not argue or defend. He exercised authority - and creation responded. That same weapon is available to every believer who understands what they carry.",
                },
              ].map((item) => (
                <div key={item.q} className="faq-block">
                  <dt className="font-semibold text-[#2a9df4] mb-2">{item.q}</dt>
                  <dd className="text-[#555] leading-relaxed">{item.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="bg-white py-10 px-4 sm:px-6">
          <div className="section-container">
            <div className="geo-block">
              <p>
                Preached by Pastor Ricardo Zaal at Fountain of Grace International, 323 B Danie
                Theron Street, Pretoria North, Gauteng, South Africa (NPO No: 316-193). Sunday
                services at 09:00. Fountain of Grace International in Pretoria North teaches
                practical, scripture-based messages designed to connect with real life challenges
                and the specific context of people living in Pretoria North and the surrounding areas.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#008080] py-14 px-4 sm:px-6">
          <div className="section-container text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Come and hear this in person - Pretoria North, every Sunday.
            </h2>
            <p className="text-white/70 mb-8 max-w-lg mx-auto">
              323 B Danie Theron Street. Services at 09:00. Someone will meet you at the door.
            </p>
            <Link href="/plan-your-visit" className="btn-primary">
              Plan Your Visit
            </Link>
          </div>
        </section>
      </article>
    </>
  )
}
