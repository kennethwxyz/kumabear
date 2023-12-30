const fs = require("fs");
module.exports.config = {
	name: "walasiidol",
    version: "1.0.2",
	hasPermssion: 0,
	credits: "Cjas",
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "Yo Yo",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Excikel")==0 || (event.body.indexOf("excikel")==0 || (event.body.indexOf("josh")==0 || (event.body.indexOf("Josh")==0 || (event.body.indexOf("Ej")==0 || (event.body.indexOf("ej")==0)))))) {
		var msg = {
				body: "Wala si idol excikel eh balik ka nalang.",
				attachment: fs.createReadStream(__dirname + `/noprefix/walasiidol.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😙", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }