
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let person = message.mentions.members.first() || message.guild.members.cache.get(args[0]) ||
  message.guild.members.cache.find(member => member.displayName.toLowerCase().includes(args.join(" ").toLowerCase())) || message.guild.members.cache.find(member => member.user.username.toLowerCase().includes(args.join(" ").toLowerCase())) ||
  message.guild.members.cache.find(member => member.user.tag.toLowerCase().includes(args.join(" ").toLowerCase()));


let fulled = Math.floor(Math.random() * 101);
  if (!person || !args.join(" ")){
let avEmbed = new Discord.MessageEmbed()
    .setColor("#2A2A2A")
    .setTitle(`Thicc rate <a:ynvppltwerkslt:706585703697481788>`)
    .setDescription(`You are thicc ${fulled}/100 thicc`)
  return message.channel.send(avEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})
};
  let avEmbed = new Discord.MessageEmbed()
    .setColor("#2A2A2A")
    .setTitle(`Thicc rate <a:ynvppltwerkslt:706585703697481788>`)
    .setDescription(` ${person.displayName} is ${fulled}/100 thicc`)

  return message.channel.send(avEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})
};

module.exports.config = {
  name: "howthicc",
  aliases: ["thiccrate", "thick", "thicc", "howthick","thickrate"]
};
