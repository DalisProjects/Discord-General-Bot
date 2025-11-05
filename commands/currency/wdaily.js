
let currencylogs = require("../../storage/currencylogs.json");
const ms = require("parse-ms");
const fs = require("fs");
let Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    return;
    let premiumserver = require("../../storage/premiumserver.json");
  let embedps = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`This command can only be used in premium servers !\nclick [here](https://discord.gg/nirvana) to donate and enjoy premium nirvana features !`);
  //if(premiumserver[message.guild.id].premiumserver == 0)return message.channel.send(embedps);
    if(!wcurrencylogs[message.author.id]) {
        wcurrencylogs[message.author.id] = {
            wdaily: 86400 * 1000
        }
    }
        let author = wcurrencylogs[message.author.id].wdaily
        let timeout = 86400 * 1000;
        // let daily = 86400;
        if (timeout - (Date.now() - author) > 0) {
          let time = ms(timeout - (Date.now() - author));
      
          let timeEmbed = new Discord.MessageEmbed()
          .setColor("#FFFFFF")
          .setDescription(`You are still on cooldown\n\nYou can get your daily weed again in ${time.hours}h ${time.minutes}m ${time.seconds}s `);
          message.channel.send(timeEmbed)
          return
        }
     
     if(!currencylogs[message.author.id]) {
         currencylogs[message.author.id] = {
             weeds: 0
         }
     }
     let amountt = Math.floor(Math.random() * 10) + 10;
     let amount = parseInt(amountt, 10);
     let amount2 = parseInt(currencylogs[message.author.id].weed, 10);
     let base = amount
     if(amount === base) {
         currencylogs[message.author.id] = {
             weeds: amount2 + amount
         };
         fs.writeFile("./storage/weeds.json", JSON.stringify(weeds), (err) => {
             if(err) console.log(err)})
     }
     let weed = currencylogs[message.author.id].weed
     let embed = new Discord.MessageEmbed()
         .setTitle(message.author.username)
         .setColor("RANDOM")
         .setDescription(`\nAdded ${amount} grams of weed to your inventory !`)
         .setFooter(`You have ${weed} grams now`);
     
     message.channel.send(embed)
    
  
    fs.writeFile("./storage/wdaily.json", JSON.stringify(wdaily), (err) => {
        if(err) console.log(err)
    })
};
module.exports.config = {
  name: "wdaily",
  aliases: ["weeddaily"]
};