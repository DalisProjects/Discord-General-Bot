
let currencylogs = require("../../storage/currencylogs.json");
const fs = require("fs");
let Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let reason = args.join(" ");

    const lewdembedmm = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`You can't @ roles in your bio !`);
  if (!reason){
    let mbio = currencylogs[message.author.id].bio
      message.channel.send(`__**Here's your bio :**__\n\`${mbio}\``);
      return;
}
if (reason.length > 400)return message.channel.send(`Your bio cannot contain more than 400 characters`).catch(e =>  message.channel.send(e)).catch(O_o => {})
if (reason.includes("<&@"))return message.channel.send(lewdembedmm).catch(e =>  message.channel.send(e)).catch(O_o => {})
message.channel.send(`Your bio has been successfully set to: \n\`${reason}\``).catch(e =>  message.channel.send(e)).catch(O_o => {})
currencylogs[message.author.id] = {
  coins: currencylogs[message.author.id].coins,
  bank: currencylogs[message.author.id].bank,
  fish: currencylogs[message.author.id].fish,
  weed: currencylogs[message.author.id].weed,
  rings: currencylogs[message.author.id].rings,
  daily: currencylogs[message.author.id].daily,
  weekly: currencylogs[message.author.id].weekly,
  reps: currencylogs[message.author.id].reps,
  reptime: currencylogs[message.author.id].reptime,
  work: currencylogs[message.author.id].work,
  shipname: currencylogs[message.author.id].shipname,
  shipnc: currencylogs[message.author.id].shipnc,
  bio: reason,
  hourly: currencylogs[message.author.id].hourly,
        monthly: currencylogs[message.author.id].monthly,
        prefix: currencylogs[message.author.id].prefix,
}
    

};

module.exports.config = {
  name: "bio"
};