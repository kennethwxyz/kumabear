const axios = require("axios");

const config = {
  name: "bard",
  version: "1.0.0",
  hasPermission: 0,
  credits: "Anjelo Cayao Arabis",
  description: "bard-based AI with no prefix",
  commandCategory: "no prefix",
  usages: "...",
  cooldowns: 0
};

const handleEvent = async function ({ api, event, client, __GLOBAL }) {
  if (event.body.indexOf("bard") === 0 || event.body.indexOf("Bard") === 0) {
    const { threadID, messageID } = event;
    const input = event.body;
    const message = input.split(" ");
 
    if (message.length < 2) {
      api.sendMessage("Hello! How can I assist you? I am Bard AI. Please ask me a question.", event.threadID);  
    } else {
      try {
        api.sendMessage(`Processing your request "${message.slice(1).join(" ")}", please wait...`, event.threadID);
        const startTime = Date.now();
        const response = await axios.get(`https://bard-ai.arjhilbard.repl.co/bard?ask=${encodeURIComponent(message.slice(1).join(" "))}`);
        const answer = response.data.message;
        const processingTime = Math.floor((Date.now() - startTime) / 1000);

        api.sendMessage(`Time processing: ${processingTime}s\nHere's your request: "${message.slice(1).join(" ")}" \n📜${answer}`, event.threadID);

        api.setMessageReaction("❤️", messageID, (err) => {}, true);
      } catch (err) {
        console.error(err);
        api.sendMessage("I'm currently experiencing difficulties in finding an answer.", event.threadID);
      }
    }
  }
};

const run = function ({ api, event, client, __GLOBAL }) {};

module.exports = { config, handleEvent, run };
