


const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {
const warningdmEmbed = new Discord.MessageEmbed() // Creates the embed that's DM'ed to the user when their warned!
    .setColor("#000000")
    .setTitle(`❥ | How to get verified !`)
    .setDescription(`**Just take a selfie while holding a piece of paper and write your name, server name and date on it, and send it to the owner 📸 !**`);
message.channel.send(warningdmEmbed).catch(O_o => {})
setTimeout(() => {message.delete().catch(O_o => {});}, 500);  
};

module.exports.config = {
  name: "verify"
};
