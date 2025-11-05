
let currencylogs = require("../../storage/currencylogs.json");
const fs = require("fs");
let Discord = require("discord.js");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
    let premiumserver = require("../../storage/premiumserver.json");
  let embedps = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`This command can only be used in premium servers !\nclick [here](https://discord.gg/nirvana) to donate and enjoy premium nirvana features !`);
  //if(premiumserver[message.guild.id].premiumserver == 0)return message.channel.send(embedps);
  let d = (Date.now() - message.author.createdTimestamp) / 1000;
  let years = Math.floor(d / 31536000);
  d = d - years * 31536000;
  let months = Math.floor(d / 2592000);
  d = d - months * 2592000;
  let days = Math.floor(d / 86400);
  d = d- days * 84600;
  let hours = Math.floor(d / 3600);
  d = d - hours * 3600;
  let minutes = Math.floor(d / 60);
  let seconds = d - minutes * 60;
if(months < 1 && years < 1 && days < 15)return message.channel.send(new Discord.MessageEmbed()
.setColor("#FFFFFF")
.setDescription(`Your account has to be atleast 2 week old or more inorder to claim your weekly paycheck !`))     
  let timeout = 604800000;
        if (timeout - (Date.now() - currencylogs[message.author.id].weekly) > 0) {
          let time = ms(timeout - (Date.now() - currencylogs[message.author.id].weekly));
      
          let timeEmbed = new Discord.MessageEmbed()
          .setColor("#FFFFFF")
          .setDescription(`You are still on cooldown\n\nYou can get your weekly coins again in ${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s `);
          message.channel.send(timeEmbed)
          return
        }
     let amountt = Math.floor(Math.random() * 10000) + 20000;
     let amount = parseInt(amountt, 10);
     let amount2 = parseInt(currencylogs[message.author.id].coins, 10);
     let base = amount
     if(amount === base) {
      currencylogs[message.author.id] = {
        coins: amount2 + amount,
        bank: currencylogs[message.author.id].bank,
        fish: currencylogs[message.author.id].fish,
        weed: currencylogs[message.author.id].weed,
        rings: currencylogs[message.author.id].rings,
        daily: currencylogs[message.author.id].daily,
        weekly: Date.now(),
        reps: currencylogs[message.author.id].reps,
        reptime: currencylogs[message.author.id].reptime,
        work: currencylogs[message.author.id].work,
        shipname: currencylogs[message.author.id].shipname,
        shipnc: currencylogs[message.author.id].shipnc,
        bio: currencylogs[message.author.id].bio,
        hourly: currencylogs[message.author.id].hourly,
        monthly: currencylogs[message.author.id].monthly,
        prefix: currencylogs[message.author.id].prefix,
    }
         fs.writeFile("./storage/currencylogs.json", JSON.stringify(currencylogs), (err) => {
             if(err) console.log(err)})
     }
     let embed = new Discord.MessageEmbed()
         .setTitle(message.author.username)
         .setColor("RANDOM")
         .setDescription(`\nAdded $${amount} weekly paycheck to your balance !`)
         .setFooter(`You have $${currencylogs[message.author.id].coins} now`);
     
     message.channel.send(embed)

};
module.exports.config = {
  name: "weekly",
  aliases: ["weekly"]
};