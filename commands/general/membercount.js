const Discord = require("discord.js");


const moment = require("moment");





module.exports.run = async (bot, message, args) => {

   let urbEmbed = new Discord.MessageEmbed()
        .setTitle(`Server members`)
        .setDescription(message.guild.memberCount)
     //   .setFooter(`Created at ${rolecrt}`);
          message.channel.send(urbEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})


};

module.exports.config = {
  name: "membercount",
  aliases: ["memberscount"]
};
