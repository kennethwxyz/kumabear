 module.exports.config = {
                name: "adminonly",
                version: "2.0",
                hasPermssion: 1,
                credits: "Horizon Lucius",
                description: "Exclusive Mode For QTV And Admin bot",
                commandCategory: "Penguin",
                usages: "Jush On/Off",
                cooldowns: 5
            };
            module.exports.onLoad = async function () {
                const { writeFileSync, existsSync } = require("fs-extra");
                    const { resolve } = require("path");
                    const path = resolve(global.client.mainPath ,'includes','AdminOnly.json');
                if (!existsSync(path)) {writeFileSync(path, "[]", "utf-8");}
            };
            module.exports.run = async function ({ api, event , args }) {
                const { readFileSync, writeFileSync } = require("fs-extra");
                    const { join } = require("path");
                        const pathData = join(global.client.mainPath ,'includes','AdminOnly.json');
                    var Data2a = JSON.parse(readFileSync(pathData, "utf-8"));
                var thisThread = await Data2a.find(item => item.Misc == event.threadID) || { Misc: event.threadID, Status: 1,Onlist: [] };
                if (!Data2a.some(item => item.Misc == event.threadID)) { Data2a.push(thisThread);writeFileSync(pathData, JSON.stringify(Data2a, null ,4), "utf-8");}
                    if (thisThread.Status == 1) {
                        thisThread.Status = 2;
                        writeFileSync(pathData, JSON.stringify(Data2a, null ,4), "utf-8");
                    return api.sendMessage("admin only",event.threadID); 
                } 
                else if (thisThread.Status == 2) {
                    thisThread.Status = 1;
                        writeFileSync(pathData, JSON.stringify(Data2a, null ,4), "utf-8");
                    return api.sendMessage("❄💢🔥Đã Tắ🆃 C🅷ế Độ A🅳🅼🅸🅽O🅽🅻🆈 T🅷à🅽🅷 Cô🅽🅶 💢🔥",event.threadID);
                }
            }; // oẹ