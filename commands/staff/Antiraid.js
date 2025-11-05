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
  if (!message.member.roles.cache.has(adminlevel[message.guild.id].lvl3) && !message.member.roles.cache.has(adminlevel[message.guild.id].lvl4) && !message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(𝘮𝘮m𝘶𝘯𝘪𝘵𝘺).catch(e =>  message.channel.send(e)).catch(O_o => {})

 let reason = args[1];
if (bot.antiraid[message.guild.id].antiraid == 0){
    bot.antiraid[message.guild.id] = {
        antiraid: 1 }
    message.channel.send(new Discord.MessageEmbed()
    .setColor(`#ff0000`)
    .setAuthor(" |  Anti-Raid enabled", message.author.displayAvatarURL())
    .setDescription(`:no_entry: Anti raid has been successfully enabled in the server, whoever joins the server will get automatically banned.
Type \`.antiraid\` again to disable it !`));
      if(serverset[message.guild.id].stafflogschannel !== "None") {
        let logs = message.guild.channels.cache.get(serverset[message.guild.id].stafflogschannel);
         const lewddemddbedm = new Discord.MessageEmbed()
           .setColor(`#ff0000`)
           .setAuthor(" |  admin action", message.author.displayAvatarURL())
           .setDescription(`:no_entry: Anti-Raid mode has been enabled by ${message.author.tag}\n*Whoever joins the server will be automatically banned by the bot !*`);
           if(logs)logs.send(lewddemddbedm).catch(O_o => {});
       }
}
else{
    bot.antiraid[message.guild.id] = {
        antiraid: 0 }
    message.channel.send(new Discord.MessageEmbed()
    .setColor(`#ff0000`)
    .setAuthor(" |  Anti-Raid disabled", message.author.displayAvatarURL())
    .setDescription(`:white_check_mark: Anti-raid has been successfully disabled in the server`));
      if(serverset[message.guild.id].stafflogschannel !== "None") {
        let logs = message.guild.channels.cache.get(serverset[message.guild.id].stafflogschannel);
         const lewddemddbedm = new Discord.MessageEmbed()
           .setColor(`#ff0000`)
           .setAuthor(" |  admin action", message.author.displayAvatarURL())
           .setDescription(`:white_check_mark: Anti-raid mode has been disabled by ${message.author.tag}`);
           if(logs)logs.send(lewddemddbedm).catch(O_o => {});
       }
    }}

module.exports.config = {
  name: "antiraid",
  aliases: ["antinuke", "Autoban"]
};

