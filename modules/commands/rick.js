const fs = require("fs");
module.exports.config = {
	name: "rick",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Joshua Guerrero", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 1, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if(event.body.includes("rickrolled") || event.body.includes("rick") || event.body.includes("RICKROLLED") || event.body.includes("RICK"))  {
		var msg = {
				body: "You got rickrolled",
				attachment: fs.createReadStream(__dirname + `/noprefix/rickrolled.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
  }
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }