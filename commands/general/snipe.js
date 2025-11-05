const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let reason = args.join(" ");

  if (!reason){
    return message.channel.send(embed = new Discord.MessageEmbed()
.setColor(`#f76ff1`)
.setAuthor(bot.snipe[message.guild.id].firstsentby, bot.snipe[message.guild.id].firstav)
.setDescription(bot.snipe[message.guild.id].firstmsg)
.setFooter(bot.snipe[message.guild.id].firstchannel)
.setTimestamp(bot.snipe[message.guild.id].firstdate))
 }
if (reason == `1`){
    return message.channel.send(embed = new Discord.MessageEmbed()
.setColor(`#f76ff1`)
.setAuthor(bot.snipe[message.guild.id].secondsentby, bot.snipe[message.guild.id].secondav)
.setDescription(bot.snipe[message.guild.id].secondmsg)
.setFooter(bot.snipe[message.guild.id].secondchannel)
.setTimestamp(bot.snipe[message.guild.id].seconddate))
 }
if (reason == `2`){
    return message.channel.send(embed = new Discord.MessageEmbed()
.setColor(`#f76ff1`)
.setAuthor(bot.snipe[message.guild.id].thirdsentby, bot.snipe[message.guild.id].thirdav)
.setDescription(bot.snipe[message.guild.id].thirdmsg)
.setFooter(bot.snipe[message.guild.id].thirdchannel)
.setTimestamp(bot.snipe[message.guild.id].thirddate))
}
else {
    return message.channel.send(embed = new Discord.MessageEmbed()
.setColor(`#f76ff1`)
.setTitle("Wrong format")
.setDescription("You can only snipe last 3 deleted messages !"))
}
};

module.exports.config = {
  name: "snipe"
};
