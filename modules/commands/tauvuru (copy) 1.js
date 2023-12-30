module.exports.config = {
    name: "tanlientuc",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "...",
    description: "Continuously tag the person you tagged for 5 times\nYou can call that person's soul",
    commandCategory: "group",
    usages: "chuilientuc @mention",
    cooldowns: 10,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage(" mourning a friend you want to flirt ", event.threadID);
 let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a(" này cậu ơi");
setTimeout(() => {a({body: "I want to tell you one thing, I love you so much♥️" + " " + name, mentions: arraytag})}, 3000);
setTimeout(() => {a({body: "May I ask if you have anyone, if not, let me take care of you♥️" + " " + name, mentions: arraytag})}, 5000);
setTimeout(() => {a({body: "I hope you agree although I don't know how to express my feelings but I want to be with you when you're sad 🖤" + " " + name, mentions: arraytag})}, 7000);
setTimeout(() => {a({body: "Can you let me walk together ♥️ I want to be with you =))) " + " " + name, mentions: arraytag})}, 9000);
setTimeout(() => {a({body: "If you feel too tired then come back to me I'm willing to love you " + " " +  name, mentions: arraytag})}, 12000);
setTimeout(() => {a({body: "bro, i love you, i love you, i don't know what to do can you tell me" + " " + name, mentions: arraytag})}, 15000);
setTimeout(() => {a({body: " I want to love you and walk with you on the road ahead =))♥️" + " " + name, mentions: arraytag})}, 17000);
setTimeout(() => {a({body: "Does the sun make you drunk or you get drunk, I'm so tired I'm drunk, I'll love you:33" + " " + name, mentions: arraytag})}, 20000);
setTimeout(() => {a({body: "pascal to write the equation and me to write our love story♥️" + " " + name, mentions: arraytag})}, 23000);
setTimeout(() => {a({body: "Keep going, you won't be disappointed♥️" + " " + name, mentions: arraytag})}, 25000);
setTimeout(() => {a({body: "Calling you google because you have everything I'm looking for♥️" + " " + name, mentions: arraytag})}, 28500);
setTimeout(() => {a({body: "I know it's stupid to love but it's okay to be right" + " " + name, mentions: arraytag})}, 31000);
setTimeout(() => {a({body: "Spring is past summer, autumn is ending Winter is too cold, come back for me ♥️♥️" + " " + name, mentions: arraytag})}, 36000);
setTimeout(() => {a({body: "Call you SuGAR and I'm CANDY Because everyone knows CANDY CRUSH SUGAR♥️♥️😗😘" + " " + name, mentions: arraytag})}, 39000);
setTimeout(() => {a({body: "The cow likes the grass The dog likes the bone And I give the natural I like to fish alone🥺🥺" + " " + name, mentions: arraytag})}, 40000);
setTimeout(() => {a({body: "If love is a lottery ticket, I hope we will marry each other" + " " + name, mentions: arraytag})}, 65000);
setTimeout(() => {a({body: "Life has thousands of temptations, you just need to come to me, I will be your destination ♥️" + " " + name, mentions: arraytag})}, 70000);
setTimeout(() => {a({body: "I make the wind Do you like it^^ Seven colors of the rainbow Love me♥️" + " " + name, mentions: arraytag})}, 75000);
setTimeout(() => {a({body: "Looking from afar, I see dimly Thought that someone would fall in love with you ♥️ " + " " + name, mentions: arraytag})}, 80000);
setTimeout(() => {a({body: "Opium still has a camp to quit but I love you, only reincarnation will end ♥️" + " " + name, mentions: arraytag})}, 85000);
setTimeout(() => {a("A smile equals 10 tonic ladders There is a smile that breaks my heart♥️")} , 90000);
setTimeout(() => {a({body: "You have a vacuum when you stay forever in my mind" + " " + name, mentions: arraytag})}, 95000);
setTimeout(() => {a({body: "I promise to love you like myself :<" + " " + name, mentions: arraytag})}, 100000);
setTimeout(() => {a({body: "You do what I do, I promise to be with you, but I don't break my promise, I don't want to be with you =) " + " " + name, mentions: arraytag})}, 105000);
setTimeout(() => {a("you agree to be my lover I will always love you♥️ love you=^^")} , 110000);


  
}