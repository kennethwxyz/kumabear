const fs = require("fs");
module.exports.config = {
    name: "boctham",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "⚡D-Jukie mod by Trun", //Code working của diện , trun mod 
    description: "💴𝐁𝐨̂́𝐜 𝐓𝐡𝐚̆𝐦 𝐯𝐨̛́𝐢 𝐜𝐚́c 𝐠𝐨́𝐢 𝟏𝟎𝐤 𝟐𝟎𝐤 𝟓𝟎𝐤 𝟏𝟎𝟎𝐤 𝟐𝟎𝟎𝐤 𝟓𝟎𝟎𝐤💎",
    commandCategory: "tài chính",
    cooldowns: 5,
    envConfig: {
        cooldownTime: 0 
    },
    denpendencies: {
        "fs": "",
        "request": ""
}
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/cache/`;
    if (!fs.existsSync(dirMaterial + "cache")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "baolixi1.png")) request("https://i.imgur.com/luFyD1C.jpg").pipe(fs.createWriteStream(dirMaterial + "baolixi1.png"));
}
module.exports.handleReply = async ({ event, api, handleReply, Currencies, getText }) => {
    const { threadID, messageID, senderID } = event;
    let data = (await Currencies.getData(senderID)).data || {};
//random coins khi bốc thăm
var a = Math.floor(Math.random() * 8000) + 8000; //random coins khi bốc gói 10k
var b = Math.floor(Math.random() * 8000) + 50000; //random coins khi bốc gói 20k
var c = Math.floor(Math.random() * 80001) + 20000; //random coins khi bốc gói 50k
var d = Math.floor(Math.random() * 8000) + 98000; //random coins khi bốc gói 100k
var e = Math.floor(Math.random() * 8000) + 500000; //random coins khi bốc gói 200k
var f = Math.floor(Math.random() * 800001) + 200000; //random coins khi bốc gói 500k
//random số phần trăm may mắn của năm 2022
var g = ['10%', '20%', '30%', '40%', '50%','60%','70%','80%','90%','100%','200%']; //random % may mắn
var phantram1 = g[Math.floor(Math.random() * g.length)];   

var h = ['10%', '20%', '30%', '40%', '50%','60%','70%','80%','90%','100%','200%']; //random % may mắn
var phantram2 = h[Math.floor(Math.random() * h.length)]; 

var k = ['10%', '20%', '30%', '40%', '50%','60%','70%','80%','90%','100%','200%']; //random % may mắn
var phantram3 = k[Math.floor(Math.random() * k.length)];

var i = ['10%', '20%', '30%', '40%', '50%','60%','70%','80%','90%','100%','200%']; //random % may mắn
var phantram4 = i[Math.floor(Math.random() * i.length)];   

var t = ['10%', '20%', '30%', '40%', '50%','60%','70%','80%','90%','100%','200%']; //random % may mắn
var phantram5 = t[Math.floor(Math.random() * t.length)]; 

var v = ['10%', '20%', '30%', '40%', '50%','60%','70%','80%','90%','100%','200%']; //random % may mắn
var phamtram6 = v[Math.floor(Math.random() * v.length)]; 
var msg = "";
    switch(handleReply.type) {
        case "choosee": {
            
            switch(event.body) {
                case "1": msg = `⚡️𝑉𝑜̛́𝑖 𝑔𝑜́𝑖 10𝑘 𝑏𝑎̣𝑛 đ𝑎̃ 𝑛ℎ𝑎̣̂𝑛 đ𝑐 𝑠𝑜̂́ 𝑡𝑖𝑒̂̀𝑛 𝑙𝑎̀  ${a}vnd 𝑣𝑎̀ 𝑝ℎ𝑎̂̀𝑛 𝑡𝑟𝑎̆𝑚 𝑚𝑎𝑦 𝑚𝑎̆́𝑛 𝑐𝑢̉𝑎 𝑛𝑎̆𝑚 2022 𝑐𝑢̉𝑎 𝑏𝑎̣𝑛 𝑙𝑎̀ : ${phantram1}`; Currencies.increaseMoney(event.senderID, a); break;            
                case "2": msg = `⚡️𝑉𝑜̛́𝑖 𝑔𝑜́𝑖 20𝑘 𝑏𝑎̣𝑛 đ𝑎̃ 𝑛ℎ𝑎̣̂𝑛 đ𝑐 𝑠𝑜̂́ 𝑡𝑖𝑒̂̀𝑛 𝑙𝑎̀  ${b}vnd 𝑣𝑎̀ 𝑝ℎ𝑎̂̀𝑛 𝑡𝑟𝑎̆𝑚 𝑚𝑎𝑦 𝑚𝑎̆́𝑛 𝑐𝑢̉𝑎 𝑛𝑎̆𝑚 2022 𝑐𝑢̉𝑎 𝑏𝑎̣𝑛 𝑙𝑎̀ : ${phantram2}`; Currencies.increaseMoney(event.senderID, b); break;
                case "3": msg =`⚡️𝑉𝑜̛́𝑖 𝑔𝑜́𝑖 50𝑘 𝑏𝑎̣𝑛 đ𝑎̃ 𝑛ℎ𝑎̣̂𝑛 đ𝑐 𝑠𝑜̂́ 𝑡𝑖𝑒̂̀𝑛 𝑙𝑎̀  ${c}vnd 𝑣𝑎̀ 𝑝ℎ𝑎̂̀𝑛 𝑡𝑟𝑎̆𝑚 𝑚𝑎𝑦 𝑚𝑎̆́𝑛 𝑐𝑢̉𝑎 𝑛𝑎̆𝑚 2022 𝑐𝑢̉𝑎 𝑏𝑎̣𝑛 𝑙𝑎̀ : ${phantram3}`; Currencies.increaseMoney(event.senderID, c); break;
                case "4": msg = `⚡️𝑉𝑜̛́𝑖 𝑔𝑜́𝑖 100𝑘 𝑏𝑎̣𝑛 đ𝑎̃ 𝑛ℎ𝑎̣̂𝑛 đ𝑐 𝑠𝑜̂́ 𝑡𝑖𝑒̂̀𝑛 𝑙𝑎̀  ${d}vnd 𝑣𝑎̀ 𝑝ℎ𝑎̂̀𝑛 𝑡𝑟𝑎̆𝑚 𝑚𝑎𝑦 𝑚𝑎̆́𝑛 𝑐𝑢̉𝑎 𝑛𝑎̆𝑚 2022 𝑐𝑢̉𝑎 𝑏𝑎̣𝑛 𝑙𝑎̀ : ${phantram4}`; Currencies.increaseMoney(event.senderID, d); break;            
                case "5": msg =`⚡️𝑉𝑜̛́𝑖 𝑔𝑜́𝑖 200𝑘 𝑏𝑎̣𝑛 đ𝑎̃ 𝑛ℎ𝑎̣̂𝑛 đ𝑐 𝑠𝑜̂́ 𝑡𝑖𝑒̂̀𝑛 𝑙𝑎̀  ${e}vnd 𝑣𝑎̀ 𝑝ℎ𝑎̂̀𝑛 𝑡𝑟𝑎̆𝑚 𝑚𝑎𝑦 𝑚𝑎̆́𝑛 𝑐𝑢̉𝑎 𝑛𝑎̆𝑚 2022 𝑐𝑢̉𝑎 𝑏𝑎̣𝑛 𝑙𝑎̀ : ${phantram5}`;Currencies.increaseMoney(event.senderID, e); break;
                case "6": msg = `⚡️𝑉𝑜̛́𝑖 𝑔𝑜́𝑖 500𝑘 𝑏𝑎̣𝑛 đ𝑎̃ 𝑛ℎ𝑎̣̂𝑛 đ𝑐 𝑠𝑜̂́ 𝑡𝑖𝑒̂̀𝑛 𝑙𝑎̀  ${e}vnd 𝑣𝑎̀ 𝑝ℎ𝑎̂̀𝑛 𝑡𝑟𝑎̆𝑚 𝑚𝑎𝑦 𝑚𝑎̆́𝑛 𝑐𝑢̉𝑎 𝑛𝑎̆𝑚 2022 𝑐𝑢̉𝑎 𝑏𝑎̣𝑛 𝑙𝑎̀ : ${phantram5}`;Currencies.increaseMoney(event.senderID, g); break;
            };
            const choose = parseInt(event.body);
            if (isNaN(event.body)) return api.sendMessage("⚡️Vui lòng nhập 1 con số", event.threadID, event.messageID);
            if (choose > 7 || choose < 1) return api.sendMessage("⚡️Lựa chọn không nằm trong danh sách.", event.threadID, event.messageID); //thay số case vào số 7
            api.unsendMessage(handleReply.messageID);
            if (msg == "⚡️Chưa update...") {
                msg = "⚡️Update soon...";
            };
            return api.sendMessage(`${msg}`, threadID, async () => {
            data.work2Time = Date.now();
            await Currencies.setData(senderID, { data });
            
        });

    };
}
}
module.exports.run = async ({  
    event:e, 
    api, 
    handleReply, 
    Currencies }) => {
    const { threadID, messageID, senderID } = e;
    const cooldown = global.configModule[this.config.name].cooldownTime;
    let data = (await Currencies.getData(senderID)).data || {};
    var   t = Date.parse("February 1, 2022") - Date.parse(new Date()),
    d = Math.floor( t/(1000*60*60*24) ),
    h = Math.floor( (t/(1000*60*60)) % 24 ),
    m = Math.floor( (t/1000/60) % 60 );

    if (typeof data !== "undefined" && cooldown - (Date.now() - data.work2Time) > 0) {

        var time = cooldown - (Date.now() - data.work2Time),
            hours = Math.floor((time / (60000 * 60000 ))/24),
            minutes = Math.floor(time / 60000),
            seconds = ((time % 60000) / 1000).toFixed(0); 
        return api.sendMessage(`💎𝐁𝐚̣𝐧 đ𝐚̃ 𝐧𝐡𝐚̣̂𝐧 𝐛𝐨̂́𝐜 𝐭𝐡𝐚̆𝐦 𝐫𝐨̂̀𝐢, 𝐯𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐪𝐮𝐚𝐲 𝐥𝐚̣𝐢 𝐯𝐚̀𝐨 𝐧𝐠𝐚̀𝐲 𝐦𝐚𝐢💴.\n🌸 𝐓𝐞̂́𝐭 𝐚̂𝐦 𝐥𝐢̣𝐜𝐡 𝐜𝐨̀𝐧 » ${d} 𝐧𝐠𝐚̀𝐲 ${h} 𝐠𝐢𝐨̛̀ ${m} 𝐩𝐡𝐮́𝐭`, e.threadID, e.messageID); // Đoạn này ae có thể để quay lại sau ${housr}giờ ${minutes}phút ${seconds}giây
    }
    else {    
        var msg = {
            body: "🎋𝐁𝐨̂́𝐜 𝐭𝐡𝐚̆𝐦 𝐯𝐚̀ 𝐱𝐞𝐦 𝐩𝐡𝐚̂̀𝐧 𝐭𝐫𝐚̆𝐦 𝐦𝐚𝐲 𝐦𝐚̆́𝐧 𝐧𝐚̆𝐦 𝟐𝟎𝟐𝟐🎋" +
                "\n𝟏.   𝐆𝐨́𝐢 𝟏𝟎𝐤 💴 " +
                "\n𝟐.   𝐆𝐨́𝐢 𝟐𝟎𝐤 💶 " +
                "\n𝟑.   𝐆𝐨́𝐢 𝟓𝟎𝐤 💷 " +
                "\n𝟒.   𝐆𝐨́𝐢 𝟏𝟎𝟎𝐤💸 " +
                "\n𝟓.   𝐆𝐨́𝐢 𝟐𝟎𝟎𝐤💎 " +
                "\n𝟔.   𝐆𝐨́𝐢 𝟓𝟎𝟎𝐤💵 " +
                `\n\n🧨𝐇𝐚̃𝐲 𝐫𝐞𝐩𝐥𝐲 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐜𝐡𝐨̣𝐧 𝐠𝐨́𝐢 𝐭𝐢𝐞̂̀𝐧 đ𝐢 𝐤𝐞̀𝐦 𝐩𝐡𝐚̂̀𝐧 𝐭𝐫𝐚̆𝐦 𝐦𝐚𝐲 𝐦𝐚̆́𝐧 𝐜𝐮̉𝐚 𝐧𝐚̆𝐦 𝟐𝟎𝟐𝟐 𝐦𝐚̀ 𝐛𝐚̣𝐧 𝐦𝐮𝐨̂́𝐧 𝐛𝐨̂́𝐜 𝐭𝐡𝐚̆𝐦.`,
                attachment: fs.createReadStream(__dirname + `/cache/baolixi1.png`)}
                return api.sendMessage(msg,e.threadID,  (error, info) => {
                data.work2Time = Date.now();
        global.client.handleReply.push({
            type: "choosee",
            name: this.config.name,
            author: e.senderID,
            messageID: info.messageID
          })  
        })
    }
}
