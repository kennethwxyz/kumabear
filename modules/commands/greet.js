module.exports.config = {
	name: "greet",
	version: "1.0.1",
	hasPermssion: 2,
	credits: "ManhG",
	description: "",
	commandCategory: "Other",
	usages: "",
	cooldowns: 10,
	denpendencies: {
		"fs-extra": "",
		"request": ""
	}
};

module.exports.handleEvent = async ({
	event,
	api,
	Users
}) => {
	const fs = global.nodemodule["fs-extra"];
	var {
		threadID,
		messageID,
		body,
		senderID
	} = event;
	const thread = global.data.threadData.get(threadID) || {};
	if (typeof thread["greet"] !== "undefined" && thread["greet"] == false) return;

	let name = await Users.getNameUser(event.senderID);
	if (senderID == api.getCurrentUserID()) return;

	function out(data) {
		api.sendMessage(data, threadID, messageID)
	}

  var morning = ["Goodmorning!", "Goodmorning don't forget to eat your breakfast <3"];
  var rdmmorning = morning[Math.floor(Math.random() * morning.length)];

  var noon = ["Goodafternoon!", "Goodaftieee","Lamon na!!!","tara kain us","aftieeee, wag na kumain magugutom din naman.","Goodaftieee mwaaahh"];
  var rdmnoon = noon[Math.floor(Math.random() * noon.length)];

  var evening = ["Goodevening!", "Kumain ka naba? kung hindi edi don't","Evening mwaaah","Goodeve HAHAHAHA","GOODEVENING, Ako na nalang mag gogoodeve labyu mwahhh"];
  var rdmevening = evening[Math.floor(Math.random() * evening.length)];
  
  var night = ["Goodnight", "Goodnight sleep kana mwahhh!","Goodnight mwahhhh","Goodnight!!! ang aga mo naman matulog"];
  var rdmnight = night[Math.floor(Math.random() * night.length)];

  
var hichthi = ["Hello", "Haiii","Haloo","Hii","Heluuu","Hai"];
  var hellochthi = hichthi[Math.floor(Math.random() * hichthi.length)];


  
	//trả lời
	var msg = {
		body: `${hellochthi} ${name} ${rdmmorning}`,
		attachment: (await global.nodemodule["axios"]({
			url: (await global.nodemodule["axios"]('https://RandomLinkAPI.richardretadaof.repl.co/anya')).data.data,
			method: "GET",
			responseType: "stream"
		})).data
	};
  
    }