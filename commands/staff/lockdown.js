const discord = require("discord.js");
let serverset = require("../../storage/serverset.json");
let adminlevel = require("../../storage/adminlevel.json");

module.exports.run = async (bot, message, args) => {
  let botuser = message.guild.members.cache.get("723061621991276574");
  if(!botuser.hasPermission("ADMINISTRATOR") && !botuser.hasPermission("MANAGE_CHANNELS"))return message.member.send(`I don't have administrator nor manage channels permissions to run this command !`).catch(O_o => {}); 
  let everyone = message.guild.roles.cache.find(r => r.name === "@everyone");
  const 𝘮𝘮m𝘶𝘯𝘪𝘵𝘺 = new discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`Sorry, you don't have permissions to use this command !`);
  if (!message.member.roles.cache.has(adminlevel[message.guild.id].lvl3) && !message.member.roles.cache.has(adminlevel[message.guild.id].lvl4) && !message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(𝘮𝘮m𝘶𝘯𝘪𝘵𝘺).catch(e =>  message.channel.send(e)).catch(O_o => {})
  let channel = message.channel;
  if (!args[0]) {
    channel.createOverwrite(everyone, { SEND_MESSAGES: false });
  //  channel.createOverwrite(everyone, { READ_MESSAGES: false });
    message.channel.send(`This channel has been successfully locked, use **.lockdown off** to unlock it !`);
    if(serverset[message.guild.id].stafflogschannel !== "None") {
      let logs = message.guild.channels.cache.get(serverset[message.guild.id].stafflogschannel);
       const lewddemddbedm = new discord.MessageEmbed()
         .setColor(`#ff0000`)
         .setAuthor(" |  admin action", message.author.displayAvatarURL())
         .setDescription(`User ${message.author.tag} has locked channel ${message.channel.name}`);
         if(logs)logs.send(lewddemddbedm).catch(O_o => {});
     }
  }
  if (args[0] === "off") {
    channel.createOverwrite(everyone, { SEND_MESSAGES: null });
 //   channel.createOverwrite(everyone, { READ_MESSAGES: false });
    message.channel.send(`Channel unlocked ! <@${message.author.id}>`);
    if(serverset[message.guild.id].stafflogschannel !== "None") {
      let logs = message.guild.channels.cache.get(serverset[message.guild.id].stafflogschannel);
       const lewddemddbedm = new discord.MessageEmbed()
         .setColor(`#ff0000`)
         .setAuthor(" |  admin action", message.author.displayAvatarURL())
         .setDescription(`User ${message.author.tag} has unlocked channel ${message.channel.name}`);
         if(logs)logs.send(lewddemddbedm).catch(O_o => {});
     }
  }
};

module.exports.config = {
  name: "lockdown",
  aliases: ["shutdown", "lockchannel"]
};