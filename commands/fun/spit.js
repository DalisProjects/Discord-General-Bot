const Discord = require("discord.js");
let spanks = require("../../storage/spanks.json");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
  let target =
    message.mentions.members.first() || message.guild.members.cache.get(args[0]) ||
  message.guild.members.cache.find(member => member.displayName.toLowerCase().includes(args.join(" ").toLowerCase())) || message.guild.members.cache.find(member => member.user.username.toLowerCase().includes(args.join(" ").toLowerCase())) ||
  message.guild.members.cache.find(member => member.user.tag.toLowerCase().includes(args.join(" ").toLowerCase()));
 
  let fulled = rando_imgs[Math.floor(Math.random() * rando_imgs.length)];

  const lewddes = new Discord.MessageEmbed()
    .setColor(`#2A2A2A`)
    .setDescription(`Sorry, you didn't mention or specify the user.`);

    if (target.id == message.author.id) return message.channel.send("You can't lick yourself !")
  if (!target|| !args.join(" ")) return message.channel.send(lewddes).catch(e =>  message.channel.send(e)).catch(O_o => {})
  

  return message.channel.send(`*${message.author.username} spits on ${target.displayName}*`);
};

module.exports.config = {
  name: "spit"
};
