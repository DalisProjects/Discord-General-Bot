const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let person = message.mentions.members.first() || message.guild.members.cache.get(args[0]) ||
  message.guild.members.cache.find(member => member.displayName.toLowerCase().includes(args.join(" ").toLowerCase())) || message.guild.members.cache.find(member => member.user.username.toLowerCase().includes(args.join(" ").toLowerCase())) ||
  message.guild.members.cache.find(member => member.user.tag.toLowerCase().includes(args.join(" ").toLowerCase()));
  const rando_imgs = [ // sets the answers to an eightball
    "8D",
    "8=D", 
    "8==D",
    "8==D",
    "8===D",
    "8====D",
    "8=====D",
    "8======D",
    "8=======D",
    "8========D",
    "8=========D",
    "8==========D",
    "8===========D",
    "8============D",
    "8=============D",   
    "8==================D",
    "8========================D",  
    "no dick gang :skull:"

];
let fulled = rando_imgs[Math.floor(Math.random() * rando_imgs.length)];
  if (!person || !args.join(" ")){
let avEmbed = new Discord.MessageEmbed()
    .setColor("#2A2A2A")
    .setTitle(`${message.author.username}'s dick size !`)
    .setDescription(fulled)
   // .setFooter(`Requested by ${message.author.username}`);
  return message.channel.send(avEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})
};
//setTimeout(() => {message.delete().catch(O_o => {});}, 200);
  let avEmbed = new Discord.MessageEmbed()
    .setColor("#2A2A2A")
    .setTitle(`${person.displayName}'s dick size !`)
    .setDescription(fulled)
   // .setFooter(`Requested by ${message.author.username}`);

  return message.channel.send(avEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})
};

module.exports.config = {
  name: "pp",
  aliases: ["dicksize", "ppsize"]
};
