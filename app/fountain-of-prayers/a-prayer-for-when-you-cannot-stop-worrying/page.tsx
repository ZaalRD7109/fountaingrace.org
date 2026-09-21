import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "A Prayer for When You Cannot Stop Worrying | Fountain of Grace International",
  description: "Prayer points, a short prayer you can pray now, and answers on worry and letting go. From Fountain of Grace International, a church in Pretoria North.",
  robots: 'index, follow',
  alternates: { canonical: "https://www.fountaingrace.org/fountain-of-prayers/a-prayer-for-when-you-cannot-stop-worrying" },
  openGraph: {
    title: "A Prayer for When You Cannot Stop Worrying",
    description: "Prayer points, a short prayer you can pray now, and answers on worry and letting go. From Fountain of Grace International, a church in Pretoria North.",
    type: 'article',
    images: [{ url: "https://www.fountaingrace.org/og-image.jpg", width: 1200, height: 630, alt: 'Fountain of Grace International - Church in Pretoria North' }],
    url: "https://www.fountaingrace.org/fountain-of-prayers/a-prayer-for-when-you-cannot-stop-worrying",
  },
  twitter: { card: 'summary_large_image', title: "A Prayer for When You Cannot Stop Worrying", description: "Prayer points, a short prayer you can pray now, and answers on worry and letting go. From Fountain of Grace International, a church in Pretoria North.", images: ["https://www.fountaingrace.org/og-image.jpg"] },
}

const jsonLd = [{"@context": "https://schema.org", "@type": "Article", "headline": "A Prayer for When You Cannot Stop Worrying", "alternativeHeadline": "Week 39 of 2026: The Joy of Surrender", "description": "Prayer points, a short prayer you can pray now, and answers on worry and letting go. From Fountain of Grace International, a church in Pretoria North.", "image": "https://www.fountaingrace.org/og-image.jpg", "author": {"@type": "Person", "name": "Pastor Ricardo Zaal"}, "publisher": {"@type": "Church", "name": "Fountain of Grace International", "address": {"@type": "PostalAddress", "streetAddress": "323 B Danie Theron Street", "addressLocality": "Pretoria North", "addressRegion": "Gauteng", "addressCountry": "ZA"}}, "datePublished": "2026-09-21T08:00:00+02:00", "dateModified": "2026-09-21T08:00:00+02:00", "mainEntityOfPage": "https://www.fountaingrace.org/fountain-of-prayers/a-prayer-for-when-you-cannot-stop-worrying", "url": "https://www.fountaingrace.org/fountain-of-prayers/a-prayer-for-when-you-cannot-stop-worrying", "isPartOf": {"@type": "CreativeWorkSeries", "name": "Fountain of Prayers", "url": "https://www.fountaingrace.org/fountain-of-prayers"}}, {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fountaingrace.org"}, {"@type": "ListItem", "position": 2, "name": "Fountain of Prayers", "item": "https://www.fountaingrace.org/fountain-of-prayers"}, {"@type": "ListItem", "position": 3, "name": "A Prayer for When You Cannot Stop Worrying", "item": "https://www.fountaingrace.org/fountain-of-prayers/a-prayer-for-when-you-cannot-stop-worrying"}]}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "If God is in charge, why is my life such a mess?", "acceptedAnswer": {"@type": "Answer", "text": "God being in charge does not mean everything that happens to you is what he wanted. We live in a broken world, and hard things land on good people. Praying this helps because it puts your situation next to someone bigger than it. That changes how heavy it feels to carry."}}, {"@type": "Question", "name": "How do I stop worrying when I lie awake at night?", "acceptedAnswer": {"@type": "Answer", "text": "Say the worry out loud to God instead of replaying it in your head. It sounds too simple, and it works, because the mind keeps circling until the thought is handed somewhere. Many of us have prayed at 2am with the lights out. You are not the only one awake."}}, {"@type": "Question", "name": "Is it wrong to be scared about what happens next?", "acceptedAnswer": {"@type": "Answer", "text": "No. Fear about the future is normal and God is not offended by it. Prayer does not hand you the plan, it hands you company for the walk. That is usually what makes the next step possible."}}, {"@type": "Question", "name": "What does letting go of control actually mean?", "acceptedAnswer": {"@type": "Answer", "text": "It means you stop trying to force an outcome you were never able to guarantee. You keep doing your part, and you stop carrying the weight of the result. People often say it feels like putting down a bag they forgot they were holding."}}, {"@type": "Question", "name": "How can I feel joy when nothing has changed?", "acceptedAnswer": {"@type": "Answer", "text": "Joy in the Bible sits deeper than a good mood and does not need the circumstances to improve first. It grows out of knowing God is with you. Start small. Two quiet minutes and one thing to thank him for."}}, {"@type": "Question", "name": "What do I do when I am too tired to pray?", "acceptedAnswer": {"@type": "Answer", "text": "Pray one sentence. God is not grading your effort or waiting for better words. Tiredness is one of the most honest things you can bring him, and he tends to meet people right there."}}, {"@type": "Question", "name": "How do I keep believing when things stay bad?", "acceptedAnswer": {"@type": "Answer", "text": "You hold on to what God has said rather than what you can currently see. Faith stretches in these seasons, which is uncomfortable and also how it gets stronger. Keep praying even when it feels flat. That is the believing."}}, {"@type": "Question", "name": "Why has God not answered my prayer yet?", "acceptedAnswer": {"@type": "Answer", "text": "A delay is not a refusal, and it is not proof that God stopped listening. Some answers take shape over years. Praying through the waiting keeps you close to him instead of drifting off while you wait."}}, {"@type": "Question", "name": "How can I have peace when everything is uncertain?", "acceptedAnswer": {"@type": "Answer", "text": "Peace comes from resting in someone who does not change, even when your circumstances do. You do not need the situation settled first. Praying about the uncertainty out loud often takes the edge off it, even before anything moves."}}, {"@type": "Question", "name": "Where do I find strength when I am facing something long and hard?", "acceptedAnswer": {"@type": "Answer", "text": "Ask God daily for enough strength for that day. Long seasons drain whatever willpower you started with, and God gives fresh supply as you go. Our prayer meeting runs Thursdays from 19:00 to 20:00 in Pretoria North if you would rather not do this alone."}}]}]

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
              Fountain of Prayers · Week 39 of 2026
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              {"A Prayer for When You Cannot Stop Worrying"}
            </h1>
            <p className="text-white text-base mt-4">{"The Joy of Surrender"} · {"Philippians 4:6-7"}</p>
            <p className="text-white text-sm mt-2">Pretoria North · 21 September 2026</p>
          </div>
        </header>

        <section className="bg-white pt-10 pb-4 px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-[#006b6b] text-xs font-bold uppercase tracking-wider mb-3">Pray this now</h2>
            <p className="text-[#1a1a1a] text-xl leading-relaxed italic">{"God, I am tired of carrying this. My mind will not switch off, and I keep going over the same thing at 2am. I do not know how to fix this. So I am asking you to hold me while it is still here. Give me enough strength for tonight, and then for tomorrow. Help me loosen my grip on what is not mine to carry. Thank you that you have not walked away from me. Amen."}</p>
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
              <p className="text-[#0d6fbf] font-semibold text-lg italic leading-relaxed">&quot;{"Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus."}&quot;</p>
              <cite className="text-[#595959] text-sm not-italic mt-2 block">- {"Philippians 4:6-7"}</cite>
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
              <h2 className="text-2xl font-extrabold text-[#1a1a1a] leading-snug">2. {"Recognizing God's Sovereignty and Care"}</h2>
              <ul className="space-y-3 text-[#1a1a1a] text-lg leading-relaxed">
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Father, we say out loud that you are stronger than anything holding us tonight."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"God, thank you for caring for us on the days nobody notices what we carry."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Lord, we choose to trust your plan for the part of our lives we cannot see."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Jesus, teach us to wait well when your timing runs slower than our fear."}</span></li>
              </ul>
              <p className="border-l-4 border-[#FFD600] pl-4 py-2 bg-[#f0fafa] rounded-r-lg text-[#595959] leading-relaxed">
                <span className="font-bold text-[#006b6b]">Why we pray this: </span>{"Surrender starts here. Before we hand anything over, we remind ourselves who we are handing it to. We pray this first every Thursday at 19:00 because fear shrinks when God gets bigger in the room."}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-extrabold text-[#1a1a1a] leading-snug">3. {"Surrendering Worry and Anxiety"}</h2>
              <ul className="space-y-3 text-[#1a1a1a] text-lg leading-relaxed">
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"God, we hand you the pressure that has been sitting on our chest all week."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Lord, give us a steady heart while we wait for news we are afraid of."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Father, carry what is being asked of us when it is more than we have to give."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Jesus, meet us at 2am when sleep will not come and worry gets loud."}</span></li>
              </ul>
              <p className="border-l-4 border-[#FFD600] pl-4 py-2 bg-[#f0fafa] rounded-r-lg text-[#595959] leading-relaxed">
                <span className="font-bold text-[#006b6b]">Why we pray this: </span>{"Worry does not leave because we tell it to. It leaves as we keep handing it over, one prayer at a time. Peace comes into the space we clear out."}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-extrabold text-[#1a1a1a] leading-snug">4. {"Trusting God with Our Future"}</h2>
              <ul className="space-y-3 text-[#1a1a1a] text-lg leading-relaxed">
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"God, we bring you the uncertainty ahead and ask you to steady us inside it."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Lord, give us confidence to take the next step while the path stays unclear."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Father, grow patience in us while the answer we want has still not come."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Jesus, we trust you to provide what we need, one day at a time."}</span></li>
              </ul>
              <p className="border-l-4 border-[#FFD600] pl-4 py-2 bg-[#f0fafa] rounded-r-lg text-[#595959] leading-relaxed">
                <span className="font-bold text-[#006b6b]">Why we pray this: </span>{"Security does not come from knowing the plan. It comes from knowing the One who holds it. That is why we pray about tomorrow instead of rehearsing it."}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-extrabold text-[#1a1a1a] leading-snug">5. {"Letting Go of Control"}</h2>
              <ul className="space-y-3 text-[#1a1a1a] text-lg leading-relaxed">
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Lord, we release our grip on what was never ours to hold."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Father, free us from needing to get everything right before we feel safe."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"God, help us lay down expectations that are crushing us and the people near us."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Jesus, we want your will more than the outcome we have already decided on."}</span></li>
              </ul>
              <p className="border-l-4 border-[#FFD600] pl-4 py-2 bg-[#f0fafa] rounded-r-lg text-[#595959] leading-relaxed">
                <span className="font-bold text-[#006b6b]">Why we pray this: </span>{"Control is heavy work. Most of us are holding something that has already worn us out. When we open our hands, God gets room to do what we could never manage."}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-extrabold text-[#1a1a1a] leading-snug">6. {"Finding Joy in God's Presence"}</h2>
              <ul className="space-y-3 text-[#1a1a1a] text-lg leading-relaxed">
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"God, meet us in the quiet moments we usually rush straight past."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Lord, thank you for the small mercies we forgot to notice today."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Father, settle us in your care until our restlessness quiets down."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Jesus, make your word taste good to us again this week."}</span></li>
              </ul>
              <p className="border-l-4 border-[#FFD600] pl-4 py-2 bg-[#f0fafa] rounded-r-lg text-[#595959] leading-relaxed">
                <span className="font-bold text-[#006b6b]">Why we pray this: </span>{"Joy is not a mood we manufacture. It grows when we sit still with God long enough to notice him. In Pretoria North a loadshedding evening can be the quietest hour of the day. Use it."}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-extrabold text-[#1a1a1a] leading-snug">7. {"Strength for the Weary"}</h2>
              <ul className="space-y-3 text-[#1a1a1a] text-lg leading-relaxed">
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"God, hold up those who are carrying far more than one person should."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Lord, give hope to anyone who has run out of reasons to keep going."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Father, give courage to us in the place where we are weakest right now."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Jesus, renew us when we are drained to nothing and still have to show up."}</span></li>
              </ul>
              <p className="border-l-4 border-[#FFD600] pl-4 py-2 bg-[#f0fafa] rounded-r-lg text-[#595959] leading-relaxed">
                <span className="font-bold text-[#006b6b]">Why we pray this: </span>{"Tiredness is honest. God does not scold us for it. We ask him for strength we do not have, and he keeps giving enough for the day in front of us."}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-extrabold text-[#1a1a1a] leading-snug">8. {"Faith That Transcends Circumstances"}</h2>
              <ul className="space-y-3 text-[#1a1a1a] text-lg leading-relaxed">
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"God, we hold on to what you have promised, even when we cannot see it."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Lord, grow belief in us while the situation stays hard."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Father, thank you that you do not change when everything around us does."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Jesus, we trust that you are still working where we cannot see the ending."}</span></li>
              </ul>
              <p className="border-l-4 border-[#FFD600] pl-4 py-2 bg-[#f0fafa] rounded-r-lg text-[#595959] leading-relaxed">
                <span className="font-bold text-[#006b6b]">Why we pray this: </span>{"Faith that only works on good days is thin. It thickens when we keep trusting God through a stretch that has not improved. Surrender is how that happens."}
              </p>
            </section>

            <div className="rounded-xl bg-[#f0fafa] border border-[#008080]/30 p-4">
              <p className="text-[#006b6b] font-bold">Pray these at home this week</p>
              <p className="text-[#595959] text-sm mt-1">On Thursday we pray the points above together. The ones below are yours for the week.</p>
            </div>

            <section className="space-y-4">
              <h2 className="text-2xl font-extrabold text-[#1a1a1a] leading-snug">9. {"Releasing the Need to Control Outcomes"}</h2>
              <ul className="space-y-3 text-[#1a1a1a] text-lg leading-relaxed">
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Father, we entrust to you the ones we love and cannot protect."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Lord, keep us praying when the answer has taken far longer than we hoped."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"God, teach us to accept your timing without giving up on you."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Jesus, we lay down our plans and ask you to lead us instead."}</span></li>
              </ul>
              <p className="border-l-4 border-[#FFD600] pl-4 py-2 bg-[#f0fafa] rounded-r-lg text-[#595959] leading-relaxed">
                <span className="font-bold text-[#006b6b]">Why we pray this: </span>{"Pray these lines at home during the week. Real peace shows up when we stop managing the ending. God is not slow. He is thorough."}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-extrabold text-[#1a1a1a] leading-snug">10. {"Embracing Peace in Uncertainty"}</h2>
              <ul className="space-y-3 text-[#1a1a1a] text-lg leading-relaxed">
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"God, steady us when we do not know what the next month holds."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Lord, give us peace when life changes without any warning."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Father, bring calm where hard words were spoken and nothing feels settled."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Jesus, we rest in the fact that you stay the same."}</span></li>
              </ul>
              <p className="border-l-4 border-[#FFD600] pl-4 py-2 bg-[#f0fafa] rounded-r-lg text-[#595959] leading-relaxed">
                <span className="font-bold text-[#006b6b]">Why we pray this: </span>{"Certainty is in short supply. God stays constant while circumstances shift under us. Resting in that is what makes peace possible before anything is resolved."}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-extrabold text-[#1a1a1a] leading-snug">11. {"Finding Strength in Surrender"}</h2>
              <ul className="space-y-3 text-[#1a1a1a] text-lg leading-relaxed">
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"God, be near to everyone waiting on a result they are afraid to hear."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Lord, give courage for the first hard days after bad news."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Father, hold those who are waiting for a change that keeps not coming."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Jesus, give endurance for the long stretch where there is no quick end."}</span></li>
              </ul>
              <p className="border-l-4 border-[#FFD600] pl-4 py-2 bg-[#f0fafa] rounded-r-lg text-[#595959] leading-relaxed">
                <span className="font-bold text-[#006b6b]">Why we pray this: </span>{"Some seasons are long. Grit runs out, and God's strength does not. We surrender our weariness and he keeps us walking."}
              </p>
            </section>
          </div>
        </section>

        <section className="bg-[#f7fbfb] py-10 px-4 sm:px-6 border-t border-gray-100">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-2xl font-extrabold text-[#1a1a1a]">Why pray this?</h2>

            <div>
              <h3 className="text-lg font-bold text-[#1a1a1a] leading-snug">{"If God is in charge, why is my life such a mess?"}</h3>
              <p className="text-[#595959] leading-relaxed mt-2">{"God being in charge does not mean everything that happens to you is what he wanted. We live in a broken world, and hard things land on good people. Praying this helps because it puts your situation next to someone bigger than it. That changes how heavy it feels to carry."}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#1a1a1a] leading-snug">{"How do I stop worrying when I lie awake at night?"}</h3>
              <p className="text-[#595959] leading-relaxed mt-2">{"Say the worry out loud to God instead of replaying it in your head. It sounds too simple, and it works, because the mind keeps circling until the thought is handed somewhere. Many of us have prayed at 2am with the lights out. You are not the only one awake."}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#1a1a1a] leading-snug">{"Is it wrong to be scared about what happens next?"}</h3>
              <p className="text-[#595959] leading-relaxed mt-2">{"No. Fear about the future is normal and God is not offended by it. Prayer does not hand you the plan, it hands you company for the walk. That is usually what makes the next step possible."}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#1a1a1a] leading-snug">{"What does letting go of control actually mean?"}</h3>
              <p className="text-[#595959] leading-relaxed mt-2">{"It means you stop trying to force an outcome you were never able to guarantee. You keep doing your part, and you stop carrying the weight of the result. People often say it feels like putting down a bag they forgot they were holding."}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#1a1a1a] leading-snug">{"How can I feel joy when nothing has changed?"}</h3>
              <p className="text-[#595959] leading-relaxed mt-2">{"Joy in the Bible sits deeper than a good mood and does not need the circumstances to improve first. It grows out of knowing God is with you. Start small. Two quiet minutes and one thing to thank him for."}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#1a1a1a] leading-snug">{"What do I do when I am too tired to pray?"}</h3>
              <p className="text-[#595959] leading-relaxed mt-2">{"Pray one sentence. God is not grading your effort or waiting for better words. Tiredness is one of the most honest things you can bring him, and he tends to meet people right there."}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#1a1a1a] leading-snug">{"How do I keep believing when things stay bad?"}</h3>
              <p className="text-[#595959] leading-relaxed mt-2">{"You hold on to what God has said rather than what you can currently see. Faith stretches in these seasons, which is uncomfortable and also how it gets stronger. Keep praying even when it feels flat. That is the believing."}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#1a1a1a] leading-snug">{"Why has God not answered my prayer yet?"}</h3>
              <p className="text-[#595959] leading-relaxed mt-2">{"A delay is not a refusal, and it is not proof that God stopped listening. Some answers take shape over years. Praying through the waiting keeps you close to him instead of drifting off while you wait."}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#1a1a1a] leading-snug">{"How can I have peace when everything is uncertain?"}</h3>
              <p className="text-[#595959] leading-relaxed mt-2">{"Peace comes from resting in someone who does not change, even when your circumstances do. You do not need the situation settled first. Praying about the uncertainty out loud often takes the edge off it, even before anything moves."}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#1a1a1a] leading-snug">{"Where do I find strength when I am facing something long and hard?"}</h3>
              <p className="text-[#595959] leading-relaxed mt-2">{"Ask God daily for enough strength for that day. Long seasons drain whatever willpower you started with, and God gives fresh supply as you go. Our prayer meeting runs Thursdays from 19:00 to 20:00 in Pretoria North if you would rather not do this alone."}</p>
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
            <a href="https://wa.me/?text=A%20prayer%20I%20thought%20may%20help%20you%20this%20week%3A%20https%3A%2F%2Fwww.fountaingrace.org%2Ffountain-of-prayers%2Fa-prayer-for-when-you-cannot-stop-worrying%3Futm_source%3Dwhatsapp%26utm_medium%3Dshare%26utm_campaign%3Dprayers" target="_blank" rel="noopener noreferrer"
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
