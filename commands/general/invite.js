const Discord = module.require("discord.js");
const moment = require("moment");
module.exports.run = async (bot, message, args) => {


  
  
  
  
  
  
  
  
    let embed = new Discord.MessageEmbed()
    .setDescription(`Here's the invite link to invite the bot to your server !\n[Click here](https://discord.com/api/oauth2/authorize?client_id=723061621991276574&permissions=8&scope=bot)`)//   |   [Vote for me please](https://top.gg/bot/723061621991276574)`)
    //   .addField("Joined at:", user.message.guildmember.joinedat, true)
   .setFooter(`Support server: https://discord.gg/cNpRJ23MSQ`)
   // .setTimestamp();

  message.channel.send({ embed: embed }).catch(O_o => {})
  return;
};

module.exports.config = {
  name: "invite",
  aliases: ["invitelink", "botinvite","invitation"]
};
