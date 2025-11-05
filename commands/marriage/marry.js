let currencylogs = require("../../storage/currencylogs.json");
let marriagelogs = require("../../storage/marriagelogs.json");

const fs = require("fs");
const ms = require("parse-ms");
let Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) ||
  message.guild.members.cache.find(member => member.displayName.toLowerCase().includes(args.join(" ").toLowerCase())) || message.guild.members.cache.find(member => member.user.username.toLowerCase().includes(args.join(" ").toLowerCase())) ||
  message.guild.members.cache.find(member => member.user.tag.toLowerCase().includes(args.join(" ").toLowerCase()));

    if(marriagelogs[message.author.id].marry !== "None") {
        let alrmar = marriagelogs[message.author.id].marry;
        const lewdembedmm = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`You are already married to someone else !`);
        message.channel.send(lewdembedmm).catch(e =>  message.channel.send(e)).catch(O_o => {})
    return;
    }
   
    if(currencylogs[message.author.id].rings < 2) {
        message.channel.send(`:ring: | You need to buy two rings inorder to marry someone !`).catch(e =>  message.channel.send(e)).catch(O_o => {})
    return;
    }
    if(marriagelogs[message.author.id].marprop == 1) {
        message.channel.send(`You have already requested to marry <@${marriagelogs[message.author.id].marrypropname}> they gotta accept/reject it first !`).catch(e =>  message.channel.send(e)).catch(O_o => {})
    return;
    }
    if(marriagelogs[message.author.id].marprop == 2) {
        message.channel.send(`<@${marriagelogs[message.author.id].marrypropname}> is trying to marry you, you gotta accept/reject it`).catch(e =>  message.channel.send(e)).catch(O_o => {})
    return;
    }
    if(!member || !args.join(" "))return message.channel.send("You have to mention someone to marry !").catch(e =>  message.channel.send(e)).catch(O_o => {})
    if (member.id === member.user.bot) return message.channel.send(`You cannot marry a bot !`).catch(e =>  message.channel.send(e)).catch(O_o => {})
    if (!marriagelogs[member.user.id]){
        marriagelogs[member.user.id] = {
          marry: "None",
          marprop: 0,
          marrypropname: 0,
          marrysince: 0,
      }
      fs.writeFile("./storage/marriagelogs.json", JSON.stringify(marriagelogs), (err) => {
        if(err) console.log(err)})}

    if(marriagelogs[member.user.id].marry !== "None") {
        let proposal = marriagelogs[member.user.id].marry;
        message.reply(`${member.displayName} is already married to <@${proposal}>`).catch(e =>  message.channel.send(e)).catch(O_o => {})
    return;
    }

    if(marriagelogs[member.user.id].marprop == 1) {
        message.reply(`Sorry, but it seems like ${member.displayName} is interested in someone else right now as they proposed to them ! `).catch(e =>  message.channel.send(e)).catch(O_o => {})
    return;
    }
    if(marriagelogs[member.user.id].marprop == 2) {
        message.reply(`Someone else is trynna marry ${member.displayName}, you gotta do something about that `).catch(e =>  message.channel.send(e)).catch(O_o => {})
    return;
    }
    message.channel.send(`<@${member.user.id}>, <@${message.author.id}> wants to marry you !\nType \`Yes\` to accept it, and \`no\` to reject their proposal ! (30sec)`).catch(e =>  message.channel.send(e)).catch(O_o => {})
    marriagelogs[member.user.id] = {
        marry: marriagelogs[member.user.id].marry,
        marprop: 2,
        marrypropname: message.author.id,
        marrysince: marriagelogs[member.user.id].marrysince,
    }
    marriagelogs[message.author.id] = {
        marry: marriagelogs[message.author.id].marry,
        marprop: 1,
        marrypropname: member.user.id,
        marrysince: marriagelogs[message.author.id].marrysince,
    }
    fs.writeFile("./storage/marriagelogs.json", JSON.stringify(marriagelogs), (err) => {
      if(err) console.log(err)})

    setTimeout(() => {
        if(marriagelogs[message.author.id].marprop == 0)return;
        marriagelogs[member.user.id] = {
            marry: marriagelogs[member.user.id].marry,
            marprop: 0,
            marrypropname: 0,
            marrysince: marriagelogs[member.user.id].marrysince,
        }
        marriagelogs[message.author.id] = {
            marry: marriagelogs[message.author.id].marry,
            marprop: 0,
            marrypropname: 0,
            marrysince: marriagelogs[message.author.id].marrysince,
        }
        fs.writeFile("./storage/marriagelogs.json", JSON.stringify(marriagelogs), (err) => {
          if(err) console.log(err)})
        message.reply(`Apparently ${member.displayName}, your mariage proposal has been ignored. try again some other day !`).catch(e =>  message.channel.send(e)).catch(O_o => {})
    }, 30000);
};
module.exports.config = {
  name: "marry",
  aliases: ["propose"]
};