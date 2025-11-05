const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let person = message.mentions.members.first() || message.guild.members.cache.get(args[0]) ||
  message.guild.members.cache.find(member => member.displayName.toLowerCase().includes(args.join(" ").toLowerCase())) || message.guild.members.cache.find(member => member.user.username.toLowerCase().includes(args.join(" ").toLowerCase())) ||
  message.guild.members.cache.find(member => member.user.tag.toLowerCase().includes(args.join(" ").toLowerCase()));
  const rando_imgs = [ // sets the answers to an eightball
    "5'1",
    "4'2", 
    "4'3",
    "4'5",
    "4'7",
    "4'6",
    "4'9",
    "5'0",
    "5'1",
    "5'4",
    "5'2",
    "5'6",
    "5'7",
    "5'8",
    "5'9",   
    "6'0",
    "6'1", 
    "6'2",
    "6'3",
    "6'4",   
    "6'5",
    "long neck giraffe :giraffe:",  
    "a dwarf :skull:"

];
let fulled = rando_imgs[Math.floor(Math.random() * rando_imgs.length)];
  if (!person || !args.join(" ")){
let avEmbed = new Discord.MessageEmbed()
    .setColor("#2A2A2A")
    .setTitle(`height !`)
    .setDescription(`${message.author.username}'s ${fulled} !`)
  return message.channel.send(avEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})
};
//setTimeout(() => {message.delete().catch(O_o => {});}, 200);
  let avEmbed = new Discord.MessageEmbed()
    .setColor("#2A2A2A")
    .setTitle(`height`)
    .setDescription(`${person.displayName}'s ${fulled}`)

  return message.channel.send(avEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})
};

module.exports.config = {
  name: "height",
  aliases: ["howtall"]
};
