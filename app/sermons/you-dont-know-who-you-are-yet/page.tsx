import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "You Don't Know Who You Are Yet | Fountain of Grace International",
  description:
    "Most people live by an identity built from failure, other people's words, and what life has done to them. This message from Pastor Ricardo Zaal shows you what God says instead. Pretoria North.",
  robots: 'index, follow',
  alternates: {
    canonical: "https://www.fountaingrace.org/sermons/you-dont-know-who-you-are-yet",
  },
  openGraph: {
    title: "You Don't Know Who You Are Yet",
    description:
      "If you have spent years living by an identity that was handed to you by your worst moments, this message is the interruption you need. Fountain of Grace International, Pretoria North.",
    type: 'article',
    images: [{ url: 'https://www.fountaingrace.org/og-image.jpg', width: 1200, height: 630, alt: 'Fountain of Grace International - Church in Pretoria North' }],
    url: "https://www.fountaingrace.org/sermons/you-dont-know-who-you-are-yet",
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "You Don't Know Who You Are Yet",
    description: "Most people define themselves by their history. God defines you by your destiny. This message unpacks the gap between the identity life gave you and the identity God has been forming in you.",
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
    datePublished: '2026-05-03',
    url: 'https://www.fountaingrace.org/sermons/you-dont-know-who-you-are-yet',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fountaingrace.org' },
      { '@type': 'ListItem', position: 2, name: 'Sermons', item: 'https://www.fountaingrace.org/sermons' },
      { '@type': 'ListItem', position: 3, name: "You Don't Know Who You Are Yet", item: 'https://www.fountaingrace.org/sermons/you-dont-know-who-you-are-yet' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: "You Don't Know Who You Are Yet",
    description: "Most people live by an identity built from failure, other people's words, and what life has done to them. This message from Pastor Ricardo Zaal shows you what God says instead.",
    thumbnailUrl: 'https://img.youtube.com/vi/2eUaSyffcIs/maxresdefault.jpg',
    uploadDate: '2026-05-03T12:00:00+02:00',
    embedUrl: 'https://www.youtube.com/embed/2eUaSyffcIs',
    url: 'https://www.fountaingrace.org/sermons/you-dont-know-who-you-are-yet',
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
        name: 'Why do I feel like I have no real sense of who I am?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Most people\'s sense of identity was formed by the environment they grew up in, the words spoken over them, their failures, and how others treated them. None of those things are reliable sources of identity. When you build your identity on unstable ground - performance, approval, or the absence of pain - you end up feeling lost because those foundations keep shifting. The Bible teaches that true identity is rooted in what God says about you, not what your history says about you.",
        },
      },
      {
        '@type': 'Question',
        name: 'What does the Bible say about identity?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Scripture consistently shows God addressing people by who they are becoming, not who they currently appear to be. Gideon was hiding in a winepress when the angel said 'thou mighty man of valour' (Judges 6:12). Abram had no children when God renamed him Abraham - father of many nations. Simon was unstable when Jesus renamed him Peter - the rock. God sees the finished version of you and speaks to that version while you are still in process.",
        },
      },
      {
        '@type': 'Question',
        name: 'How do I discover who God says I am?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "The process starts with replacing the voices you have believed with what the Word of God actually says. Romans 12:2 says you are transformed by the renewing of your mind - not by willpower or self-improvement, but by a change in what you are filling your mind with. Practically: find what the Bible says about you as a child of God, speak it out loud, and stop agreeing with the accusations of the enemy or the limitations of your past. Identity is rebuilt by what you repeatedly hear and believe.",
        },
      },
      {
        '@type': 'Question',
        name: "What does 'you don't know who you are yet' mean?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "It means you are not the finished product. What you have experienced, what you have failed at, and what people said you were - none of that is the final word on who you are. God is still working on you. Philippians 1:6 says He who began a good work in you will perform it until the day of Jesus Christ. The version of you that God started is still being completed. You have not seen your full self yet.",
        },
      },
    ],
  },
]

const points = [
  {
    n: 1,
    title: 'You Have Been Living Someone Else\'s Definition of You',
    scripture: 'Romans 12:2',
    body: 'The world around you has been working to define you since the day you were born. Parents, teachers, failure, rejection, and your own worst moments all contributed a version of who you are. But Romans 12:2 says, "be not conformed to this world: but be ye transformed by the renewing of your mind." Conformed means shaped by external pressure. Most people\'s identity was formed under pressure, not by revelation. The real you is not the version that pressure produced.',
  },
  {
    n: 2,
    title: 'God Speaks to Who You Are Becoming',
    scripture: 'Judges 6:12',
    body: 'Gideon was hiding in a winepress - afraid, small, convinced his family was the weakest in Manasseh and that he was the least in his father\'s house. The angel showed up and said, "The Lord is with thee, thou mighty man of valour." Not who Gideon thought he was. Not who his circumstances said he was. The angel spoke to the identity God had already placed in him that had not yet been activated. This is how God speaks. He names your destiny before you have lived it.',
  },
  {
    n: 3,
    title: 'Your Past Is Not Your Identity',
    scripture: '2 Corinthians 5:17',
    body: '"Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new." The word translated "new" in the Greek is kainos - it means a new kind, a new quality, something that did not exist before. God is not trying to improve the old version of you. He is creating a new one. The reason you keep dragging your past into your future is that no one told you the transaction was complete. In Christ, you are not a repaired version of who you were. You are a different person.',
  },
  {
    n: 4,
    title: 'You Are Not Done Yet',
    scripture: 'Philippians 1:6',
    body: '"Being confident of this very thing, that he which hath begun a good work in you will perform it until the day of Jesus Christ." The phrase "will perform it" means He will carry it through to completion. The work God started in you has a finishing date - and it is not today. What you see in yourself right now is an incomplete picture. The version of you that emerges from the process God is running in your life is not the version you are looking at in the mirror this morning. You have not seen yourself yet.',
  },
]

const transcript = "Anytime, whenever somebody comes to a meeting like this, they expect something to happen.\nThey expect God to move in their lives.\nBecause I still don't think anybody would really go to church and just think,\nI am in church, I'm done.\nAnd everybody wants something that needs to be changed.\nAnd this message today is literally for those who woke up this morning, but they aren't sure of who they are.\nThis message is literally for anybody who tried so many different things, yet it has not been working.\nAnd this message is literally for somebody who is carrying an identity that somebody else gave him.\nAnd I want to take the time and speak to this specific person.\nI understand.\nOne thing that I can say is, I know you're not lazy.\nYou are a hard worker.\nAnd you've been really, you can almost say, putting the metal to the pedal, the pedal to the metal.\nYou moved.\nAnd yet, your life is not moving anywhere.\nThis is who the message is.\nAnd I must say, it's a lot of times where things just happen differently or something else.\nYou have been measuring yourself with other people and figured it out who you are.\nYou said, I just need to find myself.\nThis is who the message is for.\nThis is who the message is for.\nNow, I have entitled my message.\nYou don't know who you are yet.\nAnd I want to give you five things that Jesus did, who he was.\nSo, and I've started in a series of messages.\nAnd the main title of this series of messages will be, He Moved.\nAnd this is the first sermon of that.\nIt might take a week.\nIt might take three weeks.\nIt might take five weeks.\nIt might take even a year.\nBut this forms part of our year of action.\nBecause our, our theme for this year is the year of, that is our theme for this year.\nAnd so, if you fit in some way.\nNow, I mean, you've been letting down by so many people.\nYou can almost say the definition that they have of you, what they thought you would become.\nAnd these things that I can say to you is labels that they put you under.\nLabels, what I mean by that is that, when you were born, somebody called you a name that labeled you ever since then.\nSomebody said a word that made you feel like, this is me, how I become.\nBut that identity meant to come from other people.\nThat identity comes from your parents, your bosses, even the people around you, surrounding you.\nBut they're not authorized to put a label on you.\nYou know,\nyou know,\nI remember some years ago when\nwhen my, my, my sister was about, let's call it\ngrade 8, grade 10\nor somewhere around there\nand my mom and dad used to say\nthis one\nis\nis becoming a problem\nbecause every time, whenever you\nyou hear, she is\nshe is\nis fine.\nWhat's up?\nWhat's up?\nI don't know.\nIt's just the one that's the first.\nYeah.\nOkay.\nWow.\nOkay.\nYeah.\nThank you.\nThat's right.\nCome on.\nLet's get on.\nShe is standing.\nYou know.\nWhat?\nNo.\nYeah.\nBut it's fine.\nIt's fine.\nIt's actually\nin the center.\nYeah.\nThank you.\nSo when you\nyou were going through all this\nyou actually\nhanded over\ncontrol of your life\nto\nanyone\nwith an opinion.\nYou look\nif they say\nyou\nyou just\nbecome\nanybody\nin\nwill tell you\nsome way\nor the other\nsomebody had a name\nfor you\nto a liter\nsomebody\nhad a name\nfor you\nI mean\ngive you a name\nthat you know\nyou are not\nand\nI'm making a joke\nout of it\nbut\nhow did you even\ncome to\nto a liter\nas a\ntwo liter\nbut\nsomebody\nif I look\nat it\nwhen I\ngrow\nolder\nor\nwhen I\ngrow up\nall my\nfriends\ncalled me\nwell\nand\nI'm\nI'm\nI know\nfor my head\nmy ears\nwere too\nbig\nbut\nas I\ngrow\nolder\nthe ear\nthing\nbecomes\nless\nof a\nproblem\nbecause\nof\nmy\nor\nlet me\nlet me\nsay\nmy head\ngrown\nto become\nmore like\nmy ears\nbut\nI\naccepted\nit\nand\nknew\nI\nhad\nbig\nears\nso\nI\nleft it\nat that\nso\nwhenever\nsome\nI\ndidn't\nfeel\nlike\nit's\nan\ninsult\nI\nfelt\nlike\nyes\nI\nhave\nso\nit's\nfine\nso\nother\npeople\ndid\nyour\nidentity\nthrough\nwhat\nthey\nare\nsaying\nabout\nyou\nand\nsome\nof\nthese\nthings\nliterally\nhappen\nso\nI\nwant\nto\nencourage\nyou\ntoday\nthat\nwhenever\nsomething\nis\ntrue\naccept\nbut\nwhenever\nsomething\nis\nnot\ntrue\nreject\nit\nbecause\nyou\nhave\nlet\nsomebody\nidentity\nof\nyou\ntell\nyou\nwho\nyou\nwant\nto\nbecome\nand\nI\nI'm\nlooking\nat\nMichael\nJackson\nfor\nargument\nsake\nMichael\nJackson\nwas\nsuch\na\nyou\nhear\nI\nuse\nthe\nword\nwas\nbecause\nhe's\nno\nlonger\nand\none\nof\nthe\nthings\nthat\nI\ndon't\nunderstand\nis\nthat\nhow\ncome\nsomebody\nsuch\na\nbeautiful\nfeature\nchange\nhis\nwhole\nface\nbecause\nof\nsomebody\nthat\ntold\nhim\notherwise\nand\nhe\nstarted\nbelieving\nnow\nI'm\nlooking\nat\nat\nlife\nyes\nyou\nright\nyou\nright\nbut\nhow\ndo\nyou\npluck\nwhat\nis\nit\ncalled\nyeah\nsurgeries\nnow\nmy\nquestion\nto\nyou\nis\nwhen\nsomebody\ndon't\nknow\nwho\nthey\nare\nthey\nstart\nbecoming\ntell\nthem\nto\nbe\nlet\nme\nlet me\nread\nthe\nbible\nlet\nme\nlet me\nnot\nbe\nlet's\nlet's\ngo to\nmatthew\n3\nverse\n17\nnow\nmatthew\n3\nverse\n17\nsays\nthe\nfollowing\nand\nlo\na\nvoice\nfrom\nheaven\nsaying\nbeloved\nson\nin\nwhom\nI\npleased\nisn't\nit\nnice\nthat\ngod\ntells\nyou\nwho\nyou\nare\nbecause\nwhen\ngod\ntells\nwho\nyou\nare\nyou\nare\nnot\nchasing\nidentity\ninstead\nyou\nreceiving\nit\nwhen\nsomebody\nchase\nto\nbe\na\nmillionaire\nit's\nalmost\nas\nif\nthe\nmoment\nyou\nbecome\na\nmillionaire\nnow\nyou\nchase\nto\nbe\na\nbillionaire\nso\nyou\nkeep\non\nchanging\nthe\ngoal\npost\ncan\nI\nsay\nthat\nwe\nare\nbut\nwhen\ngod\nhas\nbeen\ngiven\nyou\nyou\nare\nmy\nanointed\none\nnothing\nchanges\ncan\nyou\nsee\nthat\nso\nyou\nusing\na\nwrong\nmeasuring\nstick\nthe\nwhole\ntime\nand\nthat\nis\nwhy\nwhen\nyou\nchase\nthe\nidentity\nwith\nthe\nwrong\nmeasurement\nstick\nthat\nyou\nhave\nyou\nyou\nyou\nyou\nbecome\nsome\nit's\nbetter\nto\nreceive\nit\nrather\nit's\nbetter\nthat\nwhen\nhe\ncalls\nyou\nby\nname\nnot\nby\ntitle\nor\nachievement\nby\nname\nthat\nis\nwhat\nyou\nhave\nto\naccept\nyou\nare\na\nkingdom\nyou\nknow\nyou\nknow\nwhen\nwhen\nit\nsays\nthat\nyou\nare\nthe\napple\nof\nGod's\neye\njust\npicture\nthe\napple\nof\nGod's\neye\nlet's\nlet's\nlet's\npicture\nthat\nif\nif\nGod\nis\nthe\napple\nof\nif\nyou\nare\nGod's\nthe\napple\nof\nGod's\neye\npicture\nthis\nthing\nclose\nto\nyour\neye\nthe\nmoment\nit\ncomes\ncloser\nit\nclose\nyour\neyes\nwill\nclose\nautomatically\neven\nif\nyou\ntry\nand\nopen\nit\nit's\nforcing\nit\nto\nclose\nit\nimagine\nif\nyou\ntouch\nsomebody\nwho's\nGod's\nthe\napple\nof\nGod's\neye\nhow\nGod\nwill\nprotect\nyou\nlet\nus\nread\nIsaiah\n43\nverse\n1\nIsaiah\n43\nverse\n1\nsays\nbut\nnow\nthus\nsaith\nthe\nLord\nthat\ncreated\nthee\nO\nJacob\nthat\nformed\nthee\nO\nIsrael\nfear\nnot\nfor\nI\nhave\nredeemed\nthee\nI\nhave\ncalled\nthee\nby\nthy\nname\nthou\nart\nmine\nisn't\nit\nnice\nthou\nart\nmine\nGod\nis\nsaying\nhe\nis\nyou\nare\nhis\nthat\nis\nwhen\nyou\nwhen\nyou\nreceive\nit\nnot\nyou\nhave\nchased\nfor\nit\nor\nyou\nhave\nworked\nfor\nit\nyou\nyou\nyou\nyou\nreceived\nit\nsomebody\nlike\nme\nwho\nis\nin so\nmany\ntimes\nhaving\ndifficulties\nit's\nliterally\nhard to\nunderstand\nit's\nreally\nI\nsometimes\nI\nsometimes\nwonder\nif I\ngo into\na\nlet's\ncall it\na\nI'm\ntrying to\nlet's\nsay\nboard meeting\nlet's call it\na board meeting\nso when\nyou go into\nthe board\nmeeting\nand the\nmoment\nthe\nCEOs\nand\nhigher\nup\nranking\npeople\nstart\ntalking\nand\nyou\nare\njust\na\nmere\nperson\ndo you\nknow\nsometimes\nyou feel\ninferior\nand\ndon't\ngive\nyour\nideas\nbecause\nof\nyou\nfeeling\nvery\ninferior\nthat\nsometimes\nkill\nwho\nyou\nare\nbecause\nof\nthinking\nthat\nthey\nhave\nbetter\nideas\nthan\nyou\nbecause\nthey\nsit\nin\nthe\nCEO\nside\nwho\nyou\nare\nGod\nhas\nbeen\ngiving\nyou\nideas\nbut\nwhen\nthe\nideas\nis\nalmost\nsit\nat the\nback\nfoot\nof\nwho\nyou\nare\nwhen\nyou\nare\nsurrounded\nby\nother\npeople\nthat\nbecomes\na\nproblem\nI\nremember\nwhen\nI was\nI\ngrew up\nmy mom\ntold me\na story\nshe said\nmy name\nwas intended\nto be\nRoderick\nbut when\nI was\nborn\nthe name\ndid not\nsit right\nfor some\nweird\nreason\nand\nthe\nregister\nthey\nregistered\nbecause\nthey\nsaid\nmy mom\nfor some\nweird\nreason\ntold them\nRicardo\nbut my\nmom never\nsaid\nRicardo\nthey\njust\nprobably\ncouldn't\nhear\nthat's\nwhat my\nmom\nsaid\nyeah\nI am\ntoday\nRicardo\ninstead\nof\nRoderick\nbut\nthe worst\npart of\nit is\nthat\nas I\ngrew\ndo you\nknow\nnobody\ncalled\nme\nRicardo\nthey\nall\ncalled\nme\nRicardo\nwere\nall\nthe\nother\nnames\nand\nfor\nyears\nwhenever\nsomebody\nused\nthe\nname\nRicardo\nit\nfelt\nlike\nthey\nwere\ntalking\nto\nsomebody\nelse\nit's\nlike\nthey\ntalking\nto\nno\nbut\nit's\nnot\nyet\nme\nmy\nquestion\nto\nyou\nis\nfor\nhow\nmany\nyears\nare\nyou\nliving\ninside\nan\nidentity\nthat\nsomebody\nelse\ngave\nyou\nfor\nhow\nlong\nhow\nmany\nyears\nhave\nbeen\nyou've\nbeen\ndoing\nthat\nan\nidentity\nthat\nsomebody\nelse\ngave\nyou\nyou\ncan\nalmost\nsay\nit\nnever\nquite\nfit\nyourself\nand\nyet\nyour\nstare\nis\nstill\ncarrying\nit\nand\ntell\nyou\none\nthing\nthere\nchasing\nidentity\ninstead\nof\nreceiving\nit\nsometimes\nmakes\nyou\nto\nmake\ndecisions\nwrongly\nI\npaid\na\n70,000\nrent\nto a\nTony\nRobbins\ncoaching\nsession\nthat I\nthought\nwould\nmake me\nfeel\nbetter\nor\nwould\nlike\nliterally\nyelled\nme at\nthat\ntime\nI\ngenuinely\nbelieve\nthat\nit\ncould\ncould\nkeep\nme\nor\ngive\nme\nsome\nright\nsystems\nfrom\nsomebody\nwho\nalready\nfigured\nit\nout\nbut\nI\ndidn't\nthe\ncoaching\ndid\nhelp\nme\nthank\nyou\nto\nmy\ncoach\ncoach\nLucas\nhe\nwas\nreally\nhelping\nme\nwith\nso\nmany\nyou\ncan\nalmost\nsay\napology\nif\nif\nI\ncan\nall\nthe\nthings\nthat\nme\nI'm\nstill\nyou\ntoday\nI\nwent\nfor\nnever\nhappened\nand I\nmean\nyou've\nbeen\nbuilding\na\nlife\non\nan\nidentity\nthat\nwas\nnever\nyours\nit's\nlike\nalmost\nas if\nit is\nthe\ndefinition\nthat\nthey've\ngiven\nto\nyou\nnever\nbeen\nyours\nand I\nwant to\ntake\nthis\ntime\nand say\nto\nyou\nplease\nunderstand\nJesus\ndid\nnot\ncome\nfor\nthe\nexpected\nplace\nhe\ndid\nnot\nask\nthe\nNazareth\npermission\nhe\nshowed\nup\nhe\nshowed\nup\nif\nyou\ngo to\nJohn\n1\nverse\n46\nhe\nsays\nand\nNathaniel\nsaid\nunto\nhim\ncan\nthere\nany\ncome\nout\nof\nNazareth\nand\nPhilip\nsaid\nunto\nhim\ncome\nand\nsee\ncome\nand\nsee\nit's\nalmost\nlike\nas if\nhe\ncan\nif\nPhilip\nknew\nregardless\nof\nwhatever\ntitle\nyou put\non\nme\nit's\ndifferent\none\none\nof\nthe\nthings\nthat\nyou\nneed\nto\nunderstand\nthat\nhow\nyou\nstart\nin\nlife\nit's\nnot\na\ndestination\nit's\nhow\nyou\nfinish\nto\ngo\nto\na\ndestination\nthat\nis\nhow\nyou\nwork\nin\nlife\nand\nyou\nmight\nask\nwhat\nI\nmean\nthat\nsomebody\nused\nto\ncall\nyou\nbig\nfit\nwhatever\nthe\ncase\nmay\nbe\nwhen\nyou\nare\nyounger\nand\nI\nknow\na\nlot\nof\npeople\nespecially\nthe\nmore\nfit\ntype\nof\npeople\nthat\nwhen\nthey\nwere\nyounger\nthey\nwere\nso\nchubby\nbut\nwhen\nyou're\nlooking\nat\nthem\ntoday\ntall\nand\nskinny\nand\nyet\nthey\nstill\ncall\nthem\nfatty\nor\nparky\nor\nduckers\nor\nwhatever\nthe\ncase\nmay\nbe\nand\nyet\ntoday\nthey\nare\nfatty\nor\nduckie\nand\none\nof the\nthings\nthat\nI\ncan\ntell\nyou\nI\ngrew\nup\nand\nwhen\nI\nwas\nin\nNewtown\nthe\nplace\nwe\nstayed\nin\nI\nliterally\nthought\nthat\nthat\nplace\nwas\nour\nown\nall\nI\nknow\nis\nthat\nthe\none\nside\nof\nthe\nhouse\nwas\na\nbrick\nhouse\nand\nthen\nmy\nroom\nwas\nlike\na\nzinc\ntype\nof\na\nzinc\ntype\nof\na\nplace\nand\nI\nthought\nit\nwas\nour\nown\nhouse\nbut\nyet\nas\nI\ngrew\nup\nit\nwas\nactually\nMr.\nMajid\nhouse\nthe\nhouse\nnever\nowned\nthe\nhouse\nso\nwhen\nwe\nmoved\nto\nPozdin\nwhere\nwe\nstayed\nthat\nis\nwhere\nI\nrealized\nit's\nactually\nthe\nhouse\nthat\nwas\nunder\nmom's\nand dad's\nname\nthis\nis\nthe\nthings\nthat\nyou\nare\ngoing\nthrough\nbut\nnow\nI\nwant\nto\ntake\nthe\ntime\nand\nchange\nnow\nfrom\nthe\nproblems\nthat\nyou've\nbeen\ngoing\nthrough\nwhat\nwould\nbe\nthe\nway\nforward\nwhat\nwould\nbe\nthe\nway\nforward\nthe\nway\nforward\nis\nbetter\nthis\nway\nit's\nbest\nthis\nway\ndescribed\nthere\npeople\nalways\nsay\nthat\nGod\nwill\ngive\nyou\nsomething\nand\nhe\nwill\nprovide\nfor\nthat\nsomething\nI'm\nmaking\nan\nexample\nif\nGod\ngives\nyou\na\nbigger\nhouse\nhe\nwill\ngive\nyou\nthe\nprovision\nas\nwell\nso\nall\nyou\nhave\nto\ndo\nis\njust\nstep\ninto\nthat\nhouse\nyou\nknow\nwhat\nI\nmean\nlet\nme\nmake\nan\nexample\nthere\nwas\na\ntime\nwhen\nI\nthere\nwas\na\ntime\nwhen\nI\nwas\nI\nwas\nyounger\nand\nI\nwaited\nfor\nmy\nbiological\nfather\nto\ncome\nand\nsave\nme\nthat\nis\nwhat\nI\nthought\nwould\nhappen\nbecause\nin a\nplace\nwhere\nI\nwas\nliving\nI\nfelt\nlike\nan\noutsider\nwith\nmy\ndad\nthat\nused\nto\nhit\nme\nso\nmuch\nmy\ndad\nmyself\nI\nused\nto\nfight\na\nlot\nof\nit's\nit's\nalmost\nlike\nthe\nway\nwe\nfought\nso\nmuch\nis\nthat\ndad\nwill\nnever\ncome\nand\nfind\nme\nmy\ndad\nwill\nnever\neven\nmove\ncome\nclose to\nmy\nside\nso what\nI did\nis I\nwent to\ngo and\nactually\nlook for\nmy\nfather\nif I\ndidn't\ngo and\nlook for\nmy\nfather\nI\nwould\nhave\nbeen\nwaited\na long\ntime\nso that\nthe\nsolution\nfor\nthings\nis to\nshow\nup\nnot\njust\nwait\nand\nlet\nthings\nhappen\nto\nyou\ndon't\njust\nwait\nthings\nhappen\nto\nyou\ntell\nyou\nthat\nyou\nneed\nto\nreceive\nthe\nidentity\nthat\nwas\nspoken\nover\nyou\nand\nif\nthat\nwas\nnot\nif\nyou\ngo to\nMatthew\n3\nthe\nfather\nsaid\nmy\nson\nhe\ndidn't\nsay\nI\nthink\nhe\nis\nmy\nson\nmy\nson\nso\nthat\nyou\nare\nthe\nbeloved\nson\nof\nChrist\nyou\nare\nthe\nbeloved\nson\nof\nChrist\nit's\nlike\nthere's\na\nthere's\nan\nold\nsong\nI\nthink\nthat\nsome\nyears\nago\nbefore\nthe\nworld\nbegan\nyou\nwere\nright\nevery\ntear\nyou\ncried\nwas\nprecious\nin\nhis\neyes\nbut\nbecause\nof\nhis\ngreat\nlove\nhe\ngave\nhis\nson\nand\neverything\nwas\ndone\nso\nyou\nwould\ncome\nso\nhe\nprepared\neverything\nfor\nyou\nand\nyou\nsaid\nwhat\nis\nbeen\ngiven\nto\nyou\nwhat\nyou\nyou\nmust\nreceive\nthat\nyou\nmust\nreceive\nit\ndo\nyou\nknow\nthat\nwhen\nsomebody\ncomes\nto\nthe\nLord\nnow\nit\ndoes\nnot\nhappen\nautomatically\nthat\nyou\nnow\nbecome\nthe\nson\nof\nGod\nyou\nneed\nto\ndo\nsomething\nto\nbecome\nyou\nneed\nto\nto\nreceive\nit\nis\ndeliberately\nreceiving\nit\nand\nthat's\nwhy\nwhere\nyour\nidentity\nin\nChrist\ncome\nit\ndoesn't\nhappen\nautomatic\nbecause\nthe years\nthat\nyou've\nbeen\nin\nthe\nworld\nGod\nlet's\nsay\nnot\nlet's\nnot\nsay\nGod\nfor\nthe\nyears\nthat\nyou've\nbeen\nin\nthe\nworld\npeople\nput\nsome\nname\ntags\non\nyou\neven\nthe\ndevil\ngave\nyou\nsome\nname\ntags\nand\nall\nthose\nname\ntags\ntoday\nwhen\nyou're\nlooking\nback\nat\nit\nhas\nchanged\nwhen\nyou\nreceive\nChrist\nas\nyour\nLord\nand\nSavior\nI\nhope\nthis\nmakes\nsense\nI\nmean\nwhen\nmy\nfamily\ndied\nin\nthe\nyear\n2010\nI\ndidn't\ndie\nwith\nthem\nI\nsaid\nI'm\na\nchild\nof\nGod\nand\nyet\nI'm\nstill\nstanding\nthe\nyear\n2000\nthe\n10th\nof\nFebruary\nI\ngave\nmy\nheart\nto\nthe\nLord\nand\never\nsince\nthen\nI\nhave\ndeliberately\nchanged\nhow\nI\nwas\nlet me\nask\nyou\ndo\nyou\nknow\nme\nas\na\nwoman\nhitter\ndo\nI\nhit\nwoman\nhave\nyou\never\nseen\nme\nbeaten\nup\nyour\nmother\nor\nhave\nyou\nheard\nyour\nmother\nask\nquestions\nlike\nlast\nnight\nyou\nhit\nme\nyou\nhave\nnot\nheard\nthose\nthings\ngirlfriend\nthat I\nhad\nbefore\nthat's\nnot\nbefore\nyour\nmother\nbefore\nyour\nmother\nI\nwas\nabusing\nthem\nnow\nmy\nquestion\nto\nyou\nis\nwas\nthat\njust\na\nchange\nthat\nI\ndid\nor\nwas\nthat\nsomething\nthat\nover\ntime\nto\nget\nrid\nof\nit\nbecause\nwhen\nI\nreceived\nthe\nLord\nas\nmy\nSavior\nit\nwas\na\ndeliberate\nreception\nof\nGod\nbut\nit\nwas\nnot\nan\nautomatic\nmove\nthe\nthings\nof\nGod\nI\nhad\nto\nwork\nfor\nit\nanother\nsolution\nis\nthat\nyou\nyou\nneed\nto\npublicly\nannounce\nthings\nyou\nknow\nwhen\nyou\npublicly\nannounce\nthings\nlike\nGod\nannounced\nJesus\nas my\nbeloved\nson\npublicly\nobviously\nbecause\nof that\nJesus\nhad to\nmove\naccording\nto\nthe\ntag\nif I\ncan\nsay\nit\nwas\nplaced\nupon\nhim\nhe\nhad\nto\nmove\naccording\nto\nthe\ntag\nthat\nwas\nplaced\nupon\nhim\nso I\nwant you\nto\nreally\nsay it\nout loud\nto\nsomebody\nthat\nI\nwould\nbecome\na doctor\none day\nand when\nyou do\nthat\nhave an\naccountability\nto that\nand just\nremember that\nwhenever\nyou look\nat\nJesus\nyou\nare\nhis\nyou\nare\nJesus\nyour\nidentity\nis in\nChrist\nyou\nare the\nson of\nChrist\nlet\nthat\nsettle\nfor\nminutes\nif\nyou\nread\nin\nfirst\nJohn\nthree\nverse\none\nit\nsays\nbehold\nthat\nmanner\nof\nlove\nthat\nthe\nfather\nhad\nbestowed\nthat\nwe\nshould\nbe\ncalled\nthe\nson\nof\nGod\ntherefore\nthe\nworld\nknow it\nus\nnot\nbecause\nit\nknew\nhim\nout\nnot\nthere's\nsomething\nthat you\nshould\nunderstand\nthere\nthat\na\nson\ndoes\nnot\nearn\nthe\nright\nto a\nfather's\nhouse\na\nson\ntakes\nit\nas\nit's\nhis\nson\ndoesn't\nwork\nhard\nfor\nwhat\nthe\nfather\nhave\na\nson\nget\nit\neasily\nthe\nunfortunate\npart\nis\nthat\nany\nchild\nof\nmine\ngot\nmy\nstubbornness\nalready\nthey\ntook\nit\nup\nwithout\nasking\nfor\nit\nit's\nbeen\ngiven\nand\nall\nthree\nof\nthem\nis\nlike\nyeah\nnext\nnot\nme\nthe\nother\none\nno\nyou\nhave\nbeen\ngiven\nwhat\nI\nhave\nyou\nlook\nlike\nme\nalthough\nyou\nlook\nmore\nlike\nyour\nmother\nbut\nstill\nyou\nlook\nlike\nme\nthat's\na\ngiven\nyou\ndon't\nhave\nto\nfight\nfor\nit\nI\nknow\nyou\nare\nbeautiful\nthem\nsorry\nbut\nI\nneed\nyou\nto\nunderstand\nthat\nyou\nneed\nwhose\nyou\nare\nbecause\nthe\nmoment\nyou\nknow\nthat\nyou\nare\na\nson\nof\nGod\nyou\nknow\nyou\nknow\nthat\nChrist\nis\nyour\nLord\nand\nSavior\neverything\nelse\nand\nI\nwant\nyou\nto\nknow\nthere's\nsomething\nthat\nis\nthat\ndon't\nrestart\nevery\ntime\nwhen\nsomebody\ntells\nyou\nsomething\ndifferent\nabout\nyourself\nit's\nnot a\nreset\nbutton\nif I\ncan\ncall\nit\nthat\nway\ndon't\nrestart\nyour\nwhole\nidentity\nsurrounding\nsomebody's\nopinion\nabout\nyou\nbecause\nthis\nis\nwhat\nhappened\nat\nschool\nthe\nmoment\nsomebody\nsay\nsomething\nto\nyou\nyou\nyou\nchange\nyour\nwhole\nidentity\nas\nif\nyou\nlike\nthat\nmommy\njust\nanswer\nthat\nschool\nnow\nyou\ncome\nand\nare\nyou\nugly\nif\nyou\nare\nyes\nthank\nyou\nyou\ncan\naccept\nit\nbut\nnobody\nis\nugly\nmatthew\n3\nverse\n15\nand\njesus\nanswered\nanswering\nsaid\nunto\nhim\nsuffer\nit\nto\nbe\nso\nfor\nthus\nit\nbecome\nit\nus\nto\nfulfill\nall\nrighteousness\nthen\nhe\nsuffered\nhim\nthis\nis\nlike\na\nshort\nanswer\na\nclear\nanswer\ncan\nyou\nhear\nand\njesus\nanswering\nand\nsaid\nunto\nhim\nsuffer\nit\nto\nbe\nso\nnow\nfor\nthus\nit\nbecomes\nus\nto\nfulfill\nall\nrighteousness\nwith\nhim\nhe\nwas\nnot\nrude\nhe\nwasn't\narrogant\nhe\njust\nacknowledged\njohn's\nperspective\nand\nmoved\nforward\nand\nhe\nmoved\nforward\nanyway\nso\nwhenever\nsomebody\nsays\nto you\nsomething\nno\nwait\nlet's\nread\nthe\nprior\nverse\nthat's\nverse\n14\nlet\nme\nstart\nfrom\n10\nand\nnow\nalso\nthe\naxe\nis\nlaid\nunto\nthe\nroot\nof\nthe\ntrees\nwhich\nbring\nit\nnot\nfood\nfor\ngood\nfruit\nis\nhewn\ndown\nand\ncast\ninto\nthe\nfire\nindeed\nbaptize\nyou\nwith\nwater\nI\nmean\nI\nindeed\nbaptize\nyou\nwith\nwater\nbut\nhe\nthat\ncometh\nafter\nme\nhe\nthat\ncometh\nafter\nme\nis\nmightier\nthan\nI\nwhose\nshoes\nI'm\nnot\nworthy\nto\nbear\nhe\nshall\nbe\nbaptized\nyou\nwith\nthe\nholy\nghost\nand\nwith\nfire\nthose\nI\nmean\nwhose\nfin\nis\nin\nhis\nhand\nand\nhe\nwill\nthoroughly\npurge\nhis\nfloor\nand\ngather\nhis\nwheat\ninto\nthe\ngarner\nbut\nhe\nwill\nburn\nup\nthe\nchuff\nwith\nunquenchable\nfire\nthen\ncometh\nJesus\nfrom\nGalilee\nto\nJordan\nunto\nJohn\nto\nbe\nbaptized\nof\nhim\nbut\nJohn\nforbade\nhim\nhave\nneed\nto\nbe\nbaptized\nof\nthee\nand\ncometh\nthou\nto\nme\nJohn\nwho\nfeel\nat\nthat\nmoment\nhe's\nnot\nworthy\nto\nbaptize\nJesus\nand\nsaid\nunto\nhim\nsuffer\nit\nnot\nsuffer\nit\nto\nbe\nso\nnow\nfor\nthus\nit\nbecome\nus\nto\nfulfill\nall\nrighteousness\nthen\nhe\nsuffered\nhim\nthe\nhonor\nor\nthe\norder\nsorry\nthe\norder\nhe\nacknowledged\nJohn\nperspective\nthat\nJohn\nthink\nhe's\nbigger\nthan\nhim\nyet\nhe\njust\nmoved\nforward\nto\nbaptize\na\nlot\nof\ntimes\nsomebody\nwill\nchallenge\nyour\nidentity\nsomebody\nwill\nchallenge\nyour\nidentity\nI'm\ntelling\nyou\nthey\nwill\nalways\nchallenge\nyour\nidentity\nsome\nsome\nwill\neven\nargument\nwith\nyou\nfor\nwhy\nthey\nyou\nshould\nstay\nthe\nsame\nI'm\njust\nsaying\nhear\nthem\nyes\nyou\nlisten\nto\nthem\nacknowledge\nwhat\nbut\nthen\nmove\nforward\ndon't\nstay\non\nthat\ndon't\nstay\non\nthat\nhe\nwalked\nfrom\nGalilee\nto\nthe\nJordan\nhe\nstepped\ninto\nthe\nwaters\nin\nfront\nof\nwitnesses\nand\nhe\ndid\nnot\nwait\nfor\nthe\nheavens\nto\nopen\nhe\nmoved\nand\nthe\nconfirmation\ncame\nafterwards\nso\nwhen\nhe\nmoved\nhe\nmoved\nknowing\nI\ndon't\ncare\nwhat\npeople\nare\nsaying\nand\nGod\nconfirmed\nI\nwant you\nto take\na moment\nand\nidentify\none\npublic\nact\nof\nobedience\nthat you\nhave been\nresponding\nI\nam\nnot\ntalking\nabout\nthe\nplan\nI\nam\nnot\ntalking\nabout\nprayers\nthat you\nprayed\nbefore\nsomething\nthat you\ncan\nact\non\ndo it\nthis\nweek\nsomething\nthat you\ncan\nact\non\ndo it\nthis\nweek\nso\nif\nyou\nhave\nbeen\nliving\nwithin\nsomebody\nelse's\ndefinition\nof\nyou\ntoday\nis\nthat\nday\nwhere\nit\nneeds\nto\nchange\nsomebody's\nidentity\nof\nyou\nis\nnot\nyour\nown\nidentity\nmove\naway\nfrom\nthat\nreceive\nwhat\nGod\nsays\nabout\nyou\nreceive\nwhat\nGod\nsays\nabout\nyou\nand\nrefuse\nwhat\nothers\nsaid\nliterally\nyou're\nnot\nlost\nyou're\nliterally\nnot\ntoo\nfar\nbehind\nyou are\nactually\nahead\nof\nmany\nyou\nyou\nhe's\nyou\ndon't\nhave\nto\ndo\na\nlot\nto\nbecome\nhis\nhe\nsaid\nall\nyou\nhave\nto\ndo\nis\nbelieve\nonce\nyou\nbelieve\nand\nreceive\nthat's\nit\nbelieve\nand\nreceive\nwhat\nare\nyou\ngoing\nto\ndo\nabout\nthat\ntoday\nwhat\nare\nyou\ngoing\nto\ndo\nabout\nthat\nand\nbelieve\nit\nand\nthat\nI\nwant\nto\ntake\nthis\nopportunity\nand\nsay\nto\nyou\nit\nis\nit\nis\nsomething\nthat\nI\ncan\nI\ncan\nguarantee\nyou\nwhat\nthe\nmoment\nyou\nunderstand\nthat's\nthe\nmoment\nyou\nunderstand\nyourself\nthe\nmoment\nyou\nunderstand\nthe\nBible\nthat's\nthe\nmoment\nyou\nstart\nunderstanding\nyourself\nbecause\neverything\nis\nin the\nBible\nyet\nwe\ndon't\nread\nenough\non the\nBible\nto\nunderstand\nwhat\nit\nmeans\nto\nunderstand\nand\nI\nleave\nit at\nthis\ntoday\nasking\nyou\nplease\ndon't\nlet\nsomebody\nopinion\ncalls\nyou\nin\nbeing\nsomebody's\nopinion\nis not\nyours\nwhat\nyou\nsay\nabout\nyourself\nis\nwhat\nheavenly\nfather\nfor far\ntoo long\nwe've\nbeen\nunder\nsomebody's\nimpression\nwe've\nheard\nthe\nlies\nthey\nspoke\nabout\nus\nwe\nheard\nhow\nthey\nsaid\nwho\nwe\nare\nfor\nfar\ntoo\nlong\nbut\nwhat\nthe\nenemy\nis\nsaying\nabout\nus\nwe\nonly\nbelieve\nwhat\nyou\nsay\nwe\nare\nany\nidentity\nthat\nhas\nnot\nbeen\nwe\nrefuse\nit\nnow\nin\nthe\nmighty\nname\nof\njesus\nchrist\nour\nlord\nand\nsavior\nand\nwe\nonly\naccept\nwho\nyou\nsay\nwe\nare\nin\njesus\nmy\nname\namen\nand\namen\nnow\nmay\nthe\ngrace\nof\nour\nlord\njesus\nchrist\nthe\nlove\nof\ngod\nand\nthe\nsweet\nfellowship\nof\nthe\nholy\nspirit\nrest\nand\nabide\nwith\nus\nall\nuntil\njesus\ncomes\nsurely\ngoodness\nand\nmercy\nshall\nfollow\nus\nall\nthe\ndays\nof\nour\nlives\nand\nwe\nshall\nglenn\nforever\nand\never\nin\njesus\nmighty\nlord\nyou"

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
              You Don&apos;t Know Who You Are Yet
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              You have been living by an identity built from your worst moments, from what people said about you, and from what life has done to you. None of that is who God says you are. This message is about the gap between the version of you that was shaped by pressure and the version God has been forming since before you were born.
            </p>
            <p className="text-white/60 text-sm">
              Pastor Ricardo Zaal · Fountain of Grace International, Pretoria North · 3 May 2026
            </p>
          </div>
        </header>

        <section className="bg-white pt-10 pb-2 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/2eUaSyffcIs"
                title="You Don't Know Who You Are Yet - Fountain of Grace International"
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
              Most people carry an identity they never chose. It was handed to them by the family they grew up in, the school they attended, the relationship that broke them, or the failure they could not recover from. They have been living as a reduced version of themselves ever since - not because they are broken, but because nobody ever showed them the real picture.
            </p>
            <p className="text-[#555] leading-relaxed mb-10">
              The Bible shows a consistent pattern: God addresses people by who they are becoming, not who they currently appear to be. He did it with Gideon. He did it with Abraham. He did it with Simon Peter. He is doing it with you. The statement is not &quot;you are not who you think you are.&quot; It is stronger than that: you have not seen yourself yet.
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
                &quot;God named Abram as father of nations before he had a single child. He speaks to the finished version of you while you are still in process.&quot;
              </p>
              <cite className="text-[#555] text-sm not-italic mt-2 block">- Pastor Ricardo Zaal</cite>
            </blockquote>

            <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">How to Start Living From the Right Identity</h2>
            <p className="text-[#555] leading-relaxed mb-4">
              Identity is not changed by trying harder. It is changed by what you consistently believe. Three steps that shift identity from the inside:
            </p>
            <ol className="list-decimal list-inside space-y-3 text-[#555] leading-relaxed mb-6">
              <li><strong>Stop agreeing with the old report.</strong> Every time you say &quot;I am just like this&quot; or &quot;I always do that,&quot; you are signing off on a false identity. Romans 12:2 says transformation comes by renewing your mind - that starts with what you stop accepting as true.</li>
              <li><strong>Find what God says and speak it.</strong> The same way Gideon had to accept &quot;mighty man of valour&quot; before he became one, you have to receive what God says about you before it shows up in your behavior. Search the Word for what it calls you as a child of God. Declare it.</li>
              <li><strong>Trust the process, not the current picture.</strong> Philippians 1:6 - the work is not finished. What you see in yourself today is incomplete. God is not done. The right response to an unfinished process is not frustration. It is patience and cooperation.</li>
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
                <h3 className="font-semibold text-[#1a1a1a] mb-2">Why do I feel like I have no real sense of who I am?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Most people&apos;s sense of identity was formed by their environment, the words spoken over them, failures, and how others treated them. None of those are reliable. When identity is built on performance or approval, it keeps shifting. The Bible teaches that true identity is rooted in what God says about you - not what your history says.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">What does the Bible say about identity?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Scripture consistently shows God addressing people by who they are becoming, not who they currently appear to be. Gideon was hiding when the angel called him &quot;mighty man of valour.&quot; Abram had no children when God named him father of many nations. God sees the finished version of you and speaks to that version while you are still in process.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">How do I discover who God says I am?</h3>
                <p className="text-[#555] leading-relaxed text-sm">Romans 12:2 says transformation comes by renewing your mind. Start by finding what the Bible says about you as a child of God, declare it out loud, and stop agreeing with the accusations of the enemy or the limitations of your past. Identity is rebuilt by what you repeatedly hear and believe.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">What does &quot;you don&apos;t know who you are yet&quot; mean?</h3>
                <p className="text-[#555] leading-relaxed text-sm">It means you are not the finished product. What you have experienced, failed at, and what people called you - none of that is the final word. Philippians 1:6 says He who began a good work in you will perform it until the day of Jesus Christ. The version of you God started is still being completed. You have not seen your full self yet.</p>
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
