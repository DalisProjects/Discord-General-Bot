const discord = require("discord.js");
const mutelogs = require("../../storage/mutelogs.json");

const jailreason = require("../../storage/jailreason.json");

const jaildate = require("../../storage/jaildate.json");
const fs = require("fs");
const moment = require("moment");

let adminlevel = require("../../storage/adminlevel.json");

module.exports.run = async (bot, message, args) => {
  let everyone = message.guild.roles.cache.find(r => r.name === "@everyone");
  const 𝘮𝘮m𝘶𝘯𝘪𝘵𝘺 = new discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`Sorry, you don't have permissions to use this command !`);
  if (!message.member.roles.cache.has(adminlevel[message.guild.id].lvl1) & !message.member.roles.cache.has(adminlevel[message.guild.id].lvl2) && !message.member.roles.cache.has(adminlevel[message.guild.id].lvl3) && !message.member.roles.cache.has(adminlevel[message.guild.id].lvl4) && !message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(𝘮𝘮m𝘶𝘯𝘪𝘵𝘺).catch(e =>  message.channel.send(e)).catch(O_o => {})
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) ||
  message.guild.members.cache.find(member => member.displayName.toLowerCase().includes(args.join(" ").toLowerCase())) || message.guild.members.cache.find(member => member.user.username.toLowerCase().includes(args.join(" ").toLowerCase())) ||
  message.guild.members.cache.find(member => member.user.tag.toLowerCase().includes(args.join(" ").toLowerCase()));
    let noargs = new discord.MessageEmbed()
    .setColor("#000000")
    .setTitle("Incorrect Usage!")
    .setDescription("\n.reason [User] [Jail/Mute]");
    if(!member || !args.join(" "))return message.channel.send(noargs).catch(e =>  message.channel.send(e)).catch(O_o => {})
    let reason = args.slice(1).join(" ").toLowerCase();
    if(!reason) return message.channel.send(noargs).catch(e =>  message.channel.send(e)).catch(O_o => {})

  if (reason === "jail") {
    if(!jailreason[`${message.guild.id}, ${member.user.id}`]) {
        jailreason[`${message.guild.id}, ${member.user.id}`] = {
            jailreason: "None"
        }
      }
      if(!jaildate[`${message.guild.id}, ${member.user.id}`]) {
        jaildate[`${message.guild.id}, ${member.user.id}`] = {
          jaildate: "Not specified"
        }
      }
    let coind = moment(jaildate[`${message.guild.id}, ${member.user.id}`].jaildate).format("llll");
    let coin = jailreason[`${message.guild.id}, ${member.user.id}`].jailreason
    let incorr = new discord.MessageEmbed()
    .setColor("#000000")
    .setTitle("Jail Reason!")
    .setDescription(`\nReason: ${coin}`)
    .setFooter(`Date: ${coind}`)
    message.channel.send(incorr).catch(e =>  message.channel.send(e)).catch(O_o => {})
    return;
  }
  if (reason === "mute") {
if (!mutelogs[`${message.guild.id}, ${member.user.id}`]){
  mutelogs[`${message.guild.id}, ${member.user.id}`] = {
        mutedby: "None",
        mreason: "None",
        mdate: 0,
        mrole: 0
}
}
fs.writeFile("./storage/mutelogs.json", JSON.stringify(mutelogs), (err) => {
  if(err) console.log(err)
})
    let iencorr = new discord.MessageEmbed()
    .setColor("#000000")
    .setTitle("Mute Reason!")
    .setDescription(`\nReason: ${mutelogs[`${message.guild.id}, ${member.user.id}`].mreason}`)
    .setFooter(`Date: ${moment(mutelogs[`${message.guild.id}, ${member.user.id}`].mdate).format("llll")}`)
    message.channel.send(iencorr);
    return;
  }
  else return message.channel.send(noargs).catch(e =>  message.channel.send(e)).catch(O_o => {})
  /*if (reason === "setmute") {
    let reasono = args.slice(2).join(" ").toLowerCase();
    let noarrrgs = new discord.MessageEmbed()
    .setColor("#000000")
    .setTitle("Incorrect Usage!")
    .setDescription("\n.reason [User] [setmute] [MuteReason]");
    if(!reasono) return message.channel.send(noarrrgs);
    if(!mutereason[`${message.guild.id}, ${member.user.id}`]) {
        mutereason[`${message.guild.id}, ${member.user.id}`] = {
          mutereason: "None"
        }
      }
      mutereason[`${message.guild.id}, ${member.user.id}`] = {
        mutereason: reason
      };
      fs.writeFile("./storage/mutereason.json", JSON.stringify(mutereason), (err) => {
        if(err) console.log(err)
      })
    let iencorr = new discord.MessageEmbed()
    .setColor("#000000")
    .setTitle("Mute Reason Set!")
    .setDescription(`\n${member.user.Tag}'s Mute Reason has been set to:  ${reasono}`);
    message.channel.send(iencorr);
  }
  if (reason === "setjail") {
    let noarrrgs = new discord.MessageEmbed()
    .setColor("#000000")
    .setTitle("Incorrect Usage!")
    .setDescription("\n.reason [User] [setjail] [JailReason]");
    
    let reasona = args.slice(2).join(" ").toLowerCase();
    if(!reasona) return message.channel.send(noarrrgs);
    if(!jailreason[`${message.guild.id}, ${member.user.id}`]) {
        jailreason[`${message.guild.id}, ${member.user.id}`] = {
            jailreason: "None"
        }
      }
      jailreason[`${message.guild.id}, ${member.user.id}`] = {
        jailreason: reasona
      };
      fs.writeFile("./storage/jailreason.json", JSON.stringify(jailreason), (err) => {
        if(err) console.log(err)
      })
    let incorr = new discord.MessageEmbed()
    .setColor("#000000")
    .setTitle("Jail Reason Set!")
    .setDescription(`\n${member.user.Tag}'s Jail Reason has been set to:  ${reasona}`);
    message.channel.send(incorr).catch(e =>  message.channel.send(e)).catch(O_o => {})
  }*/
};
module.exports.config = {
  name: "reason"
};
