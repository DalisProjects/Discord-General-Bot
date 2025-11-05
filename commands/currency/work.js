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

let author = currencylogs[message.author.id].work

let timeout = 600000;

if (timeout - (Date.now() - author) > 0) {
    let time = ms(timeout - (Date.now() - author));

    let timeEmbed = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`You have already worked recently\nTry again in ${time.minutes}m ${time.seconds}s `);
    message.channel.send(timeEmbed)
  } else {

    let replies = ['Programmer','Builder','Waiter','Busboy','Chief','Mechanic']
    let reason = args.join(" ");
    let result = Math.floor((Math.random() * replies.length));
    let amount = Math.floor(Math.random() * 1100) + 300;
    let amounttt = parseInt(amount, 10);
    let amountt2 = parseInt(currencylogs[message.author.id].coins, 10);
    currencylogs[message.author.id] = {
        coins: amounttt + amountt2,
        bank: currencylogs[message.author.id].bank,
        fish: currencylogs[message.author.id].fish,
        weed: currencylogs[message.author.id].weed,
        rings: currencylogs[message.author.id].rings,
        daily: currencylogs[message.author.id].daily,
        weekly: currencylogs[message.author.id].weekly,
        reps: currencylogs[message.author.id].reps,
        reptime: currencylogs[message.author.id].reptime,
        work: Date.now(),
        shipname: currencylogs[message.author.id].shipname,
        shipnc: currencylogs[message.author.id].shipnc,
        bio: currencylogs[message.author.id].bio,
        hourly: currencylogs[message.author.id].hourly,
        monthly: currencylogs[message.author.id].monthly,
        prefix: currencylogs[message.author.id].prefix,

    }
    fs.writeFile("./storage/currencylogs.json", JSON.stringify(currencylogs), (err) => {
      if(err) console.log(err)})

    let embed1 = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(` You worked as a ${replies[result]} and earned ${amount} coins`)
    .setFooter(`You have $${currencylogs[message.author.id].coins} in your wallet now`)
    message.channel.send(embed1)


};
};
module.exports.config = {
    name: "work",
    aliases: ["job"]
  };