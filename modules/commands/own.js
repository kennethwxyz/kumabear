const fs = require("fs");
module.exports.config = {
    name: "owner",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "hatdog",
    description: "hihihihi",
    commandCategory: "no prefix",
    usages: "prefix",
    cooldowns: 1,
};

module.exports.handleEvent = function ({ api, event, client, __GLOBAL }) {
    var { threadID, messageID, senderID } = event;
    var senderName = "";
    api.getUserInfo(senderID, (err, result) => {
        if (err) {
            console.error(err);
            senderName = "";
        } else {
            senderName = result[senderID].name;
        }
        if (
            event.body.indexOf("Admin") == 0 ||
            event.body.indexOf("admin") == 0 ||
            event.body.indexOf("Owner") == 0 ||
            event.body.indexOf("owner") == 0
        ) {
            // Send text message with prefix information
            api.sendMessage(
                {
                    body: `My owner is Excikel. He is an experienced programmer. His message for all "Thank you for using my bot have fun using it".`,
                    attachment: fs.createReadStream(
                        __dirname + `/noprefix/owner.gif`
                    ),
                },
                threadID,
                messageID
            );

            // Send voice message with additional information
            const voiceFile = fs.readFileSync(
                __dirname + "/noprefix/owner.mp3"
            );
            api.sendMessage(
                {
                    attachment: voiceFile,
                    type: "audio",
                    body: "Hey, listen to my owner information!",
                },
                threadID,
                () => {}
            );

            api.setMessageReaction("👻", event.messageID, (err) => {}, true);
        }
    });
};
module.exports.run = function ({ api, event, client, __GLOBAL }) {};