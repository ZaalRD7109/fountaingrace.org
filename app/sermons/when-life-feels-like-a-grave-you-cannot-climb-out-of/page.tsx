import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'When Life Feels Like a Grave You Cannot Climb Out Of',
  description:
    'Lost a loved one, a job, a marriage? Pastor Ricardo explains why the third day always comes. Fountain of Grace International, Pretoria North.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/sermons/when-life-feels-like-a-grave-you-cannot-climb-out-of',
  },
  openGraph: {
    title: 'When Life Feels Like a Grave You Cannot Climb Out Of',
    description:
      'Repossession letters, retrenchment, the death of someone you love. Pastor Ricardo Zaal shows why the darkness you sit in right now is not the end of your story.',
    type: 'article',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International - Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/sermons/when-life-feels-like-a-grave-you-cannot-climb-out-of',
  },
}

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "When Life Feels Like a Grave You Cannot Climb Out Of",
    "description": "Pastor Ricardo Zaal preaches from John 20 on the pattern of the third day. He shares his own loss of two sons, financial pressure, and grief, then gives seven practical ways to walk through a graveyard moment until resurrection comes.",
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
    "datePublished": "2026-04-05T12:00:00+02:00",
    "url": "https://www.fountaingrace.org/sermons/when-life-feels-like-a-grave-you-cannot-climb-out-of"
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
        "name": "When Life Feels Like a Grave You Cannot Climb Out Of",
        "item": "https://www.fountaingrace.org/sermons/when-life-feels-like-a-grave-you-cannot-climb-out-of"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "When Life Feels Like a Grave You Cannot Climb Out Of",
    "description": "Repossession letters, retrenchment, the death of someone you love. Pastor Ricardo Zaal shows why the darkness you sit in right now is not the end of your story.",
    "thumbnailUrl": "https://img.youtube.com/vi/0X1vZhqOVg4/maxresdefault.jpg",
    "uploadDate": "2026-04-05T12:00:00+02:00",
    "embedUrl": "https://www.youtube.com/embed/0X1vZhqOVg4",
    "url": "https://www.fountaingrace.org/sermons/when-life-feels-like-a-grave-you-cannot-climb-out-of",
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
        "name": "Why does God let bad things happen so suddenly?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Bible never promises a warning before pain. It promises God's presence inside the pain. Jesus wept at the tomb of His friend even though He knew He would raise him. He entered grief instead of watching it from a distance. Sudden loss is part of living in a broken world, but it is not proof that God has left. Psalm 22 records Jesus crying out about being forsaken, yet three days later He walked out the tomb. Sudden does not mean final."
        }
      },
      {
        "@type": "Question",
        "name": "How do I keep going when I cannot see any way out?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "From inside the grave, you cannot see the ending. That is the point. Pastor Ricardo lost two sons, watched his bond go into arrears, and sat months without electricity. From inside that darkness he could not picture a way through. The way out is not seeing further, it is staying until the third day. Stop measuring time by your darkness. Find one thing that did not leave. Let someone sit with you. And refuse to write the last sentence while you are still in the middle of the paragraph."
        }
      },
      {
        "@type": "Question",
        "name": "Does God actually understand what I am going through?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Jesus was at a wedding when the wine ran out, so He knows about not having enough. He fed thousands with one lunch, so He knows what it is like to have only one Skaftin to feed many. He was beaten, broken, abandoned by His friends and buried in a borrowed tomb. He was not a holy figure watching from a balcony. He went through worse than you have gone through, on purpose, so that you would never have to wonder if He gets it. He gets it."
        }
      },
      {
        "@type": "Question",
        "name": "What does the third day actually mean for my real life?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The third day is a pattern in Scripture, not just a date on the church calendar. Hosea 6:2 says after two days He will revive us, on the third day He will raise us up. It means that whatever has died in your life, retrenchment, marriage, health, hope, has an expiry date. The grave does not get the final say. You may be on day two. You may feel like nobody is coming. But the third day is built into the way God works."
        }
      }
    ]
  }
]

const points = [
  {
    "n": 1,
    "title": "The grave hits without warning",
    "scripture": "John 11:35 / Psalm 22:1",
    "body": "When Pastor Ricardo's mother-in-law went to hospital, the family thought it was routine. She did not come back. Graveyard moments do not knock first. That is why South Africans buy funeral policies, because we know loss arrives suddenly. Jesus wept at Lazarus' tomb. He cried out, my God my God why hast thou forsaken me. God does not observe your grief from a distance. He entered the grave Himself, so He knows your sudden moment from the inside."
  },
  {
    "n": 2,
    "title": "You cannot see the ending from inside the dark",
    "scripture": "2 Corinthians 4:17",
    "body": "Inside the grave, all you see is blackness. Your mind replays every failure. Every plan that fell apart. Pastor Ricardo remembers FNB phoning about the house. Months without electricity. Telling the kids there was no money for food. From inside that darkness he could not see a way out. But darkness is not a ruler. You cannot measure your life by it. The grave is not the final measure. It is a moment, not the verdict."
  },
  {
    "n": 3,
    "title": "The stone is too heavy for you alone",
    "scripture": "Matthew 27:60",
    "body": "The stone over Jesus' tomb weighed more than a ton. Broken, bruised, beaten, He could not have rolled it Himself. Neither can you. Picture trying to push yourself out while creditors keep calling, while bullies keep mocking, while your body keeps failing. There is no inside strength left. The only strength left is outside strength. Get out of yourself and give it over to God. The moment you stop trying to move the stone yourself, that is when it moves."
  },
  {
    "n": 4,
    "title": "The third day is a pattern, not a once-off",
    "scripture": "Hosea 6:2",
    "body": "After two days he will revive us, on the third day he will raise us up. The third day is not a one-time Easter event. It is a pattern written through Scripture. Every previous deliverance was pointing to it. You can negotiate with points one to six, but this one is non-negotiable. You have to stay until the third day. The grave does not get the final say. O death, where is thy sting? Where is thy victory? The morning is coming."
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
              When Life Feels Like a Grave You Cannot Climb Out Of
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              You are reading this because something in your life died. A relationship, a child, a job, a future you planned. This message is for the person sitting in the dark right now wondering if the morning will ever come.
            </p>
            <p className="text-white/60 text-sm">
              Pastor Ricardo Zaal · Fountain of Grace International, Pretoria North · 5 April 2026
            </p>
          </div>
        </header>

        <section className="bg-white pt-10 pb-2 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#1a1a1a] text-lg font-semibold leading-snug mb-4">{"When everything feels impossible, there's still hope."}</p>
            <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/0X1vZhqOVg4"
                title="When Life Feels Like a Grave You Cannot Climb Out Of"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="text-[#555] text-sm mt-4 mb-2">Prefer reading? The full sermon notes are below.</p>
            <div className="mt-4">
              <p className="text-[#1a1a1a] font-semibold text-sm mb-2">Jump to a moment in the message:</p>
              <div className="flex flex-col gap-2">
                <button type="button" data-start="0" className="sermon-chapter text-left w-full bg-[#f7f7f7] hover:bg-[#f0fafa] border border-gray-200 rounded-lg px-4 py-3 text-[#333] transition-colors"><span className="text-[#008080] font-semibold mr-2">0:00</span>{"Everyone has a graveyard moment"}</button>
                <button type="button" data-start="180" className="sermon-chapter text-left w-full bg-[#f7f7f7] hover:bg-[#f0fafa] border border-gray-200 rounded-lg px-4 py-3 text-[#333] transition-colors"><span className="text-[#008080] font-semibold mr-2">3:00</span>{"When darkness feels permanent"}</button>
                <button type="button" data-start="900" className="sermon-chapter text-left w-full bg-[#f7f7f7] hover:bg-[#f0fafa] border border-gray-200 rounded-lg px-4 py-3 text-[#333] transition-colors"><span className="text-[#008080] font-semibold mr-2">15:00</span>{"What happens inside the grave"}</button>
                <button type="button" data-start="1800" className="sermon-chapter text-left w-full bg-[#f7f7f7] hover:bg-[#f0fafa] border border-gray-200 rounded-lg px-4 py-3 text-[#333] transition-colors"><span className="text-[#008080] font-semibold mr-2">30:00</span>{"Seven ways out of darkness"}</button>
                <button type="button" data-start="2700" className="sermon-chapter text-left w-full bg-[#f7f7f7] hover:bg-[#f0fafa] border border-gray-200 rounded-lg px-4 py-3 text-[#333] transition-colors"><span className="text-[#008080] font-semibold mr-2">45:00</span>{"Stop waiting to be ready"}</button>
                <button type="button" data-start="3540" className="sermon-chapter text-left w-full bg-[#f7f7f7] hover:bg-[#f0fafa] border border-gray-200 rounded-lg px-4 py-3 text-[#333] transition-colors"><span className="text-[#008080] font-semibold mr-2">59:00</span>{"Speak your story forward"}</button>
                <button type="button" data-start="3600" className="sermon-chapter text-left w-full bg-[#f7f7f7] hover:bg-[#f0fafa] border border-gray-200 rounded-lg px-4 py-3 text-[#333] transition-colors"><span className="text-[#008080] font-semibold mr-2">1:00:00</span>{"Your moment to rise"}</button>
              </div>
            </div>
            <div className="bg-[#f0fafa] border border-[#cfeeee] rounded-xl p-5 mt-6">
              <h2 className="text-lg font-bold text-[#1a1a1a] mb-3">This message is for you if:</h2>
              <ul className="list-disc list-inside space-y-2 text-[#555]">
                <li className="leading-relaxed">{"You feel trapped in darkness"}</li>
                <li className="leading-relaxed">{"You lost something you can't replace"}</li>
                <li className="leading-relaxed">{"You've hit rock bottom unexpectedly"}</li>
                <li className="leading-relaxed">{"You're unsure how to keep going"}</li>
              </ul>
            </div>

          </div>
        </section>

        <section className="bg-white py-14 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#555] leading-relaxed text-lg mb-4">
              Everyone has a graveyard moment. The day the bond letter arrives saying they will repossess the house. The phone call that says your child did not make it. The boss who pulls you aside and says the word retrenchment. The boyfriend who walks out. The doctor who says the baby has water on the lungs. Pastor Ricardo knows these moments personally. He lost two boys. He sat through months with no electricity. He buried parents. He is not preaching from a textbook.
            </p>
            <p className="text-[#555] leading-relaxed mb-10">
              But here is what the grave cannot tell you: how the story ends. A grave is a terrible storyteller. It only knows darkness. Jesus was in the tomb for three days with no light, no sound, no way to track time. Then the third day came. That same pattern is written across your life too.
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
                &quot;A grave is not a reliable storyteller. It only knows darkness, and darkness is the worst ruler you could ever use to measure your life.&quot;
              </p>
              <cite className="text-[#555] text-sm not-italic mt-2 block">- Pastor Ricardo Zaal</cite>
            </blockquote>

            <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Three Things to Do While You Wait for the Third Day</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              If you are sitting in a graveyard moment right now, do not try to be strong. Try these three honest things instead.
            </p>
            <ol className="list-decimal list-inside space-y-3 text-[#555] leading-relaxed mb-6">
              <li><strong>Name the grave out loud.</strong> Stop calling it a season. Say what it actually is. I am losing my house. I am losing my marriage. I am losing my mind. Psalm 34:18 says the Lord is nigh unto them that are of a broken heart. You have to be honest about being broken before that verse works for you. Tell one trusted person. A problem shared is already lifted off your shoulders.</li>
              <li><strong>Find what did not leave.</strong> In every graveyard moment, something stayed. For Pastor Ricardo it was his wife Ronel. Elijah wanted to die in the wilderness, but the angel gave him food for the journey. Look around your darkness and find the one thing still standing with you. Hold onto it. If your hands grow weak, tie yourself to it. God has not forsaken you. Your eyes are just adjusted to the dark.</li>
              <li><strong>Let someone sit with you.</strong> Job's friends sat with him for seven days and seven nights without saying a word. Sometimes presence is the entire ministry. A grave was never meant to be a solo experience. You do not need someone with all the answers. You need someone who will sit. Munhu i munhu hi vanhu. A person is a person through other people. Stop carrying it alone.</li>
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
                <h3 className="font-semibold text-[#1a1a1a] mb-2">Why does God let bad things happen so suddenly?</h3>
                <p className="text-[#555] leading-relaxed text-sm">The Bible never promises a warning before pain. It promises God's presence inside the pain. Jesus wept at the tomb of His friend even though He knew He would raise him. He entered grief instead of watching it from a distance. Sudden loss is part of living in a broken world, but it is not proof that God has left. Psalm 22 records Jesus crying out about being forsaken, yet three days later He walked out the tomb. Sudden does not mean final.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">How do I keep going when I cannot see any way out?</h3>
                <p className="text-[#555] leading-relaxed text-sm">From inside the grave, you cannot see the ending. That is the point. Pastor Ricardo lost two sons, watched his bond go into arrears, and sat months without electricity. From inside that darkness he could not picture a way through. The way out is not seeing further, it is staying until the third day. Stop measuring time by your darkness. Find one thing that did not leave. Let someone sit with you. And refuse to write the last sentence while you are still in the middle of the paragraph.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">Does God actually understand what I am going through?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Yes. Jesus was at a wedding when the wine ran out, so He knows about not having enough. He fed thousands with one lunch, so He knows what it is like to have only one Skaftin to feed many. He was beaten, broken, abandoned by His friends and buried in a borrowed tomb. He was not a holy figure watching from a balcony. He went through worse than you have gone through, on purpose, so that you would never have to wonder if He gets it. He gets it.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">What does the third day actually mean for my real life?</h3>
                <p className="text-[#555] leading-relaxed text-sm">The third day is a pattern in Scripture, not just a date on the church calendar. Hosea 6:2 says after two days He will revive us, on the third day He will raise us up. It means that whatever has died in your life, retrenchment, marriage, health, hope, has an expiry date. The grave does not get the final say. You may be on day two. You may feel like nobody is coming. But the third day is built into the way God works.</p>
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

        <section className="bg-white py-12 px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-xl font-bold text-[#1a1a1a] mb-2">Send this to someone who needs it</h2>
            <p className="text-[#555] mb-5">One message can reach someone you cannot. Pass it on.</p>
            <a href={"https://wa.me/?text=I%20thought%20this%20message%20may%20encourage%20you%3A%20https%3A//www.fountaingrace.org/sermons/when-life-feels-like-a-grave-you-cannot-climb-out-of%3Futm_source%3Dwhatsapp"} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold text-lg px-7 py-4 rounded-xl hover:bg-[#1ebe5d] transition-colors w-full sm:w-auto">
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden="true"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.821 11.821 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.477-.911zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
              Share on WhatsApp
            </a>
          </div>
        </section>
      <script dangerouslySetInnerHTML={{ __html: "(function(){var f=document.querySelector('iframe[src*=\"youtube.com/embed/\"]');if(!f)return;var base=f.src.split('?')[0];document.querySelectorAll('.sermon-chapter').forEach(function(b){b.addEventListener('click',function(){var t=this.getAttribute('data-start');f.src=base+'?rel=0&autoplay=1&start='+t;f.scrollIntoView({behavior:'smooth',block:'center'});});});})();" }} />
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
