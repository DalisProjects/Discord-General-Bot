const Discord = require("discord.js");
let serverset = require("../../storage/serverset.json");

let adminlevel = require("../../storage/adminlevel.json");

module.exports.run = async (bot, message, args) => {
  let botuser = message.guild.members.cache.get("723061621991276574");
  if(!botuser.hasPermission("ADMINISTRATOR") && !botuser.hasPermission("BAN_MEMBERS"))return message.member.send(`I don't have administrator nor ban permissions to run this command !`).catch(O_o => {}); 
  const 𝘮𝘮m𝘶𝘯𝘪𝘵𝘺 = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`Sorry, you don't have permissions to use this command !`);
 if (!message.member.roles.cache.has(adminlevel[message.guild.id].lvl3) && !message.member.roles.cache.has(adminlevel[message.guild.id].lvl4) && !message.member.hasPermission("ADMINISTRATOR") && !message.member.hasPermission("BAN_MEMBERS"))
    return message.channel.send(𝘮𝘮m𝘶𝘯𝘪𝘵𝘺).catch(e =>  message.channel.send(e)).catch(O_o => {})
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  // message.guild.members.cache.find(member => member.user.tag.toLowerCase().includes(args.join(" ").toLowerCase()));
const missingArgsEmbed = new Discord.MessageEmbed() // Creates the embed thats sent if the command isnt run right
        .setColor(`#000000`)
        .setTitle('Missing Arguments!')
        .setDescription('Usage: ban [User] [Reason]')
  if (!member || !args.join(" ")) return message.channel.send(missingArgsEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})
  const lewdembedmm = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`Sorry, you cannot ban yourself ${message.author.username}`);
  if (member.id === message.author.id) return message.channel.send(lewdembedmm).catch(e =>  message.channel.send(e)).catch(O_o => {})
let reasonban = args.slice(1).join(" ");
  if (!reasonban) reasonban = "No reason provided";
const lewdembedmdm = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`Sorry, this specified member is protected and cannot be banned! ${message.author.username}`);
  if (message.guild.id === "660822589077323786"){
  if (member.roles.cache.some(r =>["Immune", "Immune"].includes(r.name)))
  return message.channel.send(lewdembedmdm)}
  if (member.roles.cache.has(adminlevel[message.guild.id].lvl2) || member.roles.cache.has(adminlevel[message.guild.id].lvl3) || member.roles.cache.has(adminlevel[message.guild.id].lvl4) || member.hasPermission("ADMINISTRATOR"))
  return message.channel.send(lewdembedmdm);
const warningdmEmbed = new Discord.MessageEmbed() // Creates the embed that's DM'ed to the user when their warned!
    .setColor("#000000")
    .setThumbnail(member.user.avatarURL())
    .setTitle(`You have been banned from ${message.guild.name}`)
    .addField("Reason", reasonban)
    .setFooter(`Try to contact the owner Dali for an unban appeal.`);

  const lewdembedmddms = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`I cannot ban this user! Do they have a higher role? Do I have kick permissions? ${message.author.username}`);
  if (!member.kickable)
      return message.channel.send(lewdembedmddms);

  // slice(1) removes the first part, which here should be the user mention or ID
  // join(' ') takes all the various parts to make it a single string.
  

  // Now, time for a swift kick in the nuts!
  message.guild.members.ban(member, {reason: reasonban})


 const lewdes = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`✔︎ | ${member.user.tag} has been banned by ${message.author.username} | ${reasonban}`);
    message.channel.send(lewdes).catch(e =>  message.channel.send(e)).catch(O_o => {})
    member.send(warningdmEmbed).catch(O_o => {})
    
    if(serverset[message.guild.id].stafflogschannel !== "None") {
  let logs = member.guild.channels.cache.get(serverset[message.guild.id].stafflogschannel);
  if(logs)logs.send(`User **${member.user.tag}**: ID **${member.user.id}** has been banned by **${message.author.tag}** for **${reasonban}**`).catch(O_o => {});
}
};

module.exports.config = {
  name: "ban"
};
