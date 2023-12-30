module.exports.config = {
  name: 'zim',
  version: '1.1.1',
  hasPermssion: 0,
  credits: 'Deku',
  description: 'ChatGPT',
  commandCategory: '....',
  usages: '[prompt] or zim [prompt](no prefix)',
  cooldowns: 0,
};

module.exports.run = async function({ api, event, args }) {
 const b = require('axios');
  let txt = args.join(" ");
  if (!txt){ return api.sendMessage("wrong input ^^", event.threadID, event.messageID)
}
api.sendMessage(`» "${txt}"`,event.threadID, event.messageID);
  const res = await b.get(`https://sim.ainz-project.repl.co/others/gpt?prompt=${txt}`);
let resu = res.data.result;
api.sendMessage(resu, event.threadID, event.messageID)
}
module.exports.handleEvent = async function({ api, event, args }) {
 const b = require("axios")
  if (event.body.startsWith("kim")){
  let text = event.body;
  let chat = text.split(" ");
  if (chat.length < 2) {
                    api.sendMessage("ask a question", event.threadID, event.messageID);
                } else {
            chat.shift()
    api.sendMessage(`» "${chat.join(" ")}"`,event.threadID, event.messageID);
  const res = await b.get(`https://sim.ainz-project.repl.co/others/gpt?prompt=${chat.join(" ")}`);
let resu = res.data.result;
api.sendMessage(resu, event.threadID, event.messageID)
     }
 }
                                     }