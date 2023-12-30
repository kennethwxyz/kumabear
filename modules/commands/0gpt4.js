const axios = require('axios');

module.exports = {
  config: {
    name: "ai",
    aliases: [],
    version: 2.0,
    author: "Jun",
    shortDescription: "gpt-4",
    category: "ai"
  },
  onStart: async function({ message, usersData, event, api, args }) {
    try {
      const prompt = args.join(" ");
      const id = event.senderID;
      const userData = await usersData.get(id);
      const name = userData.name;
      if (event.messageReply && event.messageReply.attachments) {
        const link = event.messageReply.attachments[0].url;
        const encodedLink = encodeURIComponent(link);

        const res = await axios.get(`https://alln1.gay-api.repl.co/images/api?prompt=${prompt}%20${encodedLink}`);
        const m = res.data.result;
        const av = res.data.av;
 const array = [{ id: id, tag: name }];
const g = m.replace(/{name}/g, name);
        if (av) {
          message.reply({
            body: g,
            mentions: array,
            attachment: await global.utils.getStreamFromURL(av)
          });
        } else {
          message.reply({
            body: g,
            mentions: array
          });
        }
      } else {
        const b = "repl";
        const apikey = `&name=${name}&id=${id}`; //don't modify this, it's important for 50 requests per day per user
        const res = await axios.get(`https://api.whahhh.${b}.co/test?prompt=${prompt}${apikey}`);
        const m = res.data.result;
        const av = res.data.av;
        const array = [{ id: id, tag: name }];
        const g = m.replace(/{name}/g, name);
        if (av) {
          message.reply({
            body: g,
            mentions: array,
            attachment: await global.utils.getStreamFromURL(av)
          });
        } else {
          message.reply({
            body: g,
            mentions: array
          });
        }
      }
    } catch (error) {
      message.reply("error bro");
    }
  }
};