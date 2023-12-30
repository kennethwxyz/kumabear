module.exports.config = {
    name: "bible",
    version: "1.0.0",
    hasPermision: 0,
    credit: "Joshua Sy & Choru Tiktokers",
    description: "Random Bible Verse 😇",
    commandCategory: "random-quote",
    cooldowns: 1,
};
module.exports.run = async function({api, event, args, utils, Users, Threads}) {
  const axios = require("axios")
  const request = require("request")
  const fs = require("fs-extra")
  var link = ["https://i.imgur.com/IEyYKzn.jpeg","https://i.imgur.com/En3e5AJ.jpg", "https://i.imgur.com/iGSJ1SK.jpg", "https://i.imgur.com/7UiYEWh.jpg", "https://i.imgur.com/QtbGfTV.jpg"];
var bible = [`John 16:33

pagbinato ka ng bato,kantutin mo ng todo. `, `Isaiah 41:10 (NIV)

So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.`, `Philippians 4:6–7 (NIV)

Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.`, `Psalm 34:4–5, 8

I sought the LORD, and He answered me and delivered me from all my fears. Those who look to Him are radiant, and their faces shall never be ashamed. Oh, taste and see that the LORD is good! Blessed is the man who takes refuge in Him!`, `Romans 8:28

And we know that for those who love God all things work together for good, for those who are called according to His purpose.`, `Joshua 1:9

Have I not commanded you? Be strong and courageous. Do not be frightened, and do not be dismayed, for the LORD your God is with you wherever you go.`, `Matthew 6:31–34 (NIV)

So do not worry, saying, What shall we eat? or What shall we drink? or What shall we wear? For the pagans run after all these things, and your heavenly Father knows that you need them. But seek first His kingdom and His righteousness, and all these things will be given to you as well. Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own.`, `Proverbs 3:5–6

Trust in the LORD with all your heart, and do not lean on your own understanding. In all your ways acknowledge Him, and He will make straight your paths.`, `Romans 15:13 (NIV)

May the God of hope fill you with all joy and peace as you trust in Him, so that you may overflow with hope by the power of the Holy Spirit.`, `2 Chronicles 7:14

If my people who are called by My name humble themselves, and pray and seek My face and turn from their wicked ways, then I will hear from heaven and will forgive their sin and heal their land.`, `Philippians 2:3–4

Do nothing from selfish ambition or conceit, but in humility count others more significant than yourselves. Let each of you look not only to his own interests, but also to the interests of others.`, `Isaiah 41:13

For I, the LORD your God, hold your right hand; it is I who say to you, Fear not, I am the one who helps you.`, `1 Peter 5:6–7

Humble yourselves, therefore, under the mighty hand of God so that at the proper time He may exalt you, casting all your anxieties on Him, because He cares for you.`, `Psalm 94:18–19

When I thought, My foot slips, Your steadfast love, O LORD, helped me up. When the cares of my heart are many, Your consolations cheer my soul.`, `Revelation 21:4

Have I not commanded you? Be strong and courageous. Do not be terrified; do not be discouraged, for the Lord your God will be with you wherever you go.", "Joshua 1:9

For I am the Lord, your God, who takes hold of your right hand and says to you, Do not fear; I will help you.  Do not be afraid, for I myself will help you,' declares the Lord, your Redeemer, the Holy One of Israel.", "Isaiah 41:13-14

God is our refuge and strength, an ever-present help in trouble.", "Psalm 46:1

An anxious heart weighs a man down, but a kind word cheers him up.`, `Proverbs 12:25

But now, this is what the Lord says…Fear not, for I have redeemed you; I have summoned you by name; you are mine.`, `Isaiah 43:1

Cast your cares on the Lord and he will sustain you; he will never let the righteous fall.`, `Psalm 55:22

Humble yourselves, then, under God’s mighty hand, so that he will lift you up in his own good time.  Leave all your worries with him, because he cares for you.`, `1 Peter 5:6-7

He who dwells in the shelter of the Most High will rest in the shadow of the Almighty.  I will say of the Lord, “He is my refuge and my fortress, my God, in whom I trust.”…He will cover you with his feathers, and under his wings you will find refuge; his faithfulness will be your shield and rampart.  You will not fear the terror of night, nor the arrow that flies by day, nor the pestilence that stalks in the darkness, nor the plague that destroys at midday.  A thousand may fall at your side, ten thousand at your right hand, but it will not come near you…For he will command his angels concerning you, to guard you in all your ways…“Because he loves me,” says the Lord, “I will rescue him; I will protect him, for he acknowledges my name.  He will call upon me, and I will answer him; I will be with him in trouble, I will deliver him and honor him.`, `Psalm 91:1-16

He got up, rebuked the wind and said to the waves, “Quiet! Be still!” Then the wind died down and it was completely calm.  He said to his disciples, “Why are you so afraid? Do you still have no faith?” Mark.`, `4:39-40

Fear of man will prove to be a snare, but whoever trusts in the Lord is kept safe.`, `Proverbs 29:25

When I am afraid, I put my trust in you.`, `Psalm 56:3

Do not be afraid of them; the Lord your God himself will fight for you.`, `Deuteronomy 3:22

For God has not given us a spirit of fear, but of power and of love and of a sound mind.`, `2 Timothy 1:7

But even if you suffer for doing what is right, God will reward you for it. So don’t worry or be afraid of their threats.`, `1 Peter 3:14

“Tell everyone who is discouraged, Be strong and don’t be afraid! God is coming to your rescue.`, `Isaiah 35:4

“Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me; your rod and your staff, they comfort me.`, `Psalm 23:4

The angel of the Lord encamps around those who fear him, and he delivers them.`, `Psalm 34:7

Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.  And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.`, `Philippians 4:6-7

I prayed to the Lord, and he answered me.  He freed me from all my fears.`, `Psalm 34:4

Jesus told him, ‘Don’t be afraid; just believe.`, `Mark 5:36

Be strong and courageous.  Do not be afraid or terrified because of them, for the Lord your God goes with you; he will never leave you nor forsake you.`, `Deuteronomy 31:6

Do not worry about your life, what you will eat; or about your body, what you will wear.  Life is more than food, and the body more than clothes.  Consider the ravens: They do not sow or reap, they have no storeroom or barn; yet God feeds them. And how much more valuable you are than birds!  Who of you by worrying can add a single hour to his life?  Since you cannot do this very little thing, why do you worry about the rest?.`, `Luke 12:22-26

When anxiety was great within me, your consolation brought joy to my soul.`, `Psalm 94:19

The Lord your God is in your midst, A victorious warrior. He will exult over you with joy, He will be quiet in His love, He will rejoice over you with shouts of joy.`, `Zephaniah 3:17

So do not fear, for I am with you; do not be dismayed, for I am your God.  I will strengthen you and help you; I will uphold you with my righteous right hand.`, `Isaiah 41:10

Peace is what I leave with you; it is my own peace that I give you. I do not give it as the world does. Do not be worried and upset; do not be afraid.`, `John 14:27

The Lord is with me; I will not be afraid.  What can man do to me?  The Lord is with me; he is my helper.`, `Psalm 118:6-7

And I am convinced that nothing can ever separate us from God’s love. Neither death nor life, neither angels nor demons, neither our fears for today nor our worries about tomorrow—not even the powers of hell can separate us from God’s love.`, `Romans 8:38-39

Immediately he spoke to them and said, Take courage! It is I. Don’t be afraid.`, `Mark 6:50

There is no fear in love. But perfect love drives out fear, because fear has to do with punishment. The one who fears is not made perfect in love.`, `1 John 4:18

Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own.`, `Matthew 6:34

Then he placed his right hand on me and said: Do not be afraid. I am the First and the Last.`, `Revelation 1:17

The Lord is my light and my salvation—whom shall I fear?  The Lord is the stronghold of my life—of whom shall I be afraid?.`, `Psalm 27:1

Rejoice always, pray continually, give thanks in all circumstances; for this is God’s will for you in Christ Jesus.`, `1 Thessalonians 5:16-18

Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.`, `Philippians 4:6-7 

But to you who are listening I say: Love your enemies, do good to those who hate you, bless those who curse you, pray for those who mistreat you.`, `Luke 6:27-28

About midnight Paul and Silas were praying and singing hymns to God, and the other prisoners were listening to them.`, `Acts 16:25

Arise, Lord! Lift up your hand, O God. Do not forget the helpless.`, `Psalm 10:12

I cried out to him with my mouth; his praise was on my tongue.`, `Psalm 66:17

And when you pray, do not keep on babbling like pagans, for they think they will be heard because of their many words.`, `Matthew 6:7

This is the confidence we have in approaching God: that if we ask anything according to his will, he hears us.`, `1 John 5:14

Taking the five loaves and the two fish and looking up to heaven, he gave thanks and broke them. Then he gave them to the disciples to distribute to the people. They all ate and were satisfied, and the disciples picked up twelve basketfuls of broken pieces that were left over.`, `Luke 9:16-17

“Father, I want those you have given me to be with me where I am, and to see my glory, the glory you have given me because you loved me before the creation of the world.`, `John 17:24

If you then, though you are evil, know how to give good gifts to your children, how much more will your Father in heaven give the Holy Spirit to those who ask him!.`, `Luke 11:13

And if we know that he hears us—whatever we ask—we know that we have what we asked of him.`, `1 John 5:15

But when you pray, go into your room, close the door and pray to your Father, who is unseen. Then your Father, who sees what is done in secret, will reward you.`, `Matthew 6:6

You desire but do not have, so you kill. You covet but you cannot get what you want, so you quarrel and fight. You do not have because you do not ask God.`, `James 4:2

May these words of my mouth and this meditation of my heart be pleasing in your sight, Lord, my Rock and my Redeemer.`, `Psalm 19:14

Let us then approach God’s throne of grace with confidence, so that we may receive mercy and find grace to help us in our time of need.`, `Hebrews 4:16

But when you ask, you must believe and not doubt, because the one who doubts is like a wave of the sea, blown and tossed by the wind.`, `James 1:6

In my distress I called to the Lord; I cried to my God for help. From his temple he heard my voice; my cry came before him, into his ears.`, `Psalm 18:6

“For where two or three gather in my name, there am I with them.`, `Matthew 18:20 

Call to me and I will answer you and tell you great and unsearchable things you do not know.`, `Jeremiah 33:3

Then you will call on me and come and pray to me, and I will listen to you.`, `Jeremiah 29:12

Devote yourselves to prayer, being watchful and thankful.`, `Colossians 4:2 

In the same way, the Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans.`, `Romans 8:26

“I have made you known to them, and will continue to make you known in order that the love you have for me may be in them and that I myself may be in.`, `17:26

Be joyful in hope, patient in affliction, faithful in prayer@Jolo Cachero pa admin daw kay @Kazuto KirigayaRomans.`, `12:12

When hard pressed, I cried to the Lord; he brought me into a spacious place.`, `Psalm 118:5

So after they had fasted and prayed, they placed their hands on them and sent them off.`, `Acts 13:3

The Lord is near to all who call on him, to all who call on him in truth.`, `Psalm 145:18

In the morning, Lord, you hear my voice; in the morning I lay my requests before you and wait expectantly.`, `Psalm 5:3

Therefore confess your sins to each other and pray for each other so that you may be healed. The prayer of a righteous person is powerful and effective.`, `James 5:16

You did not choose me, but I chose you and appointed you so that you might go and bear fruit—fruit that will last—and so that whatever you ask in my name the Father will give you.`, `John 15:16 

But I tell you, love your enemies and pray for those who persecute you.
Matthew 5:44
Let your face shine on your servant; save me in your unfailing love.`, `Psalm 31:16

For I know that through your prayers and God’s provision of the Spirit of Jesus Christ what has happened to me will turn out for my deliverance..`, `Philippians 1:19

The end of all things is near. Therefore be alert and of sober mind so that you may pray..`, `1 Peter 4:7

Dear friend, I pray that you may enjoy good health and that all may go well with you, even as your soul is getting along well.`, `3 John 1:2

By day the Lord directs his love, at night his song is with me— a prayer to the God of my life.`, `Psalm 42:8-And I will do whatever y

He will wipe away every tear from their eyes, and death shall be no more, neither shall there be mourning, nor crying, nor pain anymore, for the former things have passed away. And He who was seated on the throne said, Behold, I am making all things new.`];
  var juswa1 = bible[Math.floor(Math.random() * bible.length)];
  var callback = () => api.sendMessage({body:`${juswa1}`,attachment: fs.createReadStream(__dirname + "/cache/zac.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/zac.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/zac.jpg")).on("close",() => callback());
   };