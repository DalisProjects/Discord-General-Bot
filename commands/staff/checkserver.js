let kisses = require("../../storage/kisses.json");
const ms = require("parse-ms");
let hugs = require("../../storage/hugs.json");
let slaps = require("../../storage/slaps.json");
let spanks = require("../../storage/spanks.json");
let mutelogs = require("../../storage/mutelogs.json");
let serverset = require("../../storage/serverset.json");
let afklogs = require("../../storage/afklogs.json");



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
    let Discorch = guildid.channels.cache.random();
    Discorch.createInvite({ maxAge: 0 }).then(invite => message.channel.send(new Discord.MessageEmbed()
    .setColor("Server info !")
    .setDescription(`Server: ${guildid.name} (${guildid.id})
Owner: ${guildid.owner}
Member count: ${guildid.memberCount}
Link: https://discord.gg/${invite.code}`)))
    }
  
        
   
module.exports.config = {
  name: "checkserver"
};