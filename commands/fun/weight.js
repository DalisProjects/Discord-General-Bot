const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let person = message.mentions.members.first() || message.guild.members.cache.get(args[0]) ||
  message.guild.members.cache.find(member => member.displayName.toLowerCase().includes(args.join(" ").toLowerCase())) || message.guild.members.cache.find(member => member.user.username.toLowerCase().includes(args.join(" ").toLowerCase())) ||
  message.guild.members.cache.find(member => member.user.tag.toLowerCase().includes(args.join(" ").toLowerCase()));
 



let fulled = Math.floor(Math.random() * 151) + 75;
  if (!person || !args.join(" ")){
let avEmbed = new Discord.MessageEmbed()
    .setColor("#2A2A2A")
    .setTitle(`weight !`)
    .setDescription(`${message.author.username}'s ${fulled} lb!`)
  return message.channel.send(avEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})
};
//setTimeout(() => {message.delete().catch(O_o => {});}, 200);
  let avEmbed = new Discord.MessageEmbed()
    .setColor("#2A2A2A")
    .setTitle(`weight`)
    .setDescription(`${person.displayName}'s ${fulled} lb`)

  return message.channel.send(avEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})
};

module.exports.config = {
  name: "weight",
  aliases: ["weigh"]
};
