const Discord = require("discord.js");
const fs = require("fs");

const talkedRecently = new Set();

module.exports.run = async (bot, message, args) => {


  
    let sayMessage = args.join(" ").toLowerCase();

 const missingAfrgsEmbed = new Discord.MessageEmbed() // Creates the embed thats sent if the command isnt run right
    .setColor("#000000")
    .setTitle("Missing Arguments !")
    .setDescription("Usage: suggest [Suggestion concerning the bot]")
 if (!sayMessage) return message.channel.send(missingAfrgsEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})
 const cooldown = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`Calm down, suggestions can only be sent once per 5 minutes !`)
if (sayMessage.length < 6)return message.channel.send("Your Suggestion text cannot contain less than 10 characters !").catch(e =>  message.channel.send(e)).catch(O_o => {})

if (talkedRecently.has(message.author.id))
    return message.channel.send(cooldown).then(msg => {
      setTimeout(() => {
        msg.delete().catch(e =>  message.channel.send(e)).catch(O_o => {})
      }, 1000 * 60);
    });
    
 talkedRecently.add(message.author.id); 
  setTimeout(() => {
    talkedRecently.delete(message.author.id);
  }, 5000 * 60);



let guildid2 = bot.guilds.cache.get("872837138570436620").channels.cache.get("873172480192294912");

  const confesssent = new Discord.MessageEmbed()
.setTitle("Congratulations, Your suggestion has been successfully sent to the bot developer")
.setDescription(`${sayMessage}`)
.setThumbnail(message.author.displayAvatarURL())
.setTimestamp(new Date());

 const confessmsg = new Discord.MessageEmbed()
 .setTitle(`${message.author.username} (${message.author.id})`)
.setDescription(sayMessage)
.setThumbnail(message.author.displayAvatarURL())
.setTimestamp(new Date());


guildid2.send(confessmsg).then(msgg => {
  msgg.react("👍").catch(e =>  message.channel.send(e)).catch(O_o => {})
  msgg.react("👎").catch(e =>  message.channel.send(e)).catch(O_o => {})
}).catch(e =>  message.channel.send(e)).catch(O_o => {}).catch(O_o => {})
message.channel.send(confesssent).catch(O_o => {})
};

module.exports.config = {
  name: "suggest",
  aliases: ["suggestion"]
};

