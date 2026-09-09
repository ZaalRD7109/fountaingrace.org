import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "A Prayer When You Cannot Hear God's Voice | Fountain of Grace International",
  description: "A prayer for when God feels silent, with words you can pray tonight and prayer points from Fountain of Grace International in Pretoria North.",
  robots: 'index, follow',
  alternates: { canonical: "https://www.fountaingrace.org/fountain-of-prayers/a-prayer-when-you-cannot-hear-gods-voice" },
  openGraph: {
    title: "A Prayer When You Cannot Hear God's Voice",
    description: "A prayer for when God feels silent, with words you can pray tonight and prayer points from Fountain of Grace International in Pretoria North.",
    type: 'article',
    images: [{ url: "https://www.fountaingrace.org/og-image.jpg", width: 1200, height: 630, alt: 'Fountain of Grace International - Church in Pretoria North' }],
    url: "https://www.fountaingrace.org/fountain-of-prayers/a-prayer-when-you-cannot-hear-gods-voice",
  },
  twitter: { card: 'summary_large_image', title: "A Prayer When You Cannot Hear God's Voice", description: "A prayer for when God feels silent, with words you can pray tonight and prayer points from Fountain of Grace International in Pretoria North.", images: ["https://www.fountaingrace.org/og-image.jpg"] },
}

const jsonLd = [{"@context": "https://schema.org", "@type": "Article", "headline": "A Prayer When You Cannot Hear God's Voice", "alternativeHeadline": "Week 33 of 2026: Hearing God's Voice", "description": "A prayer for when God feels silent, with words you can pray tonight and prayer points from Fountain of Grace International in Pretoria North.", "image": "https://www.fountaingrace.org/og-image.jpg", "author": {"@type": "Person", "name": "Pastor Ricardo Zaal"}, "publisher": {"@type": "Church", "name": "Fountain of Grace International", "address": {"@type": "PostalAddress", "streetAddress": "323 B Danie Theron Street", "addressLocality": "Pretoria North", "addressRegion": "Gauteng", "addressCountry": "ZA"}}, "datePublished": "2026-08-10T08:00:00+02:00", "dateModified": "2026-08-10T08:00:00+02:00", "mainEntityOfPage": "https://www.fountaingrace.org/fountain-of-prayers/a-prayer-when-you-cannot-hear-gods-voice", "url": "https://www.fountaingrace.org/fountain-of-prayers/a-prayer-when-you-cannot-hear-gods-voice", "isPartOf": {"@type": "CreativeWorkSeries", "name": "Fountain of Prayers", "url": "https://www.fountaingrace.org/fountain-of-prayers"}}, {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fountaingrace.org"}, {"@type": "ListItem", "position": 2, "name": "Fountain of Prayers", "item": "https://www.fountaingrace.org/fountain-of-prayers"}, {"@type": "ListItem", "position": 3, "name": "A Prayer When You Cannot Hear God's Voice", "item": "https://www.fountaingrace.org/fountain-of-prayers/a-prayer-when-you-cannot-hear-gods-voice"}]}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Why does God feel silent when I need Him most?", "acceptedAnswer": {"@type": "Answer", "text": "Silence usually means something is crowding Him out, or that He is asking us to wait, and neither one means He has left. Pain makes noise, and so do our phones. Praying for a thirst to hear Him is a way of clearing space. Start with a few honest minutes rather than an hour you cannot manage."}}, {"@type": "Question", "name": "How do I know if it is God or just my own thoughts?", "acceptedAnswer": {"@type": "Answer", "text": "God's voice lines up with the Bible and tends to leave peace behind, even when what He says is hard. Fear rushes us. Panic pushes for a decision tonight. Praying for discernment slows you down long enough to check what you are hearing against Scripture and wise people who know you."}}, {"@type": "Question", "name": "What if I hear God but I am too scared to obey?", "acceptedAnswer": {"@type": "Answer", "text": "Fear is normal, and God is patient with frightened people. Ask Him for courage for the one next step instead of the whole road. Most obedience looks small: a conversation, an apology, a job application. Do the small thing and the fear usually shrinks."}}, {"@type": "Question", "name": "Does God actually know who I am?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, in detail, including the parts you hide. Being known like that can feel exposing at first, then it becomes the safest thing you have. When you pray about it, you stop trying to earn a place with Him. You already have one."}}, {"@type": "Question", "name": "Can sin stop me from hearing God?", "acceptedAnswer": {"@type": "Answer", "text": "It can dull your hearing, yes, mostly because we start avoiding Him. Bitterness does the same thing. Confession and forgiveness are not punishments, they are how the line clears. Name the thing out loud to God and ask for help to leave it."}}, {"@type": "Question", "name": "How long should I sit and wait for God to speak?", "acceptedAnswer": {"@type": "Answer", "text": "Start with five or ten minutes a day and keep it. Waiting feels wasted until it does not. Many people hear God clearly while reading a few verses slowly rather than while sitting with their eyes closed. Try both."}}, {"@type": "Question", "name": "Can I trust God with my future?", "acceptedAnswer": {"@type": "Answer", "text": "You can, and trust grows by looking back at what He has already carried you through. Write down two or three of those times. Peace often comes before the plan does. Ask Him for that peace while you are still waiting for details."}}]}]

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
              Fountain of Prayers · Week 33 of 2026
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              {"A Prayer When You Cannot Hear God's Voice"}
            </h1>
            <p className="text-white text-base mt-4">{"Hearing God's Voice"} · {"John 10:27"}</p>
            <p className="text-white text-sm mt-2">Pretoria North · 10 August 2026</p>
          </div>
        </header>

        <section className="bg-white pt-10 pb-4 px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-[#006b6b] text-xs font-bold uppercase tracking-wider mb-3">Pray this now</h2>
            <p className="text-[#1a1a1a] text-xl leading-relaxed italic">{"God, I have been asking and asking, and I still cannot hear You. The silence frightens me. I do not know what to do next, and everyone around me seems to have answers I do not have. Please give me the strength to keep sitting here. Quiet the noise in my head long enough for me to hear something true. If You are speaking, teach me to listen. If I have to wait, hold me while I wait. I am still Yours. Amen."}</p>
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
              <p className="text-[#0d6fbf] font-semibold text-lg italic leading-relaxed">&quot;{"My sheep hear my voice, and I know them, and they follow me."}&quot;</p>
              <cite className="text-[#595959] text-sm not-italic mt-2 block">- {"John 10:27"}</cite>
              <p className="text-[#595959] text-xs mt-3">{"King James Version."}</p>
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
              <h2 className="text-2xl font-extrabold text-[#1a1a1a] leading-snug">2. {"Desiring to Hear God Clearly"}</h2>
              <ul className="space-y-3 text-[#1a1a1a] text-lg leading-relaxed">
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"God, we want to hear You more than we want the next answer about work, school or a doctor's report."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Lord, quiet the endless scrolling and the noise of the day so our homes have room for You."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Father, open our ears when we are tired from a long shift and quick to switch You off."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Jesus, help us guard twenty minutes before bed to sit still and listen instead of talking."}</span></li>
              </ul>
              <p className="border-l-4 border-[#FFD600] pl-4 py-2 bg-[#f0fafa] rounded-r-lg text-[#595959] leading-relaxed">
                <span className="font-bold text-[#006b6b]">Why we pray this: </span>{"A heart that wants to hear stays open. So we ask for the thirst before we ask for the words. On Thursday nights at 19:00 here in Pretoria North we begin by getting quiet, and that is harder than it sounds."}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-extrabold text-[#1a1a1a] leading-snug">3. {"Knowing God's Voice from Others"}</h2>
              <ul className="space-y-3 text-[#1a1a1a] text-lg leading-relaxed">
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"God, teach us to tell Your voice from fear, from advice on WhatsApp, from our wishful thinking."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Lord, when Your truth lands it brings peace, so help us recognise that peace inside a tense marriage."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Father, give us wisdom to test what we are told before we sign anything or make a move."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Jesus, make Your voice clear to the parent deciding about a child's school for next term."}</span></li>
              </ul>
              <p className="border-l-4 border-[#FFD600] pl-4 py-2 bg-[#f0fafa] rounded-r-lg text-[#595959] leading-relaxed">
                <span className="font-bold text-[#006b6b]">Why we pray this: </span>{"We know the voices we live with. A cousin phones and we know her before she says her name. Familiarity with God grows the same slow way, through time spent together."}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-extrabold text-[#1a1a1a] leading-snug">4. {"Following When God Speaks"}</h2>
              <ul className="space-y-3 text-[#1a1a1a] text-lg leading-relaxed">
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"God, give us courage to act on what You have said, even when it costs us comfort."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Lord, help us follow You in small things, like the phone call we keep avoiding."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Father, grow our faith to step out while next month's plan is still unclear."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Jesus, keep us steady on the days when following You feels slow and thankless."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"God, soften our hearts to answer quickly instead of arguing with You for weeks."}</span></li>
              </ul>
              <p className="border-l-4 border-[#FFD600] pl-4 py-2 bg-[#f0fafa] rounded-r-lg text-[#595959] leading-relaxed">
                <span className="font-bold text-[#006b6b]">Why we pray this: </span>{"Obedience is how God's direction turns into an actual life. Small steps count. The person who makes the hard phone call learns more about God's leading than the person still weighing it up."}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-extrabold text-[#1a1a1a] leading-snug">5. {"Being Known by God"}</h2>
              <ul className="space-y-3 text-[#1a1a1a] text-lg leading-relaxed">
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"God, remind us that You know our names, our fears and the things we never say out loud."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Lord, hold the one who feels unseen at work and misread at home."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Father, help us rest in Your care when a diagnosis makes the future feel thin."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Jesus, give us joy in belonging to You when nothing else about our week feels stable."}</span></li>
              </ul>
              <p className="border-l-4 border-[#FFD600] pl-4 py-2 bg-[#f0fafa] rounded-r-lg text-[#595959] leading-relaxed">
                <span className="font-bold text-[#006b6b]">Why we pray this: </span>{"God knows us all the way down and stays. That means our worth is settled before we perform for anyone. On the days we feel invisible, this is the ground we stand on."}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-extrabold text-[#1a1a1a] leading-snug">6. {"Eliminating Obstacles to Hearing"}</h2>
              <ul className="space-y-3 text-[#1a1a1a] text-lg leading-relaxed">
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"God, we bring You the wrongs we already know about and ask You to deal with them."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Lord, help us forgive the family member whose words we have carried for years."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Father, free us from ties and agreements that keep pulling us back onto old ground."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Jesus, break the habits we reach for at midnight that leave us deaf to You."}</span></li>
              </ul>
              <p className="border-l-4 border-[#FFD600] pl-4 py-2 bg-[#f0fafa] rounded-r-lg text-[#595959] leading-relaxed">
                <span className="font-bold text-[#006b6b]">Why we pray this: </span>{"Some things block our hearing, and most of us can name ours. Confession clears the room. Forgiveness clears it too, even when the other person never asks for it."}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-extrabold text-[#1a1a1a] leading-snug">7. {"Cultivating a Listening Heart"}</h2>
              <ul className="space-y-3 text-[#1a1a1a] text-lg leading-relaxed">
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"God, teach us to sit in silence for ten minutes without reaching for a phone."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Lord, give us patience in Your presence on the evenings when loadshedding leaves the house dark and quiet."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Father, build our faith to keep waiting when no answer has come for months."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Jesus, keep us in the Scriptures daily so that we learn how You sound."}</span></li>
              </ul>
              <p className="border-l-4 border-[#FFD600] pl-4 py-2 bg-[#f0fafa] rounded-r-lg text-[#595959] leading-relaxed">
                <span className="font-bold text-[#006b6b]">Why we pray this: </span>{"Stillness is a habit, built in small daily doses. Five minutes counts. Nobody learns to hear God in a rush, and a dark hour without power can become a good place to start."}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-extrabold text-[#1a1a1a] leading-snug">8. {"Trusting the Shepherd's Guidance"}</h2>
              <ul className="space-y-3 text-[#1a1a1a] text-lg leading-relaxed">
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"God, we trust Your leadership with the decisions that keep us awake at 2am."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Lord, give us peace about the plans we cannot yet see for our children."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Father, hold us steady when the road ahead changes without any warning."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Jesus, give us hope for the years ahead after a year that has been hard."}</span></li>
              </ul>
              <p className="border-l-4 border-[#FFD600] pl-4 py-2 bg-[#f0fafa] rounded-r-lg text-[#595959] leading-relaxed">
                <span className="font-bold text-[#006b6b]">Why we pray this: </span>{"Trust builds by walking with Him over months. Each time He proves steady, the next step gets easier. We ask for peace while the road is still unclear."}
              </p>
            </section>
          </div>
        </section>

        <section className="bg-[#f7fbfb] py-10 px-4 sm:px-6 border-t border-gray-100">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-2xl font-extrabold text-[#1a1a1a]">Why pray this?</h2>

            <div>
              <h3 className="text-lg font-bold text-[#1a1a1a] leading-snug">{"Why does God feel silent when I need Him most?"}</h3>
              <p className="text-[#595959] leading-relaxed mt-2">{"Silence usually means something is crowding Him out, or that He is asking us to wait, and neither one means He has left. Pain makes noise, and so do our phones. Praying for a thirst to hear Him is a way of clearing space. Start with a few honest minutes rather than an hour you cannot manage."}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#1a1a1a] leading-snug">{"How do I know if it is God or just my own thoughts?"}</h3>
              <p className="text-[#595959] leading-relaxed mt-2">{"God's voice lines up with the Bible and tends to leave peace behind, even when what He says is hard. Fear rushes us. Panic pushes for a decision tonight. Praying for discernment slows you down long enough to check what you are hearing against Scripture and wise people who know you."}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#1a1a1a] leading-snug">{"What if I hear God but I am too scared to obey?"}</h3>
              <p className="text-[#595959] leading-relaxed mt-2">{"Fear is normal, and God is patient with frightened people. Ask Him for courage for the one next step instead of the whole road. Most obedience looks small: a conversation, an apology, a job application. Do the small thing and the fear usually shrinks."}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#1a1a1a] leading-snug">{"Does God actually know who I am?"}</h3>
              <p className="text-[#595959] leading-relaxed mt-2">{"Yes, in detail, including the parts you hide. Being known like that can feel exposing at first, then it becomes the safest thing you have. When you pray about it, you stop trying to earn a place with Him. You already have one."}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#1a1a1a] leading-snug">{"Can sin stop me from hearing God?"}</h3>
              <p className="text-[#595959] leading-relaxed mt-2">{"It can dull your hearing, yes, mostly because we start avoiding Him. Bitterness does the same thing. Confession and forgiveness are not punishments, they are how the line clears. Name the thing out loud to God and ask for help to leave it."}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#1a1a1a] leading-snug">{"How long should I sit and wait for God to speak?"}</h3>
              <p className="text-[#595959] leading-relaxed mt-2">{"Start with five or ten minutes a day and keep it. Waiting feels wasted until it does not. Many people hear God clearly while reading a few verses slowly rather than while sitting with their eyes closed. Try both."}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#1a1a1a] leading-snug">{"Can I trust God with my future?"}</h3>
              <p className="text-[#595959] leading-relaxed mt-2">{"You can, and trust grows by looking back at what He has already carried you through. Write down two or three of those times. Peace often comes before the plan does. Ask Him for that peace while you are still waiting for details."}</p>
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
            <a href="https://wa.me/?text=A%20prayer%20I%20thought%20may%20help%20you%20this%20week%3A%20https%3A%2F%2Fwww.fountaingrace.org%2Ffountain-of-prayers%2Fa-prayer-when-you-cannot-hear-gods-voice%3Futm_source%3Dwhatsapp%26utm_medium%3Dshare%26utm_campaign%3Dprayers" target="_blank" rel="noopener noreferrer"
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
