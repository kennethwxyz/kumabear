module.exports.config = {
	name: "ramdommmember",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "D-Jukie",
	description: "Randomly select the number of members in the box",
	commandCategory: "Tiện ích",
	cooldowns: 5
};
module.exports.run = async ({ api, event, args, Users }) => {
	const { threadID, messageID, participantIDs, isGroup } = event;
	const num = parseInt(args[0]) || 1;
	if(isGroup == false) return api.sendMessage('Please execute this command in the group!', threadID, messageID);
	const random = participantIDs.sort(function() {
        return .5 - Math.random();
    });
    const members = [];
    for( let i = 0; i <= num - 1; i++) {
    	var name = (await Users.getData(random[i])).name;
    	members.push(name)
    }
	return api.sendMessage(`Lucky person is: ${members.join(' ')}`, threadID, messageID);
}
