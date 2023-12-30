module.exports.config = {
    name: "noprefixv2",
    version: "1.0.1",
    hasPermssion: 1,
    credits: "Toàn",
    description: "",
    commandCategory: "noprefix",
    usages: "",
    cooldowns: 0,
    denpendencies: {
        "fs-extra": "",
        "request": ""
    }
};

module.exports.handleEvent = async ({ event, api, Users }) => {

    const fs = global.nodemodule["fs-extra"];
    var { threadID, messageID, body, senderID } = event;
    const thread = global.data.threadData.get(threadID) || {};
    var user = global.data.allUserID || {};
     if (typeof user["noprefix"] !== "undefined" && user["noprefix"] == false) return; 
    if (typeof thread["noprefix"] !== "undefined" && thread["noprefix"] == false) return;
    function out(data) {
        api.sendMessage(data, threadID, messageID)
    }
  if (event.body == ("tite") || (event.body == ("teh")) || (event.body == ("titee")) || (event.body == ("titi")) || (event.body == ("junmar")) || (event.body == ("bakla")) || (event.body == ("gay")) || (event.body == ("bayot")) || (event.body == ("pepe")) || (event.body == ("dick")) || (event.body == ("burat"))){
    var job = ['yes,junmar is gay', 'Hello,Tara jakolin moko g ka?', 'burat ', 'tite ko malaki', 'ugh', 'Hi btw kumain kana poba ng tite', 'hello laloves', 'Hello there', 'Hi Crush', '𝗛𝗶 Mahal'];
     let name = await Users.getNameUser(event.senderID)   
     return api.sendMessage({body: job[Math.floor(Math.random() * job.length)] + ` ${name}` ,mentions: [{ tag: name , id: event.senderID }]}, event.threadID, event.messageID);
 }
  };
module.exports.languages = {
    "vi": {
        "on": "Bật",
        "off": "Tắt",
        "successText": "noprefix thành công",
    },
    "en": {
        "on": "on",
        "off": "off",
        "successText": "noprefix success!",
    }
}

module.exports.run = async function({ api, event, Threads, getText }) {
    const { threadID, messageID } = event;
    let data = (await Threads.getData(threadID)).data;
     var user = global.data.allUserID || {};
     const u = data || user
    if (typeof u["noprefix"] == "undefined" || u["noprefix"] == true) u["noprefix"] = false;
    else u["noprefix"] = true;
    await Threads.setData(threadID, { data });
    global.data.threadData.set(threadID, data);
    return api.sendMessage(`${(u["noprefix"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
                                     }