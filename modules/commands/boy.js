module.exports.config = {
	name: "boy",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "BOT CODER & Re-Made by SaikiDesu",
	description: "Random BOY Photo Random",
	commandCategory: "random-img",
	usages: "boy",
	cooldowns: 3
};

module.exports.run = async ({ api, event, Currencies }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	var money = (await Currencies.getData(event.senderID)).money
	
      if(money < 24000) api.sendMessage("You need 24000 dollars to see the photo!",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 24000})

		axios.get('https://api.j-jrt-official.repl.co/trai.php').then(res => {
      console.log(res)
		var callback = function () {
					api.sendMessage({ 
            body: `Random Photos of BOY\n💸Costs: 24000$`,
						attachment: fs.createReadStream(__dirname + '/cache/boy.jpg')
					}, event.threadID, () => fs.unlinkSync(__dirname + '/cache/boy.jpg'), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/boy.jpg`)).on("close", callback);
			})
      .catch(err => {
                     api.sendMessage("Failed to generate image", event.threadID, event.messageID);
    api.setMessageReaction("☹️", event.messageID, (err) => {}, true);
                  })     
}
                }

         