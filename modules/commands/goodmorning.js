const fs = require("fs");
module.exports.config = {
	name: "goodmorning",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Joshua Sy", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 1, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("goodmorning")==0 || (event.body.indexOf("Goodmorning")==0 || (event.body.indexOf("morning")==0 || (event.body.indexOf("gomo")==0)))) {
		var msg = {
				body: "Hello tanga, Goodmorning tara shabu",
				attachment: fs.createReadStream(__dirname + `/noprefix/coffee.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }