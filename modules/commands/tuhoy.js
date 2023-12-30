module.exports.config = {
  name: "truth",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "John Arida",
  usages: "...",
  description: "truth",
  commandCategory: "text",
    cooldowns: 2,
};
module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
const res = await axios.get(`https://api-toxic-devil.herokuapp.com/api/truth-or-dare/truth?lang=en`);
var re = res.data.result.truth;
return api.sendMessage(`${re}`, event.threadID, event.messageID)
  }