const fs = require("fs");
module.exports.config = {
	name: "mgaputanginanyo",
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
	if (event.body.indexOf("mga")==0 || (event.body.indexOf("Mga")==0 || (event.body.indexOf("tang")==0 || (event.body.indexOf("Tang")==0)))) {
		var msg = {
				body: "",
				attachment: fs.createReadStream(__dirname + `/noprefix/mgaputanginanyo.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😡", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }