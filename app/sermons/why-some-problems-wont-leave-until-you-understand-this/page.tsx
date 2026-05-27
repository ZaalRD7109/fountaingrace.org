import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Why Some Problems Won\'t Leave Until You Understand This | Fountain of Grace International',
  description:
    'Problems that keep returning do so for a reason. The blood of Jesus has five specific functions that break persistent cycles. Pretoria North.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/sermons/why-some-problems-wont-leave-until-you-understand-this',
  },
  openGraph: {
    title: 'Why Some Problems Won\'t Leave Until You Understand This',
    description:
      'If a problem keeps returning after prayer, fasting, and faith - this message explains what most people are missing. Fountain of Grace International, Pretoria North.',
    type: 'article',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International - Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/sermons/why-some-problems-wont-leave-until-you-understand-this',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Why Some Problems Won\'t Leave Until You Understand This',
    description: 'The blood of Jesus does five specific things: speaks better than your past, protects what belongs to God, cleanses deeply, brings healing, and gives direct access to God.',
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
    datePublished: '2026-04-19',
    url: 'https://www.fountaingrace.org/sermons/why-some-problems-wont-leave-until-you-understand-this',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Sermons', item: 'https://www.fountaingrace.org/sermons' },
      { '@type': 'ListItem', position: 3, name: 'Why Some Problems Won\'t Leave', item: 'https://www.fountaingrace.org/sermons/why-some-problems-wont-leave-until-you-understand-this' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why do some problems keep coming back even after prayer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'According to Revelation 12:11, overcoming happens by specific means - not automatically. Many persistent problems continue because the person is fighting the symptom without applying the power of the blood of Jesus to the root. The blood speaks better than your past, protects, cleanses deeply, brings healing, and gives access to God.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does the blood of Jesus actually do in a believer\'s life?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The blood of Jesus does five things: (1) It speaks better than your past - Hebrews 12:24. (2) It protects what belongs to God - Exodus 12:13. (3) It cleanses deeply from inner torment and sin - 1 John 1:7. (4) It brings healing to body and emotions - Isaiah 53:5. (5) It gives direct access to God without you needing to fix yourself first - Hebrews 10:19.',
        },
      },
    ],
  },
]

const points = [
  {
    n: 1,
    title: 'The Blood Speaks Better Than Your Past',
    scripture: 'Hebrews 12:24',
    body: 'Hebrews 12:24 says Jesus is "the mediator of the new covenant, and to the blood of sprinkling, that speaketh better things." Your past mistakes do not define what God can do now. Abel\'s blood cried for vengeance. The blood of Jesus cries for mercy. Guilt has a voice - but the blood speaks louder.',
  },
  {
    n: 2,
    title: 'The Blood Protects What Belongs to God',
    scripture: 'Exodus 12:13',
    body: '"And the blood shall be to you for a token upon the houses where ye are: and when I see the blood, I will pass over you." The blood marks ownership. Some things that would have destroyed you have passed over you not because of your performance, but because you belong to God. The question is not whether you are protected - it is whether you are His.',
  },
  {
    n: 3,
    title: 'The Blood Cleanses Deeply',
    scripture: '1 John 1:7 / Hebrews 9:14',
    body: '"The blood of Jesus Christ his Son cleanseth us from all sin" - not surface-level. Hebrews 9:14 says it purges the conscience. Many people look clean on the outside while carrying torment on the inside: shame, grief, inner accusation. The blood reaches where no one else can. It cleanses what is hidden.',
  },
  {
    n: 4,
    title: 'The Blood Brings Healing',
    scripture: 'Isaiah 53:5',
    body: '"He was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed." The stripes were not only for forgiveness - they were for healing. Physical healing. Emotional healing. The pain Jesus endured was so that your pain has a basis for removal.',
  },
  {
    n: 5,
    title: 'The Blood Gives Direct Access to God',
    scripture: 'Hebrews 10:19',
    body: '"Having therefore, brethren, boldness to enter into the holiest by the blood of Jesus." You do not need to fix yourself before coming to God. You do not need to earn the right. The blood already paid for your access. Coming to God as you are is not boldness - it is the correct response to what the blood purchased.',
  },
,
  {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Why Some Problems Won't Leave Until You Understand This",
    "description": "Why Some Problems Won't Leave Until You Understand This",
    "thumbnailUrl": "https://img.youtube.com/vi/N1_YYrEGtto/maxresdefault.jpg",
    "uploadDate": "2026-04-19T12:00:00+02:00",
    "embedUrl": "https://www.youtube.com/embed/N1_YYrEGtto",
    "url": "https://www.fountaingrace.org/sermons/why-some-problems-wont-leave-until-you-understand-this",
    "author": { "@type": "Person", "name": "Pastor Ricardo Zaal" },
    "publisher": {
      "@type": "Organization",
      "name": "Fountain of Grace International",
      "url": "https://www.fountaingrace.org"
    }
  }
]

const sermonTranscript = "It happened quickly and suddenly it's gone, but then it comes back again.\nAnd I mean, you're working hard, you're praying hard, but sometimes you still feel that it's still unresolved.\nSo many people are literally fighting the symptoms, but while they're ignoring the root of things.\nSo many know how to hustle, but they don't know what it is that the reason for the hustle.\nI mean, many know just a little bit to survive on or a little bit about religion, a little bit about governance.\nSo all these things that you know does not really get you to what you want to have.\nBut I want to make sure that you understand that this message or this specific message today, I have entitled, Why Some Problems Won't Leave.\nWhy Some Problems Won't Leave until you understand this specific and which this specific I will explain to you as we go on.\nI mean, I want you to understand that this will be a sermon dealings with battles that keeps on repeating themselves.\nThis sermon specifically is for the person that feel there's some sort of a blockage in their life.\nIt's like everywhere you go, your life is blocked.\nAnd this is specifically for somebody who's tired of the fear, tired of pressure, tired of this spiritual attacks that keep on keeping on, that keep on coming back.\nIt's like the person who carries a lot of guilt from the past.\nAnd yet it's like whenever they come to God, it's like every time when you ask for forgiveness is as if it's not God is not hearing you.\nThis is for the person that needs healing in their body.\nBut let me let me let me not stop by saying healing in their body.\nLet me say healing in their mind, healing in their heart, healing in their situations.\nThis is the the one this message is for.\nThe person who need real answers.\nSomebody who need real answers.\nNot just empty talk.\nCan you switch that one off for me please?\nBecause I'm just thinking like this, it will keep on, keep on disturbing.\nI want us to go to the book of Revelations 12.\nThe book of Revelations 12.\nAnd I want us to read verse 11.\nWhy some problems won't leave until you understand this.\nMy emphasis today is specifically on the first part.\nThey overcome.\nCan you hear that?\nHe says they overcome.\nBut the thing is that overcoming does not just happen because it wants to happen.\nOvercoming happens.\nBy sick things.\nOvercoming happens by specific things.\nAnd if you're looking at it, my main focus today will be the overcoming by the blood of the lamp.\nThat would be my main focus today.\nBy the overcoming of the blood of the lamp.\nBy the overcoming of the blood of the lamp.\nBy the way.\nI don't know.\nI just see something here.\ni'm just trying to see the the network is bad\nthis this this technology and i don't want to lie to you i won't be\ndoing this life thing anymore i will just repeat it how do you call it i will just\nrecord it and afterwards put it on life because this becomes a problem i'm looking at it now\nand i can see the the signal\nit's not good\num if you look at facebook now and if you're looking at youtube you just see a blurry vision of myself\nso i'll i'll i'll i'll leave that um\nany camera as a recorder\ni think i will just i will just\nuh how do you call it record it on the recorder and see what i can do afterwards with it but i\ndon't think this will work the way i have it now\num\nuh\nOkay. Let me use this mic now. It's going to be my mic for today.\nSomething didn't update, but it's fine.\nAll right. So, like I said, I want to take this moment and talk about the blood.\nNow, as I said, my message entitled, Why Some Problems Won't Leave Until You Understand This.\nAnd what is there to understand is that when you're looking at the book of Revelations, it says, and they overcame, not will be overcoming.\nCan you hear the English there? Maybe my English is not good, but this overcame him, meaning to say that it's a past tense.\nIt's not a present tense. It's something that already happened.\nSo they overcome by the blood of the lamb.\nSo what does that mean when you're looking at the blood of the lamb?\nIf you go to the to the book of 24, now Hebrews 12 verse 24 says, and to Jesus, the mediator of the new covenant and to the blood of sprinkling that speak better things.\nSo what does that mean? It means that the blood speaks better things than your past.\nThat's the number one thing that you must understand.\nAnd if I can see some people think that the mistakes that they made in the past still define them today.\nIt does not matter about the mistakes for the only reason that you will still be making that mistakes is if you are saying that this is the mistake I've made and not move on and say, I'm sorry.\nSo we made is the reason why we are still where we are.\nOkay, you've made the mistake. Come on. So move on now.\nLife is not about the past. It's a future. The past is gone.\nAnd you know, some people think that that guilt has the final say in your life.\nOne of the things that I can tell you now that I felt guilty about for many years.\nAnd I'm so glad what I did.\nIt is. I went to my father, which was my stepfather.\nNow I went to my stepfather.\nBecause what happened is I, I was hitting him so badly.\nOne day, I got so angry that I hit him, a pig, this, this, this, this, this stick of the pig.\nWhat do you call it?\nAfrikaans is a pig steel.\nSo when I hit him, right afterwards, it was like months, years, it becomes years that I kept on thinking about this.\nAnd this happened before I actually knew the Lord.\nAnd I never thought for any forgiveness for that specific incident.\nI asked him for other things, but that kept on coming up in my mind.\nAnd the guilt was starting to give me problems.\nSo I went to him just like literally maybe 10, 10 years before he passed on or maybe nine or eight years before, before 2010.\nI went to him and I spoke, you know what, I feel guilty for the fact that I hit you with this specific object.\nAnd today, as I'm speaking to you now, apologizing for that.\nDo you know what the guy said?\nI even forgot about it.\nI didn't even bother.\nTo me, it was in the past.\nIt's finished.\nCan't you see we have the best of relationship at the moment?\nAnd here, the guilt was eating me from inside.\nSometimes your guilt, you just have to the person.\nYou know, some even think that she followed them for the rest of their lives.\nBut I can, when the blood speak, it have a voice.\nIt does have a voice that speaks.\nThe blood.\nThe blood speaks literally than the things of Abel.\nDo you know that Abel's blood cried for justice?\nBut when Jesus came for mercy.\nWhen Jesus came, the blood cried for mercy.\nWhy?\nWhoever is.\nMiss Kat, will you not forget for me, of you just heard on Facebook, or you just heard?\nLike, that's it.\nIt's not that I heard on the sound, it's at least all right.\nIt's all as my face is not all right.\nAnd it comes to the, when it comes to the, when it comes to the, the, the, the blood of Abel, it cried for vengeance.\nBut when it comes to the blood of Christ, it brought redemption.\nOne thing I can tell you, the reason I'm mentioning this to you, and why.\nYeah, no, the sound is nice.\nOkay, so it's fine.\nSo, guilt speaking, but the blood speaks louder.\nSome shame is, but the blood speaks louder.\nSome accusations even speak, but the blood speaks louder.\nI can tell you, if you go to Exodus 12, verse 13, let me explain Exodus 12, verse 13 to you.\nNow, Exodus 12, verse 13 says,\nAnd the blood shall be to you, upon the house where you are.\nAnd when I see the blood, I will pass over you.\nAnd the plague shall not be upon you to destroy you, when I smite Egypt.\nSo, as much as the blood speaks, it also gives protection to those who belong to God.\nNow, my question to you is that whenever certain things happen in your life, is the question, what did I do wrong?\nOr is the question, am I a child of God?\nSometimes our guilt makes us to think that we have done wrongly, while it was just supposed to be something that we should have done to be a child of God.\nBecause being a child of God is already helping you so that the blood can cover you.\nSome of the things others collapse under, God preserve you from it.\nAs I was speaking, I was telling you the last time I was, I'm busy writing this book about my life.\nIt's not a book about my life, but it is testimonies out of my life.\nI'm using it so that you can see ways forward, if I can call it that way.\nAnd one of the things that I spoke about was the mere, when I was 16 or 17 years of age, I almost killed Caroline with a knife.\nThis is now my ex-girlfriend.\nAnd that same night, I wanted to go and, and luckily, I tried to commit suicide away from the, what do they call this thing, away from the people.\nAnd I took the knife that was the, and even up to, till today, I said, you're a donkey.\nI was stomp.\nBecause imagine if I killed myself by that time, what would have been?\nSo this is what I'm saying.\nCertain things, you could have collapsed, but God has preserved us.\nI even think of it, by the time I lose the family, God preserved me.\nSome people would have said, ah, I've lost so much.\nLet me also go.\nI would have got in the hospital.\nMs. Kat, you remember the time I was in Midrend?\nWhat is that?\nThere was a hospital in Midrend.\nYeah, but I was in the hospital in Midrend.\nI just suddenly, I was on the call.\nAnd while I was, I think I was in the retentions, but somebody was, wanted to cancel their policy because a family member died in a, in a car accident.\nAnd the next thing I found myself, I fainted.\nThe hospital, I mean, the ambulance on my way to hospital.\nThat could have been the last of me, but God preserved me.\nSo for certain things, later, you are safe.\nSo the question should not be, am I protected?\nThe question should be, am I a child of God?\nJust remember something there.\nWhen God made a covenant with you, even Jesus spoke about the blood covenant.\nYears, when you were talking about the covenant, when somebody have a covenant, when, when, when, when David and Jonathan had a covenant, that covenant was standing until death.\nWhen it was with us, the covenant will be standing there till thy kingdom come.\nSo you just need to understand with God.\nAnd you know that when it comes to this specific scripture, I was talking about in, in Exodus, it was literally the blood that marks the, the blood that marked the ownership of God.\nSo the blood, at the time, it cleanses deeply.\nWait, I should, I should actually say to you, the number one thing about the blood is, is that the blood, according to what I said previously, speaks better than your past.\nThat's, that's the number one thing.\nThe number two thing is that the blood, what belongs to God.\nAnd then the, the number three thing is the blood cleanses deeply, not just cleaning, but deep cleansing.\nClean from outside, but they literally carrying so much pain, so much torment from the inside.\nI want to speak to, to, to, to, to, to, to, to, to the people that doesn't know God.\nFor some weird reason.\nWhy do you think you are going through what you are going through?\nIsn't it because you have not been getting into the cleansing blood of Christ?\nYou from outside.\nIt's almost like as if I can say to you.\nThe dirt from inside.\nLet me, let me, let me make an example.\nThere was this friend of ours some years ago.\nAnd he passed on, may his soul rest in peace.\nThis guy was the, the joke of the whole post-Mazberg.\nWhenever somebody mentioned the name Buffy.\nOr mentioned the name Stout Maniki.\nOf him, Gordon.\nThat was the three names he went by.\nSo, whenever Stout Maniki would have gone out.\nInside the, the, the, the store.\nA lot of people saw him as the joker.\nThey, they, they would just look at him.\nAnd they start laughing.\nBut nobody knew.\nUnder those jokes that this guy went through.\nThis guy never wanted to go home.\nBecause he felt the house wasn't a safe place to be at.\nThis is the, whenever he had a girlfriend.\nHe couldn't keep a girlfriend.\nBecause he was worried that somebody would, would hurt him.\nFor some weird reason.\nAll this pain that he went through.\nPortrait.\nOnly portrayed by the people that was living close to him.\nAnd the worst part of it is.\nI would have laughed when.\nWhenever I hear the guy is talking about.\nAnd I would say.\nHunger strike.\nAh, you're going on a hunger strike.\nBut then the first thing he come to my house and say.\nHe look for food.\nAs long as he doesn't eat at home.\nYou just tell them.\nI'm on a hunger strike.\nBut then when he comes to my house.\nHey, he could gimbal.\nHe just.\nBut then when he.\nGo home.\nThe look.\nRight.\nI'm on a hunger strike.\nThe pain that the guy went through.\nHe did not explain it to anybody else.\nHe did not explain it to anybody else.\nBut he just felt treated unfairly.\nBut I want you to see.\nThe blood cleanses.\nEven that torment.\nThat is within you.\nHe cleanses.\nIf you go to John 1 verse 7.\nNow John 1 verse 7 says.\nThe following.\nJohn 1 verse 7 says the following.\nBut if we walk in the light.\nAs he.\nWe have fellowship with one another.\nAnd the blood of Jesus Christ.\nHis son.\nCleanses us.\nFrom all our sin.\nFrom all.\nAll sin.\nActually.\nBut from all.\nSin.\nWhere Hebrews.\n9 verse 14 says the following.\nForgive me.\nI'm just.\nReading the.\nI'm just.\nMessage.\nAs I'm trying to.\nNormally when I preach.\nI take something.\nExpand on it.\nBut today.\nI'm not going to expand.\nTo keep it short and brief.\nSo.\nHebrews 9 verse 14.\nSays the following.\nHow much more.\nShall the.\nWho through the eternal spirit.\nOffered himself.\nWithout.\nSpot.\nTo God.\nPerch your conscious.\nFrom that works.\nTo serve.\nThe living God.\nCan you see.\nIt says.\nHow much more.\nShall the blood of Christ.\nWho through eternal spirit.\nOffered himself.\nWithout the spot.\nTo God.\nCan you.\nThis is about.\nNot just.\nHaving.\nSomething that speaks.\nBut it's about.\nAn.\nAction.\nThat has taken place.\nAnd it also shows you.\nThe inner.\nInner.\nInner.\nConscious.\nGet cleansed.\nNumber four.\nThe blood brings.\nHealing.\nHealing.\nDo you know that.\nWhen we talk about.\nChrist.\nWhen he died.\nWe.\nWe mostly talk about.\nHow.\nHe brought forgiveness.\nBut do you know that.\nChrist also carried.\nPain.\nIf you're looking at.\nThe book of Isaiah.\nIsaiah 53 verse 5.\nSays the following.\nBut he was wounded.\nFor our transgression.\nHe was bruised.\nFor our iniquities.\nThe punishment.\nOf our peace.\nWas upon him.\nAnd with his stripes.\nWe are healed.\nWith his stripes.\nWe are healed.\nBut why.\nWhy am I mentioning this to you?\nIt's like.\nWhen Christ.\nWas bruised.\nThat the blood.\nComes to you.\nAs healing.\nHe.\nNeeded.\nTo be.\nSo much.\nBroken down.\nFor your body.\nTo be healed.\nBe.\nHealing.\nFrom trauma.\nDo you know what.\nIs traumatic.\nTraumatic.\nIs when.\nWhen you're still alive.\nAnd.\nEvery.\nEvery bone.\nIn your body.\nGets broken.\nYou know.\nIn the.\nIn a.\nIn a.\nIn a place.\nWhere.\nWhere people.\nWant to make sure.\nThat you are.\nYou are dead.\nThey would.\nBreak.\nEvery.\nSingle.\nBone.\nOf you.\nSo that you don't.\nCome to life.\nSo.\nHe was.\nBroken down.\nFor our.\nHealing.\nNot just.\nFor our.\nHealing.\nBut remember.\nWhen he said.\nEarly.\nEarly.\nIt was.\nAn.\nEmotional.\nThing.\nThat he went.\nThrough.\nFor your.\nEmotions.\nTo get.\nHealed.\nAs well.\nSo the.\nEmotions.\nThat you go.\nThrough.\nThrough.\nIt was.\nAll that he went.\nThrough.\nThe emotions.\nOf feeling.\nLonely.\nThe emotions.\nOf feeling.\nGod has been.\nLeading.\nHas been.\nLeaving you.\nEmotional.\nHealing.\nAs well.\nHe brought.\nTo you.\nAnd you know.\nWhat?\nOne thing.\nI can tell you.\nNow.\nIs that.\nHe said.\nAnd the peace.\nOf God.\nTranscends.\nAll minds.\nWill be.\nAnd so.\nHe brought.\nPeace.\nAs well.\nThe one thing.\nI can tell you.\nThe.\nBlood of Christ.\nReaches.\nPeople cannot reach.\nThe blood of Christ.\nReach.\nWhere people.\nCannot reach.\nNumber five.\nThe one thing.\nThat you must know.\nIs the blood.\nAccess.\nTo God.\nIt gives.\nAccess.\nTo God.\nLike.\nPeople have the tendency.\nThere.\nOf thinking.\nThat.\nWhen.\nWhen.\nWhen there's something.\nThey want to do.\nFor God.\nThey must fix.\nThemselves.\nFirst.\nNo.\nLeave this.\nBefore.\nI come.\nTo the Lord.\nI just need.\nTo do this.\nBefore.\nI come.\nTo the Lord.\nI just need.\nTo do that.\nBefore.\nI come.\nTo the Lord.\nNo.\nBlood.\nGive you.\nAccess.\nTo God.\nBecause he died.\nOn the cross.\nOf Calvary.\nThat is a false.\nDoctrine.\nThat you have.\nThat you first.\nNeed to come.\nCorrect.\nOr you first.\nNeed to.\nFix yourself.\nPerfect.\nBefore you can.\nGet to God.\nYou can.\nCome.\nTo God.\nAs you are.\nBecause the blood.\nGives you.\nAccess.\nTo that.\nOr to him.\nIf you.\nRead.\nHebrews 10.\nHebrews 10.\nVerse 19.\nIt says.\nHebrews 10.\nVerse 19.\nSays the following.\nTherefore.\nBrethren.\nBoldness.\nTo enter.\nInto the holiest.\nBy the blood of Jesus.\nBoldness.\nTo enter.\nInto the holiest.\nJesus.\nImagine.\nThis is something.\nThis is something.\nI can tell you now.\nOne of the.\nThe.\nEasiest thing is.\nHow.\nBoldness.\nTo enter.\nInto the holiest.\nThrough the.\nBlood.\nGives you.\nAccess.\nAnd the thing.\nThat you must understand.\nThis is not something.\nBecause you.\nEarned it.\nNo.\nYou become.\nBecause Jesus.\nPaid.\nJesus already.\nPaid for it.\nNow.\nI want.\nI want to go through.\nA few things.\nWith you.\nYou.\nYou.\nYou.\nYou.\nYou.\nYou.\nYou.\nYou.\nYou.\nYou.\nYou.\nYou.\nYou.\nYou.\nYou.\nYou.\nYou.\nYou heard.\nMe.\nSaying.\nAbout.\nThe.\nThe.\nThe.\nThe.\nThe.\nThe.\nThe.\nThe.\nThe.\nThe.\nThe.\nThe.\nThe.\nThe.\nThe.\nThe.\nThe.\nNumber.\nOne.\nThing.\nWhich.\nWas.\nThe.\nBlood.\nThat's.\nBetter.\nThan.\nThe.\nThe.\nThe.\nNumber.\nTwo.\nThing.\nThe.\nBlood.\nThat.\nProtects.\nWhat.\nBelongs.\nTo.\nGod.\nAnd.\nThe.\nBlood.\nThat.\nCleanses.\nDeeply.\nThe.\nBlood.\nThat.\nBrings.\nHealing.\nBlood.\nThat.\nGives.\nExcess.\nNow.\nSome.\nOf.\nYou.\nMight.\nAsk.\nThe.\nQuestion.\nMother.\nTell.\nMe.\nSomething.\nWhy.\nWhy.\nWould.\nYou.\nSay.\nThis.\nHow.\nDo.\nOne.\nApply.\nIt.\nTo.\nYour.\nOwn.\nLife.\nI.\nAm.\nNot.\nA.\nA.\nVampire.\nOr.\nA.\nSatanist.\nThat.\nDrinks.\nBlood.\nI.\nAm.\nNot.\nA.\nSome.\nBlood.\nSacrifice.\nDo.\nYou.\nWant.\nMe.\nNow.\nTo.\nDo.\nIt.\nThe.\nSame.\nLike.\nThey.\nDid.\nNo.\nI.\nI'm.\nNot.\nSaying.\nThat.\nSaying.\nThat.\nAll.\nI'm.\nSaying.\nTo.\nYou.\nIs.\nNumber.\nOne.\nYou.\nJust.\nHave.\nTo.\nBelieve.\nThat.\nThe.\nBlood.\nDid.\nIt.\nDon't.\nTrust.\nTrust.\nThe.\nFact.\nThat.\nThe.\nBible.\nSay.\nScripture.\nIs.\nThere.\nFor.\nYou.\nThat's.\nAll.\nYou.\nHave.\nTo.\nApply.\nJust.\nApply.\nThe.\nFact.\nThat.\nYou.\nKnow.\nSays.\nThat.\nGod.\nWill.\nWill.\nBy.\nThe.\nThe.\nThe.\nThe.\nBlood.\nThat.\nIs.\nSprinkled.\nOn.\nYour.\nDoor.\nThe.\nDeath.\nAngel.\nWill.\nPass.\nBy.\nThat's.\nJust.\nTo.\nBelieve.\nAnd.\nAnother.\nOne.\nI.\nCan.\nTell.\nYou.\nIs.\nTo.\nSpeak.\nThe.\nWord.\nConfess.\nWhat.\nThe.\nWord.\nSays.\nAbout.\nYour.\nLife.\nWhat.\nThe.\nWord.\nSays.\nAbout.\nYour.\nLife.\nDeclare.\nDeclare.\nThat.\nBy.\nThe.\nBlood.\nOf.\nJesus.\nI.\nHave.\nOvercome.\nAccording.\nTo.\nRevelations.\n12.\nVerse.\n11.\n12.\nVerse.\n11.\nYeah.\nI.\nHave.\nOvercome.\nBy.\nThe.\nBlood.\nOf.\nChrist.\nThat's.\nHow.\nI.\nOvercome.\nJust.\nProphesy.\nThe.\nWord.\nOver.\nYour.\nLife.\nBy.\nHis.\nStripes.\nI.\nAm.\nHealed.\nThe.\nBlood.\nOf.\nChrist.\nThat.\nThat.\nWas.\nShared.\nOn.\nThe.\nCross.\nOf.\nCalvary.\nWas.\nShared.\nFor.\nMy.\nHealing.\nAnd.\nThe.\nOne.\nThing.\nI.\nCan.\nTell.\nYou.\nNow.\nJust.\nReject.\nCondemnation.\nFor.\nThose.\nWho.\nOf.\nUs.\nThat.\nIs.\nThere's.\nTherefore.\nNo.\nCondemnation.\nDo you know.\nSometimes.\nWe condemn.\nOurselves.\nWith.\nWith.\nThings.\nThat.\nWe have.\nDone.\nIn.\nThe.\nPast.\nThat.\nWe.\nThink.\nThat.\nGod.\nHas.\nThe.\nMoment.\nYou.\nFelt.\nLike.\nI've.\nDone.\nSomething.\nWrong.\nAnd.\nYou.\nHave.\nConfessed.\nIt.\nAnd.\nYou.\nSay.\nI.\nHave.\nDone.\nSomething.\nWrong.\nIt's.\nEnough.\nProve.\nThat.\nYou.\nHave.\nDone.\nYou.\nTo.\nDo.\nSo.\nDon't.\nCondemn.\nYourself.\nBy.\nThe.\nFact.\nThat.\nYou.\nYou.\nSay.\nI've.\nDone.\nIt.\nNo.\nYou.\nHave.\nDone.\nIt.\nYes.\nThank you.\nA human.\nBeing.\nHuman.\nBeings.\nMake.\nMistakes.\nBecause.\nOf.\nHuman.\nBeings.\nMaking.\nMistakes.\nSorry.\nI've.\nDone.\nIt.\nBut.\nAlso.\nSorry.\nI can't.\nWhat.\nWhat is it called?\nI can't let this be.\nTaking my future.\nAway.\nFrom.\nSorry.\nGod.\nI move on.\nDon't.\nBy that.\nBut.\nOne of the things that I can say to you.\nIf.\nIf.\nIf.\nIf.\nGod.\nForgive you.\nStop.\nAgreeing.\nWith.\nThis.\nAccusation.\nAgainst.\nYou.\nBecause.\nThe.\nAccusing.\nAccusing.\nYou.\nAnd.\nEvery.\nAccusation.\nThat.\nHe.\nGive.\nTo.\nYou.\nIs.\nFor.\nYou.\nTo.\nCondemn.\nYourself.\nBut.\nAlso.\nAt the same.\nTime.\nI need.\nYou.\nTo.\nUnderstand.\nThat.\nYou.\nStill.\nNeed.\nTo.\nLove.\nWholly.\nYou.\nStill.\nHave.\nTo.\nLove.\nWholly.\nI.\nNeed.\nTo.\nI.\nNeed.\nTo.\nGive.\nYou.\nSome.\nSolutions.\nTo.\nCertain.\nThings.\nDon't.\nA.\nA.\nA.\nProblem.\nAnd.\nWhen.\nYou.\nFeel.\nStuck.\nFor.\nArgument.\nSake.\nYou.\nJust.\nFight.\nIt.\nNaturally.\nStart.\nWorking.\nIn.\nThe.\nSpiritual.\nScience.\nBecause.\nEphesians.\nSix.\nOur.\nBattle.\nIs.\nNot.\nAgainst.\nFlesh.\nAnd.\nSo.\nSometimes.\nYou.\nHave.\nTo.\nLook.\nInto.\nAs.\nWell.\nBut.\nThe.\nThing.\nThat.\nI.\nCan.\nTell.\nYou.\nAlso.\nStop.\nAgreeing.\nWith.\nThe.\nGuilt.\nThat.\nYou.\nBeen.\nHaving.\nYou.\nI.\nI.\nI.\nGuilty.\nYou.\nI.\nI.\nMade.\nThis.\nMistake.\nI.\nMade.\nHit.\nMy.\nFather.\nWith.\nA.\nPig.\nSteel.\nPig.\nWhatever.\nI.\nMust.\nGo.\nAnd.\nGoogle.\nThis.\nThing.\nIn.\nEnglish.\nWhat.\nDoes.\nIt.\nMean.\nIt.\nIt.\nIt.\nBut.\nStop.\nAgreeing.\nWith.\nThe.\nGuilt.\nGuilt.\nAnd.\nThe.\nThing.\nThat.\nI.\nCan.\nTell.\nYou.\nNow.\nIs.\nThe.\nBiggest.\nSolution.\nTo.\nYou.\nIs.\nThat.\nYou.\nJust.\nHave.\nTo.\nBelieve.\nThat.\nJesus.\nAlready.\nAccomplished.\nIt.\nJesus.\nAlready.\nDied.\nFor.\nYour.\nSins.\nTo.\nBe.\nTaken.\nAway.\nThe.\nBlood.\nWas.\nShared.\nFor.\nYour.\nCleansing.\nAlready.\nPaid.\nThe.\nBlood.\nAlready.\nSpoke.\nThe.\nBlood.\nAlready.\nOpened.\nThe.\nWay.\nTo.\nChrist.\nFor.\nYou.\nAnd.\nThe.\nBlood.\nAlready.\nGave.\nThe.\nBlood.\nAlready.\nGave.\nVictory.\nIf.\nYou.\nRead.\nFirst.\nPeter.\n18.\nVerse.\nNinety.\nFirst.\nFirst.\nNo.\nMan.\nI.\nMean.\nPeter.\nOne.\nVerse.\nEight.\nAnd.\nPeter.\nOne.\nEight.\nNine.\nAnd.\nNineteen.\nFirst?\nPeter.\nOne.\nEight.\nAnd.\nNineteen.\nNine.\nfor as much as you know\nwere not redeemed\nwith corruptible things\nas silver and gold\nfrom your vain\nconversations\nreceived by tradition\nfrom your fathers\nbut with a precious\nas of the lamb without blemish\nand without spot\nfor as much as you know\nthat you were redeemed\nwith corruptible things\nas silver and gold\nfrom your vain\nconversations received\nby tradition from your fathers\nbut with a precious\nblood of Christ\nas of the lamb without spot\nI want to take this moment\nand say to you\nevery chain\nthat thought\nthey owned you\nis broken\nin the mighty name of Jesus\nevery accusation\nthat is against you\nis silent now\nby the blood of Christ Jesus\nevery hidden wound\nthat you've been having\nall along\nis healed now\nin the blood of Jesus\neverything that was not\nordained by God\nshall be opened\nby this blood of Jesus\nevery evil intention\nagainst your life\nit shall fail\nit shall not come\nby the blood of Jesus\nnot because of what\nbut because of the blood\nit still speaks\nbecause the blood speaks\nI want to take this moment\nand say to you\nLord Jesus Christ\nwhere I feel like\nI have missed\nyour blood\nI have come to a time\nwhere I feel like\nI was by your blood\nplease Lord Jesus\nwash me\nplease Lord Jesus\nif I feel\nthere was no healing\nthe blood has already\nbeen shed\nfor our healing\ngive me that healing\ndeliver me\nand protect my house\neach and everyone\nunder the sound of my voice\nprotection\nover your house\nI pray for that\nblood of Christ\nto cover you\nwherever you go\nI pray for the same blood\nto cleanse\nwhat's happening\nin your past\nso that your future\ncan be clean\nin the mighty name\nof Jesus Christ\nour Lord and Savior\nand we open up\nnew doors\nin your life\nto Jesus\nAmen\nand Amen\nnow the one thing\nI can tell you\nI would be\ndoing an injustice\nspeaking about the blood\nand not do\nthis\nspeaking about the blood\nand not do\nwhat the Bible says\nif you go to\nfirst\nand I read\nfrom verse\nI don't know\nhow I will do this\nI'll just read\na lift\nand a lift\nlike a lift\nyes\nthe dance\nI'll just\nFun minist\nOne\nso\nas I'm reading\nI'm going to do\nnah\nfor I have received of the Lord\nfor which also I delivered\nunto you that the Lord\nJesus the same night\nin which he was\nbetrayed\ntook bread\nand when he had\ngiven thanks he break it\nand said\ntake it\nthis is my body\nwhich is\nwhich is broken for you\nthis do in remembrance\nof me\nand after the\nsame manner\nalso\nwhen he had\nsipped\nsaying\nthis cup\nis the New Testament\nin my blood\nthis do ye\nas often as ye drink it\nin remembrance of me\nnow\nstretch out your hands\nto the\nto the communion table\nheavenly father\nheavenly father\nyou said\nin your word\nthat when you had\ngiven thanks\nyou break it\nand said\nI want to give thanks\nbefore we can take\nand eat from this\ncommunion table\nI want to give thanks\nbecause\nof the fact that I know\nis on the line\nfor us\nand therefore\nwe want to say\nthank you\nLord Jesus\nfor a\nbruised body\nand a blood\nthat was\nfilled with\nunconditional love\nfor us\naccording to the word\nthat says\nlove covered it all\nand you have\ncovered all\nour sins\nall our iniquities\nyou have covered\neverything\nas human beings\nwe've made the\nbiggest mistakes\nabout\nand therefore\nas we\npartake in this\nIndian table\ntoday\nwe said\nyou said\nwe must do it\nas often\ntoday\nwe might have\nnot done it\nas often\nbut let us\nwhich is\ntoday\nand let this\nbe\na covenant\nto you\nthe covenant\nthat you say\nfor as often\nas you eat\nthis bread\nand drink\nthis cup\nyou do show\nthe Lord's\ndeath\ntill he\ncome\nthat\ncome\nGod's\ndeath\nup until\nhe come\nin Jesus\nmighty name\namen\nand amen\nI'm going\nto\nto\nstop\nhmm\nand\nand\nI'm\nand\nI'm\nand\nI'm\nand\nand\ncome\nand\nand"

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
              Why Some Problems Won&apos;t Leave Until You Understand This
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              Some problems keep coming back. You pray, you fast, you believe - and yet it returns. The reason is almost never what you think. Revelation 12:11 says they overcame by a specific means. Not by effort. Not by waiting. By something most people have not yet applied.
            </p>
            <p className="text-white/60 text-sm">
              Pastor Ricardo Zaal · Fountain of Grace International, Pretoria North · 19 April 2026
            </p>
          </div>
        </header>

        <section className="bg-white pt-10 pb-2 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/N1_YYrEGtto"
                title="Why Some Problems Won't Leave Until You Understand This"
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
              Many people fight the symptom. The headache returns, the financial pressure cycles back, the same relationship pattern repeats. They treat the visible problem without touching the invisible root. Revelation 12:11 says, &quot;And they overcame him by the blood of the Lamb, and by the word of their testimony.&quot; Overcoming does not happen automatically - it happens by specific means.
            </p>
            <p className="text-[#555] leading-relaxed mb-10">
              The blood of Jesus is not a passive concept. It is an active, speaking, covering, cleansing, healing force. Here are five things it does - and why understanding them changes what you are dealing with.
            </p>

            <div className="space-y-10">
              {points.map((p, i) => p && (
                <div key={p.n ?? i} className="flex gap-6 items-start">
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
                &quot;Guilt has a voice. Shame has a voice. Accusation has a voice. But the blood of Jesus speaks louder than all of them.&quot;
              </p>
              <cite className="text-[#555] text-sm not-italic mt-2 block">- Pastor Ricardo Zaal</cite>
            </blockquote>

            <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">How to Actually Apply This</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              Applying the blood is not ritual - it is faith in what the Bible says it does. Three practical steps:
            </p>
            <ol className="list-decimal list-inside space-y-3 text-[#555] leading-relaxed mb-6">
              <li><strong>Believe it is already done.</strong> The blood was shed. The work is complete. Your faith activates what already exists - it does not manufacture it.</li>
              <li><strong>Declare what the Word says.</strong> &quot;By the blood of Jesus I have overcome. By his stripes I am healed.&quot; Confession is not repetition - it is alignment with what is true.</li>
              <li><strong>Reject condemnation.</strong> Romans 8:1 - &quot;There is therefore now no condemnation to them which are in Christ Jesus.&quot; Stop agreeing with accusation. You have confessed. The blood covered it. Move.</li>
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
                <h3 className="font-semibold text-[#1a1a1a] mb-2">Why do some problems keep coming back even after prayer?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Persistent problems often continue because the person is fighting the symptom without applying what overcomes the root. Revelation 12:11 identifies the specific means of overcoming: the blood of the Lamb and the word of your testimony. Applying the blood means believing and declaring what it does - not waiting for results without engaging the spiritual mechanism.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">Do I need to clean my life up before coming to God?</h3>
                <p className="text-[#555] leading-relaxed text-sm">No. Hebrews 10:19 says you have &quot;boldness to enter into the holiest by the blood of Jesus.&quot; The access is not earned - it was purchased. Coming to God as you are is the correct response to what the blood provided. The idea that you must fix yourself first before approaching God is a false doctrine.</p>
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
