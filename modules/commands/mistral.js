const axios = require('axios');

function formatFont(text) {
  const fontMapping = {
    a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓", k: "𝚔", l: "𝚕", m: "𝚖",
    n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝", u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣",
    A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹", K: "𝙺", L: "𝙻", M: "𝙼",
    N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃", U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉"
  };

  let formattedText = "";
  for (const char of text) {
    if (char in fontMapping) {
      formattedText += fontMapping[char];
    } else {
      formattedText += char;
    }
  }

  return formattedText;
}

module.exports.config = {
  name: "mistral",
  version: "1.8.1",
  hasPermission: 0,
  credits: "Hazeyy",
  description: "( 𝙈𝙞𝙨𝙩𝙧𝙖𝙡 𝘼𝙄 )",
  commandCategory: "no prefix",
  usages: "( Research on Mistral AI )",
};

module.exports.handleEvent = async function ({ api, event }) {
  if (!(event.body.indexOf("mistral") === 0 || event.body.indexOf("Mistral") === 0)) return;

  const args = event.body.split(/\s+/);
  args.shift();
  const prompt = args.join(' ');

  api.sendMessage("🗨️ | 𝖬𝗂𝗌𝗍𝗋𝖺𝗅-𝖠𝖨 𝗂𝗌 𝗌𝖾𝖺𝗋𝖼𝗁𝗂𝗇𝗀 𝖿𝗈𝗋 𝖺𝗇𝗌𝗐𝖾𝗋...", event.threadID);

  try {
    const response = await axios.get(`https://hazeyy-api-mistral-ai.kyrinwu.repl.co/api/mistral/response?prompt=${prompt}`);
    const generatedText = formatFont(response.data.response); 
    const senderName = "🎓 𝗠𝗶𝘀𝘁𝗿𝗮𝗹 ( 𝗔𝗜 )"; 
    const message = `${senderName} \n${generatedText}`;
    api.sendMessage(message, event.threadID);
  } catch (error) {
    console.error(error);
    api.sendMessage("🔴 𝖤𝗋𝗋𝗈𝗋 𝗀𝖾𝗇𝖾𝗋𝖺𝗍𝗂𝗇𝗀 𝗋𝖾𝗌𝗉𝗈𝗇𝗌𝖾", event.threadID);
  }
};

module.exports.run = async function({ api, event }) {
  const args = event.body.split(/\s+/);
  args.shift();
  const prompt = args.join(' ');

  api.sendMessage("🗨️ | 𝖬𝗂𝗌𝗍𝗋𝖺𝗅-𝖠𝖨 𝗂𝗌 𝗌𝖾𝖺𝗋𝖼𝗁𝗂𝗇𝗀 𝖿𝗈𝗋 𝖺𝗇𝗌𝗐𝖾𝗋...", event.threadID);

  try {
    const response = await axios.get(`https://hazeyy-api-mistral-ai.kyrinwu.repl.co/api/mistral/response?prompt=${prompt}`);
    const generatedText = formatFont(response.data.response); 
    const senderName = "🎓 𝗠𝗶𝘀𝘁𝗿𝗮𝗹 ( 𝗔𝗜 )"; 
    const message = `${senderName} \n${generatedText}`;
    api.sendMessage(message, event.threadID);
  } catch (error) {
    console.error(error);
    api.sendMessage("🔴 | 𝖤𝗋𝗋𝗈𝗋 𝗀𝖾𝗇𝖾𝗋𝖺𝗍𝗂𝗇𝗀 𝗋𝖾𝗌𝗉𝗈𝗇𝗌𝖾", event.threadID);
  }
};