module.exports.config = {
  name: "goiadmin",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Jasper",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100049456655701") {
    var aid = ["100023410043559"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Tamo tinatag pa anong satin ha", "aba aba tinatag nga bat ba ha gusto mong mamatay?", "sinasabi ko sayo iba ako magalit bat moba tinatag admin ko, ay be gusto mo naba mamatay?","hala sorry idolo wala pa si Ej ih"," lods pinapsabi ni jian wag modaw sya meniment kasi busy sa pag bbtime."];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}