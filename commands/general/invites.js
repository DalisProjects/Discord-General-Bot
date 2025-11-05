const Discord = module.require("discord.js");
const moment = require("moment");
module.exports.run = async (bot, message, args) => {
    return;
    let person = message.mentions.members.first() || message.guild.members.cache.get(args[0]) ||
    message.guild.members.cache.find(member => member.displayName.toLowerCase().includes(args.join(" ").toLowerCase())) || message.guild.members.cache.find(member => member.user.username.toLowerCase().includes(args.join(" ").toLowerCase())) ||
    message.guild.members.cache.find(member => member.user.tag.toLowerCase().includes(args.join(" ").toLowerCase()));




    if (!person || !args.join(" ")){ 
    let embed = new Discord.MessageEmbed()
   .setTitle("Invites !")
   .setDescription(`${message.author.tag}, you have `)
   .setFooter(`Support server: https://discord.gg/nirvana`)
  message.channel.send({ embed: embed }).catch(O_o => {})
  return;
}};

module.exports.config = {
  name: "invites",
  aliases: ["myinvites"]
};
