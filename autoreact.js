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
  if (haha.includes("lol") || haha.includes("😂") || haha.includes("haha") || haha.includes("pagal") || haha.includes("mental") || haha.includes("oye") || haha.includes("love") || haha.includes("jani") || haha.includes("bc") || haha.includes("group") || haha.includes("kis") || haha.includes("kuta") || haha.includes("jan") || haha.includes("oh")){                 
    return api.setMessageReaction("😂", event.messageID, (err) => {}, true)
    api.markAsSeen(1, (err) => {});
  }
    if (haha.includes("death") || haha.includes("mar") || haha.includes("udas") || haha.includes("☹️") || haha.includes("hurt") || haha.includes("please") || haha.includes("😢") || haha.includes("😔") || haha.includes("🥺") || haha.includes("sad")){
      return  api.setMessageReaction("😢", event.messageID, (err) => {}, true);
}
  if (haha.includes("🥵") || haha.includes("umah") || haha.includes("💋") || haha.includes("kiss") || haha.includes("babu") || haha.includes("wow") || haha.includes("wah") || haha.includes("relationship") || haha.includes("gf") || haha.includes("baby") || haha.includes("omg")){
    return api.setMessageReaction("😘", event.messageID, (err) => {}, true)
        }
  if (haha.includes("") || haha.includes("")){
    api.setMessageReaction("", event.messageID, (err) => {}, true)
    api.sendMessage("", event.threadID,event.messageID);
  }
  if (haha.includes("tite") || haha.includes("Tite")){
    api.sendMessage("tite ka ng tite lika dito subuin moto.", event.threadID, event.messageID)
  }
  if (haha.includes("What if") || haha.includes("what if")){
    api.sendMessage("what if bobo ka?", event.threadID, event.messageID)
  }
  if (haha.includes("good morning") || haha.includes("morning")){
    api.sendMessage("good morning, eat kana loveu ", event.threadID, event.messageID)
  }
if (haha.includes("good night") || haha.includes("night")){
    api.sendMessage("good night mahal, sleep well sweet dreams loveu mwa", event.threadID, event.messageID)
}
if (haha.includes("ib") || haha.includes("inbox")){
    api.sendMessage("sabi ng mama mo mahalin mo raw ako", event.threadID, event.messageID)
}
  if (haha.includes("jasper") || haha.includes("JASPER")){
    api.sendMessage("BAT MO HINAHANAP BOSS KO IKIKISS MOBA.", event.threadID, event.messageID)
      }
}
        module.exports.run = function({ api, event, client, __GLOBAL }) {
  }