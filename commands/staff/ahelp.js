const Discord = require("discord.js");


const talkedRecently = new Set();
let adminlevel = require("../../storage/adminlevel.json");
let serverset = require("../../storage/serverset.json");

module.exports.run = async (bot, message, args) => {
  const 𝘮𝘮m𝘶𝘯𝘪𝘵𝘺 = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`Sorry, you don't have permissions to use this command !`);
   if(!message.member.roles.cache.has(adminlevel[message.guild.id].lvl1) & !message.member.roles.cache.has(adminlevel[message.guild.id].lvl2) && !message.member.roles.cache.has(adminlevel[message.guild.id].lvl3) && !message.member.roles.cache.has(adminlevel[message.guild.id].lvl4) && !message.member.hasPermission("ADMINISTRATOR"))
   return message.channel.send(𝘮𝘮m𝘶𝘯𝘪𝘵𝘺).catch(e =>  message.channel.send(e)).catch(O_o => {})
  let mesmberEmbed = new Discord.MessageEmbed()
    .setColor("#f76ff1")
    .setTimestamp()
    .setThumbnail("https://i.imgur.com/GihXAVA.gif?size=128")
    .setTitle("Admin commands list !")
    .setFooter(`Requested by ${message.author.username}`)
    .setAuthor("Nirvana", `https://i.imgur.com/GihXAVA.gif?size=128`)
    .setDescription(`These are all the commands the bot has to offer !\n**Server prefix:** ${serverset[message.guild.id].prefix}`)
     .addField(`Admin lvl 1`,"\`ahelp - reason - nickname - inrole - purge - warn - unmute - mute - roleinfo\`")//
    .addField(`Admin lvl 2`,"\`off - disconnect -rpevent- createinv - hirepm - mentionable\`")//pic  - booster - supporter
    .addField(`Admin lvl 3`,"\`antiraid - createrole - role - customrole - rolecolor - lockdown - ban\`")
    .addField(`Admin lvl 4`,"\`delrole - rolename - embed - embedimg - lockall - kick - lockall\`")//- unban
     .addField(`Owner`,"\`embedx2 - config\`")//- dmrole - dmall - dmroleembed
    // .addField(`Bot developer`,"\`kickbot - addcoins - setpremium - addcoins - balset - resetstat\`")
    .addField(`Information`,`*Contact the server owner ${message.guild.owner} if you need help.\nDo not abuse powers !*`);

  message.channel.send(mesmberEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})
 
};

module.exports.config = {
  name: "ahelp",
  aliases: ["acommands", "acmds"]
};

