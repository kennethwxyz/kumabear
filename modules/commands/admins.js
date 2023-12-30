const fs = require("fs");
module.exports.config = {
	name: "bobo",
    version: "1.0.2",
	hasPermssion: 0,
	credits: "Jas", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 1, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("tang ina")==0 || (event.body.indexOf("bobo")==0 || (event.body.indexOf("gago")==0 || (event.body.indexOf("Gago")==0)))) {
		var msg = {
				body: "isapang mura malalasap mo kong gano ako ka sarap   "
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }