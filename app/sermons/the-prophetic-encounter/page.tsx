import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Prophetic Encounter: Stir Up the Gift in You | 2 Timothy 1:6 | Fountain of Grace International',
  description:
    'You are not broken - you are bruised. 2 Timothy 1:6 says stir up the gift of God which is in you. The gift is already there. Fear is the only thing keeping it from coming out. Pretoria North.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/sermons/the-prophetic-encounter',
  },
  openGraph: {
    title: 'The Prophetic Encounter: Stir Up the Gift in You',
    description:
      '2 Timothy 1:6 - stir up the gift of God which is in thee. Isaiah 42:3 says a bruised reed shall he not break. You are not broken. You are bruised. Fear is the prison. Walk out. Pretoria North.',
    type: 'article',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International - Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/sermons/the-prophetic-encounter',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Prophetic Encounter: Stir Up the Gift in You',
    description: 'Based on 2 Timothy 1:6, 1 Corinthians 14:1, Isaiah 42:3, and 2 Timothy 1:7, this message confronts the fear and comparison that keep believers from activating the gift God already placed inside them. You are not broken - you are bruised. The gift is in you. Stir it up.',
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
    datePublished: '2025-02-23',
    url: 'https://www.fountaingrace.org/sermons/the-prophetic-encounter',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Sermons', item: 'https://www.fountaingrace.org/sermons' },
      { '@type': 'ListItem', position: 3, name: 'The Prophetic Encounter', item: 'https://www.fountaingrace.org/sermons/the-prophetic-encounter' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What does 2 Timothy 1:6 mean by stirring up the gift of God?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '2 Timothy 1:6 - "Wherefore I put thee in remembrance that thou stir up the gift of God, which is in thee by the putting on of my hands." The gift is already in you - Paul is not telling Timothy to go find it. He is telling him to stir it up. Like a fire that has gone from a flame to an ember, the gift is still there. It just needs to be stirred. The reason it has not been stirring is most often not a lack of gifting - it is comparison, fear, or the belief that your gift does not look like someone else\'s. Every believer has a specific gift. Not to copy the pastor or the worship leader - but to operate in what God specifically placed in them.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between being bruised and being broken?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Isaiah 42:3 - "A bruised reed shall he not break, and the smoking flax shall he not quench." A bruised limb heals in days. A broken limb can take months. Many people in hard seasons believe they are broken - shattered, finished, unable to recover. But God\'s word says He will not break what is already bruised. You are not beyond recovery. The season felt permanent, but it was not. The gift that was buried under pain, under rejection, under fear - it is still there. God did not remove it when things went wrong. Stir it up.',
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
              The Prophetic Encounter: Stir Up the Gift in You
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              2 Timothy 1:6 does not tell you to go find the gift. It tells you to stir up the gift that is already in you. The problem is not that God withheld something. The problem is that fear, comparison, and the wrong season buried what was already there. This message is about getting it back out.
            </p>
            <p className="text-white/60 text-sm">
              Pastor Ricardo Zaal · Fountain of Grace International, Pretoria North · 23 February 2025
            </p>
          </div>
        </header>

        <section className="bg-white pt-10 pb-2 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/syeKz7bhxn4"
                title="The Prophetic Encounter: Stir Up the Gift in You"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-14 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">When the Teaching Is Not Enough Without the Encounter</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              You can speak about the Holy Spirit for twelve months and the Spirit never shows up to confirm what you said. You can talk about Jesus for a month and see nothing shift in your life. You can teach on prophecy for four weeks and have nothing prophetic happen. If the word you are preaching is not backed up by something happening in your actual life - there is an error somewhere.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              God honours His word more than He honours anything else. When the teaching is true and the heart is right, something should break open. That is what this message is about. Not more theory. An encounter - the kind that comes when the gift inside you is finally stirred up and activated.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">2 Timothy 1:6 - The Gift Is Already in You</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              2 Timothy 1:6 - &quot;Wherefore I put thee in remembrance that thou stir up the gift of God, which is in thee by the putting on of my hands.&quot;
            </p>
            <p className="text-[#555] leading-relaxed mb-4">
              Paul is not telling Timothy to go and acquire something new. He is reminding him of something that is already there. The gift is already in you. The word &quot;stir up&quot; carries the image of a fire - specifically, stirring the coals so the flame can come back. The gift has not gone out. It has gone from a roaring flame to a glowing ember under weeks of fear, pressure, comparison, and discouragement.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              1 Corinthians 14:1 says, &quot;Follow after charity, and desire spiritual gifts.&quot; The word is desire. Not observe. Not admire in others from a distance. Desire means you actively want it for yourself. The reason so many believers see gifts operating in others but never in their own lives is that they stopped desiring what God put in them - because somewhere along the way they became convinced that their gift was not worth much.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">Stop Trying to Be Somebody Else&apos;s Gift</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              You see the pastor preach and you want to preach like him. You see your mother pray in tongues and you think that is what your gift should look like. You hear somebody with the gift of music and you feel like your quiet gift of service or craftsmanship or mercy is somehow less. That is not the gift of God operating in you - that is comparison shutting the gift of God down.
            </p>
            <p className="text-[#555] leading-relaxed mb-4">
              Spiritual gifts include artistic creativity, craftsmanship, giving, service, mercy, music, organization, knowledge, and more. The person who sets the church up with excellence so the stage is beautiful before anyone walks in - that is a gift. The person who serves quietly and makes sure nothing is missing - that is a gift. The person who understands systems and makes things run well behind the scenes - that is a gift. God gave every one of these gifts intentionally.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              The gift He put in you is not the gift He put in the person next to you. Your assignment to find it is not to copy what you have seen elsewhere. It is to ask God what He specifically placed in you - and then to stir it up until it burns again.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">Isaiah 42:3 - You Are Bruised, Not Broken</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              Isaiah 42:3 - &quot;A bruised reed shall he not break, and the smoking flax shall he not quench: he shall bring forth judgment unto truth.&quot;
            </p>
            <p className="text-[#555] leading-relaxed mb-4">
              There is a difference between bruised and broken. A bruise heals in days. A break can take months. Many believers in hard seasons have decided they are broken - finished, unable to recover, permanently disqualified by what happened to them. But God&apos;s word says He will not break what is already bruised. He is not in the business of finishing off what is wounded.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              What you went through felt like it was going to end you. The relationship that ended, the season that collapsed, the door that closed without explanation. You cried in ways you did not expect. You thought you would never recover. But you were bruised - not broken. And the gift that was buried under that season is still there. God did not remove it when things went wrong. He preserved it. Now is the time to stir it up.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">The Fear That Is Keeping You in the Prison</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              2 Timothy 1:7 - &quot;For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind.&quot;
            </p>
            <p className="text-[#555] leading-relaxed mb-4">
              Fear has a specific texture when it comes to the gift. It is not usually the fear of failure - it is the fear of what people will say when you succeed. If you get the management position, will they say you used connections? If you build the business, will they say you used something darker to get there? If you step into the prophetic and speak, will they laugh? That fear of jealousy, of being seen and judged for thriving - that is the fear that keeps the most gifted people from ever activating what God put in them.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              God did not give you that spirit. Walk out of the prison of fear. The door is already open - the same open door the Spirit showed in Revelation 3:8. Your little strength is not a disqualifier. It is the exact condition God uses to open doors that no man can shut. Stop letting fear decide what your ceiling is.
            </p>

            <blockquote className="border-l-4 border-[#FFD600] pl-5 py-2 my-10 bg-[#f0fafa] rounded-r-xl">
              <p className="text-[#2a9df4] font-semibold text-lg italic">
                &quot;You are not broken. You are bruised. There is a difference. Bruised things heal. And the gift that was buried under the bruise is still in you. Stir it up. God preserved it for a reason - and the reason is now.&quot;
              </p>
              <cite className="text-[#555] text-sm not-italic mt-2 block">- Pastor Ricardo Zaal</cite>
            </blockquote>

            <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Three Things to Do With What Is Already in You</h2>
            <ol className="list-decimal list-inside space-y-3 text-[#555] leading-relaxed mb-6">
              <li><strong>Stop comparing your gift to someone else&apos;s.</strong> Your gift will not look like the pastor&apos;s. It will not look like your mother&apos;s prayer life or your friend&apos;s worship. Ask God specifically what He put in you - and be willing to accept that it might look quieter, more practical, or less visible than what you have been admiring. The gift of service runs the church. The gift of organization builds what the platform stands on. Every gift matters.</li>
              <li><strong>Stir it up deliberately.</strong> An ember does not reignite by watching the fire from a distance. You have to get close to it and do something. Put yourself in environments where the gift can be exercised. Serve. Create. Organize. Speak. Do the thing you have been feeling drawn toward but avoiding. The stirring happens in the doing - not in the waiting.</li>
              <li><strong>Walk out of the prison of fear.</strong> Name the fear that is actually keeping you from activating your gift. Is it the fear of what people will say? The fear of being exposed? The fear of succeeding and not knowing what to do with it? Name it - because 2 Timothy 1:7 says that spirit did not come from God. Identify it, refuse it, and take the step. God&apos;s power, love, and sound mind are already in you. Use them.</li>
            </ol>

            <p className="text-[#555] leading-relaxed">
              If you are in Pretoria North,{' '}
              <Link href="/plan-your-visit" className="text-[#008080] font-semibold hover:underline">
                come on a Sunday
              </Link>{' '}
              - these messages are preached live every week at Fountain of Grace International, 323 B Danie Theron Street.
            </p>
          </div>
        </section>

        <section className="bg-gray-50 py-12 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-[#1a1a1a] mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">What does 2 Timothy 1:6 mean by stirring up the gift of God?</h3>
                <p className="text-[#555] leading-relaxed text-sm">2 Timothy 1:6 - stir up the gift of God which is in thee. The gift is already in you. Paul is not telling Timothy to go find it - he is telling him to stir what is already there. Like a fire that has gone from flame to ember, the gift has not died. It has been buried under fear, comparison, and hard seasons. Stirring it up means deliberately moving toward what God placed in you - in your specific area of gifting, not someone else&apos;s.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">What is the difference between being bruised and being broken?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Isaiah 42:3 - a bruised reed shall he not break. A bruise heals quickly. A break takes much longer. Many believers decide they are broken after a hard season - permanently disqualified or finished. But God&apos;s word says He will not break what is already bruised. The gift is still in you. The pain of the season did not remove it. God preserved it through everything you went through. Now is the time to stir it back up.</p>
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
