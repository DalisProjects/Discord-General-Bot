const Discord = require("discord.js");


const moment = require("moment");

module.exports.run = async (bot, message, args) => {
let emoji = args.join(` `)
  if (!emoji) return message.channel.send("You need to provide an emoji ");
  let rainbow = bot.emojis.cache.find(r => r.toString() === emoji); 
if (!rainbow) return message.channel.send("Emoji not found !\n*Keep in mind that the bot cannot resize an emoji from a server unless the bot is in that server !*");
const rolecrt = moment(rainbow.createdAt).format("llll");
   let urbEmbed = new Discord.MessageEmbed()
        .setTitle(`${rainbow.name}  ${rainbow.id}`)
        .setImage(rainbow.url)
        .setFooter(`Created at ${rolecrt}`);
          message.channel.send(urbEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})


};

module.exports.config = {
  name: "emoji",
  aliases: ["e", "resize"]
};
