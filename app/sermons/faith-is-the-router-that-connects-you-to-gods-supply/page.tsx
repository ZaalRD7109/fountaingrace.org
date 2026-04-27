import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Faith Is the Router That Connects You to God\'s Supply | Fountain of Grace International',
  description:
    'Your faith is not a feeling - it is the router that connects you to everything God has already provided. When the connection drops, the supply does not stop. You just lost the signal. Pretoria North.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/sermons/faith-is-the-router-that-connects-you-to-gods-supply',
  },
  openGraph: {
    title: 'Faith Is the Router That Connects You to God\'s Supply',
    description:
      'The Wi-Fi is on. The subscription is paid. But if your router is broken, you get nothing. This message explains why faith - not effort - is the thing that connects you to what God has already released. Pretoria North.',
    type: 'article',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International - Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/sermons/faith-is-the-router-that-connects-you-to-gods-supply',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Faith Is the Router That Connects You to God\'s Supply',
    description: 'Based on 2 Corinthians 1:20, Hebrews 11:6, and Proverbs 3:5, this message explains faith as the spiritual router that connects the believer to heaven\'s supply - and why self-effort, doubt, and an unrenewed mind break the connection.',
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
    datePublished: '2025-06-08',
    url: 'https://www.fountaingrace.org/sermons/faith-is-the-router-that-connects-you-to-gods-supply',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Sermons', item: 'https://www.fountaingrace.org/sermons' },
      { '@type': 'ListItem', position: 3, name: 'Faith Is the Router', item: 'https://www.fountaingrace.org/sermons/faith-is-the-router-that-connects-you-to-gods-supply' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why does God seem silent when I pray?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'God is not silent - His supply is already released. The issue is the connection, not the source. Hebrews 11:6 says without faith it is impossible to please God, and 2 Corinthians 1:20 says all His promises are yes and amen - but they are accessed through faith. Like a Wi-Fi router with a paid subscription that has faulty hardware, the signal is there but the receiver is broken. Romans 12:2 - renewing your mind is how you restore the connection.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does Proverbs 3:5 mean by trust in the Lord?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Hebrew word for trust in Proverbs 3:5 is "batach" - to lean entirely upon something without fear of collapse, the way a beam leans on a wall. It is not cautious trust. It is the kind of complete dependence a child has when asking a parent for what they need - not referencing yesterday\'s lack, not calculating whether the supply is possible. Just asking with full expectation that the Father provides.',
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
              Faith Is the Router That Connects You to God&apos;s Supply
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              The Wi-Fi subscription is paid. The signal is available. But if your router is broken, you receive nothing - not because the supply stopped, but because the connection failed. Faith is your router. When faith breaks down, God&apos;s supply does not disappear. You just lost your connection to it.
            </p>
            <p className="text-white/60 text-sm">
              Pastor Ricardo Zaal · Fountain of Grace International, Pretoria North · 8 June 2025
            </p>
          </div>
        </header>

        <section className="bg-white py-14 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">The Router That Keeps Dropping</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              You pay your internet subscription. The provider&apos;s signal is active. But when you try to connect, nothing loads. Why? Because the router in your house is the problem - not the source. The supply is there. The access is broken.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              This is the picture behind the message. God&apos;s supply is not the problem. He is the omnipresent, ever-available God. The issue most believers face is not a God who is withholding - it is a faith that is not functioning correctly as the connection between the believer and what God has already released.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">2 Corinthians 1:20 - All the Promises Are Already Yes</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              2 Corinthians 1:20 - &quot;For all the promises of God in him are yea, and in him Amen, unto the glory of God by us.&quot;
            </p>
            <p className="text-[#555] leading-relaxed mb-4">
              The promise is already yes. God did not say &quot;yes, eventually&quot; or &quot;yes, if you try hard enough.&quot; The yes is already in Christ. The Amen is already declared. The issue is not whether the supply exists - it is whether your faith is positioned to receive what has already been made available.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              Hebrews 11:6 - &quot;But without faith it is impossible to please him: for he that cometh to God must believe that he is, and that he is a rewarder of them that diligently seek him.&quot; Faith is not optional. It is the mechanism. Without it, the connection does not exist - not because God is unavailable, but because the receiver is not operating.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">Proverbs 3:5 - Lean Without Fear of Collapse</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              Proverbs 3:5 - &quot;Trust in the LORD with all thine heart; and lean not unto thine own understanding.&quot;
            </p>
            <p className="text-[#555] leading-relaxed mb-4">
              The Hebrew word for trust here is <em>batach</em> - to lean entirely upon something without fear of collapse, the way a structural beam leans on a wall. Not cautious leaning. Not leaning while keeping your own weight balanced as a backup. Full transfer of weight. That is what trusting God looks like.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              A child asking a parent for something does not reference yesterday&apos;s lack. They do not calculate whether the parent has enough. They simply ask - with full expectation that the parent provides. That is the faith that activates the connection. The moment you start leaning on what you can see instead of who God is, the router starts dropping signal.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">Romans 12:2 - The Firmware Update Your Faith Needs</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              Routers sometimes stop working because the firmware is outdated. The hardware is fine. The subscription is active. But the software running the device has not been updated, and it cannot handle what is being sent.
            </p>
            <p className="text-[#555] leading-relaxed mb-4">
              Romans 12:2 - &quot;And be not conformed to this world: but be ye transformed by the renewing of your mind.&quot; The renewal of the mind is the firmware update. Years of disappointment, wrong thinking, and past experience install beliefs into your mind that block what God is releasing. The signal keeps coming. The router keeps rejecting it - because the firmware was never updated.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              You cannot think your way into God&apos;s supply using the same mind that accumulated every reason He would not come through. The update is the Word. Daily, deliberate, expectant engagement with what God says - not what circumstances tell you.
            </p>

            <blockquote className="border-l-4 border-[#FFD600] pl-5 py-2 my-10 bg-[#f0fafa] rounded-r-xl">
              <p className="text-[#2a9df4] font-semibold text-lg italic">
                &quot;It is never about your works. It was never about how much effort you put in. When you are weak, He comes even stronger - because the moment you decrease, He increases. Fix the router. Stop trusting the connection you can make and start trusting the One who owns the supply.&quot;
              </p>
              <cite className="text-[#555] text-sm not-italic mt-2 block">- Pastor Ricardo Zaal</cite>
            </blockquote>

            <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Three Reasons Your Router Drops the Connection</h2>
            <ol className="list-decimal list-inside space-y-3 text-[#555] leading-relaxed mb-6">
              <li><strong>Self-effort replaces faith.</strong> When you rely on how hard you are working to produce results, you have bypassed the router. God&apos;s supply does not flow through human effort - it flows through connection with Him. The CEO does not work more hours than the floor worker, but the output is different. That is not about fairness - it is about access and position.</li>
              <li><strong>Past experience corrupts the signal.</strong> What failed before fills your mind with reasons today will fail the same way. But your past experience has nothing to do with God&apos;s current supply. A mind filtered through every previous disappointment will keep blocking the very answer it is asking for.</li>
              <li><strong>The mind has never been updated.</strong> Romans 12:2 is not a suggestion. It is the maintenance protocol. An unrenewed mind cannot receive a renewed life. The Word of God is the update - and without regular, deliberate engagement with it, your receiver will keep running on outdated firmware.</li>
            </ol>

            <p className="text-[#555] leading-relaxed">
              If you are in Pretoria North,{' '}
              <Link href="/plan-your-visit" className="fgi-link">
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
                <h3 className="font-semibold text-[#1a1a1a] mb-2">Why does God seem silent when I pray?</h3>
                <p className="text-[#555] leading-relaxed text-sm">God is not silent - the supply is already released. 2 Corinthians 1:20 says all His promises are already yes and amen in Christ. The issue is the connection, not the source. Hebrews 11:6 makes clear that faith is the non-negotiable mechanism. A router with a paid subscription but broken hardware receives nothing - not because the signal stopped, but because the receiver failed.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">What does Proverbs 3:5 mean by trust in the Lord?</h3>
                <p className="text-[#555] leading-relaxed text-sm">The Hebrew word <em>batach</em> means to lean entirely upon without fear of collapse. Not cautious leaning while keeping your own weight as backup - full transfer. Like a child asking a parent without calculating whether they have enough. That kind of trust is what activates the connection between your need and God&apos;s already-yes answer.</p>
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
