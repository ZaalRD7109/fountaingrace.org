import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Why Your Biggest Battle Always Follows Your Best Decision | Fountain of Grace International',
  description:
    'The moment you make the right decision is often when everything falls apart. This is not failure - it is confirmation. Pastor Ricardo Zaal explains why from Pretoria North.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/sermons/why-your-biggest-battle-follows-your-best-decision',
  },
  openGraph: {
    title: 'Why Your Biggest Battle Always Follows Your Best Decision',
    description:
      'You made the right choice. Then everything collapsed. This message explains why opposition after a breakthrough is not a sign you got it wrong. Fountain of Grace International, Pretoria North.',
    type: 'article',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International - Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/sermons/why-your-biggest-battle-follows-your-best-decision',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Why Your Biggest Battle Always Follows Your Best Decision',
    description: 'Every major breakthrough in Scripture was preceded by intense warfare. David, Jesus, Joseph, Paul - the pattern is consistent. The bigger the decision, the bigger the opposition. This message explains why, and how to hold your ground.',
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
    datePublished: '2026-05-10',
    url: 'https://www.fountaingrace.org/sermons/why-your-biggest-battle-follows-your-best-decision',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Sermons', item: 'https://www.fountaingrace.org/sermons' },
      { '@type': 'ListItem', position: 3, name: 'Why Your Biggest Battle Follows Your Best Decision', item: 'https://www.fountaingrace.org/sermons/why-your-biggest-battle-follows-your-best-decision' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'WHY YOUR BIGGEST BATTLE ALWAYS FOLLOWS YOUR BEST DECISION',
    description: 'The moment you make the right decision is often when everything falls apart. This is not failure - it is confirmation. Pastor Ricardo Zaal explains why opposition after a breakthrough is not a sign you got it wrong.',
    thumbnailUrl: 'https://img.youtube.com/vi/z5QxF4LbCl8/maxresdefault.jpg',
    uploadDate: '2026-05-10',
    embedUrl: 'https://www.youtube.com/embed/z5QxF4LbCl8',
    url: 'https://www.fountaingrace.org/sermons/why-your-biggest-battle-follows-your-best-decision',
    author: { '@type': 'Person', name: 'Pastor Ricardo Zaal' },
    publisher: {
      '@type': 'Organization',
      name: 'Fountain of Grace International',
      url: 'https://www.fountaingrace.org',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why does everything go wrong right after I make a good decision?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'This is a consistent biblical pattern - not an accident and not a punishment. Jesus was baptized - confirmed by the voice of God - and immediately went to the wilderness for 40 days of testing. David was anointed king and immediately spent years being hunted by Saul. Joseph received a dream and immediately ended up in a pit. The opposition that follows a right decision is confirmation that what you decided carries weight. The enemy does not attack what does not matter.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I know if I am in a spiritual battle or just facing consequences of bad choices?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The timing is the key indicator. If opposition comes immediately after you made a clear, God-directed decision - a commitment to something good, a step of obedience, a decision to change direction - that is spiritual warfare. If the consequences follow a pattern of disobedience or poor decisions over time, that is a different conversation. Ephesians 6:12 says our battle is not against flesh and blood. When a new assignment triggers new opposition, that is the context Paul is describing.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does the Bible say about spiritual warfare after making right decisions?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Every major biblical figure faced their greatest battle immediately after their greatest moment. Jesus: baptism, then wilderness. David: anointing, then years of persecution. Paul: conversion, then immediate attempts on his life. 1 Peter 5:8 says the enemy walks about 'seeking whom he may devour' - and the ones most targeted are the ones most committed. The battle is not a sign you are losing. It is a sign you are moving.",
        },
      },
      {
        '@type': 'Question',
        name: 'How do I hold my ground when the battle is intense?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Ephesians 6:13 says 'having done all, to stand.' The instruction after putting on the full armour is not to attack - it is to stand. Holding ground means you do not retreat from the decision you made under pressure. The goal of opposition after a right decision is almost always to get you to reverse the decision. If you understand that the battle is confirmation rather than contradiction, you can stand firm on the original word you received rather than reinterpreting it under fire.",
        },
      },
    ],
  },
]

const points = [
  {
    n: 1,
    title: 'The Pattern Is Consistent Throughout Scripture',
    scripture: 'Matthew 4:1 / 1 Samuel 18:6-11',
    body: 'Jesus was baptized - the Father\'s voice came from heaven, the Spirit descended like a dove. Immediately after, He was led into the wilderness for 40 days of temptation. David was anointed king by Samuel in front of his brothers. Immediately after, the spirit of the Lord departed from Saul and Saul began to pursue David\'s life. This is not coincidence. The moment a God-directed decision is made, it enters contested territory. The opposition that follows is a response to what you just decided, not evidence that you decided wrong.',
  },
  {
    n: 2,
    title: 'The Bigger the Decision, the Bigger the Battle',
    scripture: 'Job 1:6-12 / Luke 22:31-32',
    body: 'Jesus told Peter, "Satan hath desired to have you, that he may sift you as wheat." This was spoken directly before Peter\'s greatest test. The word "desired" implies request - Satan had to ask. What is being targeted is always proportional to what is at stake. Ordinary decisions rarely attract extraordinary opposition. When you suddenly feel like everything is working against a decision you know was right, that opposition itself is information: what you decided carries weight that the enemy recognises, even if you cannot yet see it yourself.',
  },
  {
    n: 3,
    title: 'The Battle Is Confirmation, Not Contradiction',
    scripture: 'Ephesians 6:12-13',
    body: '"For we wrestle not against flesh and blood, but against principalities, against powers, against the rulers of the darkness of this world." Paul wrote this to people who were already walking in their calling. The battle is not a sign you stepped out of God\'s will. It is a sign you stepped into it. If the decision you made did not threaten anything, it would not be resisted. The goal of the opposition is almost always singular: get you to reverse the decision. Understanding that changes how you interpret the intensity of what you are facing.',
  },
  {
    n: 4,
    title: 'Having Done All - Stand',
    scripture: 'Ephesians 6:13',
    body: '"Wherefore take unto you the whole armour of God, that ye may be able to withstand in the evil day, and having done all, to stand." The instruction after putting on every piece of armour is not to charge forward. It is to stand. Holding ground means refusing to retreat from the decision you made before the pressure started. The test of a decision is not whether it brings peace immediately - it is whether you are still standing in it when the opposition has done its worst. Many breakthroughs are abandoned three metres from the finish line because the battle intensified right before the resolution.',
  },
]

const transcript = "about a decision that you have made you made a real decision you step up and you finally committed\nand then everything seems to be going wrong it's just harder it's just not easy\nyou expected the door that opens would be easy to go through but everything just stopped you\nyou've done the right moves in your life but suddenly something is just stopping you\nit's like the things that were stable it just fall apart you know like in your life there was that\nstable thing and it just fall apart you feel you exhausted\nand you're wondering the decision that you've made was it the wrong decision\nand this is the moment i want to talk about is that decision that you have made and now suddenly\nfeel like it's wrong but it is too today it's mother's day and i want to make sure that\nwe celebrate the mothers i just want the one to come and do that poem\nit's the standard\nshe said yes before she understood mother's day pantanoff grace international the angel came with\ngoodness she did not feel it as goodness at first she felt it as confusion as fear as how is this even\npossible the biggest announcement of her life came with the biggest question of her life\nthat is what today is about your best decision will always be followed by your hardest battle\nmary knew that before anyone she said yes anyway and the world was never the same\nto every mother here today you have said yes to things you did not fully understand\nthat is not weakness that is exactly what faith looks like happy mother's day\ndid you hear what she says she said the things that you you have not prepared for but yet you said yes\nyes anyway the world was never the same after that yes\nso i want to take this moment and and and and and say to you happy mother's day\nnow my message\ntoday is also at the same time entitled\nwhy your biggest battle always follow your best decision\nwhy is it that the biggest battle\nalways follows your best decision now i want to take you on a journey\nand i want to i have entitled the message why your biggest battle always follow your best decision\nunder the message i said what adam and israel\nnot do i mean could not do jesus did it what adam and israel could not do jesus did it\nnow if you go to to the book of matthew and you read matthew 3 verse 13 um i think let's just go there\nmatthew 3 verse 13 i said to you last week i said to you\nhow jesus was uh uh how he was announced\nmatthew 3 verse 13\nmatthew 3 verse 13 says the following\nthen come at jesus from galilee to jordan\nto jordan and to john to be baptized of him\nbut john forbid him saying i have need to be baptized of thee and cometh down to me and jesus\nanswered said unto unto him suffer it be so now for thus it cometh as to fulfill all\nrighteousness then suffered him now imagine\nthis is being after he get baptized\nthe father now announced him this is my beloved son\nhuh\nlet's go to 13\nand low a voice from heaven saying this is my beloved son in whom i'm well pleased\nnow\nsome of the things you need to understand that\nwe as human beings when somebody announced us\nwe got fear you know like let me make an example with public speaking do you know that\nat some stage laverne was\nif you can call her up on a stage like this to speak she wouldn't have done it\nbut because she done what does i review review\nyeah they didn't yeah they didn't i don't know something they don't dance so review sounds right yeah\nokay that thing she did that and she did she sang in the choir so\nit's something that is stage frighting you it give birth stage fright you see\nand you might think wow when she comes up here she comes up confident but do you know\nknow at first when she was announced the heartbeat went\nwith other beats that you couldn't understand because it's your first time\nnow when jesus was announced it's his first time to be now announced\nmy beloved son now you can just picture that you call it jealousy maybe\nyou know when i say jealousy those people that they don't like you\nsuddenly when somebody announced that you must come and speak on in front of many\njealousy is now suddenly creeping in this is my beloved son\nson and here comes jesus\nbut i need you to understand most people read matthew 4 and they see a temptation story\nbut what you literally actually seeing is an order of how things happened\nbecause then the order suddenly changed because if you read here\nhe says in matthew 4 then was jesus led up\nof the spirit into the wilderness to be tempted of the devil\nthe devil\njesus got announced\nthat this is my beloved son\nnot after that it happened that jesus got wow\nnow hand clap somebody says you did it no\ndo you know what's the first thing that happened directly after this the sentence i am well pleased\nit happened that jesus now got let up\nnow let me explain what i mean by that by this statement i'm just seeing here now\nsomebody got announced that they are pregnant\nyou're going to receive a bouncy baby boy\nand what did mary do that does as mary mary magdalene\ni almost said where does my mother come from\nmary god announced that she's expecting\nthis boy what goes through her mind what would people say\nthat is the first thing after that that can happen\na lot of us when we get announced as managers\nthere's so many things that immediately after that happened\nnow that you are a manager please sort out this sort out that do this do that\nso your battle is the hardest that time because you gotta step up\nsomebody announced you to say hey\ndid this and that and that and the other\ndo you know what happened with me\ni stepped out of out of\nmy way where i was working\nand the first thing that happened after i left my way\nthe question was how would i\nactually look after my family\nwhere would the money come from\nbut lo and behold can i tell you today\nif i would have stayed in my way up till today\ni wouldn't have had any growth\nbut i had to step up and step out\nhow many of you are making real decisions like like really you made a decision and that decision\njust after you made the decision things got harder\nthings got even tougher\nafter the voice of god spoken to jesus\nimmediately he was led to the wilderness\nand can i tell you something\nthe thing about the wilderness is that your situation\nbecomes a wilderness after you got into a\nnewer position\nnow let me ask you the very first time when you\ntook up the job that you are in at this moment as a grown-up\ndo you remember how hard it was\nfor the very first three months that you wanted to give up\nyou wanted to give up\ni had a conversation with somebody\nand the person was telling me ah you know\nyou know if i can think where i was at that time\nand where i am today you're you're you're\ni can't believe it i almost gave up\nwilderness situation that's your wilderness situation\nimagine jesus the wilderness situation that for 40 days no food\nnot even a crowd to to say well done your fasting day three went well\nnothing no confirmation you are the beloved son of god\nyou know because this is what we want when somebody says to you\nyou are a great prophet of god they they put you on a platform\nafter that you want somebody else to come and confirm\nno confirmation nobody coming to tap you on your shoulders you did well\nnothing nothing nothing and here we expect everybody after we become a mother to come and congratulate us\nbut some won't come the one that you expect that needs to come he's not there\nwilderness situation when you when you got when you when you got pregnant uh mamrut when you got pregnant you see\nthese people don't care about me\nyou get my you get my point a wilderness situation\nwhy is people not even caring about me why they don't even congratulate me\nwilderness situation\nsome of the things that we go through there's no confirmation of what is happening\nbut yet we have to keep on keeping on\nbut do you know that this order comes like this now\nnumber one jesus got baptized\nnow after he got baptized\nthe voice speak to him announcing him\nimmediately after that announcement\nhe went into wilderness\nbut do you know in the wilderness there was no\nconfirmation of who he is no crowned 40 days of loneliness\nand just when he thought he's finished his 40 days of fasting\nhere comes\ntemptation the first thing after 40 days that he did\nthe devil comes with condemnation\nif you go to uh uh\nmatthew 4 verse 3\n4 verse 3\nlet's let's start with two just to give you a a a bit of a background he says and when he had fasted\n40 days and 40 nights he was afterward and hungered\nimagine debra is hungry\nyou got baptized you gave your heart to the lord you got baptized\nafter you got baptized god called you you are a son i have called you by your name you are mine\nand suddenly when god told you you are mine suddenly you went into a wilderness situation and there\nyou already feel that your character has been\nafrikaans\nthey fought your character\nbecause when you were called the beloved now suddenly you went into the wilderness where nobody even acknowledged you\nah you you you walk in the street somebody call you hey ricardo\nah man don't you know i'm a pastor\nyou want that confirmation\nno you you you you just got baptized as a prophet you're walking there they say\nhey hey caro you got upset hey i'm not i'm not kadu i'm prophet kadu\nhell no there's there won't be any confirmation to that even your best friend will still call you\nby your name that they are aware of it will take you years for him to even change to that name\nno confident confirmation\nand here you're thinking ah confirmation i don't get confirmation and suddenly the temptation comes\nbecause this is after jesus got hungry hungry when he was on his vulnerable time\nthe time the time when he was almost about giving up\nyes satan walking\nseeing\nand when he the temp tempter come to him he said if thou be the son of god command that these stones be made bread\ncan i tell you something when your breakthrough comes and you got tempted the first thing\nsatan will talk about is your provision\nhe will speak into your provision do you know what he will say in your provision\nprovision he will say in your provision the bible says and he will be so correct on the bible\nthat every word he speaks will be a specifically from the bible\nit will not be a mismatch from the bible it will be a specific word but let me let me before i get into that\nlet me just show you so after baptism the voice speak beloved son\nannouncing you after announcement immediately you go into your wilderness after wilderness suddenly there's no\nfood no no provision no crowd no confirmation then suddenly satan come to tempt you\nbut when satan come to tempt you\nthat's where the things gets easier when you stand temptation\nyou win\nbecause if you go to matthew 4 verse 10 and it reads as follows then say jesus unto him\nget thee hence satan for it is written thou shalt not worship the lord thy god and him\nonly shalt thou serve then the devil leave it did you hear what he says then the devil leave it\nso he won\nand this is the order that you need to understand\nwhich i want you to to to to prove to you\nyour ministry only begins when you went through all these orderly things\nyour ministry begins after there's no provision there's nothing that you can show\nyour ministry gets after that temptation of of of you i mean after that of not eating\nthen that temptation will come and then satan will not win because you have not given up\nif you give up that's where you he got you\nnotice\ni need you to to say what comes after our announcement was not the ministry it was not your ministry as yet\nnot a blessing\nnot even open doors next the wilderness comes after them the wilderness\ni mean somebody last week you remember i i i spoke about your your your character\nlast week i spoke about how your character got built\nonce jesus was told a beloved son his character was given so he took on what god said about him\nbeing that character about him\nhe was not\nhe was not told by via scanner news he was not told by a monk or boss he was not told he was told by god himself\nand that is why it created an identity for him so imagine you just got told what is your\nidentity identity and your identity got tested imagine huh just after god tells you you are\nsatan comes and tells you hey man are you sure if you are the son of god that's what was what you say\nyou are hungry now why don't you just turn this into\ninto into something to eat imagine you are hungry and ibra is talking out of the bible exactly\nwhat you want to hear at the time where you need to eat\nat the time when you need to hate is the exact same moment that he speaks to you\ni want you to understand something there's some sort of order\nif you read from matthew 3 from 16 to 17 you would actually see how it went down\nin whom i well pleased that's what he says in whom i well pleased\nthen when you go to matthew 4 verse 1 and jesus was led up of the spirit into the wilderness to be\ntempted by the devil i need you to understand there's there's something about the greek or the hebrew\nthat it open up what we sometimes think it might be but this one let me read to you now it's an ego\nwhich means let up it's to lead up or to bring up god did not push jesus into the wilderness he let him\nso it was not a push from behind it was a leading from up front and some of us understand\nit's not a push from behind it's not a push from behind it's not a push from behind it\nbecause when you are led it means that somebody is in front of you already\nso why would you why would you feel that when jesus was led this was almost like as if it was\na temptation from god because this is how it reads that and jesus was led up of the spirit into the\nwilderness wilderness wilderness to be tempted of the devil can you see how god even prepare your\ncharacter way before something happened because god knew jesus character before the devil actually could\ncome and therefore he was led to that wilderness\nand i need you to understand that word left is intentionally there it's an intentional word\nit's not a word that was just deliberately put there no it was an intentional that word was there\nyou know\nsome of the things that i i i sometimes go through i sometimes feel like\nish mara god man hi man this one is too much for me it's really too much then i i'm i'm going in my\nhead how can i get out of this ask my wife she will tell you whenever god speaks and and and i can see\nsomebody in the mall and i'm like i need to speak to that person i look at all the reasons why not\ni'm telling you i will look at all the reasons why not\ngod but the thing that you must understand god lead while satan tempts for destruction\nand when god lead he leads you for preparation of what is to come\ncan you see what i meant i said he led up to the spirit into the wilderness to be tempted so when god's\nspirit is leading you it's preparing you so that you might know what is about to come your your\nhanging on the cross is about to come\nhe's making you stronger than what you are at this moment\nthat's the same the the same location that was used satan's uh and and and god's but it was the\ndifferent source that comes that makes a difference let me explain\ni said jesus was led up to up of the spirit into the wilderness you see while satan was also at that\ntime awaiting on him in the wilderness\nthis different sources different acts one leads 110\nand i need you to understand that there's a different purpose of both of them the one purpose\nthis is\nno no no no let me let me let me do this\nwhen fire hits gold\nit does not take away the gold it purifies the gold\nbecause it takes what is not gold out of the gold\ni hope you get that revelation because when fire goes\ni mean when gold goes into fire whatever is not of the gold will be burned out\nyou need to go through fire sometimes\nto get rid of the nonsense that is not of god\nand i need you to get that because when you get that jesus has given us\na do you call it jesus has given us a\nwhich but i'm trying to i'm trying to get that name like a path\nnot can i call it a path like jesus has walked before you\nall these things that he went through\nis the things that you are going to go through\nthat's why he said i'm only worried\ni walked the same earth i went through the same things\nbut remember\ndo not confuse the wilderness\nthat god walked with you or walk in front of me with the wilderness that you do without him\ndon't get confused with the two because walking through a wilderness where god is not leading you\nit's something else\nlet me let me let me move on\nremember i said to you earlier on\nthe things that adam and israel did not do jesus did it\ntwo people face the same thing\ntwo people face the same thing do you know that adam\nwas full when he was tempted\nhe was he was dead\ntoo you know like that guy he ate\nhe didn't fast\nimagine\ndaman didn't fast\nbut yet he made the serpent\nto tempt him\nto eat what was not necessary to eat\nand the curse was broken by jesus\nwhere he was empty stomach\nand he broke the curse\nof temptation\nhuh\ndo you understand the difference because the garden was full\nthe garden was\nthe garden was full of food\nand god was in in his presence\ncan you see\ngod was in his presence you remember i said to you\nthere's a difference between god being with you in the wilderness\nand god being you being in the wilderness without god\nthere's a difference\nand this difference you should be knowing you should know the difference\nyou should know the difference\nthe garden was the garden was full of food\nthe garden was full of food it was paradise\nand that was in the presence of god\nnot outside the presence of god\njust one question from the serpent\nhe said did god really see huh\nwhy do you have you are in the presence of god\nhe says did god really see\nand here you're thinking\nwhat now\nand adam fell for it\nadam fell\nadam fell hook line and sinker\nnow the same thing that happened\nwhen you're talking about israel\nisrael\nlet's talk about israel\nisrael\nwas brought out of egypt\nby miracles\ndo you know for 40 days and 40 nights\nthey traveled with manna with quill with water out of the rock\nthey had everything they were\nthey had everything they were needed\nthe things that was for god\nthat god already says\nthey still grumbled\nthey still complained\nthey even built\nidols\nidols yeah\nthey built idols\nimagine they built idols for 40 years\nand here comes jesus\njust because of 40 days of being in the wilderness\nhe already cut off that curse of wilderness in our lives\nyou are for 40 years and 40 days\nyou have the food that you are in need of\nbut yet you go after idols\nwhere jesus just for 40 days\nhe took the wilderness situation\nand he turned it upside down\nturned it upside down\nthe same wilderness\nno food no crowd\n40 days hungry and alone\nand yet he won\nand yet he won\nsome of the things that we're going through\nadam failed while he was full\nlet me explain no no no let me explain to you this\nwhen we go through life\nwe complain\nwith stomach full\nand a full plate in our hands\nthat there's no food in the fridge\neven full plate in the hand\nstomach full\nand yet we complain about the fridge\nthat doesn't have food\nhey man\nthis and that\njesus was tempted without having food\njesus was even told ebra\nyou know what\nthis look look look the whole place here\nif you can see\naccording to psalm 91\neven\nthat man is using\nthe scriptures\nto tempt jesus\nand here you get tempted\nby somebody\nwho knows scripture\nnothing\nnothing\nhuh\nlet me let me\nlet me let me\nlet me read to you romans 5 verse 19\nromans 5 verse 19\nfor as by one man's disobedience\ndid you hear that\nby\nfor as by one man's disobedience\nmany were made sinners\nso by the disobedience of one\nshall many be made righteous\ni mean so by the obedience of one\nshall many be made righteous\nhe is the obedient son\nthe true israel\nthe second adam\nhe didn't overcome just for himself\nhe overcome for everyone\nwho would come after him\nso jesus went into the same test\nhe went into the same\nsame brook\nenvironment that you went through\nhe even went\nhe even went\nthrough the same things you went\nbut yet\nyou don't have to go through it\nand still you will have the same victory\nthe same victory\ni want to give you\nthree attacks\ni just want to give you brief now\ni'm not going to give\ni'm not going to\nhammer on it\nthe one attack that you must understand\nthe enemy will always hit you\non your most vulnerable point first\non your most vulnerable point first\nthat's the number one\nand if you go to\nthrough the the greek\nif you go through to\nmatthew 4 1 and 3\ni just read one quickly\nthen jesus was led up\nof the spirit into the wilderness\nto be tempted of the devil\nand when he had fasted 40 days and 40 nights\nhe was\nthe word\nand hungered\ndid you hear he says afterward\nnow the greek word here for afterward\nis histeron\nnow histeron\nthe the meaning of it is later\nafter the fact\nthe attack come specifically after the fast\nat the moment of mexican i mean maximum depletion\nso meaning to say jesus was depleted there was nothing left of me\nafterwards\nso meaning to say after everything\nhe was hungry\nafterward\nand and that is a deliberate timing that\nbecause remember when you are\nat your weakest\ngod come through\nstrongest\ni i need you to get this point\nlet the weak\nsay i'm strong\nlet me leave it at that\nand then he called him the tempter\nnow the tempter is the one who tests with intent to cause failure\nhe wants you to fail\nthe greek word tempter\nthe word is a\nparam\nzomen\nminimum\nis\npay\nrazo\nmen\nnow\nbetter zone\nmen\ni don't know if i say it correctly\nthat's how it sounds like i think\nso its intent is to cause failure\nhuh\nit's like\nthis is what happened\nsatan study your 40 days of wilderness\nwhat is the things\nyou know like when we're talking about 40 days of wilderness what is the things\nthat that um\nthat you are most vulnerable of\nso he he study you as his opponent\nbut first peter 5 verse 8 says\nbe sober\nbe virgin virgin\nvigilant sorry\nfirst peter 5 verse 8\nfirst peter 5 verse 8\nbe sober\nbe very vigilant\nbecause your adversary the devil\nas a roaring lion walketh about seeking whom he may devour\nimagine\nbefore\nyou can say anything\nsatan\ndid not attack jesus because he was weak\nno\nat that moment\nhe did not attack jesus because jesus was weak\nhe attacked jesus because he knew\njesus will become dangerous to him\nsatan know\nwhy he's putting you through what you are going through at this moment\nbecause you are a danger to him\nand if you think that\nthe danger that you're going through now\nis like\nit's\nlisten\nyou are not being hit because you are failing\nyou are not going down or feel like you're going down because you are failing\nno\nthat's not the case\nyou're getting the hits or you're getting the smacks or you're getting the\nthe boxing gloves\nbecause you matter\nyou matter\nnumber two\nthe one thing you must understand\nthe enemy knows your bible\nthe enemy knows your bible\nif you think he doesn't know your bible\nand because he knows your bible\nhe will use it against you\nlet me\nlet me let me let me ask you\nhave you ever sat under a teaching for years\nthat had scripture that had passion\nyou know it had the man of god delivering it like wow\nand yet it was wrong\nit was wrong\nsome of the men of god\ni can guarantee you now\nup until today\nin the in the northern cape\na preacher\ncannot look like this\na preacher\ncannot look like this\nthey say\nthere's a afrikaans word\nyou\nyou\nthat's not in the case for you\ni'm not saying it is not\nit's not even in the in in in in\nin america\npeople will still tell you how can you be preaching like this\nyou must go and put on your jacket\nthen you look fine\na jacket doesn't make me\nmore holier\na jet jacket doesn't make me even jesus\nmy looks will never be\nwhat can tell me\nwe had a\nwe had a\ni think it was a funeral\ni said\nit was a funeral\nwe had a funeral\nand one of the things\nthat come up in the funeral\nis this guy\ntelling me\nyo i get upset\nwhen the people go to church\nwithout the jacket\nand here i'm looking at this guy\nthinking to myself\nyo yo yo\nhere we you got the pot\nbut i'm not going to\ni'm not going to argue with him\nthat's his feeling\nthat's how he grew up\nthat's how he was indoctrinated\nbecause the indoctrination\nof how he grew up\nmakes him not to listen to somebody\nwho doesn't have a jacket on\nbecause now you are blocked\nto listen to what the spirit of god is telling you\nbecause you sit not with a jacket\nand yet you miss the word of god\nthe enemy knows the bible\nbut he's going to use it against you\nthe words\nthat they use\nis to fulfill their own\nsinful desires\nmust i tell you something\nif somebody comes in here\nhaving the shortest of skirt\ndo you know the preacher that sits in front\nof preach in front\nwill tell you\nplease go close that lady's legs\nbecause of his desire\nit's not because of the word\nit's his desire that makes him to see such things\nit has nothing to do with who you are\nthe bible\nyou must know satan knows the bible\nand he will be using it against you\nhe will say it is written\naccording to the greek word\ngregraphi\nit stands written\nthe devil use a real verse\ncorrectly quoted\nanytime when something happened in your life\nhe will use that\nhow many times we told you\nthere is therefore no condemnation\nin them who are in christ\nyou remember we keep on saying that to you\nwe have said it to you\nthere is therefore no condemnation\nin them who are in christ\ndon't let the devil condemn you\nfrom what is said in the bible\nmaking you to feel bad\nno you have not sinned against god\nanytime you feel that you have sinned\nit's easy the only thing you do\ngod i've made a mistake\ni'm asking for forgiveness\nand god is\nwillingly he's ready to forgive you\nit's not necessary for you to keep on going to your past\nthings that you have made mistakes on\nsatan is the one who will keep on telling you\nabout your mistakes in the past\nnumber three\nnumber three is the enemy offers the destination\nwithout the obedience\nthe enemy\noffers the destination without the obedience\nthat qualifies you for it\nwithout the obedience\nthat qualifies you for it.\nMiskat, who long does once we make up?\n18 years?\nBecause we met two years\nbefore Levin was born.\nYeah.\nYou cannot know yourself.\nFor 18 years I know my wife\nand my wife can tell you\nfor this 18 years that she knows me\nI've been scammed many times.\nDo you know why I've been scammed?\nBecause of my desperation\nfor certain things in life.\nI got scammed.\nWe wanted to buy a car.\nWe were so desperate to get the car.\nSomebody told me only a thousand rand.\nI'll make it for you.\nDo a shopride transfer.\nDo a shopride transfer.\nI'm desperate to get the car.\nBro, I'm telling you\nI want the car.\nThousand rand is nothing.\nI put the money\nI put the money\nimmediately when I\nwhen the guy got the money\nwith the familiar phone\nphone is gone\ndead.\nI got scammed so many times\nbecause of\ndesperation.\nSatan tells me\nthe destination is your car.\nBut he didn't tell me\nthere's right ways\nto go about it.\nYou can get a car.\nYes.\nDon't worry.\nJust put Jojo.\nToday\nI know of better.\nI don't say\nI can't be scammed anymore.\nMamrut\nDon't\nDon't say\nI can't be scammed.\nYou\nyou\nyou\nyou don't know\nhow these scammers work.\nThey are\nlike this\nquick\nfast fast\nthe enemy\noffer you\nthe destination\nand he doesn't care\nabout your obedience\neven if you are\ndisobedient to God.\nI want you to understand\nI'm not standing\nin front of you\nbecause I have not\ngone through\nwhat you haven't\nbeen going through.\nSome of the things\nI might not have been\ngoing through\nlike the way you did\nbut we also\nwent through a lot.\nWe went through a lot.\nI'm telling you now\nI was having a conversation\nwith my friend\nthe other day\nspeaking about\nour days\nat school\nand the one thing\nthat came up\nhe said\ndo you know\nbefore we\nbefore we\nentered the school\nwe used to make sure\nthat we\nwe get drunk\nsmoke\nso that we can\nbe able\nto face the teacher\nand tell them nonsense.\nYou get\nguts\nwhen you\nare drunk\nyou have\nguts\nif you are\nif you are\nlike me\nyou don't\nhave guts\nyet the Bible\nsays\nin Psalm 2\nverse 8\nask of\nme\nand I\nshall give\nthee\nthat's now\nPsalm 2\nverse 8\nask of\nme\nand I\nshall give\nthee\nthe heathen\nfor thine\ninheritance\ninheritance\nand the\nuttermost\npart\nof the\nearth\nfor thy\npossession\nso can\nyou see\ncan you see\nPsalm 2\nverse 8\nsays it\nask\nask of\nme\nand I\nshall\ngive\nthee\nthe\nheathen\nof\nthine\ninheritance\nand the\nuttermost\nparts\nof the\nearth\nfor thy\npossession\njust\nnote this\nnow\nthe\nkingdom\nwere already\npromised\nto Jesus\nwhen\nSatan\nsays\ncan you\nsee\nthis\nkingdom\nI\ncan\ngive\nit\nto\nyou\nthe\ndevil\ngave\nthe\ndestination\nhe\ngave\nthe\ndestination\nknowing\nthat\nit's\nnot\nhis\ndo you\nknow\nthat\nJesus\nis\nthe\nonly\none\nthat\nhad\nto\nbe\nresurrected\nto\nget\nthat\nkingdom\nfor\nus\njust\na few\nthings\nthat I\nwant\nyou\nto\nknow\nyou're\nnot\nalone\nyou're\nnot\nalone\nremember\ntemptation\nis not\nthe same\nas sin\ntemptation\nis not\nthe same\nas sin\nyou get\ntempted\nbut don't\nsin\nHebrews\n4\nHebrews\n4\nverse\n15\nfor\nwe\nhave\nnot\nan\nhigh\npriest\nwhich\ncannot\nbe\ntouched\nwith\nthe\nfeeling\nof\nour\ninfirmities\nbut was\nin all\npoints\ntempted\nlike\nas\nwe\nare\nyet\nwithout\nsin\nlet\nus\ntherefore\ncome\nboldly\nunto\nthe\nthrone\nof\ngrace\nthat\nwe\nmay\nobtain\nmercy\nand\nfind\ngrace\nto\nhelp\nin\ntime\nof\nneed\ncan\nyou\nsee\nthere\nboldly\nwhich\nmeans\nboldly\nmeans\nwith\nconfidence\nit\nmeans\nwithout\nfear\nit\nmeans\nopenly\nnot\ncreep\nto\nthe\nthrone\nor\nnot\nbeg\nfor\nthe\nthrone\ncome\nboldly\nto\nthe\nthrone\nyou're\nnot\nfighting\nthis\nalone\nI\ncan\nguarantee\nyou\nknow\nthe\nsame\nspirit\nthat\nled\nJesus\ninto\nthe\nwilderness\nit\nlives\ninside\nof\nyou\nthat's\nthe\nsame\nspirit\nthat\nled\nJesus\ninto\nthe\nwilderness\nwho\nlives\ninside\nof\nyou\ntemptation\nis not\nyour\nidentity\nit is\nthe\ntest\nthat\nprove\nwhat\nalready\nis\nwithin\nyou\nand\nI\nneed\nyou\nnumber\ntwo\nI\nneed\nyou\nto\nunderstand\nI\nsaid\nnumber\none\nI\nneed\nto\ntell\nyou\na\nfew\nthings\nnumber\none\nis\nyou\nnot\nalone\nand\ntemptation\nis\nnot\nthe\nsame\nas\nsin\nnumber\ntwo\nwhat\nyou\nneed\nto\ndo\nis\nto\nbuild\nthe\nword\nbefore\nyou\nget\ntested\nbuild\nthe\nword\nin\nyou\nI\nmean\nbefore\nyou\nget\ntested\nbuild\nthe\nword\nin\nyou\nbefore\nyou\nget\ntested\nthat\nis\nwhy\nJesus\ncould\nsay\nit\nis\nwritten\naccording\nto\nMatthew\n4\nverse 4\nnow let\nme let\nme make\nan example\nyou cannot\nbuild a\nwall\nin the\nstorm\nyou\nhave\nto\nbuild\na\nwall\nbefore\nthe\nstorm\nyou\ncannot\nbuild\na\nhouse\nin\nthe\nstorm\nyou\nhave\nto\nbuild\na\nhouse\nbefore\nthe\nstorm\nyou\ncannot\nbe\na\ndoctor\nbefore\nyou\nhave\nstudied\nto\nbecome\na\ndoctor\nand\nsome\nof\nthe\nthings\nyou\nonly\naccess\nwhen\nyou\nare\ntempted\na\nfighter\nor\nlet me\ncall it\nboxer\nor\nkarate\nkit\nor\nwhatever\nwhat's\nthose\nguys\nthose\nguys\nthat\nfight\nkarate\nwhat\ndo\nyou\ncall\nthem\na\nboxer\nis\na\nboxer\na\nrugby\nplayer\nis\na\nrugby\nplayer\nyou\nknow\nwhat\nI'm\ntrying\nto\nsay\na\nrugby\nplayer\ncannot\nknow\nthe\nmoves\nthe\nday\nwhen\nhe\ncomes\non\nthe\npitch\nhe\nhas\nto\npre\nread\nthe\nmoves\nyou\ncan't\nget\nsomebody\ninto\nthe\nrugby\nfield\nand\ngive\nhim\na\nball\nwhile\nhe\nwas\nplaying\nsoccer\nbefore\ndo\nyou\nknow\nwhat\nhe\nwill\ndo\nhe\nwill\nkeep\non\nkicking\nthe\nball\ninstead\nof\nthrowing\nit\nwith\nthe\nhand\nyou\nneed\nto\nbe\nprepared\nfor\nrugby\nbefore\nyou\nplay\nrugby\nnumber\nnumber\nthree\ndon't\nplay\nwith\nSatan\ndon't\neven\nopen\na\nsmall\ndoor\nor\nlet\nme\nsay\nshut\nthe\ndoor\nhard\nI\nthink\nthat's\na better\nway\nshut\nthe\ndoor\nhard\nbecause\nangels\ncome\nafter\nthe\ntest\nnot\nbefore\nI\nmean\nSatan\nhe\nsays\nsubmit\nyourself\ntherefore\nto God\nresist\nthe\ndevil\nand\nhe\nwill\nflee\nfrom\nyou\nthat's\naccording\nto\nJames\n4\nverse\n7\nhe\nsays\nresist\nthe\ndevil\nand\nhe\nwill\nfree\nfrom\nyou\nso\nwhen\nwhen\nwhen\nwhen\nyou\nfeel\nlike\ntempted\nrun\naway\nfrom\nthe\ntemptations\nif\nyou\ncan\nrun\naway\nfrom\nthe\ntemptations\nif\nyou\nknow\nyou\nhave\nlung\nfingers\nbut\nif\nyou\nknow\nyou\nare\na\nthief\nand\nyou\nsee\nsomebody's\nwallet\nis\nthere\ndon't\ngo\ncloser\nto\nthe\nwallet\nbecause\nyou\nwill\nbe\ntempted\nto\ntake\nit\nrather\njust\nsay\nhey\nbruh\nyour\nwallet\nbecause\nyou\nwill\ntake\nit\nrather\nresist\nthe\ndevil\nand\nhe\nwill\nflee\nand\nyou\nknow\nyou\nknow\nthe\nthing\nthat\nI\ncan\ntell\nyou\nnow\nlisten\nto\nthis\nto\nthis\npart\nthe\nscripture\nhe\nsays\nthen\nJesus\nsays\nunto\nhim\nget\nthee\nhence\nSatan\nfor\nit\nis\nwritten\nit's\nalmost\nlike\nhe\nsay\nget\nbehind\nme\nSatan\nit\nis\nwritten\nso\nhe's\nchasing\nthe\ndevil\naway\nit\nis\nwritten\nthou\nshalt\nworship\nthe\nLord\nthy\nGod\nand\nhim\nonly\nshould\nI\nserve\nthen\nthe\ndevil\nleave\nit\ncan\nyou\nsee\nif\nyou\nare\nprepared\nwith\nthe\nword\nof\nGod\nthen\nhe\nwill\nleave\nand\nonly\nwhen\nhe\nleft\nand\nbehold\nangels\ncome\nand\nministered\nunto\nhim\nand\nhere\nyou\nare\nwaiting\nfor\nangels\nto\ncome\nand\nhelp\nyou\nwhile\nyou\nare\nstill\nin\nyour\ntempted\nstage\nwhile\nthe\ndevil\nis\nstill\naround\nhe\nsays\nthe\ndevil\nleft\nand\nthen\nangels\ncame\nthe\ndevil\nleft\nand\nthen\nangels\ncame\njust\nremember\nthe\ntest\ndoes\nnot\ncancel\nyour\ndestiny\nyour\ndestiny\nis\nyour\ndestiny\nyour\ntest\nwill\nnot\ncancel\nthat\ndestiny\nit\nqualifies\nyou\nonly\nfor\nit\nwhat\nI\nmean\nby\nthat\nif\ngod\nis\ngiving\nyou\na\nlamborghini\ntoday\nand\nyour\nbank\nbank\naccount\nsays\n0.0000000000\nendless\nzeros\nhow\nwould\nyou\nfill\nup\nthat\nlamborghini\npetrol\ntank\nprepare\nyourself\nfor\nthe\nlamborghini\nfirst\ndon't wait for the Lamborghini\nto come first\nprepare the Lamborghini\nenvironment first\nI think I went over time\nhere\njust to reiterate\nthree things\nthe enemy hit you on your\nmost vulnerable point first\nthe enemy uses your Bible\nagainst you\nand the enemy offer\na destination without obedience\nand I need you to say\nI am not alone\neven if temptation comes\nI'm not alone\nI build the world\nthe word\nwithin me\nbefore the test can come\nand I shut every door\nthat Satan wanted\nto come in\nand if I can ask you\nbecause it's the year of action\nwhat one scripture\ncan you use today\nin your situation\nfor today\nis it because there's no provision\nyou can use\nand God will richly bless me\naccording to his\nabundance\nyou get my point\njust go and ask\nwhat is the scripture\nabout my situation\nat this moment\nhe says\nI feel lonely\nGod says\nI will never leave you\nnor will I forsake you\ncan you\ncan you get\nwhat I'm trying to say\njust do that\nfather we identify\nthe text\nby their names\nwe are not ignorant\nof his devices\nwe do submit to you\nand we resist\nthe enemy\nevery door\nthat should be closed\nwe close it now\nin Jesus mighty name\namen and amen\nnow\nif you do have\nyour offering\nyou can bring it\nyou know that\nour offerings\ngoes out to\ngive somebody food\nto give somebody\nmaking sure that\nsometimes\nthere is somebody\nwho struggles\nwith rent\nwe help them\nto pay the rent\nwe've recently\nalso started\na\na\nentrepreneurs\nside of\nthe church\nwhere we help\nentrepreneurs\nfixing their\ntheir business\nwhat\nwhat I mean by that\nis that\nsome people\nwhat they do is\nthey go and search\nfor loans\nyou know like\nmaking a loan\nso\nat the church\nwe can say\nlook\nif you need\nat least\na hundred rent\nto buy\nten packets\nof chippies\nwe make that\navailable to you\njust so that\nyour business\ncan grow\nwe know\nif your business\ngrow\nit will also\nbring\nsomething back\nto the church\nwe\nwe call it\nwe pay\nit\nforward\npay it forward\nyeah\nso if you do\nhave your\ntithes and offering\nyou may\nbring it\nI saw\nyour\nI saw\nyour\ntithes\nalready\nma\nand I've\nprayed\nI don't like\nthis thing\nof praying\ntwice\ntwice\nit's like\nas if\nI'm hearing\nGod\ndid not\nhear me\nyou get\nmy point\nbecause when\nI when I\nsaw somebody's\ntithe comes\ninto the\nchurch account\nI immediately\npray\nI don't\nwait\nfor us\nto come\non Sunday\nand come\nand make\nit public\nI'm\npraying\nheavenly\nfather\nyou have\nspoken\nheavenly\nfather\nyou have\nspoken\nand there's\nnothing we\ncan\nadd\nnothing we\ncan take\nout\nby your\ngrace\nevery\ntithe\nevery\noffering\nthat\ncomes\nto\nyou\nlet it\nbe used\naccording\nto your\nperfect\nwill\nin\nJesus\nmighty\nname\nwe\npray\namen\nand\namen\nnow\nmay\nthe\ngrace\nof\nour\nLord\nJesus\nChrist\nthe\nlove\nof\nGod\nand\nthe\nsweet\nfellowship\nof\nthe\nHoly\nSpirit\nrest\nand\nabide\nwith\nus\nall\nuntil\nJesus\ncomes\nsurely\ngoodness\nand\nmercy\nshall\nfollow\nus\nall\nthe\ndays\nof\nour\nlives\nand\nwe\nshall\ndwell\nin\nthe\nhouse\nof\nthe\nLord\nforever\nand\never\nin\nJesus\nmighty\nname\namen\nand\namen"

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
              Sunday Message · Fountain of Grace International · Pretoria North
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-5">
              Why Your Biggest Battle Always Follows Your Best Decision
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              You made the right choice. You stepped out in obedience, committed to a change, or finally made a decision you had been avoiding. Then everything fell apart. That is not a sign you got it wrong. In Scripture, the biggest battles come immediately after the biggest decisions. This message explains why - and how to hold your ground.
            </p>
            <p className="text-white/60 text-sm">
              Pastor Ricardo Zaal · Fountain of Grace International, Pretoria North · 10 May 2026
            </p>
          </div>
        </header>

        <section className="bg-white pt-10 pb-2 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/z5QxF4LbCl8"
                title="Why Your Biggest Battle Always Follows Your Best Decision"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-14 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#555] leading-relaxed text-lg mb-4">
              There is a pattern in Scripture that nobody warned you about. Every time a major God-directed decision was made, the opposition that followed was immediate and intense. Jesus was baptized - then went directly to the wilderness. David was anointed king - then spent years running for his life. Joseph received a dream from God - and ended up in a pit before morning.
            </p>
            <p className="text-[#555] leading-relaxed mb-10">
              This pattern is not random. The enemy does not attack what does not matter. When the battle intensifies after a right decision, that is not a sign you made a mistake - it is confirmation that what you decided carries weight. The question is not whether the battle will come. The question is whether you understand it well enough to stand when it does.
            </p>

            <div className="space-y-10">
              {points.map((p) => (
                <div key={p.n} className="flex gap-6 items-start">
                  <div className="bg-[#FFD600] text-[#1a1a1a] font-extrabold w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                    {p.n}
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-[#2a9df4] mb-1">{p.title}</h2>
                    <p className="text-xs text-[#008080] font-semibold mb-3">{p.scripture}</p>
                    <p className="text-[#555] leading-relaxed">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <blockquote className="border-l-4 border-[#FFD600] pl-5 py-2 my-10 bg-[#f0fafa] rounded-r-xl">
              <p className="text-[#2a9df4] font-semibold text-lg italic">
                &quot;Many breakthroughs are abandoned three metres from the finish line because the battle intensified right before the resolution.&quot;
              </p>
              <cite className="text-[#555] text-sm not-italic mt-2 block">- Pastor Ricardo Zaal</cite>
            </blockquote>

            <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">How to Hold Ground Under Fire</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              The goal of opposition after a right decision is almost always to get you to reverse that decision. Three things that help you stand when the pressure peaks:
            </p>
            <ol className="list-decimal list-inside space-y-3 text-[#555] leading-relaxed mb-6">
              <li><strong>Identify what you are actually fighting.</strong> Ephesians 6:12 - the battle is not against the person, the situation, or the finances. It is against principalities. Name it correctly. When you treat a spiritual battle like a practical problem, you fight with the wrong weapons.</li>
              <li><strong>Go back to the original word.</strong> What did God say before the pressure started? The battle will try to make you reinterpret the original word using current circumstances. Do not do it. The word you received before the storm is more reliable than the evidence the storm is showing you.</li>
              <li><strong>Stand - and keep standing.</strong> Ephesians 6:13 - &quot;having done all, to stand.&quot; You do not need a new strategy in every fight. Sometimes the assignment is simply not to move. The battle has an expiry date. The one who stands longest wins.</li>
            </ol>

            <p className="text-[#555] leading-relaxed">
              If you are in Pretoria North and want to hear this kind of teaching live,{' '}
              <Link href="/plan-your-visit" className="fgi-link">
                come on a Sunday
              </Link>{' '}
              - Fountain of Grace International meets every week at 323 B Danie Theron Street.
            </p>
          </div>
        </section>

        <section className="bg-gray-50 py-12 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-[#1a1a1a] mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">Why does everything go wrong right after I make a good decision?</h3>
                <p className="text-[#555] leading-relaxed text-sm">This is a consistent biblical pattern. Jesus was baptized and immediately went to the wilderness. David was anointed king and immediately spent years being hunted. The opposition that follows a right decision is confirmation that what you decided carries weight. The enemy does not attack what does not matter.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">How do I know if I am in a spiritual battle or facing consequences of bad choices?</h3>
                <p className="text-[#555] leading-relaxed text-sm">The timing is the key indicator. If opposition comes immediately after a clear, God-directed decision - a commitment to something good, a step of obedience - that is spiritual warfare. Ephesians 6:12 says our battle is not against flesh and blood. When a new assignment triggers new opposition, that is the context Paul is describing.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">What does the Bible say about spiritual warfare after making right decisions?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Every major biblical figure faced their greatest battle immediately after their greatest moment. Jesus: baptism, then wilderness. David: anointing, then persecution. Paul: conversion, then immediate attempts on his life. 1 Peter 5:8 says the enemy walks about seeking whom he may devour - and the ones most targeted are the ones most committed.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">How do I hold my ground when the battle is intense?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Ephesians 6:13 says &quot;having done all, to stand.&quot; The instruction after putting on the full armour is to stand - not to attack. Holding ground means refusing to retreat from the decision you made before the pressure started. The goal of opposition after a right decision is almost always to get you to reverse it. Understand that, and you can stand firm on the original word you received rather than reinterpreting it under fire.</p>
              </div>
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
                {transcript}
              </div>
            </details>
          </div>
        </section>
      </article>
    </>
  )
}
