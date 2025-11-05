const Discord = require("discord.js");


let adminlevel = require("../../storage/adminlevel.json");

module.exports.run = async (bot, message, args) => {
 
 
    const 𝘮𝘮m𝘶𝘯𝘪𝘵𝘺 = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`Sorry, you don't have permissions to use this command !`);
 if (!message.member.roles.cache.has(adminlevel[message.guild.id].lvl4) && !message.member.hasPermission("ADMINISTRATOR"))
 return message.channel.send(𝘮𝘮m𝘶𝘯𝘪𝘵𝘺).catch(e =>  message.channel.send(e)).catch(O_o => {})
 const msg = args.join(' ').split(' | ')
 let avvEmbed = new Discord.MessageEmbed()
  .setTitle(msg[1])
   .setColor("#000000")
   .setDescription(`\n${msg[2]}\n`)
   .setImage(`${msg[3]}`)
  // .setFooter(`${msg[4]}`);
    
    message.channel.messages.fetch(msg[0]).catch(e =>  message.channel.send(e)).catch(O_o => {}).then(msg => msg.edit(avvEmbed));
  };

module.exports.config = {
  name: "editmsg"
};
