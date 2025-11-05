const Discord = require("discord.js");
const currencylogs = require("../../storage/currencylogs.json");
const serverset = require("../../storage/serverset.json");

module.exports.run = async (bot, message, args) => {

  
  return message.channel.send(embed = new Discord.MessageEmbed()
  .setColor(`#f76ff1`)
  .setAuthor("Available prefixes !", message.author.displayAvatarURL())
  .setDescription(`Global prefix: \`nir\`
Server prefix: \`${serverset[message.guild.id].prefix}\`
Your personal prefix: \`${currencylogs[message.author.id].prefix}\``)
  .setFooter(`You can change your personal prefix using '.myprefix' !`))
};

module.exports.config = {
  name: "prefix",
  aliases: ["botprefix"]
};
