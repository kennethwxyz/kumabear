const fs = require("fs");
const moment = require("moment-timezone");

module.exports.config = {
    name: "Antiaddbot",
    version: "1.2.0",
    hasPermssion: 2,
    credits: "JOHN RÉ PORAS",
    description: "Prevent users from adding Rey Bot to other groups without approval.",
    commandCategory: "Settings",
    cooldowns: 0
};

module.exports.handleEvent = async function({ api, event }) {
    if (event.type === "thread-add" && event.author) {
        const authorID = event.author;
        const threadID = event.threadID;
        const botAdmins = getBotAdmins();
        const botOwnerID = botAdmins[0]; 

        if (botAdmins.includes(authorID)) {
            return;
        }

        api.sendMessage("You don't have permission to add me to other groups.", authorID);

        const threadInfo = await api.getThreadInfo(threadID);
        const threadName = threadInfo.threadName || "this group";
        const timestamp = moment.tz("Asia/Manila").format("YYYY-MM-DD HH:mm:ss");
        const adminMessage = `${event.senderID} is trying to add me to ${threadName} at ${timestamp}.`;
        api.sendMessage(adminMessage, botOwnerID);
    }
};

function getBotAdmins() {
    try {
        const data = fs.readFileSync(__dirname + "/bot_admins.json", "utf-8");
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
  }
  