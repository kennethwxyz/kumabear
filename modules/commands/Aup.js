const fetch = require('node-fetch');

const os = require('os');

const maxCpu = os.cpus().length;

const maxRam = os.totalmem();

const maxRamInGB = (maxRam / 1024 / 1024 / 1024 / 30).toFixed(2);

const fs = require('fs');

const language = process.env.REPL_LANGUAGE;

const platform = os.platform();

const architecture = os.arch();

const cpuModel = os.cpus()[0].model;

const uptime = os.uptime();

const nodejs = process.version;

global.client.timeStart = new Date().getTime(),


module.exports.config = {

  name: "upt",

  version: "1.0.1",

  hasPermssion: 0,

  credits: "R1zaX",///Tq.info mod lại

  description: "no prefix",

  commandCategory: "No Prefix",

  usages: "Time bot online",

    cooldowns: 5

};


function byte2mb(bytes) {

        const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

        let l = 0, n = parseInt(bytes, 10) || 0;

        while (n >= 1024 && ++l) n = n / 1024;

        return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;

}


module.exports.handleEvent = async ({ api, event, Threads }) => {

const xuly = Math.floor((Date.now() - global.client.timeStart)/4444)

var trinhtrang = xuly < 10 ? " Good ✔️":

  xuly > 10 && xuly < 100 ? "Stable" : "Slow";

const pidusage = await global.nodemodule["pidusage"](process.pid);

  if (!event.body) return;

  var { threadID, messageID } = event;

  const threadname = global.data.threadInfo.get(event.threadID).threadName || ((await Threads.getData(event.threadID)).threadInfo).threadName;

  if (event.body.toLowerCase().indexOf("upt") == 0) {

    const dateNow = Date.now();

   const time = process.uptime(),

              gio = Math.floor(time / (60 * 60)),

              phut = Math.floor((time % (60 * 60)) / 60),

                    giay = Math.floor(time % 60);

  const { commands } = global.client;

  const { exec } = require('child_process');

exec('du -sh', (error, stdout, stderr) => {

  if (error) {

    api.sendMessage(`An error has occurred: ${error.message}`, event.threadID, event.messageID);

    return;

  }

  if (stderr) {

    api.sendMessage(`Error STDERR: ${stderr}`, event.threadID, event.messageID);

    return;

  }

 

  const storageUsed = stdout.trim();

  const [size, path] = storageUsed.split('\t');


    api.sendMessage({body:`━━━━[ 𝗨𝗣𝗧𝗜𝗠𝗘 ]━━━━\n\n            ${gio} : ${phut} : ${giay}\n\n Language: ${language}\n Operating system: ${platform} ${architecture}\n V-NodeJs: ${nodejs}\n Model CPU: ${cpuModel}\n Memory: ${size}B\n CPU: ${pidusage.cpu.toFixed(1)} % / ${maxCpu} CPUs\n RAM: ${byte2mb(pidusage.memory)} / ${maxRamInGB} GB\n PING: ${Date.now() - dateNow} ms\n Status: ${trinhtrang}\n Uptime system: ${uptime} seconds`},event.threadID, event.messageID);

      });

   }

};


module.exports.run = () => {};