import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "A Prayer When You Never Feel Like You Have Enough | Fountain of Grace International",
  description: "A prayer for the days when nothing feels like enough, with words you can pray now and pray out loud, from a church in Pretoria North.",
  robots: 'index, follow',
  alternates: { canonical: "https://www.fountaingrace.org/fountain-of-prayers/a-prayer-when-you-never-feel-like-you-have-enough" },
  openGraph: {
    title: "A Prayer When You Never Feel Like You Have Enough",
    description: "A prayer for the days when nothing feels like enough, with words you can pray now and pray out loud, from a church in Pretoria North.",
    type: 'article',
    images: [{ url: "https://www.fountaingrace.org/og-image.jpg", width: 1200, height: 630, alt: 'Fountain of Grace International - Church in Pretoria North' }],
    url: "https://www.fountaingrace.org/fountain-of-prayers/a-prayer-when-you-never-feel-like-you-have-enough",
  },
  twitter: { card: 'summary_large_image', title: "A Prayer When You Never Feel Like You Have Enough", description: "A prayer for the days when nothing feels like enough, with words you can pray now and pray out loud, from a church in Pretoria North.", images: ["https://www.fountaingrace.org/og-image.jpg"] },
}

const jsonLd = [{"@context": "https://schema.org", "@type": "Article", "headline": "A Prayer When You Never Feel Like You Have Enough", "alternativeHeadline": "Week 31 of 2026: Finding Contentment in Christ", "description": "A prayer for the days when nothing feels like enough, with words you can pray now and pray out loud, from a church in Pretoria North.", "image": "https://www.fountaingrace.org/og-image.jpg", "author": {"@type": "Person", "name": "Pastor Ricardo Zaal"}, "publisher": {"@type": "Church", "name": "Fountain of Grace International", "address": {"@type": "PostalAddress", "streetAddress": "323 B Danie Theron Street", "addressLocality": "Pretoria North", "addressRegion": "Gauteng", "addressCountry": "ZA"}}, "datePublished": "2026-07-27T08:00:00+02:00", "dateModified": "2026-07-27T08:00:00+02:00", "mainEntityOfPage": "https://www.fountaingrace.org/fountain-of-prayers/a-prayer-when-you-never-feel-like-you-have-enough", "url": "https://www.fountaingrace.org/fountain-of-prayers/a-prayer-when-you-never-feel-like-you-have-enough", "isPartOf": {"@type": "CreativeWorkSeries", "name": "Fountain of Prayers", "url": "https://www.fountaingrace.org/fountain-of-prayers"}}, {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fountaingrace.org"}, {"@type": "ListItem", "position": 2, "name": "Fountain of Prayers", "item": "https://www.fountaingrace.org/fountain-of-prayers"}, {"@type": "ListItem", "position": 3, "name": "A Prayer When You Never Feel Like You Have Enough", "item": "https://www.fountaingrace.org/fountain-of-prayers/a-prayer-when-you-never-feel-like-you-have-enough"}]}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Why do I still feel empty when I finally get what I wanted?", "acceptedAnswer": {"@type": "Answer", "text": "Because new things settle the surface and leave the inside untouched. A better phone or a better job can lift a week, then the ache comes back. Praying for a heart fixed on Christ works at the level where that ache actually lives. It is slower. It lasts."}}, {"@type": "Question", "name": "What do I do when I have nothing left to give?", "acceptedAnswer": {"@type": "Answer", "text": "You ask God for strength for today only. He gives it in day-sized portions, which is usually all we can carry anyway. Saying that out loud with other people also stops you carrying the week alone."}}, {"@type": "Question", "name": "How can I be thankful when life is genuinely hard?", "acceptedAnswer": {"@type": "Answer", "text": "You can be thankful and grieving in the same breath. Gratitude does not pretend the hard thing away or ask you to fake a smile. Naming one real good thing, a friend who phoned, a bed to sleep in, stops the loss from filling your whole field of vision."}}, {"@type": "Question", "name": "How do I stop comparing myself to everyone else?", "acceptedAnswer": {"@type": "Answer", "text": "Start by putting the phone down for a week and see what happens to your mood. Comparison feeds on edited moments that leave out the debt and the arguments. Praying about envy out loud takes the shame off it, and shame is what keeps it growing."}}, {"@type": "Question", "name": "What does putting God first actually look like on a normal day?", "acceptedAnswer": {"@type": "Answer", "text": "Small, boring choices. Ten minutes in Philippians before the kettle boils, one honest conversation you have been dodging, showing up when you would rather stay home. None of it feels dramatic. Over a year it changes what you want."}}, {"@type": "Question", "name": "Why is God taking so long to answer me?", "acceptedAnswer": {"@type": "Answer", "text": "Often you will not know the reason until much later, and sitting in that is hard. God works on a timeline we did not set and cannot see. Praying through the wait keeps you talking to him rather than going silent on him."}}, {"@type": "Question", "name": "How do I know God will come through for me again?", "acceptedAnswer": {"@type": "Answer", "text": "Look at what he has already done and write it down, dates and all. Most of us forget last year's rescue by March. Faith grows on memory more than on feelings, which is why we rehearse it together every Thursday."}}]}]

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
              Fountain of Prayers · Week 31 of 2026
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              {"A Prayer When You Never Feel Like You Have Enough"}
            </h1>
            <p className="text-white text-base mt-4">{"Finding Contentment in Christ"} · {"Philippians 4:11-13"}</p>
            <p className="text-white text-sm mt-2">Pretoria North · 27 July 2026</p>
          </div>
        </header>

        <section className="bg-white pt-10 pb-4 px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-[#006b6b] text-xs font-bold uppercase tracking-wider mb-3">Pray this now</h2>
            <p className="text-[#1a1a1a] text-xl leading-relaxed italic">{"God, I am tired of counting what I do not have. The job I did not get. The bill on the counter. I keep looking sideways at everyone else and it stings. Tonight I ask you to hold me steady inside this life, the one I actually have. Teach me to breathe again. Show me what is already here from your hand. Give me enough strength to get to tomorrow morning. Amen."}</p>
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
              <p className="text-[#0d6fbf] font-semibold text-lg italic leading-relaxed">&quot;{"I am not saying this because I am in need, for I have learned to be content whatever the circumstances. I know what it is to be in need, and I know what it is to have plenty. I have learned the secret of being content in any and every situation, whether well fed or hungry, whether living in plenty or in want. I can do all this through him who gives me strength."}&quot;</p>
              <cite className="text-[#595959] text-sm not-italic mt-2 block">- {"Philippians 4:11-13"}</cite>
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
              <h2 className="text-2xl font-extrabold text-[#1a1a1a] leading-snug">2. {"Understanding True Contentment"}</h2>
              <ul className="space-y-3 text-[#1a1a1a] text-lg leading-relaxed">
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"God, we ask for hearts fixed on Jesus when the payslip lands and the numbers still do not stretch."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Lord, give us peace in the waiting room, in the queue, in the quiet hours after the children sleep."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Father, teach us a joy that holds when the car is old and the fridge is half empty."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"God, turn our wanting toward your kingdom before it turns toward another screen full of other people's lives."}</span></li>
              </ul>
              <p className="border-l-4 border-[#FFD600] pl-4 py-2 bg-[#f0fafa] rounded-r-lg text-[#595959] leading-relaxed">
                <span className="font-bold text-[#006b6b]">Why we pray this: </span>{"Circumstances shift every week. Contentment holds because Christ holds. We pray this so a hard month does not get to decide how our hearts sit."}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-extrabold text-[#1a1a1a] leading-snug">3. {"Relying on God's Strength"}</h2>
              <ul className="space-y-3 text-[#1a1a1a] text-lg leading-relaxed">
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"God, carry us through Monday morning when the alarm goes and we have nothing left to give."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Lord, we trust you with the groceries, the school letter, and the week we cannot see past."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Father, give us courage to walk back into the ward and hear the doctor out."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Jesus, hold our faith steady through a long illness that has no quick ending."}</span></li>
              </ul>
              <p className="border-l-4 border-[#FFD600] pl-4 py-2 bg-[#f0fafa] rounded-r-lg text-[#595959] leading-relaxed">
                <span className="font-bold text-[#006b6b]">Why we pray this: </span>{"Some weeks we run out before Wednesday. God gives strength for the day in front of us. We ask for it because we cannot manufacture it ourselves."}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-extrabold text-[#1a1a1a] leading-snug">4. {"Gratitude in Every Season"}</h2>
              <ul className="space-y-3 text-[#1a1a1a] text-lg leading-relaxed">
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"God, thank you that you sit with us in the dark, even at 3am with no sleep."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Lord, open our eyes to the small mercies today: a lift to work, a warm plate."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Father, thank you for the hard year that taught us what an easy year never could."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Jesus, we praise you at the funeral and at the wedding, with the same voice."}</span></li>
              </ul>
              <p className="border-l-4 border-[#FFD600] pl-4 py-2 bg-[#f0fafa] rounded-r-lg text-[#595959] leading-relaxed">
                <span className="font-bold text-[#006b6b]">Why we pray this: </span>{"Gratitude is slow work. It makes us notice what God is already doing. On a Thursday at 19:00 in Pretoria North, one thank you said out loud can change a whole room."}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-extrabold text-[#1a1a1a] leading-snug">5. {"Letting Go of Comparison"}</h2>
              <ul className="space-y-3 text-[#1a1a1a] text-lg leading-relaxed">
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"God, free us from envy when a colleague gets the promotion we quietly prayed for."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Lord, keep our eyes on the road you gave us instead of the one next door."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Father, help us trust your plan when our timeline looks nothing like our friends' timelines."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Jesus, teach us to be genuinely glad when someone else's good news arrives first."}</span></li>
              </ul>
              <p className="border-l-4 border-[#FFD600] pl-4 py-2 bg-[#f0fafa] rounded-r-lg text-[#595959] leading-relaxed">
                <span className="font-bold text-[#006b6b]">Why we pray this: </span>{"Scrolling other people's highlights at midnight leaves us emptier than before. Comparison drains joy quietly. We pray for eyes that stay on what God has actually placed in our hands."}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-extrabold text-[#1a1a1a] leading-snug">6. {"Seeking God's Kingdom First"}</h2>
              <ul className="space-y-3 text-[#1a1a1a] text-lg leading-relaxed">
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"God, grow us this week through the Bible we keep meaning to open."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Lord, put your purposes at the top of our diaries, above the deadlines and the errands."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Father, keep eternity in view when the week feels like traffic, admin and little else."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Jesus, bend our wills toward yours in every decision we make before Friday."}</span></li>
              </ul>
              <p className="border-l-4 border-[#FFD600] pl-4 py-2 bg-[#f0fafa] rounded-r-lg text-[#595959] leading-relaxed">
                <span className="font-bold text-[#006b6b]">Why we pray this: </span>{"We chase things that go quiet fast. Putting God's kingdom first reorders everything sitting under it. That is where the fulfilment we keep hunting for actually lives."}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-extrabold text-[#1a1a1a] leading-snug">7. {"Learning to Depend on God"}</h2>
              <ul className="space-y-3 text-[#1a1a1a] text-lg leading-relaxed">
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"God, we trust your timing with the visa, the results, and the answer that still has not come."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Lord, provide for the family in our church who lost work last month."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Father, give us the will to follow your guidance even when it costs us something."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Jesus, hold us to your promises on the nights when doubt speaks louder."}</span></li>
              </ul>
              <p className="border-l-4 border-[#FFD600] pl-4 py-2 bg-[#f0fafa] rounded-r-lg text-[#595959] leading-relaxed">
                <span className="font-bold text-[#006b6b]">Why we pray this: </span>{"Depending on God feels risky until you try it. Then it settles you. Self-reliance is what keeps us staring at the ceiling at 2am."}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-extrabold text-[#1a1a1a] leading-snug">8. {"Rejoicing in God's Faithfulness"}</h2>
              <ul className="space-y-3 text-[#1a1a1a] text-lg leading-relaxed">
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"God, we remember the month that somehow worked out and the surgery that went well."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Lord, give us confidence for the year ahead, because you have not dropped us yet."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Father, remind us you are in the room during loadshedding and every quiet crisis."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Jesus, we rejoice that you are the same today as when we first believed."}</span></li>
              </ul>
              <p className="border-l-4 border-[#FFD600] pl-4 py-2 bg-[#f0fafa] rounded-r-lg text-[#595959] leading-relaxed">
                <span className="font-bold text-[#006b6b]">Why we pray this: </span>{"Memory feeds faith. Looking back at what God has already carried us through steadies us for what is coming. He has never failed anyone yet."}
              </p>
            </section>
          </div>
        </section>

        <section className="bg-[#f7fbfb] py-10 px-4 sm:px-6 border-t border-gray-100">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-2xl font-extrabold text-[#1a1a1a]">Why pray this?</h2>

            <div>
              <h3 className="text-lg font-bold text-[#1a1a1a] leading-snug">{"Why do I still feel empty when I finally get what I wanted?"}</h3>
              <p className="text-[#595959] leading-relaxed mt-2">{"Because new things settle the surface and leave the inside untouched. A better phone or a better job can lift a week, then the ache comes back. Praying for a heart fixed on Christ works at the level where that ache actually lives. It is slower. It lasts."}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#1a1a1a] leading-snug">{"What do I do when I have nothing left to give?"}</h3>
              <p className="text-[#595959] leading-relaxed mt-2">{"You ask God for strength for today only. He gives it in day-sized portions, which is usually all we can carry anyway. Saying that out loud with other people also stops you carrying the week alone."}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#1a1a1a] leading-snug">{"How can I be thankful when life is genuinely hard?"}</h3>
              <p className="text-[#595959] leading-relaxed mt-2">{"You can be thankful and grieving in the same breath. Gratitude does not pretend the hard thing away or ask you to fake a smile. Naming one real good thing, a friend who phoned, a bed to sleep in, stops the loss from filling your whole field of vision."}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#1a1a1a] leading-snug">{"How do I stop comparing myself to everyone else?"}</h3>
              <p className="text-[#595959] leading-relaxed mt-2">{"Start by putting the phone down for a week and see what happens to your mood. Comparison feeds on edited moments that leave out the debt and the arguments. Praying about envy out loud takes the shame off it, and shame is what keeps it growing."}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#1a1a1a] leading-snug">{"What does putting God first actually look like on a normal day?"}</h3>
              <p className="text-[#595959] leading-relaxed mt-2">{"Small, boring choices. Ten minutes in Philippians before the kettle boils, one honest conversation you have been dodging, showing up when you would rather stay home. None of it feels dramatic. Over a year it changes what you want."}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#1a1a1a] leading-snug">{"Why is God taking so long to answer me?"}</h3>
              <p className="text-[#595959] leading-relaxed mt-2">{"Often you will not know the reason until much later, and sitting in that is hard. God works on a timeline we did not set and cannot see. Praying through the wait keeps you talking to him rather than going silent on him."}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#1a1a1a] leading-snug">{"How do I know God will come through for me again?"}</h3>
              <p className="text-[#595959] leading-relaxed mt-2">{"Look at what he has already done and write it down, dates and all. Most of us forget last year's rescue by March. Faith grows on memory more than on feelings, which is why we rehearse it together every Thursday."}</p>
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
            <a href="https://wa.me/?text=A%20prayer%20I%20thought%20may%20help%20you%20this%20week%3A%20https%3A%2F%2Fwww.fountaingrace.org%2Ffountain-of-prayers%2Fa-prayer-when-you-never-feel-like-you-have-enough%3Futm_source%3Dwhatsapp%26utm_medium%3Dshare%26utm_campaign%3Dprayers" target="_blank" rel="noopener noreferrer"
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
