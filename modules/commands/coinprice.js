module.exports.config = {
	name: "coinprice",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "tdunguwu",
	description: "random text",
	commandCategory: "Random Text",
	usages: "",
	cooldowns: 5,
	dependencies: {
		"axios":""}
	
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
const res = await axios.get(`https://api-toxic-devil.herokuapp.com/api/search/google-image?query=TOXIC-DEVIL`);
var result = res.data.result.;
return api.sendMessage(`${data[0]}`, event.threadID, event.messageID)
}