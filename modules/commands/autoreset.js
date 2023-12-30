const { client } = global;

module.exports.config = {
  name: 'alwayson',
  version: '1.0.0',
  hasPermission: 2,
  credits: 'Your Name',
  description: 'Set the bot status to always online',
  commandCategory: 'System',
  usages: [],
  cooldowns: 5,
};

module.exports.run = ({ api }) => {
  // Set the bot's presence to 'online' status.
  client.setState({ status: 'online' });
  api.sendMessage('Bot status set to always online.', event.threadID);
};
