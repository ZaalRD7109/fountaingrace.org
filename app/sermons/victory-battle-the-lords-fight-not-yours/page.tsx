import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Stop Fighting a Battle That Was Never Yours to Win | Fountain of Grace International",
  description: "Tired of fighting battles alone and losing? Pastor Ricardo Zaal of Fountain of Grace, Pretoria North, shows you why the battle belongs to God - not you.",
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/sermons/victory-battle-the-lords-fight-not-yours',
  },
  openGraph: {
    title: "Stop Fighting a Battle That Was Never Yours to Win",
    description: "Stop fighting battles alone. Pastor Ricardo Zaal reveals how to win life's hardest battles by surrendering them to God.",
    type: 'article',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International - Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/sermons/victory-battle-the-lords-fight-not-yours',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "Stop Fighting a Battle That Was Never Yours to Win",
    description: "Pastor Ricardo Zaal of Fountain of Grace International in Pretoria North delivers a powerful sermon on winning life's battles by recognising they belong to God. Drawing from 1 Samuel 17:47 and the story of David and Goliath, this message shows believers how to stop losing in their minds and start walking in victory.",
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
    datePublished: '2024-06-01',
    url: 'https://www.fountaingrace.org/sermons/victory-battle-the-lords-fight-not-yours',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Sermons', item: 'https://www.fountaingrace.org/sermons' },
      { '@type': 'ListItem', position: 3, name: "Stop Fighting a Battle That Was Never Yours to Win", item: 'https://www.fountaingrace.org/sermons/victory-battle-the-lords-fight-not-yours' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "What does 1 Samuel 17:47 say about spiritual battles?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "1 Samuel 17:47 says, 'And all this assembly shall know that the LORD saveth not with sword and spear: for the battle is the LORD's, and he will give you into our hands.' This verse, spoken by David before defeating Goliath, reminds believers that God does not need human strength or weapons to win battles. When you truly believe the battle belongs to God, victory is already on its way.",
        },
      },
      {
        '@type': 'Question',
        name: "Why do I keep losing the same battles over and over again?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Most repeated defeats begin in the mind - when you have already accepted a negative outcome before the battle is even over. Pastor Ricardo points out that Job said 'the thing which I greatly feared is come upon me,' showing that fear and a defeated mindset can actually draw the very outcome you dread. Changing what you believe about the battle changes the result.",
        },
      },
      {
        '@type': 'Question',
        name: "How do I know when to walk away from a fight instead of standing my ground?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Not every battle is meant to be won by pushing harder - some are won by stepping back with wisdom. Pastor Ricardo uses the example of an abusive relationship to show that choosing your life over the fight is not weakness but victory. Proverbs and the New Testament both affirm that wisdom knows which battles belong to you and which ones belong to God.",
        },
      },
      {
        '@type': 'Question',
        name: "What does it mean that the battle is the Lord's in everyday life?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "It means you are not designed to carry the full weight of every conflict, fear, sickness, or struggle on your own. Romans 8:37 declares that believers are more than conquerors through Christ Jesus. Practically, it means bringing your battle to God in prayer, resisting the enemy as James 4:7 instructs, and trusting that God is already working on your behalf even when you cannot see it.",
        },
      }
    ],
  }
]

const sd = {
  "headline": "Stop Fighting a Battle That Was Never Yours to Win",
  "intro": "Are you exhausted from fighting battles that seem impossible to win? Whether it is sickness, broken relationships, fear, or daily struggles, Pastor Ricardo Zaal brings a word that will shift your perspective completely. The battle is not yours to fight alone - it belongs to God, and that truth alone changes everything.",
  "scripture": "1 Samuel 17:47",
  "quote": "The battle is not yours. The moment you know that, you have already won - because it is He, the Lord, who wins the battle, not you.",
  "dateDisplay": "1 June 2024",
  "sections": [
    {
      "heading": "What Is a Battle and Why Does It Feel So Personal?",
      "paragraphs": [
        "A battle, by definition, is a sustained fight - something you resist, confront, endure, and push back against over time. Pastor Ricardo Zaal opened this message by reminding the congregation that battles come in every shape: illness, broken relationships, financial pressure, spiritual attacks, and even the silent war that rages inside your own thoughts. When someone overcomes cancer or walks away from a toxic situation, we say they fought a battle and won. That language is not accidental - life really is a series of battles, and knowing that changes how you respond to hardship.",
        "What makes this truth so freeing is the declaration found in 1 Samuel 17:47. When young David stood before the giant Goliath, he did not boast in his own ability. He boldly declared that the Lord does not save by sword or spear - because the battle is the Lord's. A timid shepherd boy walked into a fight that terrified an entire army, and he won it not with superior weapons but with a superior understanding of who was truly fighting."
      ]
    },
    {
      "heading": "How Most People Lose Before the Battle Even Starts",
      "paragraphs": [
        "Pastor Ricardo identifies three common ways believers lose battles long before they reach the finish line. The first is a defeated mindset - the habit of imagining the worst outcome before anything has been decided. As a man thinketh in his heart, so he is, and when your thoughts rehearse defeat, your actions follow. Job himself acknowledged that the very thing he feared came upon him, a sobering warning about the power of fear-filled thinking.",
        "The second battle-killer is the belief that you are fighting alone. The moment you reduce your identity to 'I' - isolated, self-reliant, carrying everything on your own - you have already cut yourself off from the greatest strategic advantage available to any believer. God never designed you to go into battle as a one-person army. The third trap is constantly fighting back in your own strength, escalating every conflict instead of stepping back and allowing God to be your defence. Sometimes the battle is won the moment you stop swinging and start trusting."
      ]
    },
    {
      "heading": "Preparing for Battle and Walking in Victory",
      "paragraphs": [
        "Preparing for battle begins with the mind. Confidence rooted not in your own ability but in the knowledge that God is for you is the starting point of every spiritual victory. Pastor Ricardo draws on the image of an army that deploys different people with different skill sets - communicators, fighters, strategists - to show that no battle is won by one person acting alone. In the same way, the body of Christ, the Word of God, prayer, and the Holy Spirit are all part of the arsenal God has already placed in your hands.",
        "Victory also requires wisdom about which battles deserve your full fight and which ones require you to walk away. Some situations - like a relationship built on repeated harm - are not won by fighting harder. They are won by declaring that your life carries more value than the conflict. Pastor Ricardo's closing challenge is simple and direct: stop telling yourself you have already lost. Stand confident. Resist the devil and he will flee. Declare with David that the battle is the Lord's - and watch God move on your behalf."
      ]
    }
  ],
  "faqs": [
    {
      "q": "What does 1 Samuel 17:47 say about spiritual battles?",
      "a": "1 Samuel 17:47 says, 'And all this assembly shall know that the LORD saveth not with sword and spear: for the battle is the LORD's, and he will give you into our hands.' This verse, spoken by David before defeating Goliath, reminds believers that God does not need human strength or weapons to win battles. When you truly believe the battle belongs to God, victory is already on its way."
    },
    {
      "q": "Why do I keep losing the same battles over and over again?",
      "a": "Most repeated defeats begin in the mind - when you have already accepted a negative outcome before the battle is even over. Pastor Ricardo points out that Job said 'the thing which I greatly feared is come upon me,' showing that fear and a defeated mindset can actually draw the very outcome you dread. Changing what you believe about the battle changes the result."
    },
    {
      "q": "How do I know when to walk away from a fight instead of standing my ground?",
      "a": "Not every battle is meant to be won by pushing harder - some are won by stepping back with wisdom. Pastor Ricardo uses the example of an abusive relationship to show that choosing your life over the fight is not weakness but victory. Proverbs and the New Testament both affirm that wisdom knows which battles belong to you and which ones belong to God."
    },
    {
      "q": "What does it mean that the battle is the Lord's in everyday life?",
      "a": "It means you are not designed to carry the full weight of every conflict, fear, sickness, or struggle on your own. Romans 8:37 declares that believers are more than conquerors through Christ Jesus. Practically, it means bringing your battle to God in prayer, resisting the enemy as James 4:7 instructs, and trusting that God is already working on your behalf even when you cannot see it."
    }
  ],
  "steps": [
    "Surrender your specific battle to God today in prayer - speak it out loud and declare with David from 1 Samuel 17:47 that the battle belongs to the Lord, not to you.",
    "Identify one battle you have already been losing in your mind - write down the fear or defeat you keep rehearsing, then replace it with a scripture like Romans 8:37 that declares you are more than a conqueror through Christ Jesus.",
    "Choose your battles with wisdom this week - ask God to show you which conflicts require you to stand firm, and which ones require you to walk away, trusting that walking away in faith is not defeat but victory."
  ]
}

type Section = { heading: string; paragraphs: string[] }
type Faq     = { q: string; a: string }

const sermonTranscript = "Honor and a privilege to stand here.It's an honor and a privilege to stand here.It's an honor and a privilege to stand here.Standing in the pr-presence of God.So this morning, my, my messageThis morning, it, my message is Victory Battle.Victory Battle.Now I want to bring a few things, uh, to your mind.How the message is going to go ahead.Firstly, it will beI will explain to you what is a battle.Then, from what is a battle, I will then goMove on to helping you to prepare for the battle.Then once we've been preparing for the battle, we're going to seeNo, no.We, we first going to see what is that, what is it that makes you to lose the battle.So we starting off by saying, What is a battle?What makes you lose a battle?And then we say preparing for a b-, for a battle, and then winning a battle.So any of these, you should be, you should be understanding that this morning as we, um, uh, going to go into this, I want you to know that the battle is the Lord's firstly.That's it.Because just by knowing that, you have already won the battle.You have already won the battle.You have already won the battle.But nuh- I just wanna, I just wanna bring something to you this morning that will encourage you as well.And whilst encouraging you, I want you to also look at it from a s- perspective, what is God's telling you.What is God telling you this morning.While the world looks upon me.As I struggle alone.They say I have nothing.But they are so wrong.In my heart, I'm rejoicing.How I wish they could see.Thank you, Lord.For your blessing on me.There, there's a roof up above me.I got a fine place to sleep.There is food on my table.And shoes on my feet.You gave me Your love, Lord.And a fine family.Look at them.Thank you, Lord.For your blessings on me.know I'm not wealthy.And these clothes, they're not new.I don't have much money.But Lord, I have you.And that's all that matters.Though the world may not see.Thank you, Lord.For your blessings on me.There's a roof up above me.And I've got a fine place to sleep.I don't have much money.But Lord, I have you.You gave me Your love, Lord.And a fine family.Thank you, Lord.For your blessings on me.If you wanna sing with me, come on, sing with me.Sing with me.This is something I can tell you that as you sing with me, you will also feel what is God doing in your life.While the world looks upon me.As I struggle alone.They say I have nothing.But they are so wrong.In my heart, I'm rejoicing.How I wish I could see.Thank you, Lord.For your blessings o-Thank you, Lord, for your blessings on me.I got a roof up above me and a fine place to sleep.Got shoes onFood on my table and shoes on my feet.You gave me your love, Lord.And a fine family.Thank you, Lord, for your blessings on me.Thank you, Lord, for your blessings on me.Thank you, Lord, for your blessings on me.Thank you, Heavenly Father, for your blessings upon my life this morning.Thank you, Lord, for the blessings upon my life this morning.Thank you, Lord, for the blessings upon my life this morning.Thank you, Lord, for the blessings upon my life this morning.Okay, let me start off by saying, the battle is not yours, the battle is the Lord's.Because only when, uh, when you realize that the battle is the Lord's, victory is about to happen.So victory is about to happen if only, if only you know that it's He, that the Lord is the one that will win the battle.The Lord is the one that will win the battle, not you, because you are just mere man.And mere man normally doesn't actually won battles easily.They just give up firstly.So what is a battle?What is a battle?Now according to, according to, uh, uh, to Google, now Google is saying it's a sustained fight between large organized armed forces.And then the battle sometimes lasts for hours, years, months.Whatever the case might be, like, in certain cases, it is a battle that is given up by others but just within a second.And that is a battle.Now if you, if you're looking at a battle as a verb, it is a fight, it is a combat, it is a resistant, it is to withstand or it's to stand up to.It is to put up a fight against something.It is to confront.It is to war, to struggle, to strife, and to campaign.Now when you're looking at these words individually, you will understand that how you've been going through a lot.That is why when somebody is sick, they would say he has actually fought the battle against a certain illness.He has fought a battle against a certain, pardon, um, uh, let's say, for argument's sake, he fought the, the battle and he won the battle against cancer.He fought the battle, he won the battle against tuberculosis.He fought and he won the battle.Whatever he won, you will always see, they will say when you are sick, you are fighting a battle.Now certain battles is not for you to fight, because you will understand why I'm saying it to you as I go along.So I want to tell you what is a battle, and a battle is to resist something.Like for argument's sake, knowing that Satan is actually behind you.But the Bible says, Resist the devil, and he will flee.So it's a battle against the devil the whole time.So as it is a battle against the devil, you need to resist him, keep on resisting, keep on resisting.Stand up to him.Stand up to him, and standing up to him, it shows that you are in a battle, and this battle is actually about to be won.I'm telling you this morning, I prophesy to you this morning, the battle that you are going through, you are about to win that battle.The battle that you are going through, you are about to win that battle this morning.So as you go along, uh, with me through this message, I will tell you why I'm saying to you that you are about to win that battle, because that battle does not belong to you.The battle is the Lord's.Because this is what happened in a time like, um, where, where David was standing up, where David was standing up against, uh, Goliath.That day when he stood up against Goliath, he, he had just mere one word to say, and he said it so nicely in 1 Samuel 17 verse 47.He said it, and if you read in 1 Samuel 17 verse 47, and he said, And all this assembly shall know that the Lord saveth not with sword and spear, for the battle is the Lord's, and he will give unto you.He will give you into our hands.Now, this is a giant of a person that is standing in front of a timid little guy, and the guy knows for a fact that here, there's no need for a sword or a spear.There's no need for a word of argument and there's no need for anything except for knowing.So how would you win a battle or how do you lose a battle firstly?Now, when you lose a battle, the battle is normally starting in the mind, and as the mind is playing, playing tricks on you, you will actually realize that you will sometimes think that, I've already, uh, uh, lose out on this battle.But you have not lost because you only lost in the, in the mind first because what happen is that you foresee things that is happening, but not knowing that anything can happen within a battle.I, I just remember we had a, we had a, uh, a game that we were playing at, at work, and this is Battleship.Now, Battleship is something that you putYou have, uh, you have a, uh, uh, a few ships that you put, and the ships are packed on this side, and the ships are packed on that side, and then there's something in front of you.And as you, you call out A1, then you put your, your, uh, you, you shoot your arrow like a, alet's say cannonballs or whatever, you shoot them.And as you shoot, uh, if it, if it is where the ship is, you will, you will fight.And as you, you go along, you can actually realize that your, your, your battle is, is just by shooting.And the more cannons you shoot towards the, the, the, the other ship, the better it becomes for you because the quicker that other ship will sink.And this is the same in our lives because we're going through so many battles and so many things that we, we see in our mind already that we have lost but anything can happen because if you're looking at it the day when you decided that this girlfriend has just been giving up on me and as I gave up on her, um, you k- realize that, you realize thatShe came back and she said, I didn't know you were feeling like this.And then suddenly, you won the battle because you won her heart over again.And imagine if you, if you then say, uh, the, theLet's flip the coin this way.This is how you lose a battle.You lose a battle by keep on fighting back with the, with the guy.Anytime he smack you, you, you just stand up and say, Uh, uh, uh, you're not going to hit me like that.I'm going to hit you back.And by hitting back, the more you hit back, the more the fight become, uh, more stronger and stronger and stronger.And by hitting back, the fight become stronger.And sometimes it's just for you to say, But this battle, I cannot win it because the first time a g- a, a guy hit on me, he will always hit on me.So there the battle is already lost even though you think you can still win the battle by fighting back but the battle you won only by stepping back and says, But I am more than a conqueror through Christ Jesus that has given me the strength.I am more than a conqueror that, that, uh, uh, through God that gave me the strength to stood up not with, with the, uh, uh, uh, not with sword and spear, but to step back and say, But God, this guy cannot keep on hitting me like this.I am tired of this guy keep on hitting me like this.Today the battle stops here, and I will walk away winning the battle knowing that my life is worth more than this relationship, that, that he's been using me as a punching bag.So that is a battle that you know you already won if you, if you say to yourself that This guy, by hitting me once, he will keep on hitting me twice.He will be like a dog.The, the moment the dog starts smelling blood and he ate some- somebody's meat, they normally come and they shoot the dog because they know once a dog has bitten somebody once, they know that dog will keep on coming back and bite an- another person and another person and another person because the dog already smelled the blood of a human being.So it will be like that and that is why whenever you see that you keep on fighting back, you will lose that battle so by losing that battle it is, it is something that I can say to you, it is not worth your life this morning.And the, the way somebody lose the battle is for always saying, I am alone in this.\"I am alone in this.You cannot be alone in any battle, because a battle is something that you can have somebody who will strategize for you.If you, if you know the combat, uh, s- strategy, combat strategy is that you have certain people in certain areas of a- of their lives that have certain expertise, knowing that whenever they go into combat, there's a strategist, then there's a- a- a fighter, then there's a- a driver, then there's this and that, the other.I don't know much about combating, but what I know is that whenever the- the- the SA army, let's say South African army goes into combat, they will have certain people who have certain skills sets to go into that.Some will be, uh, like a, who has skillset in- in communication.So, they will communicate with somebody from the other side saying, Can you have a look for me?Uh, when you- when you looking at your screen, like for argument's sake, a- a laptop or a tab, uh, uh, whatever that they can see there's an infrared of where their- their enemies might be.And then, they will be having a fighter jet on top, then they will have somebody at the bottom.These things, I don't know much about, but what, from what I know is that when you lose a battle it's because you- you think that you will be alone in this battle.Anytime you lose a battle, it's because you're standing alone and you're telling yourself, I.But I only exist in an island where you stand alone.So, I only exists, exists where you are, uh, uh, just a mere human being and trying to do things on your own.So, you will always loo- lose a battle if you looking at I.Then another way of losing the battle is the fear of the outcome.Because the fear of the outcome is something that I can tell you now that most people already have, uh, have, uh, have, have lost a battle just by- by the fear of the outcome.Because the fear of the outcome will then tells you, Oh, okay.I've already lost.I have already lost.I have already lost.have already lost.Because the fear of losing, Job said it so nicely, Job said it so nicely.Go and read into Job, go and, uh, and- and search what Job was saying.What I fear has come over me.What I feared has come over me.That's what Job was saying.What I fear has come over me.So, how do you, how do you actually win the battle?You win the battle by choosing your battles.Some battles are not there to win.Some battles are there to walk away and say, I'm done.Like the one I've just mentioned to you, that whenever a guy start hitting you, as a woman, the very first time they hit you, you just say, Mm-mm.I'd rather lose this battle than lose my life.So, some battles are worth losing.Instead of you being a stronger person, telling yourself, No, I will win this one, but losing your life, it's not a battle worth fighting for.Now, you might be asking me, how do you prepare for battle?How do you prepare?Now, man of God, I hear you w- when you are saying, How do you lose a battle? I hear you when you are saying, What is a battle?I hear you when you are saying that the battle is starts in the mind because some of us already, uh, has lost a battle just by thinking what the outcome will be.Because as you think, as you thinketh, as a man thinketh, so he will be.As a man thinketh, so he will be.So as a man has thinketh a thought of defeat already in his mind, you will be defeated.So therefore, when you lose the battle, you have lost it in your mind.You have not prepared yourself.You have not stand confident in it.So when you stand confident in it, when you stand confident in the battle, you tell yourself that, This battle I'm having is a battle that only through God's grace I can win.So this morning I wanna take you, I wanna take you through a few things.Now, the few things I wanna take you through is to- to- to- to let you know God's battles sometimes is a better battle.But I wanna help you how to prepare for this battle.How to prepare for this battle.How to prepare for this battle.How do you prepare for this battle?first thing to know is that any time whenever you stand in a battle you need to know that the battle is not yours.That's to prepare the battle.wanna go back.I wanna take some, uh, some, some scriptures to you.And I wanna tell you why I'm saying what I'm saying.first thing that you need to do to win a battle is to be in God's word.Now, being in God's word is quite simple because Joshua 1 verse ni- vers- verse 8 says it this way: The book of the law shall, shall not depart out of thy mouth, but thou shalt meditate therein day and night and thou mayest observe to do according to all that is written therein.For then thou shalt make thy way prosperous and thou shalt have good success.I repeat it.The book of the, the law shall not depart out of thy mouth, but thou shalt meditate therein day and night and tha- thou mayest observe to do according to all that is written therein.For then thou shalt make thy way prosperous and then thou shalt have good success.Now when youWhen, when the Bible says it, says it so nicely, Make thy way prosperous, it must is meaning that God will make their way of a battle prosperous by going into His word and learn how to be prosperous and th- thou shalt have good success.Now, good success comes from knowing God because God is the one that already started the battle from the beginning and also won it at the same time because since the beginning He has been warning, winning a lot of battles.And th- who is the best person to go to by w- for winning battles?Isn't it that He's the one that keep don- keep on winning, keep on winning regardless of whatever you think?God is always winning.So my question to you this morning is to start knowing that the battle is the Lord's.The battle is the Lord's.The battle is the Lord's.So when, when Joshua said it so nicely, Joshua said it this way, Joshua said it that, Then thou shalt make thy way prosperous.So God will make your way prosperous in it.So you need to know to be in His word.But then what's the use of you being in His word if you don't know Him?Because if you know Him, you, He will also make your way prosperous because this is what the Bible says.It's so nicelyHe said it in, um, in Psalm 46 verse 10.Be still and know that I am God and I will be exalted among the heathen, and I will be exalted in the earth.How would you know that He is God?How would you know that He's God?Any time whenever you fight a battle and you exalt His name and you tell God, I exalt thee-among the heavens.And, and I will be exult-- and I'll exalt you in-- on earth as well.I give you everything because I know you.By knowing God, you already won the battle because you can see how He moved in.So when you are in His world- Amen.you start with knowing Him.And when you know Him, you will actually have a way of, of, of winning the battle.And how do you know Him is just to be still and to know.That's it.You don't have to go and climb the mountains and, uh, jump over h- wh- hoops to go to God.Just know and just be still to know Him.Know that He is God.That He is God.So this morning, I wanna, I wanna s- say to you, so how do you prepare for the battle is just by starting to get into His word.Then starting to know Him through the, the resurrection power that He has been risen from the dead.Jesus has been risen from the dead.Once you start knowing Him, then you will know that He's on your side.So the battle is won when you start reading His Bible, get into His word, knowing Him.And then when you know Him, you will actually start knowing that He is on your side.And how is He on your side is the same that, that, the, uh, the same scripture that, um, David was, um, I mean, umYes, David was saying in Samuel, 1 Samuel 17 verse 47, it's the same thing that, uh, he was said, And all these assembled shall know that the Lord saveth not with sword and spear, for the battle is the Lord's, and He will give you into my hands.Into our hands, in fact.He didn't say my, He said our hands.So how do you know God?Because once you start knowing God is on your side, that is when you will actually realize that it's already a battle won.A- according to Joshua 1 verse, verses 9, He said, Have not I commanded thee to be strong and be c- of courage, of good courage?Be not afraid.Rather be, be not dismayed, for the Lord thy God is with thee, whosoever thou, wheresoever, whithersoever thou goest.I repeat it again.Have not I commanded thee, be strong and of, be, be of good courage?Be not afraid.Neither be not dismayed, for the Lord thy God is with thee, what, where, whithersoever thou goest.So what it simply means is that w- when you know the Lord is with you wherever you go, you will already have a victorious won.And being, having the Lord on your side is, is, is having a, a, a victory already.Knowing the Lord on, is on your side is knowing to have a victory already.Now, now, now look at this.Look at this.When you go into, uh, to look at th- the fishes.Amen.Now a fish is a, is something that lives in water.Now when the fish lives in water, he end up not knowing that the water is there because he, he lives within the water.That is how you need to live within God.But knowing that the moment the, the fish is taken out of the water, he will soon realize, Oh, whoa, I need water.That is how you need to live in God, because by living in God, a fish don't know the value of the water until it's taken out of the water.That is how you should be knowing.You need to know the value of God even though you feel like the fish not knowing that what is happening.So the battle is won by knowing God and knowing that God is on the, is surrounding you as the water is surrounding the fish.You should be knowing that that fish is actually there, uh-uh, knowing that if he m-must be taken away f- out of the water, he will not be called a fish anymore but a dead fish.Like Psalm says it so nicely, Psalm says it in, in, in 46 verse one that \"God is our refuge, strength and a present help in trouble.\"So, so whenever there's a battle the, the Bible says that whenever there's a battle you go back to Psalm 46 verse one and it says, \"God is.\"Not God will be, God was.He is.Not, not the past tense or the p- or, or, or the future tense.It is a tense that is now.So God is our refuge and strength.So meaning to say that whenever the battle becomes too tough for you, the only thing you need to do is to know and trust Him.Know that He's on your side, know that He's on your side, know that He's on your side.Know that He's your refuge and your strength and your very present help in trouble.Your very present help in trouble.So, so, so, so when the, that bills comes, when that bills comes there, thereJust, just look at this.When the bills comes you, you have a tendency of saying, \"How am I going to be able to manage this?\"And you tend to look at how can you steal something from this side?How can you, how can you make a plan to crook somebody out of that?And how can you, you, you, you, you take that bill and maybe just pay half of it so that they don't come back to you and ask you?You, you, you thinking of all those things.But God says that He is our refuge and strength and very present help in trouble.Now, now when the bills comes you are in trouble so all you have to do is call upon the Lord, call upon Him because He said it so nicely.In Jer- Jeremiah 33 verse 3 He says it, \"Call upon me and I will show you great and mighty things.Call upon me and I will show you great and mighty\"Now, how do you call upon Jesus anytime whenever the trouble is surrounding you?You justYou have to mention the name of Jesus.Because the Bible say by mentioning of the name Jesus every knee shall bow and every tongue confess that He is Lord.Knowing that He is Lord already is helping you because by that same name, it, uh, he has won victories.So this morning if the battle is becoming too tough for you, just by preparing is to know how.Now, how do you, how do you know that I have been prepared now?Number one, I have been in God's word knowing that if I go into God's word that is how I can win a battle.But I cannot win the battle if I don't know God Himself who is the author of and the finisher of that same word that has been given through to me.I cannot win a battle if I don't know God.And then also at the same time I might be knowing God but I won't be trusting upon Him.So at the same time if I want to win the battle I justI don't need to just know His word, I don't j- just need to know Him, I have to trust upon the word because His word is ye and amen.Nothing can be added, nothing can be taken out.And He said He, He is actually, uh, um, the, the one that, that has sent out His word and when He's sent out His word all you have to do is to trust upon His word because His word never return to Him void.So whenever He said a word you h- have to just stand up on that word and say it, \"I believe in God and I receive whatever you have given to me.\"Because by you knowing that God has been there God is there like the fish knowing that the water is there but the moment it's gone you just have to make sure that you are constantly reminded that the waterGod is surrounding you like the water is surrounded by a fish so that you can know So I'm coming back to my point to say to you, so whenever you, you, you know His word, you know Him and you start trusting in Him the battle is won because by trusting in God, trusting in God is that Healready won the ba- battle.And then by Him winning the battle He makes it so easier for you andFor me and you that any time whenever He is the one that takes up the, the, the battle He's the one that will actually be the one that will help you.Because the Bible says it in Deuteronomy 20 verse 4.Can you see all the scriptures I'm giving to you is a battle that has already been won?Because if you're looking at Deuteronomy 20 verse 4, \"For the Lord your God is\"is He that goeth with you.Not, not, not He goes against you, He goes with you, to fight for you against your enemies, to save you.So, God is actually with you to fight your enemies, to save you.So, whatever battle that you are going through this, today, like, uh, we have said, uh, earlier on when we were, when we were, were talking about what a battle is, we, we have said a few things.And one of the things that we said, a battle is a fight- fight.It's a combat, it's a resistant, it's to withstand and to stand up.So, why- why do you, do you need to know what a battle is?Is because whenever someone, somebody's confronting you, do you know that it is a battle?And you have been winning so many battles by when somebody confront you and say to you, \"Look, this is what I think this is.\"And then you as a person will actually tell that person, \"This is what I stand for.I stand up to.\"And that's why whenever you stand up like a, a Rosa Parks, um, Rosa that stood up in a bus saying, \"I will not let this take me down.\"And therefore, the name of Rosa is still t- up till today because she stood up.The battle that she stand up against, she won it.And even today, we mention her, not even talking about our own Jesus that we said that when He stood up and says that, \"I don't care what you are saying.\"When He, they, they, they, they, they, they, they, um, when they, they crucified Him, He knew for a fact that this is what He, He is, uh, supposed to go through for us to have victorious lives.So, your victory today, the, is a victory battle.It's not a battle of losing.So, I wanna, uh, say to you this morning, the victory battle that you have, have today is a battle that is a victory battle not just a battle.Because by God, uh, giving you the victory in any situation.So, I want you to, to, to, to, to, to, to allow Him, just allow God this morning to be, uh, that He can go with you.Allow Him to go with you.Allow Him to go with you.Because if you're also going through as I am, now fear thou not for I am with thee.Be not dismayed for I am thy God.I will strengthen thee.Yes, I will help thee.Yeah!I will uphold you with the right hand of my righteousness.So imagine this, if you go and you say, you, you, you are fearful.When you fear the outcome of, of, of a case, then what will happen as you fear the outcome of the case?You will see, God, the Bible tells, says when Job said it, uh, \"What I feared, I come, uh, it has come over me.I will not fear.\"Because You as God, for I, I, I am with me.You as God, come with me.Now, if you're looking at it, now, now, now, sometimes whenever you, you fought a battle, you tend to give up the battle just as you were, uh, about to, to, to, to, to, toHow can I say it?As you were about to win.So as you were about to win the battle, the, the, the, the, they were giving you ultimatums, um, uh, saying this and that and the other.Any time whenever you do something they will say, tell you, \"If you don't do this, uh, we will not do that.If you don't do that, you will not do that.\"By the time you gave up is the time that actually was just your breakthrough, was just about to be there.So this morning, uh, pardon me, I wa- this morning I wanna, I wanna tell you that the battle that you are going through is not a battle that you should be saying, \"Oh, God, uh, I am giving up.\"Don't give up because the more you're not giving up, the more you fight battles.Because by consistent, uh, battles that you are fighting, you strengthen yourself.Because if you can look at it, when you start with a small battle, you f- w- you win the battle, you get greater for a second s- s- stronger battle.And the more stronger that you become, the more s- uh, b- battles you f- f- find yourself winning.And the more, uh, stronger battles you fight, the more stronger you become.So this morning, I wanna t- I wanna tell you that any time, whenever you go to a battle, don't give up on the battle, because the battle has already been won on the Christ ofk- 0 on the Cross of Calgary for you and me.You have already been won through that, uh, when Jesus was dying on the Cross of Calgary, because He said it so nicely.Also, James 1:12 said it also so nicely, Blessed is the manNo, no, no, no.C- let me repeat it again.He said that, Blessed is the manJo- James 1:12 says, Blessed is the man that endure temptation, for when he's tried, he shall receive the crown of life, which the Lord has promised to them that love Him.So this morning, as you go through your trials and your tribulations and your fightings of battle, don't, uh, give, uh, c- don't give up, because by your consistent, uh, m- moving, moving, moving, your consistent moving, it will actually be the one that will help you.I was actually looking as I st- as I was cutting my hair, and I realized about any time when I cut my hair, every time I'm finished cutting my hair, there's a little piece here at the back that is actually just here, h- here where the, wh- where the glasses comes this way.And every time, whenever I cut my hair, I realize there's a small piece that is always left.And I always used to wonder, But why can't I cut that nicely?And then soon, I realized that these glasses, they are not strong, but any time whenever I put them on, they making a deep mark inside my, m- my head here.And every time when it makes a deep mark inside my head, it started the, uh, the making anything to grow on the side, and that place to be deep inside.And that is how it happens.So consis- consistency makes you to win battles.Why I'm mentioning this is that, if you're looking at it, the water, when it, when it moves from one place to another, the constant move of water carves through, through, through so many, uh, mountains.Because any time the water goes, water is not strong, but water is, is, uh, is consistent.Uh, whenever they g- consistently go, it starts carving out ways and r- routes.That is how you should be when you st- turn, uh, into your battles.Anytime there's a battle coming your way, be consistent like water and cut through the, the, the rocks that is standing in your way, the mountains that is in your way.So anything that comes your way, stand strong, because by being consistent and steadfast, being consistent and steadfast, being consistent and steadfast is how you will be winning this battle.It's how you will be winning this battle.So I want to prophesy to you this morning that any battle that you've been fighting, if you are m- uh, listening to me this morning, I prophesy that any te- time, whenever there's a battle your way, you will win it through Christ that is giving you that strength.Because through Christ that is giving you the strength, because when Christ is giving you that strength, no one else can help you but only Christ.Because we are more than conquerors through He that gives us, uh, uh, that is our refuge and our strength and our very present help in times of need.So this morning, I wanna t- I wanna take you back to Jeremiah 17:7-8, because when you win the battle, there are certain things that will come to you.And how do you win this battle?You win this battle, uh, that by just trusting G- God.How do you win this battle?Is, uh, blessed is the man that trusted in the Lord and whose hope, and whose hope the Lord is.And whose hope the Lord is.So this morning, I wanna tell you this morning that by trusting upon God, this is your, uh, what God has given to you this morning.Because God says, Blessed are the man that trusted in the Lord and whose hope H- the Lord is, for he shall be as a tree that is by the waters and that spreadeth out her roots by the river, and shall not see when the heat cometh, but her leaves shall be green and shall not be careful in the year of the drought, neither shall cease from yielding fruit.So you shall cease from yielding fruit.You, you, you will not cease from yielding fruit.You will always be yielding fruit.So any battle that you, uh, win is, is yielding fruit.Any time that I prophesy in the mighty name of Jesus that any battle that you're going into, you will yield your fruit in that.Anytime, whenever you go into a battle, you will be like a, a, a, a water, a, a plant, I mean, a plant that is planted by those rivers of water.And at any time, when there's a drought that comes, you will just sank your, your, your, your roots deeper intoI prophesy in the mighty name of Jesus that any battle that you've been going through this morning, I, uh, prophesy that you will overcome that by going through it and being cons- consistent.Anytime when there's a consistency, I prophesy that you will overcome.Anytime you trust upon the Lord, you will overcome.I prophesy it in the mighty name of Jesus.As you go about this week, anytime.whenever you see that there's a battle going on, you will say, The battle is not mine to lose, and you will overcome.Anytime, whenever there's a battle that come, I prophesy that anytime you say that the battle is yours, God, God will fight the battle for you.God will fight the battle for you.God will fight the battle for you in the mighty name of Jesus.I prophesy this morning, that accordingI p- I prophesy this morning, according to the, to, to what the Bible is saying, in, uh, also, the Bible says, So are the children of God.Only He knows when the enemy is screaming that God has been fighting their battles.So if there's a fish that is, uh, that, uh, knowing that there is water surrounding him, he knows.So I wanna end up my message this morningI wanna end up this message this morning by saying to you, the battle is only won, the battle is only won if you know Him.If you don't know Him, the battle will always be tougher for you and you will keep on losing battles.So this morning I wanna ask you, if you wanna be the one that says, Lord Jesus, this battle has been tough for me.I cannot do it without You.And you have not been giving your life to Jesus this morning, I wanna say to you, you can lift up your hands because through you giving over to Him, you are already in the winning team.You are already in the winning team.If you are already in the winning team, you are with God.Because if you are not with God, th- you are against Him.So meaning to say that if you are against God, it means that you are in a team, that you are actually, uh, in the, uh, losing team.So this morning I wanna say to you, if you have decided that today I wanna give my life to the Lord so that I can also win battles, I've been having so tough battles, my, my husband has been leaving me.My, my, my, my wife has been leaving me.My, my, my children has, has just gone th- e- e- eh, own ways.So this morning if you wanna be the one that says, I wanna win this type of battles.Please Lord, I wanna be on the winning side.I wanna give my life to You this morning.I want you to take up your, your right hand and say these words after me.Lord Jesus, this morning, I come to you in the mighty name of Jesus.Lord Jesus, I come to you in the mighty name of Jesus.I surrender to You.I surrender to You.Knowing that I cannot go without You this morning.Knowing that I cannot go without You this morning.This morning I cannot have life without the One that gives life.And I wanna give my heart to You.I wanna give my heart to You because You gave me life, my, my God.And I want You to please write my name on the book of life as well because I have given my life to You, Jesus, this morning.So this morning, Lord Jesus, I wanna say I turn around from anything that has not served me up to thus far.And I ask that You forgive me for all the wrong that I've done.For all the wrong that I've done, anything that went against Your plans for my life.I wanna say I'm sorry s- uh, Lord Jesus.And know that anytime I trust in you, the battles is given over to you.In the mighty name of Jesus, I pray.So this morning, I wannaIf you have given your life to Jesus, call me on the cell phone number that you will see.Call me also, or just drop me a- an SMS, um, or, or just come after the service to me when you, wh- when we're done here, and then tell me, I've given my life to Jesus.Because this is the promise that I can give to you as well, because according to first John verse 4, I mean first John 4 verse 4, Ye are of God, little children, and have overcome them, because greater is He that is in you, than he that is in the world.So this morning I wanna say to you that as you have taken God as your personal, uh, Lord and Savior, He will be within you.The battle is yours.The battle is yours.And as He is in you, you will overcome them.Anything that comes against you, you will overcome them because greater is He that is in you than he that is in the world.Thank you, Jesus.Thank you, Jesus.Thank you, Jesus.Thank you.Thank you, Jesus.We praise you, give you the glory and the honor that you deserve.The battle is yours, my God.battle is yours, my God.Regardless whether we know it or not, we be- fully believe in you.We fully trust upon you, my God.Regardless whether we, we can feel it, sense it, or know it, as long as we know that you are God and you will overcome this in the mighty name of Jesus Christ, our Lord and Savior.Now may the grace of our Lord Jesus Christ, the love of God, the sweet fellowship of the Holy Spirit rest and abide with us until Jesus comes.Surely goodness and mercy shall follow us all the days of our lives and we shall dwell in the house of the Lord forever and ever.In Jesus name, amen.Amen."

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

        <section className="bg-white pt-10 pb-8 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-xl bg-[#f0fafa] border border-[#2a9df4]/20 px-6 py-5 text-center">
              <p className="text-[#2a9df4] font-semibold mb-1">Watch Live Every Sunday</p>
              <p className="text-[#555] text-sm">
                This message was preached at Fountain of Grace International, Pretoria North.
                Join us every Sunday at 09:00 or{' '}
                <a href="https://www.youtube.com/@fgipta" target="_blank" rel="noopener noreferrer" className="underline text-[#2a9df4]">
                  subscribe on YouTube
                </a>{' '}
                to catch future sermons live.
              </p>
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
              If you are in Pretoria North,{' '}
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
