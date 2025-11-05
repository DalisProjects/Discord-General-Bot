let serverset = require("../../storage/serverset.json");
const Discord = require("discord.js");
const superagent = require("superagent");
const jailrole = require("../../storage/jailrole.json");
const fs = require("fs");
let adminlevel = require("../../storage/adminlevel.json");

module.exports.run = async (bot, message, args) => {
  
  let botuser = message.guild.members.cache.get("723061621991276574");
  if(!botuser.hasPermission("ADMINISTRATOR") && !botuser.hasPermission("MANAGE_ROLES"))return message.member.send(`I don't have administrator nor manage roles permissions to run this command !`).catch(O_o => {});  
  const 𝘮𝘮m𝘶𝘯𝘪𝘵𝘺 = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`Sorry, you don't have permissions to use this command !`);
    if (!message.member.roles.cache.has(adminlevel[message.guild.id].lvl2) && !message.member.roles.cache.has(adminlevel[message.guild.id].lvl3) && !message.member.roles.cache.has(adminlevel[message.guild.id].lvl4) && !message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(𝘮𝘮m𝘶𝘯𝘪𝘵𝘺).catch(e =>  message.channel.send(e)).catch(O_o => {})
  let mutedrole = message.guild.roles.cache.find(r => r.name === "NVJail");
   if (!mutedrole)return
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) ||
  message.guild.members.cache.find(member => member.displayName.toLowerCase().includes(args.join(" ").toLowerCase())) || message.guild.members.cache.find(member => member.user.username.toLowerCase().includes(args.join(" ").toLowerCase())) ||
  message.guild.members.cache.find(member => member.user.tag.toLowerCase().includes(args.join(" ").toLowerCase()));
  const missingArgsEmbed = new Discord.MessageEmbed() // Creates the embed thats sent if the command isnt run right
        .setColor(`#000000`)
        .setTitle('Missing Arguments!')
        .setDescription('Usage: unjail [User]');
     if(!member || !args.join(" ")) return message.channel.send(missingArgsEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})

 const 𝘮𝘮𝘶𝘯𝘪𝘵𝘺 = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`Sorry, this specified user is already unjailed.`);
    if (!member.roles.cache.has(mutedrole.id)) return message.channel.send(𝘮𝘮𝘶𝘯𝘪𝘵𝘺);
    if(!jailrole[`${message.guild.id}, ${member.user.id}`]) {
        jailrole[`${message.guild.id}, ${member.user.id}`] = {
          jailrole: 0
        }
    }
  const warningdffEmbed = new Discord.MessageEmbed() // Creates the embed that's DM'ed to the user when their warned!
    .setColor("#000000")
    .setThumbnail(member.user.avatarURL())
    .setTitle(`You have been unjailed in ${message.guild.name}`)
.setDescription(`\nChat: <#705128836513136751> `);

if(serverset[message.guild.id].stafflogschannel !== "None") {
let logs = member.guild.channels.cache.get(serverset[message.guild.id].stafflogschannel);
  const lewddemddbedm = new Discord.MessageEmbed()
    .setColor(`#ff0000`)
    .setAuthor(" |  admin action", message.author.displayAvatarURL())
    .setFooter(`${member.user.id}`)
    .setTimestamp(new Date())
    .setDescription(`User <@${member.user.id}> **(${member.user.tag})**'s has been unjailed by **${message.author.tag}** `);
  logs.send(lewddemddbedm).catch(O_o => {});
}
  const lewdembed = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`✅ | ${member.user.tag} has been unjailed by ${message.author.username}`);
  message.channel.send(lewdembed).catch(e =>  message.channel.send(e)).catch(O_o => {})
  setTimeout(() => {message.delete().catch(O_o => {});}, 500);
  member.send(warningdffEmbed).catch(O_o => {});
  member.roles.remove(mutedrole.id).catch(e =>  message.channel.send(e)).catch(O_o => {})
  if (message.guild.id === "660822589077323786"){
    let memberrole = message.guild.roles.cache.find(r => r.name === "𝘔𝘦𝘮𝘣𝘦𝘳");
  member.roles.add(memberrole).catch(e =>  message.channel.send(e)).catch(O_o => {})
}
  jailrole[`${message.guild.id}, ${member.user.id}`] = {
    jailrole: 0
};
fs.writeFile("./storage/jailrole.json", JSON.stringify(jailrole), (err) => {
    if(err) console.log(err)
})
};

module.exports.config = {
  name: "unjail",
  aliases: ["release"]
};
