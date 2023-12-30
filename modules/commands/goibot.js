const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "manhIT",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Ho_Chi_minh").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;

  var tl = ["hi po, bakit moko hinahanap", "oh, sino ka", "ay tinawag nanaman ako ni tanga", "Bakit? lalandiin moko?", "Hi, pwede ka ba maging asawa", "Tinawag nanaman ako amp. pakyu ka", "stfu!! puro kayo utos", "oh bakit? pornhub nanaman ba? tama kana accla", "Yow, Dati ka bang gago? tawag ng tawag amp", "Hi, Here na me. Where na you", "Tanginamo nunanaman", "wag mo'kong tawagin kung lalandiin mo lang ako", "Why babe? ako na lang kasi.", "Sup, Subo mo tite ko", "Sheshh ito nanaman sya, tawag nanaman", "Ohhh!!! Parang gago oh", "Play word reading with me ah ah ah", "TITEEEE, kainis kana ah, lagi na lang natawag", "Excikel is my Admin. sya lang kakausapin ko", "Mao jud. dili ko makipagistorya sa imo.", "kalma, pag ako nagerror kingina ka", "bat? batman", "Shet, Tinawag ako ng unggoy", "ay wag, nahihiya ako" ,"Will you be my wife? ?", "Don't spam me langga.", "pagod na'ko maging bot nyo" , "kingina ka, isa pang bot. tatamaan ka saken", "oh bakit?", "Pasok ko tite sa mala rosas mong puke 🙈", "👍", "geh lang, mag bot ka pa. naiirita na ako sa pagmumuka mo", "oh bakit? Do you love me?", "Shut the fck up!!", "naiinis na ako pls lang.", "Tanginamo, Bot ng Bot", "Muka kang tite.", "yes? kumain kana ba", "Hi po, It's nice to see you", "po? poki", "ughh, wag jan pls, ang sarapp!!", "iwww tinawag ako ng dirty creature", "??? sinoccaba", "Who Tf are you?", "ama ccana acla"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
 let userH = event.senderID 
    /*api.getUserInfo(parseInt(userH), (err, data) => {
      if(err){ return console.log(err)}
     var obj = Object.keys(data);
    var firstname = data[obj].name.replace("@", ""); */
    
  const firstname = global.data.userName.get(userH) || await Users.getNameUser(userH);
	if (event.senderID == api.getCurrentUserID()) return;

    var msg = {
      body: firstname + ", " + rand, 
      mentions: [{
          tag: firstname,
          id: userH
        }]
    }
    return api.sendMessage(msg, threadID, messageID);
    //  })
  };
  let input2 = event.body.toLowerCase();
if(input2.includes("haha") || input2.includes("lmao") || input2.includes("lol") || input2.includes("😂") || input2.includes("😹") || input2.includes("🤣") || input2.includes("😆") || input2.includes("😄") || input2.includes("😅") || input2.includes("xd")){
					        	return api.setMessageReaction("😹", event.messageID, (err) => {}, true)
} 
    if(input2.includes("kawawa") || input2.includes("sad") || input2.includes("agoi") || input2.includes("sakit") ||input2.includes("skit") || input2.includes("pain") || input2.includes("pighati")){
					        	return api.setMessageReaction("😿", event.messageID, (err) => {}, true)
    }


}

module.exports.run = function({ api, event, client, __GLOBAL }) { }