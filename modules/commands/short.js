module.exports.config = {
	name: "short",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Joshua Sy",
	description: "shortlink",
  usages: "link or text",
	commandCategory: "...",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
let juswa = args.join(" ");
const res = await axios.get(`https://api.phamvandien.xyz/slink?url=${juswa}`);
var created_at = res.data.url;
return api.sendMessage(`${created_at}`, event.threadID, event.messageID)
  }