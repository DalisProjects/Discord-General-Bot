
const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
  let bott = new Discord.Client();

  let person =
  message.mentions.members.first() || message.guild.members.cache.get(args[0]) ||
message.guild.members.cache.find(member => member.displayName.toLowerCase().includes(args.join(" ").toLowerCase())) || message.guild.members.cache.find(member => member.user.username.toLowerCase().includes(args.join(" ").toLowerCase())) ||
message.guild.members.cache.find(member => member.user.tag.toLowerCase().includes(args.join(" ").toLowerCase()));

let fulled = Math.floor(Math.random() * 101);
  if (!person || !args.join(" ")){
let avEmbed = new Discord.MessageEmbed()
    .setColor("#2A2A2A")
    .setTitle(`Simp rate <:dead:706264885419442247>`)
    .setDescription(`You are ${fulled}/100 simp`)
  return message.channel.send(avEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})
};
  let avEmbed = new Discord.MessageEmbed()
    .setColor("#2A2A2A")
    .setTitle(`Simp rate <:dead:706264885419442247>`)
    .setDescription(`${person.displayName }'s ${fulled}/100 simp`)

  return message.channel.send(avEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})
};

module.exports.config = {
  name: "howsimp",
  aliases: ["simprate"]
};
