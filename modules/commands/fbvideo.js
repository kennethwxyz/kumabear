module.exports.config = {
    name: "fbvideo",
    version: "1.0.3",
    hasPermssion: 0,
    credits: "",
    description: "video facebook",
    commandCategory: "",
    cooldowns: 5,
    dependencies: {
        "axios": ""
    }
};
module.exports.run = async function({
    api,
    event,
    getText,
    args
}) {
    try {
    const rd = Math.floor(Math.random() * 99999999999)
    const a = require("axios");
    const fs = require("fs-extra");
    const r = await a.get(`http://www.thieutrungkien.xyz/videodl?url=${args[0]}`);
    if (r.data.url.hd == "false") {
        api.sendMessage("Dahil wala ang video na ito sa kalidad ng HD, awtomatiko nitong ida-download ang video sa kalidad ng SD", event.threadID);
        const sd = r.data.url.sd;
        const p = __dirname + `/cache/${rd}.mp4`;
        let k = (await a.get(`${sd}`, {

            responseType: 'arraybuffer'

        })).data;
        fs.writeFileSync(p, Buffer.from(k, "utf-8"));

        return api.sendMessage({
            body: "",
            attachment: fs.createReadStream(p)
        }, event.threadID, (() => fs.unlinkSync(p)), event.messageID);
    }
    else {
    const hd = r.data.url.hd;
    const o = __dirname + `/cache/${rd}.mp4`;
    let h = (await a.get(`${hd}`, {

        responseType: 'arraybuffer'

    })).data;
    fs.writeFileSync(o, Buffer.from(h, "utf-8"));

    return api.sendMessage({
        body: "",
        attachment: fs.createReadStream(o)
    }, event.threadID, (() => fs.unlinkSync(o)), event.messageID);
}
} catch(e) {
    console.log(e)
    return api.sendMessage(`Error! Nagkaroon ng error. Pakisubukang muli sa ibang pagkakataon`, event.threadID);
}
          }