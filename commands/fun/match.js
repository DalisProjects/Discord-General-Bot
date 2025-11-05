



const Discord = require("discord.js")
 
module.exports.run = async (bot, message, args) => {
let sayMessage = args[0];
let sayMessage2 = args[1];

const lewddes = new Discord.MessageEmbed()
    .setDescription(`You need to specify a user `);
//if(args < 1) return message.channel.send(lewddes).catch(e =>  message.channel.send(e)).catch(O_o => {})
// `:ice_cube:
  //  `<a:nvemptybar:735954982469107712>`, 
var result;
let fulled = Math.floor(Math.random() * 101);
if(fulled < 11) result = `<a:nvemptybar:735954982469107712><a:nvemptybar:735954982469107712><a:nvemptybar:735954982469107712><a:nvemptybar:735954982469107712><a:nvemptybar:735954982469107712><a:nvemptybar:735954982469107712><a:nvemptybar:735954982469107712><a:nvemptybar:735954982469107712><a:nvemptybar:735954982469107712><a:nvemptybar:735954982469107712> soo bad :rage:`
if(fulled > 10 && fulled < 21 ) result = `:ice_cube:<a:nvemptybar:735954982469107712><a:nvemptybar:735954982469107712><a:nvemptybar:735954982469107712><a:nvemptybar:735954982469107712><a:nvemptybar:735954982469107712><a:nvemptybar:735954982469107712><a:nvemptybar:735954982469107712><a:nvemptybar:735954982469107712><a:nvemptybar:735954982469107712> bad :angry:`
if(fulled > 20 && fulled < 31 ) result = `:ice_cube::ice_cube:<a:nvemptybar:735954982469107712><a:nvemptybar:735954982469107712><a:nvemptybar:735954982469107712><a:nvemptybar:735954982469107712><a:nvemptybar:735954982469107712><a:nvemptybar:735954982469107712><a:nvemptybar:735954982469107712> fucked up :neutral_face:`
if(fulled > 30 && fulled < 41 ) result = `:ice_cube::ice_cube::ice_cube:<a:nvemptybar:735954982469107712><a:nvemptybar:735954982469107712><a:nvemptybar:735954982469107712><a:nvemptybar:735954982469107712><a:nvemptybar:735954982469107712><a:nvemptybar:735954982469107712> not too bad :pensive:`
if(fulled > 40 && fulled < 51 ) result = `:ice_cube::ice_cube::ice_cube::ice_cube:<a:nvemptybar:735954982469107712><a:nvemptybar:735954982469107712><a:nvemptybar:735954982469107712><a:nvemptybar:735954982469107712><a:nvemptybar:735954982469107712> good enough :sparkling_heart:`
if(fulled > 50 && fulled < 61 ) result = `:ice_cube::ice_cube::ice_cube::ice_cube::ice_cube:<a:nvemptybar:735954982469107712><a:nvemptybar:735954982469107712><a:nvemptybar:735954982469107712><a:nvemptybar:735954982469107712> good :purple_heart:`
if(fulled > 60 && fulled < 71 ) result = `:ice_cube::ice_cube::ice_cube::ice_cube::ice_cube::ice_cube:<a:nvemptybar:735954982469107712><a:nvemptybar:735954982469107712><a:nvemptybar:735954982469107712> Acceptable :heartpulse:`
if(fulled > 70 && fulled < 81) result = `:ice_cube::ice_cube::ice_cube::ice_cube::ice_cube::ice_cube::ice_cube:<a:nvemptybar:735954982469107712><a:nvemptybar:735954982469107712> pretty good :revolving_hearts:`
if(fulled > 80 && fulled < 91 ) result = `:ice_cube::ice_cube::ice_cube::ice_cube::ice_cube::ice_cube::ice_cube::ice_cube:<a:nvemptybar:735954982469107712>`
if(fulled > 90 && fulled < 101 ) result = `:ice_cube::ice_cube::ice_cube::ice_cube::ice_cube::ice_cube::ice_cube::ice_cube::ice_cube: Woah epic :heart_eyes_cat:`
let randomping = message.guild.members.cache.random()
const lewddeees1 = new Discord.MessageEmbed()
    .setDescription(`:gift_heart:**__Matchmaking__**:gift_heart:\n\n${message.member.displayName} x ${randomping.displayName}\n\n${fulled}/100 ${result} `);
    if (!sayMessage2 && !sayMessage) return message.channel.send(lewddeees1);
const lewddes1 = new Discord.MessageEmbed()
    .setDescription(`:gift_heart:**__Matchmaking__**:gift_heart:\n\n${message.member.displayName} x ${sayMessage}\n\n${fulled}/100 ${result} `);
    if (!sayMessage2) return message.channel.send(lewddes1);

const edzedfzf = new Discord.MessageEmbed()
    .setDescription(`:gift_heart:**__Matchmaking__**:gift_heart:\n\n${sayMessage} x ${sayMessage2}\n\n${fulled}/100 ${result} `);
if(sayMessage2 && sayMessage)return message.channel.send(edzedfzf);

}
module.exports.config = {
  name: "match",
  aliases: ["love"]
};
