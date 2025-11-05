const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
//let member = message.mentions.members.first() || message.member,
  //user = member.user;

let person = message.mentions.members.first() || message.guild.members.cache.get(args[0]) ||
  message.guild.members.cache.find(member => member.displayName.toLowerCase().includes(args.join(" ").toLowerCase())) || message.guild.members.cache.find(member => member.user.username.toLowerCase().includes(args.join(" ").toLowerCase())) ||
  message.guild.members.cache.find(member => member.user.tag.toLowerCase().includes(args.join(" ").toLowerCase()));
  if (!person || !args.join(" ")){
let embed = new Discord.MessageEmbed() 
    .setColor("#2A2A2A")
 .setTitle(`${message.author.username}'s avatar`)
 .setImage(message.author.displayAvatarURL({ dynamic: true, size: 1024, format: 'png' }));
 message.channel.send({ embed: embed }).catch(e =>  message.channel.send(e)).catch(O_o => {})
return;
};
  let embed = new Discord.MessageEmbed() 
    .setColor("#2A2A2A")
 .setTitle(`${person.displayName}'s avatar`)
 .setImage(person.user.displayAvatarURL({dynamic : true, size: 1024, format: 'png' })); 
 message.channel.send({ embed: embed }).catch(e =>  message.channel.send(e)).catch(O_o => {})
  return;
};
//msg.member.displayAvatarURL({ dynamic: true, size: 1024, format: 'png' });
module.exports.config = {
  name: "av",
  aliases: ["avatar", "pfp"]
};
