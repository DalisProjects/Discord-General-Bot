
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let person = message.mentions.members.first() || message.guild.members.cache.get(args[0]) ||
  message.guild.members.cache.find(member => member.displayName.toLowerCase().includes(args.join(" ").toLowerCase())) || message.guild.members.cache.find(member => member.user.username.toLowerCase().includes(args.join(" ").toLowerCase())) ||
  message.guild.members.cache.find(member => member.user.tag.toLowerCase().includes(args.join(" ").toLowerCase()));

let fulled = Math.floor(Math.random() * 101);
  if (!person || !args.join(" ")){
let avEmbedd = new Discord.MessageEmbed()
    .setColor("#2A2A2A")
    .setTitle(`Gay rate :gay_pride_flag:`)
    .setDescription(`You are ${fulled}/100 gay`)
   message.channel.send(avEmbedd).catch(e =>  message.channel.send(e)).catch(O_o => {})
   return;
};
  let avEmbed = new Discord.MessageEmbed()
    .setColor("#2A2A2A")
    .setTitle(`Gay rate :gay_pride_flag:`)
    .setDescription(`${person.displayName } is ${fulled}/100 gay`)

  return message.channel.send(avEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})
};

module.exports.config = {
  name: "howgay",
  aliases: ["gayrate", "howfag"]
};
