const Discord = require("discord.js");
const superagent = require("superagent");
let serverset = require("../../storage/serverset.json");
let adminlevel = require("../../storage/adminlevel.json");

module.exports.run = async (bot, message, args) => {
  let botuser = message.guild.members.cache.get("723061621991276574");
  if(!botuser.hasPermission("ADMINISTRATOR") && !botuser.hasPermission("MANAGE_ROLES"))return message.member.send(`I don't have administrator nor manage roles permissions to run this command !`).catch(O_o => {});  
  const 𝘮𝘮m𝘶𝘯𝘪𝘵𝘺 = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`Sorry, you don't have permissions to use this command !`);
  if (!message.member.roles.cache.has(adminlevel[message.guild.id].lvl2) && !message.member.roles.cache.has(adminlevel[message.guild.id].lvl3) && !message.member.roles.cache.has(adminlevel[message.guild.id].lvl4) && !message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(𝘮𝘮m𝘶𝘯𝘪𝘵𝘺).catch(e =>  message.channel.send(e)).catch(O_o => {})

  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) ||
  message.guild.members.cache.find(member => member.displayName.toLowerCase().includes(args.join(" ").toLowerCase())) || message.guild.members.cache.find(member => member.user.username.toLowerCase().includes(args.join(" ").toLowerCase())) ||
  message.guild.members.cache.find(member => member.user.tag.toLowerCase().includes(args.join(" ").toLowerCase()));
  let reason = args.slice(1).join(" ");
const missingArgsEmbed = new Discord.MessageEmbed() // Creates the embed thats sent if the command isnt run right
        .setColor(`#000000`)
        .setTitle('Missing Arguments!')
        .setDescription('Usage: off [User] [Reason]');
   if (!reason) reason = "No reason provided";
  if (!member || !args.join(" ")) return message.channel.send(missingArgsEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})

const lewdembedd = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`Sorry, this specified member is protected and therefore they cannot be muted!`);

const dzadazdazd = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`✔︎ | **${member.displayName}** is no longer OFF`)
    if(!bot.offed[`${message.guild.id}, ${member.user.id}`]){
      bot.offed[`${message.guild.id}, ${member.user.id}`] = {
        offed: 0
    }}
if (bot.offed[`${message.guild.id}, ${member.user.id}`].offed == 1){
  if(serverset[message.guild.id].stafflogschannel !== "None") {
 let logs = member.guild.channels.cache.get(serverset[message.guild.id].stafflogschannel);
  const lewddemddbedm = new Discord.MessageEmbed()
    .setColor(`#ff0000`)
    .setAuthor(" |  admin action", message.author.displayAvatarURL())
    .setDescription(`User ${member.displayName} is no longer set **OFF**, by ${message.author.username} reason: **${reason}** `);
    if(logs)logs.send(lewddemddbedm).catch(O_o => {});
}
bot.offed[`${message.guild.id}, ${member.user.id}`] = {
  offed: 0 };
  message.channel.send(dzadazdazd);

return;
};
    if (member.roles.cache.has(adminlevel[message.guild.id].lvl1) || member.roles.cache.has(adminlevel[message.guild.id].lvl2) || member.roles.cache.has(adminlevel[message.guild.id].lvl3) || member.roles.cache.has(adminlevel[message.guild.id].lvl4) || member.hasPermission("ADMINISTRATOR"))
      return message.channel.send(lewdembedd);

    if(serverset[message.guild.id].stafflogschannel !== "None") {
   let logs = member.guild.channels.cache.get(serverset[message.guild.id].stafflogschannel);
  const lewddemddbedm = new Discord.MessageEmbed()
    .setColor(`#ff0000`)
    .setAuthor(" |  admin action", message.author.displayAvatarURL())
    .setDescription(`User ${member.displayName} has been set **OFF** by ${message.author.username} reason: **${reason}** `);
    if(logs)logs.send(lewddemddbedm).catch(O_o => {});
}
  const lewdembed = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(
      `✔︎ | **${member.displayName}** is now OFF, reason: **${reason}**`
    );
  message.channel.send(lewdembed).catch(e =>  message.channel.send(e)).catch(O_o => {})
   setTimeout(() => {message.delete().catch(O_o => {});}, 500);

  bot.offed[`${message.guild.id}, ${member.user.id}`] = {
    offed: 1 };
  }
module.exports.config = {
  name: "off"
};

