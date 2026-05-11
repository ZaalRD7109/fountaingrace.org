import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dying Right - Good Friday Message | Fountain of Grace International',
  description:
    'Jesus did not die as a victim. Every word He spoke from the cross was deliberate. Good Friday message from Fountain of Grace International, Pretoria North.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/sermons/dying-right-good-friday-message',
  },
  openGraph: {
    title: 'Dying Right - Good Friday Message',
    description:
      'If you have ever faced an ending you did not choose, this Good Friday message shows how Jesus turned the most brutal death in history into the most purposeful act ever recorded. Fountain of Grace International, Pretoria North.',
    type: 'article',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International - Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/sermons/dying-right-good-friday-message',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Dying Right - Good Friday Message',
    description: 'Jesus did not die as a victim. Every word He spoke from the cross was deliberate. This Good Friday message unpacks what it means to die right - with purpose, with clarity, and with your eyes on what comes next.',
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
    datePublished: '2026-04-03',
    url: 'https://www.fountaingrace.org/sermons/dying-right-good-friday-message',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Sermons', item: 'https://www.fountaingrace.org/sermons' },
      { '@type': 'ListItem', position: 3, name: 'Dying Right', item: 'https://www.fountaingrace.org/sermons/dying-right-good-friday-message' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Dying Right - Good Friday Message | Fountain of Grace International Pretoria North',
    description: 'Jesus did not die as a victim. Every word He spoke from the cross was deliberate. Good Friday message from Pastor Ricardo Zaal at Fountain of Grace International, Pretoria North.',
    thumbnailUrl: 'https://img.youtube.com/vi/ROCdYtxJa24/maxresdefault.jpg',
    uploadDate: '2026-04-03',
    embedUrl: 'https://www.youtube.com/embed/ROCdYtxJa24',
    url: 'https://www.fountaingrace.org/sermons/dying-right-good-friday-message',
    author: { '@type': 'Person', name: 'Pastor Ricardo Zaal' },
    publisher: {
      '@type': 'Organization',
      name: 'Fountain of Grace International',
      url: 'https://www.fountaingrace.org',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What does it mean to die right according to the Bible?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'To die right means to face an ending - whether literal death, the death of a season, or the death of a dream - with purpose and surrender rather than bitterness and panic. Jesus is the model. He spoke seven deliberate statements from the cross. He forgave His accusers. He provided for His mother. He declared it finished. Nothing about His death was reactive - every word was intentional. Dying right is choosing what your ending says about what you believed.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is Good Friday important if the resurrection is what matters?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You cannot have Easter Sunday without Good Friday. The resurrection has no power unless the death was real, complete, and accepted. The cross is where sin was dealt with, not just bypassed. Hebrews 9:22 says without the shedding of blood there is no remission. Good Friday is the moment the full price was paid. Sunday proves it worked - but Friday is where the work was done.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I face painful endings in my own life?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The same way Jesus faced His: with honesty, with trust in the Father, and with a bigger picture in view. He said "It is finished" - not "it is over." Finished means completed, accomplished, fulfilled. When something ends in your life that you did not ask for - a relationship, a job, a season - the question is not only "why did this happen?" but "what is this completing?" Dying right means refusing to let the ending write the final word.',
        },
      },
      {
        '@type': 'Question',
        name: 'What did Jesus mean when He said "It is finished"?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Greek word is tetelestai - it was used in commerce to mean "paid in full." Merchants would stamp a debt with tetelestai when the account was settled. When Jesus said it, He was declaring that every debt owed by sin to God\'s justice was paid completely. Not partially. Not on credit. Finished. That word is the foundation of everything the New Testament says about forgiveness, healing, and access to God.',
        },
      },
    ],
  },
]

const points = [
  {
    n: 1,
    title: 'He Was Not a Victim - He Was a Volunteer',
    scripture: 'John 10:17-18',
    body: 'Jesus said, "I lay down my life, that I might take it again. No man taketh it from me, but I lay it down of myself." The crucifixion was not a tragedy that happened to Jesus. It was a mission He walked into with full knowledge of what was coming. The difference between dying and dying right is whether you chose what you are giving your life for. Jesus had already decided. That is why He could be silent before Pilate, calm in Gethsemane, and deliberate in every word from the cross.',
  },
  {
    n: 2,
    title: '"Father, Forgive Them" - Dying Without Bitterness',
    scripture: 'Luke 23:34',
    body: 'The first thing Jesus said from the cross was a prayer for the people killing Him. Before He dealt with His own pain, He dealt with their guilt. Dying with bitterness in your heart is dying wrong. Whatever season is ending in your life - whatever person contributed to that ending - your first instinct may be accusation. Jesus chose intercession instead. What you say at your lowest moment reveals what you actually believe about God.',
  },
  {
    n: 3,
    title: '"It Is Finished" - Not Over, But Complete',
    scripture: 'John 19:30',
    body: 'Tetelestai. The Greek word stamped on paid debts. When Jesus said "It is finished," He was not collapsing in defeat - He was declaring a transaction complete. Everything sin owed, everything the law demanded, every judgment that stood against you - paid. The cross is not the end of the story. It is the fulfilment of everything that came before it. Good Friday is not about mourning a death. It is about receiving what that death purchased.',
  },
  {
    n: 4,
    title: '"Into Thy Hands I Commend My Spirit" - Dying in Trust',
    scripture: 'Luke 23:46 / Psalm 31:5',
    body: 'Jesus\' last words were a quotation of Psalm 31:5. A Psalm every Jewish child was taught to pray before sleeping. At the moment of His greatest agony, Jesus reached for a childhood prayer. That is what the Word does in you - it becomes your language when you have no words left. To commend your spirit to the Father is to release your life into His hands rather than gripping it yourself. The hardest version of trust is the one that happens when you cannot see what comes next.',
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
              Good Friday Message · Fountain of Grace International · Pretoria North
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-5">
              Dying Right - What Jesus Did on the Cross That Most People Miss
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              Most people see Good Friday as a tragedy. It was not. Every word Jesus spoke from the cross was deliberate. He was not reacting to what was happening to Him - He was completing what He came to do. This message looks at what it means to face an ending the right way.
            </p>
            <p className="text-white/60 text-sm">
              Pastor Ricardo Zaal · Fountain of Grace International, Pretoria North · 3 April 2026
            </p>
          </div>
        </header>

        <section className="bg-white pt-10 pb-2 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/ROCdYtxJa24"
                title="Dying Right - Good Friday Message | Fountain of Grace International Pretoria North"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-14 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#555] leading-relaxed text-lg mb-4">
              There is a right way and a wrong way to face an ending. The wrong way is to be dragged into it - bitter, confused, demanding answers from God about why it happened. The right way is what Jesus modelled: walking into it with intention, speaking with purpose, and releasing your spirit into the Father&apos;s hands rather than gripping your own life so tightly it bruises.
            </p>
            <p className="text-[#555] leading-relaxed mb-10">
              Good Friday is the most important day in human history - not because a good man died, but because the right man died, in the right way, for the right reason. And everything He said in those final hours was a message to you.
            </p>

            <div className="space-y-10">
              {points.map((p) => (
                <div key={p.n} className="flex gap-6 items-start">
                  <div className="bg-[#FFD600] text-[#1a1a1a] font-extrabold w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                    {p.n}
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-[#2a9df4] mb-1">{p.title}</h2>
                    <p className="text-xs text-[#008080] font-semibold mb-3">{p.scripture}</p>
                    <p className="text-[#555] leading-relaxed">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <blockquote className="border-l-4 border-[#FFD600] pl-5 py-2 my-10 bg-[#f0fafa] rounded-r-xl">
              <p className="text-[#2a9df4] font-semibold text-lg italic">
                &quot;Tetelestai - paid in full. That word is not the end of the story. It is the proof that the story worked.&quot;
              </p>
              <cite className="text-[#555] text-sm not-italic mt-2 block">- Pastor Ricardo Zaal</cite>
            </blockquote>

            <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">What Good Friday Changes for You</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              Good Friday is not a day for guilt. Guilt says you owe something. The cross says the debt is paid. Three things the death of Jesus changes for you right now:
            </p>
            <ol className="list-decimal list-inside space-y-3 text-[#555] leading-relaxed mb-6">
              <li><strong>Your past has no legal claim on you.</strong> The debt was stamped tetelestai. Stop paying what has already been settled.</li>
              <li><strong>Your endings are not final.</strong> Friday looked like the end. Sunday proved it was a transition. Whatever is dying in your life right now - God has not abandoned the story.</li>
              <li><strong>Your access to the Father is open.</strong> Matthew 27:51 - the temple veil was torn from top to bottom the moment Jesus died. The barrier between you and God was removed. You no longer need a priest, a good track record, or a cleaned-up life. The way in is open.</li>
            </ol>

            <p className="text-[#555] leading-relaxed">
              If you are in Pretoria North and want to hear this kind of teaching in person,{' '}
              <Link href="/plan-your-visit" className="fgi-link">
                join us on a Sunday
              </Link>{' '}
              - Fountain of Grace International meets every week at 323 B Danie Theron Street.
            </p>
          </div>
        </section>

        <section className="bg-gray-50 py-12 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-[#1a1a1a] mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">What does it mean to die right according to the Bible?</h3>
                <p className="text-[#555] leading-relaxed text-sm">To die right means to face an ending with purpose and surrender rather than bitterness and panic. Jesus is the model - He spoke seven deliberate statements from the cross, forgave His accusers, provided for His mother, and declared it finished. Nothing about His death was reactive. Dying right is choosing what your ending says about what you believed.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">Why is Good Friday important if the resurrection is what matters?</h3>
                <p className="text-[#555] leading-relaxed text-sm">You cannot have Easter Sunday without Good Friday. The resurrection has no power unless the death was real, complete, and accepted. Hebrews 9:22 says without the shedding of blood there is no remission. Good Friday is where the full price was paid. Sunday proves it worked - but Friday is where the work was done.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">What did Jesus mean when He said &quot;It is finished&quot;?</h3>
                <p className="text-[#555] leading-relaxed text-sm">The Greek word is tetelestai - used in commerce to mean &quot;paid in full.&quot; Merchants would stamp a debt with tetelestai when the account was settled. When Jesus said it, He declared that every debt owed by sin to God&apos;s justice was paid completely. Not partially. Not on credit. Finished. That word is the foundation of everything the New Testament says about forgiveness, healing, and access to God.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">How do I face painful endings in my own life?</h3>
                <p className="text-[#555] leading-relaxed text-sm">The same way Jesus faced His: with honesty, with trust in the Father, and with a bigger picture in view. When something ends in your life that you did not ask for - a relationship, a job, a season - the question is not only &quot;why did this happen?&quot; but &quot;what is this completing?&quot; Dying right means refusing to let the ending write the final word.</p>
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

        <section className="bg-white py-10 px-4 sm:px-6 border-t border-gray-100">
          <div className="max-w-3xl mx-auto">
            <details className="group">
              <summary className="cursor-pointer text-[#2a9df4] font-semibold text-base select-none list-none flex items-center gap-2">
                <span className="inline-block transition-transform group-open:rotate-90">&#9658;</span>
                Read Full Sermon Transcript
              </summary>
              <div className="mt-6 text-[#555] text-sm leading-relaxed whitespace-pre-wrap">
                Transcript coming soon.
              </div>
            </details>
          </div>
        </section>
      </article>
    </>
  )
}
