let kisses = require("../../storage/kisses.json");
const ms = require("parse-ms");
let hugs = require("../../storage/hugs.json");

let slaps = require("../../storage/slaps.json");
let spanks = require("../../storage/spanks.json");
let mutelogs = require("../../storage/mutelogs.json");
let serverset = require("../../storage/serverset.json");
let afklogs = require("../../storage/afklogs.json");
let marriagelogs = require("../../storage/marriagelogs.json");



let currencylogs = require("../../storage/currencylogs.json");


const Discord = require("discord.js");
const fs = require("fs");

let adminlevel = require("../../storage/adminlevel.json");

module.exports.run = async (bot, message, args) => {
  const 𝘮𝘮m𝘶𝘯𝘪𝘵𝘺 = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`Sorry, you don't have permissions to use this command !`);
    if (message.author.id != "290536979110690816")
    return message.channel.send("Only the bot developer can use this command !");
    let sayMessage = args[0];
    if (sayMessage == "starrt") {
      let dmGuild = args[1];
      let guildidd = bot.guilds.cache.get(dmGuild);
      if (!guildidd) return message.channel.send("Couldn't find that ID");
      let memberarray = guildidd.members.cache.array();
      let membercount = memberarray.length;
      let successcount = 0;
      for (var i = 0; i < membercount; i++) {
        let member = memberarray[i];
        if (member.user.bot) {
      
      
          console.log(`Skipping bot with name ${member.user.username}`);
          continue;
        }
      
        
        let timeout = 1000;
         sleep(1000);
        if (i == membercount - 1) {
          console.log(`Waited ${timeout}ms.\t\\/\tDATA ${member.user.username}`);
        } else {
          console.log(
            `Waited ${timeout}ms.\t|${i + 1}|\tDATA ${member.user.username}`
          );
        }
        try {
          if (!marriagelogs[member.user.id])
          {
            continue;
          }
    
          else {
            if(!marriagelogs[member.user.id]) {
              marriagelogs[member.user.id] = {
                marprop: 0
              }

          }
          if(!marriagelogs[member.user.id]) {
            marriagelogs[member.user.id] = {
              marrypropname: 0
            }

        }
        if(!marriagelogs[member.user.id]) {
          marriagelogs[member.user.id] = {
            marrysince: 0
          }

      }
            marriagelogs[member.user.id] = {
            marry: marriagelogs[member.user.id].marry,
            marprop: marriagelogs[member.user.id].marprop,
            marrypropname: marriagelogs[member.user.id].marrypropname,
            marrysince: marriagelogs[member.user.id].marrysince,
        }
        fs.writeFile("./storage/marriagelogs.json", JSON.stringify(marriagelogs), (err) => {
          if(err) console.log(err)})
     //   }
          }
          
          successcount++;
        } catch (error) {
          console.log(`Failed to send DM! ` + error);
        }
      }
      };

      function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    
  }
    if (sayMessage == "2") {
        serverset[message.guild.id] = {
          welcomechannel: "None",
        
          chatgameschannel: "None",
          membercountmessage: "members :",
          deletedmsgschannel: "None",
          membercount: "None",
          rejoinmessage: "Hey, Welcome back to the server",
          membermodulechannel: "None",
          stafflogschannel: "None",
          welcomemsg: "Hey, Welcome to the server}",
          prefix: "."
      }

    }
    fs.writeFile("./storage/serverset.json", JSON.stringify(serverset), (err) => {
      if(err) console.log(err)})
    }
        
   
module.exports.config = {
  name: "process"
};
/*let dmGuild = message.guild;
let memberarray = dmGuild.members.cache.array();
let membercount = memberarray.length;
let botcount = 0;
let successcount = 0;
for (var i = 0; i < membercount; i++) {
  let member = memberarray[i];
  if (member.user.bot) {


    console.log(`Skipping bot with name ${member.user.username}`);
    botcount++;
    continue;
  }

  
  let timeout = 100;
  await sleep(100);
  if (i == membercount - 1) {
    console.log(`Waited ${timeout}ms.\t\\/\tDMing ${member.user.username}`);
  } else {
    console.log(
      `Waited ${timeout}ms.\t|${i + 1}|\tDMing ${member.user.username}`
    );
  }
  try {
    if (!mutelogs[`${message.guild.id}, ${member.user.id}`]){
      mutelogs[`${message.guild.id}, ${member.user.id}`] = {
            mutedby: `None`,
            mreason: "None",
            mdate: 0,
            mrole: 0
    }
    }
    if (!muterolee[`${message.guild.id}, ${member.user.id}`])
    {


      console.log(`Skipping emptyyyyyyyyyy ${member.user.username}`);
      botcount++;
      continue;
    }
    
  //  let jailrole = message.guild.roles.cache.find(r => r.name === "Muted");
    else if(muterolee[`${message.guild.id}, ${member.user.id}`].muterolee > 0){
      muterolee[`${message.guild.id}, ${member.user.id}`] = {
        muterolee: 0
    }
      mutelogs[`${message.guild.id}, ${member.user.id}`] = {
            mutedby: `None`,
            mreason: mreason[`${message.guild.id}, ${member.user.id}`].mreason,
            mdate: mdate[`${message.guild.id}, ${member.user.id}`].mdate,
            mrole: 1
    }
    }
    fs.writeFile("./storage/mutelogs.json", JSON.stringify(mutelogs), (err) => {
      if(err) console.log(err)
    })
    successcount++;
  } catch (error) {
    console.log(`Failed to send DM! ` + error);
  }
}

};
function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms));*/