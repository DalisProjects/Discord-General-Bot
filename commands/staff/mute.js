const Discord = require("discord.js");
const fs = require("fs");
const mutelogs = require("../../storage/mutelogs.json");
let serverset = require("../../storage/serverset.json");

let adminlevel = require("../../storage/adminlevel.json");

module.exports.run = async (bot, message, args) => {
  let botuser = message.guild.members.cache.get("723061621991276574");
  if(!botuser.hasPermission("ADMINISTRATOR") && !botuser.hasPermission("MANAGE_ROLES"))return message.member.send(`I don't have administrator nor manage roles permissions to run this command !`).catch(O_o => {});  

  const 𝘮𝘮m𝘶𝘯𝘪𝘵𝘺 = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`Sorry, you don't have permissions to use this command !`);
  if (!message.member.roles.cache.has(adminlevel[message.guild.id].lvl1) & !message.member.roles.cache.has(adminlevel[message.guild.id].lvl2) && !message.member.roles.cache.has(adminlevel[message.guild.id].lvl3) && !message.member.roles.cache.has(adminlevel[message.guild.id].lvl4) && !message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(𝘮𝘮m𝘶𝘯𝘪𝘵𝘺).catch(e =>  message.channel.send(e)).catch(O_o => {})
  let mutedrole = message.guild.roles.cache.find(r => r.name === "Muted");
  if(!mutedrole) {
    message.member.send("Muted role not found, created new role...").catch(e =>  message.channel.send("Muted role not found, creating new role...")).catch(O_o => {})
    message.guild.roles.create({data:{ name: "Muted"}}).then(async(role) =>{
      message.guild.channels.cache.forEach(channel => {
        channel.createOverwrite(role, { SEND_MESSAGES: false, CONNECT: false, SPEAK: false, ADD_REACTIONS: false });
      });
    })
  }
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) ||
  message.guild.members.cache.find(member => member.user.tag.toLowerCase().includes(args.join(" ").toLowerCase()));
  let reason = args.slice(1).join(" ");
const missingArgsEmbed = new Discord.MessageEmbed() // Creates the embed thats sent if the command isnt run right
        .setColor(`#000000`)
        .setTitle('Missing Arguments!')
        .setDescription('Usage: mute [User] [Reason]');
   if (!reason) reason = "No reason provided";
  if (!member || !args.join(" ")) return message.channel.send(missingArgsEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})

const warningdmEmbed = new Discord.MessageEmbed() // Creates the embed that's DM'ed to the user when their warned!
    .setColor("#000000")
    .setThumbnail(member.user.avatarURL())
    .setTitle(`You have been muted in ${message.guild.name}, read rules please to avoid getting punished the next time`)
    .addField("Reason", reason)
    .setFooter(`Read rules please to not get muted the next time.`);

const warningdffEmbed = new Discord.MessageEmbed() // Creates the embed that's DM'ed to the user when their warned!
    .setColor("#000000")
    .setThumbnail(member.user.avatarURL())
    .setTitle(`You have been unmuted in ${message.guild.name} !`)
    .setFooter(`Read rules please to not get muted the next time.`);
const lewdembedd = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`Sorry, this specified member is protected and therefore they cannot be muted!`);
if (!member.kickable)return message.channel.send(lewdembedd);

const dzadazdaffzd = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`Sorry, this specified member is already jailed, you have to unjail then mute them !`)
    if (message.guild.id === "660822589077323786"){
      let jailrole = message.guild.roles.cache.find(r => r.name === "NVJail");
       if (member.roles.cache.has(jailrole.id))return message.channel.send(dzadazdaffzd);
      }
       const dzadazdazd = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`Sorry, this specified member is already muted`)
    
if (member.roles.cache.has(mutedrole.id))return message.channel.send(dzadazdazd);

if (message.guild.id === "660822589077323786"){
  if (member.roles.cache.some(r =>["Immune", "Immune"].includes(r.name)))
  return message.channel.send(lewdembedd)}
  if (member.roles.cache.has(adminlevel[message.guild.id].lvl1) || member.roles.cache.has(adminlevel[message.guild.id].lvl2) || member.roles.cache.has(adminlevel[message.guild.id].lvl3) || member.roles.cache.has(adminlevel[message.guild.id].lvl4) || member.hasPermission("ADMINISTRATOR"))
  return message.channel.send(lewdembedd);

    
    if(serverset[message.guild.id].stafflogschannel !== "None") {
    let logs = member.guild.channels.cache.get(serverset[message.guild.id].stafflogschannel);
  const lewddemddbedm = new Discord.MessageEmbed()
    .setColor(`#ff0000`)
    .setAuthor(" |  admin action", message.author.displayAvatarURL())
    .setFooter(`${member.user.id}`)
    .setTimestamp(new Date())
    .setDescription(`User <@${member.user.id}> (${member.user.username}) has been muted by ${message.author.username} reason: **${reason}** `);
    if(logs)logs.send(lewddemddbedm).catch(O_o => {});
}

  const lewdembed = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(
      `✔︎ | **${member.user.username}** has been muted by **${message.author.username}** for: **${reason}**`
    );
member.send(warningdmEmbed).catch(O_o => {});
  message.channel.send(lewdembed).catch(e =>  message.channel.send(e)).catch(O_o => {})
   setTimeout(() => {message.delete().catch(O_o => {});}, 500);
   if (member.voice.channel){ member.voice.setChannel(null);}
  member.roles.add(mutedrole).catch(e =>  message.channel.send(e)).catch(O_o => {})
  if (message.guild.id === "660822589077323786"){
    let memberrole = message.guild.roles.cache.find(r => r.name === "𝘔𝘦𝘮𝘣𝘦𝘳");
  member.roles.remove(memberrole).catch(O_o => {})
}


if (!mutelogs[`${message.guild.id}, ${member.user.id}`]){
  mutelogs[`${message.guild.id}, ${member.user.id}`] = {
        mutedby: `${message.author.tag}`,
        mreason: reason,
        mdate: Date.now(),
        mrole: 1
}
}
mutelogs[`${message.guild.id}, ${member.user.id}`] = {
  mutedby: `${message.author.tag}`,
  mreason: reason,
  mdate: Date.now(),
  mrole: 1
}
fs.writeFile("./storage/mutelogs.json", JSON.stringify(mutelogs), (err) => {
  if(err) console.log(err)
})


 
   setTimeout(() => {
    mutelogs[`${message.guild.id}, ${member.user.id}`] = {
      mutedby: `${mutelogs[`${message.guild.id}, ${member.user.id}`].mutedby}`,
      mreason: mutelogs[`${message.guild.id}, ${member.user.id}`].reason,
      mdate: mutelogs[`${message.guild.id}, ${member.user.id}`].mdate,
      mrole: 0
}

  fs.writeFile("./storage/mutelogs.json", JSON.stringify(mutelogs), (err) => {
      if(err) console.log(err)
  })
member.roles.remove(mutedrole).catch(e =>  message.channel.send(e)).catch(O_o => {})
member.send(warningdffEmbed).catch(O_o => {});

if (message.guild.id === "660822589077323786"){
  let memberrole = message.guild.roles.cache.find(r => r.name === "𝘔𝘦𝘮𝘣𝘦𝘳");
member.roles.add(memberrole).catch(e =>  message.channel.send(e)).catch(O_o => {})
}
}, 1000 * 60 * 60);
};


module.exports.config = {
  name: "mute"
};

