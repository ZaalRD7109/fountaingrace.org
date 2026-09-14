import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "A Prayer When Everything Feels Dark Right Now | Fountain of Grace International",
  description: "Short prayers you can pray tonight when life feels dark, plus the prayer points a church in Pretoria North prays out loud together every Thursday.",
  robots: 'index, follow',
  alternates: { canonical: "https://www.fountaingrace.org/fountain-of-prayers/a-prayer-when-everything-feels-dark-right-now" },
  openGraph: {
    title: "A Prayer When Everything Feels Dark Right Now",
    description: "Short prayers you can pray tonight when life feels dark, plus the prayer points a church in Pretoria North prays out loud together every Thursday.",
    type: 'article',
    images: [{ url: "https://www.fountaingrace.org/og-image.jpg", width: 1200, height: 630, alt: 'Fountain of Grace International - Church in Pretoria North' }],
    url: "https://www.fountaingrace.org/fountain-of-prayers/a-prayer-when-everything-feels-dark-right-now",
  },
  twitter: { card: 'summary_large_image', title: "A Prayer When Everything Feels Dark Right Now", description: "Short prayers you can pray tonight when life feels dark, plus the prayer points a church in Pretoria North prays out loud together every Thursday.", images: ["https://www.fountaingrace.org/og-image.jpg"] },
}

const jsonLd = [{"@context": "https://schema.org", "@type": "Article", "headline": "A Prayer When Everything Feels Dark Right Now", "alternativeHeadline": "Week 38 of 2026: Walking in the Light of Truth", "description": "Short prayers you can pray tonight when life feels dark, plus the prayer points a church in Pretoria North prays out loud together every Thursday.", "image": "https://www.fountaingrace.org/og-image.jpg", "author": {"@type": "Person", "name": "Pastor Ricardo Zaal"}, "publisher": {"@type": "Church", "name": "Fountain of Grace International", "address": {"@type": "PostalAddress", "streetAddress": "323 B Danie Theron Street", "addressLocality": "Pretoria North", "addressRegion": "Gauteng", "addressCountry": "ZA"}}, "datePublished": "2026-09-14T08:00:00+02:00", "dateModified": "2026-09-14T08:00:00+02:00", "mainEntityOfPage": "https://www.fountaingrace.org/fountain-of-prayers/a-prayer-when-everything-feels-dark-right-now", "url": "https://www.fountaingrace.org/fountain-of-prayers/a-prayer-when-everything-feels-dark-right-now", "isPartOf": {"@type": "CreativeWorkSeries", "name": "Fountain of Prayers", "url": "https://www.fountaingrace.org/fountain-of-prayers"}}, {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fountaingrace.org"}, {"@type": "ListItem", "position": 2, "name": "Fountain of Prayers", "item": "https://www.fountaingrace.org/fountain-of-prayers"}, {"@type": "ListItem", "position": 3, "name": "A Prayer When Everything Feels Dark Right Now", "item": "https://www.fountaingrace.org/fountain-of-prayers/a-prayer-when-everything-feels-dark-right-now"}]}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Does God get tired of me?", "acceptedAnswer": {"@type": "Answer", "text": "No. God is light, and light does not run out or turn away. What often happens is that we get tired of ourselves and assume he feels the same. Praying honestly, even badly, puts an end to that guessing."}}, {"@type": "Question", "name": "How do I stop doing the thing I keep going back to?", "acceptedAnswer": {"@type": "Answer", "text": "Start by naming it to God instead of hiding it. Scripture promises a way out of every temptation, but it is usually a small opening and you have to choose it fast. Praying for courage before the moment arrives matters more than praying after."}}, {"@type": "Question", "name": "How do I know what God wants me to do?", "acceptedAnswer": {"@type": "Answer", "text": "Most of the time he shows the next step, not the whole plan. That feels frustrating when you want certainty now. Praying for clarity helps you stop demanding the map and start moving on the light you already have."}}, {"@type": "Question", "name": "Does praying actually help when someone is sick?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, and not always in the way we ask. We pray for healing because God heals, and we pray for strength because some days are long. Both prayers are honest, and you are allowed to pray them at the same time."}}, {"@type": "Question", "name": "Can prayer fix a relationship that has gone cold?", "acceptedAnswer": {"@type": "Answer", "text": "Prayer changes the person praying first, and that is usually where a cold relationship starts to thaw. Honesty in front of God makes honesty with people easier. Small, ordinary kindness does the rest over time."}}, {"@type": "Question", "name": "Where is God when someone I love has died?", "acceptedAnswer": {"@type": "Answer", "text": "He is closer than he feels, and he is not offended by your anger or your silence. Grief does not have a deadline. Praying gives the pain somewhere to go besides round and round in your head at 3am."}}, {"@type": "Question", "name": "Is it wrong to pray about money?", "acceptedAnswer": {"@type": "Answer", "text": "No. Jesus taught us to ask for daily bread, which is about as practical as it gets. Praying about provision also steadies you, because it puts the worry in God's hands instead of replaying the sums all night."}}, {"@type": "Question", "name": "How do working parents cope when there is never enough time?", "acceptedAnswer": {"@type": "Answer", "text": "By asking God for strength for this season rather than for a perfect balance. Some weeks you will drop something. Praying for wisdom helps you choose what to drop instead of letting the week choose for you."}}, {"@type": "Question", "name": "Will praying really calm my anxiety?", "acceptedAnswer": {"@type": "Answer", "text": "It helps, and many people feel it most when they pray out loud. Speaking the fear to God takes it out of the loop in your head. It is not a replacement for a doctor or medication, and God is not offended if you need both."}}, {"@type": "Question", "name": "What do I do when the bills are more than I earn?", "acceptedAnswer": {"@type": "Answer", "text": "Pray, then ask someone you trust for practical help, because God often provides through people. Ask him for peace tonight and for wisdom tomorrow. He has provided before when there was no visible way, and he has not changed."}}]}]

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
              Fountain of Prayers · Week 38 of 2026
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              {"A Prayer When Everything Feels Dark Right Now"}
            </h1>
            <p className="text-white text-base mt-4">{"Walking in the Light of Truth"} · {"1 John 1:5-7"}</p>
            <p className="text-white text-sm mt-2">Pretoria North · 14 September 2026</p>
          </div>
        </header>

        <section className="bg-white pt-10 pb-4 px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-[#006b6b] text-xs font-bold uppercase tracking-wider mb-3">Pray this now</h2>
            <p className="text-[#1a1a1a] text-xl leading-relaxed italic">{"God, I do not know how to say this well. I am tired, and something in me has gone dark. I am not asking you to make it all disappear tonight. I am asking you to stay with me in it. Give me enough strength for the next hour. Show me one honest step and help me take it. Where I have been hiding, help me stop. I still trust you, even when I feel nothing. Amen."}</p>
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
              <p className="text-[#0d6fbf] font-semibold text-lg italic leading-relaxed">&quot;{"This is the message we have heard from Him and declare to you: God is light; in Him there is no darkness at all. If we claim to have fellowship with Him and yet walk in the darkness, we lie and do not live out the truth. But if we walk in the light, as He is in the light, we have fellowship with one another, and the blood of Jesus, His Son, purifies us from all sin."}&quot;</p>
              <cite className="text-[#595959] text-sm not-italic mt-2 block">- {"1 John 1:5-7"}</cite>
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
              <h2 className="text-2xl font-extrabold text-[#1a1a1a] leading-snug">2. {"Acknowledging God as Light and Truth"}</h2>
              <ul className="space-y-3 text-[#1a1a1a] text-lg leading-relaxed">
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"God, we thank you that there is nothing false or hidden in you."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Jesus, be the light we walk by when we cannot see the next step."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Father, guide us this week in the decisions we have been putting off."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Lord, thank you for telling us the truth even when it is hard to hear."}</span></li>
              </ul>
              <p className="border-l-4 border-[#FFD600] pl-4 py-2 bg-[#f0fafa] rounded-r-lg text-[#595959] leading-relaxed">
                <span className="font-bold text-[#006b6b]">Why we pray this: </span>{"We start here because everything else makes more sense after it. When we say God is light, we stop performing in front of him. Closeness with God begins the moment we drop the act. On a Thursday at 19:00 in Pretoria North, that is a room full of people finally breathing out."}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-extrabold text-[#1a1a1a] leading-snug">3. {"Strength for Those Facing Temptation"}</h2>
              <ul className="space-y-3 text-[#1a1a1a] text-lg leading-relaxed">
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"God, give us courage to say no to what keeps pulling us back."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Lord, give us wisdom to see the choice in front of us clearly."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Father, strengthen us for the fight that has lasted longer than we expected."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Jesus, give us peace in the moment we feel weakest."}</span></li>
              </ul>
              <p className="border-l-4 border-[#FFD600] pl-4 py-2 bg-[#f0fafa] rounded-r-lg text-[#595959] leading-relaxed">
                <span className="font-bold text-[#006b6b]">Why we pray this: </span>{"Scripture says God always makes a way out. Usually it is a small door, and you have to want it. So we pray for the eyes to spot it and the backbone to walk through."}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-extrabold text-[#1a1a1a] leading-snug">4. {"Guidance for Those Seeking Direction"}</h2>
              <ul className="space-y-3 text-[#1a1a1a] text-lg leading-relaxed">
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"God, make the next step plain to us, even if you hide the rest."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Lord, give us peace about the decision we keep turning over at 2am."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Father, help us want what you want more than we want a fast answer."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Jesus, teach us to wait without panicking when nothing seems to move."}</span></li>
              </ul>
              <p className="border-l-4 border-[#FFD600] pl-4 py-2 bg-[#f0fafa] rounded-r-lg text-[#595959] leading-relaxed">
                <span className="font-bold text-[#006b6b]">Why we pray this: </span>{"God lights the path, usually one metre at a time. We want the whole map. He gives us enough to move, and his timing rarely matches ours."}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-extrabold text-[#1a1a1a] leading-snug">5. {"Healing for the Sick and Hurting"}</h2>
              <ul className="space-y-3 text-[#1a1a1a] text-lg leading-relaxed">
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"God, be near tonight to everyone who cannot find a comfortable position."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Lord, we ask for healing where something has worn a body down for years."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Father, hold the ones lying in a hospital bed far from anything familiar."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Jesus, strengthen those who care for someone else and get no rest."}</span></li>
              </ul>
              <p className="border-l-4 border-[#FFD600] pl-4 py-2 bg-[#f0fafa] rounded-r-lg text-[#595959] leading-relaxed">
                <span className="font-bold text-[#006b6b]">Why we pray this: </span>{"We pray for healing and we keep praying, because God has done it before. We also pray for hope while the answer is slow. Both are real. The people who sit up all night with a sick relative need that second prayer as much as the first."}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-extrabold text-[#1a1a1a] leading-snug">6. {"Strengthening Marriages and Families"}</h2>
              <ul className="space-y-3 text-[#1a1a1a] text-lg leading-relaxed">
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"God, bring us back together where we have quietly drifted apart."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Lord, teach us to love and respect those closest to us on ordinary days."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Father, give us wisdom for the people you have placed in our care."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Jesus, give us laughter again in the rooms where it has gone quiet."}</span></li>
              </ul>
              <p className="border-l-4 border-[#FFD600] pl-4 py-2 bg-[#f0fafa] rounded-r-lg text-[#595959] leading-relaxed">
                <span className="font-bold text-[#006b6b]">Why we pray this: </span>{"Honesty is what holds people together. Pretending holds nothing. When we stop managing the truth with the people nearest to us, love gets room to grow again."}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-extrabold text-[#1a1a1a] leading-snug">7. {"Comfort for Those Grieving"}</h2>
              <ul className="space-y-3 text-[#1a1a1a] text-lg leading-relaxed">
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"God, give hope to those who cannot see past this loss."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Lord, give peace we cannot explain to hearts that are breaking."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Father, sit with the ones who walk into a quiet room and feel it hit again."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Jesus, be present in the loneliness that nobody else can see."}</span></li>
              </ul>
              <p className="border-l-4 border-[#FFD600] pl-4 py-2 bg-[#f0fafa] rounded-r-lg text-[#595959] leading-relaxed">
                <span className="font-bold text-[#006b6b]">Why we pray this: </span>{"Grief does not run on a schedule. It arrives during loadshedding, in the dark, when there is nothing to distract you. We pray because God comes close in exactly those hours, and his comfort is steadier than ours."}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-extrabold text-[#1a1a1a] leading-snug">8. {"Faith for Financial Provision"}</h2>
              <ul className="space-y-3 text-[#1a1a1a] text-lg leading-relaxed">
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"God, teach us to trust you for what we cannot cover on our own."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Lord, give us wisdom with whatever has been placed in our hands."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Father, teach us contentment while we wait for things to change."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Jesus, open doors for those who have been searching for months with no answer."}</span></li>
              </ul>
              <p className="border-l-4 border-[#FFD600] pl-4 py-2 bg-[#f0fafa] rounded-r-lg text-[#595959] leading-relaxed">
                <span className="font-bold text-[#006b6b]">Why we pray this: </span>{"God knows what we need before we ask. He has a habit of providing from a direction nobody was watching. That does not make the number on a payslip less tight, so we pray for trust and for wisdom at the same time."}
              </p>
            </section>

            <div className="rounded-xl bg-[#f0fafa] border border-[#008080]/30 p-4">
              <p className="text-[#006b6b] font-bold">Pray these at home this week</p>
              <p className="text-[#595959] text-sm mt-1">On Thursday we pray the points above together. The ones below are yours for the week.</p>
            </div>

            <section className="space-y-4">
              <h2 className="text-2xl font-extrabold text-[#1a1a1a] leading-snug">9. {"Support for Parents Balancing Work and Family"}</h2>
              <ul className="space-y-3 text-[#1a1a1a] text-lg leading-relaxed">
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"God, strengthen those who are stretched thin before the day even starts."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Lord, give peace in the parts of the day that always go wrong."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Father, give us joy in the small moments we usually rush past."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Jesus, show us what to put down and what to keep carrying."}</span></li>
              </ul>
              <p className="border-l-4 border-[#FFD600] pl-4 py-2 bg-[#f0fafa] rounded-r-lg text-[#595959] leading-relaxed">
                <span className="font-bold text-[#006b6b]">Why we pray this: </span>{"Every season needs different strength, and God gives it for the season you are in. Pray this one at home during the week. Maybe on the taxi before sunrise, when the day has already started without you."}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-extrabold text-[#1a1a1a] leading-snug">10. {"Peace for Those Battling Anxiety"}</h2>
              <ul className="space-y-3 text-[#1a1a1a] text-lg leading-relaxed">
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"God, quiet the thoughts that keep circling long after the lights go out."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Lord, help us hold on to what you promised when our feelings argue back."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Father, give us courage to face tomorrow before we feel ready."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Jesus, give us real rest in your presence tonight."}</span></li>
              </ul>
              <p className="border-l-4 border-[#FFD600] pl-4 py-2 bg-[#f0fafa] rounded-r-lg text-[#595959] leading-relaxed">
                <span className="font-bold text-[#006b6b]">Why we pray this: </span>{"Anxiety grows in the dark and shrinks in the light. Saying it out loud to God takes some of its power away. Pray this one at home, slowly, as many nights as you need."}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-extrabold text-[#1a1a1a] leading-snug">11. {"Hope for Those in Financial Strain"}</h2>
              <ul className="space-y-3 text-[#1a1a1a] text-lg leading-relaxed">
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"God, provide for those who are behind and cannot see how to catch up."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Lord, open a door that none of us can see from here."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Father, give peace to those lying awake counting what is short."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Jesus, teach us gratitude for what we were given today."}</span></li>
              </ul>
              <p className="border-l-4 border-[#FFD600] pl-4 py-2 bg-[#f0fafa] rounded-r-lg text-[#595959] leading-relaxed">
                <span className="font-bold text-[#006b6b]">Why we pray this: </span>{"God has been faithful before, when there was no visible way through. We remind ourselves of that out loud. Then we thank him for today, because gratitude is how hope stays alive while we wait."}
              </p>
            </section>
          </div>
        </section>

        <section className="bg-[#f7fbfb] py-10 px-4 sm:px-6 border-t border-gray-100">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-2xl font-extrabold text-[#1a1a1a]">Why pray this?</h2>

            <div>
              <h3 className="text-lg font-bold text-[#1a1a1a] leading-snug">{"Does God get tired of me?"}</h3>
              <p className="text-[#595959] leading-relaxed mt-2">{"No. God is light, and light does not run out or turn away. What often happens is that we get tired of ourselves and assume he feels the same. Praying honestly, even badly, puts an end to that guessing."}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#1a1a1a] leading-snug">{"How do I stop doing the thing I keep going back to?"}</h3>
              <p className="text-[#595959] leading-relaxed mt-2">{"Start by naming it to God instead of hiding it. Scripture promises a way out of every temptation, but it is usually a small opening and you have to choose it fast. Praying for courage before the moment arrives matters more than praying after."}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#1a1a1a] leading-snug">{"How do I know what God wants me to do?"}</h3>
              <p className="text-[#595959] leading-relaxed mt-2">{"Most of the time he shows the next step, not the whole plan. That feels frustrating when you want certainty now. Praying for clarity helps you stop demanding the map and start moving on the light you already have."}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#1a1a1a] leading-snug">{"Does praying actually help when someone is sick?"}</h3>
              <p className="text-[#595959] leading-relaxed mt-2">{"Yes, and not always in the way we ask. We pray for healing because God heals, and we pray for strength because some days are long. Both prayers are honest, and you are allowed to pray them at the same time."}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#1a1a1a] leading-snug">{"Can prayer fix a relationship that has gone cold?"}</h3>
              <p className="text-[#595959] leading-relaxed mt-2">{"Prayer changes the person praying first, and that is usually where a cold relationship starts to thaw. Honesty in front of God makes honesty with people easier. Small, ordinary kindness does the rest over time."}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#1a1a1a] leading-snug">{"Where is God when someone I love has died?"}</h3>
              <p className="text-[#595959] leading-relaxed mt-2">{"He is closer than he feels, and he is not offended by your anger or your silence. Grief does not have a deadline. Praying gives the pain somewhere to go besides round and round in your head at 3am."}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#1a1a1a] leading-snug">{"Is it wrong to pray about money?"}</h3>
              <p className="text-[#595959] leading-relaxed mt-2">{"No. Jesus taught us to ask for daily bread, which is about as practical as it gets. Praying about provision also steadies you, because it puts the worry in God's hands instead of replaying the sums all night."}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#1a1a1a] leading-snug">{"How do working parents cope when there is never enough time?"}</h3>
              <p className="text-[#595959] leading-relaxed mt-2">{"By asking God for strength for this season rather than for a perfect balance. Some weeks you will drop something. Praying for wisdom helps you choose what to drop instead of letting the week choose for you."}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#1a1a1a] leading-snug">{"Will praying really calm my anxiety?"}</h3>
              <p className="text-[#595959] leading-relaxed mt-2">{"It helps, and many people feel it most when they pray out loud. Speaking the fear to God takes it out of the loop in your head. It is not a replacement for a doctor or medication, and God is not offended if you need both."}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#1a1a1a] leading-snug">{"What do I do when the bills are more than I earn?"}</h3>
              <p className="text-[#595959] leading-relaxed mt-2">{"Pray, then ask someone you trust for practical help, because God often provides through people. Ask him for peace tonight and for wisdom tomorrow. He has provided before when there was no visible way, and he has not changed."}</p>
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
            <a href="https://wa.me/?text=A%20prayer%20I%20thought%20may%20help%20you%20this%20week%3A%20https%3A%2F%2Fwww.fountaingrace.org%2Ffountain-of-prayers%2Fa-prayer-when-everything-feels-dark-right-now%3Futm_source%3Dwhatsapp%26utm_medium%3Dshare%26utm_campaign%3Dprayers" target="_blank" rel="noopener noreferrer"
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
