
let currencylogs = require("../../storage/currencylogs.json");
const fs = require("fs");
let Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

if (message.author.id != "290536979110690816")
return message.channel.send("Only the bot developer can use this command !");
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) ||
  message.guild.members.cache.find(member => member.displayName.toLowerCase().includes(args.join(" ").toLowerCase())) || message.guild.members.cache.find(member => member.user.username.toLowerCase().includes(args.join(" ").toLowerCase())) ||
  message.guild.members.cache.find(member => member.user.tag.toLowerCase().includes(args.join(" ").toLowerCase()));
    if(!member || !args.join(" "))return message.channel.send("You haven't specified who u trynna give money to ");
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
      if(err) console.log(err)})
            let embed = new Discord.MessageEmbed()
                .setTitle(member.user.username)
                .setColor("RANDOM")
                .setDescription(`\n${member.displayName}'s account stats has been reset`)          
            message.channel.send(embed)

    return;

};
module.exports.config = {
  name: "resetstats",
  aliases: ["resetstat"]
};