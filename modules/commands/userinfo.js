module.exports.config = {
name: "userinfo",
version: "1.0.0",
hasPermssion: 0,
credits: "BraSL",
description: "Create banner images on TTK's api",
commandCategory: "photoshop",
usages: "Create banner images on TTK's api",
cooldowns: 0,
dependencies: {
    "fs-extra": "",
    "request": "",
    "axios": "",
 },
};
module.exports.run = async function ({ api, args, event, permssion }) {
		  

   var _0xeccc=["\x72\x65\x71\x75\x65\x73\x74","\x66\x73\x2D\x65\x78\x74\x72\x61","\x61\x78\x69\x6F\x73","\x72\x65\x70\x6C\x79\x20\x74\x69\x6E\x20\x6E\x68\u1EAF\x6E\x20\u0111\u1EC3\x20\x6E\x68\u1EAD\x70\x20\x74\xEA\x6E","\x74\x68\x72\x65\x61\x64\x49\x44","\x6E\x61\x6D\x65\x6D\x65","\x75\x73\x65\x72\x69\x6E\x66\x6F","\x20","\x6A\x6F\x69\x6E","\x6D\x65\x73\x73\x61\x67\x65\x49\x44","\x70\x75\x73\x68","\x68\x61\x6E\x64\x6C\x65\x52\x65\x70\x6C\x79","\x63\x6C\x69\x65\x6E\x74","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];const request=require(_0xeccc[0]);const fs=require(_0xeccc[1]);const axios=require(_0xeccc[2]);const {threadID,messageID,senderID,body}=event;return api[_0xeccc[13]](`${_0xeccc[3]}`,event[_0xeccc[4]],(_0x215ex4,_0x215ex5)=>{return global[_0xeccc[12]][_0xeccc[11]][_0xeccc[10]]({type:_0xeccc[5],name:_0xeccc[6],author:senderID,tenchinh:args[_0xeccc[8]](_0xeccc[7]),messageID:_0x215ex5[_0xeccc[9]]})},event[_0xeccc[9]])
}
module.exports.handleReply = async function ({ api, event, args, handleReply, client, __GLOBAL, Threads, Users, Currencies }) {
	const axios = require("axios");
    const fs = require("fs-extra");
    const request = require("request");
    var info = await api.getUserInfo(event.senderID);
    var nameSender = info[event.senderID].name;
    var arraytag = [];
        arraytag.push({id: event.senderID, tag: nameSender});
    if (handleReply.author != event.senderID) return;
    const { threadID,messageID,senderID} = event;
    
       const noidung = handleReply.noidung;
    switch (handleReply.type) {
 case "nameme": { 
        	api.unsendMessage(handleReply.messageID);
        	return api.sendMessage(`🔍You entered the name ${event.body}\n(Reply this message to enter the address)`,threadID , function (err, info) { 
        	  return global.client.handleReply.push({ 
        	  	type: 'address',
        	  	name: 'userinfo',
        	  	author: senderID,
              tenchinh: handleReply.tenchinh,
              nameme: event.body,
        	  	messageID: info.messageID
        	  })
        	}, messageID);
        }

       case "address": { 
        	api.unsendMessage(handleReply.messageID);
        	return api.sendMessage(`🔍You entered the address as ${event.body}\n(Reply to this message to enter gender)`,threadID , function (err, info) { 
        	  return global.client.handleReply.push({ 
        	  	type: 'create',
        	  	name: 'userinfo',
        	  	author: senderID,
              tenchinh: handleReply.tenchinh,
              nameme: handleReply.nameme,
              address: event.body,
        	  	messageID: info.messageID
        	  })
        	}, messageID);
        }
	/*	case "address": {
      api.unsendMessage(handleReply.messageID);
      return api.sendMessage(`🔍 You entered your name as ${event.body}\n(Reply to this message enter your address)`,event.threadID, (err, info) => {
        return global.client.handleReply.push({
          type: "sex",
          name: 'userinfo',
        	  	author: senderID,
               tenchinh: handleReply.tenchinh,
               address: event.body,
        	  	messageID: info.messageID
        });
      },messageID) 
    }*/
  /*  case "sex": { 
        	api.unsendMessage(handleReply.messageID);
        	return api.sendMessage(`🔍You have chosen the address as ${event.body}\n(Reply to this message to enter gender)`,threadID , function (err, info) { 
        		return global.client.handleReply.push({ 
        			type: 'create',
        			name: 'userinfo',
        			author: senderID,
        			tenchinh: handleReply.name,
              address: handleReply.address,
              nameme: handleReply.nameme,
        			sex: event.body,
        			messageID: info.messageID
        		})
        	}, messageID);
        }*/
		
        case "create": {
		     	var sex = event.body;
            var nameme = handleReply.nameme;
            var address = handleReply.address;
            api.unsendMessage(handleReply.messageID);
            api.sendMessage(`⏳ Initializing the image maker!`,threadID, (err, info) => {
            setTimeout(() => {
            	api.unsendMessage(info.messageID);
            	var callback = () => api.sendMessage({body:`This is the banner photo of ${nameSender}`,mentions: arraytag,attachment: fs.createReadStream(__dirname + "/cache/fbcover.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/fbcover.png"),event.messageID);
			return request(encodeURI(`https://api-ttk.herokuapp.com/canvas/userinfo?location=${address}&name=${nameme}&gender=${sex}&vanity=${senderID}&uid=${senderID}`)).pipe(fs.createWriteStream(__dirname + '/cache/fbcover.png')).on('close', () => callback());
            }, 1000);
          }, messageID);
        }
   }
  }