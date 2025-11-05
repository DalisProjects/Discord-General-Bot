const Discord = require("discord.js");
const moment = require("moment");
let adminlevel = require("../../storage/adminlevel.json");

module.exports.run = async (bot, message, args) => {
    let inline = true
    let role = args.join(` `).toLowerCase();
    if(!role) return message.reply("Specify a role!");
    let gRole = message.guild.roles.cache.find(r => r.name.toLowerCase().includes(role.toLowerCase())) || message.mentions.roles.first() || message.guild.roles.cache.get(args[0]); 
    if(!gRole) return message.reply("Couldn't find that role.");
const rolecrt = moment(gRole.createdAt).format("llll");

    const status = {
        false: "No",
        true: "Yes"
      }

    let roleemebed = new Discord.MessageEmbed()
    .setColor("#00ff00")
    .addField("ID", gRole.id, inline )
    .addField("Name", gRole.name, inline)
    .addField("Mention", `\`<@${gRole.id}>\``, inline)
    .addField("Color", gRole.hexColor, inline)
    .addField("Members", gRole.members.size, inline)
    .addField("Position", gRole.position, inline)
    .addField("Mentionable", status[gRole.mentionable], inline)
    .setTimestamp()
    .setFooter(rolecrt);
 //   .addField("Managed", status[gRole.managed], inline)
    
    message.channel.send(roleemebed);

}

module.exports.config = {
  name:"roleinfo"
}