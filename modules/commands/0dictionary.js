const axios = require("axios");

module.exports.config = {
  name: "dictionary",
  version: "1.0.0",
  hasPermission: 0,
  credits: "Anjelo Cayao Arabis",
  description: "Get the urban dictionary definition for the specified word.",
  commandCategory: "fun",
  usages: "[word]",
  cooldowns: 5,
};

module.exports.run = async ({ api, event, args }) => {
  const word = args.join(" ");

  if (!word) {
    return api.sendMessage("Please provide a word to look up in the dictionary.", event.threadID);
  }

  try {
    const response = await axios.get(`https://yukihiraaofficial.yukihirasomaa.repl.co/dictionary?word=${encodeURIComponent(word)}`);
    const data = response.data;

    if (data.error) {
      return api.sendMessage(data.error, event.threadID);
    } else {
      return api.sendMessage(data.definition, event.threadID);
    }
  } catch (error) {
    console.error(error);
    return api.sendMessage("Failed to fetch urban dictionary definition. Please try again later.", event.threadID);
  }
};