let premiumserver = require("../../storage/premiumserver.json");
const Discord = require("discord.js");
const fs = require("fs");

let adminlevel = require("../../storage/adminlevel.json");

module.exports.run = async (bot, message, args) => {
  const 𝘮𝘮m𝘶𝘯𝘪𝘵𝘺 = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`Sorry, you don't have permissions to use this command !`);
    if (message.author.id != "290536979110690816")
    return message.channel.send("Only the bot developer can use this command !");


  let guildid = bot.guilds.cache.get(args[0]);
   if (!guildid) return message.channel.send("Couldn't find a server with that ID");
  if(!premiumserver[args[0]]) {
    premiumserver[args[0]] = {
        premiumserver: 0
    }
 }
 if(premiumserver[args[0]].premiumserver == 0){
    premiumserver[args[0]] = {
        premiumserver: 1
        }
        fs.writeFile("./storage/premiumserver.json", JSON.stringify(premiumserver), (err) => {
            if(err) console.log(err)
    })
    message.channel.send(`Congratulations, nirvana premium has been added to ${guildid.name} !`);
    return;
    }
 else { 
    premiumserver[args[0]] = {
        premiumserver: 0
        }
        fs.writeFile("./storage/premiumserver.json", JSON.stringify(premiumserver), (err) => {
            if(err) console.log(err)
    })
    message.channel.send(`Nirvana premium has been removed from ${guildid.name} !`);
 }
};

module.exports.config = {
  name: "setpremium"
};
