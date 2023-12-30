const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: `${global.config.BOTNAME}`,
  version: "1.0.4",
  hasPermssion: 0,
  credits: "Jasper Wu",
  description: "noprefix",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 6,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Manila").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["bakit boss", "missyou", "tara usap", "lovey, missyou", "Love you", "Miss YoU", "missmonabako", "Bakit ikikiss moba ko", "ano yon?loveyy", "missyou", "pm,may sasabihin ako" ,"kissgustoq" ,"kiss moko", "bot ngako para kang gago.", "loh mateluk ka bot ngako gago amputa", "ra bebetime", ""];
  var rand = tl[Math.floor(Math.random() * tl.length)]

  if ((event.body.toLowerCase() == "good night") || (event.body.toLowerCase() == "gn")) {
     return api.sendMessage("️ Good Night, wifey", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "good morning") || (event.body.toLowerCase() == "gm")) {
     return api.sendMessage(` Good morning ${name} `, threadID);
   };

  
   if ((event.body.toLowerCase() == "may bot") || (event.body.toLowerCase() == "May bot")) {
     return api.sendMessage("Tanga kaba?", threadID);
   };
  
   if ((event.body.toLowerCase() == "ayoko nga") || (event.body.toLowerCase() == "Ayoko")) {
     return api.sendMessage("Tang inang to dami mong arte", threadID);
   };
if ((event.body.toLowerCase() == "pa kiss") || (event.body.toLowerCase() == "Pa kiss")) {
     return api.sendMessage("Toothbrush ka muna", threadID);
   };
  
   if ((event.body.toLowerCase() == ".") || (event.body.toLowerCase() == "...") || (event.body.toLowerCase() == "..")) {
     return api.sendMessage("aanhin namen yang dot mo nayan?? nakakain bayan", threadID);
   };

if ((event.body.toLowerCase() == "Oo") || (event.body.toLowerCase() == "oo")) {
     return api.sendMessage("ulol pangit mo tanga", threadID);
   };
  
   if ((event.body.toLowerCase() == "loveyou") || (event.body.toLowerCase() == "Loveyou")) {
     return api.sendMessage("Loveyoumore", threadID);
   };

  
   if ((event.body.toLowerCase() == "brb") || (event.body.toLowerCase() == "Brb")) {
     return api.sendMessage(`Tyt,loveu ${name}`, threadID);
   };
   mess = "{name}"
  
  if (event.body.indexOf(`${global.config.BOTNAME}`) == 0 || (event.body.indexOf("excikel") == 0)) {
    var msg = {
      body: `${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }