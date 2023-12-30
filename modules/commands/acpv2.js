module.exports.config = {
  name: "acpv2",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "Anjelo Cayao Arabis",
  description: "Add or delete friends by Facebook ID",
  commandCategory: "admin",
  usages: "uid",
  cooldowns: 0
};

const maintenance = require('./maintenance.js');
const { storeRecentCommand } = require('./recentcommand');

module.exports.handleReply = async ({ handleReply, event, api }) => {
  storeRecentCommand(event.senderID, 'acp');
  if (maintenance.maintenanceModeEnabled()) {
    api.sendMessage("Sorry, the bot is currently undergoing maintenance. Please try again later.", event.threadID);
    return;
  }
  
  const { author, listRequest } = handleReply;
  if (author != event.senderID) return;
  const args = event.body.replace(/ +/g, " ").toLowerCase().split(" ");
  
  const form = {
    av: api.getCurrentUserID(),
    fb_api_caller_class: "RelayModern",
    variables: {
      input: {
        source: "friends_tab",
        actor_id: api.getCurrentUserID(),
        client_mutation_id: Math.round(Math.random() * 19).toString()
      },
      scale: 3,
      refresh_num: 0
    }
  };
  
  const success = [];
  const failed = [];
  
  if (args[0] == "add") {
    form.fb_api_req_friendly_name = "FriendingCometFriendRequestConfirmMutation";
    form.doc_id = "3147613905362928";
  }
  else if (args[0] == "del") {
    form.fb_api_req_friendly_name = "FriendingCometFriendRequestDeleteMutation";
    form.doc_id = "4108254489275063";
  }
  else return api.sendMessage("Invalid command format. Use `.add` or `.del` followed by the target user's ID.", event.threadID, event.messageID);
  let targetIDs = args.slice(1);
  
  if (args[1] == "all") {
    targetIDs = [];
    const lengthList = listRequest.length;
    for (let i = 1; i <= lengthList; i++) targetIDs.push(i);
  }
  
  const newTargetIDs = [];
  const promiseFriends = [];
  
  for (const stt of targetIDs) {
    const u = listRequest[parseInt(stt) - 1];
    if (!u) {
      failed.push(`User number ${stt} is out of range`);
      continue;
    }
    form.variables.input.friend_requester_id = u.node.id;
    form.variables = JSON.stringify(form.variables);
    newTargetIDs.push(u);
    promiseFriends.push(api.httpPost("https://www.facebook.com/api/graphql/", form));
    form.variables = JSON.parse(form.variables);
  }
  
  const lengthTarget = newTargetIDs.length;
  for (let i = 0; i < lengthTarget; i++) {
    try {
      const friendRequest = await promiseFriends[i];
      if (JSON.parse(friendRequest).errors) {
        failed.push(newTargetIDs[i].node.name);
      } else {
        success.push(newTargetIDs[i].node.name);
        // Send a message to the user whose friend request was accepted
        if (args[0] === 'add') {
          api.sendMessage('Your friend request has been accepted by the bot admin use -help for more educational commands\n\nkindly Add/Follow: Excikel joshua L. Buenaventura\nLink: https://www.facebook.com/joshua.buenaventur4', newTargetIDs[i].node.id);
        }
      }
    }
    catch(e) {
      failed.push(newTargetIDs[i].node.name);
    }
  }
  
  api.sendMessage(`» ${args[0] == 'add' ? 'Accepted' : 'Deleted'} ${success.length} user${success.length !== 1 ? 's' : ''} successfully:\n${success.join("\n")}${failed.length > 0 ? `\n» Failed for ${failed.length} user${failed.length !== 1 ? 's' : ''}: ${failed.join("\n")}` : ""}`, event.threadID, event.messageID);
};

module.exports.run = async ({ event, api }) => {
  const moment = require("moment-timezone");
  const form = {
    av: api.getCurrentUserID(),
    fb_api_req_friendly_name: "FriendingCometFriendRequestsRootQueryRelayPreloader",
    fb_api_caller_class: "RelayModern",
    doc_id: "4499164963466303",
    variables: JSON.stringify({ input: { scale: 3 } })
  };
const listRequest = JSON.parse(await api.httpPost("https://www.facebook.com/api/graphql/", form)).data.viewer.friending_possibilities.edges;
  let msg = "";
  let i = 0;
  for (const user of listRequest) {
    i++;
    msg += (
      `\n${i}. Name: ${user.node.name}` +
      `\nUserID: ${user.node.id}` +
      `\nFacebook URL: ${user.node.url.replace("www.facebook", "fb")}` +
      `\nDate: ${moment(user.time * 1009).tz("Asia/Manila").format("MM/DD/YYYY h:mm:ss A")}\n`
    );
  }
  api.sendMessage(`${msg}\nUsage: acpv2 if done na use\`-add\` or \`-del\` followed by the target user's number to perform action: <add | del> <specific user | all> to the user, or type "all" to perform on all users.`, event.threadID, (e, info) => {
      global.client.handleReply.push({
        name: this.config.name,
        messageID: info.messageID,
        listRequest,
        author: event.senderID
      });
    }, event.messageID);
};
