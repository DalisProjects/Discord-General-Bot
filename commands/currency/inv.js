const Discord = module.require("discord.js");
const moment = require("moment");
let currencylogs = require("../../storage/currencylogs.json");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
  let premiumserver = require("../../storage/premiumserver.json");
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
    let embed = new Discord.MessageEmbed()
      .setDescription(`\n** ${member.displayName}'s Inventory items:**\n\n:ring: ${currencylogs[member.user.id].rings} ring(s)\n:ship: ${currencylogs[member.user.id].shipnc} shipname card(s\n<:nvweed:879855728377069609> ${currencylogs[member.user.id].weed} gram(s) of weed\n:military_medal: ${currencylogs[member.user.id].reps} Reputation point(s)\n:fish: ${currencylogs[member.user.id].fish} fish(s)`)
      .setColor("RANDOM") 
      .setFooter(`They have $${totalbalis} total coins`) 
      .setTimestamp();
  
    message.channel.send({ embed: embed }).catch(e =>  message.channel.send(e)).catch(O_o => {})
    return;
    
}
let amountis = parseInt(currencylogs[message.author.id].coins, 10);
let amount2is = parseInt(currencylogs[message.author.id].bank, 10);
let totalbalis = amountis + amount2is;
  let embed = new Discord.MessageEmbed()
    .setDescription(`\n**Inventory items:**\n\n:ring: ${currencylogs[message.author.id].rings} ring(s)\n:ship: ${currencylogs[message.author.id].shipnc} shipname card(s\n<:nvweed:879855728377069609> ${currencylogs[message.author.id].weed} gram(s) of weed\n:military_medal: ${currencylogs[message.author.id].reps} Reputation point(s)\n:fish: ${currencylogs[message.author.id].fish} fish(s)`)
    .setColor("RANDOM") 
    .setFooter(`You have $${totalbalis} total coins`) 
    .setTimestamp();

  message.channel.send({ embed: embed }).catch(e =>  message.channel.send(e)).catch(O_o => {})
  return;
};

module.exports.config = {
  name: "inv",
  aliases: ["inventory"]
};