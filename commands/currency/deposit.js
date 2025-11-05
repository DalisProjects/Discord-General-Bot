
let currencylogs = require("../../storage/currencylogs.json");
const fs = require("fs");
let Discord = require("discord.js");
const ms = require("parse-ms");
//const cooldownnn = new Set();

module.exports.run = async (bot, message, args) => {
  let premiumserver = require("../../storage/premiumserver.json");
  let embedps = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`This command can only be used in premium servers !\nclick [here](https://discord.gg/nirvana) to donate and enjoy premium nirvana features !`);
  //if(premiumserver[message.guild.id].premiumserver == 0)return message.channel.send(embedps);

      let reason = args.join(" ");
      if(!reason) return message.channel.send("You need to specify the amount that you want to deposit !");
    if (reason.includes("-")) {
        message.channel.send(`Invalid Amount !`);
        return;
      }
      if (reason.includes("`")) {
        message.channel.send(`Invalid Amount !`);
        return;
      }
      if (reason.includes(".")) {
        message.channel.send(`Invalid Amount !`);
        return;
      }
      if (reason.includes(",")) {
        message.channel.send(`Invalid Amount !`);
        return;
      }
      if(reason > currencylogs[message.author.id].coins) return message.channel.send(`You don't have enough money to deposit !`);
      if (isNaN(reason) && reason !== "all") return message.channel.send(`The specified amount isn't valid`); 
      if(reason === "all") reason = currencylogs[message.author.id].coins;
      if(reason < 1) return message.channel.send(`You cannot deposit $0 to your bank!`);
      let amountcc = parseInt(currencylogs[message.author.id].coins, 10);
      let amount = parseInt(reason, 10);
    let amount2 = parseInt(currencylogs[message.author.id].bank, 10);
    let base = amount
      if(amount === base) {
        currencylogs[message.author.id] = {
          coins: amountcc - amount,
          bank: amount2 + amount,
          fish: currencylogs[message.author.id].fish,
          weed: currencylogs[message.author.id].weed,
          rings: currencylogs[message.author.id].rings,
          daily: currencylogs[message.author.id].daily,
          weekly: currencylogs[message.author.id].weekly,
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
          .setDescription(`\n$${reason} deposited, $${currencylogs[message.author.id].coins} left in your wallet`)
          .setFooter(`Your bank balance is $${currencylogs[message.author.id].bank} now`);
      message.channel.send(embed)
      
};
module.exports.config = {
  name: "deposit",
  aliases: ["dep"]
};