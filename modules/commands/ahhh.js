module.exports.config = {
  name: "omsim",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "random",
  description: "blabla",
  commandCategory: "forfun",
  usages: "type",
  cooldowns: 3,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"", 
""
  ];
	 var callback = () => api.sendMessage({body:`...`,attachment: fs.createReadStream(__dirname + "/cache/jr.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/jr.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/jr.jpg")).on("close",() => callback());
   };