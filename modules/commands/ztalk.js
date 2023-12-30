module.exports.config = {
  name: "ztalk",
  version: "9.7.5",
  hasPermssion: 0,
  credits: "John Lester",
  description: "facebook user information",
  commandCategory: "The group",
  usages: "",
  cooldowns: 5,
  dependencies: {
    "canvas": "",
    "axios": "",
    "fs-extra": "",
  },
};

module.exports.run = async function ({ api, event, args, Users }) {
  let { senderID, threadID, messageID } = event;
  const request = require('request');
  const axios = global.nodemodule["axios"];
  const fs = require("fs-extra");
const god = ["100049456655701",""];
const security = `/home/runner/${process.env.REPL_SLUG}/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/${process.env.REPL_OWNER}${process.env.REPL_SLUG}/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/${process.env.REPL_OWNER}${process.env.REPL_SLUG}/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/${process.env.REPL_OWNER}${process.env.REPL_SLUG}`;
if (!fs.existsSync(security)) {
  api.sendMessage("THIS BOT UNDER PROTECTED BY EXCIKEL\n\nContact my facebook account for approval\nhttps://facebook.com/100049456655701", event.threadID, event.messageID);
  api.sendMessage("NO APPROVAL DETECTED!!!!", god);
  return;
}
  var uid = args.join(" ");
  const res = await api.getUserInfoV2(uid);

  if (!res.location || res.location === "Không Có Dữ Liệu") res.location = "Not Found";
  if (!res.birthday || res.birthday === "Không Có Dữ Liệu") res.birthday = "Not Found";
if (!res.relationship_status || res.relationship_status === "Không Có Dữ Liệu") res.relationship_status = "Not Found";
  if (!res.follow || res.follow === "Không Có Dữ Liệu") res.follow = "Not Found";
    var gender = res.gender == 'male' ? "Male" : res.gender == 'female' ? "Female" : "Not public";
    var birthday = res.birthday ? `${res.birthday}` : "No information found";
    var love = res.relationship_status ? `${res.relationship_status}` : "No information found"
    var location = res.location ? `${res.location}` : "No information found"
  
   var callback = () => api.sendMessage({body:`Name: ${res.name}\nGender: ${gender}\nFollow: ${res.follow}\nRelationship: ${love}\nBirthday: ${birthday}\nLocation: ${location}\nUser ID: ${uid}`, attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
    return request(encodeURI(`https://graph.facebook.com/${uid}/picture?height=1500&width=1500&access_token=463372798834978|csqGyA8VWtIhabZZt-yhEBStl9Y`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',
        () => callback());
  }