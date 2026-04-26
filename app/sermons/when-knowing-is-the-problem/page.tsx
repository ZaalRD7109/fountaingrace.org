import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'When Knowing Is the Problem | Fountain of Grace International',
  description:
    'You know what to do. You have done the courses, attended the services, read the scriptures. But nothing has shifted. James 1:22 identifies why. Pretoria North.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/sermons/when-knowing-is-the-problem',
  },
  openGraph: {
    title: 'When Knowing Is the Problem',
    description:
      'The danger is not ignorance. The danger is delayed obedience in someone who already knows what God is asking. This message from James 1 speaks directly to it. Pretoria North.',
    type: 'article',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International — Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/sermons/when-knowing-is-the-problem',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'When Knowing Is the Problem',
    description: 'Based on James 1:21-25, this message addresses delayed obedience — the pattern of hearing truth, agreeing with truth, and then not doing anything about it. The danger is not ignorance. It is the person who looks in the mirror and walks away forgetting what they saw.',
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
    datePublished: '2026-02-15',
    url: 'https://www.fountaingrace.org/sermons/when-knowing-is-the-problem',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Sermons', item: 'https://www.fountaingrace.org/sermons' },
      { '@type': 'ListItem', position: 3, name: 'When Knowing Is the Problem', item: 'https://www.fountaingrace.org/sermons/when-knowing-is-the-problem' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why do Christians sometimes know the right thing but still not do it?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'James 1:22 calls this self-deception: "be ye doers of the word, and not hearers only, deceiving your own selves." Hearing the word creates a feeling of engagement that can substitute for actual obedience. The person who attends, listens, and agrees believes they are participating — but until the word moves into action, nothing has changed.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does the mirror illustration in James 1 mean?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'James 1:23-24 says the hearer who does not act is "like unto a man beholding his natural face in a glass: for he beholdeth himself, and goeth his way, and straightway forgetteth what manner of man he was." The mirror shows the truth. But the moment you walk away without acting on it, you have lost the benefit. Knowledge that does not produce action is forgotten knowledge.',
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
              When Knowing Is the Problem
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              This message is not for the ignorant. It is for the person who has attended every service, done every course, read every book, quoted every scripture — and yet nothing in their life has shifted. This is the message James 1 was written for.
            </p>
            <p className="text-white/60 text-sm">
              Pastor Ricardo Zaal · Fountain of Grace International, Pretoria North · 15 February 2026
            </p>
          </div>
        </header>

        <section className="bg-white pt-10 pb-2 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/JdeSa5ag41w"
                title="When Knowing Is the Problem | James 1:22"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-14 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">The Danger Is Not Ignorance</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              Most teaching assumes the problem is lack of knowledge. Give people more information, more inspiration, more scriptural insight — and they will change. But James 1 addresses a completely different problem: the person who hears the truth, agrees with the truth, understands the truth — and delays obedience to it.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              James 1:22 — &quot;But be ye doers of the word, and not hearers only, deceiving your own selves.&quot; The word &quot;deceiving&quot; is important. The hearer who does not act is not just passive — they are self-deceived. They believe they have engaged because they heard. But hearing without movement is not engagement with the Word. It is information storage.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">The Mirror That Nobody Acts On</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              James 1:23–24 — &quot;For if any be a hearer of the word, and not a doer, he is like unto a man beholding his natural face in a glass: for he beholdeth himself, and goeth his way, and straightway forgetteth what manner of man he was.&quot;
            </p>
            <p className="text-[#555] leading-relaxed mb-4">
              The illustration is precise. You look in the mirror. You see exactly what is there — a clear and accurate picture. You walk away. Within moments, the picture is gone. The mirror was useful while you were looking at it. The moment you moved, the usefulness ended because no action followed the seeing.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              Many believers live in the mirror. Every Sunday, the word shows them something. They agree. They feel conviction. They even make internal resolutions. By Tuesday, the picture has faded and the week continues as before.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">The Blessed One Acts</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              James 1:25 — &quot;But whoso looketh into the perfect law of liberty, and continueth therein, he being not a forgetful hearer, but a doer of the work, this man shall be blessed in his deed.&quot;
            </p>
            <p className="text-[#555] leading-relaxed mb-4">
              The blessing is attached to the doing, not the hearing. You can sit in the most powerful service of your life and leave with nothing if you take no corresponding action. The word says &quot;doer of the work&quot; — not doer of inspiration, not doer of emotions. The work. The specific, obedient step that the word revealed.
            </p>
            <p className="text-[#555] leading-relaxed mb-4">
              This is not about effort. It is about obedience. The person who leaves with one specific action they are going to take this week will receive more from the service than the person who cried throughout it but took nothing home.
            </p>

            <blockquote className="border-l-4 border-[#FFD600] pl-5 py-2 my-10 bg-[#f0fafa] rounded-r-xl">
              <p className="text-[#2a9df4] font-semibold text-lg italic">
                &quot;The blessing is not attached to the hearing. It is attached to the doing. You can know every scripture and still be missing the one obedient step that would change your life.&quot;
              </p>
              <cite className="text-[#555] text-sm not-italic mt-2 block">— Pastor Ricardo Zaal</cite>
            </blockquote>

            <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">The One Thing to Do After Reading This</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              You already know what God has been asking you to do. It is the thing that keeps coming up — in services, in prayer, in quiet moments. Write it down. Give it a date. Not a goal. A date. &quot;By [date], I will have done [specific step].&quot; That is the doer of the work.
            </p>

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
                <h3 className="font-semibold text-[#1a1a1a] mb-2">Why do Christians sometimes know the right thing but still not do it?</h3>
                <p className="text-[#555] leading-relaxed text-sm">James 1:22 calls this self-deception. Hearing the word creates a feeling of engagement that substitutes for actual obedience. The person who attends, listens, and agrees believes they are participating — but until the word produces a specific action, nothing has changed in their circumstances.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">What does the mirror illustration in James 1 mean practically?</h3>
                <p className="text-[#555] leading-relaxed text-sm">The mirror shows truth clearly while you are looking at it — but the moment you walk away without acting, the truth fades. Knowledge that does not produce action within a short window becomes forgotten knowledge. The &quot;doer of the work&quot; in James 1:25 is the one who acts on what the mirror showed them before the moment passes.</p>
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
