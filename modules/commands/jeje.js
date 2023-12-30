module.exports.config = {
	name: "jeje",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "John Arida",
	description: "text to jejemon",
  usages: "[text]",
	commandCategory: "...",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
let juswa = args.join(" ");
const res = await axios.get(`https://api.popcat.xyz/mock?text=${juswa}`);
var morse = res.data.text;
return api.sendMessage(`${morse}`, event.threadID, event.messageID)
  }