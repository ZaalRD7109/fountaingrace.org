import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "A Prayer for When You Don't Know What Comes Next | Fountain of Grace International",
  description: "Words to pray when the future feels uncertain, plus seven prayer points from Fountain of Grace International, a church in Pretoria North.",
  robots: 'index, follow',
  alternates: { canonical: "https://www.fountaingrace.org/fountain-of-prayers/a-prayer-for-when-you-dont-know-what-comes-next" },
  openGraph: {
    title: "A Prayer for When You Don't Know What Comes Next",
    description: "Words to pray when the future feels uncertain, plus seven prayer points from Fountain of Grace International, a church in Pretoria North.",
    type: 'article',
    images: [{ url: "https://www.fountaingrace.org/og-image.jpg", width: 1200, height: 630, alt: 'Fountain of Grace International - Church in Pretoria North' }],
    url: "https://www.fountaingrace.org/fountain-of-prayers/a-prayer-for-when-you-dont-know-what-comes-next",
  },
  twitter: { card: 'summary_large_image', title: "A Prayer for When You Don't Know What Comes Next", description: "Words to pray when the future feels uncertain, plus seven prayer points from Fountain of Grace International, a church in Pretoria North.", images: ["https://www.fountaingrace.org/og-image.jpg"] },
}

const jsonLd = [{"@context": "https://schema.org", "@type": "Article", "headline": "A Prayer for When You Don't Know What Comes Next", "alternativeHeadline": "Week 34 of 2026: Trusting God in Uncertainty", "description": "Words to pray when the future feels uncertain, plus seven prayer points from Fountain of Grace International, a church in Pretoria North.", "image": "https://www.fountaingrace.org/og-image.jpg", "author": {"@type": "Person", "name": "Pastor Ricardo Zaal"}, "publisher": {"@type": "Church", "name": "Fountain of Grace International", "address": {"@type": "PostalAddress", "streetAddress": "323 B Danie Theron Street", "addressLocality": "Pretoria North", "addressRegion": "Gauteng", "addressCountry": "ZA"}}, "datePublished": "2026-08-17T08:00:00+02:00", "dateModified": "2026-08-17T08:00:00+02:00", "mainEntityOfPage": "https://www.fountaingrace.org/fountain-of-prayers/a-prayer-for-when-you-dont-know-what-comes-next", "url": "https://www.fountaingrace.org/fountain-of-prayers/a-prayer-for-when-you-dont-know-what-comes-next", "isPartOf": {"@type": "CreativeWorkSeries", "name": "Fountain of Prayers", "url": "https://www.fountaingrace.org/fountain-of-prayers"}}, {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fountaingrace.org"}, {"@type": "ListItem", "position": 2, "name": "Fountain of Prayers", "item": "https://www.fountaingrace.org/fountain-of-prayers"}, {"@type": "ListItem", "position": 3, "name": "A Prayer for When You Don't Know What Comes Next", "item": "https://www.fountaingrace.org/fountain-of-prayers/a-prayer-for-when-you-dont-know-what-comes-next"}]}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "How do I trust God when nothing makes sense right now?", "acceptedAnswer": {"@type": "Answer", "text": "You start small and you say it out loud, even while you are confused. Trust is not a feeling you wait for; it is a decision you make with shaking hands. Praying it helps because it moves the weight off your shoulders and onto someone who can carry it. You can pray one line tonight and pray it again tomorrow."}}, {"@type": "Question", "name": "How do I know if I am making the right decision?", "acceptedAnswer": {"@type": "Answer", "text": "Ask God before you decide, not after, and give yourself time to listen. Talk it through with one or two people who know you and will tell you the truth. Praying about a decision slows you down, and that alone stops a lot of bad calls. Rushed yes answers cause most of the regret people bring to us."}}, {"@type": "Question", "name": "Why can't I feel any peace when I pray?", "acceptedAnswer": {"@type": "Answer", "text": "Peace is often late and quiet, and its absence does not mean God ignored you. Some nights the only thing that changes is that you are no longer carrying it alone. Keep praying short and honest. Feelings tend to follow days later, usually when you stopped checking for them."}}, {"@type": "Question", "name": "How do I stop worrying about things I cannot control?", "acceptedAnswer": {"@type": "Answer", "text": "Name the thing, hand it over in prayer, then do the next small task in front of you. Worry loves an empty evening and a phone in your hand. Praying about it gives your mind somewhere to put the fear instead of circling it. When it comes back at 3am, hand it over again."}}, {"@type": "Question", "name": "Where do I find the courage to make a big change?", "acceptedAnswer": {"@type": "Answer", "text": "Courage comes from trusting the one who is with you, not from feeling ready. Nobody feels ready. Praying for boldness helps because you stop measuring the risk on your strength alone. Then you take one step you can actually take this week."}}, {"@type": "Question", "name": "God helped me before, so why does he feel far away now?", "acceptedAnswer": {"@type": "Answer", "text": "Distance is usually a feeling, not a fact, and it often shows up when we are exhausted. Go back to what he has already done for you and say it out loud. Remembering is a real form of prayer, and it steadies you for what is still unknown. Keep a short list somewhere you will see it."}}, {"@type": "Question", "name": "Does God hear my prayers if nothing is changing?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, he hears you, and silence is not the same as refusal. Answers often come slower than we want and in a shape we did not picture. Praying with expectation keeps you looking for what God is doing instead of shutting down. Plenty of people have prayed for months and then seen it turn."}}]}]

export default function PrayerWeekPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article>
        <header
          className="pt-14 pb-12 px-4 sm:px-6 text-white"
          style={{ background: 'linear-gradient(145deg, #04302f 0%, #008080 100%)' }}
        >
          <div className="max-w-2xl mx-auto">
            <p className="text-white text-sm font-semibold uppercase tracking-wider mb-3">
              Fountain of Prayers · Week 34 of 2026
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              {"A Prayer for When You Don't Know What Comes Next"}
            </h1>
            <p className="text-white text-base mt-4">{"Trusting God in Uncertainty"} · {"Proverbs 3:5-6"}</p>
            <p className="text-white text-sm mt-2">Pretoria North · 17 August 2026</p>
          </div>
        </header>

        <section className="bg-white pt-10 pb-4 px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-[#006b6b] text-xs font-bold uppercase tracking-wider mb-3">Pray this now</h2>
            <p className="text-[#1a1a1a] text-xl leading-relaxed italic">{"God, I do not know what comes next, and it frightens me. I have run the numbers and made the lists, and I still cannot see the road ahead. I am tired. Please hold me steady inside this, even if nothing changes tonight. Give me enough strength for tomorrow morning and enough quiet to sleep. I choose to trust you with what I cannot fix. Stay close while I wait for an answer. Amen."}</p>
          </div>
        </section>

        <section className="bg-white py-6 px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <a href="https://wa.me/27752592555?text=Hi%20FGI%2C%20please%20pray%20for%20me.%20" target="_blank" rel="noopener noreferrer"
               className="flex items-center justify-center gap-3 bg-[#25D366] text-white font-extrabold text-lg px-6 py-5 rounded-2xl shadow-md hover:bg-[#1ebe5d] transition-colors text-center leading-snug">
              <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0" fill="currentColor" aria-hidden="true"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.821 11.821 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg>
              <span>Leave your prayer request on our WhatsApp and we will pray for you</span>
            </a>
          </div>
        </section>

        <section className="bg-white py-6 px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <blockquote className="border-l-4 border-[#FFD600] pl-5 py-3 bg-[#f0fafa] rounded-r-xl">
              <p className="text-[#0d6fbf] font-semibold text-lg italic leading-relaxed">&quot;{"Trust in the Lord with all your heart, and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight."}&quot;</p>
              <cite className="text-[#595959] text-sm not-italic mt-2 block">- {"Proverbs 3:5-6"}</cite>
              <p className="text-[#595959] text-xs mt-3">{"Scripture taken from the Holy Bible, New International Version, NIV. Used by permission."}</p>
            </blockquote>
          </div>
        </section>

        <section className="bg-white py-8 px-4 sm:px-6">
          <div className="max-w-2xl mx-auto space-y-10">

            <section className="space-y-3">
              <h2 className="text-2xl font-extrabold text-[#1a1a1a] leading-snug">1. Prayer Requests</h2>
              <p className="text-[#1a1a1a] text-lg leading-relaxed font-semibold">
                If you need {"Healing, Provision, Peace, Wisdom, Restoration"}, <a href="https://wa.me/27752592555?text=Hi%20FGI%2C%20please%20pray%20for%20me.%20" target="_blank" rel="noopener noreferrer" className="text-[#0d6fbf] underline decoration-2 underline-offset-4">send it to us on WhatsApp</a>. We pray over every request on Thursday.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-extrabold text-[#1a1a1a] leading-snug">2. {"Trusting God Beyond Understanding"}</h2>
              <ul className="space-y-3 text-[#1a1a1a] text-lg leading-relaxed">
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"God, we lean on your wisdom this week, because the plans we made in January have already shifted twice."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Lord, we loosen our grip on the calendar, the job search, and the answers we cannot force."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Father, we hold on to your promises while medical results are still pending and nobody can tell us more."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Jesus, give us quiet hearts tonight, even while the questions about our children stay unanswered."}</span></li>
              </ul>
              <p className="border-l-4 border-[#FFD600] pl-4 py-2 bg-[#f0fafa] rounded-r-lg text-[#595959] leading-relaxed">
                <span className="font-bold text-[#006b6b]">Why we pray this: </span>{"Trust asks something hard of us. We say out loud that God knows more than we do, then we live like it. That is easier in a full room on Thursday at 19:00 than alone at 2am, so we practise it together first."}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-extrabold text-[#1a1a1a] leading-snug">3. {"Submitting to God's Direction"}</h2>
              <ul className="space-y-3 text-[#1a1a1a] text-lg leading-relaxed">
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Lord, we place our work and our marriages under you as freely as we place Sunday morning."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Father, teach us to hear the Holy Spirit even when we are rushing for a taxi and not thinking straight."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"God, direct us before we sign anything, accept any offer, or say yes out of pressure."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Jesus, shape our plans for the next six months until they look more like yours than ours."}</span></li>
              </ul>
              <p className="border-l-4 border-[#FFD600] pl-4 py-2 bg-[#f0fafa] rounded-r-lg text-[#595959] leading-relaxed">
                <span className="font-bold text-[#006b6b]">Why we pray this: </span>{"Submission sounds heavy. Day to day it is a small thing: asking before deciding. When we hand God the route, our path becomes his path."}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-extrabold text-[#1a1a1a] leading-snug">4. {"Finding Peace in Uncertainty"}</h2>
              <ul className="space-y-3 text-[#1a1a1a] text-lg leading-relaxed">
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Father, we rest in your presence tonight after a week that took more from us than it gave."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Lord, we trust your timing while we wait for an interview call that has not come."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"God, steady us in the storm at home, where voices get raised and nobody sleeps properly."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Jesus, we carry hope for what you are preparing, even though this month looks nothing like we prayed."}</span></li>
              </ul>
              <p className="border-l-4 border-[#FFD600] pl-4 py-2 bg-[#f0fafa] rounded-r-lg text-[#595959] leading-relaxed">
                <span className="font-bold text-[#006b6b]">Why we pray this: </span>{"God's peace often arrives without an explanation. It settles on people anyway. Some of us have felt it in a hospital corridor in Pretoria North with no news yet."}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-extrabold text-[#1a1a1a] leading-snug">5. {"Releasing the Need for Control"}</h2>
              <ul className="space-y-3 text-[#1a1a1a] text-lg leading-relaxed">
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"God, free us from the worry that wakes us at 3am and replays the same conversation."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Lord, we hand you the parts of next year that we cannot see or arrange."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Father, stop us from acting out of fear when a bill is due and the phone keeps ringing."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Jesus, keep our children and our futures in your hands, where they are safer than in ours."}</span></li>
              </ul>
              <p className="border-l-4 border-[#FFD600] pl-4 py-2 bg-[#f0fafa] rounded-r-lg text-[#595959] leading-relaxed">
                <span className="font-bold text-[#006b6b]">Why we pray this: </span>{"Holding control feels comfortable and it wears us down. When we let go, God has room to work. Usually something shifts in us before anything shifts around us."}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-extrabold text-[#1a1a1a] leading-snug">6. {"Courage to Follow God's Path"}</h2>
              <ul className="space-y-3 text-[#1a1a1a] text-lg leading-relaxed">
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"God, give us courage to walk forward this week without seeing the whole road."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Lord, help us take the step you asked for while the outcome is still unclear."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Father, remind us of what you have said when our confidence drains by Wednesday."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Jesus, we trust the ending you are writing more than the one we keep imagining."}</span></li>
              </ul>
              <p className="border-l-4 border-[#FFD600] pl-4 py-2 bg-[#f0fafa] rounded-r-lg text-[#595959] leading-relaxed">
                <span className="font-bold text-[#006b6b]">Why we pray this: </span>{"Courage here is quiet. It looks like showing up, making the phone call, starting the course you were scared of. That kind of nerve grows out of a heart that has handed itself over to God."}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-extrabold text-[#1a1a1a] leading-snug">7. {"Recognizing God's Faithfulness"}</h2>
              <ul className="space-y-3 text-[#1a1a1a] text-lg leading-relaxed">
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"God, thank you for carrying us through last year when we could see no way out."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Father, thank you for food on the table and work to do in a hard season."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Lord, you have not changed, and we put our full weight on that tonight."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Jesus, bring back the prayers you already answered, so we can pray now with steadier hearts."}</span></li>
              </ul>
              <p className="border-l-4 border-[#FFD600] pl-4 py-2 bg-[#f0fafa] rounded-r-lg text-[#595959] leading-relaxed">
                <span className="font-bold text-[#006b6b]">Why we pray this: </span>{"Memory feeds trust. Write down the dates when God came through, even the small ones. Read that list again on a loadshedding evening with a candle on the table and it hits differently."}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-extrabold text-[#1a1a1a] leading-snug">8. {"Living with Expectant Faith"}</h2>
              <ul className="space-y-3 text-[#1a1a1a] text-lg leading-relaxed">
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"God, we wait with hope for what you promised, and we will not give up on it."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Lord, we watch for your hand in our homes and on our street this week."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Father, we believe you hear the prayers we whisper when nobody else is listening."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Jesus, we look for you to move in the situations we have stopped knowing how to fix."}</span></li>
              </ul>
              <p className="border-l-4 border-[#FFD600] pl-4 py-2 bg-[#f0fafa] rounded-r-lg text-[#595959] leading-relaxed">
                <span className="font-bold text-[#006b6b]">Why we pray this: </span>{"Expectant faith keeps praying after the first no. We ask, then we watch for the answer. Praying like that changes the feel of a whole week."}
              </p>
            </section>
          </div>
        </section>

        <section className="bg-[#f7fbfb] py-10 px-4 sm:px-6 border-t border-gray-100">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-2xl font-extrabold text-[#1a1a1a]">Why pray this?</h2>

            <div>
              <h3 className="text-lg font-bold text-[#1a1a1a] leading-snug">{"How do I trust God when nothing makes sense right now?"}</h3>
              <p className="text-[#595959] leading-relaxed mt-2">{"You start small and you say it out loud, even while you are confused. Trust is not a feeling you wait for; it is a decision you make with shaking hands. Praying it helps because it moves the weight off your shoulders and onto someone who can carry it. You can pray one line tonight and pray it again tomorrow."}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#1a1a1a] leading-snug">{"How do I know if I am making the right decision?"}</h3>
              <p className="text-[#595959] leading-relaxed mt-2">{"Ask God before you decide, not after, and give yourself time to listen. Talk it through with one or two people who know you and will tell you the truth. Praying about a decision slows you down, and that alone stops a lot of bad calls. Rushed yes answers cause most of the regret people bring to us."}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#1a1a1a] leading-snug">{"Why can't I feel any peace when I pray?"}</h3>
              <p className="text-[#595959] leading-relaxed mt-2">{"Peace is often late and quiet, and its absence does not mean God ignored you. Some nights the only thing that changes is that you are no longer carrying it alone. Keep praying short and honest. Feelings tend to follow days later, usually when you stopped checking for them."}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#1a1a1a] leading-snug">{"How do I stop worrying about things I cannot control?"}</h3>
              <p className="text-[#595959] leading-relaxed mt-2">{"Name the thing, hand it over in prayer, then do the next small task in front of you. Worry loves an empty evening and a phone in your hand. Praying about it gives your mind somewhere to put the fear instead of circling it. When it comes back at 3am, hand it over again."}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#1a1a1a] leading-snug">{"Where do I find the courage to make a big change?"}</h3>
              <p className="text-[#595959] leading-relaxed mt-2">{"Courage comes from trusting the one who is with you, not from feeling ready. Nobody feels ready. Praying for boldness helps because you stop measuring the risk on your strength alone. Then you take one step you can actually take this week."}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#1a1a1a] leading-snug">{"God helped me before, so why does he feel far away now?"}</h3>
              <p className="text-[#595959] leading-relaxed mt-2">{"Distance is usually a feeling, not a fact, and it often shows up when we are exhausted. Go back to what he has already done for you and say it out loud. Remembering is a real form of prayer, and it steadies you for what is still unknown. Keep a short list somewhere you will see it."}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#1a1a1a] leading-snug">{"Does God hear my prayers if nothing is changing?"}</h3>
              <p className="text-[#595959] leading-relaxed mt-2">{"Yes, he hears you, and silence is not the same as refusal. Answers often come slower than we want and in a shape we did not picture. Praying with expectation keeps you looking for what God is doing instead of shutting down. Plenty of people have prayed for months and then seen it turn."}</p>
            </div>
          </div>
        </section>

        <section className="bg-white py-10 px-4 sm:px-6 border-t border-gray-100">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-xl font-bold text-[#1a1a1a] mb-2">We pray these together every Thursday</h2>
            <p className="text-[#595959] mb-5">19:00 to 20:00, Fountain of Grace International, Pretoria North. Anyone can join. Send us a WhatsApp and we will add you.</p>
            <a href="https://wa.me/27752592555?text=Hi%20FGI%2C%20I%20would%20like%20to%20join%20the%20Thursday%20prayer%20meeting." target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center justify-center gap-2 bg-[#008080] text-white font-bold text-lg px-7 py-4 rounded-xl hover:bg-[#006b6b] transition-colors w-full sm:w-auto">
              Join the Thursday prayer meeting
            </a>
          </div>
        </section>

        <section className="bg-white py-10 px-4 sm:px-6 border-t border-gray-100">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-xl font-bold text-[#1a1a1a] mb-2">Send this to someone who needs it</h2>
            <p className="text-[#595959] mb-5">One message can reach someone you cannot. Pass it on.</p>
            <a href="https://wa.me/?text=A%20prayer%20I%20thought%20may%20help%20you%20this%20week%3A%20https%3A%2F%2Fwww.fountaingrace.org%2Ffountain-of-prayers%2Fa-prayer-for-when-you-dont-know-what-comes-next%3Futm_source%3Dwhatsapp%26utm_medium%3Dshare%26utm_campaign%3Dprayers" target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold text-lg px-7 py-4 rounded-xl hover:bg-[#1ebe5d] transition-colors w-full sm:w-auto">
              <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0" fill="currentColor" aria-hidden="true"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.821 11.821 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg>
              Share on WhatsApp
            </a>
            <p className="mt-6">
              <Link href="/prayer" className="text-[#0d6fbf] underline text-base">Prefer to write your request? Use the prayer form</Link>
            </p>
          </div>
        </section>

        <section className="bg-[#008080] py-12 px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Come and worship with us in Pretoria North</h2>
            <p className="text-white mb-7">Every Sunday at 09:00. Fountain of Grace International, 323 B Danie Theron Street, Pretoria North.</p>
            <Link href="/plan-your-visit" className="btn-primary">Plan Your Visit</Link>
          </div>
        </section>

        <section className="bg-white py-8 px-4 sm:px-6 text-center space-y-3">
          <p><Link href="/fountain-of-prayers" className="text-[#0d6fbf] font-semibold underline">All weekly prayers</Link></p>
          <p><Link href="/devotional" className="text-[#0d6fbf] underline text-sm">Read today&apos;s devotional</Link></p>
        </section>
      </article>
    </>
  )
}
