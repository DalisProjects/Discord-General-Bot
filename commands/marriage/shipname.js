
const Discord = require("discord.js");
let marriagelogs = require("../../storage/marriagelogs.json");
const ms = require("parse-ms");
let currencylogs = require("../../storage/currencylogs.json");
const moment = require("moment");
const fs = require("fs");


        exports.run = async (client, message, args, level) => {

  if(marriagelogs[message.author.id].marry === "None") return message.reply(`You are not married to anyone, therefore you have no ship to check !`);
  let husbando = marriagelogs[message.author.id].marry;
  let reason = args.join(" ");
  if(!reason) return message.channel.send("You need to choose a new name for your ship !")
  if (reason.length > 30)return message.channel.send("Shipname cannot contain more than 30 characters !")
  if(currencylogs[message.author.id].shipnc < 1) return message.channel.send("You need to purchase shipname cards first inorder to be able to rename your ship");
  if(!currencylogs[husbando]){
    currencylogs[husbando] = {
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
  currencylogs[husbando] = {
    coins: currencylogs[husbando].coins,
    bank: currencylogs[husbando].bank,
    fish: currencylogs[husbando].fish,
    weed: currencylogs[husbando].weed,
    rings: currencylogs[husbando].rings,
    daily: currencylogs[husbando].daily,
    weekly: currencylogs[husbando].weekly,
    reps: currencylogs[husbando].reps,
    reptime: currencylogs[husbando].reptime,
    work: currencylogs[husbando].work,
    shipname: reason,
    shipnc: currencylogs[husbando].shipnc,
    bio: currencylogs[husbando].bio,
      hourly: currencylogs[husbando].hourly,
      monthly: currencylogs[husbando].monthly,
      prefix: currencylogs[husbando].prefix,
}
    let amountt2 = parseInt(currencylogs[message.author.id].shipnc, 10);
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
      shipname: reason,
      shipnc: amountt2 - 1,
      bio: currencylogs[message.author.id].bio,
      hourly: currencylogs[message.author.id].hourly,
      monthly: currencylogs[message.author.id].monthly,
      prefix: currencylogs[message.author.id].prefix,
  }

  fs.writeFile("./storage/currencylogs.json", JSON.stringify(currencylogs), (err) => {
    if(err) console.log(err)
  })

  message.reply(`Your ship name has been successfully set to: __**${reason}**__ `)
  return;


        };

        module.exports.config = {
            name: "shipname",
            aliases: ["renameship", "nameship", "shiprename"]
          };
          
