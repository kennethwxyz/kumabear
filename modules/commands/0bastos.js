const fs = require("fs");
module.exports.config = {
	name: "bastos",
    version: "1.0.2",
	hasPermssion: 0,
	credits: "...",
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "Yo Yo",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("tite")==0 || (event.body.indexOf("Tite")==0 || (event.body.indexOf("bastos")==0 || (event.body.indexOf("puke")==0 || (event.body.indexOf("Puke")==0 || (event.body.indexOf("Bastos")==0)))))) {
		var msg = {
				body: "",
				attachment: fs.createReadStream(__dirname + `/noprefix/mgakabastosannyo.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙂", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

        }