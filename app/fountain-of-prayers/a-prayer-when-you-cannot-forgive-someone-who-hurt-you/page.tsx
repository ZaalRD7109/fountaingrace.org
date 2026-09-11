import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "A Prayer When You Cannot Forgive Someone Who Hurt You | Fountain of Grace International",
  description: "Prayers for forgiveness when you cannot let go of what someone did. Words to pray alone or out loud, from a church in Pretoria North.",
  robots: 'index, follow',
  alternates: { canonical: "https://www.fountaingrace.org/fountain-of-prayers/a-prayer-when-you-cannot-forgive-someone-who-hurt-you" },
  openGraph: {
    title: "A Prayer When You Cannot Forgive Someone Who Hurt You",
    description: "Prayers for forgiveness when you cannot let go of what someone did. Words to pray alone or out loud, from a church in Pretoria North.",
    type: 'article',
    images: [{ url: "https://www.fountaingrace.org/og-image.jpg", width: 1200, height: 630, alt: 'Fountain of Grace International - Church in Pretoria North' }],
    url: "https://www.fountaingrace.org/fountain-of-prayers/a-prayer-when-you-cannot-forgive-someone-who-hurt-you",
  },
  twitter: { card: 'summary_large_image', title: "A Prayer When You Cannot Forgive Someone Who Hurt You", description: "Prayers for forgiveness when you cannot let go of what someone did. Words to pray alone or out loud, from a church in Pretoria North.", images: ["https://www.fountaingrace.org/og-image.jpg"] },
}

const jsonLd = [{"@context": "https://schema.org", "@type": "Article", "headline": "A Prayer When You Cannot Forgive Someone Who Hurt You", "alternativeHeadline": "Week 30 of 2026: Embracing Forgiveness", "description": "Prayers for forgiveness when you cannot let go of what someone did. Words to pray alone or out loud, from a church in Pretoria North.", "image": "https://www.fountaingrace.org/og-image.jpg", "author": {"@type": "Person", "name": "Pastor Ricardo Zaal"}, "publisher": {"@type": "Church", "name": "Fountain of Grace International", "address": {"@type": "PostalAddress", "streetAddress": "323 B Danie Theron Street", "addressLocality": "Pretoria North", "addressRegion": "Gauteng", "addressCountry": "ZA"}}, "datePublished": "2026-07-20T08:00:00+02:00", "dateModified": "2026-07-20T08:00:00+02:00", "mainEntityOfPage": "https://www.fountaingrace.org/fountain-of-prayers/a-prayer-when-you-cannot-forgive-someone-who-hurt-you", "url": "https://www.fountaingrace.org/fountain-of-prayers/a-prayer-when-you-cannot-forgive-someone-who-hurt-you", "isPartOf": {"@type": "CreativeWorkSeries", "name": "Fountain of Prayers", "url": "https://www.fountaingrace.org/fountain-of-prayers"}}, {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fountaingrace.org"}, {"@type": "ListItem", "position": 2, "name": "Fountain of Prayers", "item": "https://www.fountaingrace.org/fountain-of-prayers"}, {"@type": "ListItem", "position": 3, "name": "A Prayer When You Cannot Forgive Someone Who Hurt You", "item": "https://www.fountaingrace.org/fountain-of-prayers/a-prayer-when-you-cannot-forgive-someone-who-hurt-you"}]}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Does God actually forgive everything I have done?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, and that includes the thing you have never said out loud. The forgiveness Jesus bought was not priced according to how bad the sin was. Praying about it helps because most of us believe the idea in general and doubt it about ourselves. Saying it out loud slowly moves it from your head to your chest."}}, {"@type": "Question", "name": "How do I stop feeling bitter about something that was not my fault?", "acceptedAnswer": {"@type": "Answer", "text": "You start by admitting the bitterness is there instead of calling it something nicer. Bitterness usually grows where a real wrong was never acknowledged, so it makes sense that it is strong. Praying it out gives you somewhere to put the anger other than your body. It fades slower than you want, and it does fade."}}, {"@type": "Question", "name": "Do I have to forgive someone who never said sorry?", "acceptedAnswer": {"@type": "Answer", "text": "You can forgive without an apology, and often that is the only version available. Forgiving is something you do with what you are carrying, and it does not require the other person to cooperate. It also does not mean trust is restored or that you have to be close again. Pray for strength first, then take it one day at a time."}}, {"@type": "Question", "name": "How do I say sorry when I am scared they will reject me?", "acceptedAnswer": {"@type": "Answer", "text": "Say it anyway, keep it short, and leave out the part where you explain why they made you do it. You cannot control how they answer, only whether you told the truth. Praying for courage beforehand steadies the hands. Many reconciliations start with a message sent at 22:00 that took three weeks to write."}}, {"@type": "Question", "name": "Why do I still feel guilty after I have been forgiven?", "acceptedAnswer": {"@type": "Answer", "text": "Feelings run behind facts, sometimes by years. Guilt becomes a habit of thought, and habits need replacing rather than arguing with. When you pray this line with other people, you hear the truth in someone else's voice, which lands differently. Give it time and keep showing up."}}, {"@type": "Question", "name": "What do I do when someone at church hurt me?", "acceptedAnswer": {"@type": "Answer", "text": "Tell God first, then tell the person, and try to do it before it hardens. Church hurt cuts deeper because you expected safety there. Praying for the community as a whole keeps you from turning one person into the whole building. If you need someone to sit with you while you do it, ask."}}, {"@type": "Question", "name": "Is forgiving someone the same as letting them get away with it?", "acceptedAnswer": {"@type": "Answer", "text": "No. Forgiving does not mean the harm was acceptable, and it does not cancel consequences or the need for safety. It means you stop being the one who has to collect the debt. That is why people describe it as putting something down rather than winning something."}}]}]

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
              Fountain of Prayers · Week 30 of 2026
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              {"A Prayer When You Cannot Forgive Someone Who Hurt You"}
            </h1>
            <p className="text-white text-base mt-4">{"Embracing Forgiveness"} · {"Ephesians 4:31-32"}</p>
            <p className="text-white text-sm mt-2">Pretoria North · 20 July 2026</p>
          </div>
        </header>

        <section className="bg-white pt-10 pb-4 px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-[#006b6b] text-xs font-bold uppercase tracking-wider mb-3">Pray this now</h2>
            <p className="text-[#1a1a1a] text-xl leading-relaxed italic">{"God, I am carrying something I did not choose and cannot put down. It keeps me awake. Part of me wants the person who hurt me to hurt the same way, and I am tired of holding that. I cannot undo what happened. So I ask for strength inside it, enough for today. I do not want to become someone hard. Soften me slowly. Remind me how much has already been forgiven in me. Amen."}</p>
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
              <p className="text-[#0d6fbf] font-semibold text-lg italic leading-relaxed">&quot;{"Let all bitterness and wrath and anger and clamor and slander be put away from you, along with all malice. Be kind to one another, tenderhearted, forgiving one another, as God in Christ forgave you."}&quot;</p>
              <cite className="text-[#595959] text-sm not-italic mt-2 block">- {"Ephesians 4:31-32"}</cite>
              <p className="text-[#595959] text-xs mt-3">{"English Standard Version."}</p>
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
              <h2 className="text-2xl font-extrabold text-[#1a1a1a] leading-snug">2. {"Understanding God's Forgiveness"}</h2>
              <ul className="space-y-3 text-[#1a1a1a] text-lg leading-relaxed">
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Father, show us your mercy deeper than we have understood it, until it changes the way we look at people."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"God, open our hearts to receive the forgiveness we keep refusing to believe is meant for us."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Lord, thank you for forgiving us in Christ when we had nothing to offer in return."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Jesus, help us grasp what our forgiveness cost you, and help us hold it with care."}</span></li>
              </ul>
              <p className="border-l-4 border-[#FFD600] pl-4 py-2 bg-[#f0fafa] rounded-r-lg text-[#595959] leading-relaxed">
                <span className="font-bold text-[#006b6b]">Why we pray this: </span>{"Most of us try to forgive on willpower and run out by Tuesday. Seeing how much God has already covered in us changes the maths. Mercy that has been received tends to leak out of a person."}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-extrabold text-[#1a1a1a] leading-snug">3. {"Letting Go of Bitterness"}</h2>
              <ul className="space-y-3 text-[#1a1a1a] text-lg leading-relaxed">
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"God, loosen our grip on the hurt we have carried the longest."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Lord, free us from the anger that wakes up with us and follows us all day."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Father, heal the wound we have hidden because it never looked like an injury."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Jesus, let your peace settle in the place where bitterness has been living."}</span></li>
              </ul>
              <p className="border-l-4 border-[#FFD600] pl-4 py-2 bg-[#f0fafa] rounded-r-lg text-[#595959] leading-relaxed">
                <span className="font-bold text-[#006b6b]">Why we pray this: </span>{"Bitterness feels like protection. Mostly it just keeps the wound open and warm. When we hand it over, God's peace finally has somewhere to sit down."}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-extrabold text-[#1a1a1a] leading-snug">4. {"Forgiving Others"}</h2>
              <ul className="space-y-3 text-[#1a1a1a] text-lg leading-relaxed">
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"God, give us strength to forgive the person we least want to forgive."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Jesus, shape our hearts to look like yours on the days mercy costs us something."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Lord, give us grace to forgive again tomorrow when the same hurt comes back."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Father, help us choose forgiveness on the days our feelings refuse to follow."}</span></li>
              </ul>
              <p className="border-l-4 border-[#FFD600] pl-4 py-2 bg-[#f0fafa] rounded-r-lg text-[#595959] leading-relaxed">
                <span className="font-bold text-[#006b6b]">Why we pray this: </span>{"Forgiving is a decision made long before the feelings agree. Jesus went first and did not wait to feel like it. We ask for strength because some people have to be forgiven more than once."}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-extrabold text-[#1a1a1a] leading-snug">5. {"Seeking Forgiveness"}</h2>
              <ul className="space-y-3 text-[#1a1a1a] text-lg leading-relaxed">
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"God, humble us enough to say sorry plainly, with no excuses attached."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Lord, give us courage to make the call we have been avoiding for months."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Father, keep us honest with you about what we did and what we have hidden."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Jesus, restore what has broken between us and the people we love."}</span></li>
              </ul>
              <p className="border-l-4 border-[#FFD600] pl-4 py-2 bg-[#f0fafa] rounded-r-lg text-[#595959] leading-relaxed">
                <span className="font-bold text-[#006b6b]">Why we pray this: </span>{"Saying sorry is harder than being forgiven. Pride makes short work of long friendships. Someone praying this in Pretoria North on a Thursday night already knows the name of the person they need to phone."}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-extrabold text-[#1a1a1a] leading-snug">6. {"Living a Forgiven Life"}</h2>
              <ul className="space-y-3 text-[#1a1a1a] text-lg leading-relaxed">
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"God, give us joy in the freedom we already have and keep forgetting."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Lord, settle us in your love so we stop auditioning for it."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Father, give us strength to live without the guilt we keep picking back up."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Jesus, let our ordinary days carry the same mercy you showed us."}</span></li>
              </ul>
              <p className="border-l-4 border-[#FFD600] pl-4 py-2 bg-[#f0fafa] rounded-r-lg text-[#595959] leading-relaxed">
                <span className="font-bold text-[#006b6b]">Why we pray this: </span>{"Guilt is sticky. Some of us keep paying off something that was settled years ago. Joy starts the day we stop."}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-extrabold text-[#1a1a1a] leading-snug">7. {"Cultivating a Forgiving Community"}</h2>
              <ul className="space-y-3 text-[#1a1a1a] text-lg leading-relaxed">
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"God, make this church a place where forgiveness is practised more than it is discussed."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Lord, hold our unity together with grace when we have every reason to pull apart."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Father, teach us to encourage one another toward forgiveness instead of keeping score."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Jesus, fill this room with love and acceptance that a visitor can feel within five minutes."}</span></li>
              </ul>
              <p className="border-l-4 border-[#FFD600] pl-4 py-2 bg-[#f0fafa] rounded-r-lg text-[#595959] leading-relaxed">
                <span className="font-bold text-[#006b6b]">Why we pray this: </span>{"We meet every Thursday from 19:00, and the same people keep showing up with the same bruises. A church that forgives quickly stays together. One that keeps a record slowly empties out."}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-extrabold text-[#1a1a1a] leading-snug">8. {"Reflecting Christ's Forgiveness"}</h2>
              <ul className="space-y-3 text-[#1a1a1a] text-lg leading-relaxed">
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Jesus, let our lives show the mercy we received from you."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"God, make our forgiving something people can see and ask questions about."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Lord, give us chances this week to tell someone plainly how you forgave us."}</span></li>
                <li className="flex gap-3"><span className="text-[#008080] font-bold shrink-0" aria-hidden="true">&#8226;</span><span>{"Father, help us be an example of Christ to whoever is watching us closely."}</span></li>
              </ul>
              <p className="border-l-4 border-[#FFD600] pl-4 py-2 bg-[#f0fafa] rounded-r-lg text-[#595959] leading-relaxed">
                <span className="font-bold text-[#006b6b]">Why we pray this: </span>{"Forgiveness is unusual enough that people notice. A colleague who watches you let something go will remember that longer than any argument you win. That is how the story gets told without a sermon."}
              </p>
            </section>
          </div>
        </section>

        <section className="bg-[#f7fbfb] py-10 px-4 sm:px-6 border-t border-gray-100">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-2xl font-extrabold text-[#1a1a1a]">Why pray this?</h2>

            <div>
              <h3 className="text-lg font-bold text-[#1a1a1a] leading-snug">{"Does God actually forgive everything I have done?"}</h3>
              <p className="text-[#595959] leading-relaxed mt-2">{"Yes, and that includes the thing you have never said out loud. The forgiveness Jesus bought was not priced according to how bad the sin was. Praying about it helps because most of us believe the idea in general and doubt it about ourselves. Saying it out loud slowly moves it from your head to your chest."}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#1a1a1a] leading-snug">{"How do I stop feeling bitter about something that was not my fault?"}</h3>
              <p className="text-[#595959] leading-relaxed mt-2">{"You start by admitting the bitterness is there instead of calling it something nicer. Bitterness usually grows where a real wrong was never acknowledged, so it makes sense that it is strong. Praying it out gives you somewhere to put the anger other than your body. It fades slower than you want, and it does fade."}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#1a1a1a] leading-snug">{"Do I have to forgive someone who never said sorry?"}</h3>
              <p className="text-[#595959] leading-relaxed mt-2">{"You can forgive without an apology, and often that is the only version available. Forgiving is something you do with what you are carrying, and it does not require the other person to cooperate. It also does not mean trust is restored or that you have to be close again. Pray for strength first, then take it one day at a time."}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#1a1a1a] leading-snug">{"How do I say sorry when I am scared they will reject me?"}</h3>
              <p className="text-[#595959] leading-relaxed mt-2">{"Say it anyway, keep it short, and leave out the part where you explain why they made you do it. You cannot control how they answer, only whether you told the truth. Praying for courage beforehand steadies the hands. Many reconciliations start with a message sent at 22:00 that took three weeks to write."}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#1a1a1a] leading-snug">{"Why do I still feel guilty after I have been forgiven?"}</h3>
              <p className="text-[#595959] leading-relaxed mt-2">{"Feelings run behind facts, sometimes by years. Guilt becomes a habit of thought, and habits need replacing rather than arguing with. When you pray this line with other people, you hear the truth in someone else's voice, which lands differently. Give it time and keep showing up."}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#1a1a1a] leading-snug">{"What do I do when someone at church hurt me?"}</h3>
              <p className="text-[#595959] leading-relaxed mt-2">{"Tell God first, then tell the person, and try to do it before it hardens. Church hurt cuts deeper because you expected safety there. Praying for the community as a whole keeps you from turning one person into the whole building. If you need someone to sit with you while you do it, ask."}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#1a1a1a] leading-snug">{"Is forgiving someone the same as letting them get away with it?"}</h3>
              <p className="text-[#595959] leading-relaxed mt-2">{"No. Forgiving does not mean the harm was acceptable, and it does not cancel consequences or the need for safety. It means you stop being the one who has to collect the debt. That is why people describe it as putting something down rather than winning something."}</p>
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
            <a href="https://wa.me/?text=A%20prayer%20I%20thought%20may%20help%20you%20this%20week%3A%20https%3A%2F%2Fwww.fountaingrace.org%2Ffountain-of-prayers%2Fa-prayer-when-you-cannot-forgive-someone-who-hurt-you%3Futm_source%3Dwhatsapp%26utm_medium%3Dshare%26utm_campaign%3Dprayers" target="_blank" rel="noopener noreferrer"
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
