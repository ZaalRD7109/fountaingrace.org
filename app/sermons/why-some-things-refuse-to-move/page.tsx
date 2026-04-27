import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Why Some Things Refuse to Move | Fountain of Grace International',
  description:
    'You have used the name of Jesus. You have declared the Word. But things are not shifting. This message reveals why the name of Jesus is a legal claim — not a magic spell. Pretoria North.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/sermons/why-some-things-refuse-to-move',
  },
  openGraph: {
    title: 'Why Some Things Refuse to Move',
    description:
      'The name of Jesus is not a religious formula — it is a courtroom claim. This message explains authority, relationship, and why things only move when the name is used correctly. Pretoria North.',
    type: 'article',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International — Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/sermons/why-some-things-refuse-to-move',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Why Some Things Refuse to Move',
    description: 'Based on Philippians 2:9-10, John 1:1, and Revelation 19:13, this message explains the name of Jesus as a legal claim requiring relationship and order — not a religious formula to end prayers.',
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
    datePublished: '2026-01-04',
    url: 'https://www.fountaingrace.org/sermons/why-some-things-refuse-to-move',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Sermons', item: 'https://www.fountaingrace.org/sermons' },
      { '@type': 'ListItem', position: 3, name: 'Why Some Things Refuse to Move', item: 'https://www.fountaingrace.org/sermons/why-some-things-refuse-to-move' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why doesn\'t commanding in the name of Jesus always work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Matthew 7:22-23 records Jesus saying "many will say unto me in that day, Lord, Lord, have we not prophesied in thy name? And in thy name have cast out devils?" — and Jesus responded "I never knew you." The name of Jesus without relationship is noise. Luke 6:46 asks: "Why call ye me Lord, Lord, and do not the things which I say?" The authority of the name requires a life that aligns with the one whose name is being used.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between the Word and the name of Jesus?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Revelation 19:13 says "his name is called the Word of God." John 1:1 says "In the beginning was the Word, and the Word was with God, and the Word was God." The two are not separate. The name carries the authority of the Word. You cannot separate them. Using the name without the Word — or the Word without the name — misses the full authority of how God designed spiritual authority to function.',
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
              Why Some Things Refuse to Move
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              You have spoken. You have declared. You have ended every prayer &quot;in the name of Jesus.&quot; But the situation has not moved. This is not a faith problem — it may be an authority problem. And authority is not about volume. It is about position.
            </p>
            <p className="text-white/60 text-sm">
              Pastor Ricardo Zaal · Fountain of Grace International, Pretoria North · 4 January 2026
            </p>
          </div>
        </header>

        <section className="bg-white pt-10 pb-2 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/Hdrz2Qh2hkM"
                title="Why Some Things Refuse to Move | The Name of Jesus"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-14 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">The Name Is Not a Formula — It Is a Legal Claim</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              In Hebrew, a name — shem — carries identity, reputation, and authority. It is not just a label. It is a representation of character and position. Revelation 19:13 says of Jesus: &quot;his name is called the Word of God.&quot; John 1:1 connects this directly: &quot;In the beginning was the Word, and the Word was with God, and the Word was God.&quot;
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              When you say &quot;in the name of Jesus,&quot; you are not completing a religious formula. You are making a legal claim — presenting yourself as a representative of Christ, operating under His authority, standing in His jurisdiction. The way an old royal messenger sealed an envelope with the king&apos;s stamp, your invocation of the name is a declaration of whose authority stands behind you.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">Philippians 2: The Name Above Every Name</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              Philippians 2:9–10 — &quot;God also hath highly exalted him, and given him a name which is above every name: that at the name of Jesus every knee should bow, of things in heaven, and things in earth, and things under the earth.&quot;
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              This is courtroom language. Every authority structure — in heaven, on earth, and under the earth — is required to bow. When a judge speaks in a courtroom, the authority is not in the volume of his voice. It is in the position he holds. The name of Jesus carries jurisdiction in every realm. The question is not whether the name has power. The question is whether the one using it has the standing to represent it.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">A Name Without Relationship Becomes Noise</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              Matthew 7:22–23 records one of the most sobering statements in the Gospels. Jesus says many will come saying &quot;Lord, Lord, have we not prophesied in thy name? And in thy name have cast out devils?&quot; And He will answer: &quot;I never knew you: depart from me.&quot;
            </p>
            <p className="text-[#555] leading-relaxed mb-4">
              The name was used. The works were done. But the relationship was absent. The name without the relationship becomes noise in the spiritual realm. Luke 6:46 asks: &quot;Why call ye me Lord, Lord, and do not the things which I say?&quot; Using the name of the one you do not obey is a contradiction that nullifies the authority.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              Authority in the spiritual realm does not flow from religious activity. It flows from relationship — knowing Him, being known by Him, and living in alignment with what He says.
            </p>

            <blockquote className="border-l-4 border-[#FFD600] pl-5 py-2 my-10 bg-[#f0fafa] rounded-r-xl">
              <p className="text-[#2a9df4] font-semibold text-lg italic">
                &quot;Some are not speaking with authority — they are speaking with noise. The demons are not hard of hearing. They just do not recognise the authority behind the voice.&quot;
              </p>
              <cite className="text-[#555] text-sm not-italic mt-2 block">— Pastor Ricardo Zaal</cite>
            </blockquote>

            <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Building the Authority That Makes Things Move</h2>
            <ol className="list-decimal list-inside space-y-3 text-[#555] leading-relaxed mb-6">
              <li><strong>Know Him — not just about Him.</strong> Relationship is the foundation of authority. Time in prayer, Word, and obedience builds the relationship that gives the name its weight.</li>
              <li><strong>Obey what He says.</strong> Luke 6:46 makes this the test of whether you actually recognise His lordship. Calling Him Lord without doing what He says is a contradiction.</li>
              <li><strong>Speak with authority, not desperation.</strong> Philippians 2:10 says every knee bows. That is not a possibility — it is a settled fact. Speak from the settled fact, not from the anxiety of hoping it is true.</li>
            </ol>

            <p className="text-[#555] leading-relaxed">
              If you are in Pretoria North,{' '}
              <Link href="/plan-your-visit" className="fgi-link">
                come on a Sunday
              </Link>{' '}
              — these messages are preached live every week at Fountain of Grace International, 323 B Danie Theron Street.
            </p>
          </div>
        </section>

        <section className="bg-gray-50 py-12 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-[#1a1a1a] mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">Why doesn&apos;t commanding in the name of Jesus always produce results?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Matthew 7:22–23 shows people who used the name of Jesus in works and Jesus said &quot;I never knew you.&quot; The name without relationship is noise. Luke 6:46 identifies the contradiction: calling Him Lord while not doing what He says removes the authority from the claim.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">How are the name of Jesus and the Word of God connected?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Revelation 19:13 says Jesus&apos; name is called the Word of God. John 1:1 says the Word was with God and was God. They are inseparable. The name carries the authority of the Word. Using the name of Jesus means standing in the full weight of what the Word of God says — not just as a prayer ending.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f0fafa] py-14 px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Join Us This Sunday</h2>
            <p className="text-[#555] leading-relaxed mb-6">
              Fountain of Grace International meets every Sunday at 09:00 at 323 B Danie Theron Street, Pretoria North. Come as you are.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/plan-your-visit"
                className="inline-block bg-[#008080] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#006666] transition-colors"
              >
                Plan Your Visit
              </Link>
              <Link
                href="/prayer"
                className="inline-block bg-white border border-[#008080] text-[#008080] font-bold px-6 py-3 rounded-lg hover:bg-[#f0fafa] transition-colors"
              >
                Send a Prayer Request
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  )
}
