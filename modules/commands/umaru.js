module.exports.config = {
  name: "umaru",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Kadeer",
  description: "Cuteeee",
  commandCategory: "Random-image",
  usages: "",
  cooldowns: 5
};

module.exports.run = async function({ api, event }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  axios.get('https://apiumaru.khoahoang3.repl.co/').then(res => {
  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let count = res.data.count;
  let callback = function () {
          api.sendMessage({
            body: `🌸umaru của bạn nè <3\n🌸Số ảnh hiện có: ${count} ảnh`,
            attachment: fs.createReadStream(__dirname + `/cache/umaru.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/umaru.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/umaru.${ext}`)).on("close", callback);
      })
}