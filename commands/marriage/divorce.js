let serverset = require("../../storage/serverset.json");
const fs = require("fs");
const ms = require("parse-ms");
let Discord = require("discord.js");
let marriagelogs = require("../../storage/marriagelogs.json");

module.exports.run = async (bot, message, args) => {

    if(marriagelogs[message.author.id].marry === "None") return message.reply(`You can't divorce if you are even married to anyone !`);
    let marriedto = marriagelogs[message.author.id].marry;
    let sayMessage = args.join(" ").toLowerCase();
    if (!sayMessage) return message.channel.send(`Are you sure yo want to divorce ? type \`${serverset[message.guild.id].prefix}divorce confirm\` to confirm.`);
    if (sayMessage === "confirm") {
    message.channel.send(` roses are red violets are blue, <@${marriedto}> & <@${message.author.id}> have divoce divorced. They both belong to da streetz again now :heart_eyes: `)
    marriagelogs[marriedto] = {
        marry: "None",
        marprop: 0,
        marrypropname: 0,
        marrysince: marriagelogs[marriedto].marrysince,
    }
    marriagelogs[message.author.id] = {
        marry: "None",
        marprop: 0,
        marrypropname: 0,
        marrysince: marriagelogs[marriedto].marrysince,
    }
    fs.writeFile("./storage/marriagelogs.json", JSON.stringify(marriagelogs), (err) => {
      if(err) console.log(err)})

}else return message.channel.send(`If you're actually willing to divorce type \`${serverset[message.guild.id].prefix}divorce confirm\` to confirm.`);
};
module.exports.config = {
  name: "divorce",
  aliases: ["divorce"]
};