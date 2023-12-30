module.exports.config = {
	name: "hahaha",
  version: "7.3.1",
	hasPermssion: 0,
	credits: "Unknown", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 3, 
};

module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
	var { threadID, messageID } = event;
	var name = await Users.getNameUser(event.senderID);
	if (event.body.indexOf("https://")==0 || event.body.indexOf("Https://")==0 || event.body.indexOf("HTTPS://")==0 ) { 
		var msg = {
				body: `Ayaw namen ${name}, baka pag click namen bold lumabas ng link mo`
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😱", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }