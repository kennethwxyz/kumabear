module.exports.config = {
	name: "18++",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "John Arida",
	description: "random 18++ images",
	commandCategory: "Random-IMG",
	usages: "...",
	cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://apituandz1407.herokuapp.com/api/nude.php').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/69.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/69.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/69.${ext}`)).on("close", callback);
			})
            }