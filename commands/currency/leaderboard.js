
let currencylogs = require("../../storage/currencylogs.json");
const fs = require("fs");
let Discord = require("discord.js");
const cooldownnn = new Set();

module.exports.run = async (bot, message, args) => {
  let premiumserver = require("../../storage/premiumserver.json");
  let embedps = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`This command can only be used in premium servers !\nclick [here](https://discord.gg/nirvana) to donate and enjoy premium nirvana features !`);
  //if(premiumserver[message.guild.id].premiumserver == 0)return message.channel.send(embedps);
  
    let user = message.guild.members.cache.get(args[0]) || message.member;
    fs.readFile('../../storage/coins.json', async
    (data, (err) => {
      if(err) throw err;
  }))
    let x = coins[user.id]
    let i = 0;
    x.forEach(user => {
      i += 1
      let username = bot.users.cache.get(user.id)
      const embed = new Discord.MessageEmbed()
    .setDescription(`**${message.guild.name}'s Coin Leaderboard**\n\n${i+1}. ${coins[user.id].coins} ${username.username}`)
    .setColor("#FFFFFF")
    message.channel.send(embed)

    }

    )

  //  for (let i = 0; i < money.length; i++) {
   /* let i = 0
      let user = bot.users.cache.get(money[i].data.ID.split('_')[2]).username      
      let content = `${i+1}. ${user}\n`
      const embed = new Discord.MessageEmbed()
      .setDescription(`**${message.guild.name}'s Coin Leaderboard**\n\n${content}`)
      .setColor("#FFFFFF")
  
      message.channel.send(embed)
  //  }//~ ${money[i].data}*/

    
};
module.exports.config = {
  name: "leadserboard",
  aliases: ["lsb"]
};



/*  var user;
    let x = coins[user];
    let i = 0;
    x.forEach(user => {
      i += 1
      let user = bot.users.Cach.get(money[i].data.ID.split('_')[2]).username
      const embed = new Discord.MessageEmbed()
    .setDescription(`**${message.guild.name}'s Coin Leaderboard**\n\n${content}`)
    .setColor("#FFFFFF")

    }

    )
    */