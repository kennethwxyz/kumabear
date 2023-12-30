module.exports.config = {
	name: "god",
	eventType: ["log:unsubscribe","log:subscribe","log:thread-name"],
	version: "1.0.0",
	credits: "Mirai Team",
	description: "Ghi lại thông báo các hoạt đông của bot!",
    envConfig: {
        enable: true
    }
};

module.exports.run = async function({ api, event, Threads, args, Users }) {
	
	 var datathread = await api.getThreadInfo(event.threadID);
     var namethread = datathread.name;
	 
    const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss D/MM/YYYY");
	
    const logger = require("../../utils/log");
    if (!global.configModule[this.config.name].enable) return;
    var formReport =  "•——𝗕𝗼𝘁 𝗡𝗼𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻——•" +
	                "\n-----------------------\n» 𝖦𝗋𝗈𝗎𝗉𝖭𝖺𝗆𝖾: " + `${namethread}` +
                        "\n» 𝖳𝗂𝖽 𝖨'𝖽: " + event.threadID +
                        "\n» 𝖳𝖺𝗌𝗄: {task}" +
                        "\n» 𝖭𝖺𝗆𝖾: " + (await Users.getData(event.author)).name +
                        "\n» 𝖴𝗌𝖾𝗋𝖨𝖣 : \n» " + event.author + " «" +
                        "\n» " + Date.now() +" «" +
			"\n-----------------------\n" +
			`Time: ${gio}`,
						
	   task = "";
	
    switch (event.logMessageType) {
        case "log:thread-name": {
            const oldName = (await Threads.getData(event.threadID)).name || "Name does not exist",
                    newName = event.logMessageData.name || "Walang pangalan";
            task = "The user changed the group name from: '" + oldName + "' defense '" + newName + "'";
            await Threads.setData(event.threadID, {name: newName});
            break;
        }
        case "log:subscribe": {
            if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) task = "added by group!";
            break;
        }
        case "log:unsubscribe": {
            if (event.logMessageData.leftParticipantFbId== api.getCurrentUserID()) task = "Bot has been kicked out of the group!"
            break;
        }
        default: 
            break;
    }

        if (task.length == 0) return;

    formReport = formReport
    .replace(/\{task}/g, task);
  var god = "100049456655701";

    return api.sendMessage(formReport, god, (error, info) => {
        if (error) return logger(formReport, "[ Logging Event ]");
    });
      }