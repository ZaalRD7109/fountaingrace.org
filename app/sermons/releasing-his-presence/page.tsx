import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Releasing His Presence — From Container to Conduit | Luke 24:32 | Fountain of Grace International',
  description:
    'You sense God\'s presence in church — but it stays there. Matthew 5:15 says a lamp hidden under a basket gives no light. This message shows how to move from containing the presence to releasing it. Pretoria North.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/sermons/releasing-his-presence',
  },
  openGraph: {
    title: 'Releasing His Presence — From Container to Conduit',
    description:
      'You already have the power inside you. The problem is the switch is off. This message is about moving from containing God\'s presence to releasing it into every area of your life. Pretoria North.',
    type: 'article',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International - Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/sermons/releasing-his-presence',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Releasing His Presence - From Container to Conduit',
    description: 'Based on Luke 24:32, Matthew 5:15, and 2 Samuel 6:11, this message addresses believers who experience God\'s presence in church but cannot carry it into their homes, workplaces, and relationships - showing how to move from being a container of the presence to a conduit of it.',
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
    datePublished: '2025-06-29',
    url: 'https://www.fountaingrace.org/sermons/releasing-his-presence',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Sermons', item: 'https://www.fountaingrace.org/sermons' },
      { '@type': 'ListItem', position: 3, name: 'Releasing His Presence', item: 'https://www.fountaingrace.org/sermons/releasing-his-presence' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What does Luke 24:32 mean by hearts burning?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Luke 24:32 - "Did not our heart burn within us, while he talked with us by the way, and while he opened to us the scriptures?" The burning hearts of the disciples were not the product of a great sermon or impressive theology. They burned because of the presence of the One walking with them. The presence of God does not just inform - it ignites. When the presence is genuinely released into a person\'s life, it produces a visible, transferable evidence that goes wherever they go.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I carry God\'s presence outside of church?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Matthew 5:15 says a lamp under a basket gives no light - the lamp is not broken, it is just covered. The presence of God inside a believer who does not release it is the same: the power is real, but nothing around them benefits from it. Moving from container to conduit requires deliberate action - bringing the Word into conversations, choosing responses shaped by the Spirit rather than the flesh, and treating every environment as a place where the presence can flow through you rather than just into you.',
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
              Releasing His Presence: From Container to Conduit
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              You sense the presence of God in church. Your heart burns. Something moves in you. And then you go home — and your family is ice cold. Your workplace is unchanged. The fire that was in the building did not travel with you. This message is about why that happens and what changes when you move from containing the presence to releasing it.
            </p>
            <p className="text-white/60 text-sm">
              Pastor Ricardo Zaal · Fountain of Grace International, Pretoria North · 29 June 2025
            </p>
          </div>
        </header>

        <section className="bg-white pt-10 pb-2 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/yDYWamwrys4"
                title="Releasing His Presence: From Container to Conduit"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-14 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">The Pot of Food Nobody Is Eating</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              Imagine someone cooking a meal that smells incredible. The whole neighbourhood can smell it. People passing by stop and wonder what is on the stove. But when it is time to eat, the cook sits alone with the pot. Full. Surrounded by food. And the people who could have been fed walk past hungry.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              This is the picture of a believer who carries the presence of God but does not release it. The presence is real. The anointing is genuine. The fire that burns in church is not manufactured. But it stays in the building. It stays in the meeting. It does not travel into the home, the workplace, or the neighbourhood — because the believer has become a container rather than a conduit.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">Luke 24:32 — The Burning That Changes Everything</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              Luke 24:32 — &quot;And they said one to another, Did not our heart burn within us, while he talked with us by the way, and while he opened to us the scriptures?&quot;
            </p>
            <p className="text-[#555] leading-relaxed mb-4">
              The two disciples on the road to Emmaus did not recognise Jesus at first. But something happened while He walked with them. Their hearts burned. That burning was not intellectual — it was the unmistakable mark of the presence. When Jesus was revealed to them and left, they did not stay where they were. They got up immediately and went back to Jerusalem to tell the others.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              The burning was meant to be released. It produced movement. It produced testimony. It changed the room they walked into. The presence of God is not designed to terminate at the person who received it — it is designed to flow through them into whatever environment they enter.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">Matthew 5:15 — The Lamp Under the Basket</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              Matthew 5:15 — &quot;Neither do men light a candle, and put it under a bushel, but on a candlestick; and it giveth light unto all that are in the house.&quot;
            </p>
            <p className="text-[#555] leading-relaxed mb-4">
              A lamp hidden under a basket is not a broken lamp. The flame is real. The light is genuine. But nothing around it benefits from it because it has been covered. The problem is not the power — it is the position.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              Many believers carry the presence of God the way a lamp sits under a basket. Church was on fire — but the family at home is still in darkness. Something moved in the meeting — but the workplace is unchanged. The presence is real. But it has not been released. It has been contained — either through passivity, through not knowing that it is meant to flow outward, or through not making the deliberate choice to let it.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">The Electricity That Only Flows When You Flip the Switch</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              Electricity is in the wall before you flip the switch. The power is already there. The connection is already made. But the room stays dark until you make the deliberate choice to activate the circuit.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              You are not waiting for God to give you something before you can release the presence. The presence is already in you — 1 Corinthians 6:19 makes that clear. The switch is the deliberate, daily choice to let what is in you flow into what is around you. Into conversations. Into how you respond to people. Into how you walk into a room. Into how you pray with someone who is struggling. The power is there. The question is whether the switch is on.
            </p>

            <blockquote className="border-l-4 border-[#FFD600] pl-5 py-2 my-10 bg-[#f0fafa] rounded-r-xl">
              <p className="text-[#2a9df4] font-semibold text-lg italic">
                &quot;The presence you carry in church is the same presence your family needs at home. Do not be a container. Be a conduit. A conduit does not keep what passes through it — it moves it to where it is needed most.&quot;
              </p>
              <cite className="text-[#555] text-sm not-italic mt-2 block">— Pastor Ricardo Zaal</cite>
            </blockquote>

            <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Moving From Container to Conduit</h2>
            <ol className="list-decimal list-inside space-y-3 text-[#555] leading-relaxed mb-6">
              <li><strong>Recognise that the presence is meant to move through you.</strong> You are not the destination. You are the channel. What God pours into you in the meeting is meant to reach people who were never in the meeting. That is the design.</li>
              <li><strong>Flip the switch deliberately outside of church.</strong> The presence does not release automatically. It requires a conscious decision to walk into your home, your workplace, and your relationships as someone carrying something. Not with performance - with awareness.</li>
              <li><strong>Let the burning produce movement.</strong> The disciples in Luke 24 did not stay on the road after their hearts burned - they went back to Jerusalem. The burning was meant to drive action. If you sense the presence and nothing changes in how you live, the switch has not been flipped.</li>
            </ol>

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
                <h3 className="font-semibold text-[#1a1a1a] mb-2">What does Luke 24:32 mean by hearts burning?</h3>
                <p className="text-[#555] leading-relaxed text-sm">The disciples&apos; hearts burned not because of great theology but because of the presence of Jesus walking with them. When the presence of God is genuinely there, it produces an unmistakable internal evidence. And it does not stop at the person who receives it - Luke 24 shows the disciples immediately went to tell others. Burning hearts produce movement and testimony, not just a private experience.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">How do I carry God&apos;s presence outside of church?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Matthew 5:15 - a lamp under a basket gives no light, but the lamp is not broken. The presence inside a believer who does not release it is real but contained. Moving from container to conduit is a daily, deliberate choice - to walk into every environment as someone carrying something, not waiting for a church service to feel it again. The electricity is already in the wall. Flip the switch.</p>
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
              <Link href="/plan-your-visit" className="inline-block bg-[#008080] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#006666] transition-colors">
                Plan Your Visit
              </Link>
              <Link href="/prayer" className="inline-block bg-white border border-[#008080] text-[#008080] font-bold px-6 py-3 rounded-lg hover:bg-[#f0fafa] transition-colors">
                Send a Prayer Request
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  )
}
