import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Born Into Something Greater Than the Life You Are Currently Living",
  description: "Struggling this Christmas season in Pretoria North? Pastor Ricardo Zaal shows how the birth of Jesus Christ births new life into every broken situation you face.",
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/sermons/birth-of-the-great-christmas-sermon-matthew-1-21',
  },
  openGraph: {
    title: "Born Into Something Greater Than the Life You Are Currently Living",
    description: "The birth of Jesus Christ is not just history - it births greatness into your finances, relationships, and future right now.",
    type: 'article',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International - Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/sermons/birth-of-the-great-christmas-sermon-matthew-1-21',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "Born Into Something Greater Than the Life You Are Currently Living",
    description: "In this Christmas sermon from Fountain of Grace International in Pretoria North, Pastor Ricardo Zaal preaches from Matthew 1:21 on how the birth of Jesus Christ brings new birth to every dead situation. He declares that the same greatness that came with Christ's arrival is available to every believer facing financial hardship, broken relationships, or loss this Christmas season.",
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
    datePublished: '2022-12-25T12:00:00+02:00',
    url: 'https://www.fountaingrace.org/sermons/birth-of-the-great-christmas-sermon-matthew-1-21',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Sermons', item: 'https://www.fountaingrace.org/sermons' },
      { '@type': 'ListItem', position: 3, name: "Born Into Something Greater Than the Life You Are Currently Living", item: 'https://www.fountaingrace.org/sermons/birth-of-the-great-christmas-sermon-matthew-1-21' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "What does Matthew 1:21 say about the name Jesus?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Matthew 1:21 in the KJV says, 'And she shall bring forth a son, and thou shalt call his name JESUS: for he shall save his people from their sins.' The name Jesus was not chosen by Joseph or Mary but was given directly by the angel of the Lord. It carries the meaning of salvation - He came specifically to save people from sin and everything sin brings into a life.",
        },
      },
      {
        '@type': 'Question',
        name: "Why do I feel so empty and alone at Christmas?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Christmas can intensify feelings of loneliness, grief, and lack because it is surrounded by images of full tables and happy families. Pastor Ricardo Zaal acknowledges this honestly in his Christmas 2022 sermon, speaking directly to those who have lost someone, those sitting alone, and those with nothing on the table. The good news is that Jesus was born Emmanuel, which means God with us - you are not actually alone, even when it feels that way.",
        },
      },
      {
        '@type': 'Question',
        name: "How can the birth of Jesus Christ change my situation today?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Pastor Ricardo teaches that the birth of Christ is not only a historical event but a living spiritual force. Just as His arrival brought salvation, healing, and hope into the world, declaring that truth over your circumstances invites that same power into your life now. Practically, this means praying over your finances, your relationships, and your opportunities and believing that the same God who sent His Son can send breakthrough into your specific situation.",
        },
      },
      {
        '@type': 'Question',
        name: "Does it matter if Christmas is not actually Jesus's real birthday?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Pastor Ricardo addresses this question directly in the sermon. He says that whether Jesus was born on December 25 or in another month entirely does not change the reality and power of His birth. What matters is that He was born, He came as Saviour, and His arrival changed everything. Using Christmas Day as a moment to honour that truth and believe for new things in your life is entirely valid regardless of the calendar debate.",
        },
      }
    ],
  }
]

const sd = {
  "headline": "Born Into Something Greater Than the Life You Are Currently Living",
  "intro": "Christmas can feel hollow when you are grieving a loss, struggling financially, or sitting alone with no one at the table. Pastor Ricardo Zaal opens the Word on Christmas morning and shows that the birth of Jesus Christ is not a distant historical event but a living force that births new things into the dead places of your life. If something in your world has gone dry, this message is for you.",
  "scripture": "Matthew 1:21",
  "quote": "The birth of Jesus Christ will birth great things because He said it in His Word - He shall save His people from their sins. Whatever sins, whatever situations, whatever dry places have been keeping you from what you need, the birth of the Great is speaking into that right now.",
  "dateDisplay": "25 December 2022",
  "sections": [
    {
      "heading": "A Christmas Morning for the Broken, Not Just the Blessed",
      "paragraphs": [
        "Pastor Ricardo Zaal opened his Christmas 2022 message not with cheerful platitudes but with a honest acknowledgement that not everyone listening had made it to Christmas Day with their heart intact. Some had lost family members who could not be at the table. Some had expected certain things to come through by the end of the year and they had not. He wanted to establish from the very first moment that this day, Christmas Day, was not just for those who had everything going well. It was for the ones who were still standing after a hard year, held together by nothing other than the grace of God.",
        "This honesty set the tone for a message that was less a lecture and more a declaration. The birth of the great King, Jesus Christ, was the reason anyone had anything to celebrate at all. And for those who felt they had nothing to celebrate, Pastor Ricardo made clear that the very birth of Jesus Christ is an act of God meeting people exactly where they are, not where they wish they were."
      ]
    },
    {
      "heading": "The Name That Changes Everything - Matthew 1:21",
      "paragraphs": [
        "The foundation of the message was Matthew 1:21, where the angel of the Lord instructed Joseph concerning Mary: 'And she shall bring forth a son, and thou shalt call his name JESUS: for he shall save his people from their sins.' Pastor Ricardo pointed to the intentionality of the name itself. Jesus was not a name chosen by a family in the ordinary way. It was a name given from heaven, carrying a specific purpose and a specific power. That name is the one that demons flee from. That name is described as a balm, something that soothes, heals, and brings relief where there was only pain.",
        "He also read the surrounding verses that describe the fulfilment of the prophet's word - that a virgin would bring forth a Son to be called Emmanuel, meaning God with us. These two names together, Jesus and Emmanuel, carry the full weight of Christmas. God chose to enter the world in the most vulnerable form possible, as a newborn child, and He did it so that He could be close to people, save them, and never leave them alone again. That is the birth that Pastor Ricardo says deserves to be the centre of any Christmas celebration."
      ]
    },
    {
      "heading": "The Birth of the Great Births Great Things Into Your Life",
      "paragraphs": [
        "The central declaration of this sermon is that because Jesus Christ was born into the world, there is a birthing anointing available to every believer. Wherever something has died, wherever growth has been blocked, wherever Satan has stolen a seed, the birth of the Great speaks into that situation. Pastor Ricardo moved through specific areas of life - finances, housing, relationships, personal opportunities, health - and declared that the same power that brought the Son of God into the world is the power that can bring new things into your story.",
        "He spoke to the person whose business had gone under, the person renting a small space for a family too large for it, the person in a relationship that had brought nothing but exhaustion, and the person sitting alone on Christmas Day with an empty table. Each of these situations was met not with sympathy alone but with a spoken word of faith rooted in the nature of the One being celebrated. Jesus came to save His people from their sins, and sin's effects include poverty, brokenness, loneliness, and stagnation. The birth of the Great is therefore a birth of reversal for everyone who receives it."
      ]
    },
    {
      "heading": "Making the Path Straight - An Invitation to Receive",
      "paragraphs": [
        "Pastor Ricardo closed the message by drawing on the words of John the Baptist, the voice crying in the wilderness, calling people to prepare the way of the Lord and make His paths straight. This was applied practically as an invitation to repentance - to remove whatever iniquity might be standing between a person and the fullness of what God has for them. He prayed specifically for forgiveness over the congregation, believing that cleared ground allows the birth of new things to take root properly.",
        "He also addressed the question of the specific date of Christmas with pastoral wisdom, saying it does not matter whether December 25 is the historically precise birthday of Jesus. What matters is that He was born. What matters is that He is the Saviour. And what matters is that this day, whatever day you encounter this truth, can be the day your circumstances begin to shift. The message ended with a prayer for those grieving, those sitting alone, those with no food, and those who had not yet believed - a Christmas blessing extended to everyone within the sound of his voice."
      ]
    }
  ],
  "faqs": [
    {
      "q": "What does Matthew 1:21 say about the name Jesus?",
      "a": "Matthew 1:21 in the KJV says, 'And she shall bring forth a son, and thou shalt call his name JESUS: for he shall save his people from their sins.' The name Jesus was not chosen by Joseph or Mary but was given directly by the angel of the Lord. It carries the meaning of salvation - He came specifically to save people from sin and everything sin brings into a life."
    },
    {
      "q": "Why do I feel so empty and alone at Christmas?",
      "a": "Christmas can intensify feelings of loneliness, grief, and lack because it is surrounded by images of full tables and happy families. Pastor Ricardo Zaal acknowledges this honestly in his Christmas 2022 sermon, speaking directly to those who have lost someone, those sitting alone, and those with nothing on the table. The good news is that Jesus was born Emmanuel, which means God with us - you are not actually alone, even when it feels that way."
    },
    {
      "q": "How can the birth of Jesus Christ change my situation today?",
      "a": "Pastor Ricardo teaches that the birth of Christ is not only a historical event but a living spiritual force. Just as His arrival brought salvation, healing, and hope into the world, declaring that truth over your circumstances invites that same power into your life now. Practically, this means praying over your finances, your relationships, and your opportunities and believing that the same God who sent His Son can send breakthrough into your specific situation."
    },
    {
      "q": "Does it matter if Christmas is not actually Jesus's real birthday?",
      "a": "Pastor Ricardo addresses this question directly in the sermon. He says that whether Jesus was born on December 25 or in another month entirely does not change the reality and power of His birth. What matters is that He was born, He came as Saviour, and His arrival changed everything. Using Christmas Day as a moment to honour that truth and believe for new things in your life is entirely valid regardless of the calendar debate."
    }
  ],
  "steps": [
    "Speak the name of Jesus over every dead area in your life this week - finances, relationships, health - because Philippians 2:9-10 says that name is above every name and every knee must bow to it.",
    "Take a practical step of faith in the area where you need breakthrough, even if it is small, treating it as a seed sown in faith - as Pastor Ricardo said, every seed you sow goes into somebody else's life and comes back as fruit.",
    "Come before God in honest repentance this Christmas season, asking Him to remove any iniquity standing between you and His blessing, so that like John the Baptist declared, the path is made straight for the Lord to move in your situation."
  ]
}

type Section = { heading: string; paragraphs: string[] }
type Faq     = { q: string; a: string }

const sermonTranscript = "Oh, Jesus, Jesus, Jesus.We give You the praise, we give You the glory, the honour that You deserve.My God.Oh, merry Christmas to everybody.Merry Christmas to everybody.Merry Christmas.Merry Christmas.The day has come, the day has come for sufficient grace and the grace of God that has kept you to be here still, be here.And this is a day that I can say to you that God has given us the grace to see this day, and so many of us can actually say we have made it through a l- uh, many, many things.And I mean, if I say many things, I'm specifically reminded of somebody that died and can't really be here today.I'm specifically re- remi- reminded of some that actually thought that they will be, um, maybe having certain things in their lives today and they have not made it.So for all those reminders today, I wanna remind you, today is the birth of a great, a great, great king.King Jesus, the king of the Jews, the king of everyone that has taken Him as a lord and saviour.So this morning, I wanna greet you in the mighty name of Jesus Christ, our Lord and Saviour, my Lord and Saviour.I don't know about you, but He's my lord and saviour.So this morning, as I'm greeting you, I'm greeting you, the name that stood up against demons, and every time demons hear that name, that name is the name that make them to flee, the name Jesus.I'm greeting you in the name that is like balm to me.It's a, it's a, it's, it's a balm, it's an ointment that is, uh, saving you, f- and that is giving you healing this morning.I'm greeting you in that name, the name that, f- this day has been made for, because this name that is above every other name, the name that every knee would bow down to.So this morning I greet you in the name of Jesus Christ, our Lord and Saviour, and I wanna say to you, merry Christmas.Merry Christmas.May God just richly bless you this morning.May God just richly give you the h- your heart's desire this morning for the birth of His son, Jesus Christ.This is the birth that we actually have come to, to be, uh, uh, celebrating.So we're not celebrating something, but the, the birth of the great.The birth of the great.The birth of the great.So this is somebody that we literally, literally wanna say thanks to.So if you have not hear about Jesus before, I urge you this morning, listen to this message, and you will understand where we're coming from and what we are doing.So this morning, I wanna start off by saying, um, let's read out of the word, uh, the, the Book of, of Matthew 1.Let us read out of the Book of Matthew 1.Now the Book of Matthew 1:21 says, And, and she shall bring forth a son, and thou shalt call him, his name Jesus, for he shall save his people from their sins.Now, the Book of, of, of, of Matthew 1:21, And she shall bring forth a son, and thou shalt call him J- Jesus, for he shall save his people from their sins.Now I wanna, I wanna go back, uh, go a little bit, uh, down and say, Now all this was done that it might be fulfilled which was spoken of the Lord by the prophet, saying, \u2018Behold, a virgin shall be, uh, with, withPardon me.Behold, a virgin shall be, um, with child and shall bring forth a son, and they shall call his name Emmanuel.Which being interpreted, God with us.Then Joseph, being raised from sleep, did as the angel of the Lord had bidden to h- him, took unto him his wife: and knew he not till she had brought forth her firstborn son and called his name Jesus.So this morning, my message is entit- en- entitled, The Birth of The Great.The Great.The Great.Everybody knows the name Jesus this morning, because if you go to everywhere in the world, today is a celebration of a Christmas day.And for those who does not celebrate Christmas, they know that there's a day like this because of obviously everywhere you go, the media will make such a big fuss of it.Not just the media, but everywhere you go, you will actually see that, um, as you go i- in the, in the stores, there's some trimmings, there's some decorations.This is all about the celebration to them.It's maybe just a, a way of making more sales.But to us, it's another way of actually making sure that they know the Christmas day, and this day we know by Christ Jesus, we will know.So, uh, I wanna ki- uh, say to you, I'm just going to give out some blessings this morning.Just blessing you, blessing you, blessing you this morning.I wanna bless you for listening to this.For those of you who are still going to list afterwards, I wanna bless you this morning.May this day of the great bring great things to you this morning.My message will be sweet and short, but may this day bring great things to you.I've entitled the message The Great because of there's some birth of the great things in your life because of this day that Jesus has come forth.And as he came forth, he actually brought us so many things, so many things that we did not know.I mean, in fa- if I, for argument's sake, can tell you, anyone that know Jesus knows not that you need to not do a lot of bad things.And therefore, when you come to a day like this, which is Christmas, you will actually see so many joy that has been given over, so many peace that has been given over, so many people that has been, uh, uh, having so many trouble during the course of the year, they actually sit down and think, Wow, life has been great.So this morning, I wanna come to you and say to you that as Christ has given birth, I mean, as Christ has been born today, it will give birth to your situations that has been coming down in your life.For those situations that has been killing you, that, where you couldn't find life, may the birth of Jesus Christ bring life to you.If your business has been going down, may the birth of Jesus brings life to that bu- business.So anybody that is hearing to the sound of my voice, where the, there was no birth given, where Satan has stilled the seed of growth in your life, I come against the plans of Satan now in the mighty name of Jesus Christ, our Lord and Savior, and I bring birth and I, I bring birth, birth of great things, the great like Jesus has been the great for us, I bring that great to you this morning.So this morning, I wanna bless you by saying to you that as the birth of Jesus Christ is birthing out new things, may your new things comes your way as well.I bless you this morning, and I say, may the birth of Jesus birth to you those relationship that has been giving you all the headaches, I birth that this, uh, day will birth for the relationship that will give you more about Him, that is Jesus.So this morning, as the relationship has gone, uh, gone to, to die, I bring birth out of that relationship, a new joy that you will find, a new peace that you will find, a birth of new things in, in your relationship in the name of Jesus, the name that is above all the names.Where you feel alone, I bring the, the, the, the, the Holy Spirit to you because He will be your comforter, who will be the, the, h- being surrounding you all the time.So where anything that has you, that you feel that you haven't been having a best of, whether it's a financial situation, I birth to you this morning a financial growth to you in the mighty name of Jesus.Any one cent that you have as you're giving it out, wh- whether you buy a- a- a- a piece of bread, whether you buy a meat or what- ever you buy this morning, may it be a seed that is sowing into somebody else's life to bring to you the- the- the fruit of- of financial growth into your life.And don't be despaired for your using it as you- you are about to buy.Buy some, uh, a cool drink or whatever you're buying this morning.May that, uh, financial, uh, seed into somebody else's life, because it goes into a business, it goes into paying somebody who had money to pay, uh, for- for Christmas lunch today.Anywhere you go as you buy, that is a seed that you are sowing into somebody else's life, who will then come back and say, \"I could buy myself something for this Christmas out of the money that you gave me.\"So may that be something that will bless you to grow into your own financial situation as well, in the mighty name of Jesus.So this morning, I wanna bring a- bring birth to- to- to- to you as a person that has been having so much headache, so much head- headache, because of a certain person in your life that has been giving you all the- the gray hair that you can find.Regardless if it is your son, if it is your- i- your husband, if it is your boyfriend, if it is your, uh, girlfriend.Whether it is somebody who d- he said, \"What?That- will always give you a head- those headaches that you feel like, \"Whoa, I just want- don't wanna be, uh, surrounding with this person.\"May this day birth to you the peace that knows that you cannot change the person, but you can change yourself towards that person.So may that birth to you a new s- uh, seeing, a new side, so that you can see how you can, uh- can change your seeing towards th- that person, knowing that that person won't change.But as you change towards your attitude towards that person, may it birth forth a better situation in your life this morning, in the mighty name of Jesus Christ, our Lord and Savior.And I come to you now this morning, where you're t- where you were staying in a- in a place where you're not h- uh, you're just renting out.I birth and make this day of the birth of the great, to be a greater birth for you to stay in your own place this morning, to move into your own place this morning, in the mighty name of Jesus.Uh, the birth of Jesus that brings a birth to you to stay in your own place, not to rent out, uh, in, uh, somebody else's place, in the mighty name of Jesus.Where you've- you've- you've been moving into a smaller place, may the birth of Christ giving you a greater things.And I- I mean, if you're looking at it, some people just stay in a one-bedroom house while they have 4.So this morning, in the mighty name of Jesus, the birth of the great will bring a greater house for you, which every child will have their own room, in the mighty name of Jesus Christ, our Lord and Savior.The bi- birth of the great will bring great things because He said it in His word that, \"For He shall save His people from their sins.\"So whatever sins that has been giving you not to have what you need.So this morning, I come against everything and I ask God for forgiveness for your sins so that whatever has been an inequity standing in front of you and your god, I pray now in the mighty name of Jesus that that birth will bring b- b- bring forth a savior to you, uh, saving you from anything that is not of, uh, of God.So this morning, as he has come f- uh, uh, that say, \"Repent ye, for the kingdom of the heaven is at hand.\"So this is what it says, \"The voice of one crying in the wilderness, preparing the way of the Lord.Make this- make his path straight.\"So this is the birth of wherever there's a dry situation.May the birth of the great bring a situation where water flood out like out of a rock which Jesus th- uh, which God has b- bring forth.So may this birth of the great bring to you water, and water that, uh, that will, uh, you will thirst no- no longer for.May the great brings to you whatever you- it's been drying in your life, it's been too dry.May the birth of the great bring a birth for you to have some- uh, some- uh, some nourishment into your life.Where you've been hungry, may the birth of Christ birth a- a fullness of joy into your life, a fullness of your stomach into your life, in the mighty name of Jesus.So this morning as I g- come to this, uh, to tell you that Christ's birthday this morning, as others believe, it was not his birthday.I don't care to- to know whether it is his birthday or not.But this morning, because of the- the celebration that goes on up- around the world, and everybody knows that this is the Christ's birthday regardless whether you- you believe it or not, whether you- you, uh, believe whatever it is thatI don't care what you are saying.But as long as you know that the Christ has been born, regardless whether it is this day or another day, regardless whether he was born in the month of February, the January 2nd, uh, uh, uh, April, whichever month, it does not matter as long as he was born and he has come as our savior this morning.So I, uh, bring to you the birth of the great, that you that don't believe will still believe in him, sending forth things to you that you did not know.He will open up your mind to certain things.May the birth of Christ open up new opportunities in your mind so that you see opportunities this morning, in the mighty name of Jesus Christ, our Lord and Savior.Every s- opportunity that you- that- that you- that comes into your mind, let it come to fruitation so that it could bring forth fruit, in the mighty name of Jesus.May the birth of this day bring forth, uh, business opportunities to you.May the month this day, as, uh, we- we celebrating the day, make you to celebrate into your own life as well this morning, in the mighty name of Jesus.I bring my message to an end this morning.The birth of Christ will birth to you things of greatness.The birth of Christ bring things to you of greatness.And this is how I, uh, end my message.May you and your family have a blessed Christmas.For those of you that has lost a family member, I pray that the Comforter will be, uh, uh, will be surrounding you, the Comforter will comfort you in the mighty name of Jesus Christ, our Lord and Savior.And I pray that this morning as you listen to this and every situation that has been tough, where there's no food at your table, may God bring somebody that will knock at your door and say, \"I just thought of bringing something to you.\"And that, that God will send somebody to your house to bring fo- for you a, a, a, a bread, whether it is a bread or a Christmas lunch, but may God just bring that to you now in the mighty name of Jesus.And I pray for you as you are sitting alone thinking that there's nobody who cares about you, may God bring somebody that will knock at your door and s- show to you that they still care regardless whether you have lost, uh, uh, faith in humanity.May God give that person to you in the mighty name of Jesus this morning.And as you are sitting, you sitting and thinking that, \"My, my family has left me alone.I'm sitting on the street not knowing where to sleep tonight,\" may the birth of Christ bring some place for you to, to, to, to be f- comforted for.May God give you a place where anyone seeing you will be seeing Christ Jesus in your life this morning.So this morning as we celebrate Christ Jesus, I pray that Heavenly Father, as anybody that is listening to this, knowing you or not knowing you, Father God, may they know that you are the Christ, the Savior that has bring things to us that has saved us from things that will kill us.So this morning in the mighty name of Jesus, as you go and celebrate whatever you are celebrating today, may God just richly bless you in celebrating everything.May God just richly bless you in celebrating, not just celebrating the, the, the birth of Christ, but celebrating your victory, your victory over circumstances, your victory over life, your victory over everything that was trying to put you down.May this Christmas make you to celebrate over any situation that has been bringing you down in the mighty name of Jesus Christ, our Lord and Savior.This morning as you go and celebrate, celebrate life, because of life is where you can actually have a second chance.And I come against the plan of the enemy who is trying to steal somebody's life by a suicidal.I come to you now in the mighty name of Jesus and I cast you i- out.I curse you now in Jesus' name.Life, and I speak life, life in abundance over the person that is trying to take their life today because they feel lonely.I pray now in the mighty name of Jesus Christ, our Lord and Savior, reveal to e- s- uh, that person now in the mighty name of Jesus that person will not take their life this morning because I know Christ Jesus is there to pick the person up now in the mighty name of Jesus.I prophesy now into your life you will have great destiny, you will have a great destiny.You are having a great destiny and as you were about to take your life, may God th- that has put that great destiny into your life use this time that you've been going through bereavement, that you've been going through pain to, to, to, to actually glorify His name and stand up and say, \"If it wasn't for this day that this guy was speaking about the suicide, I would have died today.I would have taken my own life.\"on this morning.As you are about to take your own life, may the, the Spirit of God take you out of that situation, take you out of that situation so that you can have life.And not just an ordinary life but a life in abundance with a family that cares about you, with kids that will surrounding you, that will hug you and tell you every time that, uh, you love, you are loved, you are loved by that kids in the mighty name of Jesus.And as you are about to listen to this this morning, anyone that is hear- hearing the sound, uh, under the sound of my voice, I prophesy that whatever situation that have put you down 0 on the ground will, will lift, uh, uh, God will lift you up this morning.Depression is not your portion.Depression is not your portion.May the peace of God that transcends all minds go onto your life now in the mighty name of Jesus Christ, our Lord and Savior.God will lift you up this morning.God will lift you up this morning.God will move you to another realm that is, uh, high above your enemies, a realm that you will look up down to your enemies and say, You thought that you can defeat me but God has defeated you.In the mighty name of Jesus, I prophesy this morning that as you are about to go out there and eat some lunch with people, may you th- may you sit down and eat in front of your enemies and, uh, on the same table and say to them that I'm celebrating my life.So that they can celebrate with you because God has prepared the table in front of your enemies.God has prepared the table in front of your enemies.I prophesy now, any enemies that is sitting on your table, let them, uh, uh, s- put their heads down in shame and says, Wow, this guy's God is greater than what we thought he is.So this morning I prophesy in the mighty name of Jesus Christ our Lord and Savior where dry situations has come into your life may God just nourish it in Jesus mighty name I pray this morning.Amen.Now may the grace of our Lord Jesus Christ, the love of God, and the sweet fellowship of the Holy Spirit rest and abide with us until Jesus comes.Surely goodness and mercy shall follow us all the days of our lives and we shall dwell in the house of the Lord forever and ever.In Jesus name, amen.God bless you."

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
      
        <section className="bg-white pt-8 pb-2 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#f0fafa] border border-[#cfeeee] rounded-xl p-5 mt-6">
              <h2 className="text-lg font-bold text-[#1a1a1a] mb-3">This message is for you if:</h2>
              <ul className="list-disc list-inside space-y-2 text-[#555]">
                <li className="leading-relaxed">{"You feel life's monotony wearing you down"}</li>
                <li className="leading-relaxed">{"You yearn for a deeper purpose"}</li>
                <li className="leading-relaxed">{"You feel your potential is untapped"}</li>
                <li className="leading-relaxed">{"You sense there's more to life"}</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="bg-white py-12 px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-xl font-bold text-[#1a1a1a] mb-2">Send this to someone who needs it</h2>
            <p className="text-[#555] mb-5">One message can reach someone you cannot. Pass it on.</p>
            <a href={"https://wa.me/?text=I%20thought%20this%20message%20may%20encourage%20you%3A%20https%3A//www.fountaingrace.org/sermons/birth-of-the-great-christmas-sermon-matthew-1-21%3Futm_source%3Dwhatsapp"} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold text-lg px-7 py-4 rounded-xl hover:bg-[#1ebe5d] transition-colors w-full sm:w-auto">
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden="true"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.821 11.821 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.477-.911zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
              Share on WhatsApp
            </a>
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
