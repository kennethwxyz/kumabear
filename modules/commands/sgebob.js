module.exports.config = {
  name: 'uptime1',
  version: '1.1.1',
  hasPermssion: 0,
  credits: 'Deku',
  description: 'Uptime your repl',
  commandCategory: '...',
  usages: 'url',
  cooldowns: 0,
};

module.exports.run = async function({ api, event, args }) {
const axios = require("axios"),
 url = args.join(" ");
if (!url.startsWith("https")) return api.sendMessage("Something went wrong.", event.threadID, event.messageID)
	if(!url) return api.sendMessage('missing url!', event.threadID, event.messageID)
const upt = await axios.get(`https://sim.ainz-project.repl.co/others/uptimer?url=${url}`)
if (upt.data.status == "success"){
var msg = "Adding monitor to your repl success!";
} else {
var msg = upt.data.result
}
api.sendMessage(msg, event.threadID, event.messageID)
    }