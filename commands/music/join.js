const discord = require("discord.js");



module.exports.run = async (bot, message, args) => {
const lewdddddzees = new discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription("You need to join a voice channel first!");
  if (!message.member.voice.channel)return message.channel.send(lewdddddzees);
    const connection = await message.member.voice.channel.join();
    message.react("706248793871352012")
};

module.exports.config = {
  name: "join"
};
