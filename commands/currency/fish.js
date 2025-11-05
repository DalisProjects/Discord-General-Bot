
const fs = require("fs");
let currencylogs = require("../../storage/currencylogs.json");
const fishtime = {};

let Discord = require("discord.js");
const ms = require("parse-ms");
const talkedRecently = new Set();

var resultem;

module.exports.run = async (bot, message, args) => {
    let premiumserver = require("../../storage/premiumserver.json");
  let embedps = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`This command can only be used in premium servers !\nclick [here](https://discord.gg/nirvana) to donate and enjoy premium nirvana features !`);
  //if(premiumserver[message.guild.id].premiumserver == 0)return message.channel.send(embedps);
  if(!fishtime[message.author.id]){
    fishtime[message.author.id] = {
      fishtime: 15000,
    }
  }
  let author = fishtime[message.author.id].fishtime
    let timeout = 15000;
    if(timeout - (Date.now() - author) > 0) {
      let time = ms(timeout - (Date.now() - author));
      message.channel.send(new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`You have already fished recently\nTry again in ${time.seconds}s.`))
      return
    }

    
    fishtime[message.author.id] = {
      fishtime: Date.now(),
    }


    let replies = ['rare fishe','gold fishe','sardine','tuna','normal fishe']
    let result = Math.floor((Math.random() * replies.length));
    let amount = Math.floor(Math.random() * 7) + 2;
    let amountff = Math.floor(Math.random() * 1000) + 2000;
    let amounttt = parseInt(amount, 10);
    let amountt2 = parseInt(currencylogs[message.author.id].fish, 10);
    currencylogs[message.author.id] = {
      coins: currencylogs[message.author.id].coins,
      bank: currencylogs[message.author.id].bank,
      fish: amounttt + amountt2,
      weed: currencylogs[message.author.id].weed,
      rings: currencylogs[message.author.id].rings,
      daily: currencylogs[message.author.id].daily,
      weekly: currencylogs[message.author.id].weekly,
      reps: currencylogs[message.author.id].reps,
      reptime: currencylogs[message.author.id].reptime,
      work: currencylogs[message.author.id].work,
      shipname: currencylogs[message.author.id].shipname,
      shipnc: currencylogs[message.author.id].shipnc,
      bio: currencylogs[message.author.id].bio,
      hourly: currencylogs[message.author.id].hourly,
        monthly: currencylogs[message.author.id].monthly,
        prefix: currencylogs[message.author.id].prefix,

  }
  fs.writeFile("./storage/currencylogs.json", JSON.stringify(currencylogs), (err) => {
    if(err) console.log(err)})
    if(replies[result] === "rare fishe") resultem = ":blowfish:";
    if(replies[result] === "gold fishe") resultem = ":tropical_fish:";
    if(replies[result] === "sardine") resultem = ":fish:";
    if(replies[result] === "tuna") resultem = ":sushi:";
    if(replies[result] === "normal fishe") resultem = ":fishing_pole_and_fish:";


    message.channel.send(` ${message.member.displayName} starts fishing :fish:!`).then(msg => {
            setTimeout(() => {
                       msg.delete().catch(e =>  message.channel.send(e)).catch(O_o => {})
                       message.channel.send(`${resultem} | <@${message.author.id}> You found ${amount} ${replies[result]}s !`);
                }, amountff)
            });

};
module.exports.config = {
    name: "fish"
  };