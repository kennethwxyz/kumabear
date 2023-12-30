module.exports.config = {
  name: "stalk",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Arjhil",
  description: "Get User Information.",
  commandCategory: "other",
  cooldowns: 5
};

module.exports.run = async function ({ api, event, args }) {
  let { threadID, senderID, messageID } = event;

  const getUserInfo = async (targetID) => {
    try {
      const threadInfo = await api.getThreadInfo(threadID);
      const userInfo = await api.getUserInfo(targetID);

      const userName = userInfo[targetID].name || "Name not available";
      const uid = targetID;
      const gender = userInfo[targetID].gender || "Gender not available";
      const birthday = userInfo[targetID].birthday || "Birthday not available";

      // Get user creation timestamp and format as date & time
      const creationTimestamp = userInfo[targetID].creationTimestamp || 0;
      const creationDate = new Date(creationTimestamp * 1000);
      const formattedCreationDate = creationDate.toLocaleString();

      // Construct Facebook profile link
      const fbLink = `https://www.facebook.com/profile.php?id=${uid}`;

      const userInfoMessage = `
User Name: ${userName}
UID: ${uid}
Gender: ${gender}
Birthday: ${birthday}
Account Created Date & Time: ${formattedCreationDate}
Facebook Link: ${fbLink}
      `;

      api.sendMessage(userInfoMessage, threadID, messageID);
    } catch (error) {
      console.error(error);
      api.sendMessage("An error occurred while fetching user information.", threadID, messageID);
    }
  };

  if (!args[0]) {
    // If no UID is provided, use the sender's UID
    getUserInfo(senderID);
  } else if (args[0].indexOf("@") !== -1) {
    // If the message mentions a user, extract UID from mentions
    const mentionedUID = Object.keys(event.mentions)[0];
    if (mentionedUID) {
      getUserInfo(mentionedUID);
    }
  } else {
    api.sendMessage("Invalid command usage. Use `Stalk` or `stalk @mention`.", threadID, messageID);
  }
};