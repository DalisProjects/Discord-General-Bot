const Discord = module.require("discord.js");
const fs = require("fs");

let currencylogs = require("../../storage/currencylogs.json");

module.exports.run = async (bot, message, args) => {
  let premiumserver = require("../../storage/premiumserver.json");
  let embedps = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`This command can only be used in premium servers !\nclick [here](https://discord.gg/nirvana) to donate and enjoy premium nirvana features !`);
  //if(premiumserver[message.guild.id].premiumserver == 0)return message.channel.send(embedps);

 let inline = true

  let embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username + "#" + message.author.discriminator,  message.author.displayAvatarURL())
    .setDescription(`\n<:nvweed:879855728377069609> **Weed** : __$5000__\nEach 10 grams of weed cost $5000
    \n:fish: **Fish** : __$300__\nFish is available in the store for $300 each
    \n:ship: **Shipname Card** : __$50,000__\nYou will need this card to rename your ships
    \n:ring: **Ring** :  __$20,000__\n2 marriage rings are required for each proposal
    \n:military_medal: **Reputation point** : __$300,000__\nEach reputation point costs $300,000\n`)
    .setColor("RANDOM")
    .setFooter(`You have $${currencylogs[message.author.id].coins} in your wallet`)
    .setTimestamp();

  message.channel.send({ embed: embed }).catch(e =>  message.channel.send(e)).catch(O_o => {})
  return;
};

module.exports.config = {
  name: "shop",
  aliases: ["store"]
};