const { loadImage, createCanvas } = require("canvas");
const fs = global.nodemodule["fs-extra"];
const axios = global.nodemodule["axios"];

const pathImg = __dirname + "/noprefix/rankup/rankup.png";
const pathAvt1 = __dirname + "/cache/Avtmot.png";

module.exports.config = {
  name: "rankup",
  version: "30.0.0",
  hasPermssion: 1,
  credits: "cypruspro21k",
  description: "Mag-anunsyo ng rankup para sa bawat grupo at user",
  commandCategory: "Edit-IMG",
  dependencies: {
    "fs-extra": ""
  },
  cooldowns: 2,
};

module.exports.handleEvent = async function({ api, event, Currencies, Users, getText }) {
  var { threadID, senderID } = event;
  threadID = String(threadID);
  senderID = String(senderID);

  const thread = global.data.threadData.get(threadID) || {};

  let exp = (await Currencies.getData(senderID)).exp;
  exp = exp += 1;

  if (isNaN(exp)) return;

  if (typeof thread["rankup"] != "undefined" && !thread["rankup"]) {
    await Currencies.setData(senderID, { exp });
    return;
  };

  const curLevel = Math.floor((Math.sqrt(1 + (4 * exp / 3) + 1) / 2));
  const level = Math.floor((Math.sqrt(1 + (4 * (exp + 1) / 3) + 1) / 2));

  if (level > curLevel && level != 1) {
    const name = global.data.userName.get(senderID) || await Users.getNameUser(senderID);
    const message = (typeof thread.customRankup == "undefined") ? getText("levelup", { name, level }, "tl") : thread.customRankup;

    const background = [
      "https://ibb.co/sWpRwTS"
    ];
    const rd = background[Math.floor(Math.random() * background.length)];

    const getAvtmot = (
      await axios.get(
        `https://graph.facebook.com/${senderID}/picture?width=720&height=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`,
        { responseType: "arraybuffer" }
      )
    ).data;
    fs.writeFileSync(pathAvt1, Buffer.from(getAvtmot, "utf-8"));

    const getbackground = (
      await axios.get(rd, {
        responseType: "arraybuffer",
      })
    ).data;
    fs.writeFileSync(pathImg, Buffer.from(getbackground, "utf-8"));

    const baseImage = await loadImage(pathImg);
    const baseAvt1 = await loadImage(pathAvt1);
    const canvas = createCanvas(baseImage.width, baseImage.height);
    const ctx = canvas.getContext("2d");

    // Draw the background image
    ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);

    // Define the new circle radius based on the desired width and height
    const circleWidth = 273.0;
    const circleHeight = 273.0;
    const circleRadius = Math.min(circleWidth, circleHeight) / 2;

    // Calculate the new clipping position to center the circular avatar image
    const circleX = 1071.88 - circleRadius; // X-coordinate of the circle's top-left corner
    const circleY = 211.00 - circleRadius; // Y-coordinate of the circle's top-left corner

    // Draw the circular avatar image
    ctx.beginPath();
    ctx.arc(circleX + circleRadius, circleY + circleRadius, circleRadius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip(); // Clip the canvas to the circular path

    // Calculate the new size for the avatar image based on the circle radius
    const avatarSize = circleRadius * 2;
    ctx.drawImage(baseAvt1, circleX, circleY, avatarSize, avatarSize); // Draw the avatar image

    const imageBuffer = canvas.toBuffer();
    fs.writeFileSync(pathImg, imageBuffer);
    fs.removeSync(pathAvt1);

    api.sendMessage({ body: message, mentions: [{ tag: name, id: senderID }], attachment: fs.createReadStream(pathImg) }, event.threadID, () => fs.unlinkSync(pathImg));
  }

  await Currencies.setData(senderID, { exp });
  return;
}

module.exports.languages = {
  "tl": {
    "off": "tumigil",
    "on": "bukas",
    "successText": "tagumpay na notipikasyon sa rankup!",
    "levelup": "{name}, narating mo na ang antas ng iyong keyboard hero sa antas {level}",
  },
  "en": {
    "on": "on",
    "off": "off",
    "successText": "success notification rankup!",
    "levelup": "{name}, your keyboard hero level has reached level {level}",
  }
};

module.exports.run = async function({ api, event, Threads, getText }) {
  const { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;

  if (typeof data["rankup"] == "undefined" || data["rankup"] == false) data["rankup"] = true;
  else data["rankup"] = false;

  await Threads.setData(threadID, { data });
  global.data.threadData.set(threadID, data);
  return api.sendMessage(`${(data["rankup"] == true) ? getText("on", {}, "tl") : getText("off", {}, "tl")} ${getText("successText", {}, "tl")}`, threadID, messageID);
};
