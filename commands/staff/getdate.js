const ms = require("parse-ms");
const moment = require("moment");
let marriagelogs = require("../../storage/marriagelogs.json");
const fs = require("fs");


let Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.author.id != "290536979110690816")
    return message.channel.send("Only the bot developer can use this command !");
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) ||
    message.guild.members.cache.find(member => member.displayName.toLowerCase().includes(args.join(" ").toLowerCase())) || message.guild.members.cache.find(member => member.user.username.toLowerCase().includes(args.join(" ").toLowerCase())) ||
    message.guild.members.cache.find(member => member.user.tag.toLowerCase().includes(args.join(" ").toLowerCase()));
    const missingArgsEmbed = new Discord.MessageEmbed() // Creates the embed thats sent if the command isnt run right
          .setColor(`#000000`)
          .setTitle('Missing Arguments!')
          .setDescription('Usage: setmarrydate [User] [DateID]')
    if (!member || !args[0]) return message.channel.send(missingArgsEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})    
        let d = new Date("2020-9-22");
        marriagelogs[member.user.id] = {
            marry: marriagelogs[member.user.id].marry,
            marprop: marriagelogs[member.user.id].marprop,
            marrypropname: marriagelogs[member.user.id].marrypropname,
            marrysince: new Date(d)
        }

          marriagelogs[message.author.id] = {
            marry: marriagelogs[message.author.id].marry,
            marprop: marriagelogs[message.author.id].marprop,
            marrypropname: marriagelogs[message.author.id].marrypropname,
            marrysince: new Date(d)
        }
        fs.writeFile("./storage/marriagelogs.json", JSON.stringify(marriagelogs), (err) => {
          if(err) console.log(err)})
        let embed2 = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`You have set ${member.displayName}'s marriage date to to ${moment(args[1]).format("llll")}`)    
    message.channel.send(embed2).catch(e =>  message.channel.send(e)).catch(O_o => {})
    return;
   
};
module.exports.config = {
  name: "getdate"
};
