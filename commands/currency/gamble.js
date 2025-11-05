
let currencylogs = require("../../storage/currencylogs.json");
const fs = require("fs");
let Discord = require("discord.js");
const ms = require("parse-ms");
const gambletime = {};


module.exports.run = async (bot, message, args) => {
  let premiumserver = require("../../storage/premiumserver.json");
  let embedps = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`This command can only be used in premium servers !\nclick [here](https://discord.gg/nirvana) to donate and enjoy premium nirvana features !`);
  //if(premiumserver[message.guild.id].premiumserver == 0)return message.channel.send(embedps);
  if(!gambletime[message.author.id]){
    gambletime[message.author.id] = {
      gambletime: 10000,
    }
  }
  let author = gambletime[message.author.id].gambletime
    let timeout = 10000;
    if(timeout - (Date.now() - author) > 0) {
      let time = ms(timeout - (Date.now() - author));
      message.channel.send(new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`You have already gambled recently\nTry again in ${time.seconds}s.`))
      return
    }

    
    gambletime[message.author.id] = {
      gambletime: Date.now(),
    }


   let amount1 = args.join(" ");
   if(!amount1) return message.channel.send("Invalid amount ! ")
    if (amount1.includes("-")) {
        message.channel.send(`Invalid amount !`);
        return;
      }
    if(amount1 > currencylogs[message.author.id].coins) return message.channel.send(`You don't have enough money to gamble !`);
    if (isNaN(amount1) && amount1 !== "all") return message.channel.send(`The specified amount isn't valid`); 
    if(amount1 === "all") amount1 = currencylogs[message.author.id].coins;
    if(amount1 < 1) return message.channel.send(`You can't gamble less than $1`);
    if(amount1 > 5000000) return message.channel.send(`You can't gamble more than $5,000,000`);
    
    let luckbet = Math.floor(Math.random() * 11);
      if(luckbet == 1 || luckbet == 3 || luckbet == 5 || luckbet == 7 || luckbet == 9)
      {
        let perlostpar = parseInt(Math.floor(Math.random() * parseInt(amount1, 10)), 10);
        let betamounte = parseInt(currencylogs[message.author.id].coins, 10);
        currencylogs[message.author.id] = {
          coins: betamounte - perlostpar,
          bank: currencylogs[message.author.id].bank,
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

        let embed = new Discord.MessageEmbed()
        .setTitle(`Unluckily ${message.author.username}`)
        .setDescription(`\nYou just lost your bet !\n
        **Removed $${perlostpar} from your wallet**`)
        .setColor("#da1a1a")
        .setFooter(`You have $${currencylogs[message.author.id].coins} left now`) 
        message.channel.send(embed).catch(e =>  message.channel.send(e)).catch(O_o => {})
        return;
      }
      
    else {    
    let perwonpar = parseInt(Math.floor(Math.random() * parseInt(amount1, 10)), 10);      
    currencylogs[message.author.id] = {
      coins: parseInt(currencylogs[message.author.id].coins, 10) + perwonpar,
      bank: currencylogs[message.author.id].bank,
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
    let embed = new Discord.MessageEmbed()
    .setTitle(`Congratulations ${message.author.username}`)
    .setDescription(`\nYou just won your bet !\n
    **Added $${perwonpar} to your wallet**`)
    .setColor("#30c00e") 
    .setFooter(`You have $${currencylogs[message.author.id].coins} now`) 
    message.channel.send(embed).catch(e =>  message.channel.send(e)).catch(O_o => {})
    return;
  }
    
};
module.exports.config = {
  name: "gamble",
  aliases: ["bet"]
};