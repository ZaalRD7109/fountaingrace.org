import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dying Right - Good Friday Message | Fountain of Grace International',
  description:
    'Jesus did not die as a victim. Every word He spoke from the cross was deliberate. Good Friday message from Fountain of Grace International, Pretoria North.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.fountaingrace.org/sermons/dying-right-good-friday-message',
  },
  openGraph: {
    title: 'Dying Right - Good Friday Message',
    description:
      'If you have ever faced an ending you did not choose, this Good Friday message shows how Jesus turned the most brutal death in history into the most purposeful act ever recorded. Fountain of Grace International, Pretoria North.',
    type: 'article',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International - Church in Pretoria North' }],
    url: 'https://www.fountaingrace.org/sermons/dying-right-good-friday-message',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Dying Right - Good Friday Message',
    description: 'Jesus did not die as a victim. Every word He spoke from the cross was deliberate. This Good Friday message unpacks what it means to die right - with purpose, with clarity, and with your eyes on what comes next.',
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
    datePublished: '2026-04-03',
    url: 'https://www.fountaingrace.org/sermons/dying-right-good-friday-message',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Sermons', item: 'https://www.fountaingrace.org/sermons' },
      { '@type': 'ListItem', position: 3, name: 'Dying Right', item: 'https://www.fountaingrace.org/sermons/dying-right-good-friday-message' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Dying Right - Good Friday Message | Fountain of Grace International Pretoria North',
    description: 'Jesus did not die as a victim. Every word He spoke from the cross was deliberate. Good Friday message from Pastor Ricardo Zaal at Fountain of Grace International, Pretoria North.',
    thumbnailUrl: 'https://img.youtube.com/vi/ROCdYtxJa24/maxresdefault.jpg',
    uploadDate: '2026-04-03T12:00:00+02:00',
    embedUrl: 'https://www.youtube.com/embed/ROCdYtxJa24',
    url: 'https://www.fountaingrace.org/sermons/dying-right-good-friday-message',
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
        name: 'What does it mean to die right according to the Bible?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'To die right means to face an ending - whether literal death, the death of a season, or the death of a dream - with purpose and surrender rather than bitterness and panic. Jesus is the model. He spoke seven deliberate statements from the cross. He forgave His accusers. He provided for His mother. He declared it finished. Nothing about His death was reactive - every word was intentional. Dying right is choosing what your ending says about what you believed.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is Good Friday important if the resurrection is what matters?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You cannot have Easter Sunday without Good Friday. The resurrection has no power unless the death was real, complete, and accepted. The cross is where sin was dealt with, not just bypassed. Hebrews 9:22 says without the shedding of blood there is no remission. Good Friday is the moment the full price was paid. Sunday proves it worked - but Friday is where the work was done.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I face painful endings in my own life?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The same way Jesus faced His: with honesty, with trust in the Father, and with a bigger picture in view. He said "It is finished" - not "it is over." Finished means completed, accomplished, fulfilled. When something ends in your life that you did not ask for - a relationship, a job, a season - the question is not only "why did this happen?" but "what is this completing?" Dying right means refusing to let the ending write the final word.',
        },
      },
      {
        '@type': 'Question',
        name: 'What did Jesus mean when He said "It is finished"?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Greek word is tetelestai - it was used in commerce to mean "paid in full." Merchants would stamp a debt with tetelestai when the account was settled. When Jesus said it, He was declaring that every debt owed by sin to God\'s justice was paid completely. Not partially. Not on credit. Finished. That word is the foundation of everything the New Testament says about forgiveness, healing, and access to God.',
        },
      },
    ],
  },
]

const points = [
  {
    n: 1,
    title: 'He Was Not a Victim - He Was a Volunteer',
    scripture: 'John 10:17-18',
    body: 'Jesus said, "I lay down my life, that I might take it again. No man taketh it from me, but I lay it down of myself." The crucifixion was not a tragedy that happened to Jesus. It was a mission He walked into with full knowledge of what was coming. The difference between dying and dying right is whether you chose what you are giving your life for. Jesus had already decided. That is why He could be silent before Pilate, calm in Gethsemane, and deliberate in every word from the cross.',
  },
  {
    n: 2,
    title: '"Father, Forgive Them" - Dying Without Bitterness',
    scripture: 'Luke 23:34',
    body: 'The first thing Jesus said from the cross was a prayer for the people killing Him. Before He dealt with His own pain, He dealt with their guilt. Dying with bitterness in your heart is dying wrong. Whatever season is ending in your life - whatever person contributed to that ending - your first instinct may be accusation. Jesus chose intercession instead. What you say at your lowest moment reveals what you actually believe about God.',
  },
  {
    n: 3,
    title: '"It Is Finished" - Not Over, But Complete',
    scripture: 'John 19:30',
    body: 'Tetelestai. The Greek word stamped on paid debts. When Jesus said "It is finished," He was not collapsing in defeat - He was declaring a transaction complete. Everything sin owed, everything the law demanded, every judgment that stood against you - paid. The cross is not the end of the story. It is the fulfilment of everything that came before it. Good Friday is not about mourning a death. It is about receiving what that death purchased.',
  },
  {
    n: 4,
    title: '"Into Thy Hands I Commend My Spirit" - Dying in Trust',
    scripture: 'Luke 23:46 / Psalm 31:5',
    body: 'Jesus\' last words were a quotation of Psalm 31:5. A Psalm every Jewish child was taught to pray before sleeping. At the moment of His greatest agony, Jesus reached for a childhood prayer. That is what the Word does in you - it becomes your language when you have no words left. To commend your spirit to the Father is to release your life into His hands rather than gripping it yourself. The hardest version of trust is the one that happens when you cannot see what comes next.',
  },
]

const transcript = "To be here, not in this place emotionally, not caring this much, not even feeling this\nalone, because remember, a time like this, although you are surrounded with a lot of\npeople, loneliness is a bit of a tricky one, but you are here now, and somehow you sit\nin this message, so watching this message will be something that I can tell you, a dying\nman got it right. A dying man got it right, while most people still living today are still\nfiguring it out. And for some weird reason, it's like almost if you are in the middle\nof feelings, like you have mixed emotions of things, but you feel like as if you are breaking\ndown. I want you to understand that this message is specifically for you. It's like you are\nlike a car that everybody can see. Oh, this car looks nice from outside. They want to buy\nthe car, but from inside, it's breaking down. It's like you've been holding on to something\nas if you are saying, if I can just hold on for one minute, it will be so nice, but it's\neating you from inside. This is, you know, like you, you, you, when you go to through life,\nyou earn a lot of medals for you've been doing a lot of things.\nBut it's like this moment, you feel there's a, there's some, something missing in your life.\nIf this is you, I want to take the moment and say this message is for you.\nNow, I also at the same time want to make you aware, somebody says that there's some seven\nwords that were said on the cross. They, they don't say it, seven words. They say it, you\ncan almost say seven statements that has been made. But today, I want to tell you, it is\na part of redemption. And I want to, I will tell you why I'm saying it's a part of redemption.\nLet me, let me, let me start off by reading. Let's, let me read Isaiah 53 for you.\nI think it, it will just make sense. What did I say? Isaiah, no? No, what, what am I thinking,\nZechariah? Isaiah 53. If you go to Isaiah 53 and reading the verse five, I think let's start from\nfour. No, three. Let's, let's, let's do it three. He is despised and rejected of men, a man of sorrow,\nacquainted with grief. And we hid, as it were, our faces from him. He was despised and we esteemed him\nnot. Surely he had borne our griefs and carried our sorrow. Yet we did esteem him stricken, smitten of\nGod and afflicted. But he was wounded for our transgression and he was bruised for our iniquities\nand chastisement. And chastisement of our peace was upon him. And with his stripes, we are healed.\nAnd with his stripes, we are healed. I want to\ngive you this seven statements or the path to redemption. Now let me explain to you why this weekend\nhappened. For those of you who don't have a background of\nwhy we celebrate this weekend or why we get holiday if you see it like that.\nYou know, some of us think it's the holiday. So why do we get this holiday?\nIt's in remembrance of Christ.\nNow, the whole story started during the course of this week, where Jesus, like on Sunday, I told you,\nJesus came to Jerusalem, you know, Jesus came to Jerusalem and people were\nrelating him, you know, like the\nthe king of the Jews is here, you know, like\nHosanna, Hosanna, Hosanna. And they thought Jesus will redeem them that moment.\nThat is what happened on the Sunday before.\nAnd because it didn't happen what they expected,\nhow it should be happened or how it should have happened.\nThey conquered now, you know, like what you call those things, you know, conniving.\nThey conniving and actually get him to be sold.\nHe was sold for 30 sickle silver.\nThen when he was sold, they brought him in front of his Pontius Pilatus, I think,\nof where they asked a question\nthat here is somebody and here is Jesus.\nWho would you want\nto be\nyou can almost say killed?\nand the people didn't choose Jesus at the time.\nThey choose Banabas.\nIt's Banabas.\nWhat is my mind?\nWhere's my mind today?\nBanabas. They choose Banabas.\nBanabas. And the thing that Banabas said,\nor the thing that he knew,\nhe knew he was at fault. He knew he is more deserving\nto die because of the things he did.\nHe wants more.\nBut do you know that\nit was not about Banabas having all the sin,\nhaving all the wrongdoings.\nIt's about somebody who doesn't do anything wrong\nyet take our wrongdoings upon himself.\nthat is why they chose him.\nThey taught\nthe killing him.\nThey taught that for him\nbecause when they asked or that when they were singing Hosanna,\nthey taught at that time that Hosanna, which means save us now.\nWow.\nFor that save us now, he didn't save us.\nSo let's rather choose him to go now because he didn't do what we expected him to do.\nYou see, so when, when that happened,\nit even made them more angrier\nto say, we choose Jesus to be hanged.\nWhen he hanged, it was on a Friday like this.\nAnd that is why when he was on the cross,\nhe said the seven things.\nAnd I will give it to you in order and I will explain to you at the end.\nI want you to, is it necessary to go to the Bible?\nOkay, let's, let's just go to the Bible.\nI don't want us to, to take too much time, but let's do it anyway.\nIf you can go to Luke for me.\nAnd we read Luke 23.\nI'm starting with the first one.\nI forgot to check if this thing is, is life because I didn't,\ntoday I didn't prepare everything together because I thought,\nI thought I'll do it now, now.\nYou know that where you want to do it now, then you ended up not doing it.\nOh yeah, we are life, yeah, we're life.\nYes, we're life. Okay, cool.\nGot that.\nSo the seven things that I want us to go through,\nstarting from Luke 23,\nand I want us to, to, to read\nfrom 34.\nLet me, let me, let me start from 32, just to give you a background now.\n32, and there was also two other male factors led with him to be put to death.\nTo be put to death.\nAnd then, and when they were come to the place, which is called Calvary,\nthere they crucified him.\nAnd the male factors, male factors, one on the right and one, the other on the left.\nThen said Jesus, Father, forgive them, for they know not what they do.\nThat was the first word.\nNow, imagine for somebody, knowing he has been wronged.\nSaying the wording, Father, forgive them.\nWhy would somebody that is like, literally supposed to be angry,\nrather saying, forgive them?\nThis is, this is where Jesus showed you revenge is not an option.\nHe actually showed you forgiveness is the first thing that must come.\nSo even if you heard the wordings that were said,\nthe first thing that comes from his mouth, whilst in such pain,\nis not kill them.\nIt's not, Lord, strike them by lightning.\nLord, take away their lives as they are about to take away mine.\nNo revenge.\nNot even an accusation.\nLord, can you see they are wrong?\nNothing.\nFor somebody knowing that he's, he has not done anything,\nyet he chose to forgive.\nHow many of us get into a place where we feel that we've been wronged?\nAnd do you know what we do?\nWe start, hey, let me not say, but we start fighting.\nHe didn't even take up any defense, no defense, nothing.\nBut the teaching behind this is that whenever you get into a place where you've been wronged,\nthe first thing that you know, this is a revelatory design for you,\nis that you cannot go deeper with God while holding on to people.\nYou cannot go further with God while holding on to unforgiveness.\nYou cannot move forward if you have not forgiven.\nThe prayer was actually said, before you go do this, go back to your brother and sister\nand first ask them for forgiveness.\nIsn't it?\nThose are the scriptures.\nNow, my question to you is, what is it that you're still holding on,\nthinking that you want to go ahead with God, you want to go forward with God,\nbut yet forgiveness is not yet there?\nLook, I'm not going to go into in-depth.\nOne day, I will make it a teaching of each and every one of it.\nBut that teaching is not today.\nI just want you to get a broader perspective\nof a day like today.\nNumber one is to get forgiveness first.\nAsk for forgiveness first.\nBecause if you have forgiven,\nthe number two part will become easier for you.\nThis is the second word.\nLuke 23, verse 43.\nNow, when you go,\nit went on, it went on, it went on.\nI'm not going to give the whole description\nhow the soldiers mocked him.\nI'm not going to give you all that thing.\nHow they even wrote,\nthis is the king of the Jews.\nI'm moving on to the second one,\nwhich says in 43,\nand Jesus says unto him,\nverily I say unto thee,\ntoday shalt thou be with me in paradise.\nFor somebody\nwho has been living his whole life wrong,\nnever even bothered,\nyou know,\nyou know,\npicture this,\nyou love your whole life,\nkilling people,\nstealing,\ndoing anything that goes against God's word.\nbut the,\nthe day when you are about to go,\nyour,\nyour only words that you say,\nput you into heaven.\nAnd these words is,\nwhere it says,\nremember me,\nwhen thou comest into thy kingdom.\nHuh?\nKnowing that\nI am worthy to be killed.\nThe guy on the other side\nis worthy to be killed.\nBut for the guy in the middle,\nhow can they be killing him?\nHe knew.\nPicture this.\nFor somebody\nwho has not been knowing Jesus,\nnor did he know God,\nbut yet believed.\nWhile the other one was mocking,\nhe believed.\nThe same cross.\nThe same cross.\nBut different outcomes\nfor two people.\nThe one who believed\nwas told to be,\nverily,\nI say unto thee,\ntoday\nshalt thou be\nwith me\nin paradise.\nThis is\nthe number two statement,\na salvation\nthat comes with\nimmediate effect.\nNo waiting\nupon judgment day.\nIt happened\nimmediately.\nSo,\none thing you should\nunderstand is that\nGod,\nthere is no time\nbecause\nif you put\nGod into time,\nhe would have died\nlong time ago.\nHuh?\nBishop,\nMethuselah\nis God.\nHow can you\nput God\nunder the same\nanointing\nof Methuselah?\nIs he not\nthe oldest\nknowing\nperson\nalive?\nNow you\nwant to tell\nGod,\ntoday you are\none year old.\nYou can't.\nA thousand\nyears\nis like\none day.\nOne day\nis like\na thousand\nyears.\nSo,\nwhere do you\nsee\nthe infinite\nGod\ntelling him\nthat salvation\nis somehow\ngoing to\ncome\ntomorrow?\nSalvation\nis\na\nthing\nthat\nhappens\nwithin\nquick time.\nIt's a,\nit's just\nthe response\nthat you\nneed to\ngive.\nI\nbelieve you\nGod.\nDo the\nbelief\nyou'll\nbe\nsafe.\nNo\nprocess,\nno,\nnot going\nthrough the\nbishop.\nThere's this\nthing that\nwe do\nafter somebody\ngives his\nlife.\nwhat is\nthat\nverbal\nthing we\ncall it\nthat you\nsay,\nI believe\nin Christ\nthat he\nis the,\nhe's\nresurrected.\nHe died\non the\ncross for\nus.\nWhat is\nthat thing?\nSinner's\nconfession.\nNo\nsinner's\nconfession.\nThis\nguy\ndidn't\neven\nhave\na\nsinner's\nconfession,\nbut\nyet\ninstant\nmove\nof God.\nAnd\nyet here\nyou are\nstill waiting\nman of\nGod\non the\nsinner's\nconfession\nto,\nto show\nto this\nguy\nthat he\nis now\nit\ndoesn't\nneed a\nsinner's\nconfession.\nBy\nGod's\nword,\nit's\ngone.\nNo\nwaiting\nperiod.\nNo,\nno\nreligious\nsystems\nthat we\nalways\nused to\nhave.\nJust\nyour\nfaith.\nNumber\nthree,\nyou have\nto have\na\nresponsibility\nin the\nmiddle\nof\npain.\nYou\nhave to\nhave a\nresponsibility.\nNow let\nme explain\nwhat I\nmean by\nthe\nresponsibility.\nIf you\ngo to\nJohn,\nthe\nbook of\nJohn,\nlet us\nnot go and\ngreet John\nnow.\nI'm\nsaying the\nbook of\nJohn.\nJohn is\nnot in the\nservice today,\nso sorry\nman.\nDon't go\nto\nJohn.\nI\nsaid the\nbook of\nJohn and\nread verse\n19.\nI mean\nchapter 19\nverse 26.\nNow\nchapter 19\nverse 26\nsays the\nfollowing.\nAnd when\nJesus\ntherefore\nsaw his\nmother and\nthe\ndisciples\nstanding by\nwhom he\nloved,\nlisten to\nthis,\nwhom he\nas Jesus\nloved,\nhe said\nunto his\nmother,\nwoman,\nbehold\nthy\nson.\nHe\nsaid,\nwoman,\nbehold\nthy\nson.\nThen\nsaid he\nto the\ndisciples,\nbehold\nthy\nmother.\nand\nand from\nthat\nhour,\nthe\ndead\ndisciples\ntook\nher\nunto\nhis\nown\nhome.\nNow\none thing\nI want\nto make\nmention\nhere,\nsomebody\ndying\non the\ncross,\nwho is\nabout to\ngo,\nbut\nhas a\nresponsibility\nto his\nmother,\nhas a\nresponsibility\nto the\ndisciple,\nhas\nsomething\nthat he\nsays,\nbut still\nhe thinks\nof others.\nWhat\nkind of\nredeemer\nis this?\nWhat\nkind of\nman is\nthis,\nthat\nthink\nabout\nothers\nfirst\nbefore\nhim,\nwhilst\nhe's\nin\npain?\nSometimes\nyou don't\nunderstand\nthe\nsignificance\nof a\nday like\nthis.\nHuh?\nPicture\nthis.\nFor\nsomebody\nwho is\nabout to\ndie,\nfirst\nthinking\nof\nothers,\nthat\nis\nwow.\nImagine\nit's\nlike\nsomebody\ndying\non a\nplane\nsaying,\nno,\ntake\nthis\noxygen\nmask.\nWhile\nthe\ninstruction\nspecifically\nwas,\nmake\nsure\nyou use\nthe mask\nfirst.\nHmm?\nwhile\nJesus\nis\nlosing\nhis\nbreath,\nhe\ngave\nto\nhis\nmother\nand\nthe\ndisciple\nthe\noxygen\nmask.\nOh,\nisn't\nthat\nwow?\nIsn't\nthat\nwow?\nBefore\nhe could\ndie,\nhe\nestablished\nrelationships.\nDo you\nknow why\nhe did\nit?\nbecause\nhe knew\nhe would\ncome\nback.\nHe\nknew\nhe would\ncome\nback\nbecause\nfor\nsomebody\nwho\nis\nabout\nto\ndie,\nknowing\nhe's\ngoing\nto\ndie,\nthinking\nof\nothers\nfirst.\nSomething\nthat you\nshould\nknow.\nyou\nshown\nmaturity.\nLike,\ncan I\nexplain?\nIt's\nlike,\nmaturity,\nyou\nshown\nmaturity\nwhile you\nare in\npain.\nIt's\nmore\nmatured\nto look\nout for\nothers\nthan to\nlook for\nyourself.\nI\ncan\nalmost\nask you\nthis\nquestion.\nWhen\nyou\nsuffer\nor\nwhen\nyou\nare\nin\npain,\ndo\nyou\ndrop\nyour\nresponsibilities?\nDo\nyou\ndrop\nyour\nresponsibilities?\nlet's\ngo to\nthe\nnext\none.\nThe\nnext\none,\nnumber\nfour,\nis\nseparation.\nWhat did\nI say?\nSeparation\nthere.\nAnd I\nwant us\nto go\nto\nMatthew\n27.\nMatthew\n27,\nverse\n46.\nIt's\ncalled\nseparation.\nAnd\nabout the\nninth\nhour,\nJesus\ncried out\nwith a\nloud\nvoice,\nsaying,\nEllie,\nEllie,\nLama\nSabachthani.\nThis\nis to\nsay,\nmy\nGod,\nmy\nGod,\nwhy\nhas\nthou\nforsaken\nme?\nIn\nyour\nhour\nof\npain,\nin\nyour\nhour\nof\nhurt,\nin\nyour\nhour\nof\ndying,\nfeeling\nseparated\nfrom\nGod.\nThis\nis\nactually\nwhere\nit\nshifts.\nwhere\nthe\nphysical\npain\nis\nliterally\noutweighing\nthe\nspiritual\nweight.\nImagine\nsomebody\ngetting\nin so\nmuch\npain,\nwho\nknows\nthe\nwho\nknows\nthe\nhe was\nthe one\nthat says\nme and\nmy\nfather\nare\none.\nDo\nyou\nremember\nthat?\nHe\nsaid,\nme and\nmy\nfather\nare\none.\nBut\nhere\nhe\nsays,\nmy\nGod,\nmy\nGod,\nwhy\nhas\nthou\nforsaken\nme?\nThere's\na reason\nfor him\nto be\nforsaken.\nIt's\nfor you\nnot to\nbe\nforsaken.\nhe\ngets\nforsaken\nso\nthat\nyou\nnot\nget\nthe\nsame.\nRemember\nhe\nsaid\nme and\nmy\nfather\nare\none.\nBut\nhere\nhe\nused\nthe\nwords\nnot\nfather.\nHe\nsays\nmy\nGod.\nCan\nyou\nsee\nif\nyou\nsee\nyour\nfather\nas\na\nfather,\nwhy\nthat\nwhen\nyou\nare\nin\npain\nsuddenly\nit's\nmy\nGod?\nThe\nreason\nfor that\nis\nhe\nbecame\nseparated\nso\nthat\nyou\ndon't\nhave\nto\nbe\nseparated.\nHe\nbecame\nwhere\nhe\nwas\none\nwith\nthe\nfather.\nHe\nbecame\nseparated\nwith\nthe\nfather\nso\nthat\nyou\nmust\nnot\nbe\nseparated\nfrom\nthe\nfather.\nso\nthat\nyou\nmust\nnot\nbe\nseparated\nfrom\nthe\nfather.\nThe\nnext\none\nwhich\nis\nJohn\n19\nalso\nverse\n28\nthe\nnumber\nfive.\nI\nwant\nyou\nto\nI\nwant\nyou\nto\nhear\nthe\nwording\nhere.\nHe\nsays\nI\nthirst\nso\nit\nshows\neven\nthough\nhe\nis\nof\na\nhigher\ncalling\nor\nof\na\nhigher\nbeing\nbeing\nseparated\nfrom\nGod\nshowing\nhis\nhumanity\nthat's\nnumber\nfive.\nIt's\nactually\nyou can\nsay\nit\nexposed\nhis\nhumanity\nit\nexposed\nhow\nhuman\nhe\nwas\nbecause\nwhen\nhe\nsays\nI\nthirst\nin\nJohn\n19\nverse\n28\nafter\nthis\nJesus\nknow\nthat\nall\nthings\nwere\nnot\naccomplished\nthat\nthe\nscripture\nmight\nbe\nfulfilled\nsay\nit\nI\nthirst\nnow\ncan\nyou\nhear\nthat\nis\nwhere\nthe\nbody\nstarts\nspeaking\nthe\nbody\nstarts\nspeaking\nweakness\nthe\nbody\nstarts\nspeaking\ndryness\nthe\nbody\nstarts\nspeaking\nlimitation\nso\nthat\nyou\nmust\nnot\nbe\nweak\nyou\nmust\nnot\nbe\ndry\nyou\nmust\nnot\nbe\nlimited\nthat\nis\nwhy\nhe\nthirsted\nthirst\nfor\nyou\nnot\nto\nbe\nhaving\nthirst\nhe\nat\nthat\ntime\nhe\ndidn't\nact\nhuman\nhe\nwas\nhuman\nthere\nwas\nno\nacting\nneeded\nwhen\nyou\nare\nthirsty\nyou\nare\nthirsty\nhuh\nthat\nwas\nthe\nfifth\none\ndid\nI\nsay\nyeah\nfive\nnumber\nsix\nI'm\nsorry\nI'm\nrushing\nbut\nI\nwanna\nI\nwanna\nmake\nsure\nthat\nwe\nwe\nget\nthe\nbroader\npicture\nof\neverything\nwhat\nwould\nyou\nlike\nto\nsearch\nfor\nhuh\ncheck\ncheck\ncheck\nif\nthat\nthing\nis\non\nso\nnumber\nsix\nhe\nsays\nit\nis\nfinished\nhuh\nJohn\n19\nverse\n30\nhe\nsays\nit\nis\nfinished\nno\nno\nno\nhe\ndidn't\nsay\nI\nam\nfinished\nhear\nthe\nwording\nit\nis\nfinished\nwhat\nis\nthat\none\nwait\nman\nwhat\nis\nthat\nokay\nno\nlet me\nnot be\nGreek\nor\nHebrew\nis\nGreek\nnow\nthat\nlet's\ndie\nthat\nlet's\ndie\nthat's\nwhat I\nwas\nlooking\nfor\nis\na\nGreek\nword\nmeaning\nit's\nfinished\nfamously\nspoken\nby\nJesus\non\nthe\ncross\nyoung\nso\nwhen\nhe\nsay\nit\nis\nfinished\nhe\ndidn't\nsay\nI\nam\nfinished\nremember\none\nthing\nthere\nwhen\nsomebody\nsay\nI\nam\nfinished\nit\nmeans\nthe\nperson\nis\nfinished\nbut\nwhen\nyou\nsay\nit\nis\nfinished\nit\nmeans\nthat\nthis\nis\nactually\nnot\na\ndefeat\nmoment\nit's\na\nvictory\nmoment\nyou\nsee\nwhen\nyou\nare\ndefeated\nyou\nwould\nsay\nI\nam\nthe\none\nthat\nis\nfinished\nbut\nwhen\nyou\nare\nnot\ndefeated\nyou\nsay\nit\nis\nfinished\nmeaning\nto\nsay\nthat\nthere\nis\nstill\nsomething\ncoming\nout\nof\nme\ncan\nyou\nsee\nthere\nis\nstill\nsomething\ncoming\nout\nof\nme\nI\nam\nnot\nyet\nfinished\nbut\nit\nis\nfinished\nthis\nis\nwhat\nwe\ncall\nnumber\nsix\ncompletion\nthe\ncompletion\nit's\nlike\nyou\ncan\nalmost\ncall\nit\na\ntransactional\nlanguage\nthe\ndebt\nhas\nbeen\npaid\nthe\nassignment\nhas\nbeen\ncompleted\nthe\nproject\nis\ndone\nthe\nwhole\nsystem\nis\nfulfilled\nthe\nwork\nis\ndone\nbut\nyet\ncan I\ntell you\nsomething\nsome\npeople\nstill\ntrying\nto\nearn\nfrom\nwhat\nwas\nalready\nbeing\nfulfilled\nthrough\nyour\ngood\nworks\nyou\nstill\ntrying\nto\nshow\nGod\nI\nwant\nto\nbe\nwith\nyou\nin\nparadise\none\nday\nthrough\nthis\nthing\nI\nwant\nto\nyou\nrun\nevery\nkind\nof\nscheme\njust\nto\nshow\nhim\nthat\nyou\nare\nfor\nhim\nalthough\nhe\nalready\npaid\nthe\nprice\nfor\nyou\nyou\nstill\nwant\nto\npay\nanother\nprice\nbut\nyou\nknow\nthere's\nsomething\nthat\nwe\ndon't\nunderstand\nis\nthat\nI\nkeep\non\nmentioning\nthe\nExodus\n14\n14\nthat\nhe\nwill\nfight\nfor\nyou\nbut\nhere\nwhen\nit\nsays\nit\nis\nfinished\nit\nmeans\nthat\nhe\nfought\nand\nhe\nwon\nand\nwhat\nthe\nvictory\nover\ndeath\nyou\ndon't\nhave\nto\nfight\ndeath\nit's\nbeen\nvictor\nover\nEnglish\nwe\nwon\nthe\ndeath\nI\ndon't\nknow\nwhat\nthey\nsay\ndeath\nwhere\nis\nyour\nstatement\nhuh\nthat\nis\nfinished\nthat\nbut\none\nthing\nI\ncan\ntell\nyou\nit\ndid\nnot\nstop\nthere\nyou\nwent\non\nto\nthe\nlast\none\nwhich\nis\na\ngreat\nsign\nof\nsurrendering\nto\nlearn\nfrom\nhuh\nI\nneed\nyou\nto\nknow\nthis\nis\na\ngreat\nsign\nof\nsurrendering\nto\nlet\nyou\nknow\nthis\ncomes\nin\nLuke\n23\nverse\n46\nwhere\nhe\nsays\nfather\ninto\nthy\nhands\nI\ncommend\nmy\nspirit\nhuh\nit's\nlike\nhe\nended\nwhere\nhe\nstarted\ndid\nyou\nhear\nthat\nbecause\nwhere\ndid\nhe\nstarted\nremember\nthe\nnumber\none\nis\nforgiveness\nfather\nforgive\nthem\nand\nthen\nhe\nended\nagain\nwith\nthe\nfather\nsaying\nfather\ninto\nthy\nhands\nI\ncommand\nmy\nspirit\nso\nwhen\nhe\nstarted\nwith\nthe\nfather\nfather\nforgive\nthem\nhe\nended\nwith\nthe\nfather\nso\nyour\nlife\nshould\nbe\nhaving\nthis\nkind\nof\nsandwich\nwhatever\nhappens\nacknowledge\nhim\nfirst\nwhatever\nhappens\nacknowledge\nhim\nfirst\nbecause\nthrough\nthis\nwhat\nwas\nbroken\nin\nthe\nmiddle\nhas\nbeen\nrestored\nat\nthe\nend\nwhat\nwas\nbroken\nin\nthe\nmiddle\nhas\nbeen\nrestored\nat\nthe\nend\nso\nlet\nme\nlet\nme\ngive\nyou\nthe\npath\nI\nwas\ntalking\nabout\nthe\npath\nstarts\nas\nfollow\nnumber\none\nis\nto\nforgive\nfirst\nthen\nsalvation\nwill\ncome\nand\nwhen\nsalvation\ncomes\nthere's\na\nrelationship\nthat\nyou\nhave\nto\nhave\nwhich\nthe\nrelationship\nwas\nwhere\nhe\nsaid\nabout\nhis\nmother\nand\nthe\nsons\ndid\nyou\nhear\nthat\npart\nhe\nsays\nmother\nhere\nis\nthy\nson\nso\nthere's\na\nrelationship\nbut\nyet\nwhen\nseparation\ncomes\nI\nshould\nI\nshould\nactually\nputting\nthis\ninto\na\nmanual\ntype\nof\na\nthing\nlike\nso\nthat\nyou\ncan\nunderstand\nwhat\nI'm\nsaying\nso\nwhenever\nyou\nget\ninto\nany\nsituation\nfirst\nforgive\nthe\nperson\nthen\nit's\nalmost\nlike\ngive\nthem\nsalvation\nthrough\nyour\nforgiveness\nand\nonce\nyou\nsay\nI'm\nsorry\nI've\ndone\nyou\nwrong\nyou\nget\nsalvation\nyou\nbuilt\na\nrelationship\non\nthat\nperson\nalthough\nwhen\nhard\ntimes\ncomes\nyou\nwill\nfind\nthat\nthere\nwould\nbe\na\nseparation\na\nseparation\nfrom\nthe\npain\nthat\nyou're\ngoing\nthrough\nand\nthe\npeople\nthat\nyou\nsometimes\nthink\nthey\nwill\nbe\nthere\nfor\nyou\nhuh\ndo\nyou\nknow\nthat\nthere's\nsometimes\nthings\nthat\nyou\nthought\nI\nthought\nthat\nthis\none\nwill\nbe\nhere\nfor\nme\nbut\nthey\nwere\nnowhere\nto\nbe\nfound\nthat's\nwhere\nthe\nseparation\nof\nGod\nand\nGod\nand\nJesus\ncomes\nwhere\ninstead\nof\ncalling\nhim\nthe\nfather\nhe\ncalled\nhim\nGod\nso\nwhen\nyou\nget\ninto\nthat\nkind\nof\ndeeper\npain\nyou\nhave\nto\nshow\nthat\nyou\nare\nhuman\nbeing\nthat's\nwhere\nit\ncomes\nin\nwhen\nhe\nsays\nI\nthirst\nso\nthe\npath\nwill\nbe\nforgiveness\nsalvation\nrelationship\nseparation\nthen\nshowing\nyour\nhumanity\nafter\nthat\nonly\nyou\nwill\nrealize\nthat\ncompletion\ncan\nonly\ncome\nto\nshow\nthat\nyou\nhave\nbeen\na\nhuman\nbeing\nand\nwhen\nthe\nhuman\ncompletion\nthe\ncompletion\ncomes\nstill\nyou\nhave\nto\nsurrender\nto\nGod\nthis\nis\nnot\nrandom\nthis\nis\nnot\nrandom\nthis\nis\na\npart\nof\nredemption\nso\nwhen\nyou\nforgive\nyou\nwill\nreceive\nsalvation\nwhen\nyou\nhave\nreceived\nsalvation\nyou\nwill\nenter\ninto\na\nrelationship\nwith\nGod\ninto\na\nrelationship\nwith\nman\nand\nwhen\nthe\nrelationship\nis\nproven\nwhen\nyou\nfeel\nthe\nmoments\nthat\nfeel\nlike\nGod\nis\ndistant\nyou\nconfront\nyour\nhumanity\nyou\nconfront\nyour\nhumanity\nyou\nconfront\nyou\nas a\nhuman\nbeing\nthen\nyou\nunderstand\nthat\nthe\nwork\nhas\nbeen\nfinished\nand\nyou\nlearn\nhow\nto\nsurrender\nnow\nthe\nquestion\nis\nif\nyou\nare\nlooking\nin\nthe\nsequence\nhow\nwe\nwent\nthrough\nit\nwhere\ndo\nyou\nfind\nyourself\nat\nthis\nmoment\ndo\nyou\nfind\nyourself\nthat\nyou\nhave\nto\nforgive\ndo\nyou\nfind\nyourself\nthat\nyou\nneed\nto\nreceive\nsalvation\ndo\nyou\nwant\nto\nenter\ninto\na\nrelationship\nor\nis\nit\nthat\nyou\nface\na\nmoment\nand\nthis\nmoment\nfeels\nlike\nGod\nis\ntoo\nfar\nfrom\nyou\nit's\nlike\nGod\nyou\nsaid\nyou\nstick\ncloser\nthan\na\nbrother\nbut\nwhy\ntoday\nyou\nfeel\nso\nfar\nand\nsometimes\nwe\nhave\nto\ntell\nhim\nwe\nare\nhuman\nbeings\nso\nwhere\nare\nyou\nor\nare\nyou\ndone\nto\ngo\nback\nto\nsurrender\nagain\nI\nwant\nto\ntake\nthis\nmoment\nand\nopen\nup\nthe\nfloor\nto\nsay\nif\nyou\nhave\nheard\nthis\nmessage\nand\nyou\nfeel\nthat\nyou\nare\na\nyou\nare\nthe\none\nthat\nthis\nmessage\nhas\nbeen\nspeaking\nto\nthat\nyou\nneed\nGod\nor\nyou\nneed\nJesus\nas\nyour\nLord\nand\nSavior\nbecause\nit\nwill\nbe\nunfair\nfor\nme\nto\nhave\nall\nthis\nmessage\nand\nnot\nask\nanybody\nwho\nwant\nto\ngive\ntheir\nlife\nto\nJesus\nif\nit\nis\nyou\nyou\nmay\nraise\nyour\nhand\nor\nyou\nmay\ntype\nin\nthe\ncomments\nif\nyou\nare\nonline\nwherever\nyou\nare\nand\nsomebody\nwill\nreach\nout\nto\nyou\ndo\nyou\nwant\nto\ntype\non\nthe\ncomments\nand\nsay\nI\nwould\nlike\nto\ntake\nup\nJesus\nas\nmy\nLord\nand\nSavior\nyou\ncan\ntype\nin\nthe\ncomments\nand\nsomebody\nwill\nget\nto\nyou\nif\nit\nis\nyou\nthat\nyou\nfeel\nlike\nyou\nmoved\nfar\naway\nfrom\nGod\nit's\nlike\nyou\nyou\nknow\nGod\nyou\nhave\ngiven\nyour\nlife\nto\nhim\nbut\nfor\nsome\nweird\nreason\nyou\nfeel\nso\ndistant\nfrom\nhim\nthat\nyou\nstarted\nactually\nmaking\nthat\ndistance\nto\nbe\nmore\nand\nmore\nand\nmore\nif\nyou\nfeel\nlike\nyou\nare\nthat\nperson\nyou\ncan\nalso\nsay\nin\nthe\ncomment\nI\nam\nthat\none\nthat\nwhen\nI\nput\nmy\nhand\non\nthe\nplow\nI\nwent\nback\nyou\ncan\nlift\nyour\nhands\nand\nsay\nI\nfeel\nI\nneed\nto\ncome\nback\nto\nGod\nwhere\nthere\nwas\na\nseparation\nI\nneed\nhim\nto\ntake\nme\nback\nso\nthat\nhe\ncan\ncomplete\nwhat\nhe\nhas\nstarted\nin\nme\nso\nthat\nthe\ncompletion\ncan\nbe\ndone\nif\nthat\nis\nyou\nyou\ncan\neven\nin\nthe\ncomments\ntype\nand\nsay\nit\nis\nme\nand\nI\nwant\nto\npray\nfor\nyou\nheavenly\nfather\nif\nthere\nis\nsomebody\nthat\ngave\ntheir\nlife\nto\nyou\ntoday\nwhether\nI've\nseen\nit\nor not\nfor\nsomebody\nwho\nis\nstill\ngoing\nto\nlisten\nto\nit\nor not\nanybody\ntouch\ntheir\nlives\nnow\ntake\naway\ntheir\nsin\nas\nyou\nsaid\nyou\nwill\ndo\nit\nyou\nwill\ntake\ntheir\nsin\nas\nfar\nas\nthe\neast\nis\nfrom\nthe\nwest\nand\nyou\nwill\nclean\nit\nas\nwhite\nas\nsnow\ncleanse\nthem\nnow\nas\nwhite\nas\nsnow\nanything\nthey\nhave\ndone\nwrong\nI\nask\nyou\nto\nforgive\nthem\nnow\nthe\nmighty\nname\nof\nChrist\nand\nthe\npussy\nthat\nfelt\nlike\nyou\nwent\ntoo\nfar\ntake\nthem\nnow\nby\ntheir\nhand\nfor\nthe\nGod\nand\nfinish\nwhat\nyou\nhave\nstarted\nalready\nknowing\nthat\nyou\nhave\nnot\nfinished\nyour\nyet\nyou\nhave\nshown\nto\nthem\nthat\nthey\nneed\nyou\nin\nwhatever\nthey\ndo\npray\nnow\nin\nthe\nmighty\nname\nof\nJesus\nChrist\nour\nLord\nand\nSavior\namen\nand\namen\nI\nalso\nwant\nto\ntake\nthis\nmoment\nand\nsay\nthe\nchurch\nhas\ncome\nto\na\nplace\nwhere\nwe\nare\nwe\nare\nabout\nto\ndo\nmore\nthan\njust\nthe\nnormal\nservice\nwe\ndo\nthere\nare\ncertain\nthings\nthat\nwe\ndo\noutside\nthe\nservice\nwhich\nis\ntraining\nBishop\nyou\nand\ndid\nyou\nget\nthe\ndocuments\nfor\nthe\ntraining\nthat\nI\nhave\nsent\nplease\njust\ngo\nthrough\nthat\ntraining\nas\nwell\nso\nthese\nare\nthe\ntype\nof\ntraining\nthat\nwe\nstill\nneed\nto\ndo\nthere's\nan\nentrepreneurship\ntraining\nthat\nI\nstill\nneed\nus\nto\nget\ninto\nas\nwell\nso\nI'm\njust\ngiving\nyou\nthe\nreason\nwhy\nwe\ntake\nup\nan\noffering\nis\nfor\nthis\nto\nhappen\nand\nI'm\njust\ntalking\nabout\nthe\ntraining\nnow\nbut\nI'm\nnot\neven\ntalking\nabout\nus\ngiving\nout\nto\nthe\npoor\nbecause\nthe\nBible\nsay\nwe\nhave\nto\nlook\nafter\nthe\npoor\nwe\nhave\nto\nlook\nafter\nthe\nwidow\nso\nif\nthere's\na\nwidow\nthat\nthe\nhusband\nhas\nleft\nnothing\nfor\nthe\nwidow\nwe\nstill\nhave\nto\ngo\nthere\nas\nwell\nI\nknow\nthat\nthere\nwas\na\nfuneral\ndone\na\nweek\nor\ntwo\nago\nand\nwe\nhaven't\neven\nwent\nto\ngo\nand\ngive\nthe\npotato\nand\nyou\nknow\nthose\nthings\nthat\nthey\nuse\nfor\nthe\nfuneral\nwe\nactually\ndidn't\ngo\nthere\nis\nbecause\nof\nthe\nreason\nwas\nthat\nwe\ncouldn't\nget\nhold\nof\nthe\norganizer\nof\nthe\nfuneral\nbut\nwe\nare\nstill\ntrying\nto\nget\nhold\nof\nthe\norganizer\nof\nthe\nfuneral\nso\nthat\nthe\nkids\nof\nthis\nwoman\ncan\nstill\nhave\nsomething\nthat\nthey\ncan\neat\nyou\nunderstand\nand\nand\nso\nthese\nare\nthe\nthings\nthat\nthat\nis\nhappening\nalthough\nwe\ndon't\ntell\nyou\nall\nthe\ntime\nwe\nare\ngoing\nthere\nthis\nis\nthe\nperson's\nname\nwe\nare\nwe're\nnot\nsupposed\nto\ntell\nyou\nactually\nwe're\njust\nsupposed\nto\ntell\nyou\nsomebody\ngot\nsomething\nagain\nand\nshow\nyou\nthe\nslip\nbecause\nsome\npeople\ndon't\nwant\nto\nlift\nup\ntheir\nhands\nand\nsay\nyou\nknow\ntoday\nI'm\nhungry\nthere's\nno\nbread\nin\nthe\nhouse\nbecause\nof\nthe\nafraid\nof\njudgment\nbecause\nthe\nchurch\nwill\nsay\nyou\nknow\nlast\nweek\nwe\nwent\nto\nsister\nJonas\nhouse\nand\nsister\nJonas\nand\nthe\nkids\nwe\ngave\nthem\ngrocery\nnow\nsister\nJonas\nsit\nthere\nashamed\nthey\nwill\nnot\nask\nthe\nchurch\nfor\nanything\nagain\nbecause\nyou\nmake\nthem\nlook\nbad\nso\nthat\nis\nthe\nreason\nwhy\nwe\nuse\nthe\nmoney\nthat\nwe\nare\nasking\nit's\nnot\nfor\nme\nI\ngot\na\nsalary\nas\nwell\nI\ngot\npaid\nby\nmy\nemployer\nI\ndon't\nask\nfor\nmoney\nin\nthe\nchurch\nfor\nbuying\nelectricity\nin\nthe\nhouse\nfor\nme\nor\nbuying\nfood\nfor\nme\nno\nI\nused\nthe\nmoney\nfor\nwhat\nGod\nhas\nasked\nme\nto\nuse\nit\nfor\nis\nto\nhelp\nothers\nthen\nwhat\nwe\nuse\nthe\nmoney\nfor\nis\nalso\nthe\ndiscipleship\ntraining\nyou know\nlike the\npapir\nman\nwhat they\ncall\nthe\nthings\nthe\npaperwork\nworks\nand\nyou\ntake\nthe\nmoney\nand\nmake\ncopies\nman\nyou\nunderstand\nwhat I\ndo\nthe\nbook\nwork\nor\nthe\nbook\nand\nwhat\nnot\never\nyeah\nlet's\ncall it\nthe\nthose\nkind\nof\nthings\nthe\nEnglish\nis\nnot\nEnglish\nin\nme\nso\nthat\nis\nwhat\nwe\nare\nusing\nthe\nmoney\nfor\nif\nyou\nare\nonline\nand\nyou\nwould\nlike\nto\nso\nthere\nis\nalso\nour\nwebsite\nthat\nyou\ncan\ngo\nto\nwhich\nis\nfountain\ngrace\nit's\nnot\nfountain\nof\ngrace\nit's\nfountain\ngrace\nso\nit's\nwww.fountain\ngrace\ndot org\nand you\ncan go\nand give\nthere's\ndifferent\nways\nto\ngive\nalso\nonline\nif\nyou\nwant to\npartner\nwith\nan\nNPO\nwe\nare\nNPO\nregistered\nas well\non the\nsocial\ndevelopment\nside\nwe\nare\nregistered\nand\nwhen\nyou\ndo\ndonate\non\nthe\nNPO\nside\nwe\nonly\nuse\nit\nfor\nwhat\nthe\nNPO\nask\nus\nthat\nwe\nmust\nuse\nthe\nmoney\nfor\nso\nit's\nnot\nfor\npastor\nsalary\nplease\ndon't\ndon't\nget me\nwrong\nI'm\njust\ntelling\nyou\nalready\nor\nfor\npastor's\ncar\nto\ndrive\nsomewhere\nno\nit's\nnot\nfor\nanybody\nit is\nfor\nwhat\nit is\nsaid\nto\ndo\nand\nI\nthink\nthat's\nit\nbut\nbefore\nI\ngo\nI\njust\nwant\nus\nto\npray\nfor\nthe\ngift\nthing\nthank\nyou\nheavenly\nfather\nfor\nthose\ngivers\nthank\nyou\nheavenly\nfather\nfor\nthose\nsowers\nactually\nbecause\nyou\nsaid\nyou\ngive\nseed\nto\nthe\nsower\nand\nbread\nto\nthe\neater\nso\nwe\nwant\nto\nsay\nthank\nyou\nfor\nthose\nsowers\nthat\nsows\ninto\nthis\nministry\nI\nwant\nto\nspeak\na\nblessing\nover\ntheir\nlives\nfather\ngod\nlet\nthe\nheavens\nopen\non\ninto\ntheir\nlives\nso\nthat\nwhatever\nthey\ngive\nwill\nnot\njust\nbe\nmultiplied\nbut\nwill\nbe\nso\nsanctified\nthat\nanytime\nwhenever\nthey\nput\ninto\nthis\nministry\nit\nwill\nbe\nused\nfor\nthe\ncorrect\nthings\nnumber\none\nand\nit\nwill\nbe\ncoming\nback\nto\nthem\nin\nsuch\na\nmultiplication\nside\nthat\nthey\nwill\nnot\nhave\nroom\nto\nkeep\nit\nfor\nthe\ngod\nso\nthat\nthey\ncan\nsee\nlike\na\nreal\nperson\npressed\ndown\nshaken\ntogether\nrun\nover\nthat\nwas\nthrown\ninto\ntheir\nbosom\nfor\nthe\ngod\nin\nthe\nmighty\nname\nof\njesus\nchrist\nour\nlord\nand\nsavior\njust\nbefore\nyou\ncome\nand\ngive\ni\nwant\nto\nshare\nthe\ngrace\nfirst\nthen\nwe\ncan\ncome\nand\ngive\nnow\nmay\nthe\ngrace\nof\nour\nlord\njesus\nchrist\nthe\nlove\nof\ngod\nand\nthe\nsweet\nfellowship\nof\nthe\nholy\nspirit\nrest\nand\nabide\nwith\nus\nall\nuntil\njesus\ncomes\nsurely\ngoodness\nand\nmercy\nshall\nfollow\nus\nall\nthe\ndays\nof\nour\nlives\nand\nwe\nshall\ndwell\nin\nthe\nhouse\nof\nthe\nlord\nforever\nand\never\nin\njesus\nmighty\nname\nwe\npray\namen\nand\namen"

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
              Good Friday Message · Fountain of Grace International · Pretoria North
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-5">
              Dying Right - What Jesus Did on the Cross That Most People Miss
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              Most people see Good Friday as a tragedy. It was not. Every word Jesus spoke from the cross was deliberate. He was not reacting to what was happening to Him - He was completing what He came to do. This message looks at what it means to face an ending the right way.
            </p>
            <p className="text-white/60 text-sm">
              Pastor Ricardo Zaal · Fountain of Grace International, Pretoria North · 3 April 2026
            </p>
          </div>
        </header>

        <section className="bg-white pt-10 pb-2 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/ROCdYtxJa24"
                title="Dying Right - Good Friday Message | Fountain of Grace International Pretoria North"
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
              There is a right way and a wrong way to face an ending. The wrong way is to be dragged into it - bitter, confused, demanding answers from God about why it happened. The right way is what Jesus modelled: walking into it with intention, speaking with purpose, and releasing your spirit into the Father&apos;s hands rather than gripping your own life so tightly it bruises.
            </p>
            <p className="text-[#555] leading-relaxed mb-10">
              Good Friday is the most important day in human history - not because a good man died, but because the right man died, in the right way, for the right reason. And everything He said in those final hours was a message to you.
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
                &quot;Tetelestai - paid in full. That word is not the end of the story. It is the proof that the story worked.&quot;
              </p>
              <cite className="text-[#555] text-sm not-italic mt-2 block">- Pastor Ricardo Zaal</cite>
            </blockquote>

            <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">What Good Friday Changes for You</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              Good Friday is not a day for guilt. Guilt says you owe something. The cross says the debt is paid. Three things the death of Jesus changes for you right now:
            </p>
            <ol className="list-decimal list-inside space-y-3 text-[#555] leading-relaxed mb-6">
              <li><strong>Your past has no legal claim on you.</strong> The debt was stamped tetelestai. Stop paying what has already been settled.</li>
              <li><strong>Your endings are not final.</strong> Friday looked like the end. Sunday proved it was a transition. Whatever is dying in your life right now - God has not abandoned the story.</li>
              <li><strong>Your access to the Father is open.</strong> Matthew 27:51 - the temple veil was torn from top to bottom the moment Jesus died. The barrier between you and God was removed. You no longer need a priest, a good track record, or a cleaned-up life. The way in is open.</li>
            </ol>

            <p className="text-[#555] leading-relaxed">
              If you are in Pretoria North and want to hear this kind of teaching in person,{' '}
              <Link href="/plan-your-visit" className="fgi-link">
                join us on a Sunday
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
                <h3 className="font-semibold text-[#1a1a1a] mb-2">What does it mean to die right according to the Bible?</h3>
                <p className="text-[#555] leading-relaxed text-sm">To die right means to face an ending with purpose and surrender rather than bitterness and panic. Jesus is the model - He spoke seven deliberate statements from the cross, forgave His accusers, provided for His mother, and declared it finished. Nothing about His death was reactive. Dying right is choosing what your ending says about what you believed.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">Why is Good Friday important if the resurrection is what matters?</h3>
                <p className="text-[#555] leading-relaxed text-sm">You cannot have Easter Sunday without Good Friday. The resurrection has no power unless the death was real, complete, and accepted. Hebrews 9:22 says without the shedding of blood there is no remission. Good Friday is where the full price was paid. Sunday proves it worked - but Friday is where the work was done.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">What did Jesus mean when He said &quot;It is finished&quot;?</h3>
                <p className="text-[#555] leading-relaxed text-sm">The Greek word is tetelestai - used in commerce to mean &quot;paid in full.&quot; Merchants would stamp a debt with tetelestai when the account was settled. When Jesus said it, He declared that every debt owed by sin to God&apos;s justice was paid completely. Not partially. Not on credit. Finished. That word is the foundation of everything the New Testament says about forgiveness, healing, and access to God.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">How do I face painful endings in my own life?</h3>
                <p className="text-[#555] leading-relaxed text-sm">The same way Jesus faced His: with honesty, with trust in the Father, and with a bigger picture in view. When something ends in your life that you did not ask for - a relationship, a job, a season - the question is not only &quot;why did this happen?&quot; but &quot;what is this completing?&quot; Dying right means refusing to let the ending write the final word.</p>
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
