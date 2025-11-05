const Discord = require("discord.js");
let spanks = require("../../storage/spanks.json");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
  let target =
    message.mentions.members.first() || message.guild.members.cache.get(args[0]) ||
  message.guild.members.cache.find(member => member.displayName.toLowerCase().includes(args.join(" ").toLowerCase())) || message.guild.members.cache.find(member => member.user.username.toLowerCase().includes(args.join(" ").toLowerCase())) ||
  message.guild.members.cache.find(member => member.user.tag.toLowerCase().includes(args.join(" ").toLowerCase()));
  const rando_imgs = [
    "https://cdn.weeb.sh/images/S1QzRJp7z.gif",
    "https://cdn.weeb.sh/images/Bkxge0uPW.gif",
    "https://cdn.weeb.sh/images/S1Ill0_vW.gif",

  ];

  let fulled = rando_imgs[Math.floor(Math.random() * rando_imgs.length)];

  const lewddes = new Discord.MessageEmbed()
    .setColor(`#2A2A2A`)
    .setDescription(`Sorry, you didn't mention or specify the user.`);

    if (target.id == message.author.id) return message.channel.send("You can't lick yourself !")
  if (!target|| !args.join(" ")) return message.channel.send(lewddes).catch(e =>  message.channel.send(e)).catch(O_o => {})
  
  let avEmbed = new Discord.MessageEmbed()
    .setColor("#2A2A2A")
    .setTitle(`${message.author.username} licks ${target.displayName}`)
    .setImage(fulled)

  return message.channel.send(avEmbed).catch(e =>  message.channel.send(`${message.member.displayName} licks ${target.displayName}`))
};

module.exports.config = {
  name: "lick"
};
