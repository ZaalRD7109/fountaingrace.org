import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tired of the Same Pain Coming Back? Try This',
  description:
    'Same sickness returning. Relationships breaking. Money never lasting. Discover the weapon Jesus used in the dust at Fountain of Grace International, Pretoria North.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/sermons/tired-of-the-same-pain-coming-back-try-this',
  },
  openGraph: {
    title: 'Tired of the Same Pain Coming Back? Try This',
    description:
      'If your family keeps repeating the same pain, sickness, breakups or money problems, something deeper is at work. Pastor Ricardo Zaal opens up a spiritual weapon most believers have never been taught.',
    type: 'article',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International - Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/sermons/tired-of-the-same-pain-coming-back-try-this',
  },
}

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Tired of the Same Pain Coming Back? Try This",
    "description": "Pastor Ricardo Zaal teaches on a spiritual weapon hidden in plain sight from Genesis to Revelation. Using John 8, Genesis 1-4, Numbers 16, Joshua 10 and Jeremiah 22, he shows how the earth hears, records and responds. The message ends with prophetic declarations over your bloodline, finances and destiny.",
    "author": {
      "@type": "Person",
      "name": "Pastor Ricardo Zaal"
    },
    "publisher": {
      "@type": "Church",
      "name": "Fountain of Grace International",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "323 B Danie Theron Street",
        "addressLocality": "Pretoria North",
        "addressRegion": "Gauteng",
        "addressCountry": "ZA"
      }
    },
    "datePublished": "2025-12-14",
    "url": "https://www.fountaingrace.org/sermons/tired-of-the-same-pain-coming-back-try-this"
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.fountaingrace.org"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Sermons",
        "item": "https://www.fountaingrace.org/sermons"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Tired of the Same Pain Coming Back? Try This",
        "item": "https://www.fountaingrace.org/sermons/tired-of-the-same-pain-coming-back-try-this"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Tired of the Same Pain Coming Back? Try This",
    "description": "If your family keeps repeating the same pain, sickness, breakups or money problems, something deeper is at work. Pastor Ricardo Zaal opens up a spiritual weapon most believers have never been taught.",
    "thumbnailUrl": "https://img.youtube.com/vi/_fxcjo2raRQ/maxresdefault.jpg",
    "uploadDate": "2025-12-14T12:00:00+02:00",
    "embedUrl": "https://www.youtube.com/embed/_fxcjo2raRQ",
    "url": "https://www.fountaingrace.org/sermons/tired-of-the-same-pain-coming-back-try-this",
    "author": {
      "@type": "Person",
      "name": "Pastor Ricardo Zaal"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Fountain of Grace International",
      "url": "https://www.fountaingrace.org"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why do the same problems keep happening in my family?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pastor Ricardo explains that patterns often run through bloodlines and territories because the earth carries records. From Cain and Abel onward, the ground holds the testimony of what has been done on it. Premature death, shame, poverty and rejection get planted in the dust of a family line and keep producing the same fruit until someone confronts it at the root. Prayer alone is powerful, but Scripture shows certain things only shift when you address them where they were planted."
        }
      },
      {
        "@type": "Question",
        "name": "Is using soil in prayer not witchcraft?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Witchcraft counterfeits something God established first. In Genesis 1, God spoke to the earth before He spoke to man. Moses commanded the earth in Numbers 16. Joshua claimed soil as territory in Joshua 10. Jesus Himself wrote in the dust in John 8. This is a biblical principle from Genesis to Revelation. The difference is authority. You are not bowing to creation. You are standing in the authority of Christ and commanding creation to respond to the word of the Lord."
        }
      },
      {
        "@type": "Question",
        "name": "What does it mean that Jesus wrote on the ground?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "When the woman was caught in adultery, Jesus stooped down twice and wrote on the ground while her accusers stood waiting. Pastor Ricardo links this to Jeremiah 22:29 where God says oh earth, oh earth, write this man childless. Jesus was cancelling the accusation at its origin. He was declaring that the charge would produce nothing in her future. By the time He stood up, every accuser had walked away. The weapon was the dust."
        }
      },
      {
        "@type": "Question",
        "name": "I have prayed for years and nothing changes. What am I missing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This message is specifically for the person who is tired of praying without seeing shift. Pastor Ricardo says it is time for prayers that shift environments, not just feelings. The missing key for many believers is the point of contact Scripture gives us. The earth hears. The earth records. The earth responds. When you combine bold declaration with the biblical principle of speaking to the ground, you confront curses where they were planted instead of only where you feel them."
        }
      }
    ]
  }
]

const points = [
  {
    "n": 1,
    "title": "The ground hears what is said about you",
    "scripture": "Genesis 1:11 / Genesis 4:10",
    "body": "Before God ever spoke to man, He spoke to the earth. He said let the earth bring forth, and it obeyed. When Cain killed Abel, God told him the voice of his brother's blood was crying from the ground. The earth hears. The earth records. The earth testifies. Every word spoken over your bloodline, every act of injustice, every curse and every prayer leaves a mark in the dust. The same soil that buried your forefathers still holds the record of what was done."
  },
  {
    "n": 2,
    "title": "You were formed from dust, so dust remembers you",
    "scripture": "Genesis 2:7",
    "body": "The Lord God formed man of the dust of the ground and breathed into his nostrils the breath of life. Your body came from earth and returns to earth. That is why witch doctors and sangomas go to the soil and the waters. They know the earth carries records of bloodlines, origins and generations. But this knowledge does not belong to darkness. It belongs to the children of God first. The earth knows where you come from, and it must answer to the authority of the One who made you."
  },
  {
    "n": 3,
    "title": "Moses, Joshua and David made the earth fight for them",
    "scripture": "Numbers 16:30-32 / Joshua 10:24 / Psalm 18:7",
    "body": "Moses did not draw a sword against the rebels. He commanded the earth to open its mouth and it swallowed them. Joshua told his men to put their feet on the necks of the kings, claiming the soil as territory under God's authority. David said the earth shook and trembled because the earth hears the cry of the righteous. These were not poetic moments. They were spiritual warfare. The earth responds to voices that carry heaven's authority."
  },
  {
    "n": 4,
    "title": "Jesus wrote in the dust and the accusers walked away",
    "scripture": "John 8:6-8 / Jeremiah 22:29",
    "body": "When they dragged the woman caught in adultery, Jesus did not shout or argue. He stooped down and wrote on the ground. Twice. Jeremiah said oh earth, oh earth, hear the word of the Lord, write this man childless. Jesus took the same principle and wrote the accusation childless. The charge against her would produce nothing. That is your weapon. You can write your accusations into the dust and write yourself blessed, favoured, healed and prosperous in their place."
  }
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
              Tired of the Same Pain Coming Back? Try This
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              Some pain refuses to leave. The same sickness comes back. The same fights repeat in your home. The money never stretches. This message is for the person who is tired and ready for something to shift at the root.
            </p>
            <p className="text-white/60 text-sm">
              Pastor Ricardo Zaal · Fountain of Grace International, Pretoria North · 14 December 2025
            </p>
          </div>
        </header>

        <section className="bg-white pt-10 pb-2 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/_fxcjo2raRQ"
                title="Tired of the Same Pain Coming Back? Try This"
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
              You have prayed. You have fasted. You have stood in faith. But the same patterns keep showing up in your house, your body and your bank account. Relationships break the same way. Sickness returns the same way. Money runs out before the next pay date. You see something fighting your destiny and you are tired of just accepting it. If that is you, this message is not a comfort talk. It is a confrontation with the thing that keeps pulling you back.
            </p>
            <p className="text-[#555] leading-relaxed mb-10">
              There is a weapon written into Scripture from Genesis to Revelation that almost no one preaches. It is older than the church and older than the devil's strategy against your family. Jesus used it. Moses used it. Joshua used it. David used it. And once you see it, you can use it too.
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
                &quot;Jesus did not shout. He did not argue. He wrote it into the earth, and the accusation was cancelled at the root.&quot;
              </p>
              <cite className="text-[#555] text-sm not-italic mt-2 block">- Pastor Ricardo Zaal</cite>
            </blockquote>

            <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">How to Use This Weapon This Week</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              This is not theory. This is a point of contact. If the earth can be commanded to bring forth, it can be commanded to release what has been holding your family.
            </p>
            <ol className="list-decimal list-inside space-y-3 text-[#555] leading-relaxed mb-6">
              <li><strong>Get a handful of soil.</strong> Go outside your house or yard and take a small amount of soil into your hand. This is your point of contact. You are doing what Jesus did when He stooped down. You are bringing the spirit realm into agreement with a physical act.</li>
              <li><strong>Cancel the accusation at the root.</strong> Speak directly to the ground. Oh earth, oh earth, hear the word of the Lord. Write every curse, every premature death, every sickness, every breakup, every shame against my bloodline childless. Declare that the attack will produce nothing in your family.</li>
              <li><strong>Write yourself blessed.</strong> If the earth can record death, it can record life. Speak your name out loud. Write me prosperous. Write me healed. Write me favoured. Write my children destined for greatness. Write my home protected. The dust that received the curse will now carry the blessing.</li>
            </ol>

            <p className="text-[#555] leading-relaxed">
              If you are in Pretoria North and want to hear this kind of teaching live,{' '}
              <Link href="/plan-your-visit" className="fgi-link">
                come on a Sunday
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
                <h3 className="font-semibold text-[#1a1a1a] mb-2">Why do the same problems keep happening in my family?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Pastor Ricardo explains that patterns often run through bloodlines and territories because the earth carries records. From Cain and Abel onward, the ground holds the testimony of what has been done on it. Premature death, shame, poverty and rejection get planted in the dust of a family line and keep producing the same fruit until someone confronts it at the root. Prayer alone is powerful, but Scripture shows certain things only shift when you address them where they were planted.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">Is using soil in prayer not witchcraft?</h3>
                <p className="text-[#555] leading-relaxed text-sm">No. Witchcraft counterfeits something God established first. In Genesis 1, God spoke to the earth before He spoke to man. Moses commanded the earth in Numbers 16. Joshua claimed soil as territory in Joshua 10. Jesus Himself wrote in the dust in John 8. This is a biblical principle from Genesis to Revelation. The difference is authority. You are not bowing to creation. You are standing in the authority of Christ and commanding creation to respond to the word of the Lord.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">What does it mean that Jesus wrote on the ground?</h3>
                <p className="text-[#555] leading-relaxed text-sm">When the woman was caught in adultery, Jesus stooped down twice and wrote on the ground while her accusers stood waiting. Pastor Ricardo links this to Jeremiah 22:29 where God says oh earth, oh earth, write this man childless. Jesus was cancelling the accusation at its origin. He was declaring that the charge would produce nothing in her future. By the time He stood up, every accuser had walked away. The weapon was the dust.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">I have prayed for years and nothing changes. What am I missing?</h3>
                <p className="text-[#555] leading-relaxed text-sm">This message is specifically for the person who is tired of praying without seeing shift. Pastor Ricardo says it is time for prayers that shift environments, not just feelings. The missing key for many believers is the point of contact Scripture gives us. The earth hears. The earth records. The earth responds. When you combine bold declaration with the biblical principle of speaking to the ground, you confront curses where they were planted instead of only where you feel them.</p>
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
