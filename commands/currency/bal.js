
let currencylogs = require("../../storage/currencylogs.json");
const fs = require("fs");
let Discord = require("discord.js");
let premiumserver = require("../../storage/premiumserver.json");


module.exports.run = async (bot, message, args) => {
  let embedps = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`This command can only be used in premium servers !\nclick [here](https://discord.gg/nirvana) to donate and enjoy premium nirvana features !`);
  //if(premiumserver[message.guild.id].premiumserver == 0)return message.channel.send(embedps);

    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) ||
  message.guild.members.cache.find(member => member.displayName.toLowerCase().includes(args.join(" ").toLowerCase())) || message.guild.members.cache.find(member => member.user.username.toLowerCase().includes(args.join(" ").toLowerCase())) ||
  message.guild.members.cache.find(member => member.user.tag.toLowerCase().includes(args.join(" ").toLowerCase()));
    if(member && args.join(" ")){
      if(!currencylogs[member.user.id]){
        currencylogs[member.user.id] = {
          coins: 0,
          bank: 0,
          fish: 0,
          weed: 0,
          rings: 0,
          daily: 86400 * 1000,
          weekly: 604800000,
          reps: 0,
          reptime: 86400 * 1000,
          work: 600000,
          shipname: "Not set yet",
          shipnc: 0,
          bio: "None",
          hourly: 3600 * 1000,
          monthly: 2628000 * 1000,
          prefix: "None"
      }
      fs.writeFile("./storage/currencylogs.json", JSON.stringify(currencylogs), (err) => {
        if(err) console.log(err)})}
    let amountis = parseInt(currencylogs[member.user.id].coins, 10);
    let amount2is = parseInt(currencylogs[member.user.id].bank, 10);
    let totalbalis = amountis + amount2is;
        let embed2 = new Discord.MessageEmbed()
        .setTitle(member.user.username)
        .setColor("RANDOM")
        .setDescription(`\nWallet: $${currencylogs[member.user.id].coins}\nBank: $${currencylogs[member.user.id].bank}`)
        .setFooter(`Total coins: $${totalbalis}`)
    
    message.channel.send(embed2).catch(e =>  message.channel.send(e)).catch(O_o => {})
    return;
    };

    let amount = parseInt(currencylogs[message.author.id].coins, 10);
    let amount2 = parseInt(currencylogs[message.author.id].bank, 10);
    let totalbal = amount + amount2;
    let embed2 = new Discord.MessageEmbed()
        .setTitle(message.author.username)
        .setColor("RANDOM")
        .setDescription(`\nWallet: $${currencylogs[message.author.id].coins}\nBank: $${currencylogs[message.author.id].bank}`)
        .setFooter(`Total coins: $${totalbal}`)
   
    message.channel.send(embed2).catch(e =>  message.channel.send(e)).catch(O_o => {})
};
module.exports.config = {
  name: "bal",
  aliases: ["balance", "cash", "coins", "money"]
};
