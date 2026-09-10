import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "A Prayer for When Life Keeps Knocking You Down | Fountain of Grace International",
  description: "Prayers for holding on when hard times drag on: words you can pray tonight, plus Thursday prayer points from a church in Pretoria North.",
  robots: 'index, follow',
  alternates: { canonical: "https://www.fountaingrace.org/fountain-of-prayers/a-prayer-for-when-life-keeps-knocking-you-down" },
  openGraph: {
    title: "A Prayer for When Life Keeps Knocking You Down",
    description: "Prayers for holding on when hard times drag on: words you can pray tonight, plus Thursday prayer points from a church in Pretoria North.",
    type: 'article',
    images: [{ url: "https://www.fountaingrace.org/og-image.jpg", width: 1200, height: 630, alt: 'Fountain of Grace International - Church in Pretoria North' }],
    url: "https://www.fountaingrace.org/fountain-of-prayers/a-prayer-for-when-life-keeps-knocking-you-down",
  },
  twitter: { card: 'summary_large_image', title: "A Prayer for When Life Keeps Knocking You Down", description: "Prayers for holding on when hard times drag on: words you can pray tonight, plus Thursday prayer points from a church in Pretoria North.", images: ["https://www.fountaingrace.org/og-image.jpg"] },
}

const jsonLd = [{"@context": "https://schema.org", "@type": "Article", "headline": "A Prayer for When Life Keeps Knocking You Down", "alternativeHeadline": "Week 32 of 2026: Persevering Through Trials", "description": "Prayers for holding on when hard times drag on: words you can pray tonight, plus Thursday prayer points from a church in Pretoria North.", "image": "https://www.fountaingrace.org/og-image.jpg", "author": {"@type": "Person", "name": "Pastor Ricardo Zaal"}, "publisher": {"@type": "Church", "name": "Fountain of Grace International", "address": {"@type": "PostalAddress", "streetAddress": "323 B Danie Theron Street", "addressLocality": "Pretoria North", "addressRegion": "Gauteng", "addressCountry": "ZA"}}, "datePublished": "2026-08-03T08:00:00+02:00", "dateModified": "2026-08-03T08:00:00+02:00", "mainEntityOfPage": "https://www.fountaingrace.org/fountain-of-prayers/a-prayer-for-when-life-keeps-knocking-you-down", "url": "https://www.fountaingrace.org/fountain-of-prayers/a-prayer-for-when-life-keeps-knocking-you-down", "isPartOf": {"@type": "CreativeWorkSeries", "name": "Fountain of Prayers", "url": "https://www.fountaingrace.org/fountain-of-prayers"}}, {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fountaingrace.org"}, {"@type": "ListItem", "position": 2, "name": "Fountain of Prayers", "item": "https://www.fountaingrace.org/fountain-of-prayers"}, {"@type": "ListItem", "position": 3, "name": "A Prayer for When Life Keeps Knocking You Down", "item": "https://www.fountaingrace.org/fountain-of-prayers/a-prayer-for-when-life-keeps-knocking-you-down"}]}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "How can I be happy when everything is going wrong?", "acceptedAnswer": {"@type": "Answer", "text": "You do not have to feel happy to pray this. Joy here means holding on to something true while the situation stays awful. Thanking God for one small thing, out loud, loosens the grip of the worst thought. Try it before you get out of bed tomorrow."}}, {"@type": "Question", "name": "Why does God let me struggle for so long?", "acceptedAnswer": {"@type": "Answer", "text": "Scripture does not promise a short season, and pretending otherwise would be dishonest. What it does say is that God uses the long stretch to change something in us that comfort never touches. Praying about growth keeps you from wasting the pain. It gives the waiting a purpose you can hold."}}, {"@type": "Question", "name": "What do I do when I do not feel like I have faith anymore?", "acceptedAnswer": {"@type": "Answer", "text": "Say so to God. Faith that is shaking is still faith, and he is not offended by an honest sentence. Many people who pray at our Thursday meeting arrive with almost nothing left and leave with a little. Come as you are."}}, {"@type": "Question", "name": "Is it wrong to lose hope?", "acceptedAnswer": {"@type": "Answer", "text": "No. Losing hope is a human response to a long, hard road, and God does not punish you for it. Hope comes back slowly, usually through other people praying near you. That is why we say these lines together instead of alone."}}, {"@type": "Question", "name": "Why is God taking so long to answer my prayer?", "acceptedAnswer": {"@type": "Answer", "text": "Nobody can give you the reason, and anyone who claims to know is guessing. What we can say is that God is not ignoring you while you wait. Praying about his timing takes some of the panic out of the delay. It helps you keep living while the answer is still coming."}}, {"@type": "Question", "name": "How do I keep going when I have nothing left?", "acceptedAnswer": {"@type": "Answer", "text": "Aim for tomorrow morning only. Strength usually comes in small daily portions rather than one big supply. Ask God for enough for the next day, then do the next thing in front of you. That is how most people get through a long year."}}, {"@type": "Question", "name": "Does God help me if I am weak?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, and weakness is where he tends to show up most clearly. You do not need to fix yourself first or sound impressive when you pray. Tell him plainly that you are finished, then ask him to carry it. That prayer counts."}}]}]

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
              Fountain of Prayers · Week 32 of 2026
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              {"A Prayer for When Life Keeps Knocking You Down"}
            </h1>
            <p className="text-white text-base mt-4">{"Persevering Through Trials"} · {"James 1:2-4"}</p>
            <p className="text-white text-sm mt-2">Pretoria North · 3 August 2026</p>
          </div>
        </header>

        <section className="bg-white pt-10 pb-4 px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-[#006b6b] text-xs font-bold uppercase tracking-wider mb-3">Pray this now</h2>
            <p className="text-[#1a1a1a] text-xl leading-relaxed italic">{"God, I am tired. This trouble has gone on longer than I thought I could handle, and I still do not see the end of it. I am not asking you to snap your fingers and make it disappear. I am asking you to hold me steady inside it. Give me enough strength for tonight. Give me enough for tomorrow morning. Keep my heart soft when it wants to go hard. I am still here, and I am still yours. Amen."}</p>
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
              <p className="text-[#0d6fbf] font-semibold text-lg italic leading-relaxed">&quot;{"Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds, because you know that the testing of your faith produces perseverance. Let perseverance finish its work so that you may be mature and complete, not lacking anything."}&quot;</p>
              <cite className="text-[#595959] text-sm not-italic mt-2 block">- {"James 1:2-4"}</cite>
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
              <h2 className="text-2xl font-extrabold text-[#1a1a1a] leading-snug">2. {"Embracing Joy in Trials"}</h2>
              <ul className="space-y-3 text-[#1a1a1a] text-lg leading-relaxed">
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"God, we ask for joy that holds even on the mornings we wake up dreading work."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Jesus, we fix our eyes on you while the test results sit unopened on the kitchen table."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Lord, give us strength this week for the shifts, the school runs and the calls we dread."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Father, we thank you for bread on the table and for the people who sat with us."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"God, we ask for peace in this house when the argument ends and nobody can sleep."}</span></li>
              </ul>
              <p className="border-l-4 border-[#FFD600] pl-4 py-2 bg-[#f0fafa] rounded-r-lg text-[#595959] leading-relaxed">
                <span className="font-bold text-[#006b6b]">Why we pray this: </span>{"Joy in a hard season is a decision, sometimes made through clenched teeth. Trouble shrinks our sight down to one problem until we see nothing else. Saying thank you out loud pulls our eyes back up."}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-extrabold text-[#1a1a1a] leading-snug">3. {"Growing in Spiritual Maturity"}</h2>
              <ul className="space-y-3 text-[#1a1a1a] text-lg leading-relaxed">
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"God, we want to grow up in you, not just survive another month of this pressure."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Lord, we trust the slow work you are doing in us while the answer is still delayed."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Father, open our hearts where we have gone stubborn about a marriage, a habit, or a grudge."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Jesus, give us patience with ourselves on the days we fall back into the same fear."}</span></li>
              </ul>
              <p className="border-l-4 border-[#FFD600] pl-4 py-2 bg-[#f0fafa] rounded-r-lg text-[#595959] leading-relaxed">
                <span className="font-bold text-[#006b6b]">Why we pray this: </span>{"Growth is slow, and God does not seem to rush it. Most of what changes in us gets shaped while we are stuck waiting. We pray for patience because we would rather skip the whole process."}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-extrabold text-[#1a1a1a] leading-snug">4. {"Strengthening Our Faith"}</h2>
              <ul className="space-y-3 text-[#1a1a1a] text-lg leading-relaxed">
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"God, hold our faith steady when the bank balance and the month do not match up."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Lord, we believe you are here, even in a hospital corridor at two in the morning."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Father, when fear wakes us at night, teach us to speak your name before we panic."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Jesus, renew our strength each morning, one day at a time, for as long as this lasts."}</span></li>
              </ul>
              <p className="border-l-4 border-[#FFD600] pl-4 py-2 bg-[#f0fafa] rounded-r-lg text-[#595959] leading-relaxed">
                <span className="font-bold text-[#006b6b]">Why we pray this: </span>{"Faith gets weight put on it before it gets strong. A late payslip, a scan result, a silent phone: all of it presses. We pray together so nobody carries that pressure alone."}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-extrabold text-[#1a1a1a] leading-snug">5. {"Enduring with Hope"}</h2>
              <ul className="space-y-3 text-[#1a1a1a] text-lg leading-relaxed">
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"God, anchor our hope in Jesus when every other thing we leaned on has given way."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Lord, help us see past this month to what you are building that outlasts it."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Father, steady the hope of anyone here who has almost stopped praying about the same thing."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Jesus, keep our eyes on your promises when nothing around us looks like they are true."}</span></li>
              </ul>
              <p className="border-l-4 border-[#FFD600] pl-4 py-2 bg-[#f0fafa] rounded-r-lg text-[#595959] leading-relaxed">
                <span className="font-bold text-[#006b6b]">Why we pray this: </span>{"Hope wears thin when a season drags. That is part of why we gather in Pretoria North every Thursday at 19:00 and say these words out loud. Hearing someone else pray them keeps yours alive."}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-extrabold text-[#1a1a1a] leading-snug">6. {"Trusting God's Timing"}</h2>
              <ul className="space-y-3 text-[#1a1a1a] text-lg leading-relaxed">
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"God, give us patience while we wait on a job answer that has taken four months already."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Lord, we trust your plan even where we cannot see one step of it yet."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Father, teach us contentment in the waiting instead of resentment toward everyone who got their answer."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Jesus, we lay our timeline down and ask you to keep us calm in yours."}</span></li>
              </ul>
              <p className="border-l-4 border-[#FFD600] pl-4 py-2 bg-[#f0fafa] rounded-r-lg text-[#595959] leading-relaxed">
                <span className="font-bold text-[#006b6b]">Why we pray this: </span>{"Waiting is the hardest part for most of us. Anyone who has stood in a queue since 6am for a document knows how thin patience gets. We pray for a settled heart while the clock keeps running."}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-extrabold text-[#1a1a1a] leading-snug">7. {"Developing a Resilient Heart"}</h2>
              <ul className="space-y-3 text-[#1a1a1a] text-lg leading-relaxed">
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"God, make us tough in the good way when the same problem comes back a third time."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Lord, steady our spirit through the retrenchment talk and the uncertainty at home."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Father, give us courage to face the conversation we have been avoiding all week."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Jesus, help us press on tomorrow morning even when nothing has changed since tonight."}</span></li>
              </ul>
              <p className="border-l-4 border-[#FFD600] pl-4 py-2 bg-[#f0fafa] rounded-r-lg text-[#595959] leading-relaxed">
                <span className="font-bold text-[#006b6b]">Why we pray this: </span>{"Resilience is built, never handed over ready-made. It grows in ordinary irritations too, like a cold supper during loadshedding after a twelve hour day. Faith that keeps showing up is what makes a heart durable."}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-extrabold text-[#1a1a1a] leading-snug">8. {"Relying on God's Strength"}</h2>
              <ul className="space-y-3 text-[#1a1a1a] text-lg leading-relaxed">
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"God, fill us with your Spirit because our own strength ran out somewhere around Tuesday."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Lord, we lean on your power for the parenting we do not feel qualified to do."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Father, meet us in our weakness instead of waiting for us to pull ourselves together."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Jesus, renew our strength each morning for the work, the caring and the quiet worry."}</span></li>
              </ul>
              <p className="border-l-4 border-[#FFD600] pl-4 py-2 bg-[#f0fafa] rounded-r-lg text-[#595959] leading-relaxed">
                <span className="font-bold text-[#006b6b]">Why we pray this: </span>{"Admitting we are out of strength is uncomfortable. But God works with people who say it honestly. We stop performing and let him carry what we cannot."}
              </p>
            </section>
          </div>
        </section>

        <section className="bg-[#f7fbfb] py-10 px-4 sm:px-6 border-t border-gray-100">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-2xl font-extrabold text-[#1a1a1a]">Why pray this?</h2>

            <div>
              <h3 className="text-lg font-bold text-[#1a1a1a] leading-snug">{"How can I be happy when everything is going wrong?"}</h3>
              <p className="text-[#595959] leading-relaxed mt-2">{"You do not have to feel happy to pray this. Joy here means holding on to something true while the situation stays awful. Thanking God for one small thing, out loud, loosens the grip of the worst thought. Try it before you get out of bed tomorrow."}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#1a1a1a] leading-snug">{"Why does God let me struggle for so long?"}</h3>
              <p className="text-[#595959] leading-relaxed mt-2">{"Scripture does not promise a short season, and pretending otherwise would be dishonest. What it does say is that God uses the long stretch to change something in us that comfort never touches. Praying about growth keeps you from wasting the pain. It gives the waiting a purpose you can hold."}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#1a1a1a] leading-snug">{"What do I do when I do not feel like I have faith anymore?"}</h3>
              <p className="text-[#595959] leading-relaxed mt-2">{"Say so to God. Faith that is shaking is still faith, and he is not offended by an honest sentence. Many people who pray at our Thursday meeting arrive with almost nothing left and leave with a little. Come as you are."}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#1a1a1a] leading-snug">{"Is it wrong to lose hope?"}</h3>
              <p className="text-[#595959] leading-relaxed mt-2">{"No. Losing hope is a human response to a long, hard road, and God does not punish you for it. Hope comes back slowly, usually through other people praying near you. That is why we say these lines together instead of alone."}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#1a1a1a] leading-snug">{"Why is God taking so long to answer my prayer?"}</h3>
              <p className="text-[#595959] leading-relaxed mt-2">{"Nobody can give you the reason, and anyone who claims to know is guessing. What we can say is that God is not ignoring you while you wait. Praying about his timing takes some of the panic out of the delay. It helps you keep living while the answer is still coming."}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#1a1a1a] leading-snug">{"How do I keep going when I have nothing left?"}</h3>
              <p className="text-[#595959] leading-relaxed mt-2">{"Aim for tomorrow morning only. Strength usually comes in small daily portions rather than one big supply. Ask God for enough for the next day, then do the next thing in front of you. That is how most people get through a long year."}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#1a1a1a] leading-snug">{"Does God help me if I am weak?"}</h3>
              <p className="text-[#595959] leading-relaxed mt-2">{"Yes, and weakness is where he tends to show up most clearly. You do not need to fix yourself first or sound impressive when you pray. Tell him plainly that you are finished, then ask him to carry it. That prayer counts."}</p>
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
            <a href="https://wa.me/?text=A%20prayer%20I%20thought%20may%20help%20you%20this%20week%3A%20https%3A%2F%2Fwww.fountaingrace.org%2Ffountain-of-prayers%2Fa-prayer-for-when-life-keeps-knocking-you-down%3Futm_source%3Dwhatsapp%26utm_medium%3Dshare%26utm_campaign%3Dprayers" target="_blank" rel="noopener noreferrer"
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
