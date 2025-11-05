const Discord = require("discord.js");
let serverset = require("../../storage/serverset.json");

let adminlevel = require("../../storage/adminlevel.json");

module.exports.run = async (bot, message, args) => {
  let botuser = message.guild.members.cache.get("723061621991276574");
  if(!botuser.hasPermission("ADMINISTRATOR") && !botuser.hasPermission("KICK_MEMBERS"))return message.member.send(`I don't have administrator nor kick permissions to run this command !`).catch(O_o => {}); 
  const 𝘮𝘮m𝘶𝘯𝘪𝘵𝘺 = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`Sorry, you don't have permissions to use this command !`);
 if (!message.member.roles.cache.has(adminlevel[message.guild.id].lvl4) && !message.member.hasPermission("KICK_MEMBERS") && !message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(𝘮𝘮m𝘶𝘯𝘪𝘵𝘺).catch(e =>  message.channel.send(e)).catch(O_o => {})

  let member =
    message.mentions.members.first() || message.guild.members.cache.get(args[0]) ||
  message.guild.members.cache.find(member => member.user.tag.toLowerCase().includes(args.join(" ").toLowerCase()));
  const lewddes = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`Sorry, you didn't mention or specify the user.`);
  if (!member || !args.join(" ")) return message.channel.send(lewddes).catch(e =>  message.channel.send(e)).catch(O_o => {})
  let reason = args.slice(1).join(" ");
  if (!reason) reason = "No reason provided";
  const lewdembedmm = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`Sorry, you cannot ban yourself ${message.author.username}`);
  if (member.id === message.author.id) return message.channel.send(lewdembedmm).catch(e =>  message.channel.send(e)).catch(O_o => {})


const warningddbed = new Discord.MessageEmbed() // Creates the embed that's DM'ed to the user when their warned!
    .setColor("#000000")
    .setThumbnail(member.user.avatarURL())
    .setTitle(`You have been kicked from ${message.guild.name} !`)
    .addField("Reason", reason)
    .setFooter(`Read rules please to not get banned the next time.`);
const lewdembedmdm = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`Sorry, this specified member is protected and cannot be kicked! ${message.author.username}`);
    if (message.guild.id !== "660822589077323786"){
      if (member.roles.cache.some(r =>["Immune", "Immune"].includes(r.name)))
      return message.channel.send(lewdembedmdm)}
      if (member.roles.cache.has(adminlevel[message.guild.id].lvl2) || member.roles.cache.has(adminlevel[message.guild.id].lvl3) || member.roles.cache.has(adminlevel[message.guild.id].lvl4) || member.hasPermission("ADMINISTRATOR"))
      return message.channel.send(lewdembedmdm);

  const lewdembedmddms = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`I cannot ban this user! Do they have a higher role? Do I have kick permissions? ${message.author.username}`);
  if (!member.kickable)
      return message.channel.send(lewdembedmddms);
  // slice(1) removes the first part, which here should be the user mention or ID
  // join(' ') takes all the various parts to make it a single string.

  // Now, time for a swift kick in the nuts!

  await member
    .kick(reason)
    .catch(error => message.channel.send(`Sorry ${message.author} I couldn't kick due to : ${error}`));
const lewdes = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`✔︎ | ${member.user.tag} has been kicked by ${message.author.username} | ${reason}`);
    message.channel.send(lewdes).catch(e =>  message.channel.send(e)).catch(O_o => {})
member.send(warningddbed).catch(O_o => {});


if(serverset[message.guild.id].stafflogschannel !== "None") {
let logs = member.guild.channels.cache.get(serverset[message.guild.id].stafflogschannel);
if(logs)logs.send(`User **${member.user.tag}**: ID **${member.user.id}** has been kicked by **${message.author.tag}** for **${reason}**`).catch(O_o => {});
}
};

module.exports.config = {
  name: "kick"
};
