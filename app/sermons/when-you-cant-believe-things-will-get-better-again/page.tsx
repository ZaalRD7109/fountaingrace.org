import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'When You Can\'t Believe Things Will Get Better Again',
  description:
    'Been hurt so badly you cannot trust good news anymore? Pastor Ricardo Zaal on why pain blinds you and how faith grows again. Fountain of Grace International, Pretoria North.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/sermons/when-you-cant-believe-things-will-get-better-again',
  },
  openGraph: {
    title: 'When You Can\'t Believe Things Will Get Better Again',
    description:
      'You have been through real pain and now you cannot believe anyone who says better is coming. This message explains why your hope shut down and how to take one small step out of the grave of disappointment.',
    type: 'article',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International - Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/sermons/when-you-cant-believe-things-will-get-better-again',
  },
}

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "When You Can't Believe Things Will Get Better Again",
    "description": "Pastor Ricardo Zaal teaches on the pain of knowing - how trauma and loss can make you blind to answered prayer, even when the answer is standing right in front of you. Drawing from Luke 24 and John 20, the message shows why Jesus revealed His scars and how honest faith grows from doubt.",
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
    "datePublished": "2026-04-26T12:00:00+02:00",
    "url": "https://www.fountaingrace.org/sermons/when-you-cant-believe-things-will-get-better-again"
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
        "name": "When You Can't Believe Things Will Get Better Again",
        "item": "https://www.fountaingrace.org/sermons/when-you-cant-believe-things-will-get-better-again"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "When You Can't Believe Things Will Get Better Again",
    "description": "You have been through real pain and now you cannot believe anyone who says better is coming. This message explains why your hope shut down and how to take one small step out of the grave of disappointment.",
    "thumbnailUrl": "https://img.youtube.com/vi/sq99GTzfotc/maxresdefault.jpg",
    "uploadDate": "2026-04-26T12:00:00+02:00",
    "embedUrl": "https://www.youtube.com/embed/sq99GTzfotc",
    "url": "https://www.fountaingrace.org/sermons/when-you-cant-believe-things-will-get-better-again",
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
        "name": "Why can I not believe things will get better after what I have been through?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Because you saw it with your own eyes. Your brain has been rewritten by the trauma. The disciples watched Jesus die on a cross and their entire hope shut down. That is normal for human beings. Pain does not cancel the reality of what happened. The job loss was real. The death was real. The betrayal was real. You are not faithless for struggling to believe again. You are honest. The first step is admitting it, not pretending you are fine."
        }
      },
      {
        "@type": "Question",
        "name": "Does God understand when I am angry or doubting Him?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Jesus Himself cried out, \"My God, my God, why hast thou forsaken me?\" on the cross. He went through the same pain you go through. He met Thomas in his doubt and let him touch the scars. God is not afraid of your questions. He would rather you bring honest doubt than fake faith. The prayer in Mark 9:24, \"Lord, I believe; help thou mine unbelief,\" is one of the most powerful prayers in Scripture because it is true."
        }
      },
      {
        "@type": "Question",
        "name": "Why does serving God sometimes feel harder than when I was living in sin?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "That is the pain of knowing. When you did not know better, sin did not bother you. Now that you have come to the Lord, sin feels heavier and the road feels tougher. That does not mean you made a mistake. It means your eyes have been opened. The same way the disciples saw the scars on Jesus' hands and could not unsee them, you cannot unsee what you now know. The struggle is proof that growth has started."
        }
      },
      {
        "@type": "Question",
        "name": "How do I trust people again after being deeply disappointed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You start by being honest that the disappointment was real. The two on the Emmaus road said, \"We trusted that it had been he which should have redeemed Israel.\" Their trust crashed. But they did not stay on that road forever. Their eyes were eventually opened. You may get hurt again. People are human. But staying in the grave of the past stops your whole life. Take one small step. Trust one small thing. Let honest faith grow back slowly."
        }
      }
    ]
  }
]

const points = [
  {
    "n": 1,
    "title": "Why You Cannot Believe Good News Anymore",
    "scripture": "Luke 24:21",
    "body": "The disciples said it plainly: \"But we trusted that it had been he which should have redeemed Israel.\" Their hope died when Christ died. You know that feeling. You believed for the marriage. You believed for the healing. You believed for the breakthrough. Then it crashed. Now somebody walks up and says God will come through for you, and you cannot receive it. It is not that you are rebellious. Your experience over the years has rewritten what you think is possible. The pain of knowing makes good news sound like a lie."
  },
  {
    "n": 2,
    "title": "Grief Can Blind You to the Answer Standing Right There",
    "scripture": "John 20:14-15",
    "body": "Mary turned around and saw Jesus standing there. She did not know it was Him. She thought He was the gardener and asked where they had laid the body. She was talking to the answer and could not see it. When you lose someone dear, when the money runs out, when colleagues at work connive against you, the pain pulls all your focus inward. Opportunities sit next to you. Promotions are already yours. Answered prayers are standing in front of you. But grief overrides the truth and you keep crying about what you already have."
  },
  {
    "n": 3,
    "title": "The Scars Prove He Was Human Too",
    "scripture": "John 20:27",
    "body": "Jesus said to Thomas, \"Reach hither thy finger, and behold my hands.\" He did not show off power. He showed the wounds. The same hands that healed the sick carried the scars of real pain. On the cross He cried, \"My God, my God, why hast thou forsaken me?\" That is not a powerful man pretending. That is a human being going through it. You are allowed to say this one is too much. Acknowledging you are human, that Jesus was human, takes the shame off the struggle."
  },
  {
    "n": 4,
    "title": "Honest Faith Is Better Than Fake Faith",
    "scripture": "Mark 9:24",
    "body": "The father cried out, \"Lord, I believe; help thou mine unbelief.\" That is the honest prayer. Not pretending you have mountain-moving faith. Tell Him straight: I do not believe she will get healing again, please increase my faith. I do not trust this job because I lost the last one, please increase my faith. God is not afraid of your questions. He met Thomas in his doubt. He will meet you in yours. A mustard seed of honest faith beats a mountain of pretend faith every time."
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
              When You Can't Believe Things Will Get Better Again
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              You have seen things go wrong before. So when someone tells you it will get better, you cannot believe them. This message is for the person whose hope died with the last disappointment and who now finds it hard to trust again.
            </p>
            <p className="text-white/60 text-sm">
              Pastor Ricardo Zaal · Fountain of Grace International, Pretoria North · 26 April 2026
            </p>
          </div>
        </header>

        <section className="bg-white pt-10 pb-2 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#1a1a1a] text-lg font-semibold leading-snug mb-4">{"Why real-life hurt makes hope feel impossible."}</p>
            <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/sq99GTzfotc"
                title="When You Can't Believe Things Will Get Better Again"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="text-[#555] text-sm mt-4 mb-2">Prefer reading? The full sermon notes are below.</p>
            <div className="mt-4">
              <p className="text-[#1a1a1a] font-semibold text-sm mb-2">Jump to a moment in the message:</p>
              <div className="flex flex-col gap-2">
                <button type="button" data-start="0" className="sermon-chapter text-left w-full bg-[#f7f7f7] hover:bg-[#f0fafa] border border-gray-200 rounded-lg px-4 py-3 text-[#333] transition-colors"><span className="text-[#008080] font-semibold mr-2">0:00</span>{"Why you won't believe"}</button>
                <button type="button" data-start="270" className="sermon-chapter text-left w-full bg-[#f7f7f7] hover:bg-[#f0fafa] border border-gray-200 rounded-lg px-4 py-3 text-[#333] transition-colors"><span className="text-[#008080] font-semibold mr-2">4:30</span>{"The pain we see"}</button>
                <button type="button" data-start="600" className="sermon-chapter text-left w-full bg-[#f7f7f7] hover:bg-[#f0fafa] border border-gray-200 rounded-lg px-4 py-3 text-[#333] transition-colors"><span className="text-[#008080] font-semibold mr-2">10:00</span>{"Grief stops us cold"}</button>
                <button type="button" data-start="1200" className="sermon-chapter text-left w-full bg-[#f7f7f7] hover:bg-[#f0fafa] border border-gray-200 rounded-lg px-4 py-3 text-[#333] transition-colors"><span className="text-[#008080] font-semibold mr-2">20:00</span>{"She didn't recognize him"}</button>
                <button type="button" data-start="1860" className="sermon-chapter text-left w-full bg-[#f7f7f7] hover:bg-[#f0fafa] border border-gray-200 rounded-lg px-4 py-3 text-[#333] transition-colors"><span className="text-[#008080] font-semibold mr-2">31:00</span>{"He showed his wounds"}</button>
              </div>
            </div>
            <div className="bg-[#f0fafa] border border-[#cfeeee] rounded-xl p-5 mt-6">
              <h2 className="text-lg font-bold text-[#1a1a1a] mb-3">This message is for you if:</h2>
              <ul className="list-disc list-inside space-y-2 text-[#555]">
                <li className="leading-relaxed">{"You've been let down too many times."}</li>
                <li className="leading-relaxed">{"You're scared hope will betray you again."}</li>
                <li className="leading-relaxed">{"You feel trapped by past experiences."}</li>
                <li className="leading-relaxed">{"You're not moving because doubt holds you."}</li>
              </ul>
            </div>

          </div>
        </section>

        <section className="bg-white py-14 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#555] leading-relaxed text-lg mb-4">
              Somebody tells you something better is coming. You nod. But inside, you do not believe a word of it. You have been here before. You buried a parent. You lost the job. The marriage collapsed. The diagnosis came back bad. You watched it happen with your own eyes, and now your brain has been rewritten by what you saw. Pain does not cancel reality. The hurt was real. But the same eyes that saw the loss now struggle to see anything else, even when help is standing right next to you.
            </p>
            <p className="text-[#555] leading-relaxed mb-10">
              On the road to Emmaus, two men walked next to Jesus Himself and could not recognise Him. Mary stood in front of the risen Lord and thought He was the gardener. Grief blinds. Disappointment blinds. This message looks at why your faith feels broken after pain, and what an honest believer does when belief is hard.
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
                &quot;Pain does not cancel reality. But you do not have to stay in the grave. Take one step, not a big one.&quot;
              </p>
              <cite className="text-[#555] text-sm not-italic mt-2 block">- Pastor Ricardo Zaal</cite>
            </blockquote>

            <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Three Things to Do When You Cannot Believe Anymore</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              You do not need perfect faith to move forward. You need an honest one. Here is how to take the first step out of the dark.
            </p>
            <ol className="list-decimal list-inside space-y-3 text-[#555] leading-relaxed mb-6">
              <li><strong>Admit you are human.</strong> Stop pretending the pain did not happen. Jesus did not erase His scars. He showed them. Say it out loud: this one hurt me, this one shook my faith. The moment you acknowledge you are a human being going through real things, the shame loosens its grip.</li>
              <li><strong>Pray the honest prayer.</strong> Do not fake belief you do not have. Say what the father in Mark 9 said: Lord, I believe, help my unbelief. Tell God you doubt. Tell Him you struggle. Ask Him to increase the faith you have, even if it is the size of a mustard seed. God is not afraid of your questions.</li>
              <li><strong>Take one small step.</strong> Do not try to fix everything today. If you want the business to grow, get one client. If you want the degree, do the first semester. Just do not stay in the grave of what happened. One step forward proves you are still alive and still believing, even a little.</li>
            </ol>

            <p className="text-[#555] leading-relaxed">
              If you are in or around Pretoria or Johannesburg and want to hear this kind of teaching live,{' '}
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
                <h3 className="font-semibold text-[#1a1a1a] mb-2">Why can I not believe things will get better after what I have been through?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Because you saw it with your own eyes. Your brain has been rewritten by the trauma. The disciples watched Jesus die on a cross and their entire hope shut down. That is normal for human beings. Pain does not cancel the reality of what happened. The job loss was real. The death was real. The betrayal was real. You are not faithless for struggling to believe again. You are honest. The first step is admitting it, not pretending you are fine.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">Does God understand when I am angry or doubting Him?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Yes. Jesus Himself cried out, "My God, my God, why hast thou forsaken me?" on the cross. He went through the same pain you go through. He met Thomas in his doubt and let him touch the scars. God is not afraid of your questions. He would rather you bring honest doubt than fake faith. The prayer in Mark 9:24, "Lord, I believe; help thou mine unbelief," is one of the most powerful prayers in Scripture because it is true.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">Why does serving God sometimes feel harder than when I was living in sin?</h3>
                <p className="text-[#555] leading-relaxed text-sm">That is the pain of knowing. When you did not know better, sin did not bother you. Now that you have come to the Lord, sin feels heavier and the road feels tougher. That does not mean you made a mistake. It means your eyes have been opened. The same way the disciples saw the scars on Jesus' hands and could not unsee them, you cannot unsee what you now know. The struggle is proof that growth has started.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">How do I trust people again after being deeply disappointed?</h3>
                <p className="text-[#555] leading-relaxed text-sm">You start by being honest that the disappointment was real. The two on the Emmaus road said, "We trusted that it had been he which should have redeemed Israel." Their trust crashed. But they did not stay on that road forever. Their eyes were eventually opened. You may get hurt again. People are human. But staying in the grave of the past stops your whole life. Take one small step. Trust one small thing. Let honest faith grow back slowly.</p>
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
            <a href={"https://wa.me/?text=I%20thought%20this%20message%20may%20encourage%20you%3A%20https%3A//www.fountaingrace.org/sermons/when-you-cant-believe-things-will-get-better-again%3Futm_source%3Dwhatsapp"} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold text-lg px-7 py-4 rounded-xl hover:bg-[#1ebe5d] transition-colors w-full sm:w-auto">
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
