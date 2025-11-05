


const Discord = require("discord.js")
 
module.exports.run = async (bot, message, args) => {
let sayMessage = args.join(" ");
let ratus = message.mentions.members.first();


let fulled = Math.floor(Math.random() * 11);
const lewddes = new Discord.MessageEmbed()
    .setDescription(`**${message.author.username}**, I'd give you ${fulled}/10`);
if(args < 1 ) return message.channel.send(lewddes).catch(e =>  message.channel.send(e)).catch(O_o => {})
const lewddes1 = new Discord.MessageEmbed()
    .setDescription(`i'd give **${sayMessage}** ${fulled}/10`);
if (args > 1 || !ratus) return message.channel.send(lewddes1);
if(ratus.user.id === message.author.id) {
  return message.channel.send(lewddes).catch(e =>  message.channel.send(e)).catch(O_o => {})

} else {

const lewddes2 = new Discord.MessageEmbed()
    .setDescription(`I'd give **__${ratus.user.username}__** ${fulled}/10 `);
message.channel.send(lewddes2); }
}
module.exports.config = {
  name: "rate"
}