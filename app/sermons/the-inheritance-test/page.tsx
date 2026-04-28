import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Inheritance Test: Will It Reach Three Generations? | Proverbs 13:22 | Fountain of Grace International',
  description:
    'A good man leaves an inheritance to his children\'s children. But most leave money without systems. Joseph\'s coat was never about the coat - it was about the character and principles underneath it. Pretoria North.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/sermons/the-inheritance-test',
  },
  openGraph: {
    title: 'The Inheritance Test: Will It Reach Three Generations?',
    description:
      'Proverbs 13:22 - a good man leaves an inheritance to his children\'s children. When Joseph\'s coat was taken twice, he never lost his character. The coat was not the inheritance - the character was. Pretoria North.',
    type: 'article',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International - Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/sermons/the-inheritance-test',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Inheritance Test: Will It Reach Three Generations?',
    description: 'Based on Proverbs 13:22, Proverbs 21:20, and the life of Joseph, this message challenges believers to build wealth systems, not just wealth - and to pass character and financial wisdom to the third generation the way Joseph passed kingdom principles under a coat of many colors.',
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
    datePublished: '2024-09-08',
    url: 'https://www.fountaingrace.org/sermons/the-inheritance-test',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Sermons', item: 'https://www.fountaingrace.org/sermons' },
      { '@type': 'ListItem', position: 3, name: 'The Inheritance Test', item: 'https://www.fountaingrace.org/sermons/the-inheritance-test' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What does Proverbs 13:22 say about inheritance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Proverbs 13:22 - "A good man leaveth an inheritance to his children\'s children: and the wealth of the sinner is laid up for the just." The inheritance God speaks of is not just money. The Amplified version adds "of moral stability and goodness." You cannot leave your children\'s children something that requires your presence to maintain. The inheritance must include the systems, the character, and the wisdom to grow what is received - not just the amount that is given.',
        },
      },
      {
        '@type': 'Question',
        name: 'What did Joseph\'s coat of many colors represent?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Joseph\'s coat represented favor, but it also represented the principles and kingdom mentality his father placed upon him. When his brothers took the coat, the character remained. When Potiphar\'s wife took the coat, the character remained. The inheritance Jacob left Joseph was not the coat - it was what the coat covered: a man who could not be stripped of his integrity, his wisdom, or his calling. That is the inheritance that reached Egypt and saved nations.',
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
              The Inheritance Test: Will It Reach Three Generations?
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              Proverbs 13:22 says a good man leaves an inheritance to his children&apos;s children. Not his children - his children&apos;s children. Most people leave money. God is asking for more than that. He is asking for systems, character, and the kind of wisdom that multiplies what it receives rather than spending it back down to zero.
            </p>
            <p className="text-white/60 text-sm">
              Pastor Ricardo Zaal · Fountain of Grace International, Pretoria North
            </p>
          </div>
        </header>

        <section className="bg-white py-14 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">The Pot Without the Skills to Cook</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              If you look in a cupboard and say there is nothing there, but somebody else can come in and make a full meal from the same cupboard - the problem was never the cupboard. The problem was the skill. You were looking for a ready-made meal. They were looking for ingredients.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              That is the difference between leaving your children money and leaving your children wisdom. Money without wisdom becomes zero quickly. The lottery winner who has lived paycheck to paycheck and suddenly receives five million rand does not become wealthy - they become a person with five million rand and a paycheck-to-paycheck mindset. The mindset brings the money back to where it feels familiar.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">Proverbs 13:22 - The Third Generation Standard</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              Proverbs 13:22 - &quot;A good man leaveth an inheritance to his children&apos;s children: and the wealth of the sinner is laid up for the just.&quot;
            </p>
            <p className="text-[#555] leading-relaxed mb-4">
              The Amplified version adds something important - the inheritance includes &quot;moral stability and goodness.&quot; It is not only financial. The question God is asking you today is not how much money you will leave behind. The question is whether what you leave behind is capable of growing without you. If the whole system stops the day you are not there, you have not left an inheritance - you have left a memory.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              A good man leaves something that the third generation can still build on. Not something they spend and forget. That requires teaching your children how to think, how to save, how to manage, and how to build - not just handing them what you have earned.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">Joseph&apos;s Coat Was Never Just a Coat</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              When Jacob gave Joseph the coat of many colors, he was placing favor on him. But he was also placing something deeper - a kingdom mentality. The coat was the outward sign of what was being built inwardly. Character. Wisdom. Systems for living.
            </p>
            <p className="text-[#555] leading-relaxed mb-4">
              The coat was taken twice. His brothers took it and dipped it in blood. Potiphar&apos;s wife took it and used it as a false accusation. Both times, the coat left his shoulders. But both times, Joseph remained exactly who his father had trained him to be. The coat was not the inheritance. The character underneath the coat was.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              The person who knows how to get money will always find money. The person who knows how to manage it will keep it and multiply it. The coat is money. The character is the system. Jacob gave his son both - and only one of them could be taken away.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">Proverbs 21:20 - The Wise Store Up</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              Proverbs 21:20 - &quot;There is treasure to be desired and oil in the dwelling of the wise; but a foolish man spendeth it up.&quot;
            </p>
            <p className="text-[#555] leading-relaxed mb-4">
              Joseph did not wait until the lean years arrived to start saving. He used the seven years of abundance to prepare for the seven lean years. That is forecasting. That is the kind of thinking that saves nations - not just families. When you are earning, you are in a season of abundance. The question is whether you are building the reserve that your lean season will require.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              Saving is not about the amount. It is about the consistency. Twenty rand a month will not feel like much. But twenty rand a month every month for twenty years, with compound interest working in your favour, becomes something your children can build from. The axe gets the tree down eventually. But the chainsaw gets it down faster with less effort. And the machine gets it down in three minutes while you are already moving to the next one. The system determines the outcome.
            </p>

            <h2 className="text-xl font-bold text-[#2a9df4] mb-3">The Mindset That Multiplies and the Mindset That Shrinks</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              The person who has always lived with a hundred rand and receives a million will not stay a millionaire long - because their internal system still runs on a hundred-rand mentality. They will stretch the million down to a hundred without realising it, because that is the level they know how to manage.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              The person who has been trained to take a hundred and steward it faithfully - that person, when given a million, will multiply it. Because the skill was already there. What Joseph received was not an advantage of resources. It was an advantage of training. That training survived the pit, the slave market, and the prison. By the time the opportunity arrived, the skill was ready to use it.
            </p>

            <blockquote className="border-l-4 border-[#FFD600] pl-5 py-2 my-10 bg-[#f0fafa] rounded-r-xl">
              <p className="text-[#2a9df4] font-semibold text-lg italic">
                &quot;The coat can be taken. The character cannot. Build the character in your children and you have given them something that no brother can steal and no accusation can remove. That is the inheritance that reaches three generations.&quot;
              </p>
              <cite className="text-[#555] text-sm not-italic mt-2 block">- Pastor Ricardo Zaal</cite>
            </blockquote>

            <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Three Principles to Pass On</h2>
            <ol className="list-decimal list-inside space-y-3 text-[#555] leading-relaxed mb-6">
              <li><strong>Teach systems, not just results.</strong> Do not only show your children what you have - show them how you think. How you earn, how you save, how you decide, and how you recover when things go wrong. That thinking is the inheritance. The money is the by-product.</li>
              <li><strong>Save before you feel like it.</strong> Joseph saved during abundance, not during lack. Start with any amount - the consistency matters more than the figure. Three types of savings: what you never touch, what you use for emergencies, and what you use to enjoy life. Never mix them. Never stop them.</li>
              <li><strong>Build multiple streams, not just one.</strong> When the one stream dries up, what flows? If nothing flows, you have not built - you have earned. One income trading your time for money is not freedom. The goal is to have income that does not require your presence every moment to continue.</li>
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
                <h3 className="font-semibold text-[#1a1a1a] mb-2">What does Proverbs 13:22 say about inheritance?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Proverbs 13:22 - a good man leaves an inheritance to his children&apos;s children, including moral stability and goodness. The inheritance is not just financial - it is the systems, character, and wisdom that allow what is left to grow beyond the one who gave it. If what you leave requires your presence to maintain, it is not an inheritance - it is a dependency. The goal is to build something that multiplies after you.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">What did Joseph&apos;s coat of many colors represent?</h3>
                <p className="text-[#555] leading-relaxed text-sm">The coat represented favor and kingdom identity. But its deeper meaning is seen in what happened when it was taken - twice. Joseph&apos;s brothers took it. Potiphar&apos;s wife took it. Each time, Joseph remained unchanged in character. The coat could be stolen. The man underneath could not. What Jacob gave Joseph went beyond fabric - it was a way of thinking and living that no circumstance could remove. That is the inheritance worth building.</p>
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
