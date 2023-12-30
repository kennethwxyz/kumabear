const fs = require("fs");

module.exports.config = {
    name: "getappstate",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "Arjhil",//Dont change the credits
    description: "",
    commandCategory: "ADMIN",
    usages: ""
}
module.exports.run = async function ({ api, event }) {
    const appstate = JSON.stringify(api.getAppState(), null, 2);
    const pathSave = `${__dirname}/cache/appstate.json`;
    fs.writeFileSync(pathSave, appstate);
    if (event.senderID != event.threadID) {
        api.sendMessage({
            body: `here your Appstate.`,
            attachment: fs.createReadStream(pathSave)
        }, event.senderID, () => {
            api.sendMessage("Sent Appstate in private message.", event.threadID);
            fs.unlinkSync(pathSave);
        });
    }
};