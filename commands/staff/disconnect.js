let discord = require("discord.js");
let adminlevel = require("../../storage/adminlevel.json");

module.exports.run = async (bot, message, args) => {
  let botuser = message.guild.members.cache.get("723061621991276574");
  if(!botuser.hasPermission("ADMINISTRATOR") && !botuser.hasPermission("MOVE_MEMBERS"))return message.member.send(`I don't have administrator nor mpve members permissions to run this command !`).catch(O_o => {});  
  let person = message.mentions.members.first() || message.guild.members.cache.get(args[0]) ||
  message.guild.members.cache.find(member => member.displayName.toLowerCase().includes(args.join(" ").toLowerCase())) || message.guild.members.cache.find(member => member.user.username.toLowerCase().includes(args.join(" ").toLowerCase())) ||
  message.guild.members.cache.find(member => member.user.tag.toLowerCase().includes(args.join(" ").toLowerCase()));
  
  const 𝘮𝘮m𝘶𝘯𝘪𝘵𝘺 = new discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`Sorry, you don't have permissions to use this command !`);
 if (!message.member.roles.cache.has(adminlevel[message.guild.id].lvl2) && !message.member.roles.cache.has(adminlevel[message.guild.id].lvl3) && !message.member.hasPermission("ADMINISTRATOR") && !message.member.hasPermission("MOVE_MEMBERS"))
    return message.channel.send(𝘮𝘮m𝘶𝘯𝘪𝘵𝘺).catch(e =>  message.channel.send(e)).catch(O_o => {})
  const missingArgsEmbed = new discord.MessageEmbed() // Creates the embed thats sent if the command isnt run right
        .setColor(`#000000`)
        .setTitle('Missing Arguments!')
        .setDescription('Usage: disconnect [User]')
  if (!person || !args.join(" ")) return message.channel.send(missingArgsEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})
  
  const lewddddes = new discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`Sorry but this specified member cannot be disconnected from voice chats!`);
    if (person.roles.cache.has(adminlevel[message.guild.id].lvl1) || person.roles.cache.has(adminlevel[message.guild.id].lvl2) || person.roles.cache.has(adminlevel[message.guild.id].lvl3) || person.roles.cache.has(adminlevel[message.guild.id].lvl4) || person.hasPermission("ADMINISTRATOR"))
    return message.channel.send(lewddddes).catch(e =>  message.channel.send(e)).catch(O_o => {})

 const lewdddddzees = new discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`${person} is not in a voice channel <@${message.author.id}>`);
  if (!person.voice.channel)return message.channel.send(lewdddddzees);
  person.voice.setChannel(null).catch(e =>  message.channel.send(e)).catch(O_o => {})
  
  const lewdddes = new discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`✅ | ${person.displayName} has been disconnected from vc by ${message.author.username}`);
    message.channel.send(lewdddes).catch(e =>  message.channel.send(e)).catch(O_o => {})
   setTimeout(() => {message.delete().catch(O_o => {});}, 200);
};
module.exports.config = {
  name: "disconnect",
  aliases: ["dc"]
};
