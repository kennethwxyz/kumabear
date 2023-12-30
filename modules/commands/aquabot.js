module.exports.config = {
  name: 'aquabot',
  version: '1.1.1',
  hasPermssion: 0,
  credits: 'Secret',
  description: 'ChatGPT',
  commandCategory: '....',
  usages: '[prompt] or ai [prompt](no prefix)',
  cooldowns: 0,
};

module.exports.run = async function({ api, event, args }) {
 const b = require('axios');
  let txt = args.join(" ");
  if (!txt){ return api.sendMessage("❌Missing input!", event.threadID, event.messageID)
}
api.sendMessage(`🔍"${txt}"`,event.threadID, event.messageID);
  const res = await b.get(`https://free-api.chatbotcommunity.ltd/others/gpt?prompt=${txt}`);
let resu = res.data.result;
api.sendMessage(resu, event.threadID, event.messageID)
}
module.exports.handleEvent = async function({ api, event, args }) {
 const b = require("axios")
  if (event.body.startsWith("ai")){
  let text = event.body;
  let chat = text.split(" ");
  if (chat.length < 2) {
                    api.sendMessage("❌Missing input!", event.threadID, event.messageID);
                } else {
            chat.shift()
    api.sendMessage(`🔍"${chat.join(" ")}"`,event.threadID, event.messageID);
  const res = await b.get(`https://free-api.chatbotcommunity.ltd/others/gpt?prompt=${chat.join(" ")}`);
let resu = res.data.result;
api.sendMessage(resu, event.threadID, event.messageID)
     }
 }
    }