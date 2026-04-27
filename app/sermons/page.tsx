import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sermons | Bible Teaching | Fountain of Grace International',
  description:
    'Practical Bible teaching from a Christian church in Pretoria North. Every Sunday message addresses a real problem you are facing. Listen online or come in person.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/sermons',
  },
  openGraph: {
    title: 'Sermons | Bible Teaching | Fountain of Grace International',
    description:
      'Practical Bible teaching from a Christian church in Pretoria North. Every Sunday message addresses a real problem you are facing. Listen online or come in person.',
    type: 'website',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International — Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/sermons',
  },
}

const sermonPosts = [
  {
    slug: 'the-principle-that-activates-everything',
    title: 'The Principle That Activates Everything: Right Action',
    date: '2026-04-26',
    dateDisplay: '26 April 2026',
    intro:
      'You have prayed. You have believed. But something is still not activating. Right action — obedient, timely movement in the right direction — is the principle that turns faith into results. James 2:17.',
  },
  {
    slug: 'why-some-problems-wont-leave-until-you-understand-this',
    title: "Why Some Problems Won't Leave Until You Understand This",
    date: '2026-04-19',
    dateDisplay: '19 April 2026',
    intro:
      'The blood of Jesus has five specific functions that most believers have never applied. Problems that keep returning do so until you understand what Revelation 12:11 actually means by "they overcame."',
  },
  {
    slug: 'you-love-god-but-are-you-in-the-game',
    title: 'You Love God — But Are You Actually in the Game?',
    date: '2026-04-05',
    dateDisplay: '5 April 2026',
    intro:
      'The crowd cheered Jesus and then crucified Him. The donkey carried Him in silence and made history. Based on Matthew 21 and Luke 19, this message asks which one describes your relationship with God right now.',
  },
  {
    slug: 'when-knowing-is-the-problem',
    title: 'When Knowing Is the Problem',
    date: '2026-02-15',
    dateDisplay: '15 February 2026',
    intro:
      'James 1:22 — the hearer who does not act is like a man who looks in a mirror and walks away forgetting his face. You already know what to do. That is exactly the problem this message addresses.',
  },
  {
    slug: 'when-good-things-block-god-things',
    title: 'When Good Things Block God Things',
    date: '2026-02-08',
    dateDisplay: '8 February 2026',
    intro:
      'You can be climbing a ladder leaned against the wrong wall. Good intentions and genuine busyness — but misaligned with God\'s appointed season. The Martha pattern is more common than most people admit.',
  },
  {
    slug: 'your-resolution-didnt-fail-you-quit-acting',
    title: "Your Resolution Didn't Fail — You Quit Acting",
    date: '2026-01-25',
    dateDisplay: '25 January 2026',
    intro:
      'The resolution was not the problem. Your habits did not hear the declaration. You are not lazy — you are tired of failing. This message explains the gap between motivation and consistent action.',
  },
  {
    slug: 'the-system-youre-praying-against-without-knowing-it',
    title: "The System You're Praying Against Without Knowing It",
    date: '2026-01-18',
    dateDisplay: '18 January 2026',
    intro:
      'God already opened the door. The system is already set. But disobedience, ingratitude, and praying for what is already provided — without walking through it — is unknowingly working against your own breakthrough.',
  },
  {
    slug: 'why-does-your-life-keep-collapsing',
    title: 'Why Does Your Life Keep Collapsing If God Is For You?',
    date: '2026-01-11',
    dateDisplay: '11 January 2026',
    intro:
      'Living 70 years but repeating the same one. Collapsing in the same places. Storms do not create what spills out — they reveal what was already there. This message names the root, not just the symptom.',
  },
  {
    slug: 'why-some-things-refuse-to-move',
    title: 'Why Some Things Refuse to Move',
    date: '2026-01-04',
    dateDisplay: '4 January 2026',
    intro:
      'The name of Jesus is not a religious formula to end prayers. It is a legal claim that requires relationship and order. Philippians 2:9-10 and Matthew 7:22-23 explain why some things still will not move.',
  },
  {
    slug: 'why-your-prayers-are-not-changing-your-life',
    title: 'Why Your Prayers Are Not Changing Your Life',
    date: '2026-01-04',
    dateDisplay: '4 January 2026',
    intro:
      'A prophetic word only activates when faith meets the right action step. Most regrets are not about what you did wrong — they are about what you never did at all. The foundation was laid. Nobody ever added the bricks.',
  },
  {
    slug: 'right-action-principles-that-move-people-forward-faster',
    title: 'Part 2: Right Action — The Principles That Move People Forward Faster',
    date: '2026-03-15',
    dateDisplay: '15 March 2026',
    intro:
      'Knowing the principles is not the same as applying them. Part 2 asks the harder question: why do you still know, but not act? What separates the person who plans from the person who moves?',
  },
  {
    slug: 'the-principles-that-move-people-forward-faster',
    title: 'The Principles That Move People Forward Faster',
    date: '2026-03-08',
    dateDisplay: '8 March 2026',
    intro:
      'You have been praying. You have been trying. Nothing has changed. This message gives 10 biblical principles — obedience, positioning, wisdom, strategy, stewardship, relationships, and more.',
  },
  {
    slug: 'what-if-someone-else-finishes-what-was-meant-for-you',
    title: 'What If Someone Else Finishes What Was Meant for You?',
    date: '2026-02-22',
    dateDisplay: '22 February 2026',
    intro:
      'You know your potential. You keep postponing. Based on Esther 4:14, this message asks the uncomfortable question: what if your window closes and someone else steps into your assignment?',
  },
  {
    slug: 'follow-your-inner-voice-discover-your-destiny',
    title: 'Follow Your Inner Voice — Discover Your Destiny',
    date: '2026-02-24',
    dateDisplay: '24 February 2026',
    intro:
      'Before you were born, God already set you apart. This message challenges you to stop listening to the voices that told you to stop running — and start moving in the direction God placed inside you.',
  },
  {
    slug: 'be-a-doer-of-gods-word-not-just-a-hearer',
    title: "Be a Doer of God's Word, Not Just a Hearer",
    date: '2026-02-16',
    dateDisplay: '16 February 2026',
    intro:
      'James 1:21-25 — the person who hears and forgets is like a man who looks in a mirror and walks away. The blessing is attached to the doing, not the hearing.',
  },
  {
    slug: 'why-youre-not-moving-forward-and-how-to-break-it',
    title: "Why You're Not Moving Forward — And How to Break It",
    date: '2026-03-01',
    dateDisplay: '1 March 2026',
    intro:
      'Most people are not stuck because of a lack of information. They are stuck because of four specific patterns that disguise themselves as wisdom. This message names them and breaks them.',
  },
  {
    slug: 'pruning-for-progress',
    title: 'Pruning for Progress: From Bare Branch to Bountiful Blessing',
    date: '2025-11-02',
    dateDisplay: '2 November 2025',
    intro:
      'John 15:1-8 — God prunes every branch that bears fruit so it bears more. The cutting is not punishment. It is preparation. The season of pruning is the season closest to breakthrough.',
  },
  {
    slug: 'no-more-waiting-rooms-god-is-live-now',
    title: 'No More Waiting Rooms — God Is Live Now',
    date: '2025-09-28',
    dateDisplay: '28 September 2025',
    intro:
      'You are not stuck in a waiting room. God is not buffering. Isaiah 43:19 says the new thing is already springing forth. The question is not when He will move — it is whether you are tuned in to where He already is.',
  },
  {
    slug: 'the-silent-assassin-of-destiny',
    title: 'The Silent Assassin of Destiny: Overthinking',
    date: '2025-08-31',
    dateDisplay: '31 August 2025',
    intro:
      'Overthinking kills destiny before you start. The enemy cannot touch you unless you allow him to — and his entry point is your mind. Based on 2 Corinthians 10:4-5, this message names the pattern and shows how to break it.',
  },
  {
    slug: 'the-anointing-that-makes-hell-fear-you',
    title: 'The Anointing That Makes Hell Fear You',
    date: '2025-08-24',
    dateDisplay: '24 August 2025',
    intro:
      'Isaiah 10:27 — the yoke shall be destroyed because of the anointing. Not loosened. Rendered useless. This message explains what the anointing actually is, what it does, and why hell fears the person who carries it.',
  },
  {
    slug: 'faith-is-the-router-that-connects-you-to-gods-supply',
    title: "Faith Is the Router That Connects You to God's Supply",
    date: '2025-06-08',
    dateDisplay: '8 June 2025',
    intro:
      'The Wi-Fi subscription is paid. The signal is available. But if your router is broken, you receive nothing — not because the supply stopped, but because the connection failed. Faith is your router. Based on 2 Corinthians 1:20 and Proverbs 3:5.',
  },
  {
    slug: 'hosting-the-presence-of-god',
    title: 'Hosting the Presence of God',
    date: '2025-06-22',
    dateDisplay: '22 June 2025',
    intro:
      "Psalm 27:8 — seek my face, require my presence. Obed-Edom's house overflowed in three months. Samson lost his strength without noticing. The difference between them was not effort — it was how each one treated the presence of God.",
  },
  {
    slug: 'the-danger-of-overnight-success',
    title: 'The Danger of Overnight Success and the Power of Long Obedience',
    date: '2025-05-18',
    dateDisplay: '18 May 2025',
    intro:
      'You can\'t cheat growth — you can only delay maturity. Based on Ecclesiastes 3:1 and Song of Solomon 2:15, this message shows why heaven builds in seasons, why little compromises become great falls, and why preparation is heaven\'s proof of trust.',
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Sermons — Fountain of Grace International',
    description: 'Practical teaching for real life from Fountain of Grace International in Pretoria North.',
    url: 'https://www.fountaingrace.org/sermons',
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
    blogPost: sermonPosts.map((s) => ({
      '@type': 'BlogPosting',
      headline: s.title,
      datePublished: s.date,
      url: `https://www.fountaingrace.org/sermons/${s.slug}`,
      author: { '@type': 'Person', name: 'Pastor Ricardo Zaal' },
    })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Sermons', item: 'https://www.fountaingrace.org/sermons' },
    ],
  },
]

export default function SermonsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* HERO */}
      <section className="bg-[#008080] text-white pt-10 pb-10 px-4 sm:px-6">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-white font-semibold text-xs uppercase tracking-wider mb-3">
            Sunday Teaching · Pretoria North
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
            Practical Bible teaching for real life.
          </h1>
          <p className="text-white text-base leading-relaxed mb-5">
            Every message at{' '}
            <Link href="/about" className="text-white font-semibold underline hover:text-[#1a1a1a]">Fountain of Grace International</Link>{' '}
            is built around a problem people are actually living with. Not theory. Things that connect to your week.
          </p>
          <Link href="/plan-your-visit" className="btn-primary text-sm">
            Come in Person
          </Link>
        </div>
      </section>

      {/* SERMON CARDS */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6">
        <div className="section-container max-w-4xl">
          <div className="space-y-8">
            {sermonPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-xl border border-gray-100 p-6 sm:p-8 hover:shadow-md transition-shadow"
              >
                <time
                  dateTime={post.date}
                  className="text-xs font-semibold text-[#008080] uppercase tracking-wider"
                >
                  {post.dateDisplay}
                </time>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-2 mb-4 leading-snug">
                  {post.title}
                </h2>
                <p className="text-[#595959] leading-relaxed mb-6">{post.intro}</p>
                <Link
                  href={`/sermons/${post.slug}`}
                  className="text-[#008080] font-semibold text-sm hover:underline"
                  aria-label={`Read full message: ${post.title}`}
                >
                  Read More →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DEVOTIONAL SIGNUP */}
      <section className="bg-[#f0fafa] py-14 px-4 sm:px-6 border-t border-[#e0f4f4]">
        <div className="section-container max-w-xl text-center">
          <p className="text-[#008080] font-semibold text-xs uppercase tracking-widest mb-3">
            Every week · Free
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Get the weekly message delivered to you
          </h2>
          <p className="text-[#595959] leading-relaxed mb-7">
            Each week Pastor Ricardo sends a short devotional based on the Sunday message —
            practical, direct, and connected to what you are actually going through.
            Choose how you want to receive it.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/27752592555?text=Hi%2C%20please%20add%20me%20to%20the%20weekly%20devotional%20list."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#25d366] text-[#1a1a1a] font-bold px-7 py-3 rounded-lg hover:bg-[#1ebe5d] transition-colors"
            >
              Subscribe via WhatsApp →
            </a>
            <a
              href="mailto:info@fountaingrace.org?subject=Weekly%20Devotional%20Signup&body=Hi%2C%20please%20add%20me%20to%20the%20weekly%20devotional%20email%20list.%0A%0AMy%20name%20is%3A%20"
              className="inline-block bg-[#2a9df4] text-white font-bold px-7 py-3 rounded-lg hover:bg-[#1a8de4] transition-colors"
            >
              Subscribe via Email →
            </a>
          </div>
          <p className="text-xs text-[#7d7d7d] mt-4 max-w-md mx-auto leading-relaxed">
            By subscribing you consent to Fountain of Grace International (NPO 316-193) sending you a weekly devotional. Your details are used only for this purpose and are never sold or shared. Unsubscribe any time by replying STOP or UNSUBSCRIBE. See our{' '}
            <a href="/privacy-policy" className="underline hover:text-[#008080]">Privacy Policy</a>.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#008080] py-14 px-4 sm:px-6">
        <div className="section-container text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Come and hear this in person — Pretoria North
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Every Sunday at 09:00. Fountain of Grace International, 323 B Danie Theron Street, Pretoria North.
          </p>
          <Link href="/plan-your-visit" className="btn-primary">
            Plan Your Visit
          </Link>
        </div>
      </section>
    </>
  )
}
