const fs = require("fs");
module.exports.config = {
	name: "iloveyou",
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
	if (event.body.indexOf("i love you")==0 || (event.body.indexOf("I love you")==0 || (event.body.indexOf("iloveyou")==0 || (event.body.indexOf("Iloveyou")==0)))) {
		var msg = {
				body: "",
				attachment: fs.createReadStream(__dirname + `/noprefix/iloveyou.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😙", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }