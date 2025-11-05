const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  
  return message.channel.send(embed = new Discord.MessageEmbed()
  .setColor(`#f76ff1`)
  .setAuthor(bot.editsnipe[message.guild.id].firstsentby, bot.editsnipe[message.guild.id].firstav)
  .setDescription(bot.editsnipe[message.guild.id].firstmsg)
  .setFooter(bot.editsnipe[message.guild.id].firstchannel)
  .setTimestamp(bot.editsnipe[message.guild.id].firstdate))
};

module.exports.config = {
  name: "esnipe",
  aliases: ["editsnipe"]
};
