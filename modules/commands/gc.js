module.exports.config = {
 name: "gc",
 version: "1.0.0", 
 hasPermssion: 0,
 credits: "neph",//ntkhang fix :( 
 description: "...",
 commandCategory: "Command admin/qtv", 
 usages: "gc", 
 cooldowns: 0,
 dependencies: {
   "request": "",
   "fs-extra":"",
   "axios":""
}};
module.exports.handleReply = async ({ event, api, handleReply, Threads }) => {
    var { threadID, messageID, body, senderID } = event;
    var { threadList, author } = handleReply;
    if (senderID != author) return;
    api.unsendMessage(handleReply.messageID);
    if (!body || !parseInt(body)) return api.sendMessage('Your selection must be a number.', threadID, messageID);
    if (!threadList[parseInt(body) - 1]) return api.sendMessage("Your pick is not on the list", threadID, messageID);
    else {
        try {
            var threadInfo = threadList[parseInt(body) - 1];
            var { participantIDs } = threadInfo;
            if (participantIDs.includes(senderID)) return api.sendMessage('You are already in this group.', threadID, messageID);
            api.addUserToGroup(senderID, threadInfo.threadID, (e) => {
              if (e) api.sendMessage(`Error! An error occurred. Please try again later: ${e.errorDescription}`, threadID, messageID);
              else api.sendMessage(`The bot added you to the group ${threadInfo.name} then nka. Check in the spam or waiting message section if you don't see the nka box.`, threadID, messageID);
            });
        }
        catch (error) {
            return api.sendMessage(`:( I got an error: ${error}`, threadID, messageID);
        }
    }
};

module.exports. run = async function({ api, event, Threads }) {
    var { threadID, messageID, senderID } = event;
    var allThreads = (await api.getThreadList(500, null, ["INBOX"])).filter(i => i.isGroup),
    msg = `List of all the boxes you can join:\n\n`,
    number = 0;
    for (var thread of allThreads) {
        number++;
        msg += `${number}. ${thread.name}\n`;
    }
    msg += `\nReply to this message with the number corresponding to the box you want to enter.`;
    return api.sendMessage(msg, threadID, (error, info) => {
        global.client.handleReply.push({
            name: this.config. name,
            messageID: info.messageID,
            author: senderID,
            threadList: allThreads
       
        });
    }, messageID);
};