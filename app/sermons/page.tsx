import type { Metadata } from 'next'
import Link from 'next/link'
import SermonsFilter from './_components/SermonsFilter'

export const metadata: Metadata = {
  title: 'Sermons | Bible Teaching | Fountain of Grace International',
  description:
    'Practical Bible teaching from a Christian church in Pretoria North. Every Sunday message addresses a real problem you are facing. Listen online or come in person.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/sermons',
  },
  openGraph: {
    title: 'Sermons | Bible Teaching | Fountain of Grace International',
    description:
      'Practical Bible teaching from a Christian church in Pretoria North. Every Sunday message addresses a real problem you are facing. Listen online or come in person.',
    type: 'website',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International - Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/sermons',
  },
}

const sermonPosts = [
  {
    slug: 'why-the-easy-road-always-leads-to-the-wrong-place',
    title: 'Why the Easy Road Always Leads to the Wrong Place',
    date: '2026-05-17',
    dateDisplay: '17 May 2026',
    intro:
      'Every shortcut you have taken has cost more than it promised. And somehow you ended up further back than where you started. This message explains exactly why the easy road always delivers the wrong destination - and what the real road actually requires.',
  },
  {
    slug: 'you-already-know-what-to-do-so-why-arent-you-doing-it',
    title: "You Already Know What To Do - So Why Aren't You Doing It?",
    date: '2026-05-17',
    dateDisplay: '17 May 2026',
    intro:
      'The problem is not that you need more information. You already know what to do. The gap is between knowing and doing - and that gap has a name. This message identifies what is actually keeping you stuck and shows you how to move.',
  },
  {
    slug: 'youre-still-in-the-story-when-god-seems-silent',
    title: "You're Still in the Story: When It Looks Like God Is Silent",
    date: '2025-06-22',
    dateDisplay: '22 June 2025',
    intro:
      'When everything goes quiet and nothing seems to be moving, it is easy to assume God stopped. This message opens Romans 8:28 and shows why the silence you are living in right now is not the end of what God is writing in your life.',
  },
  {
    slug: 'when-you-cant-believe-things-will-get-better-again',
    title: 'When You Can\'t Believe Things Will Get Better Again',
    date: '2026-04-26',
    dateDisplay: '26 April 2026',
    intro:
      'For the person who has been hurt so deeply they cannot believe good news anymore. Pastor Ricardo Zaal on why pain blinds you to the answers standing right in front of you, and how honest faith starts growing back.',
  },
  {
    slug: 'tired-of-the-same-pain-coming-back-try-this',
    title: 'Tired of the Same Pain Coming Back? Try This',
    date: '2025-12-14',
    dateDisplay: '14 December 2025',
    intro:
      'If the same sickness, breakups, money problems or family patterns keep coming back no matter how hard you pray, this message exposes a spiritual weapon hidden in Scripture from Genesis to Revelation. Pastor Ricardo Zaal shows you how to use it.',
  },
  {
    slug: 'when-life-feels-like-a-grave-you-cannot-climb-out-of',
    title: 'When Life Feels Like a Grave You Cannot Climb Out Of',
    date: '2026-04-05',
    dateDisplay: '5 April 2026',
    intro:
      'If you are sitting in a graveyard moment right now, retrenchment, loss, a relationship that died, a diagnosis you did not expect, this message is for you. Pastor Ricardo shares his own losses and seven honest ways to walk through the dark until the third day breaks.',
  },
  {
    slug: 'feeling-empty-and-exhausted-how-to-find-strength-when-you-have-nothing',
    title: 'Feeling Empty and Exhausted? How to Find Strength When You Have Nothing Left',
    date: '2026-04-27',
    dateDisplay: '27 April 2026',
    intro:
      'For the person who feels dried up, exhausted, and quietly carrying too much. Pastor Ricardo Zaal opens 2 Corinthians 12:9 and shows why your emptiest moment is the exact place where real strength shows up. Honest, practical, and for anyone running on empty.',
  },
  {
    slug: 'victory-battle-the-lords-fight-not-yours',
    title: "Stop Fighting a Battle That Was Never Yours to Win",
    date: "2024-06-01",
    dateDisplay: "1 June 2024",
    intro:
      "Are you exhausted from fighting battles that seem impossible to win? Whether it is sickness, broken relationships, fear, or daily struggles, Pastor Ricardo Zaal brings a word that will shift your perspective completely. The battle is not yours to fight alone - it belongs to God, and that truth alone changes everything.",
  },
  {
    slug: 'if-your-church-does-not-change-you-change-your-church',
    title: "Are You Actually Being Transformed or Just Showing Up?",
    date: "2023-07-02",
    dateDisplay: "2 July 2023",
    intro:
      "Sitting in a church week after week but feeling no different can be one of the most quietly painful experiences a believer faces. Pastor Ricardo Zaal tackles this head-on with a bold statement - if your church does not change you, change your church. This sermon from Fountain of Grace International in Pretoria North is a Spirit-filled call to stop settling for a church experience that leaves you exactly where you started.",
  },
  {
    slug: 'dont-pray-the-storm-away-why-you-need-the-storm',
    title: "Stop Trying to Escape Your Problems - Here Is What They Are Actually For",
    date: "2024-01-01",
    dateDisplay: "1 January 2024",
    intro:
      "When life feels like it is falling apart, the first prayer most people pray is 'God, make it stop.' But what if the storm is not your enemy? Pastor Ricardo Zaal opens the Word on New Year's Day to show why the trials you are asking God to remove are often the very things He is using to grow you into who He needs you to be.",
  },
  {
    slug: 'birth-of-the-great-christmas-sermon-matthew-1-21',
    title: "Born Into Something Greater Than the Life You Are Currently Living",
    date: "2022-12-25",
    dateDisplay: "25 December 2022",
    intro:
      "Christmas can feel hollow when you are grieving a loss, struggling financially, or sitting alone with no one at the table. Pastor Ricardo Zaal opens the Word on Christmas morning and shows that the birth of Jesus Christ is not a distant historical event but a living force that births new things into the dead places of your life. If something in your world has gone dry, this message is for you.",
  },
  {
    slug: 'from-wifi-to-why-fire-presence-ignite-holy-spirit',
    title: "Why Your Drive Burns Out Before the Breakthrough",
    date: "2025-09-07",
    dateDisplay: "7 September 2025",
    intro:
      "Ever felt fired up about God on Sunday, only for that feeling to be completely gone by Monday morning? You are not broken - you are buffering. In this message Pastor Ricardo Zaal uses the everyday frustration of slow WiFi to explain why so many people have access to God's full power but only ever experience a fraction of it. The answer is closer than you think, and it starts with presence.",
  },
  {
    slug: 'born-original-marked-by-god-identity-purpose',
    title: "You Were Not Made to Be a Copy of Someone Else",
    date: "2025-08-30",
    dateDisplay: "30 August 2025",
    intro:
      "Do you ever feel like you were born into the wrong story - comparing yourself to others, wishing you looked different, or trying to fit a mould someone else set for you? Pastor Ricardo Zaal tackles that pressure head-on in this message, showing that God did not clone you - He crafted you. From the Hebrew meaning of fearfully and wonderfully made to the intimate knowledge God had of you before birth, this sermon reminds you that your fingerprints, your quirks, and your calling are not accidents.",
  },
  {
    slug: 'right-action-principles-move-forward-faster-part2',
    title: "The Right Action Principle: What Moves You Forward Faster | James 2:17",
    date: "2025-11-16",
    dateDisplay: "16 November 2025",
    intro:
      "You have been to every interview, tried every option, and still nothing is moving. In this message, Pastor Ricardo Zaal explains that the problem is rarely a lack of effort - it is a lack of the right action, taken at the right time. This is Part 2 of a practical, Bible-based series on the principles that move people forward faster in every area of life.",
  },
  {
    slug: 'god-will-finish-what-he-started-in-you-battle',
    title: "When Everything Fights Against What You Were Meant to Build",
    date: "2025-11-09",
    dateDisplay: "9 November 2025",
    intro:
      "When life feels like one long uphill battle - when circumstances, people, and your own exhaustion seem to be working against every promise you have believed for - this message is for you. Pastor Ricardo Zaal opens the Word to show that the God who started something good in your life has never stopped working on it. You are not fighting alone, and the outcome was never in your enemies' hands.",
  },
  {
    slug: 'experiencing-gods-presence-direct-divine-communication',
    title: "Can Something Greater Than Yourself Actually Speak Directly to You?",
    date: "2025-09-14",
    dateDisplay: "14 September 2025",
    intro:
      "Many people find it hard to believe that God would actually speak to them personally - that kind of closeness can feel like it belongs only to pastors or Bible heroes. In this message, Pastor Ricardo Zaal of Fountain of Grace International in Pretoria North confronts that doubt head-on and opens up the possibility of a real, living encounter with God. If you have ever sat in church wondering whether God's voice is something you could ever truly hear, this sermon is for you.",
  },
  {
    slug: 'prophetic-reset-hearing-seeing-speaking-heaven-john-10-27',
    title: "When You Stop Hearing the Voice That Used to Guide Every Decision",
    date: "2025-10-12",
    dateDisplay: "12 October 2025",
    intro:
      "Have you ever felt like God is speaking but you cannot quite pick up what He is saying? This sermon kicks off a 4-week Prophetic Reset series designed to help ordinary believers - not just special prophets - tune back into the voice of God. Pastor Ricardo Zaal unpacks why hearing God is your inheritance, how He speaks through scripture, His Spirit and creation, and what simple disciplines will open your ears again.",
  },
  {
    slug: 'why-your-biggest-battle-follows-your-best-decision',
    title: 'Why Your Biggest Battle Always Follows Your Best Decision',
    date: '2026-05-10',
    dateDisplay: '10 May 2026',
    intro:
      'You made the right choice - then everything fell apart. That is not a sign you got it wrong. In Scripture, the biggest battles come immediately after the biggest decisions. This message explains why opposition after a breakthrough is confirmation, not contradiction.',
  },
  {
    slug: 'you-dont-know-who-you-are-yet',
    title: "You Don't Know Who You Are Yet",
    date: '2026-05-03',
    dateDisplay: '3 May 2026',
    intro:
      "You have been living by an identity built from failure, other people's words, and what life has done to you. God consistently addresses people by who they are becoming, not who they currently appear to be. Gideon was hiding when the angel called him a mighty man of valour.",
  },
  {
    slug: 'the-principle-that-activates-everything',
    title: 'The Principle That Activates Everything: Right Action',
    date: '2026-04-26',
    dateDisplay: '26 April 2026',
    intro:
      'You have prayed. You have believed. But something is still not activating. Right action - obedient, timely movement in the right direction - is the principle that turns faith into results. James 2:17.',
  },
  {
    slug: 'why-some-problems-wont-leave-until-you-understand-this',
    title: "Why Some Problems Won't Leave Until You Understand This",
    date: '2026-04-19',
    dateDisplay: '19 April 2026',
    intro:
      'The blood of Jesus has five specific functions that most believers have never applied. Problems that keep returning do so until you understand what Revelation 12:11 actually means by "they overcame."',
  },
  {
    slug: 'you-love-god-but-are-you-in-the-game',
    title: 'You Know What You Should Be Doing - So Why Are You Still on the Sidelines?',
    date: '2026-04-05',
    dateDisplay: '5 April 2026',
    intro:
      'The crowd cheered Jesus and then crucified Him. The donkey carried Him in silence and made history. Based on Matthew 21 and Luke 19, this message asks which one describes your relationship with God right now.',
  },
  {
    slug: 'dying-right-good-friday-message',
    title: 'Dying Right - What Jesus Did on the Cross That Most People Miss',
    date: '2026-04-03',
    dateDisplay: '3 April 2026',
    intro:
      'Good Friday is not a tragedy. Jesus was not a victim - He was a volunteer. Every word He spoke from the cross was deliberate. This message looks at what it means to face an ending the right way, and what tetelestai - paid in full - changes for you today.',
  },
  {
    slug: 'when-knowing-is-the-problem',
    title: 'When Knowing Is the Problem',
    date: '2026-02-15',
    dateDisplay: '15 February 2026',
    intro:
      'James 1:22 - the hearer who does not act is like a man who looks in a mirror and walks away forgetting his face. You already know what to do. That is exactly the problem this message addresses.',
  },
  {
    slug: 'when-good-things-block-god-things',
    title: 'How Good Opportunities Become the Thing That Stops Your Real Breakthrough',
    date: '2026-02-08',
    dateDisplay: '8 February 2026',
    intro:
      'You can be climbing a ladder leaned against the wrong wall. Good intentions and genuine busyness - but misaligned with God\'s appointed season. The Martha pattern is more common than most people admit.',
  },
  {
    slug: 'your-resolution-didnt-fail-you-quit-acting',
    title: "Your Resolution Didn't Fail - You Quit Acting",
    date: '2026-01-25',
    dateDisplay: '25 January 2026',
    intro:
      'The resolution was not the problem. Your habits did not hear the declaration. You are not lazy - you are tired of failing. This message explains the gap between motivation and consistent action.',
  },
  {
    slug: 'the-system-youre-praying-against-without-knowing-it',
    title: "Why You Keep Losing - You Are Fighting the Wrong Enemy",
    date: '2026-01-18',
    dateDisplay: '18 January 2026',
    intro:
      'God already opened the door. The system is already set. But disobedience, ingratitude, and praying for what is already provided - without walking through it - is unknowingly working against your own breakthrough.',
  },
  {
    slug: 'why-does-your-life-keep-collapsing',
    title: 'Why Does Your Life Keep Collapsing No Matter What You Build?',
    date: '2026-01-11',
    dateDisplay: '11 January 2026',
    intro:
      'Living 70 years but repeating the same one. Collapsing in the same places. Storms do not create what spills out - they reveal what was already there. This message names the root, not just the symptom.',
  },
  {
    slug: 'why-some-things-refuse-to-move',
    title: 'Why Some Things Refuse to Move',
    date: '2026-01-04',
    dateDisplay: '4 January 2026',
    intro:
      'The name of Jesus is not a religious formula to end prayers. It is a legal claim that requires relationship and order. Philippians 2:9-10 and Matthew 7:22-23 explain why some things still will not move.',
  },
  {
    slug: 'why-your-prayers-are-not-changing-your-life',
    title: 'Why Nothing Changes No Matter How Hard You Try',
    date: '2026-01-04',
    dateDisplay: '4 January 2026',
    intro:
      'A prophetic word only activates when faith meets the right action step. Most regrets are not about what you did wrong - they are about what you never did at all. The foundation was laid. Nobody ever added the bricks.',
  },
  {
    slug: 'right-action-principles-that-move-people-forward-faster',
    title: 'Part 2: Right Action - The Principles That Move People Forward Faster',
    date: '2026-03-15',
    dateDisplay: '15 March 2026',
    intro:
      'Knowing the principles is not the same as applying them. Part 2 asks the harder question: why do you still know, but not act? What separates the person who plans from the person who moves?',
  },
  {
    slug: 'the-principles-that-move-people-forward-faster',
    title: 'The Principles That Move People Forward Faster',
    date: '2026-03-08',
    dateDisplay: '8 March 2026',
    intro:
      'You have been praying. You have been trying. Nothing has changed. This message gives 10 biblical principles - obedience, positioning, wisdom, strategy, stewardship, relationships, and more.',
  },
  {
    slug: 'what-if-someone-else-finishes-what-was-meant-for-you',
    title: 'What If Someone Else Finishes What Was Meant for You?',
    date: '2026-02-22',
    dateDisplay: '22 February 2026',
    intro:
      'You know your potential. You keep postponing. Based on Esther 4:14, this message asks the uncomfortable question: what if your window closes and someone else steps into your assignment?',
  },
  {
    slug: 'follow-your-inner-voice-discover-your-destiny',
    title: 'Follow Your Inner Voice - Discover Your Destiny',
    date: '2026-02-24',
    dateDisplay: '24 February 2026',
    intro:
      'Before you were born, God already set you apart. This message challenges you to stop listening to the voices that told you to stop running - and start moving in the direction God placed inside you.',
  },
  {
    slug: 'be-a-doer-of-gods-word-not-just-a-hearer',
    title: "You Know What to Do. So Why Is Nothing Changing?",
    date: '2026-02-16',
    dateDisplay: '16 February 2026',
    intro:
      'James 1:21-25 - the person who hears and forgets is like a man who looks in a mirror and walks away. The blessing is attached to the doing, not the hearing.',
  },
  {
    slug: 'why-youre-not-moving-forward-and-how-to-break-it',
    title: "Why You're Not Moving Forward - And How to Break It",
    date: '2026-03-01',
    dateDisplay: '1 March 2026',
    intro:
      'Most people are not stuck because of a lack of information. They are stuck because of four specific patterns that disguise themselves as wisdom. This message names them and breaks them.',
  },
  {
    slug: 'pruning-for-progress',
    title: 'Pruning for Progress: From Bare Branch to Bountiful Blessing',
    date: '2025-11-02',
    dateDisplay: '2 November 2025',
    intro:
      'John 15:1-8 - God prunes every branch that bears fruit so it bears more. The cutting is not punishment. It is preparation. The season of pruning is the season closest to breakthrough.',
  },
  {
    slug: 'the-spiritual-weapon-declaration',
    title: 'How to Break a Pattern That Has Followed Your Family for Generations',
    date: '2025-10-26',
    dateDisplay: '26 October 2025',
    intro:
      'This is not a passive message - it is an activation. Jeremiah 22:29: O earth, earth, earth, hear the word of the LORD. Genesis 1:26 gave you dominion. John 14:12 says greater works. Open your mouth and speak.',
  },
  {
    slug: 'the-spiritual-weapon-no-one-speaks-about',
    title: 'The One Weapon Nobody Teaches You That Changes Every Fight (But Everyone Needs)',
    date: '2025-10-19',
    dateDisplay: '19 October 2025',
    intro:
      'John 8:6 - Jesus stooped and wrote on the ground. Every accuser left. That was a weapon. Genesis 1:11 shows God spoke to the earth before He spoke to man. Creation is programmed to respond to spoken authority. So are your cycles.',
  },
  {
    slug: 'no-more-waiting-rooms-god-is-live-now',
    title: 'Stop Waiting for Your Real Life to Begin - It Already Started',
    date: '2025-09-28',
    dateDisplay: '28 September 2025',
    intro:
      'You are not stuck in a waiting room. God is not buffering. Isaiah 43:19 says the new thing is already springing forth. The question is not when He will move - it is whether you are tuned in to where He already is.',
  },
  {
    slug: 'the-silent-assassin-of-destiny',
    title: 'The Silent Assassin of Destiny: Overthinking',
    date: '2025-08-31',
    dateDisplay: '31 August 2025',
    intro:
      'Overthinking kills destiny before you start. The enemy cannot touch you unless you allow him to - and his entry point is your mind. Based on 2 Corinthians 10:4-5, this message names the pattern and shows how to break it.',
  },
  {
    slug: 'the-anointing-that-makes-hell-fear-you',
    title: 'Why Some People Are Completely Untouchable No Matter What Life Throws',
    date: '2025-08-24',
    dateDisplay: '24 August 2025',
    intro:
      'Isaiah 10:27 - the yoke shall be destroyed because of the anointing. Not loosened. Rendered useless. This message explains what the anointing actually is, what it does, and why hell fears the person who carries it.',
  },
  {
    slug: 'releasing-his-presence',
    title: 'Releasing His Presence: From Container to Conduit',
    date: '2025-06-29',
    dateDisplay: '29 June 2025',
    intro:
      "You sense God's presence in church - but it stays there. Luke 24:32 says the disciples' hearts burned while Jesus walked with them, then they immediately went and told others. This message is about moving from containing the presence to releasing it.",
  },
  {
    slug: 'faith-is-the-router-that-connects-you-to-gods-supply',
    title: "The Missing Connection Blocking Everything You Need From Getting Through",
    date: '2025-06-08',
    dateDisplay: '8 June 2025',
    intro:
      'The Wi-Fi subscription is paid. The signal is available. But if your router is broken, you receive nothing - not because the supply stopped, but because the connection failed. Faith is your router. Based on 2 Corinthians 1:20 and Proverbs 3:5.',
  },
  {
    slug: 'hosting-the-presence-of-god',
    title: 'Why Sunday Feels Different and Monday Feels Like Nothing Changed',
    date: '2025-06-22',
    dateDisplay: '22 June 2025',
    intro:
      "Psalm 27:8 - seek my face, require my presence. Obed-Edom's house overflowed in three months. Samson lost his strength without noticing. The difference between them was not effort - it was how each one treated the presence of God.",
  },
  {
    slug: 'the-danger-of-overnight-success',
    title: 'The Danger of Overnight Success and the Power of Long Obedience',
    date: '2025-05-18',
    dateDisplay: '18 May 2025',
    intro:
      'You can\'t cheat growth - you can only delay maturity. Based on Ecclesiastes 3:1 and Song of Solomon 2:15, this message shows why heaven builds in seasons, why little compromises become great falls, and why preparation is heaven\'s proof of trust.',
  },
  {
    slug: 'speak-prophetic-into-your-life',
    title: 'Every Word You Say About Yourself Is Writing Your Future',
    date: '2025-04-06',
    dateDisplay: '6 April 2025',
    intro:
      '1 Corinthians 14:3 - prophecy is to edify, exhort, and comfort. You are always prophesying over your life whether you know it or not. The question is whether your words are building faith or destroying it.',
  },
  {
    slug: 'the-prophetic-encounter',
    title: 'You Were Built for Something Specific - Here Is How to Find It',
    date: '2025-02-23',
    dateDisplay: '23 February 2025',
    intro:
      '2 Timothy 1:6 - stir up the gift of God which is in thee. The gift is already there. Isaiah 42:3 says a bruised reed shall he not break. You are not broken. You are bruised. Fear is the only thing keeping the gift from coming out.',
  },
  {
    slug: 'the-language-of-the-spirit-interpreting-what-you-hear',
    title: 'Hearing the Right Things and Still Getting Them Wrong - Here Is Why',
    date: '2025-02-09',
    dateDisplay: '9 February 2025',
    intro:
      'Numbers 12:6 - God speaks in visions and dreams. The problem is not that He has gone silent. The problem is translation. This message teaches you to read the grammar of the Spirit and interpret what He is saying correctly.',
  },
  {
    slug: 'the-inheritance-test',
    title: 'The Inheritance Test: Will It Reach Three Generations?',
    date: '2024-09-08',
    dateDisplay: '8 September 2024',
    intro:
      "Proverbs 13:22 - a good man leaves an inheritance to his children's children. Joseph's coat was taken twice. His character was never taken once. The coat is money. The character is the system. Only one of them can be stolen.",
  },
  {
    slug: 'you-are-not-lazy-you-are-a-lot-more',
    title: 'You Are Not Lazy - You Are a Lot More',
    date: '2024-01-28',
    dateDisplay: '28 January 2024',
    intro:
      'Proverbs 6:6-8 - the ant needs no commander, yet it prepares diligently for harvest. Joel 3:10 - let the weak say I am strong. You are not lazy. You have been confessing the wrong thing.',
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Sermons - Fountain of Grace International',
    description: 'Practical teaching for real life from Fountain of Grace International in Pretoria North.',
    url: 'https://www.fountaingrace.org/sermons',
    publisher: {
      '@type': 'Church',
      name: 'Fountain of Grace International',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '323 B Danie Theron Street',
        addressLocality: 'Pretoria North',
        addressRegion: 'Gauteng',
        addressCountry: 'ZA',
      },
    },
    blogPost: sermonPosts.map((s) => ({
      '@type': 'BlogPosting',
      headline: s.title,
      datePublished: s.date,
      url: `https://www.fountaingrace.org/sermons/${s.slug}`,
      author: { '@type': 'Person', name: 'Pastor Ricardo Zaal' },
    })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Sermons', item: 'https://www.fountaingrace.org/sermons' },
    ],
  },
]

const sortedSermons = [...sermonPosts].sort((a, b) => b.date.localeCompare(a.date))

export default function SermonsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* HERO */}
      <section className="bg-[#008080] text-white pt-10 pb-10 px-4 sm:px-6">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-white font-semibold text-xs uppercase tracking-wider mb-3">
            Sunday Teaching · Pretoria North
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
            Practical Bible teaching for real life.
          </h1>
          <p className="text-white text-base leading-relaxed mb-5">
            Every message at{' '}
            <Link href="/about" className="text-white font-semibold underline hover:text-[#1a1a1a]">Fountain of Grace International</Link>{' '}
            is built around a problem people are actually living with. Not theory. Things that connect to your week.
          </p>
          <Link href="/plan-your-visit" className="btn-primary text-sm">
            Come in Person
          </Link>
        </div>
      </section>

      {/* SEARCH + FILTER + SERMON CARDS */}
      <SermonsFilter sermons={sortedSermons} />

      {/* DEVOTIONAL SIGNUP */}
      <section className="bg-[#f0fafa] py-14 px-4 sm:px-6 border-t border-[#e0f4f4]">
        <div className="section-container max-w-xl text-center">
          <p className="text-[#008080] font-semibold text-xs uppercase tracking-widest mb-3">
            Every week · Free
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Get the weekly message delivered to you
          </h2>
          <p className="text-[#595959] leading-relaxed mb-7">
            Each week Pastor Ricardo sends a short devotional based on the Sunday message -
            practical, direct, and connected to what you are actually going through.
            Choose how you want to receive it.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/27752592555?text=Hi%2C%20please%20add%20me%20to%20the%20weekly%20devotional%20list."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#25d366] text-[#1a1a1a] font-bold px-7 py-3 rounded-lg hover:bg-[#1ebe5d] transition-colors"
            >
              Subscribe via WhatsApp →
            </a>
            <a
              href="mailto:info@fountaingrace.org?subject=Weekly%20Devotional%20Signup&body=Hi%2C%20please%20add%20me%20to%20the%20weekly%20devotional%20email%20list.%0A%0AMy%20name%20is%3A%20"
              className="inline-block bg-[#2a9df4] text-white font-bold px-7 py-3 rounded-lg hover:bg-[#1a8de4] transition-colors"
            >
              Subscribe via Email →
            </a>
          </div>
          <p className="text-xs text-[#7d7d7d] mt-4 max-w-md mx-auto leading-relaxed">
            By subscribing you consent to Fountain of Grace International (NPO 316-193) sending you a weekly devotional. Your details are used only for this purpose and are never sold or shared. Unsubscribe any time by replying STOP or UNSUBSCRIBE. See our{' '}
            <a href="/privacy-policy" className="underline hover:text-[#008080]">Privacy Policy</a>.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#008080] py-14 px-4 sm:px-6">
        <div className="section-container text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Come and hear this in person - Pretoria North
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Every Sunday at 09:00. Fountain of Grace International, 323 B Danie Theron Street, Pretoria North.
          </p>
          <Link href="/plan-your-visit" className="btn-primary">
            Plan Your Visit
          </Link>
        </div>
      </section>
    </>
  )
}
