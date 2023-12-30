module.exports.config = {
  name: "sayv2",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mirai Team/Modified By Ciel",
  description: "Make the bot return google's audio file via text",
  commandCategory: "Song/video",
  usages: "[ru/en/ko/ja/tl] [Text]",
  cooldowns: 5,
  dependencies: {
    "path": "",
    "fs-extra": ""
  }
};

module.exports.run = async function({ api, event, args }) {
  try {
    const { createReadStream, unlinkSync } = global.nodemodule["fs-extra"];
    const { resolve } = global.nodemodule["path"];

    var content = (event.type == "message_reply") ? event.messageReply.body : args.join(" ");
    var languageToSay = "";
    var supportedLanguages = ["ru", "en", "ko", "ja", "tl"];

    for (let lang of supportedLanguages) {
      if (content.indexOf(lang) == 0) {
        languageToSay = lang;
        break;
      }
    }

    if (!languageToSay) {
      return api.sendMessage(`Invalid language code. Supported languages: ${supportedLanguages.join(", ")}`, event.threadID, event.messageID);
    }

    var msg = content.slice(languageToSay.length + 1);

    const path = resolve(__dirname, 'cache', `${event.threadID}_${event.senderID}.mp3`);
    await global.utils.downloadFile(`https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(msg)}&tl=${languageToSay}&client=tw-ob`, path);
    return api.sendMessage({ attachment: createReadStream(path) }, event.threadID, () => unlinkSync(path), event.messageID);
  } catch (e) {
    return console.log(e);
  }
};