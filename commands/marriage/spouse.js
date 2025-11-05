const ms = require("parse-ms");
const moment = require("moment");
let marriagelogs = require("../../storage/marriagelogs.json");
const fs = require("fs");


let Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) ||
  message.guild.members.cache.find(member => member.displayName.toLowerCase().includes(args.join(" ").toLowerCase())) || message.guild.members.cache.find(member => member.user.username.toLowerCase().includes(args.join(" ").toLowerCase())) ||
  message.guild.members.cache.find(member => member.user.tag.toLowerCase().includes(args.join(" ").toLowerCase()));
    if(member && args.join(" ")){
        if (!marriagelogs[member.user.id]){
            marriagelogs[member.user.id] = {
              marry: "None",
              marprop: 0,
              marrypropname: 0,
              marrysince: 0,
          }
          fs.writeFile("./storage/marriagelogs.json", JSON.stringify(marriagelogs), (err) => {
            if(err) console.log(err)})}
        if(marriagelogs[member.user.id].marry === "None")return message.reply(`${member.displayName} is not even married !`);
var memroles;
 if(marriagelogs[member.user.id].marry === "None"){
 memroles = `\n${member.displayName} is not married`;
}
else {
 memroles = `\n${member.displayName}'s spouse is <@${marriagelogs[member.user.id].marry}>`
}; 
        let embed2 = new Discord.MessageEmbed()
        .setTitle(member.user.username)
        .setColor("RANDOM")
        .setDescription(memroles)
        .setFooter(`Married since ${moment(marriagelogs[member.user.id].marrysince).format("llll")}`)
    
    message.channel.send(embed2).catch(e =>  message.channel.send(e)).catch(O_o => {})
    return;
    };
    if(marriagelogs[message.author.id].marry === "None")return message.reply(`You are not married to anybody !`);

    let embed2 = new Discord.MessageEmbed()
        .setTitle(message.author.username)
        .setColor("RANDOM")
        .setDescription(`\nYou are married to <@${marriagelogs[message.author.id].marry}>`)
        .setFooter(`Married since ${moment(marriagelogs[message.author.id].marrysince).format("llll")}`)
    
    message.channel.send(embed2).catch(e =>  message.channel.send(e)).catch(O_o => {})
};
module.exports.config = {
  name: "spouse",
  aliases: ["spouse", "partner"]
};
