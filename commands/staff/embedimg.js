const Discord = require("discord.js");
let adminlevel = require("../../storage/adminlevel.json");

module.exports.run = async (bot, message, args) => {
const 𝘮𝘮m𝘶𝘯𝘪𝘵𝘺 = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`Sorry, you don't have permissions to use this command !`);
    let botuser = message.guild.members.cache.get("723061621991276574");
  if(!botuser.hasPermission("ADMINISTRATOR") && !botuser.hasPermission("EMBED_LINKS"))return message.member.send(`I don't have administrator nor send embed links permissions to run this command !`).catch(O_o => {});  
  if (!message.member.roles.cache.has(adminlevel[message.guild.id].lvl4) && !message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(𝘮𝘮m𝘶𝘯𝘪𝘵𝘺).catch(e =>  message.channel.send(e)).catch(O_o => {})
  let sayMessage = args.join(" ");
  const 𝘮𝘮m𝘶𝘯dd𝘪𝘵𝘺 = new Discord.MessageEmbed()
  .setColor(`#000000`)
  .setTitle(`Wrong embed format !`)
  .setDescription(`**Example:** \`.embedimg ValidLinkHere\``);
  if (sayMessage) return message.reply(𝘮𝘮m𝘶𝘯dd𝘪𝘵𝘺).catch(e =>  message.channel.send(e)).catch(O_o => {})
  let avEmbed = new Discord.MessageEmbed()
  //.setColor("#ec7e82")
 .setImage(sayMessage);

  return message.channel.send(avEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})
};

module.exports.config = {
  name: "embedimg",
  aliases: ["embedimage", "imageembed", "imgembed"]
};
