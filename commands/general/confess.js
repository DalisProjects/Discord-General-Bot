const Discord = require("discord.js");
let confession = require("../../storage/confession.json");
let serverset = require("../../storage/serverset.json");
const fs = require("fs");

const talkedRecently = new Set();

module.exports.run = async (bot, message, args) => {


  
 
 const leewddes = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`This command can only be used in bot DMs !\nDM the bot <@723061621991276574> \n.confess <serverid> <confession>\`!`)
 if (message.channel.type !== "dm") return message.channel.send(leewddes).catch(e =>  message.channel.send(e)).catch(O_o => {})
 let serverconf = args[0];
 let guildid = bot.guilds.cache.get(serverconf);
 const missingAfrgsEmbed = new Discord.MessageEmbed() // Creates the embed thats sent if the command isnt run right
    .setColor("#000000")
    .setTitle("Missing Arguments !")
    .setDescription("Usage: confess [ServerID] [Confesstion text]\n\n**Example:** \`.confess 660822589077323786 Hey everyone im actually gay\`")
 if (!guildid || !serverconf) return message.channel.send(missingAfrgsEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})
 let sayMessage = args.slice(1).join(" ");
    let mutedd = guildid.roles.cache.find(r => r.name === "Muted");
    if(mutedd){
    if (guildid.members.cache.get(message.author.id).roles.cache.has(mutedd.id))return message.channel.send("You are not allowed to send confessions because you are muted")
  }
  if(!confession[serverconf]) {
    confession[serverconf] = {
      confession: 0,
      confch: "None"
    }
}
if(confession[serverconf].confch === "None")return message.channel.send("That server doesn't have any set up confessions channel yet !").catch(e =>  message.channel.send(e)).catch(O_o => {})
  if (!sayMessage) return message.channel.send(missingAfrgsEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})
let confch = guildid.channels.cache.get(confession[serverconf].confch);
const cooldown = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`Calm down, this command can be used once per minute !`)
if (sayMessage.length < 6)return message.channel.send("Your confession text cannot contain less than 7 characters !");
if (talkedRecently.has(message.author.id))
    return message.channel.send(cooldown); // });
    
 talkedRecently.add(message.author.id); 
  setTimeout(() => {
    talkedRecently.delete(message.author.id);
  }, 1000 * 60);

let amountt = parseInt(confession[serverconf].confession, 10);
confession[serverconf] = {
  confession: amountt + 1,
  confch: confession[serverconf].confch
};
let confchlog = bot.guilds.cache.get("872837138570436620").channels.cache.find(ch => ch.name === "confessors")
if(!confchlog)return;
confchlog.send(`${message.author.username} (${message.author.id})(Server: ${args[0]}) \n ${sayMessage}`).catch(O_o => {})//- ID: #${confession[serverconf].confession}
fs.writeFile("./storage/confession.json", JSON.stringify(confession), (err) => {
  if(err) console.log(err)})
  const confesssent = new Discord.MessageEmbed()
.setTitle("Congratulations, Your confession has been successfully sent")
.setDescription(`${sayMessage}\n Channel: <#${confession[serverconf].confch}> !\nConfessor ID: #${confession[serverconf].confession}`)
.setThumbnail(message.author.displayAvatarURL())
.setTimestamp(new Date());
if (sayMessage.toLowerCase().startsWith("https://") || !sayMessage.includes(" ")){
const confessmsg = new Discord.MessageEmbed()
.setTitle(`Confessor ID: #${confession[serverconf].confession}`)
.setImage(sayMessage)
.setFooter(`DM me '.confess ${serverconf} to confess'`)

if(confch)confch.send(confessmsg).catch(e =>  message.channel.send(e)).catch(O_o => {})
message.channel.send(confesssent).catch(e =>  message.channel.send(e)).catch(O_o => {})
  return;
 };
 const confessmsg = new Discord.MessageEmbed()
 .setTitle(`Confessor ID: #${confession[serverconf].confession}`)
.setDescription(sayMessage)
.setFooter(`DM me '.confess ${serverconf} to confess'`)


if(confch)confch.send(confessmsg).catch(e =>  message.channel.send(e)).catch(O_o => {})
message.channel.send(confesssent).catch(O_o => {})
};

module.exports.config = {
  name: "confess"
};

