const discord = require("discord.js");
const moment = require("moment");



module.exports.run = async (bot, message, args) => {

  
  

  let embed = new discord.MessageEmbed()
    .setAuthor(message.guild.name, message.author.displayAvatarURL())
    .setThumbnail(`https://i.imgur.com/GihXAVA.gif?size=128`)
    .setTitle("Server Info")
    .setColor("#f76ff1")
    .addField(`Owner:`, `${message.guild.owner}`)
    .addField(`Region:`, `${message.guild.region}`)
    .addField(`Member Count:`, `${message.guild.memberCount}`)
    .addField(`Channel Count:`, `${message.guild.channels.cache.size}`)
    .addField(`Role Count:`, `${message.guild.roles.cache.size}`)
    .addField(`Emoji Count:`, `${message.guild.emojis.cache.size}`)
    .addField(`Boosts:`, `${message.guild.premiumSubscriptionCount}`)
    .addField(`Features:`, `\`${message.guild.features}\``)
    .setFooter(`Server ID: ${message.guild.id} | Created at ${moment(message.guild.joinedTimestamp).format("llll")}`)
   // message.reply(embed)
    message.channel.send(embed).catch(e =>  message.channel.send(e)).catch(O_o => {})
};
module.exports.config = {
  name: "serverinfo"
};