
let currencylogs = require("../../storage/currencylogs.json");
const fs = require("fs");
const ms = require("parse-ms");
let Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let premiumserver = require("../../storage/premiumserver.json");
  let embedps = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`This command can only be used in premium servers !\nclick [here](https://discord.gg/nirvana) to donate and enjoy premium nirvana features !`);
  //if(premiumserver[message.guild.id].premiumserver == 0)return message.channel.send(embedps);

    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) ||
  message.guild.members.cache.find(member => member.displayName.toLowerCase().includes(args.join(" ").toLowerCase())) || message.guild.members.cache.find(member => member.user.username.toLowerCase().includes(args.join(" ").toLowerCase())) ||
  message.guild.members.cache.find(member => member.user.tag.toLowerCase().includes(args.join(" ").toLowerCase()));


    let author = currencylogs[message.author.id].reptime
    let timeout = 86400 * 1000;
    if (timeout - (Date.now() - author) > 0) {
      let time = ms(timeout - (Date.now() - author));
      message.channel.send(`__**You are on cooldown !**__\nYou can give reputation points again in ${time.hours}h ${time.minutes}m ${time.seconds}s.`)
      return
    }
    if(!member || !args.join(" "))return message.channel.send("You have to mention someone to give rep points to");
    const lewdembedmm = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`nah, you can't give reps to yourself lol`); 
  if (member.id === message.author.id) return message.channel.send(lewdembedmm).catch(e =>  message.channel.send(e)).catch(O_o => {})
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

    let amount = parseInt(1, 10);
    let amount2 = parseInt(currencylogs[member.user.id].reps, 10);
    currencylogs[member.user.id] = {
      coins: currencylogs[member.user.id].coins,
      bank: currencylogs[member.user.id].bank,
      fish: currencylogs[member.user.id].fish,
      weed: currencylogs[member.user.id].weed,
      rings: currencylogs[member.user.id].rings,
      daily: currencylogs[member.user.id].daily,
      weekly: currencylogs[member.user.id].weekly,
      reps: amount2 + amount,
      reptime: currencylogs[member.user.id].reptime,
      work: currencylogs[member.user.id].work,
      shipname: currencylogs[member.user.id].shipname,
      shipnc: currencylogs[member.user.id].shipnc,
      bio: currencylogs[member.user.id].bio,
      hourly: currencylogs[member.user.id].hourly,
      monthly: currencylogs[member.user.id].monthly,
      prefix: currencylogs[member.user.id].prefix,

  }
  currencylogs[message.author.id] = {
    coins: currencylogs[message.author.id].coins,
    bank: currencylogs[message.author.id].bank,
    fish: currencylogs[message.author.id].fish,
    weed: currencylogs[message.author.id].weed,
    rings: currencylogs[message.author.id].rings,
    daily: currencylogs[message.author.id].daily,
    weekly: currencylogs[message.author.id].weekly,
    reps: currencylogs[message.author.id].reps,
    reptime: Date.now(),
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
message.channel.send(`:trident: | __${message.member.displayName}__ has given <@${member.user.id}> a reputation point!`)
        
            
    
    
};
module.exports.config = {
  name: "rep",
  aliases: ["reputation"]
};