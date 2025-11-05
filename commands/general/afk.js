const Discord = require("discord.js");

const fs = require("fs");
let afklogs = require("../../storage/afklogs.json");


const talkedRecentlyy = new Set();

module.exports.run = async (bot, message, args) => {
    let reason = args.join(" ");
    if(!reason) reason = "AFK";
    if (reason.includes("<@&")) return message.channel.send("You can't @ people and roles !");
    if (talkedRecentlyy.has(message.author.id))
    return message.channel.send("You are on cool down, you need to wait a bit before using \`.afk\` again !");
    if (!afklogs[`${message.guild.id}, ${message.author.id}`]){
        afklogs[`${message.guild.id}, ${message.author.id}`] = {
          isafk: 1,
          afknick: message.member.displayName,
          afkmsg: reason,
          afkdate: Date.now()
        }
      }
        fs.writeFile("./storage/afklogs.json", JSON.stringify(afklogs), (err) => {
          if(err) console.log(err)})

    if(afklogs[`${message.guild.id}, ${message.author.id}`].isafk > 0) return message.channel.send("You're already AFK");
    talkedRecentlyy.add(message.author.id);
  setTimeout(() => {
    talkedRecentlyy.delete(message.author.id);
  }, 12000);
    message.channel.send(`You are now AFK, ${reason}`)
    afklogs[`${message.guild.id}, ${message.author.id}`] = {
        isafk: 1,
        afknick: message.member.displayName,
        afkmsg: reason,
        afkdate: Date.now()
  }
  fs.writeFile("./storage/afklogs.json", JSON.stringify(afklogs), (err) => {
    if(err) console.log(err)})
    if (message.member.bannable){
      let user = message.member
    await user
      .setNickname(`[AFK] ${message.member.displayName}`)
      .catch(O_o => {});
  }
};


module.exports.config = {
  name: "afk"
};
