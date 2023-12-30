const axios = require('axios');

module.exports.config = {
  name: "chainsaw",
  version: "1.0.",
  hasPermission: 0,
  credits: "RICKCIEL",
  usePrefix: true,
  description: "simp",
  commandCategory: "Song/video",
  cooldowns: 2,
};

const API_SERVER_URL = 'https://jjk-api.chatbotmesss.repl.co';

module.exports.run = async ({ api, event }) => {
  try {
    if (event.body.toLowerCase() !== '!chainsaw') {
      return;
    }

    const response = await axios.get(`${API_SERVER_URL}/api/jjk`);
    const videoUrls = response.data;

    const randomVideoUrl = videoUrls[Math.floor(Math.random() * videoUrls.length)];

    const videoStreamResponse = await axios.get(randomVideoUrl, { responseType: 'stream' });

    const message = {
      body: "simp", 
      attachment: videoStreamResponse.data,
    };

    await api.sendMessage(message, event.threadID, event.messageID);
  } catch (error) {
    console.error('Error fetching or sending the video:', error);
    api.sendMessage("Error sending the video.", event.threadID, event.messageID);
  }
};