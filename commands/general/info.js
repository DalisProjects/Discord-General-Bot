let discord = require("discord.js");
const moment = require("moment");
module.exports.run = async (bot, message, args) => {

  let person = message.mentions.members.first() || message.guild.members.cache.get(args[0]) ||
  message.guild.members.cache.find(member => member.displayName.toLowerCase().includes(args.join(" ").toLowerCase())) || message.guild.members.cache.find(member => member.user.username.toLowerCase().includes(args.join(" ").toLowerCase())) ||
  message.guild.members.cache.find(member => member.user.tag.toLowerCase().includes(args.join(" ").toLowerCase()));
 
var memroles;
  if (!person || !args.join(" ")){
if(message.member.roles.cache.size > 40){memroles = "Too many roles to show.";};
if(message.member.roles.cache.size < 41){memroles = message.member.roles.cache.map(r => `${r}`).join(" | ");}; 
let d = (Date.now() - message.author.createdTimestamp) / 1000;

let years = Math.floor(d / 31536000);
d = d - years * 31536000;
let months = Math.floor(d / 2592000);
d = d - months * 2592000;
let days = Math.floor(d / 86400);
d = d- days * 84600;
let hours = Math.floor(d / 3600);
d = d - hours * 3600;
let minutes = Math.floor(d / 60);
let seconds = d - minutes * 60;
const joinDiscord = moment(message.author.createdAt).format("llll");
  const joinserver = moment(message.member.joinedAt).format("llll");
 let embed = new discord.MessageEmbed()
    .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.displayAvatarURL())
    .setDescription(`<@${message.author.id}>`)
    .setColor("#f76ff1")
    .setThumbnail(`${message.author.displayAvatarURL()}`)
    .addField("\u2000\Created At:", joinDiscord, true)
 .addField("\u2000\Joined at:", joinserver, true)
   .addField(`Account age`, `Created ${years} years, ${months} months, ${days} days, ${hours} hours and ${minutes} mins ago`)
    .addField(`\u2000\Roles[${message.member.roles.cache.size}]:`, memroles, true)    
 .setFooter(`ID: ${message.author.id}`)
    .setTimestamp();

  message.channel.send({ embed: embed }).catch(e =>  message.channel.send(e)).catch(O_o => {})
return;
};
if(person.roles.cache.size > 40){memroles = "Too many roles to show.";};
if(person.roles.cache.size < 41){memroles = person.roles.cache.map(r => `${r}`).join(" | ");}; 
let d = (Date.now() - person.user.createdTimestamp) / 1000;

let years = Math.floor(d / 31536000);
d = d - years * 31536000;
let months = Math.floor(d / 2592000);
d = d - months * 2592000;
let days = Math.floor(d / 86400);
d = d- days * 84600;
let hours = Math.floor(d / 3600);
d = d - hours * 3600;
let minutes = Math.floor(d / 60);
let seconds = d - minutes * 60;
const joinDiscord = moment(person.user.createdAt).format("llll");
  const joinserver = moment(person.joinedAt).format("llll");
 let embed = new discord.MessageEmbed()
    .setAuthor(person.displayName + "#" + person.user.discriminator, person.user.displayAvatarURL())
    .setDescription(`${person.user}`)
    .setColor("#f76ff1")
    .setThumbnail(`${person.user.displayAvatarURL()}`)
    .addField("\u2000\Created At:", joinDiscord, true)
 .addField("\u2000\Joined at:", joinserver, true)
   .addField(`Account age`, `Created ${years} years, ${months} months, ${days} days, ${hours} hours and ${minutes} mins`)
    .addField(`\u2000\Roles[${person.roles.cache.size}]:`, memroles, true)    
 .setFooter(`ID: ${person.user.id}`)
    .setTimestamp();

  message.channel.send({ embed: embed }).catch(e =>  message.channel.send(e)).catch(O_o => {})
};
module.exports.config = {
  name: "info",
  aliases: ["userinfo", "whois"]
};
