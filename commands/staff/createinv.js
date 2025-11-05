const Discord = require("discord.js");


let adminlevel = require("../../storage/adminlevel.json");

module.exports.run = async (bot, message, args) => {
  let botuser = message.guild.members.cache.get("723061621991276574");
  if(!botuser.hasPermission("ADMINISTRATOR") && !botuser.hasPermission("CREATE_INSTANT_INVITE"))return message.member.send(`I don't have administrator nor create instant invite permissions to run this command !`).catch(O_o => {});  
  const 𝘮𝘮m𝘶𝘯𝘪𝘵𝘺 = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`Sorry, you don't have permissions to use this command !`);
    if (!message.member.roles.cache.has(adminlevel[message.guild.id].lvl2 && adminlevel[message.guild.id].lvl3) && !message.member.roles.cache.has(adminlevel[message.guild.id].lvl4) && !message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(𝘮𝘮m𝘶𝘯𝘪𝘵𝘺).catch(e =>  message.channel.send(e)).catch(O_o => {})

 
  message.channel.createInvite({ maxAge: 0 }).then(invite => message.channel.send("Found Invite:\n" + invite.code));
  return;
};
module.exports.config = {
  name: "createinv"
};
