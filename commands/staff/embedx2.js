const Discord = require("discord.js");
let adminlevel = require("../../storage/adminlevel.json");

module.exports.run = async (bot, message, args) => {
const 𝘮𝘮m𝘶𝘯𝘪𝘵𝘺 = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`Sorry, you don't have permissions to use this command !`);
    let botuser = message.guild.members.cache.get("723061621991276574");
  if(!botuser.hasPermission("ADMINISTRATOR") && !botuser.hasPermission("EMBED_LINKS"))return message.member.send(`I don't have administrator nor send embed links permissions to run this command !`).catch(O_o => {});  
 if (!message.member.roles.cache.has(adminlevel[message.guild.id].lvl3) && !message.member.roles.cache.has(adminlevel[message.guild.id].lvl4) && !message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(𝘮𝘮m𝘶𝘯𝘪𝘵𝘺).catch(e =>  message.channel.send(e)).catch(O_o => {})
const msg = args.join(' ').split(' | ')
const 𝘮𝘮m𝘶𝘯dd𝘪𝘵𝘺 = new Discord.MessageEmbed()
  .setColor(`#000000`)
  .setTitle(`Wrong embed format !`)
  .setDescription(`**Example:** \`.embedx2 EmbedTitle | EmbedText | ValidImageLink\``);
  if (!msg[0] || !msg[1] || !msg[2])
  return message.reply(𝘮𝘮m𝘶𝘯dd𝘪𝘵𝘺).catch(e =>  message.channel.send(e)).catch(O_o => {})
  let avEmbed = new Discord.MessageEmbed()
.setTitle(`${msg[0]}`)
 .setColor("#000000")
 .setImage(msg[2])
.setDescription(`\n${msg[1]}\n`);
  return message.channel.send(avEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})
};

module.exports.config = {
  name: "embedx2",
  aliases: ["bigembed"]
};

