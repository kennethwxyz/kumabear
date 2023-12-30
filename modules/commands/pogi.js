const axios = require('axios');

module.exports.config = {
  name: "pogisigena1",
  version: "1.0.2",
  hasPermission: 0,
  credits: "Rickciel Modified by Prince Sanel Osorio",
  usePrefix: false,
  description: "pogi sige na no prefix mirai",
  commandCategory: "Fun",
  cooldowns: 2
};

const API_SERVER_URL = 'https://pogi-sige-api.chatbotmesss.repl.co';

module.exports.handleEvent = async ({ api, event }) => {
  if (event.body.toLowerCase() == 'pogi sige na' || event.body.toLowerCase() == 'pogisigena' || event.body.toLowerCase() == 'pogi sigi na' || event.body.toLowerCase() == 'pogi sige' ||
event.body.toLowerCase() == "gago sige na") {
    const response = await axios.get(`${API_SERVER_URL}/api/pogi`);
    const videoUrls = response.data;

    const randomVideoUrl = videoUrls[Math.floor(Math.random() * videoUrls.length)];

    const videoStreamResponse = await axios.get(randomVideoUrl, { responseType: 'stream' });

    const message = {
      body: "Pogi sige na...",
      attachment: videoStreamResponse.data
    };

    await api.sendMessage(message, event.threadID, event.messageID);
  };
};
module.exports.run = async function ({ api, event }) {}