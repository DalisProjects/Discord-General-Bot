let currencylogs = require("../../storage/currencylogs.json");
const fs = require("fs");
let Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let premiumserver = require("../../storage/premiumserver.json");
  let embedps = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`This command can only be used in premium servers !\nclick [here](https://discord.gg/nirvana) to donate and enjoy premium nirvana features !`);
  //if(premiumserver[message.guild.id].premiumserver == 0)return message.channel.send(embedps);
    
    let embed2 = new Discord.MessageEmbed()
        .setTitle(message.author.username)
        .setColor("RANDOM")
        .setDescription(`\nYou have ${currencylogs[message.author.id].weed} gram of weed`)
    
    message.channel.send(embed2).catch(e =>  message.channel.send(e)).catch(O_o => {})
};
module.exports.config = {
  name: "weed"
};