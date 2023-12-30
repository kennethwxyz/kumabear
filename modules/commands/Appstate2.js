const axios = require("axios");

module.exports.config = {
  name: "appstate2",
  version: "1.0.0",
  hasPermission: 0,
  credits: "Anjelo Cayao Arabis",
  description: "Get app state from the specified Facebook user.",
  commandCategory: "facebook",
  usages: "[uid] [password]",
  cooldowns: 5,
};

module.exports.run = async ({ api, event, args }) => {
  const [uid, password] = args;

  if (!uid || !password) {
    return api.sendMessage("Please provide both the Facebook UID and password.", event.threadID);
  }

  try {
    const apiUrl = `https://apis.richardretada-official.repl.co/facebook/appstate?uid=${uid}&password=${password}`;
    const response = await axios.get(apiUrl);
    const data = response.data;

    if (data.error) {
      return api.sendMessage(data.error, event.threadID);
    } else {
      return api.sendMessage(`App State for UID ${uid}:\n${JSON.stringify(data, null, 2)}`, event.threadID);
    }
  } catch (error) {
    console.error(error);
    return api.sendMessage("Failed to fetch app state. Please try again later.", event.threadID);
  }
};