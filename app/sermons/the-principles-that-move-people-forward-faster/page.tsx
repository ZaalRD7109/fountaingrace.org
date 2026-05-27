import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "The Principles That Move People Forward Faster | Fountain of Grace International Pretoria North",
  description:
    "You have been praying. Nothing has changed. This message gives 10 biblical principles - obedience, positioning, wisdom, strategy, stewardship, relationships, and more. Pretoria North.",
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/sermons/the-principles-that-move-people-forward-faster',
  },
  openGraph: {
    title: "The Principles That Move People Forward Faster",
    description:
      "10 biblical principles that accelerate progress - for the person who feels stuck, financially trapped, or moving in circles. Fountain of Grace International, Pretoria North.",
    type: 'article',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International - Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/sermons/the-principles-that-move-people-forward-faster',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Principles That Move People Forward Faster',
    description: '10 principles for breaking stagnation: obedience, positioning, wisdom, strategy, stewardship, relationships, preparation, faith with action, sowing seed, and focused attention.',
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
    datePublished: '2026-03-08',
    url: 'https://www.fountaingrace.org/sermons/the-principles-that-move-people-forward-faster',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Sermons', item: 'https://www.fountaingrace.org/sermons' },
      { '@type': 'ListItem', position: 3, name: "The Principles That Move People Forward Faster", item: 'https://www.fountaingrace.org/sermons/the-principles-that-move-people-forward-faster' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What does Ecclesiastes 10:10 mean by sharpening the axe?',
        acceptedAnswer: { '@type': 'Answer', text: "Ecclesiastes 10:10 says if the iron is blunt and you do not sharpen the edge, then you must use more strength. Wisdom sharpens the blade. Working harder in the wrong direction produces less result. Pastor Ricardo Zaal at Fountain of Grace International teaches this as the principle of wisdom - getting the right method multiplies your output without multiplying your effort." },
      },
      {
        '@type': 'Question',
        name: 'Why do I feel stuck even though I am praying and trying hard?',
        acceptedAnswer: { '@type': 'Answer', text: "Feeling stuck despite effort often means one or more of these 10 principles is missing: you may be in the wrong position (Principle 2 - Positioning), or managing current resources poorly (Principle 5 - Stewardship), or working without a clear strategy (Principle 4 - Proverbs 20:18). Pastor Ricardo Zaal at Fountain of Grace International, Pretoria North, teaches that God often changes results through principles - not just through waiting." },
      },
      {
        '@type': 'Question',
        name: 'What does Matthew 25:21 say about stewardship and being given more?',
        acceptedAnswer: { '@type': 'Answer', text: "Matthew 25:21 says 'thou hast been faithful over a few things, I will make thee ruler over many things.' God does not increase what you are not managing well. Stewardship of your current resources - time, money, relationships, skills - is the qualification for greater. This is Principle 5 in this message from Fountain of Grace International, Pretoria North." },
      },
      {
        '@type': 'Question',
        name: 'How does Proverbs 13:20 connect to getting ahead in life?',
        acceptedAnswer: { '@type': 'Answer', text: "Proverbs 13:20 says he that walketh with wise men shall be wise. The people around you shape your direction. One relationship with the right person can advance you further than years of solo effort. Pastor Ricardo Zaal teaches at Fountain of Grace International that positioning yourself near wise and moving people is itself a spiritual and practical principle for progress." },
      },
    ],
  },
,
  {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'The Principles That Move People Forward Faster',
    description: 'The Principles That Move People Forward Faster',
    thumbnailUrl: 'https://img.youtube.com/vi/hmBthWSxN6g/maxresdefault.jpg',
    uploadDate: '2026-03-08T12:00:00+02:00',
    embedUrl: 'https://www.youtube.com/embed/hmBthWSxN6g',
    url: 'https://www.fountaingrace.org/sermons/the-principles-that-move-people-forward-faster',
    author: { '@type': 'Person', name: 'Pastor Ricardo Zaal' },
    publisher: {
      '@type': 'Organization',
      name: 'Fountain of Grace International',
      url: 'https://www.fountaingrace.org',
    },
  }
]

const principles = [
  {
    n: 1,
    title: 'Obedience',
    scripture: 'Luke 5:4-6',
    body: 'Simon fished all night and caught nothing. One act of obedience - casting the net on the other side - produced a net-breaking result. Obedience to a specific instruction unlocks what effort alone cannot.',
  },
  {
    n: 2,
    title: 'Positioning',
    scripture: 'Ruth 2:2-3',
    body: 'Ruth placed herself in the right field. Position determines what you are exposed to. Being in the wrong environment - even with the right effort - limits what God can connect you to.',
  },
  {
    n: 3,
    title: 'Wisdom',
    scripture: 'Ecclesiastes 10:10',
    body: 'A blunt axe requires more strength. Wisdom sharpens the blade. Working harder in the wrong direction produces less. The right method multiplies output without multiplying effort.',
  },
  {
    n: 4,
    title: 'Strategy',
    scripture: 'Proverbs 20:18',
    body: 'Plans are established by counsel. A goal without a plan is just a wish. God gave Nehemiah a vision and a strategy. Strategy converts faith into action with direction.',
  },
  {
    n: 5,
    title: 'Stewardship',
    scripture: 'Matthew 25:21',
    body: 'You were faithful with little - I will give you more. God does not increase what we are not managing well. Stewardship of current resources is the condition for greater ones.',
  },
  {
    n: 6,
    title: 'Relationships',
    scripture: 'Proverbs 13:20',
    body: 'Walk with the wise and become wise. The people around you shape your direction. One relationship with the right person can advance you further than years of solo effort.',
  },
  {
    n: 7,
    title: 'Preparation',
    scripture: 'Proverbs 24:27',
    body: 'Prepare your work outside - then build your house. Opportunity rarely announces itself. Preparation is what separates those who capitalise on a moment from those who watch it pass.',
  },
  {
    n: 8,
    title: 'Faith with Action',
    scripture: 'James 2:17',
    body: 'Faith without works is dead. Believing God is not passive. Action is the proof of faith. Waiting without movement is not faith - it is avoidance dressed in spiritual language.',
  },
  {
    n: 9,
    title: 'Sowing Seed',
    scripture: 'Galatians 6:7',
    body: 'You reap what you sow. The harvest you want is determined by the seed you plant. Generosity, time, skill, and service are all seeds. Nothing comes from nothing.',
  },
  {
    n: 10,
    title: 'Focused Attention',
    scripture: 'Luke 10:41-42',
    body: 'Martha was distracted by many things - Mary chose the one thing that mattered. Scattered attention produces scattered results. The highest achievers do fewer things with greater focus.',
  },
]

const sermonTranscript = "There's something that you you know You've been working very hard on but yet nothing has changed You know you you you feel stuck financially for years You keep on asking the questions. Why my life is not improving You you even look at others and say Mara God Seriously, this guy is not even a Christian, but look how well of he is financially And and I want you to hear it's honest Feedback that you can hear from yourself You pray It's like you are having Overnight prayers you even use a night Virtual what you call that overnight prayers, let's What do you call them? All night donkey my all night prayers You even do all-night prayers, but yet I think change Do you understand? when somebody Gets to a point Where you you feel like ah, it's too much. You know, like it's too much Hell no, it's too much. So This message is specifically for you You feel stuck you feel trapped you feel stagnant you feel like You know like you feel like doing this in your life You are you are moving in circle, but you're moving in one circle You're not even moving in a circle like this From there to there you you are circling on one spot You feel like that, but I want you to understand that There's an outcome There's a move of God That is here today God is about to to move into somebody's life today God is about to move into Situations that has been stuck for too long God is is literally Saying that he's been awaiting Your move for him to move somebody Sitting with a pain For months and months not knowing Just to move off from the needle or the nail that has been put on the chair But yet the pain keeps keeping on God says enough of You sitting on a nail Knowing that you could have just what get up from the chair and the nail pin would have been removed My message is entitled the principles that move people forward and Hear this one the principle that move people forward faster Did you hear I just said that move I didn't say that move people forward I say forward Faster it's like sitting on a on a chair with a nail in it Feeling the pain How you get rid of the pain is by getting off the chair It's a fast move yet. We've been sitting on chairs With so many pains Knowing what is the issue? But yet we have not moved forward Many people pray for years yet remain in the same place Scripture so something show us so much important things God often changes the results through principles and through strategies and Not only through waiting Because awaiting is a good thing You find strength in awaitment, you know, God also rested on the seventh day But for far too long you've been rested You are out rested now It's time to put this principles in place And I want to take it quickly go go through it quickly because I don't want you to miss a point Of me taking too long to to focus on one point And therefore principles that accelerate your progress number one There's something that you need to understand about God is awaiting your obedience Let me call it number one is obedience God is awaiting your obedience Now my question to you is if you go to the psalmist on psalm 75 He says it's him That put it down and him that lifted up But how can he lift you up being disobedient in what you expecting you to do? So obedience is the number one thing that you need to do. It's like obedience literally It it it it gives a sudden change God gives sudden change Luke 5, you know Luke 5 he says that Peter worked the whole night and caught nothing Jesus just gave one instruction. He didn't give a lot of whatever whatever's He's just said launch out into the deep and let down your nets What was the results day? the results day Was one act of obedience and the nets begin to break Your situation has been so long God is awaiting upon your obedience Start the business You still waiting on God He's been giving you an answer long time ago but yet you are waiting and He's awaiting on your obedience That is why it's imperative that you understand that the right instruction that God has been given to you Beats the law efforts that you've been any more some people exercise for years Yet there's no Improvement in what they want from the exercise because the exercise that they use is wrong for somebody who wants endurance You can't be doing weight practice You need a specific instruction to do for somebody who wants body muscle needs weights Endurance you need to do long-distance running There's a difference so your efforts has been Going to the gym all along but yet not finding endurance So you need to do know the difference That is why obedience is to understand that should I need to start a business? I should not be going to work every day You are this obedience In the thing that God is asking you to do yet. You think you are you obedient in going to work? Check now Can you see? You understand why It's so hard To move forward because you are doing the wrong things Knowing God has already spoken to you what to do. I'm working hard Yo, I've been working very hard but yet It's like that one that says Work like an elephant eat like an ant Who wants to work so hard yet find out afterwards The work they've been doing Was in the wrong place That's number one sometimes It's important Sometimes it's important to understand that Now let me number one was obedience Remember I said to you obedience and remember obedience and look sudden results. Don't forget the sudden results It's a quick results for God Number two is how you Yourself Positioning yourself It's my living It's my living. Yes Positioning yourself is like root You know what what happened to root anything that happened to root root went to the field of boys It's not to say that if you want money Strategically Put yourself next to a wealthy person strategic not not no Let's call it intentionally Put yourself next to somebody that have money but make sense what I'm trying to say Do you want a double portion of somebody's anointing Keep on following that person Elijah and Elisha So it's it's like a positioning yourself. It's like it's like surround yourself with the people that you want to become like You see so put yourself in a situation where if I want to be an anointed person Put myself with a lot of anointing you see what I'm saying how come you'll be struggling for so much and Yet you have not looked into your friends. Have you look into your friends? What is the Your friends showing you We are all struggling people. Hey, we are strugglers. I Don't know Ma We all struggle we should be getting to the people there by mother to My friends with them. Do you know why? When it comes to To position yourself it does change your outcomes. I mean scripture says says it this way now she happens To come to the field man and Coming from the to the field She was a poor widow and then coming the way wife of Boaz the wife of Boaz a rich man that had If you can almost say everything and do you know what this route I'm talking about and Boaz They move into a route move into the lineage of Jesus Without knowing it Walking the fields now, let me let let me come to you that looks for a husband Yes No, I'm talking to the person that looking for a husband Sitting in the house day in and day out Thinking that the husband will come Husbands is not in your house. Otherwise, you would have been married by now positioning You want to become a tenderpreneur? Position yourself to the tenderpreneurs Don't position yourself With the one that is struggling to even go to work Don't do that Put yourself next to the tenderpreneurs Have some discussions with them. So position in yourself is a position that One of the positions that I can tell you now that was so nicely Is the guy that was hanged next to Jesus? Just position yourself Imagine this guy saying This guy has not been doing anything right ever in his life He didn't even take up God as his Lord and Savior at that time He didn't do much. He just got positioned in a situation Where he thought was his downfall become his upliftment Amen You will be with me in paradise Position yourself What is positioning yourself positioning yourself is to know what you want Because positioning yourself not knowing what you want you find yourself getting into a place where people Don't care about your well-being They care more about them and yet you thinking by going there In an industry That has to do a tender don't you go to Work Because work is nothing to do with a tender in the process If I can if I can make you make you an example when you're looking in the Bible You will find that although Joseph Was having so many traveling Distances to the wrong places thinking that his life is now going downwards Even if you don't position yourself if you know what you want God will position you to where you need to Because remember way before everything happened He already saw his brothers bowing before him Knowing that his brothers will be bowing before him not understanding the whole concept of the thing He needed somebody to interpret it for him. And when they interpret it for him, they become jealous Yet, you know That the way because it's no use of positioning yourself but not knowing what you want in life I could have actually made that a principle as well because I could have said that as another principle use Clarity be clear on what you want Because any car that you want can be a donkey car as well If you say God, I want the car and when the donkey car arrives Now you're complaining our Mara God you didn't be you didn't you haven't been specific number three wisdom Multiplies results. So what it means is that the more wiser you become the quicker the results comes Did I did I even give you a scripture on this one route to verse 3? Please the the positioning changes could come with the two of us train Wisdom multiplies results if you read in the case is 10 vs 10 Ecclesiastes 10 vs 10 says if the X is dull and One does not sharpen the edge He must use more strength But wisdom brings success Ecclesiastes 10 vs 10 Ecclesiastes 10 vs 10 says if the X is dull and one does not sharpen the edge He must use more strength This the simple part of this is The wiser you become The less effort you have to put in. So what is it that you need to teach yourself on? to make more money Learn money principles What is money principles let me not let me not Go there now money. I just want to I just want to give you a clear understanding money never Stay in one place. It's circulate How you position yourself that it will circulate back to you every time Is a principle. Why do you think so many people have more money than you? it's because of the using the principles of Whenever I sell something for argument sake the chances of me getting money is The chance that people want what I sell I'm just I'm just giving you like a Brief principle, it's not part of my message, but I'm just trying to let you understand that it's imperative That you know wisdom comes from What you know that you want to become if you want to become a doctor Don't go and study mechanic How do you fix a car? I? Fixed a car like this and that in the other But I want to become a doctor now you are you will be well of Doing the car part instead of the doctor part So wisdom multiply results to learn a skill learn business learn systems learn communication Whatever you do start learning Whatever you do start learning many people work harder Instead of sharpening the X they work so hard It's like taking a X Oh Think your efforts will be better with the blunt X stompers blunt Stompers blunt and Stomp stomp stomp Blunt okay Yeah, a snisk is not sharp. It's something else So That's number three. I Wanted I so much want to emphasize on certain things But I'm just going to go like just to make sure that we have everything in time now Number four is to have strategy because strategy beats effort if you could if you could put this as a as A principle you can you can can say strategy beats effort Because if you're looking at a Joshua for argument's sake there's something that you need to understand that I Mean the book of Joshua. Did I say? Oh, yeah, I wanted to say Joshua six now. It says God give gave Jericho no, man. Why am I I? Put my words. No God gave Israel a Strange strategy for Jericho. Yeah, make sense now that I mean They don't fight. No, don't fight The strategy is to walk seven times around Walk around the city around So as you walk around the city you also need to know Why and for how long because strategy helps now walking around the walls of Jericho Is also not helping you if you don't do what you're supposed to do This is walk around the world for seven days and also at the same time shout It's a strategy It's like it's like us who would like to take over Pretoria North for seven days We need to Seven days then walk around Pretoria North and Shout for this walls the walls of option the walls of of drug addicts the walls of businesses going down the walls of Of people killing each other to come down to fall down that's strategy That is strategy it's imperative to know if you do walk Do you know you know God doesn't just give some certain things to you For for Jay just for someone. Ah He doesn't the two of you Both you're set away And you stop talking Don't say anything Yeah, thank you because you say and Provoking But I'm saying so Strategy is that God gives Strategy in ways that you think is not right How can you be in war but you need to tell the enemy You around You shout you're not fighting you shout Huh? Did anybody ever win a war by shouting? You understand what I'm saying God's ways is not yours So strategically they had to go around the Jericho Jericho for seven days shouting and The walls came down. It's not fighting. You don't start fighting first number five Look on the strategy I can give you more but I don't want to I don't want to To take too much time and miss out on several points. Let me explain to you number five There's another principle that you need to understand that will move you faster in line Is stewardship if you do the stewardship? Stewardship bring increase I can tell you now stewards bring increase Do you know what I'm talking about? Matthew 25 was the 1430. There's a there's a parable of the talents Now what this parable of the talents is is server that receive five talents two talents and one talent and the first two multiplied what they had the third one buried it sometimes your mindset of Losing is the way the reason why You can't get You may have a Poverty of losing the lost mentality will make you to lose more. I wish I can I Can get you into understanding that one there. What I mean by that is this guy Knowing that this person if he comes back he would want what he have Given to him you understand what he has given to him down now Burying it and I'm sure what he did now he went Probably 12 o'clock at night where nobody's awake around and he look nobody must see where I put it Check check check. Ah, there's no one make a hole Go check check check. There's no one Make the hole further go check check check the way his mindset was so much on losing it That his focus was entirely from so stewardship Make sure to understand that your focus Should be a different thing that will make increase and not lose You see Now to bring this together Is God literally Increase what you manage well What is it in your life that you manage well that you can see it has been increased by God Because of I've been managing it well But I Love my time Yo, yo, yo, I love my time. It tells me look let's do this this this this If you if you tell me I Is going to be six hours ten hours And I don't see any profit in it. I will tell you sorry I can and skip this one because of what I could have done in those in that time Could have bring some other results So when we're talking about time My wife can tell you I'm not even going out to go and have party the way I'm focused on Specific Sometimes she says to me this laptop must go out of the room the way I'm focused on Doing certain things I spent my time It's either I read a research or I know I I spent a lot of time on research Like research is is my life like I don't know how to explain it like The way I research things if something comes out on my mind and I want to know why I'll go research but It's because of the research that other things Gets taken out of my life. So stewardship is That one day when you find your husband your wife or your family moving out of the house It's because you didn't steward them divorce doesn't happen overnight It happens because of not spending enough time with your partner Not having the the hard conversations with your partner. It's not making sure that you do the two of you understand that Certain things is not allowed boundaries Stewart what you have that's number five It's like you need to ask yourself. What do you have already in your hand? Don't ask what we get what you have Because this is what we think that God will will give us more before we Just start seeing what you have and work with that principle number six fish principle number six I speak to you about principle number six is called relationships Not enjoy long. Yes. Ah not enjoy long Not this I'm not talking about that Relationship I'm talking about That opens doors The Shunammite woman, do you know what the Shunammite woman did? She served the prophet Elisha you can read this afterwards. I Didn't give too much character today. I just I want you to write it down Please because I don't want to spend too much time on it. I mean, I'm how do you call it? I'm summarizing it Second Kings 4 if you read from the verse 8 to 17 Second Kings Kings 4 from 8 to 17 The Shunammite woman served the prophet Elisha So what she did is let us she actually said to her husband. Let us make a room for this prophet You know like so she built the relationship that any time whenever this guy comes because she knows He's going to need a place she knows she's going to need a place to speak spend time with God She knows that a certain needs to be Sanctified for this guy is the reason why? she created that room and Building the relationship of knowing that any time when this man of God passes the town I need to make sure that I avail myself To have this guy to give him food or whatever is needed Is the reason why? She she she what they call it. She received a miracle child I'm saying no, I should actually say she received her miracle Which one child? You see so so sometimes Whenever you're looking at relationships You need to honor relationships Because when we honor relationships we go back to the world or the South African saying Afrikaans men's as men's there are other men's Zulu as and las y a que casa Huh It's That the one in Zulu is is loosely translated the one hand wash the other hand English One human being is another human being through another Loosely translated help each other. I don't want to go to the Bible yet I Hear you I hear you Please don't get me wrong. I hear you but I want To bring it down so that anybody who doesn't ever read the Bible or don't even know about the Bible Because it's a not give me to give it one. Yeah, it's a nice to do same thing So what I'm trying to say is if you use relationships More often our relations our Relationships are built. It's like the tsunami woman Was building the relationship. The relationship was never about herself. The relationship was about The other person did you hear what she did she didn't think that I need to get a child from this elitia No, she didn't think that oh he must pray for me She didn't think that this elitia Has such an annoying thing. I must ask him to lay hands on me. No The relationship was all about making sure that elitia is well taken care of She built the room or Created a room For this profit So the relationship was built upon what can I do for the man of God? You understand because what I can do for the man of God is what I can do What I get out of it is what the man of God think it's worth it to pay for his service You understand how relationships is built a relationship is never about Me me me me me me me me No, let me let me explain to you. Do you that this is what people do? Especially in business they have a network They create a networking Do you call it a place a networking? Let's call it a conference networking. They even call it networking conference Networking conference Momo goes there Momo is going Get there Hey, can you please help me? My business is struggling. I need financial That's not how business or any relationship gets built It's not how relationships gets built when you go to a network Place is that you can you look into yourself first and see what can I serve? Who can I serve? In what manner can I serve? How can I serve? You go in there and say Let me make an example. I'm good in marketing You go in there and you say sir I see You are running A car wash business, you know, i'm doing social media marketing Your car washes I see it's in six places Can I help you? to market your car wash business Do you know what happened? Nobody but nobody Will ever say I don't need it What is necessary If you can give it to them They will see the need Be sure there's a there's a there's something called. Um There's a principle of Reproxycation something like that. I can't remember the word but it's something like that what you give to somebody The people the person feel obligated to give something back. That's the that's the principle so relationships are built by Reproxycation whatever that word Recreation On that What can I do for you, sir? Shunammite woman Ah, let me fix this Let me make food for you Do you know what she received? a miracle She has been struggling to have a baby She's been struggling and when the man of god says, ah This house is every time we get here Every time Whenever This guy comes here Let's give him food. Let's give him this let's give him that And the man of god started looking into the house There's food Even the the the the couches they look nice When I look at the tv It's cinema type of tv When I look at my room In this room double bed i'm sleeping arms stretch out This this two they have love for each other. The love is there What is it that they are missing this guy he started he started Looking into every area of their lives And he saw what's the use of them having it all But they don't have an air That they can share this with They didn't ask that like we are looking for a child We've been barren for quite some time. No Please go read second kings four from eight to seventeen Don't Don't go read like like mumu just reading ask the questions Why is it that this guy? Went straight to the child side But yet this woman were not talking about the child ask yourself Because This guy could see the need Because of what they have been giving into his needs When you see somebody's needs They will easily see your needs That's how you build relationships number seven And this is the important part No, no, I can't say who's the important part. Let me just say the important part The important part is We call number seven a preparation attracts opportunity preparation attracts opportunity What's the use Of getting A car If you can't drive Having a car But can't drive you will be a burden to somebody forever You'll be a slave even to the person who can drive Come take me. I want to go to shopping. I i'm busy What's the use of getting a hundred million rent in your bank account And you have never even know how to spend one rent That's right Let's buy chippies Tomorrow I buy chippies again Your gums your this part gets big and big because you are only used to one rent buying chippies Now you want to buy 100 million chippies heaven Preparation Is imperative not just important Prepare yourself Even if it's just mentally For what god is about to give to you god is about to give you so much But you are not yet prepared for it Joseph prepared himself, but the very very first First time when he he got the dream of knowing he already prepared himself himself so much that This guy He had wisdom He created wisdom Because how do you find a slave? being able To give wise advice Get a jail bird To have leadership skills already in jail That everybody knows they must go to him In jail nogada Preparation is key This guy had administration skills because when he he he he was he was telling this When he was telling faro for the seven years As things will go 100 percent Do yourself a favor Safe Put them put them places places places so What he then said after that Is that when you are prepared for the seven years of overflow? Now don't think we are having a party No Don't think it's only to be a party Administratively write down What we can put away For the time When the famine comes huh Please go read genesis 41 Don't don't I'm Usela I'm i'm putting it small small just so that you can understand what i'm talking about I'm not i'm not going to give you specific scripture because if I give you specific scripture we'll we'll waste too much time there It's like this guy he was so prepared that in that one day when he moved from the prison He was prime minister already knowing it all What is it That if god is changing your life today You'll be prepared for Millionaire or 100 a are you prepared? To become a millionaire knowing how to use a million rent Or are you prepared? To only have 100 rent knowing you only have 100 rent. You only have the mindset of 100 rent How do one work with 100 rent and make it a million rent? How do one work with a million rent and make it a hundred rent? It's all About the mindset It's the preparation of the mindset Because if you are only used to having 100 rent a million rent comes quickly to 100 rent Even 100 million rent will go to to them I blew it all There's a film even they make about it something I blew it all Something like that squanderers vision squanderers Sometimes I wish I can get that million rent and show them how to do business Remember god promotes suddenly he doesn't wait upon you So if you're not ready Somebody else get promoted Somebody else get promoted god is not waiting on nobody I've said it. I think last week. I even know is it last week or the week before I said it at this church That we think that god cannot move It's not the only church that is there if this church doesn't do his job God will give another church his this job Me thinking that i'm the only visionary Tomorrow somebody else stands in the vision If I don't It's imperative that you prepare Preparation beats motivation. I say it again preparation beats motivation you will be motivated for hours and years and months But if you're not prepared You are in trouble All right Let's go to number eight that one. I didn't put too much pressure on that I just I just want you to understand that If you are prepared When god moves suddenly What is it that you need to prepare? What is it that you need to prepare? Where you at that you need to prepare? He has given me victory I will lift him higher I will lift him Yeah I want you to to take this one number eight feet acts acts like in not not acting Not not I want to look act It's a movement It it's not only praise Don't pray and think Things will come right How god sent me a husband god, please send me a husband Every morning you wake up not bathing you are in the house cleaning the house Every morning you are after cleaning the house you even go to to check us dirty Didn't brush your teeth look like a a homeless person Looking for husband looking like homeless Hey No It's important to make yourself look snazzy No, I want a job When last did you send your cv? No, so about six years back. I sent my cv to this company Did I call you back? No, they have not even called me back as yet Where's your cv? No, I didn't fix my cvs yet You want a job? Yes. I want a job You have not even fixed the cv but you want to fit upon what you do Fit x upon what you do. I actually forgot to give you a feedback now The whole year down here they they They closed it until they can renovate it again before anything can move from there Um What happened with that thing is it's been too much vandalized that they can't use it for anything It's unsafe to use Why did I oh the reason why i'm mentioning this is that we were saying something And we said we need to act upon it the next day Saturday Saturday morning. I asked already You see because my fate has been built so much that anything I do We need to go James 2 verse 17 James 2 verse 17 says fate by itself If it does not have works, it's dead If it does does not have work, it's dead. I mean noah noah bolton up in the sun Sweating and people are laughing That guy was he was feeling hot Yes Where's the where's the cloud? needs noah Hey, what's the answer man? You are mad, man How can you do do do do do? Hey bisho, there's this guy up africa there. He built the ark again Yeah You know this guy he bought me cds Okay, let me know. Hey, it's not about that one, but i'm just saying Moses he lifted the rod moses lifted I mean David let me talk about david now David And say Hey, this guy is too big This guy do this He didn't look at that david at that goliath He had faith that god Is the one that will move it God is the one that will move his His goliath for for peter to walk on water The fate was to get out of the boat Ah, yeah, yeah Get out of the boat i'm asking the question to you neh is that Certain things are so dangerous That you know if you do it You will get in trouble But if you don't do it you get into more trouble Do you want to be having more trouble than trouble? Rather do the more trouble Because the outcome is better Just remember faith has not come from words only but it comes from action Does not come from word only it comes from action. I wanted to give this one I wanted to give this one last but i'm i want to give it now number nine Seed reduces harvest What seed Would you be able to plant? To gain the harvest That you are in need of because If you want to get a promotion at work It's very important to plan promotion What do you do? You ask the manager If you can do some of his work so that he can teach you how to But yet we don't want to put that seed of extra time You don't want to put the seed of extra time for promotion ah It's doing the job Even though you're not yet qualified for it Ask somebody to help you seed no, man, let me Let me bring it back Luke 6 38 Once again, you'll read it out. Luke 6 38 says Give and it will be given And it will be given to you No, it doesn't say give and it will be given to somebody else It says give And it will be given to you Galatians 6 verse 7 Galatians 6 verse 7 says A man reaps what he sows the reason why in anger anger bigger. I mean you saw anger Yeah, isn't it the reason why you are still sick because you you sow Sorry, sorry There's a there's something that you need to understand life works through a seed system if you want financial breakthrough Sow a financial seed You can't be Thinking that A financial growth Comes from something else No, I should actually reverse Let me let me let me let me go back Do you know that how people give you more money Is the seed of value that you sow Do they value you more if they don't value you you get paid peanuts A cleaner is not valued That is why a cleaner's salary Will always be lower But do you know that? Can tell you visual Somebody who clean House get paid 200 rented yes Eight hours of cleaning house You get paid 200 rent but the same person who clean a medicine Get 2000 rent to 5000 rent to even 10 000 rent for that same Type of work that will last for about two to three hours What's the difference So don't come and tell me a cleaner doesn't get paid You're cleaning the wrong place for a spilled Uh, uh, do you call it um on the highway like a spill? Let's call it a oil spill on the highway These guys get paid a lot of money to go and clean that oil spill And the same oil spill in a shop The guy doesn't even get 8 000 rent per month Huh? But the same oil spill on a highway 10 000 rent easily Where have you been sowing a seed that you got? Where have you been showing sowing a seed that is not coming back? multiple times like Harvesting so you need to understand that some people Gets faster in life due to the fact that the principles they're making use of Is the principles that's taking them far Bishop, do you know your car business your mechanic business? If you if you get an uber guy And fix his car You don't fix his car You fix his business You see where the difference is my car you can ask Uh, what is that thing we we did? control arm you ask Let's say a hundred rent But for uber guy It's not a hundred rent It's a hundred It's a thousand rent because of the time he waste not to be in the field You see where the difference is? So when you know the guys You usage of the car you The the seat You tell him picture this car standing here for the next three days How much will he use? picture And the guy will tell you And then you will tell him If I do this in one hour How much is it going to cost you? to pay me What's the value of it? And this is how selling is That most people don't understand is that see the value Before you start selling I'm talking seed here man All right, but you get my point when you sow value into somebody Value will come back Life really works through seed systems Seeds that includes money that includes time that includes service that include knowledge Do you know how much um Who see them acquire get paid? For standing on the stage because of his knowledge the same knowledge I have But because of he has made himself more valuable to share that information By any time whenever he speak to somebody he tells them the value That he is The same guy that goes and pray for some people he says The mighty they all leave us lose And all the demons run Then when you when you leave They say god bless you the same same effort Somebody walks in there and says for deliverance My only coming out is 15 000 I have not I have not do any deliverance just my call-out fee Is 15 000 What's the difference there? Because you devalue yourself Your seed that you sow You tell yourself Is small The seed you sow telling yourself is small But do you know for somebody who is a company boss? And this person has been demonic Having demonic attacks Once you can get that demon demons out of him it will save a company of millions of people Make sense what i'm trying to say the seed that you need to know is that some seeds are very Effective and Bigger than what you can think You know a relationship seed What you repeatedly sow grows What you repeatedly sow grow Why is anger so much in you? You keep on repeating to sow anger Why is pain so much in your life? You keep on repeating to sow pain Why is love so much in your life? Because you keep on repeating to sow love this one I will I will make another Message about it But I don't want you to to sound like i'm looking for money Because that's what the moment they talk about sowing they think it's money It's not money It's a principle That comes from the word Not my word god's word number 10 last one I i think i'll i'll take this one and Work to to work it out on two What do you call it? two sessions It's now too short there's something else that I needed to But i'll say it next week now focus on few things that matters Number 10 The principle to make you to move faster Is to focus on the few things that matters. This is the needle moving things The things that when you do it It makes a huge difference The things that you do it makes a huge difference Most people are so busy Most people are so busy But busy with the wrong things There's a principle that says No, no, sorry, sorry It's not a principle. Sorry Let me rather say it's a it's a it's a a saying of a famous person Where focus goes energy no where focus goes Energy grows no something all right No, let me let me try and see if I can get this guy What's this guy's name man is Anthony robbins or I don't know if it's anthony robbins that says it Or is it or was it? He's a napoleon hill or somebody some Like tony robbins said it But I think he heard it from somebody else. Yeah, tony robbins says it where focus goes energy flows Now often phrases as energy flows where attention goes This is the a principle that was popularized by this tony robbins so he suggests that you you mentally Your focus and emotions and attentions it determines where your life forces Or efforts will be directed So consistently focusing on goals or positive outcomes builds momentum while focusing on negativity drains energy and create more negative results So this is tony robbins Now picture this Tony robbins did not invented this But he made it famous somebody Do this Or or many a times people will will ask you as you open your eyes This Look at a lot of red things Because your focus is on red you will quickly see a lot of red But the moment you close your eyes And I ask you Look at Where did you see white things? When you close your eyes, you won't remember where the white things was Because your focus was on the red things If you buy a new car today And the car is let's say kia sonnet Do you know that these kia sonnets is everywhere driving But you haven't seen them The moment You buy yourself that car you start seeing a lot of them You suddenly see a lot of them Lamborghini is a lot of them But because you're not focusing on them That's why you don't see them. The only time when you see them is when you when you really focus That car looks nice. What car is that? Now you see ah lamborghini All i'm saying to you is that with this principle Focus on the few things that matters Do you know where this principle comes from? It comes from jesus where he told martin You are worried about many things One thing is needed Let's go there look dead when you go to luke 10 and you read Luke 10 I want you to read verse 41 and 2 Luke 10 Verse 41 and 2 and jesus answered and said unto her mother mother Thou art careful and troubled about many things But one thing is needful And martin had chosen that good part. I mean and mary, sorry and mary had chosen that good part which shall not Be taken away from Yeah, you are cleaning you are While jesus is teaching here principles that could have helped your life You go and clean You choose to clean Focus on things That will matter It's so busy now Focus on a skill a specific skill Focus on a specific business focus focus on a specific system focus on a key relationship focus on a key Opportunity these are the things that you need to do what is a key relationship? If you want to get married focus on the type of relationship that you would like to have Before You focus on the person Looks like you're not understanding that one. Let me explain what I mean If you want A caring husband or a caring wife Don't just go and look for any person because you will find any person to get married to But a caring person is rare so get yourself into The type of person first before you find the person Because if you're looking for a husband only Any husband is a husband Any husband is a husband but it takes specific husbands to look after specific wives And that's the type of That you would like to have that's the type you want not the husband's that's his husband's Not the the Not being the The punching bag yeah Stop being a punching bag Tell him hey Okay, let's leave it that way now focus Where focus goes energy flows one of the questions I would like you to think of for yourself is that What skill Would change My my income If I must it imagine If I if I look at it now I'm just making an example I'm marianne picnic I make an example of an anti-marian In her age To To bring people together She already have a skill magnet That's a skill picture She can make money By telling people Do you know if you go To this person specifically They have a specific skill of knowing How to solve your problem? If you go there speak to that person What do you do You only say When they have helped you Come and see how you can help money in the pocket catching catching catching If you're looking at my anti-marian bishops, you know, she's been working here by spa in Moepik and pays now she was working there and the amount of people That she made friends with Even up till today the white people not even talking about them You know us we like the The white people too much Where we come from there was no lot of whites. So we if she uses her work to Put people together And that work out Financially for them It's money in the pocket for At unfortunate part decisions well and dumb So the numbers is not It's not proctorial. No But what i'm saying what skill Would changes your income today? If you just add some extras what type of relationships Can open doors for you? What seed have I not yet planted? Just one last thing God often changes lives through one moment of alignment one moment Where you aligned yourself? Peter's networking catch Joseph's before pharaoh David before goliath Esther before the king Years can go slowly But that then that one moment Changes everything That one moment can change us everything the key For you is to live in a way That are ready for that moment Don't live a life Of 60 years But one year you repeated For 60 times I say it again Don't live 60 years But repeating the same year 60 times because If you're looking at your life i'm 47 years of age And for the 47 years of age There's one thing that I can guarantee you now I keep on repeating bishop I keep on repeating my stubbornness I live 47 years And every year i'm the same stubborn than what I was last year I've not changed again and again and again and again but yet Life has teaches us Growth is the imperative It's imperative to grow If you don't grow You die I worship you. I praise you. I exalt your name. I lift your name up high my god For a message like this that will change lives and will make sure that any time whenever this message is being thinking of It shifts the needle To go forward Therefore in the mighty name of jesus christ our lord and savior Thank you for a moment like this Amen and amen"

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
              The Principles That Move People Forward Faster
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              You have been praying. You have been trying. Nothing has changed. This message is for the person who feels stuck, financially trapped, or circling the same spot. God often changes results through principles - not only through waiting.
            </p>
            <p className="text-white/60 text-sm">
              Pastor Ricardo Zaal · Fountain of Grace International, Pretoria North · 8 March 2026
            </p>
          </div>
        </header>

        <section className="bg-white pt-10 pb-2 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/hmBthWSxN6g"
                title="The Principles That Move People Forward Faster"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-14 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#555] leading-relaxed text-lg mb-10">
              God moves through principles. Awaiting is necessary - but if you have been resting for too long, you are over-rested. It is time to put these principles in place.
            </p>

            <div className="space-y-10">
              {principles.map((p) => (
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
                &quot;God often changes lives through one moment of alignment. Years can go slowly - but that one moment changes everything. The key is to live in a way that is ready for that moment.&quot;
              </p>
              <cite className="text-[#555] text-sm not-italic mt-2 block">- Pastor Ricardo Zaal</cite>
            </blockquote>

            <p className="text-[#555] leading-relaxed">
              There is a Part 2 to this message that goes deeper on the action side. If you are in Pretoria North,{' '}
              <Link href="/plan-your-visit" className="fgi-link">
                come on a Sunday
              </Link>{' '}
              - these messages are preached live every week at Fountain of Grace International, 323 B Danie Theron Street.
            </p>
          </div>
        </section>

        <section className="bg-gray-50 py-12 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-[#1a1a1a] mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">What does Ecclesiastes 10:10 mean by sharpening the axe?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Ecclesiastes 10:10 says if the iron is blunt and you do not sharpen the edge, then you must use more strength. Wisdom sharpens the blade. Working harder in the wrong direction produces less result. Pastor Ricardo Zaal at Fountain of Grace International teaches this as the principle of wisdom - getting the right method multiplies your output without multiplying your effort.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">Why do I feel stuck even though I am praying and trying hard?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Feeling stuck despite effort often means one or more of these 10 principles is missing: you may be in the wrong position (Principle 2 - Positioning), or managing current resources poorly (Principle 5 - Stewardship), or working without a clear strategy (Principle 4 - Proverbs 20:18). God often changes results through principles - not just through waiting.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">What does Matthew 25:21 say about stewardship and being given more?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Matthew 25:21 says thou hast been faithful over a few things, I will make thee ruler over many things. God does not increase what you are not managing well. Stewardship of your current resources - time, money, relationships, skills - is the qualification for greater. This is Principle 5 in this message from Fountain of Grace International, Pretoria North.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">How does Proverbs 13:20 connect to getting ahead in life?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Proverbs 13:20 says he that walketh with wise men shall be wise. The people around you shape your direction. One relationship with the right person can advance you further than years of solo effort. Positioning yourself near wise and moving people is itself a spiritual and practical principle for progress - taught at Fountain of Grace International in Pretoria North.</p>
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
                {sermonTranscript}
              </div>
            </details>
          </div>
        </section>
      </article>
    </>
  )
}
