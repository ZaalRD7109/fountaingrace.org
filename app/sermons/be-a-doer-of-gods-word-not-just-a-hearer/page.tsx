import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "You Know What to Do. So Why Is Nothing Changing? | Fountain of Grace International",
  description:
    "James 1:21-25 - the person who hears and forgets is like a man who looks in a mirror and walks away. This message calls for active response to truth. Pretoria North.",
  robots: 'index, follow',
  alternates: {
    canonical: "https://www.fountaingrace.org/sermons/be-a-doer-of-gods-word-not-just-a-hearer",
  },
  openGraph: {
    title: "You Know What to Do. So Why Is Nothing Changing?",
    description:
      "James 1:21-25. What is the difference between a person who hears and a person who does? Fountain of Grace International, Pretoria North.",
    type: 'article',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International - Church in Pretoria North' }],
    url: "https://www.fountaingrace.org/sermons/be-a-doer-of-gods-word-not-just-a-hearer",
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'You Know What to Do. So Why Is Nothing Changing?',
    description: 'Based on James 1:21-25. Pastor Ricardo Zaal teaches on the difference between passive hearing and active doing of God\'s word - and the blessing that comes to those who act.',
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
    datePublished: '2026-02-16T12:00:00+02:00',
    url: 'https://www.fountaingrace.org/sermons/be-a-doer-of-gods-word-not-just-a-hearer',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Sermons', item: 'https://www.fountaingrace.org/sermons' },
      { '@type': 'ListItem', position: 3, name: "You Know What to Do. So Why Is Nothing Changing?", item: 'https://www.fountaingrace.org/sermons/be-a-doer-of-gods-word-not-just-a-hearer' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "What is James 1:22 talking about when it says 'doers of the word'?",
        acceptedAnswer: { '@type': 'Answer', text: "James 1:22 says to be doers of the word and not hearers only, warning that those who only hear are deceiving themselves. Pastor Ricardo Zaal at Fountain of Grace International, Pretoria North, teaches that the blessing in James 1:25 is attached to doing - not to merely receiving information." },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between hearing the word and receiving the word?',
        acceptedAnswer: { '@type': 'Answer', text: "Hearing is passive - it happens without any change to behaviour. Receiving with meekness, as James 1:21 describes, is an active posture of laying aside what is already in you, being teachable, and continuing under what you receive. The message from Fountain of Grace International in Pretoria North draws this distinction clearly." },
      },
      {
        '@type': 'Question',
        name: 'What does the mirror illustration in James 1:23-24 mean?',
        acceptedAnswer: { '@type': 'Answer', text: "James 1:23-24 compares a hearer who does not act to a man who looks in a mirror, sees what he looks like, and immediately forgets. The mirror represents the word of God. Walking away unchanged means the word had no lasting effect. The blessing James describes is reserved for the person who looks into the word and continues in it - who acts on what they see." },
      },
      {
        '@type': 'Question',
        name: 'Why does the Bible say a hearer only is deceiving themselves?',
        acceptedAnswer: { '@type': 'Answer', text: "James 1:22 uses the word 'deceived' deliberately. A person who hears truth and does not act has convinced themselves that hearing is enough. But knowledge without obedience creates a false sense of spiritual progress. Pastor Ricardo Zaal at Fountain of Grace International teaches that self-deception in this context is not ignorance - it is an active misreading of where you actually stand." },
      },
    ],
  },
]

const sermonTranscript = "James 1 verse 21. And I'm going to read from the New King James Version. Therefore, lay aside all faultiness and overflow of wickedness, and receive with meekness the implanted word, which is able to save your souls. But be a doers of the word and not hearers only. Deceiving yourself. For if anyone is a hearer of the word and not a doer, he is like a man observing his natural face in a mirror. For he observes himself, goes away, and immediately forgets what kind of man he was. But he who looks into the perfect law of liberty and continues in it, and is not forgetful, hearers but a doer of the word, this one will be blessed in what he does. This one will be blessed in what he does."

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
              Be a Doer of God&apos;s Word, Not Just a Hearer
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              James 1:21-25. The person who only hears and does not act is like someone who looks in a mirror, sees what they look like, and immediately forgets. The one who acts - this one will be blessed in what they do.
            </p>
            <p className="text-white/60 text-sm">
              Pastor Ricardo Zaal · Fountain of Grace International, Pretoria North · 16 February 2026
            </p>
          </div>
        </header>

        <section className="bg-white pt-10 pb-2 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#1a1a1a] text-lg font-semibold leading-snug mb-4">{"Why do things stay the same even when you know better?"}</p>
            <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/L0NMow_4Ni0"
                title="You Know What to Do. So Why Is Nothing Changing?"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="text-[#555] text-sm mt-4 mb-2">Prefer reading? The full sermon notes are below.</p>
            <div className="bg-[#f0fafa] border border-[#cfeeee] rounded-xl p-5 mt-6">
              <h2 className="text-lg font-bold text-[#1a1a1a] mb-3">This message is for you if:</h2>
              <ul className="list-disc list-inside space-y-2 text-[#555]">
                <li className="leading-relaxed">{"You feel stuck in old habits"}</li>
                <li className="leading-relaxed">{"You know what to do but don't"}</li>
                <li className="leading-relaxed">{"You start strong and quickly stop"}</li>
                <li className="leading-relaxed">{"You think knowing is the answer"}</li>
              </ul>
            </div>

          </div>
        </section>

        <section className="bg-white py-14 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-[#555] leading-relaxed text-lg">
              James 1:21-25 (NKJV) - <em>&quot;Therefore, lay aside all filthiness and overflow of wickedness, and receive with meekness the implanted word, which is able to save your souls. But be doers of the word, and not hearers only, deceiving yourselves.&quot;</em>
            </p>

            <p className="text-[#555] leading-relaxed">
              The person who hears and does not act is not neutral. They are actively deceiving themselves. James does not say they are uninformed - he says they are deceived. They have the knowledge. They have heard truth. But they have walked away unchanged.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mt-8 mb-3">The mirror illustration</h2>
            <p className="text-[#555] leading-relaxed">
              James uses one of the most vivid images in the New Testament: a man who looks at his face in a mirror, then walks away and immediately forgets what he looked like. That is what passive hearing does. You sit in a service, you receive truth, you feel something move - and by the time you reach your car, it is already fading.
            </p>
            <p className="text-[#555] leading-relaxed">
              The person who looks into the perfect law of liberty and <em>continues in it</em> - who does not forget but acts - this one will be blessed in what they do. The blessing is attached to the doing, not the hearing.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mt-8 mb-3">What does active receiving look like?</h2>
            <div className="space-y-4">
              {[
                { title: 'Lay aside', body: 'The word calls you to put something down before you can pick something up. You cannot receive with full hands. Laying aside means actively clearing out what has been filling the space where the word should go.' },
                { title: 'Receive with meekness', body: 'Meekness is not weakness. It is teachability - the posture of someone who is ready to be corrected, shaped, and directed. Pride blocks the implanted word from taking root.' },
                { title: 'Continue in it', body: 'Continuing in the law of liberty means staying under it. Not walking away. Not hearing on Sunday and living contrary on Monday. The word you received is supposed to accompany your decisions throughout the week.' },
              ].map((item) => (
                <div key={item.title} className="card-teal-border">
                  <p className="font-bold text-[#2a9df4] mb-1">{item.title}</p>
                  <p className="text-[#555] text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>

            <blockquote className="border-l-4 border-[#FFD600] pl-5 py-2 my-8 bg-[#f0fafa] rounded-r-xl">
              <p className="text-[#2a9df4] font-semibold text-lg italic">
                &quot;This one will be blessed in what he does.&quot;
              </p>
              <cite className="text-[#555] text-sm not-italic mt-1 block">- James 1:25</cite>
            </blockquote>

            <p className="text-[#555] leading-relaxed">
              If you are in Pretoria North and you are ready to hear something that challenges you to actually move,{' '}
              <Link href="/plan-your-visit" className="fgi-link">
                plan your visit to Fountain of Grace International
              </Link>
              . Services are every Sunday at 09:00.
            </p>
          </div>
        </section>

        <section className="bg-[#f0fafa] py-14 px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-[#2a9df4] mb-8">Questions this message answers</h2>
            <dl className="space-y-0">
              {[
                {
                  q: "What is James 1:22 talking about when it says 'doers of the word'?",
                  a: "James 1:22 says to be doers of the word and not hearers only, warning that those who only hear are deceiving themselves. Pastor Ricardo Zaal at Fountain of Grace International, Pretoria North, teaches that the blessing in James 1:25 is attached to doing - not to merely receiving information.",
                },
                {
                  q: 'What is the difference between hearing the word and receiving the word?',
                  a: "Hearing is passive - it happens without any change to behaviour. Receiving with meekness, as James 1:21 describes, is an active posture of laying aside what is already in you, being teachable, and continuing under what you receive. The message from Fountain of Grace International in Pretoria North draws this distinction clearly.",
                },
                {
                  q: 'What does the mirror illustration in James 1:23-24 mean?',
                  a: "James 1:23-24 compares a hearer who does not act to a man who looks in a mirror, sees what he looks like, and immediately forgets. The mirror represents the word of God. Walking away unchanged means the word had no lasting effect. The blessing James describes is reserved for the person who looks into the word and continues in it - who acts on what they see.",
                },
                {
                  q: 'Why does the Bible say a hearer only is deceiving themselves?',
                  a: "James 1:22 uses the word 'deceived' deliberately. A person who hears truth and does not act has convinced themselves that hearing is enough. But knowledge without obedience creates a false sense of spiritual progress. Pastor Ricardo Zaal at Fountain of Grace International teaches that self-deception in this context is not ignorance - it is an active misreading of where you actually stand.",
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
                This message was preached by Pastor Ricardo Zaal at Fountain of Grace International,
                323 B Danie Theron Street, Pretoria North, Gauteng, South Africa. Fountain of Grace
                International (NPO No: 316-193) holds weekly Sunday services at 09:00. Teachings are
                practical and scripture-grounded, designed to connect with the everyday life of people
                in Pretoria North.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#008080] py-14 px-4 sm:px-6">
          <div className="section-container text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Come and hear this in person - Pretoria North.
            </h2>
            <p className="text-white/70 mb-8 max-w-lg mx-auto">
              Every Sunday at 09:00. Fountain of Grace International, 323 B Danie Theron Street, Pretoria North.
            </p>
            <Link href="/plan-your-visit" className="btn-primary">
              Plan Your Visit
            </Link>
          </div>
        </section>
      
        <section className="bg-white py-12 px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-xl font-bold text-[#1a1a1a] mb-2">Send this to someone who needs it</h2>
            <p className="text-[#555] mb-5">One message can reach someone you cannot. Pass it on.</p>
            <a href={"https://wa.me/?text=I%20thought%20this%20message%20may%20encourage%20you%3A%20https%3A//www.fountaingrace.org/sermons/be-a-doer-of-gods-word-not-just-a-hearer%3Futm_source%3Dwhatsapp"} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold text-lg px-7 py-4 rounded-xl hover:bg-[#1ebe5d] transition-colors w-full sm:w-auto">
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden="true"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.821 11.821 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.477-.911zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
              Share on WhatsApp
            </a>
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
                {sermonTranscript}
              </div>
            </details>
          </div>
        </section>
      </article>
    </>
  )
}
