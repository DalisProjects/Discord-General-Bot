
let currencylogs = require("../../storage/currencylogs.json");
const fs = require("fs");
let Discord = require("discord.js");
const ms = require("parse-ms");
const robtime = {};

module.exports.run = async (bot, message, args) => {
  let premiumserver = require("../../storage/premiumserver.json");
  let embedps = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`This command can only be used in premium servers !\nclick [here](https://discord.gg/nirvana) to donate and enjoy premium nirvana features !`);
  //if(premiumserver[message.guild.id].premiumserver == 0)return message.channel.send(embedps);

   let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) ||
  message.guild.members.cache.find(member => member.displayName.toLowerCase().includes(args.join(" ").toLowerCase())) || message.guild.members.cache.find(member => member.user.username.toLowerCase().includes(args.join(" ").toLowerCase())) ||
  message.guild.members.cache.find(member => member.user.tag.toLowerCase().includes(args.join(" ").toLowerCase()));

  if(!robtime[message.author.id]){
    robtime[message.author.id] = {
      robtime: 15000,
      timeout: 15000,
    }
  }
  let author = robtime[message.author.id].robtime
  let timeout = robtime[message.author.id].timeout
    if(timeout - (Date.now() - author) > 0) {
      let time = ms(timeout - (Date.now() - author));
      console.log(time)
      message.channel.send(new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`You can attempt to rob someone again in ${time.minutes}m and ${time.seconds}s.`))
      return
    }

    
   
  if(!member || !args.join(" ")) return message.channel.send("You haven't mentioned anyone to rob !");
  const lewdembedmm = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`You cannot give rob yourself, are u that dumb ?`);
  if (member.id === message.author.id) return message.channel.send(lewdembedmm).catch(e =>  message.channel.send(e)).catch(O_o => {})
  if(!currencylogs[member.user.id]){
    currencylogs[member.user.id] = {
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

  if(2500 > currencylogs[message.author.id].coins) return message.channel.send(`You need to have atleast 2,500 coins to rob someone !`);
  if(1000 > currencylogs[member.user.id].coins) return message.channel.send(`The person you trynna rob is as broke as u`);
    let amountt = Math.floor(Math.random() * 11);
      if(amountt == 1 || amountt == 3 || amountt == 5 || amountt == 7 || amountt == 9)
      {
        
        const withit = new Discord.MessageEmbed()
      .setDescription("<a:nvcount5:733834394409631856>");
          message.channel.send(withit).then(msg => {
            setTimeout(() => {
              msg.delete().catch(e =>  message.channel.send(e)).catch(O_o => {})
        currencylogs[message.author.id] = {
          coins: parseInt(currencylogs[message.author.id].coins, 10) - 2500,
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
          bio: currencylogs[message.author.id].bio,
          hourly: currencylogs[message.author.id].hourly,
        monthly: currencylogs[message.author.id].monthly,
        prefix: currencylogs[message.author.id].prefix,
    
      }
      fs.writeFile("./storage/currencylogs.json", JSON.stringify(currencylogs), (err) => {
        if(err) console.log(err)  })
        let embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username}, unfortunately you failed to rob ${member.user.username} !`)
        .setDescription(`**Removed $2500 from your wallet**`)
        .setColor("#da1a1a")
        .setFooter(`You have $${currencylogs[message.author.id].coins} left now`) 
        message.channel.send(embed).catch(e =>  message.channel.send(e)).catch(O_o => {})
        member.send(`${message.author.username} attempted to rob you in ${message.guild.name} and failed, remember to deposit your money !`)
        .catch(O_o => {});
        robtime[message.author.id] = {
          robtime: Date.now(),
          timeout: 20000,
        }     
        }, 4700);
      });
        return;
      }
      
    else {
      const withit = new Discord.MessageEmbed()
  .setDescription("<a:nvcount5:733834394409631856>");
      message.channel.send(withit).then(msg => {
        setTimeout(() => {
          msg.delete().catch(e =>  message.channel.send(e)).catch(O_o => {})
      let betamounte = parseInt(currencylogs[member.user.id].coins, 10);
   let perwonpar = parseInt(Math.floor(Math.random() * betamounte, 10));
    let betamount = parseInt(currencylogs[message.author.id].coins, 10);
    currencylogs[message.author.id] = {
      coins: betamount + perwonpar - 2500,
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
      bio: currencylogs[message.author.id].bio,
      hourly: currencylogs[message.author.id].hourly,
        monthly: currencylogs[message.author.id].monthly,
        prefix: currencylogs[message.author.id].prefix,

  }
  currencylogs[member.user.id] = {
      coins: betamounte - perwonpar,
      bank: currencylogs[member.user.id].bank,
      fish: currencylogs[member.user.id].fish,
      weed: currencylogs[member.user.id].weed,
      rings: currencylogs[member.user.id].rings,
      daily: currencylogs[member.user.id].daily,
      weekly: currencylogs[member.user.id].weekly,
      reps: currencylogs[member.user.id].reps,
      reptime: currencylogs[member.user.id].reptime,
      work: currencylogs[member.user.id].work,
      shipname: currencylogs[member.user.id].shipname,
      shipnc: currencylogs[member.user.id].shipnc,
      bio: currencylogs[member.user.id].bio,
      hourly: currencylogs[member.user.id].hourly,
      monthly: currencylogs[member.user.id].monthly,
      prefix: currencylogs[member.user.id].prefix,

  }
  fs.writeFile("./storage/currencylogs.json", JSON.stringify(currencylogs), (err) => {
    if(err) console.log(err)})

    let embed = new Discord.MessageEmbed()
    .setTitle(` ${message.author.username} You have successfully robbed ${member.user.tag}`)
    .setDescription(`\nYou just stole dollars from their wallet without them noticing!\n
    **Added $${perwonpar} to your wallet**`)
    .setColor("#30c00e")
    .setFooter(`You have $${currencylogs[message.author.id].coins} now`) 
    message.channel.send(embed).catch(e =>  message.channel.send(e)).catch(O_o => {})
    member.send(`You have been robbed by ${message.author.username} in ${message.guild.name}, $${perwonpar} was stolen from your wallet !`)
    .catch(O_o => {});
    robtime[message.author.id] = {
      robtime: Date.now(),
      timeout: 120000,
    }
    }, 4700).catch(e =>  message.channel.send(e)).catch(O_o => {})
  }).catch(e =>  message.channel.send(e)).catch(O_o => {})
    return;
  }
    
    
};
module.exports.config = {
  name: "rob",
  aliases: ["steal"]
};