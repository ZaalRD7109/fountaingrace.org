import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Feeling Empty and Exhausted? How to Find Strength When You Have Nothing Left',
  description:
    'Tired, dried up, and feel like you can\'t take another day? Find real help when life has drained you. Fountain of Grace International, Pretoria North.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/sermons/feeling-empty-and-exhausted-how-to-find-strength-when-you-have-nothing',
  },
  openGraph: {
    title: 'Feeling Empty and Exhausted? How to Find Strength When You Have Nothing Left',
    description:
      'You feel like a lemon squeezed dry, with nothing left to give. Pastor Ricardo Zaal shows why your weakest moment is exactly where help shows up strongest.',
    type: 'article',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International - Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/sermons/feeling-empty-and-exhausted-how-to-find-strength-when-you-have-nothing',
  },
}

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Feeling Empty and Exhausted? How to Find Strength When You Have Nothing Left",
    "description": "Pastor Ricardo Zaal speaks to anyone carrying silent stress, spiritual dryness, and exhaustion. Using 2 Corinthians 12:9, he explains why emptiness is not the end but the place where God's sufficient grace takes over. Practical, honest, and direct.",
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
    "datePublished": "2026-04-27",
    "url": "https://www.fountaingrace.org/sermons/feeling-empty-and-exhausted-how-to-find-strength-when-you-have-nothing"
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
        "name": "Feeling Empty and Exhausted? How to Find Strength When You Have Nothing Left",
        "item": "https://www.fountaingrace.org/sermons/feeling-empty-and-exhausted-how-to-find-strength-when-you-have-nothing"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Feeling Empty and Exhausted? How to Find Strength When You Have Nothing Left",
    "description": "You feel like a lemon squeezed dry, with nothing left to give. Pastor Ricardo Zaal shows why your weakest moment is exactly where help shows up strongest.",
    "thumbnailUrl": "https://img.youtube.com/vi/R36fgD4M-9A/maxresdefault.jpg",
    "uploadDate": "2026-04-27",
    "embedUrl": "https://www.youtube.com/embed/R36fgD4M-9A",
    "url": "https://www.fountaingrace.org/sermons/feeling-empty-and-exhausted-how-to-find-strength-when-you-have-nothing",
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
        "name": "Why do I feel so empty and tired all the time?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Many people in Pretoria North are carrying stress silently. Work pressure, family demands, finances, and disappointment build up until you feel dried out like a squeezed lemon. Pastor Ricardo says this kind of emptiness is not a sign that something is wrong with you. It is a sign that you have been trying to lift weight you were never built to lift alone. The exhaustion is real, and there is a real answer for it. You do not need to push harder. You need a different source of strength."
        }
      },
      {
        "@type": "Question",
        "name": "Does God still want to use me if I feel like a failure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Isaiah 6:8 says, \"Whom shall I send, and who will go for us? Then said I, Here am I; send me.\" God is not asking for the richest, the cleverest, or the strongest. He is asking who is available. David was not the biggest soldier, but he killed Goliath. Your past mistakes, your weakness, your empty feeling, none of these disqualify you. Pastor Ricardo says heaven will never reject you. Bring your honest self, and let God do what only he can do through you."
        }
      },
      {
        "@type": "Question",
        "name": "I have thought about ending my life. Is there hope?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, and please reach out today. Pastor Ricardo shared openly that as a teenager he tried to take his own life with a knife. He thanks God the knife was blunt, because everything God has done since then would have been lost. The pain you feel right now is real, but it is not the end of your story. The devil wants to stop you from reaching what God is about to do. Please contact Fountain of Grace International in Pretoria North, or phone the SADAG helpline on 0800 567 567."
        }
      },
      {
        "@type": "Question",
        "name": "How do I pray when I have no words left?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You do not need fancy words. Pastor Ricardo says stop hiding behind eloquent prayers. Tell God the truth: \"I am tired. I feel empty. My joy has been stolen, restore it. My body has given up, give me your strength.\" Then quote his word back to him: \"You said your grace is sufficient for me, that your strength is made perfect in weakness.\" That kind of honest, short prayer moves heaven more than a polished speech ever will. God responds to a real heart, not a performance."
        }
      }
    ]
  }
]

const points = [
  {
    "n": 1,
    "title": "Your Weakness Is Not a Disqualification",
    "scripture": "2 Corinthians 12:9",
    "body": "The verse says, \"My grace is sufficient for thee: for my strength is made perfect in weakness.\" Pastor Ricardo explains it like a weightlifter who can lift 300 kilograms asking you to help him lift 80. He does not need your strength. He is letting you walk alongside while he does the lifting. That is what God does in your weakness. You feel like you cannot carry it. You are right. He is the one carrying it, and he is letting you feel included in the victory."
  },
  {
    "n": 2,
    "title": "God Is the Pulley in Your Life",
    "scripture": "2 Corinthians 12:9",
    "body": "A pulley is a wheel that lets a small person move a heavy load. Eighty kilograms feels like five. Pastor Ricardo says God is the pulley in your life. You were never built to lift the weight alone. When you stop relying on your own strength and let him take the rope, the load you thought would crush you starts to move. The more empty you feel, the more space there is for his grace to do the work."
  },
  {
    "n": 3,
    "title": "Be Honest With God About How Tired You Are",
    "scripture": "Psalm 23:1",
    "body": "\"The Lord is my shepherd; I shall not want.\" Pastor Ricardo says it is fair for a human being to admit, \"I am tired. I cannot take it anymore.\" Stop hiding behind eloquent words. Stop pretending you have strength you do not have. Bring the real condition to God. Tell him you went to bed hungry. Tell him your joy feels stolen. A shepherd cannot lead a sheep that pretends it is not lost."
  },
  {
    "n": 4,
    "title": "Empty Is Not the End, It Is the Invitation",
    "scripture": "Isaiah 6:8",
    "body": "\"Whom shall I send, and who will go for us? Then said I, Here am I; send me.\" God is not looking for the richest or the strongest. He is looking for the available. David was not the biggest fighter, but he killed the giant. You may feel empty today, but heaven has not rejected you. Hand him the empty cup and leave it with him. Do not try to open the tap yourself, because you might pour a small blessing when he wanted to pour a big one."
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
              Feeling Empty and Exhausted? How to Find Strength When You Have Nothing Left
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              You feel tired. You feel empty. You came here because something inside is dry and you do not know where else to turn. This message is for the person carrying stress silently, who feels like there is nothing left to give.
            </p>
            <p className="text-white/60 text-sm">
              Pastor Ricardo Zaal · Fountain of Grace International, Pretoria North · 27 April 2026
            </p>
          </div>
        </header>

        <section className="bg-white pt-10 pb-2 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/R36fgD4M-9A"
                title="Feeling Empty and Exhausted? How to Find Strength When You Have Nothing Left"
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
              Some days you wake up and the shoulders are already up by your ears. You smile at work, you show up for the family, but inside you feel like a lemon that has been squeezed dry. Maybe you almost stayed home today because you had nothing left to bring. Maybe you feel like you are swimming, and just when you think you are finally above water, another wave pulls you under. If that is you, this message was written for you.
            </p>
            <p className="text-[#555] leading-relaxed mb-10">
              Pastor Ricardo Zaal opens 2 Corinthians 12:9 and shows something many people miss. The very emptiness you are trying to hide is the exact place where God's strength shows up. You do not have to fake it. You do not have to pretend you are coping. There is a different way to carry what you are carrying.
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
                &quot;You may feel weak today, but God has not rejected you. Heaven will never reject you. You might feel empty, but the Spirit of God will fill that emptiness in your life.&quot;
              </p>
              <cite className="text-[#555] text-sm not-italic mt-2 block">- Pastor Ricardo Zaal</cite>
            </blockquote>

            <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Three Things to Do This Week When You Feel Empty</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              You do not need a perfect plan. You need three honest moves. Here is where to start when the tank is on empty.
            </p>
            <ol className="list-decimal list-inside space-y-3 text-[#555] leading-relaxed mb-6">
              <li><strong>Tell God the truth out loud.</strong> Stop performing. Say the actual words: "I am tired. I cannot take it anymore." Pastor Ricardo says it is imperative to be honest. God already knows. He is waiting for you to stop hiding behind strength you do not have.</li>
              <li><strong>Hand him the empty cup and leave it there.</strong> Do not try to fill yourself with worldly things that only last a few minutes. Bring the empty cup to him and walk away. Do not open the tap yourself. Let him decide how much to pour.</li>
              <li><strong>Speak the truth back to yourself.</strong> When the empty feeling shouts, answer it. Say: "I may feel empty, but I am chosen. I may feel weak, but I am still called. I may feel tired, but my Father will renew my strength." Replace the lie with the word.</li>
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
                <h3 className="font-semibold text-[#1a1a1a] mb-2">Why do I feel so empty and tired all the time?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Many people in Pretoria North are carrying stress silently. Work pressure, family demands, finances, and disappointment build up until you feel dried out like a squeezed lemon. Pastor Ricardo says this kind of emptiness is not a sign that something is wrong with you. It is a sign that you have been trying to lift weight you were never built to lift alone. The exhaustion is real, and there is a real answer for it. You do not need to push harder. You need a different source of strength.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">Does God still want to use me if I feel like a failure?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Yes. Isaiah 6:8 says, "Whom shall I send, and who will go for us? Then said I, Here am I; send me." God is not asking for the richest, the cleverest, or the strongest. He is asking who is available. David was not the biggest soldier, but he killed Goliath. Your past mistakes, your weakness, your empty feeling, none of these disqualify you. Pastor Ricardo says heaven will never reject you. Bring your honest self, and let God do what only he can do through you.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">I have thought about ending my life. Is there hope?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Yes, and please reach out today. Pastor Ricardo shared openly that as a teenager he tried to take his own life with a knife. He thanks God the knife was blunt, because everything God has done since then would have been lost. The pain you feel right now is real, but it is not the end of your story. The devil wants to stop you from reaching what God is about to do. Please contact Fountain of Grace International in Pretoria North, or phone the SADAG helpline on 0800 567 567.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">How do I pray when I have no words left?</h3>
                <p className="text-[#555] leading-relaxed text-sm">You do not need fancy words. Pastor Ricardo says stop hiding behind eloquent prayers. Tell God the truth: "I am tired. I feel empty. My joy has been stolen, restore it. My body has given up, give me your strength." Then quote his word back to him: "You said your grace is sufficient for me, that your strength is made perfect in weakness." That kind of honest, short prayer moves heaven more than a polished speech ever will. God responds to a real heart, not a performance.</p>
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
