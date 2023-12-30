const fs = require("fs");
module.exports.config = {
	name: "pyar",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Candy", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 1, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("𝙨𝙚𝙭") ||
     react.includes("𝙨𝙚𝙭𝙮") || 
react.includes("PYAR")) {
		var msg = {
				body: "𝙝𝙤𝙩 𝙨𝙚𝙭𝙮 𝙧𝙤𝙢𝙖𝙣𝙘𝙚",
				attachment: fs.createReadStream(__dirname + `/noprefix/candy.jpeg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💋", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

      }