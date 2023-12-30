const fs = require("fs");
module.exports.config = {
        name: "autoreact",
  version: "1.0.0",
        hasPermssion: 0,
        credits: "Minami Tatsuo",
        description: "non prefix reply",
        commandCategory: "no prefix",
        usages: "noprefix",
    cooldowns: 0,
};
 
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
 let haha = event.body.toLowerCase();
  if (haha.includes("lol") || haha.includes("😂") || haha.includes("haha") || haha.includes("pagal") || haha.includes("mental") || haha.includes("oye") || haha.includes("love") || haha.includes("jani") || haha.includes("bc") || haha.includes("busy") || 
haha.includes("group") || haha.includes("kis") || haha.includes("kuta") || haha.includes("jan") || haha.includes("oh")){                 
    return api.setMessageReaction("😆", event.messageID, (err) => {}, true)
    api.markAsSeen(1, (err) => {});
  }
    if (haha.includes("death") || haha.includes("mar") || haha.includes("udas") || haha.includes("☹️") || haha.includes("hurt") || haha.includes("please") || haha.includes("pls") || haha.includes("😢") || haha.includes("😔") || haha.includes("🥺") || haha.includes("sad")){
      return  api.setMessageReaction("😢", event.messageID, (err) => {}, true);
}
  if (haha.includes("🥵") || haha.includes("umah") || haha.includes("💋") || haha.includes("kiss") || haha.includes("babu") || haha.includes("baby") || haha.includes("wow") || haha.includes("wah") || haha.includes("relationship") || haha.includes("gf") || haha.includes("baby") || haha.includes("omg")){
    return api.setMessageReaction("😘", event.messageID, (err) => {}, true)
  }
  if (haha.includes("ely") || haha.includes("Ely")){
    api.sendMessage("mamahalin, luluhudan iiyakan, pagsisilbihan, paglulutuan, aalagaan, yayakapin, jojowain, aasawahin, papakainin, pipiliin, iingatan, ipaglalaban, ipaghuhugas, ipaglalalaba owner of my heart, the person who saved me, the person who makes me feel happy everyday, the most special person in my life, my safe place, my home, my world, my life, my infinity and beyond. mamahalin, iingatan, pagsisilbihan, aalagaan, jojowain, aasawahin, papakasalan, mamahalin, luluhuran nanaman, my the one. paglilingkuran, seseryosohin, tititigan, iiyakan, liligawan, papakikinggan, iingatan, pasasayahin, patatawanin, paliligayahin, kukulitin, ipagmamalaki, at mamahalin habang buhay, ikakama, idadamo, ibubukid, papaliguan, kiss every minute, ikac-cuddle, jojombagin, isisigaw sa mundo, ipapa billboard, ipapatattoo, sasabayan.", event.threadID, event.messageID)
  }
  if (haha.includes("What if") || haha.includes("what if")){
    api.sendMessage("what if bobo ka?", event.threadID, event.messageID)
  }
  if (haha.includes("") || haha.includes("")){
    api.sendMessage("", event.threadID, event.messageID)
  }
  if (haha.includes("") || haha.includes("")){
    api.sendMessage("", event.threadID, event.messageID)
      }
}
        module.exports.run = function({ api, event, client, __GLOBAL }) {
      }