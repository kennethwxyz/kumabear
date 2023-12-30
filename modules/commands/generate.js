const axios = require("axios");

module.exports.config = {
	name: "generate",
	version: "1.0.0",
	credits: "Yan Maglinte", //IMPLEMENTED TO MIRAI FROM GOATBOAT SERVER
	description: "Create image from your text",
	usePrefix: true,
	commandCategory: "info",
	cooldowns: 5,
	dependencies: [],
};

module.exports.languages = {
	tl: {
  syntaxError: "⚠️ Mangyaring maglagay ng prompt",
  error: "❗ May naganap na error, mangyaring subukan muli mamaya:\n%1",
  serverError: "❗ Ang server ay sobrang abala, mangyaring subukan muli mamaya",
},
	en: {
		syntaxError: "⚠️ Please enter prompt",
		error: "❗ An error has occurred, please try again later:\n%1",
		serverError: "❗ Server is overloaded, please try again later",
	},
};

module.exports.run = async function ({ api, event, args, getText }) {
	const prompt = args.join(" ");
	if (!prompt)
		return api.sendMessage(getText("syntaxError"), event.threadID);

	try {
		const { data: imageStream } = await axios({
			url: "https://goatbotserver.onrender.com/taoanhdep/texttoimage",
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			data: {
				prompt,
				styleId: 28,
				aspect_ratio: "1:1",
			},
			responseType: "stream",
		});

		imageStream.path = "image.jpg";

		return api.sendMessage({
			attachment: imageStream,
		}, event.threadID);
	} catch (err) {
		return api.sendMessage(
			getText("error", err.response?.data?.message || err.message),
			event.threadID
		);
	}
};