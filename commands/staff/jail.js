let serverset = require("../../storage/serverset.json");
const Discord = require("discord.js");
const jailrole = require("../../storage/jailrole.json");
const jailreason = require("../../storage/jailreason.json");
const jaildate = require("../../storage/jaildate.json");
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
  let jailrole = message.guild.roles.cache.find(r => r.name === "NVJail");
  if (!jailrole)return;
  let muterole = message.guild.roles.cache.find(r => r.name === "Muted");


  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) ||
  message.guild.members.cache.find(member => member.user.tag.toLowerCase().includes(args.join(" ").toLowerCase()));
  let reason = args.slice(1).join(" ");
const missingArgsEmbed = new Discord.MessageEmbed() // Creates the embed thats sent if the command isnt run right
        .setColor(`#000000`)
        .setTitle('Missing Arguments!')
        .setDescription('Usage: jail [User] [Reason]');
   if (!reason) reason = "No reason provided";
  if (!member || !args.join(" ")) return message.channel.send(missingArgsEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})

const warningddbed = new Discord.MessageEmbed() // Creates the embed that's DM'ed to the user when their warned!
    .setColor("#000000")
    .setThumbnail(member.user.avatarURL())
    .setTitle(`You have been jailed in ${message.guild.name}`)
    .addField("Reason", reason)
    .setFooter(`Read rules please to not get muted the next time.`);
const lewdembedd = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`Sorry, this specified member is protected and therefore they cannot be muted!`);
if (!member.kickable)return message.channel.send(lewdembedd);

const dzadazdaffzd = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`Sorry, this specified member is already muted, you have to unmute then jail`)
if (member.roles.cache.has(muterole.id))return message.channel.send(dzadazdaffzd);
const dzadazdazd = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`Sorry, this specified member is already jailed`)
if (member.roles.cache.has(jailrole.id))return message.channel.send(dzadazdazd);

if (message.guild.id === "660822589077323786"){
  if (member.roles.cache.some(r =>["Immune", "Immune"].includes(r.name)))
  return message.channel.send(lewdembedd)}
  if (member.roles.cache.has(adminlevel[message.guild.id].lvl1) || member.roles.cache.has(adminlevel[message.guild.id].lvl2) || member.roles.cache.has(adminlevel[message.guild.id].lvl3) || member.roles.cache.has(adminlevel[message.guild.id].lvl4) || member.hasPermission("ADMINISTRATOR"))
  return message.channel.send(lewdembedd);

    if(!jailrole[`${message.guild.id}, ${member.user.id}`]) {
      jailrole[`${message.guild.id}, ${member.user.id}`] = {
        jailrole: 1
      }
  }
  
  if(serverset[message.guild.id].stafflogschannel !== "None") {
  let logs = member.guild.channels.cache.get(serverset[message.guild.id].stafflogschannel);
  const lewddemddbedm = new Discord.MessageEmbed()
    .setColor(`#ff0000`)
    .setAuthor(" |  Admin jail", message.author.displayAvatarURL())
    .setFooter(`${member.user.id}`)
    .setTimestamp(new Date())
    .setDescription(`User <@${member.user.id}> (${member.user.username}) has been jailed by ${message.author.username} reason: **${reason}** `);
  logs.send(lewddemddbedm).catch(O_o => {});
}
  const lewdembed = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(
      `✔︎ | **${member.user.username}** has been jailed by **${message.author.username}** for: **${reason}**`
    );
  message.channel.send(lewdembed).catch(e =>  message.channel.send(e)).catch(O_o => {})

member.send(warningddbed).catch(O_o => {});

   setTimeout(() => {message.delete().catch(O_o => {});}, 500);
   if(!jailreason[`${message.guild.id}, ${member.user.id}`]) {
    jailreason[`${message.guild.id}, ${member.user.id}`] = {
      jailreason: reason
    }
  }
  jailreason[`${message.guild.id}, ${member.user.id}`] = {
    jailreason: reason
  };
  fs.writeFile("./storage/jailreason.json", JSON.stringify(jailreason), (err) => {
    if(err) console.log(err)
  })
  if(!jaildate[member.user.id]) {
    jaildate[member.user.id] = {
      jaildate: Date.now()
    }
  }
  jaildate[member.user.id] = {
    jaildate: Date.now()
  };
  fs.writeFile("./storage/jaildate.json", JSON.stringify(jaildate), (err) => {
    if(err) console.log(err)
  })
  if (member.voice.channel){ member.voice.setChannel(null);}
  member.roles.add(jailrole);
  if (message.guild.id === "707296574597890161"){
    let memberrole = message.guild.roles.cache.find(r => r.name === "𝘔𝘦𝘮𝘣𝘦𝘳");
  let nsfwrole = message.guild.roles.cache.find(r => r.name === "18+");
  member.roles.remove(memberrole);
  member.roles.remove(nsfwrole);
}
  jailrole[`${message.guild.id}, ${member.user.id}`] = {
    jailrole: 1
};
fs.writeFile("./storage/jailrole.json", JSON.stringify(jailrole), (err) => {
    if(err) console.log(err)
})
};

module.exports.config = {
  name: "jail"
};
