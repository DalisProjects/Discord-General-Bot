
let coins = require("../../storage/coins.json");
let weeds = require("../../storage/weeds.json");
const fs = require("fs");
let Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

if (message.author.id != "290536979110690816")
return message.channel.send("Only the bot developer can use this command !");
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) ||
  message.guild.members.cache.find(member => member.displayName.toLowerCase().includes(args.join(" ").toLowerCase())) || message.guild.members.cache.find(member => member.user.username.toLowerCase().includes(args.join(" ").toLowerCase())) ||
  message.guild.members.cache.find(member => member.user.tag.toLowerCase().includes(args.join(" ").toLowerCase()));
    if(!member || !args.join(" "))return message.channel.send("You haven't specified who u trynna give money to ");
    let reason = args.slice(1).join(" ");
    if(!reason) return message.channel.send("You need to specify the amount you trynna give !");
    if (isNaN(reason)) return message.channel.send(`You can't pay that to someone lol`); 
      if(!coins[member.user.id]) {
        coins[member.user.id] = {
            coins: 0
        }
    }
    let nnch = message.guild.roles.cache.get("705130395657568347"); 
    if(nnch){
    nnch.send(`${message.author.username} set balnce to $${reason} for ${member.displayName}`)
  };
    
        coins[member.user.id] = {
            coins: reason
        };
        fs.writeFile("./storage/coins.json", JSON.stringify(coins), (err) => {
            if(err) console.log(err)
            let embed = new Discord.MessageEmbed()
                .setTitle(member.user.username)
                .setColor("RANDOM")
                .setDescription(`\n${member.displayName}'s balance has been set to $${reason}`)          
            message.channel.send(embed)
        })
    return;

};
module.exports.config = {
  name: "setbal",
  aliases: ["setbalance"]
};