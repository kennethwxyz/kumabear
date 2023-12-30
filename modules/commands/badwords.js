module.exports.config = {
  name: "badwords",
  version: "1.0.1",
  hasPermission: "0",
  credits: "Lienathan",
  description: "no prefix",
  commandCategory: "no need to use prefix",
  cooldowns: 5,
};

module.exports.handleEvent = function ({ api, event, client_Global }) {
  var { threadID, messageID } = event;
  if (
    event.body.indexOf("bobo") !== -1 ||
    event.body.indexOf("bovo") !== -1 ||
    event.body.indexOf("pakyu") !== -1 ||
    event.body.indexOf("inutil") !== -1 ||
    event.body.indexOf("gago") !== -1 ||
    event.body.indexOf("Gago") !== -1 ||
    event.body.indexOf("tanga") !== -1 ||
    event.body.indexOf("Tanga mo") !== -1 ||
    event.body.indexOf("tang ina") !== -1 ||
  ) {
    var msg = ["ako lang pwede nag mura dito tanga.","bawal mag mura dito tanga!!", "kulit mo sabing bawal mag mura!!Gago ampt tarantado kulit mo e.",];
    var randomMsg = msg[Math.floor(Math.random() * msg.length)];
    api.sendMessage({ body: randomMsg }, threadID);
    api.setMessageReaction("😡", messageID, (err) => {}, true);
  }
};

module.exports.run = function ({ api, event, client_GLOBAL }) {
  
};