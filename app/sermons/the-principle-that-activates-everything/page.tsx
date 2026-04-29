import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Principle That Activates Everything: Right Action | Fountain of Grace International',
  description:
    'Faith without the right action at the right time produces nothing. This message shows why obedient, timely action is the activating principle behind every breakthrough. Pretoria North.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/sermons/the-principle-that-activates-everything',
  },
  openGraph: {
    title: 'The Principle That Activates Everything: Right Action',
    description:
      'The harvest belongs to the workers. Part 2 of the Principles series - why the right action at the right time changes everything. Fountain of Grace International, Pretoria North.',
    type: 'article',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International - Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/sermons/the-principle-that-activates-everything',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Principle That Activates Everything: Right Action',
    description: 'Six principles of right action: faith requires correct action, delayed right action destroys opportunity, right obedience in the right place, harvest belongs to workers, laziness blocks progress, and immediate right action multiplies impact.',
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
    datePublished: '2026-04-26',
    url: 'https://www.fountaingrace.org/sermons/the-principle-that-activates-everything',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Sermons', item: 'https://www.fountaingrace.org/sermons' },
      { '@type': 'ListItem', position: 3, name: 'The Principle That Activates Everything', item: 'https://www.fountaingrace.org/sermons/the-principle-that-activates-everything' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why doesn\'t prayer alone produce results?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'James 2:17 says faith without works is dead. Prayer is the starting point - but God designed the system so that faith requires a corresponding action. A prophetic word only becomes real when you take the step that aligns with it. Praying for a job while sending no CVs is faith without the right action.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is right action according to the Bible?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Right action is obedient, timely movement toward what God has said. It means acting immediately when opportunity comes (Proverbs 6:6-9 - the ant gathers in summer, not winter). It means obeying without negotiating, like Abraham in Genesis 12 who simply departed when God spoke. And it means aligning your effort with the correct goal - not working hard in the wrong direction.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why do some believers work hard but still see no results?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The problem is usually not the effort - it is the direction. Proverbs 13:4 says the soul of the sluggard craves and gets nothing, while the diligent is richly supplied. But even diligent effort in the wrong direction produces nothing. Matthew 9:37-38 says the harvest is plenteous but the labourers are few - meaning the harvest is always available, but workers must be positioned correctly to access it. Pastor Ricardo Zaal at Fountain of Grace International teaches that right action requires four things: prayer first, wisdom to identify the correct direction, positioning yourself correctly, and then moving immediately.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does James 2:17 mean by faith without works is dead?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "James 2:17 says faith by itself, if it does not have works, is dead. This does not mean you earn God's provision. It means faith was never designed to operate without a corresponding action. Noah believed the flood was coming - and built the ark. The belief and the building worked together. The ark without the belief is just wood. The belief without the ark is just a feeling. Right action is not works-based salvation - it is the activation mechanism that faith requires to produce results in the physical world.",
        },
      },
    ],
  },
]

const principles = [
  {
    n: 1,
    title: 'Faith Requires Correct Action',
    scripture: 'James 2:17',
    body: '"Faith by itself, if it does not have works, is dead." Believing that God will help you is not the same as doing the right thing that creates the help God will send. Noah believed the flood was coming - and built the ark. That is the pattern. Belief activates movement, and movement activates provision.',
  },
  {
    n: 2,
    title: 'Right Action Delayed Still Destroys Opportunity',
    scripture: 'Proverbs 6:6–9',
    body: '"Go to the ant, thou sluggard; consider her ways, and be wise." The ant gathers in summer. If she sleeps through summer and waits for winter, she starves. The right action at the wrong time is still the wrong action. Opportunities have windows. When the interview is at 10, arriving at 11 means the next candidate already has the position.',
  },
  {
    n: 3,
    title: 'Right Obedience in the Right Place',
    scripture: 'Genesis 12:1–4',
    body: 'God told Abraham to leave his country, his family, and his father\'s house - and go to a land He would show him. God was still speaking when Abraham made his decision. He did not negotiate. He did not ask for more information. "So Abram departed, as the LORD had spoken unto him." Obedience to the call - even before you know all the details - is the condition for the promise.',
  },
  {
    n: 4,
    title: 'The Harvest Belongs to the Workers',
    scripture: 'Matthew 9:37–38',
    body: '"The harvest truly is plenteous, but the labourers are few." The harvest is not the problem. The harvest has always been there. The problem is workers who want the harvest without working the field. You cannot expect a church to pray for you in your sickness if you have not been in that church for ten years. The sowing and the reaping are connected.',
  },
  {
    n: 5,
    title: 'Laziness Blocks Progress',
    scripture: 'Proverbs 13:4',
    body: '"The soul of the sluggard craves, and gets nothing, while the soul of the diligent is richly supplied." Desire is not enough. Craving the result without doing the work produces nothing. God honours the diligent. He can give you a Lamborghini - but if you have no income, the rates on it will take it back. Right action creates the context for what God provides to remain.',
  },
  {
    n: 6,
    title: 'Immediate Right Action Multiplies Impact',
    scripture: 'Luke 5:4–6',
    body: 'When Jesus told Simon to let down the nets, Simon did not plan it or schedule it. He did it immediately - and the catch broke the nets. Delayed right action reduces impact. When God says lower the net, the time to act is now. The immediacy of obedience is what triggers the multiplication.',
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
              The Principle That Activates Everything: Right Action
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              You have prayed. You have believed. You have attended every service. But something is still not activating. The missing piece is almost always the same: the right action, taken at the right time, in the right direction. This is the principle that turns faith into results.
            </p>
            <p className="text-white/60 text-sm">
              Pastor Ricardo Zaal · Fountain of Grace International, Pretoria North · 26 April 2026
            </p>
          </div>
        </header>

        <section className="bg-white py-14 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#555] leading-relaxed text-lg mb-4">
              Many people say, &quot;I have done everything.&quot; But when you ask what their everything was, it often turns out to be effort in the wrong direction, or the right action taken too late, or faith without the corresponding work. James 2:17 is not complicated: &quot;Faith by itself, if it does not have works, is dead.&quot; Right action is not optional - it is the activating mechanism.
            </p>
            <p className="text-[#555] leading-relaxed mb-10">
              This message builds on{' '}
              <Link href="/sermons/the-principles-that-move-people-forward-faster" className="fgi-link">
                Part 1 - The Principles That Move People Forward Faster
              </Link>
              . Where Part 1 gave 10 principles of advancement, Part 2 asks the harder question: why are people still stuck even when they know the principles? The answer is almost always the same: right knowledge without right action.
            </p>

            <div className="space-y-10">
              {principles.map((p) => (
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
                &quot;God told you to do certain things. He has spoken to you. Why have you not done it? That answer - when you find it honestly - is where your breakthrough is waiting.&quot;
              </p>
              <cite className="text-[#555] text-sm not-italic mt-2 block">- Pastor Ricardo Zaal</cite>
            </blockquote>

            <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Four Things That Make Right Action Effective</h2>
            <ol className="list-decimal list-inside space-y-3 text-[#555] leading-relaxed mb-6">
              <li><strong>Prayer first.</strong> &quot;Except the LORD build the house, they labour in vain that build it&quot; - Psalm 127:1. Direction comes from God. Start there.</li>
              <li><strong>Seek wisdom.</strong> Wisdom tells you what the correct action is. Without it, you work hard in the wrong direction.</li>
              <li><strong>Position yourself correctly.</strong> If you want to be a doctor, do not go to an engineering school. Right action requires right positioning.</li>
              <li><strong>Move immediately.</strong> When all four align - prayer, wisdom, positioning, and immediate action - things change.</li>
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

        <section className="bg-[#f0fafa] py-14 px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-[#2a9df4] mb-8">Questions this message answers</h2>
            <dl className="space-y-0">
              {[
                {
                  q: "Why doesn't prayer alone produce results?",
                  a: "James 2:17 says faith without works is dead. Prayer is the starting point - but God designed the system so that faith requires a corresponding action. A prophetic word only becomes real when you take the step that aligns with it. Praying for a job while sending no CVs is faith without the right action. Noah believed the flood was coming - and built the ark. Belief without the building is just a feeling.",
                },
                {
                  q: "Can the right action still fail if the timing is wrong?",
                  a: "Yes. Proverbs 6:6-9 uses the ant as the example: she gathers in summer, not winter. Right action in the wrong season - or right action delayed until the opportunity window closes - still produces poor results. The interview is at 10. Arriving at 11 means the next candidate already has the position. Timing is part of obedience.",
                },
                {
                  q: "Why do some believers work hard but still see no results?",
                  a: "The problem is usually not the effort - it is the direction. Diligent effort in the wrong direction produces nothing. Matthew 9:37-38 says the harvest is plenteous but the labourers are few - meaning the harvest is always available, but you must be positioned correctly to access it. Right action requires four things: prayer first to get God's direction, wisdom to identify the correct action, correct positioning, and then immediate movement.",
                },
                {
                  q: "What does James 2:17 mean by faith without works is dead?",
                  a: "James 2:17 does not mean you earn God's provision. It means faith was never designed to operate without a corresponding action. Right action is the activation mechanism that faith requires to produce results in the physical world. The principle that activates everything is not effort alone - it is the right action, taken at the right time, in the right direction.",
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
