import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'You Love God — But Are You Actually in the Game? | Fountain of Grace International',
  description:
    'The crowd cheered Jesus and then crucified Him. The donkey carried Him in silence. Which one are you? A challenging message on commitment vs excitement. Pretoria North.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/sermons/you-love-god-but-are-you-in-the-game',
  },
  openGraph: {
    title: 'You Love God — But Are You Actually in the Game?',
    description:
      'Cheering for Jesus is easy. Carrying the weight is the real question. Based on Matthew 21, this message calls you from the crowd into committed action. Pretoria North.',
    type: 'article',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International — Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/sermons/you-love-god-but-are-you-in-the-game',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'You Love God — But Are You Actually in the Game?',
    description: 'The contrast between the crowd (who cheered Jesus then crucified Him) and the donkey (who carried Jesus silently and obediently) reveals two types of believers — those who react with excitement and those who respond with commitment.',
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
    datePublished: '2026-04-05',
    url: 'https://www.fountaingrace.org/sermons/you-love-god-but-are-you-in-the-game',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Sermons', item: 'https://www.fountaingrace.org/sermons' },
      { '@type': 'ListItem', position: 3, name: 'You Love God — But Are You in the Game?', item: 'https://www.fountaingrace.org/sermons/you-love-god-but-are-you-in-the-game' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the difference between loving God and being committed to God?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The crowd in Matthew 21 loved the idea of Jesus — they cheered, laid garments, called Him the son of David. Yet the same crowd later cried "Crucify Him." The donkey, untrained and never ridden, simply carried Jesus when called. Loving God emotionally is not the same as carrying the weight of what God has asked you to do.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does it mean to be used by God if you feel unqualified?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Luke 19:30 says the donkey had never been ridden before. No training. No experience. No qualification. Yet Jesus specifically asked for that donkey. God does not choose based on your qualifications — He chooses based on your availability. The donkey\'s mission made history. Not because of who the donkey was, but because of who it carried.',
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
              You Love God — But Are You Actually in the Game?
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              The Sunday before Easter, the crowd cheered Jesus loudly. They threw garments in the road, waved palm branches, and called Him the son of David. A few days later, the same crowd called for His crucifixion. The donkey He rode said nothing. It simply carried Him. That contrast is this message.
            </p>
            <p className="text-white/60 text-sm">
              Pastor Ricardo Zaal · Fountain of Grace International, Pretoria North · 5 April 2026
            </p>
          </div>
        </header>

        <section className="bg-white pt-10 pb-2 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/C-wXZBOBE40"
                title="You Love God — But Are You Actually in the Game?"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-14 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">The Crowd vs The Donkey</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              Matthew 21:9 — &quot;And the multitudes that went before, and that followed, cried, saying, Hosanna to the son of David: Blessed is he that cometh in the name of the Lord.&quot; This was real excitement. They meant it. They gave Jesus a royal entrance. But their excitement had no root in commitment — and when the pressure came, they changed their tune completely.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              The donkey, by contrast, is described in Luke 19:30 as one &quot;whereon yet never man sat.&quot; No training. No experience. No status. A donkey does not have the reputation of a horse. A king on a donkey in battle would be vulnerable. Yet Jesus asked for that specific donkey — and it carried Him into Jerusalem without complaint, without fanfare, without stopping.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">Why God Uses a Donkey Instead of a Horse</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              Zechariah 9:9, written hundreds of years before the event, already prophesied: &quot;Behold, thy King cometh unto thee: he is just, and having salvation; lowly, and riding upon an ass.&quot; The donkey had a prophetic word on its life before it knew what to do with it. You may feel untrained, unqualified, stuck in the same place — but there is a prophetic purpose on your life that is not dependent on your resume.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              God uses the donkey specifically because when a donkey carries Jesus, no one gives the credit to the donkey. The honour goes where it belongs. A horse would attract attention to itself. The donkey moves the mission without claiming the glory.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">The Problem With Living in the Crowd</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              The crowd reacted to what happened. The donkey responded to what was asked. That difference is everything. Reaction is driven by feelings — when the feeling is high, you cheer; when the feeling drops, you disappear. Response is driven by commitment — whether the feeling is present or not, the work gets done.
            </p>
            <p className="text-[#555] leading-relaxed mb-4">
              Many believers have prophetic words, conference moments, altar moments, excitement in worship — but when Jesus asks them to do something specific, it stops there. James 1:22 puts it plainly: &quot;But be ye doers of the word, and not hearers only, deceiving your own selves.&quot; The deception is subtle: the emotional response feels like faith. But faith without movement is not faith.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              The crowd disappears when things get hard. The donkey carries the weight regardless. Which one describes your relationship with God right now?
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">This Is a Year of Carrying, Not Clapping</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              The declaration for this season is not &quot;I feel led&quot; — because when the feeling stops, the leading stops. It is not &quot;I am praying about it&quot; — because when the fight comes from both sides, the praying also stops. The call is to move. To carry. To avail yourself to what God is asking, whether you feel qualified or not.
            </p>
            <p className="text-[#555] leading-relaxed mb-4">
              The donkey&apos;s mission made history. Today we still talk about that donkey — not because of who the donkey was, but because of the one it carried. That is what commitment to God&apos;s assignment looks like.
            </p>

            <blockquote className="border-l-4 border-[#FFD600] pl-5 py-2 my-10 bg-[#f0fafa] rounded-r-xl">
              <p className="text-[#2a9df4] font-semibold text-lg italic">
                &quot;The crowd had a moment. The donkey had a mission. The crowd&apos;s moment is forgotten. The donkey&apos;s mission is still being preached.&quot;
              </p>
              <cite className="text-[#555] text-sm not-italic mt-2 block">— Pastor Ricardo Zaal</cite>
            </blockquote>

            <p className="text-[#555] leading-relaxed">
              If you are in Pretoria North,{' '}
              <Link href="/plan-your-visit" className="text-[#008080] font-semibold hover:underline">
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
                <h3 className="font-semibold text-[#1a1a1a] mb-2">What is the difference between loving God and being committed to God?</h3>
                <p className="text-[#555] leading-relaxed text-sm">The crowd in Matthew 21 loved the idea of Jesus — they cheered, laid garments, and called Him the son of David. Yet the same crowd later cried &quot;Crucify Him.&quot; The donkey, untrained and never ridden, simply carried Jesus when called. Loving God emotionally is not the same as carrying the weight of what He has asked you to do.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">What if I feel unqualified to be used by God?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Luke 19:30 says the donkey had never been ridden before — no training, no experience, no qualifications. Yet Jesus specifically asked for that donkey. God does not choose based on your qualifications. He chooses based on your availability. The donkey&apos;s mission made history — not because of who the donkey was, but because of who it carried.</p>
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
