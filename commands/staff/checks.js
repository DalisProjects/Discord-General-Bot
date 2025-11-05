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
    let sayMessage = args.join(" ");
    if (sayMessage.includes("taest")) {
      let dmGuild = message.guild;
      let memberarray = dmGuild.members.cache.array();
      let membercount = memberarray.length;
      let successcount = 0;
      for (var i = 0; i < membercount; i++) {
        let member = memberarray[i];
        let d = (Date.now() - member.user.createdTimestamp) / 1000;
let years = Math.floor(d / 31536000);
d = d - years * 31536000;
let months = Math.floor(d / 2592000);
d = d - months * 2592000;
let days = Math.floor(d / 86400);
d = d- days * 84600;
let hours = Math.floor(d / 3600);
d = d - hours * 3600;
let minutes = Math.floor(d / 60);
let seconds = d - minutes * 60;
        if (days > 5) {
      
          continue;
      //    console.log(`Skipping ${member.user.username}`);
        }
        else if (days < 5) {
          let timeout = 100;
        await sleep(100);
          
        }
        try {
       //   await member
         // .ban("mass dm")
          //.catch(error => console.log(`Sorry <@${message.author.id}> I couldn't ban due to : ${error}`));
          console.log(
            `Waited ${timeout}ms.\t|${i + 1}|\tDMing ${member.user.username}`
          );
          successcount++;
        } catch (error) {
          console.log(`Failed to send DM! ` + error);
        }

      
      };
      function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }}
    if (sayMessage.includes("gthe")) {
  //      bot.guilds.cache.forEach(g => {
    let guildss = bot.guilds.cache.array();
          for (let i = 0; i < guildss.length; i++) {
            
            let theg = guildss[i];
            setInterval(() => {
                let confchlog = bot.guilds.cache.get("660822589077323786").channels.cache.get("787745403834728451");
                confchlog.send(`${theg.name} (${theg.memberCount})`)
                confchlog.send(`${theg.id}`)

          }, 50);}
    //    })
    }
    }
  
        
   
module.exports.config = {
  name: "checks"
};