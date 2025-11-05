const Discord = module.require("discord.js");
let marriagelogs = require("../../storage/marriagelogs.json");
const fs = require("fs");
const moment = require("moment");
let currencylogs = require("../../storage/currencylogs.json");
module.exports.run = async (bot, message, args) => {
  let premiumserver = require("../../storage/premiumserver.json");



if(!marriagelogs[message.author.id]) {
  marriagelogs[message.author.id] = {
    marry: "None"
  }
}
if(!marriagelogs[message.author.id]) {
  marriagelogs[message.author.id] = {
    marrysince: 0
  }
}
var memroles;
if(marriagelogs[message.author.id].marry === "None"){
 memroles = "Not married";
}
else {
  let coidnd = moment(marriagelogs[message.author.id].marrysince).format("llll");
 memroles = `<@${marriagelogs[message.author.id].marry}> (${marriagelogs[message.author.id].marry})\nMarried since ${coidnd}`
}; 
let amountis = parseInt(currencylogs[message.author.id].coins, 10);
let amount2is = parseInt(currencylogs[message.author.id].bank, 10);
let totalbalis = amountis + amount2is;
  let embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username + "#" + message.author.discriminator,  message.author.displayAvatarURL())
    .setDescription(`\n<@${message.author.id}>
    **Reputations:**  ${currencylogs[message.author.id].reps} :military_medal:
    **Total Wealth:** ${totalbalis} $
    \n**Married to:** ${memroles}\n\n**Bio:** ${currencylogs[message.author.id].bio}`) //\n**Balance:\n Wallet: ${currencylogs[message.author.id].coins}\n Bank: ${currencylogs[message.author.id].bank}\n Total Wealth: ${totalbalis}**
    .setColor("RANDOM")
    .setThumbnail(`${message.author.displayAvatarURL()}`)   
    .setFooter(`ID: ${message.author.id}`)
    .setTimestamp();

  message.channel.send({ embed: embed }).catch(e =>  message.channel.send(e)).catch(O_o => {})
  return;
};

module.exports.config = {
  name: "profile"
};
