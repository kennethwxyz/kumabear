function formatFont(fontStyle, text) {
  const fontMappings = {
    serif: {
          a: "𝖺",
          b: "𝖻",
          c: "𝖼",
          d: "𝖽",
          e: "𝖾",
          f: "𝖿",
          g: "𝗀",
          h: "𝗁",
          i: "𝗂",
          j: "𝗃",
          k: "𝗄",
          l: "𝗅",
          m: "𝗆",
          n: "𝗇",
          o: "𝗈",
          p: "𝗉",
          q: "𝗊",
          r: "𝗋",
          s: "𝗌",
          t: "𝗍",
          u: "𝗎",                           v: "𝗏",
          w: "𝗐",
          x: "𝗑",
          y: "𝗒",
          z: "𝗓",
          A: "𝖠",
          B: "𝖡",
          C: "𝖢",
          D: "𝖣",
          E: "𝖤",
          F: "𝖥",
          G: "𝖦",
          H: "𝖧",
          I: "𝖨",
          J: "𝖩",
          K: "𝖪",
          L: "𝖫",
          M: "𝖬",
          N: "𝖭",
          O: "𝖮",
          P: "𝖯",
          Q: "𝖰",
          R: "𝖱",
          S: "𝖲",
          T: "𝖳",
          U: "𝖴",
          V: "𝖵",
          W: "𝖶",                           X: "𝖷",
          Y: "𝖸",
          Z: "𝖹"
    },
    gothic: {
      a: "𝖆", 
      b: "𝖇",
      c: "𝖈", 
      d: "𝖉", 
      e: "𝖊",
      f: "𝖋", 
      g: "𝖌",
      h: "𝖍", 
      i: "𝖎", 
      j: "𝖏", 
      k: "𝖐", 
      l: "𝖑",
      m: "𝖒",
      n: "𝖓",
      o: "𝖔", 
      p: "𝖕",
      q: "𝖖", 
      r: "𝖗",
      s: "𝖘",
      t: "𝖙",
      u: "𝖚",
      v: "𝖛",
      w: "𝖜",
      x: "𝖝",
      y: "𝖞", 
      z: "𝖟",
      A: "𝕬",
      B: "𝕭",
      C: "𝕮",
      D: "𝕯",
      E: "𝕰",
      F: "𝕱",
      G: "𝕲",
      H: "𝕳",
      I: "𝕴",
      J: "𝕵",
      K: "𝕶",
      L: "𝕷",
      M: "𝕸",
      O: "𝕺",
      P: "𝕻",
      Q: "𝕼",
      R: "𝕽",
      S: "𝕾",
      T: "𝕿",
      U: "𝖀",
      V: "𝖁",                           W: "𝖂",
      X: "𝖃",
      Y: "𝖄",
      Z: "𝖅"
    },
    bold: {
      a: "𝗮",
      b: "𝗯",
      c: "𝗰",
      d: "𝗱",
      e: "𝗲",
      f: "𝗳",
      g: "𝗴",
      h: "𝗵",
      i: "𝗶",
      j: "𝗷",
      k: "𝗸",
      l: "𝗹",
      m: "𝗺",
      n: "𝗻",
      o: "𝗼",
      p: "𝗽",
      q: "𝗾",
      r: "𝗿",
      s: "𝘀",
      t: "𝘁",
      u: "𝘂",
      v: "𝘃",
      w: "𝘄",
      x: "𝘅",
      y: "𝘆",
      z: "𝘇",
      A: "𝗔",
      B: "𝗕",                    
      C: "𝗖",     
      D: "𝗗",
      E: "𝗘",
      F: "𝗙",
      G: "𝗚",
      H: "𝗛",
      I: "𝗜",
      J: "𝗝",
      K: "𝗞",
      L: "𝗟",
      M: "𝗠",
      N: "𝗡",
      O: "𝗢",
      P: "𝗣",
      Q: "𝗤",
      R: "𝗥",
      S: "𝗦",
      T: "𝗧",
      U: "𝗨",
      V: "𝗩",
      W: "𝗪",
      X: "𝗫",
      Y: "𝗬",
      Z: "𝗭"
   }
  };

  const fontMapping = fontMappings[fontStyle];
  if (!fontMapping) {
    return text;
  }

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
  name: "font",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Anjelo Cayao Arabis",
  description: "Generate text in different fonts.",
  commandCategory: "fun",
  usages: "font [fontStyle] [text]",
  cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
  if (args.length < 2) {
    return api.sendMessage("Usage: font [fontStyle] [text]", event.threadID);
  }

  const fontStyle = args.shift().toLowerCase();
  const text = args.join(" ");

  let formattedText = text;

  if (fontStyle === "serif" || fontStyle === "gothic" || fontStyle === "bold") {
    formattedText = formatFont(fontStyle, text);
  } else {
    return api.sendMessage("Invalid font style. Available styles: serif, gothic, bold", event.threadID);
  }

  api.sendMessage(formattedText, event.threadID);
};
