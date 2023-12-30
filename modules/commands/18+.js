module.exports.config = {
  name: "18+",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Joshua Sy",
  description: "lmao",
  commandCategory: "Other",
  usages: "",
    cooldowns: 0,
};
module.exports.run = async function({ api, event, args }) {
    const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
    const res = await axios.get(`https://api.phamvandien.xyz/images/mong`);
    var data = res.data.url;
    var msg = [];
    let img1 = `${res.data.url}`;

    let imgs1 = (await axios.get(`${img1}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/img1.png", Buffer.from(imgs1, "utf-8"));

    var allimage = [];
    allimage.push(fs.createReadStream(__dirname + "/cache/img1.png"));
	
    {
        msg += `here is the picture`
    }
    
    return api.sendMessage({
        body: msg,
        attachment: allimage
    }, event.threadID);
  }