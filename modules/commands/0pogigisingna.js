const fs = require("fs");
module.exports.config = {
	name: "gising",
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
	if (event.body.indexOf("Morning")==0 || (event.body.indexOf("Good morning")==0 || (event.body.indexOf("good morning")==0 || (event.body.indexOf("gising")==0)))) {
		var msg = {
				body: "gising na pogi~~",
				attachment: fs.createReadStream(__dirname + `/noprefix/gisingnapogi.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😙", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }