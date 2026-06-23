import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Are You Actually Being Transformed or Just Showing Up?",
  description: "Feeling stuck spiritually? Pastor Ricardo Zaal of Pretoria North asks the hard question - is your church truly transforming you? A bold word from Joel 2.",
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/sermons/if-your-church-does-not-change-you-change-your-church',
  },
  openGraph: {
    title: "Are You Actually Being Transformed or Just Showing Up?",
    description: "If your church is not changing you, something is missing. Pastor Ricardo Zaal delivers a bold, Spirit-led challenge from Joel 2.",
    type: 'article',
    images: [{ url: "https://img.youtube.com/vi/Ox1mbbUJoS4/sddefault.jpg", width: 640, height: 480, alt: "Are You Actually Being Transformed or Just Showing Up? - Fountain of Grace International" }],
    url: 'https://www.fountaingrace.org/sermons/if-your-church-does-not-change-you-change-your-church',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "Are You Actually Being Transformed or Just Showing Up?",
    description: "Pastor Ricardo Zaal of Fountain of Grace International in Pretoria North challenges believers to evaluate whether their church is truly producing spiritual transformation. Drawing from Joel 2:27-28, he makes the case that where the Spirit of God is present, change is inevitable.",
    author: { '@type': 'Person', name: 'Pastor Ricardo Zaal' },
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
    datePublished: '2023-07-02T12:00:00+02:00',
    url: 'https://www.fountaingrace.org/sermons/if-your-church-does-not-change-you-change-your-church',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Sermons', item: 'https://www.fountaingrace.org/sermons' },
      { '@type': 'ListItem', position: 3, name: "Are You Actually Being Transformed or Just Showing Up?", item: 'https://www.fountaingrace.org/sermons/if-your-church-does-not-change-you-change-your-church' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "What does Joel 2:28 say about the Holy Spirit?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Joel 2:28 in the KJV says, And it shall come to pass afterward that I will pour out my spirit upon all flesh, and your sons and your daughters shall prophesy, your old men shall dream dreams, your young men shall see visions. This verse is a direct promise from God that His Spirit would be poured out on believers, evidenced by prophecy, dreams, and visions. Pastor Ricardo uses this scripture to show that a Spirit-filled church should carry these visible marks of God's presence.",
        },
      },
      {
        '@type': 'Question',
        name: "How do I know if I should leave my church?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "If you have been attending a church for a long time and sense no growth, no conviction, and no evident presence of the Holy Spirit, it may be time to ask honest questions about whether Jesus is truly the centre of that church. Pastor Ricardo points out that a church centred on the personality of its leader rather than on Jesus is a warning sign. Where Jesus is present, change is inevitable - if change is absent, something is missing.",
        },
      },
      {
        '@type': 'Question',
        name: "How can I tell if the Holy Spirit is present in a church?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "According to Pastor Ricardo, drawing from Joel 2 and the broader New Testament, the presence of the Holy Spirit in a church produces conviction, transformation, and spiritual gifts such as prophecy and vision. If a congregation regularly meets with no sense of God's Spirit moving and no change in the lives of its members, that is a serious concern. The Spirit was sent by Jesus Himself to teach and guide believers into all truth, as He promised before His ascension.",
        },
      },
      {
        '@type': 'Question',
        name: "What is the sign of a church that is not centred on Jesus?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Pastor Ricardo identifies a clear warning sign - when the leader or church culture constantly focuses on self, using language centred on their own greatness or achievements rather than pointing people to Jesus, it reveals that Jesus is not truly the centre. A genuine church should make Jesus evident in every gathering so that anyone who comes into contact with its members sees Jesus reflected in their lives. If people cannot see Jesus through you, the church environment may not be producing real transformation.",
        },
      }
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: "Are You Actually Being Transformed or Just Showing Up?",
    description: "Are You Actually Being Transformed or Just Showing Up?",
    thumbnailUrl: 'https://img.youtube.com/vi/Ox1mbbUJoS4/maxresdefault.jpg',
    uploadDate: '2023-07-02T12:00:00+02:00',
    embedUrl: 'https://www.youtube.com/embed/Ox1mbbUJoS4',
    url: 'https://www.fountaingrace.org/sermons/if-your-church-does-not-change-you-change-your-church',
    author: { '@type': 'Person', name: 'Pastor Ricardo Zaal' },
    publisher: {
      '@type': 'Organization',
      name: 'Fountain of Grace International',
      url: 'https://www.fountaingrace.org',
    },
  }
]

const sd = {
  "headline": "Are You Actually Being Transformed or Just Showing Up?",
  "intro": "Sitting in a church week after week but feeling no different can be one of the most quietly painful experiences a believer faces. Pastor Ricardo Zaal tackles this head-on with a bold statement - if your church does not change you, change your church. This sermon from Fountain of Grace International in Pretoria North is a Spirit-filled call to stop settling for a church experience that leaves you exactly where you started.",
  "scripture": "Joel 2:27-28",
  "quote": "If your church does not change you, change your church - because where Jesus is, change is not optional. He cannot enter a room and leave it the same.",
  "dateDisplay": "2 July 2023",
  "sections": [
    {
      "heading": "The Question That Makes Church People Uncomfortable",
      "paragraphs": [
        "There are few things more quietly painful than sitting in a church week after week, month after month, and realising that nothing is changing inside you. You know the songs. You know the order of service. You even know which row you prefer to sit in. But if someone asked you honestly whether the church is transforming you, making you more like Jesus, producing growth and conviction and hunger for God - what would your answer be? Pastor Ricardo Zaal opens this message with a statement that cuts straight through religious comfort: if your church does not change you, change your church. It is not a statement made to cause division. It is a statement made to provoke honest reflection.",
        "The context matters. Pastor Ricardo preached this message on a Sunday morning in Pretoria North when the equipment failed, the microphone would not cooperate, and everything seemed to conspire against the service happening at all. Yet he pressed on, because he understood that the assignment God places on a person does not lift when circumstances become inconvenient. That very experience of pushing through distraction became the doorway into the message - because the same distractions that try to stop a preacher from delivering the word are the same subtle forces that keep believers stuck in environments that are not producing the fruit God intends for their lives."
      ]
    },
    {
      "heading": "Where Jesus Is, Change Is Not Optional",
      "paragraphs": [
        "Pastor Ricardo makes a clear and bold claim: if Jesus is truly present in a church, change will happen. It is not a maybe. It is not dependent on how talented the worship team is or how polished the preaching sounds. Where Jesus is, transformation follows as naturally as light follows sunrise. He points to the accounts in the Gospels where people were so desperate to get near Jesus that they broke open a roof to lower a man down to Him. That kind of hunger, that kind of expectation, is what a genuine encounter with Jesus produces. If a church environment is not stirring that hunger in people, it is worth asking whether Jesus is truly at the centre of it.",
        "One of the warning signs Pastor Ricardo identifies is a church culture where the leader constantly draws attention to themselves - where the message is more about the man than about the Master. When the language of a church revolves around the personality, achievements, or greatness of its leader, and Jesus is pushed to the edges, that is not a minor issue. It is a fundamental problem. God's word through the Apostle Paul makes it clear that one person plants, another waters, but it is God alone who gives the increase. A church that forgets this and elevates a human voice above the voice of the Holy Spirit is a church where genuine growth will eventually stop."
      ]
    },
    {
      "heading": "Joel 2 and the Evidence of a Spirit-Filled Church",
      "paragraphs": [
        "Pastor Ricardo anchors the message in Joel 2:27-28, where the Lord declares, And ye shall know that I am in the midst of Israel, and that I am the Lord your God, and none else, and my people shall never be ashamed. And it shall come to pass afterward that I will pour out my spirit upon all flesh, and your sons and your daughters shall prophesy, your old men shall dream dreams, your young men shall see visions. This promise was not given for a single generation. It was given as a marker of what life looks like when God is genuinely present among His people. The outpouring of the Spirit is the evidence. Prophecy, dreams, and visions are not decorations on top of church life - they are signs that God is at home in a congregation.",
        "For any believer who has sat in services that feel empty of Spirit, who has gone through the motions of worship without any sense of God's nearness, this passage is both a comfort and a challenge. It is a comfort because it shows what God wants for His people - His Spirit poured out, His presence tangible and real. It is a challenge because it invites honest comparison. If that outpouring has not been sensed in your church for a long season, it is not enough to simply carry on out of loyalty or habit. Pastor Ricardo calls believers to take responsibility for their own spiritual environment, to seek out a place where the Spirit of God is genuinely at work, and to stop allowing the fear of change to keep them spiritually stagnant."
      ]
    },
    {
      "heading": "Encouragement for Leaders Who Are Pushing Through",
      "paragraphs": [
        "While the sermon is primarily a challenge to church members, Pastor Ricardo also carries a strong word for every pastor, elder, deacon, and anyone who stands up to minister the word in any setting - whether that is a polished church building, a small lounge gathering, or a street corner in Pretoria North. He speaks directly to the discouragement that comes when things do not go to plan, when the crowd is small, when the technology fails, and when it feels like the effort is not producing visible results. His word is simple and clear - do not stop pushing. Do not stop pressing forward with the assignment God has given you.",
        "He reminds leaders that the person who benefits most from preparation is often the one doing the preparing. Every hour spent with God in study, in prayer, in wrestling with a text, is an hour of transformation for the one who is about to stand and preach. Any minute with God is better than a thousand years in what this world offers. This is not a cliche - it is a conviction that shapes how a Spirit-filled minister approaches their calling. Whether two people or two hundred people are in the room, the assignment remains the same. Start small, be faithful, and trust that God is bigger than the smallness of any beginning."
      ]
    }
  ],
  "faqs": [
    {
      "q": "What does Joel 2:28 say about the Holy Spirit?",
      "a": "Joel 2:28 in the KJV says, And it shall come to pass afterward that I will pour out my spirit upon all flesh, and your sons and your daughters shall prophesy, your old men shall dream dreams, your young men shall see visions. This verse is a direct promise from God that His Spirit would be poured out on believers, evidenced by prophecy, dreams, and visions. Pastor Ricardo uses this scripture to show that a Spirit-filled church should carry these visible marks of God's presence."
    },
    {
      "q": "How do I know if I should leave my church?",
      "a": "If you have been attending a church for a long time and sense no growth, no conviction, and no evident presence of the Holy Spirit, it may be time to ask honest questions about whether Jesus is truly the centre of that church. Pastor Ricardo points out that a church centred on the personality of its leader rather than on Jesus is a warning sign. Where Jesus is present, change is inevitable - if change is absent, something is missing."
    },
    {
      "q": "How can I tell if the Holy Spirit is present in a church?",
      "a": "According to Pastor Ricardo, drawing from Joel 2 and the broader New Testament, the presence of the Holy Spirit in a church produces conviction, transformation, and spiritual gifts such as prophecy and vision. If a congregation regularly meets with no sense of God's Spirit moving and no change in the lives of its members, that is a serious concern. The Spirit was sent by Jesus Himself to teach and guide believers into all truth, as He promised before His ascension."
    },
    {
      "q": "What is the sign of a church that is not centred on Jesus?",
      "a": "Pastor Ricardo identifies a clear warning sign - when the leader or church culture constantly focuses on self, using language centred on their own greatness or achievements rather than pointing people to Jesus, it reveals that Jesus is not truly the centre. A genuine church should make Jesus evident in every gathering so that anyone who comes into contact with its members sees Jesus reflected in their lives. If people cannot see Jesus through you, the church environment may not be producing real transformation."
    }
  ],
  "steps": [
    "Honestly evaluate your spiritual growth over the past year and identify whether your church environment is producing genuine change in your character, hunger for God, and love for people - anchor this in 2 Corinthians 3:18 which says we are changed from glory to glory by the Spirit of the Lord.",
    "Look for the evidence of the Holy Spirit in your church - not just emotional atmosphere but conviction, transformation, and the gifts described in Joel 2:28 - and if those marks are consistently absent, begin praying with an open heart about whether God is calling you somewhere else.",
    "If you are a leader or minister, recommit to your assignment regardless of circumstances - write down where you are spiritually today so you can measure growth, and remember that any time spent in God's presence preparing to serve others is time that transforms you first."
  ]
}

type Section = { heading: string; paragraphs: string[] }
type Faq     = { q: string; a: string }

const sermonTranscript = "Jesus, you are worthy.You are worthy to be praised.You are worthy to be praised.And we got to give you the glory, the honor, and the things that you deserve is only the best because that's who you are.You are the best, my God.Heavenly Father, this morning I stand before you, Father God, knowing, Father God, that I am nothing, and with You, I'm everything.And as I'm- I am nothing this morning, I come to you, my God, knowing, Father God, that I can't do anything without You.And therefore, I bring this morning to You.This morning, everybody that has come up to the House of the Lord, let them be the one that will be seeing You evident in this place this morning.Heavenly Father, I thank You.I give You the praise.I give You the honor that You deserve.We thank You.We thank You.In the mighty name of Jesus.We thank You in the mighty name of Jesus.Wow.Uh, sometimes I'm just wondering, how does it happen that, uh, um, that certain things can, can distract me so much?It can distract you so much that certain things that is supposed to happen in a, in a certain time, you don't even do that because of the distraction.And one of the, uh, the things that I can say to you, I'm, um, I went to a, uh, a church over the, the, uh, past 2 weeks, and, uh, we had the same, uh, thing that I saw immediately when, when, when there's no music, um, in our Pentecostal church, churches, or, or there's no electricityLet me rather say it that way, because there was music.Um, all the, the mics were set up.All the, uh, instruments were set up.Everything was set up.But just because there is no electricity, we can't be speaking with a mic and we can't be speaking with a, a whatever.You, you, you understand?Um, so what then happened is that it, it is a little bit of a distraction for some of us that are so used to having a mic when we speak.For argument's sake, I, um, always use a mic when I, uh, when I preach because of my voice that is not strong enough.And therefore, whenever I preach, I doWhenever I preach, I do, uh, uh, put up, uh, some- something that, that enhance my voice, um, because of the voice is not always that, that good.So this morning, I wanna, I wanna, uh, also make sure that you understand that distractions are just, just a way of getting you to do not what you're supposed to do.So this morning, it's not part of my message, but I just wanna bring this up to you so that you can understand, um, when I, when I started the service a few, a few, um, minutes ago, or, or, uh, half an hour or so ago, all my, uh, my electrical eq- equipment just doesn't work and everything started making a ripple effect.first it's, uh, it's, it's the mic that doesn't, didn't wanted to work.Secondly, then it's the camera that doesn't want to work.And I, and I ended up saying, Wow, okay.I might as well, well just leave it.And then I said, No, but God has put an assignment onto my life, an assignment to make sure that I do bring up the message of God.And whenever the message of God is preached, it helps me as a person to also be a part of the preaching, not just preaching for somebody, but also preaching for myself.So I wanna take this opportunity and thank you for, for, for coming to church.Thank you this morning for, for embracing, uh, embracing us, um, uh, in this, in your, with your presence this morning, uh, for coming up to the House of the Lord, because they were saying it was a good thing to come up to the House of the Lord, isn't it?They gotmy back.They always have my back, regardless whatever happen, I have my sonUh, uh, my son and my 3 daughters, as well as my wife.And if you can see, we, the 6 of us, we already have a whole ministry set up because each and every one of us, um, is, is, is always there.So this morning, I wanna, I wanna greet you also, um, every apostle, every, uh, pastor that is listening to this.I wanna, uh, thank you for your life, and I wanna thank God for your life, um, setting up, um, e- everything for us as, uh, uh, also followers.Sometimes because when I went to the Northern Cape last week as well, I found myself, um, sitting under anointing of, uh, so many great men of God.And I, and I realized that, um, certain, uh, people don't understand their, their, their, their, their strength in God.Certain peoples don't u- uh, people don't understand who they are in God.And certain people don't understand the greatness that they have in God.And therefore, this morning, I wanna, I wanna tell you that you are great.You, men of God, that just- just because of you standing in front of a church, already standing in front with a mic, or regardless whether it's a mic or it's on the street, uh- uh- um, giving the good message, uh- uh, or the gospel of Jesus to people, that alone is already enough that you can ta- tap yourself on the back because some doesn't even know how to do it.Some doesn't even know where to start.But all I can say to you this morning, that y- you just need to start small and as you start small, God will do the great things because in your, uh, being thinking that you have a small something that is set up, God is bigger than the small that you have.So this morning, if God is bigger, just remind yourself that you don't need any human being- human beings, uh- uh- um, uh, we call it, um, intervention.You don't need any human being, uh- uh- uh, I'm looking for a specific word, uh- uhUh, \uc774\ub9cc se goedkeuring, kom ek het vir julle in Afrikaans s\u00ea.You don't need, you didn't, don't need somebody, uh, to tell you, No, you are great.You are wonderful.You are good.You are awesome.No, no, no.No need for any of those.As long as you- you have made what God has asked you, go and, uh, go out in the world and preach the gospel, the good news, preach the good news.And what is the good news?That Jesus has died on the cross for each and every one of us.And when He died on the cross here, He actually rose so that we can, uh, be sinful and all this sin that has been within us, this can be changed as well.So this morning, I wanna greet you and say to you that don't youMen of God, don't you worry about, uh, whether there's 2 or 3 in your house.Don't you worry whether- whether there is a, there's sound in your house, whether there's the mic is on.Don't worry about that because these are things to derail us from what we supposed to do.So when things is not going according to plan, don't pushing on.Don't stop pushing on.Don't stop pushing on.Please don't stop pushing on because once you start pushing, it helps you as a person to also grow because what happen is most of the time whenever you- you prepare something for somebody, you get a growth out of it because you as a- as a- as a pastor, as a bishop, as a- as a leader, elder, deacon, you are the one that actually gets lifted because you spend the time with God.And when you do spend the time with God, any minute with God is better than a thousand years in the world.So any minute with God is better than a thousand years in the world.Any minute with God is better than a thousand years in the world because of any minute with God, it is the world, it is everything because you have God in.Everything is in God.Everything is in God.So the moment you spent your time with God, you actually telling yourself that you- you prefer Jesus rather than this world.So- so thank you for- for- for- for also embracing me with your presence.If you do listen to this afterwards, um, I salute you.I salute you, man of God.I salute you, woman of God, because just remember when I say apostles, deacons, and all that, I don't just mean a- a- a- a certain gender.I mean the- the person, whether it's male or female.Hallelujah.So my message entitled this morning is a very controversial, uh, message and the controversals- uh, controversialcy of this message is something that I want you to actually start to think about it.And I want you to actually make sure that whatever I'm saying to you this morning, let it sink into you so that you can understand the greater thing behind this know what God has asked us to do.The greater thing behind this is to have one thing in common and the one thing in common is so that everyone that comes in contact with you, they must see Jesus.If they can't see Jesus through you, it means that you don't have Jesus yourself.So this morning, I wanna preach a message that is cal- entitled, \"If Your Church Does Not Change You, Change Your Church.\"I'm repeating this.If your church does not change you, change your church, because this is an anonymous, um, um, uh, uh, uh, something that I heard from somebody.I can'tI, I can't take credit for this, because it's not my own words.It's word that I w- heard from somebody, and God has put it into my spirit to also make sure that this is something that I should be preaching, because remember, the Bible says it so nicely that weeach and every one is, is, is supposed to build our own road to salvation, our own salvation.You have to build your own salvation.So if your church does not change you, change your church.That is, that is the message in itself.I can actually stop and say, \"Amen,\" and go away.But I want to make you understand why I'm saying what I'm saying.If your church does not change you, change your church.So if your church does not change you, change your church.Let me start off by one thing to say.Number one, if Jesus is not in your church, leave the church and go.Ricardo, what are you saying?I said, if Jesus is not in your church, leave the church and go, because if God Himself is not in your church, I- I- ifHe's not evident in your church, I'm telling you today, leave the church.Because how would you know that He's not in your church?There's a certain things that I can tell you that, uh, 1, uh, how to know that He is not evident in the church.Number one is that when the man of God that is standing in front, or any, uh, uh, um, uh, uh, uh, worshipper or any, uh, uh, uh, what, what do you call it?Um, church director, um, uh, um, a um, a.If any or, or church keep on saying, \"Me, me, me, me, me, me.I am a, an, a, uh,\" then you should, should start asking the question, if it's all about you, where is Jesus in this?Because if God is not in it, then it means that it's not a church that you should be a part of, because once the man of God keeps on coming back and say, \"I, I, I,\" then it tells you that, uh, where is Jesus in that?So therefore, I'm saying to you, if your church does not change you, it means that Jesus is not in the church, and therefore there is no change because where Jesus comes, change has to come.Whenever Jesus enter into a room, if you go into the Bible, and you will see, see that people even break the roof out just to make contact with Jesus, because they knew the value in Jesus.So therefore, this morning, if Jesus is not in your church, step out of the church and go.If Jesus is not in your church, step out of that church and go, because that is something that you are, uh, uh, putting into your, your own self, that you are actually stopping you from gr- growing as well, because Jesus is the only one who gives growth.He said it, uh, so nicely that, uh, um, the one apostle came to plant the seed.The one has come to water, but who has come to grown, to grow?Who has come to grow?He said, \"Only me, I'm the one that can make it grow.\"So this morning, if Jesus is not in your church, it means that there won't be growth.Now, when you say growth, you should be having a, a tendency of to look where you are at the moment to see where you are heading.If you don't know where you are, you're not knowing if you are growing or not.firstly, the, the reason that you don't grow is because you don't know where you are, and the reason that you don't know that you areif you are growing or stagnating or go- moving backwards is because you don't know where you are.So once you know where you are, you can actually go, uh, go back and say, \"Wow, now I know whywhere I am, I know whywhere I'm heading.\"So if Jesus is in the church, the moment you enter into the church, you will sense His presence, you will sense His, His spirit.And the spirit is there to convict you of all truth, and the Spirit of God, if he'sif the Spirit of God is not upon you, then you should leave the church, because the, the, theGod has said, uh, before He left, He left, uh, uh, He left this Earth, He said to, \"Um, I will leave my spirit.\"And when He left His spirit, uh, behind, He said, \"The spirit will be there to teach you, to guide you, in, in, in all, uh, the ways.\"So if you feel or you sense that there's no spirit in, in the church, then you should be asking yourself, \"Is it myself or is it the church?\"So if the Spirit of God is within you, because he said it in Joel 2, uh, verseJoel 2, um, uh, is, uh, from 27, um, I think it's 28.Okay, so let me, let me go to Joel, uh, uh, Joel, Joel, uh, 2, um, verse 27 first now.\"And ye shall know that I am in the midst of Israel, and that I am the Lord your God, and none else, and my people shall never be ashamed.\"So how would you know that you are actually in the right church, is that where God is present, and you shall know that I am in the midst of Israel?So when you know that God is in the midst of where you are, these things shall follow to you.And if God is in the midst, \"And that I am the Lord your God, and none else, and my people shall never be ashamed,\" then, \"It shall come to pass afterwards that I will pour out my spirit upon all flesh, and your sons and your daughters shall prophesy.Your old menuh, shall dream dreams.Your young men shall see visions.So this is why I'm saying to you, if you think that the spirit of God is not in your church, or it is- it has been for far long time that you have not sensed any spirit in- 0 of- of God in your church, then you should be leaving that church, because the church is supposed to ignite the spirit of God in your life.Let the fire of the Holy Ghost come upon you, so when the fire of the Holy Ghost comes upon you, certain things will happen because of the- the spirit of God will teach you.You will have some words that you can't understand, \"Wow, have I just said these words?\"Because the spirit of God has come upon you and it makes you to be having wisdom.Wisdom that- that- that knowledge that is so, so high that you can't understand how- where did it come from?That is the spirit of God, and when the spirit of God comes upon you, sometimes you will find yourself speaking in another tongue, and it's not all f- for everybody the same, because some people think that, uh, when you can't speak in tongues you don't have the Holy Spirit.Here, I'm bringing it back to you and saying to you, according to the Bible, it says thatOh, pardon me.\"And it shall come to pass afterwards that I will pour out my spirit upon all flesh.\"So it means that every flesh upon this Earth has been having the- the spirit of God, so regardless whether you- you acknowledge him or not, you have the spirit of God already upon your flesh.The only thing for you is to ignite it.Ignite it, and when- w- when you feel that it's ignited, the moment you- you find yourself, some people have a tendency of being joyful.They- they- they don't understand what kind of joy they have.Some have a tendency of just feeling that they just want to cry, some have the tendency when the- when the- uh, uh, uhthe Holy Spirit comes upon them, they- they- they start jumping, jumping, jumping, not knowing what to do.Some, when the- the spirit of God comes upon you, there- you will even- you will even see, uh, angels surrounding you.so many s- uh, ways that the spirit of God comes upon you, and so many ways that it manifests, and when it manifests on somebody else, ask God, \"W- w- w- whyBut I cannot have this, uh, uh, uh, person just next to me having the- the spirit of God so evidently in their lives and I'm sitting just here and thinking, \"When is the spirit of God coming upon me?\"The spirit of God is not the one that, uh, a man of God should be laying hands on you, and then you start in- i- i- slain in the spirit.It's not how the Holy Spirit works.The Holy Spirit have a way of making you feel, even if you'veeven- even if the man of God has touched you and you didn't feel, it does not mean that you don't have the spirit of God.Please don't get me wrong, because some people, uh, wanna see evidence of the spirit of God to know that they've been under the spirit of God.They wanna be slain by the spirit, and some will tell you, \"But I just felt, because I- I feel like everybody who's next to me is, uh, has felt, um, that they're falling down and I- I didn't fall down, so I didn't want us to be the odd one out.\"I'm telling you, you are the one that is stopping yourself from gaining the spirit of God, so whenever they are slain in the spirit and you feel there's no- nothing, stop falling down.Stand up and stand straight and say, \"I refuse to fall down if the spirit of God doesn't, uh, take me down.I refuse to fall down if the spirit of God doesn't take me down here.\"Because, uh, people see different ways of how the spirit of God comes upon you, and how the spirit of God is supposed to be.There is no right way, there is no wrong way.The spirit of God comes upon you in your own unique way, so in your own unique way you will understand when the spirit of God comes upon you.Some, uhSome have e- even asked themself, \"But am I really, um, uh, being phased, my God, when you have already said to, um, some time ago, 'God, I am praying that, uh, my sins may be forgiven.I'm taking you up as my Lord and savior.'\" You have prayed the prayer.You have prayed the prayer, and you have, uh, asked, uh, God to forgive your sins, and still youbecause you don't see any evidence of the Holy Spirit in your life, thatNow, you, you, you f- feel, feel by yourself that, \"I am not saved.\"No, uh, uh, uh, son of God, I'm telling you, for those who confess with their mouth that Jesus is the son of God, those who confess with their mouth that Jesus is their redeemer, their friend, their Lord and their savior, then you are a son of God.You just have to step up in faith and say, \"Holy Spirit, I have not been feeling e- f- you evident in my life.Although you are there already, please show me a sign that you are there.\"So this morning, I wanna take this opportunity and say to you that if your church does not change, you change your church.Why do you wanna change your church?Because you wanna change your church if God is not evident in that place.If God is not evident in that place, if the Holy Spirit is not evident in the place, if Jesus is not evident in the place, it means that the Word of God is not preached in, in that place.So this morning, I wanna give you another sign that says that you should be leaving your, yourYou should be leaving your church because they don't preach the Word of God, because the Word of God is a, is a sword that cuts through bone and marrow, cuts through bone and marrow, cuts through bone and marrow.The Word of God, when it goes out, it will never return void to him.That is the Word of God.The Word of God is so powerful that he said in yourit is whatIn the beginning was the Word, and the Word was with God and theand, uh, the Word was God.So if God's Word is not within that church, if they don't say \"Jesus\" every time, and \"Jesus said,\" and \"God said\" this and \"God said\" that, and they go back to the Bible, which is the Word of God, which is our evident sign ofPardon me.It'sAnd that is our evident sign of God that, that God is present in that place because sometimes you find yourself getting into a church where they s- they come in.The next thing you find out, oh, the spirit of God works so powerfully, but you have not seen a, uh, a man of God open a b- uh, a book.Then you ask yourself, \"Why?Why is the spirit of God so evident in this place, but he didn't th- open the Bible?\"Then you ask yourself, \"Oh, this is where the spirit of God takes over, and it's no need for a Word of God to come out.\"So that is not the one I'm talking about, but the one I'm talking about thatIf somebody comes out and tell you stories and tell you stories, one, two, and three, four, five, and then at the end of the day, you ask yourself, \"But where was theWhere was the, the, the, uh, the, the message in all of this?\"It sounds like tales.It sounds like fable.Where is the message?Where is the good news, the gospel of Jesus?Then you should be, uh, telling yourself if this happened once, if this happened twice, if this happened thrice, after the third time, leave your church, because the church is not preaching the Word of God.So this morning, I wanna tell you this morning that if, if God is not there, Jesus and, and the Holy Spirit is not there, and the Word of God is not in that church, you should be leaving your church because your church won't change you.If the Word of God is not preached out, if the Word of God is not spoken into your life, it means that you won't see any changes because the Word of God is, uh, is, is, is, is the spirit of God that, that, thatwhen he speaks, he brings forth good things.When he speaks, he brings forth things that is of God.So this morning, I wanna say to you that if the Word of God goes out, and you receive the Word of God, it will bring change into your life, because the Word of God says it so nicely also that when the Word of God goes out, it will not come back to its voice.So meaning to say that if I preach you good news, the good news should, uh, should trigger you from inside.The good news should make you feel good about, about yourself, not just about yourself, about your situation.\"I was in this, and I'm going to that.\"So where you are, you need to be, uh, moving forward.So if you don't move forward, it means that something is not, uh, right in your church.You need to change your church.So this morning, this maymight be a con- uh, uh, a message that sounds like, \"Yo, what are you trying to, to, to, to, to break down churches?\"I am not trying to do that.I'm just trying to tell you that it is very important to understand that certain things, if it doesn't change you, it means that you are at the wrong place.So this morning, I wanna, I wanna bring somebody, uh, to, uh, to, uh, to your attention this morning.Somebody who was actually with Jesus himself.He was actually with Jesus himself.This is, um, this is somebody that actually walked daily with Jesus.He was the one that was actually running finances in the church, and this is, umThis is somebody that was called Judas.But imagine somebody who is so close to Jesus, but go and hang himself because of the things that he has done, because of the conscious, uh, things that, that happened in his life.If certain things does not change you in your church, you should be asking yourself, \"Am I in the right place?Am I, uh, taking up the right things that God is asking y- you to do?\"So this morning, I wanna tell you this morning that in the mighty name of Jesus that every time you go up to church, and you don't feel that you have been changed for better, but rather for, uh, for, for worse, uh, then you should be changing your church as well because when you, you're looking at it, there are certain people that, that comes into your life.They add value, and s- uh, uh, some come just to take from you.Now, when they take from you, it does not mean that they do not add value to your life.They do add value to your life by reason being that most of the time, you find yourself that you actually are the one-When you give, you are growing in giving.The more you give, the more you grow.The more you give, the more you grow.You start giving by giving one, one rand.By the time you find yourself, you're giving 10 rand.By the time youThe more you give, you, you, you realize byThe 10 rand doesn't, uh, uh, add up anymore.You find yourself giving 100,000 and then, uh, 10,000.By the time you realize it's a 100,000, by the time you realize it's a 200,000, by the time you realizeYou gave, give away a million, the million doesn't, uh, take away from you.It actually add upon to your life.So therefore, when people come into your life and they add value to you by taking what you have, what you have, they add a blessing into your life because once they take from you, adds value to your life because you feel good by giving.And by giving, it's not just that you feel good, but it's a word of God that actually come to pass in your life because He says that when you give, God will give you back a good measure, pressed down, shaken together, running over.So where the adding of value is when you give somebody and they don't give anything back to you, it does not add value to their life, it add value to your life.So you don't have to look for something to come back to you.You have to just give, because by you giving, you're already listening to what the word of God says.So if the church is, that, that you arewithin, within you, does not add value to your life, it does not have to be.You don't have to be there, because once you don't see any value that you give, that is a sign to ask yourself, \"What am I doing wrong?\"And if you can't find something wrong, then you should be asking, \"Let me, uh, just, uh, test out, uh, some, uh, another church.\"Because it's very important for you to change your church rather than to, to be found in hell where some, some people have been found because of the, the wrong people that they, they, they've been, they've been, uh, uh, following all along because of wrong teaching, because the Bible says it, uh, so nicely that, uh, uh, in the end times, there will be some that comes with false doctrines and these false doctrines are there to, to de- detour you.So once you don't see any evidence in your life changing the, to the better, then you should be changing your, your church.So this morning, um, if your church does not change you, change your church.If your church does not change you, change your church, because I am so much, uh, uh, asking, uh, asking you about all these things, because remember, if you don't change, it means that, that, that the church that you are in does not, uh, uh, uh, uh, value growing, uh, uh, into your spiritual growth because some people might come to you just as an, um, um, yes, a boy, and then by the time you realize, you end up beinga grown-up.So if your church, uh, help you in growing from being, um, uh, uh, a boy to a man, then it might be something else.But that is not the growth I'm talking about.I'm specifically talking about your growth in spiritual sense, knowing that when the Spirit of God is speaking to you, knowing that whenever you don't see the Spirit of God, start asking, \"Why am I not having any evidence of the Spirit of God?\"So this morning, if I'm saying to you, \"Change your church,\" I don't mean to say that you should change your, the, the, the men that you are serving at any time, but I'm saying to you, change the person or the people that does not let you grow.So in, in certain cases, you find yourself that if you don't change, it means that your church don't share testimony.What am I saying?If you don't change, it means your church doesn't share testimonies, because according to Revelation, Revelation 12, um, the, the 11th verse, it, it says it so nicely, \"And they have overcome by the blood of the Lamb and by the word of their testimonies.\"because according to Revelation, Revelation 12, um, the, the 11th verse, it, it says it so nicely, and they have overcome by the blood of the Lamb and by the word of their testimonies, because the devil is actually on the Earth looking and seeing who he can devour.But if you, you give your testimony out or somebody gives testimony out, it means that you get, uh, to overcome the devil by the word of your testimony, by the word of your testimony.So if your church does not change you, ask why theydon't, don't they give testimonies?What is it about the testimonies?And I'm talking about testimonies saying that, \"God has been doing this in my life, now He's doing that.Now He's been doing this in my life, now He's doing that.Now He's been doing this in my life, now He's doing that.\"So if God is telling you there are certain things that, that has been, uh, has been changed in your, to your life, then it means that you are in the right, uh, church.Testimonies has gone out.Testimonies has gone out.Testimonies has gone out.So if your church does not change you, change your church.Go on.Now this morning, I wanna bring, uh, something to, to, to your attention to make you understand that if your church does not give testimonies, it means that the devil can easily, uh, 2foot you.The devil can easily 2foot you because of what happen is that by, uh, you not sharing your wo- your, your word of your testimony, it makes you vulnerable to him.So that whenever the Bible says, \"Let the weak say, 'I'm strong.'\" Let the, let the, uh, let the sick say, \"I'm healed,\" then it means that you, as a person, you already come to the devil and says, \"Hey, devil, you might be saying I'm sick, but God has already said in His word He died on the cross for my iniquity.\"So this morning, if your testimony goes out and your testimony doesn't help somebody, I'm saying to you this morning, in the mighty name of Jesus Christ, our Lord and Savior, take up your cross and say, \"I wanna follow you, Jesus.I wanna follow you, God.I wanna be the one that is, that, that is showing that you are evident because, uh, when you are in the midst of me, people will see the evidence in my life.People will see the evidence in my life.People will see the evidence in my life.\"\"Therefore, I wanna ask you, God, in the mighty name of Jesus, please prove that you are in my life because if you are in my life, I know at least I have what you have given to me.I grow what you have given, grown to me.\"So this morning, if your church does not change you, change your church.Uh, I- if, if your church goes out.Pardon.If your church goes out and it doesn't pray for you, leave your church because your church is not praying for you.It means that if your church is not praying for you, you will not go anywhere.Let me, let me do this.Um, um, I'm trying to, to, uh, think which scripture is it again?second.Give me a second.Um, um, can't IWhy can't I remember the scripture again?Uh, okay.But I'll, I'll get to the sc- I'll go- I'll get to the scripture just now.NowOh, oh, yes, yes, yes, yes, yes, yes.I'm right.I'm right.I'm right.I was just a bit, uh, confused to think, but let me, let me do this.Yeah, let me do this.James 5, verse 16.Verse 16, \"Confess your fault one to another and pray one for another, that ye may be healed.The effectual fervent prayer of a righteous man availeth much.\"So, so what the Bible is saying here is that if your church does not pray for you, it means that something is wrong, something is wrong.You need to have that prayer because theyIt means that there is not effectual prayers and there's no righteous men in your church.You got that?If your church does not pray for you, it means that there is no effectual fervent prayers of the righteous men.A righteous man that is in your church is the person praysUh, the Bible says, \"The prayer of the righteous availeth much.\"The fervent, the effectual or fer- fervent prayers of the righteous, uh, availeth much.So in this case, if your church does not have a righteous man, it means that, uh, you don't avail anything, anything doesn't come to you, anything that you pray, uh, that the prayers do does not help you.So this morning, I wanna say to you that if your church does not change you, change your church, man.If your church does not change you, change your church.I wanna stop with this.I wanna stop with this and say to you that God has chosen you at a certain place to be for a certain reason.And if that reason is not Jesus Himself or God Himself, please change your, the reason for being there.Some places, uh, like your workplace, you might be going to your workplace just because you think that you need to have a, uh, uh, an income.But when you are there, ask God, what is it?What is the reason that he has put you there?has put you there for a specific reason.And that reason, you should always ask, \"What is it?\"Because if your church doesn't show you that where you are, you can also, uh, give the goodness over, it means that your church is not necessary for you to have.If your church doesn't say to you, \"You don't need to be on a pulpit to preach Jesus,\" your church is not the right church to be.It is not everybody that is called upon, uh, a pulpit to make a difference in the world.Some, by just giving out from their business to somebody who is in need, is already preaching the gospel.If your church tells you that, \"You are not a man of God because you're not standing on a pulpit,\" it means you have the wrong church, my friend.You're in the wrong church, because the Church of God will tell you certain things.Number one, they will always do an altar call.If they don't do an altar call saying that if you have not accepted Jesus as your Lord and savior, that church has a, has a different, um, vision.Because the vision is to always make sure that everybody that comes in contact with us should know that they are the one that should be following Jesus as their Lord and Savior.If your church doesn't do an altar call, my friend, your church is the wrong church for you.An altar call proves to say that it's, uh, it's not me, the man of God, that I'm standing here.So I'm standing in for Jesus, and therefore, I will always do an altar call once I'm done preaching.If you always do an altar call once you're done preaching, it is all about Jesus.It is all about Jesus.And then it means that when it's all about Jesus, your church will always say, \"If you have not received the Holy Spirit as yet, or if you have not seen evidence of the Holy Spirit, he will teach you how to look for the, for the Holy Spirit.\"And therefore, if a church does not do that, change your church.If the church does not do that, change your church.If the church does not give you word of God, change your church.If the church does not give you the word of God, change your church, because it's very important that you as a person should always reap the, uh, word of God.There's a communication between you and God.The way God speaks to you is through his word.So if somebody doesn't tell you how to make use of the word, it means that you are in the wrong place.If somebody doesn't give you the word of God in the church, it means that there's no need for you to be there.And when somebody says to you, \"But I have Jesus, I have the word, I have the Holy Spirit, I have all these things,\" but don't testify about it, change your church.Because a testimony about what God has done in your life will change somebody else to come to Jesus.So this morning, if your church does not change you, change your church, because you don't testify about Jesus's goodness, Jesus being th- one that is making things happen in your life.Because Jesus is the one that actually gave you a house.Jesus is the one that actually gave you life.Jesus is the one that gives you a body that is in perfect health.your church doesn't change you, change your church.doesn't change you, change your church.Because if they don't do all these things, you should be changing your church.If your church doesn't change you, change your church.Because if they don't pray for you, and sometimes you find yourself you can't pray yourself, then it means that, uh, there is something wrong with the church not praying for you.So this morning, I want to say to you, if they don't pray for you, change.I might be saying so many times, \"Change your church.\"But I might be saying to you so many times because I know the reason that the church is there, the reason is plain and simple, so that everyone that sees Him on the cross one day, will give an account.And that account is to say that, \"I have asked them to take you up as their Lord and Savior, to take you up as their Lord and Savior.Lord Jesus, I have asked them many a time.They have not been hearing my voice.\"And therefore, you will stand accountable there and saySo if your church doesn't do an altar call asking you to take up Jesus, then the church isYou're not in the right church.This morning I want to thank God for a time like this.I want to thank God for a time like this, because being in a time like this, it's where we can give you what God wants to give you.Now, the Bible says that, \"In the last days, I will pour out my spirit upon all flesh, and your sons and daughters willand your sons and daughters, uh, daughters, uh, will, uh, shall prophesy.\"So if there is no prophecy in your church, look out.Look out.I'm not saying anything.I'm just saying look out, because certain things is, is supposed to happen in church.And one of the reasons knowing that it is church is that certain things do happen.I want to take this time and say if there's anyone that is here that has not taken up Jesus as their Lord and Savior, I want you to lift up your hands where you are.Close your eyes or close your eyes, close your eyes.Don'tDo not look around.Don't think of somebody else.Don't even look at somebody else.Just look into your own heart and ask yourself, \"Have I taken up Jesus as my Lord and Savior?\"And if you haven't, say this prayer with me.Lord Jesus, I come to you in the mighty name of Jesus this morning.Lord Jesus, I ask for forgiveness of my sins.I ask you, as you have said that we should come to you, all who are heavy laden and burdened, and I will give you rest.I'm asking for rest this morning.I'm asking for rest this morning, Father God, knowing that I'm giving up, out my heart to you.I give you my heart, my Lord Jesus.Take every part of my body and do as you please.I give my life over to you this morning.I want to give my life over to you this morning, my God, the mighty name of Jesus.Write my name in the, uh, Book of Life, because by you writing, uh, my name in the Book of Life, I know I have everlasting life in the mighty name of Jesus.For those who have not been, uh, have been receiving Jesus as their Lord and Savior, but went back, I also pray for you this morning that God will take up your, uh, spot in the mighty name of Jesus Christ, our Lord and Savior, this morning, I pray.Amen.And for those of you that is in the wrong church, I pray this morning that as God has been giving us this time, let it be a time to think and rethink where you found yourself.Because if you find yourself in a place that is not of, uh, uh, uh, helping you in your growth, kill you one day.So this morning in the mighty name of Jesus Christ, our Lord and Savior, I pray for a change in everyone's life in Jesus' mighty name.We have come to an end of the service.If you do need prayer, you can contact me.If you do need counseling, one-on-one pro- pro- prophetic words, you can contact me as well.But this morning, I want to thank God for everything in Jesus' mighty name.Thank you,Amen.Now may the grace"

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
              Sunday Message - Fountain of Grace International - Pretoria North
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-5">
              {sd.headline}
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              {sd.intro}
            </p>
            <p className="text-white/60 text-sm">
              Pastor Ricardo Zaal - Fountain of Grace International, Pretoria North - {sd.dateDisplay}
            </p>
          </div>
        </header>

        <section className="bg-white pt-10 pb-2 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#1a1a1a] text-lg font-semibold leading-snug mb-4">{"Feeling stuck despite all your efforts?"}</p>
            <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/Ox1mbbUJoS4"
                title={sd.headline}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="text-[#555] text-sm mt-4 mb-2">Prefer reading? The full sermon notes are below.</p>
            <div className="mt-4">
              <p className="text-[#1a1a1a] font-semibold text-sm mb-2">Jump to a moment in the message:</p>
              <div className="flex flex-col gap-2">
                <button type="button" data-start="0" className="sermon-chapter text-left w-full bg-[#f7f7f7] hover:bg-[#f0fafa] border border-gray-200 rounded-lg px-4 py-3 text-[#333] transition-colors"><span className="text-[#008080] font-semibold mr-2">0:00</span>{"You are worthy"}</button>
                <button type="button" data-start="87" className="sermon-chapter text-left w-full bg-[#f7f7f7] hover:bg-[#f0fafa] border border-gray-200 rounded-lg px-4 py-3 text-[#333] transition-colors"><span className="text-[#008080] font-semibold mr-2">1:27</span>{"The real turning point"}</button>
                <button type="button" data-start="448" className="sermon-chapter text-left w-full bg-[#f7f7f7] hover:bg-[#f0fafa] border border-gray-200 rounded-lg px-4 py-3 text-[#333] transition-colors"><span className="text-[#008080] font-semibold mr-2">7:28</span>{"Speaking for yourself too"}</button>
                <button type="button" data-start="1010" className="sermon-chapter text-left w-full bg-[#f7f7f7] hover:bg-[#f0fafa] border border-gray-200 rounded-lg px-4 py-3 text-[#333] transition-colors"><span className="text-[#008080] font-semibold mr-2">16:50</span>{"See the difference in you"}</button>
                <button type="button" data-start="1642" className="sermon-chapter text-left w-full bg-[#f7f7f7] hover:bg-[#f0fafa] border border-gray-200 rounded-lg px-4 py-3 text-[#333] transition-colors"><span className="text-[#008080] font-semibold mr-2">27:22</span>{"Where you actually grow"}</button>
                <button type="button" data-start="2535" className="sermon-chapter text-left w-full bg-[#f7f7f7] hover:bg-[#f0fafa] border border-gray-200 rounded-lg px-4 py-3 text-[#333] transition-colors"><span className="text-[#008080] font-semibold mr-2">42:15</span>{"Find a community that shares"}</button>
              </div>
            </div>
            <div className="bg-[#f0fafa] border border-[#cfeeee] rounded-xl p-5 mt-6">
              <h2 className="text-lg font-bold text-[#1a1a1a] mb-3">This message is for you if:</h2>
              <ul className="list-disc list-inside space-y-2 text-[#555]">
                <li className="leading-relaxed">{"You feel unchanged despite showing up regularly"}</li>
                <li className="leading-relaxed">{"You doubt your place in your community"}</li>
                <li className="leading-relaxed">{"You seek tangible spiritual growth"}</li>
                <li className="leading-relaxed">{"You question if loyalty is misplacing you"}</li>
              </ul>
            </div>

          </div>
        </section>

        <section className="bg-white py-14 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">

            {(sd.sections as Section[]).map((section, i) => (
              <div key={i} className="mb-10">
                <h2 className="text-xl font-bold text-[#2a9df4] mb-3">{section.heading}</h2>
                {section.paragraphs.map((para, j) => (
                  <p key={j} className="text-[#555] leading-relaxed mb-4">{para}</p>
                ))}
              </div>
            ))}

            <blockquote className="border-l-4 border-[#FFD600] pl-5 py-2 my-10 bg-[#f0fafa] rounded-r-xl">
              <p className="text-[#2a9df4] font-semibold text-lg italic">
                &quot;{sd.quote}&quot;
              </p>
              <cite className="text-[#555] text-sm not-italic mt-2 block">- Pastor Ricardo Zaal</cite>
            </blockquote>

            <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">What to Do Next</h2>
            <ol className="list-decimal list-inside space-y-3 text-[#555] leading-relaxed mb-6">
              {(sd.steps as string[]).map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>

            <p className="text-[#555] leading-relaxed">
              If you are in or around Pretoria or Johannesburg,{' '}
              <Link href="/plan-your-visit" className="fgi-link">
                come on a Sunday
              </Link>
              {' '} - these messages are preached live every week at Fountain of Grace International, 323 B Danie Theron Street.
            </p>
          </div>
        </section>

        <section className="bg-gray-50 py-12 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-[#1a1a1a] mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {(sd.faqs as Faq[]).map((faq, i) => (
                <div key={i}>
                  <h3 className="font-semibold text-[#1a1a1a] mb-2">{faq.q}</h3>
                  <p className="text-[#555] leading-relaxed text-sm">{faq.a}</p>
                </div>
              ))}
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
            <a href={"https://wa.me/?text=I%20thought%20this%20message%20may%20encourage%20you%3A%20https%3A//www.fountaingrace.org/sermons/if-your-church-does-not-change-you-change-your-church%3Futm_source%3Dwhatsapp"} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold text-lg px-7 py-4 rounded-xl hover:bg-[#1ebe5d] transition-colors w-full sm:w-auto">
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
                {sermonTranscript}
              </div>
            </details>
          </div>
        </section>
      </article>
    </>
  )
}
