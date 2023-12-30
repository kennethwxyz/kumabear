const fs = require("fs");
module.exports.config = {
	name: "owner",
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
	if (event.body.indexOf("owner")==0 || (event.body.indexOf("Owner")==0 || (event.body.indexOf("admin")==0 || (event.body.indexOf("Admin")==0)))) {
		var msg = {
				body: "My owner is Excikel.\nHe is an experienced programmer.\nHis message for all\nThank you for using my bot have fun using it. ",
				attachment: fs.createReadStream(__dirname + `/noprefix/owner.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😙", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }