const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {

  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) ||
  message.guild.members.cache.find(member => member.displayName.toLowerCase().includes(args.join(" ").toLowerCase())) || message.guild.members.cache.find(member => member.user.username.toLowerCase().includes(args.join(" ").toLowerCase())) ||
  message.guild.members.cache.find(member => member.user.tag.toLowerCase().includes(args.join(" ").toLowerCase()));
  const lewddes = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`Sorry, you didn't mention or specify the user.`);
  if (!member || !args.join(" ")) return message.channel.send(lewddes).catch(e =>  message.channel.send(e)).catch(O_o => {})
  let reason = args.slice(1).join(" ");
  if (!reason) reason = "No reason provided";
const lewdddes = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`\`${member.user.tag}\` has been banned by \`${message.author.tag}\` for: **${reason}**`);
  if (!member || !args.join(" ")) return message.channel.send(lewddes).catch(e =>  message.channel.send(e)).catch(O_o => {})
  message.channel.send(lewdddes).catch(e =>  message.channel.send(e)).catch(O_o => {})
};

module.exports.config = {
  name: "secretban"
};
