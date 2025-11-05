const Discord = require("discord.js");


const talkedRecently = new Set();
let adminlevel = require("../../storage/adminlevel.json");
let serverset = require("../../storage/serverset.json");

module.exports.run = async (bot, message, args) => {
 
    



    const 𝘮𝘮m𝘶𝘯𝘪𝘵𝘺 = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`Sorry, you don't have permissions to use this command !`);
    if (message.author.id != "290536979110690816")
    return message.channel.send("Only the bot developer can use this command !");


  let guildid = bot.guilds.cache.get(args[0]);
   if (!guildid) return message.channel.send("Couldn't find a server with that ID");
   message.channel.send("Bot has been successfully removed from " + guildid.name + "(members: " + guildid.memberCount + ")");
   guildid.leave() 
};

module.exports.config = {
  name: "botleave",
  aliases: ["kickbot"]
};

