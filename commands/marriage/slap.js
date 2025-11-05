const Discord = require("discord.js");
const superagent = require("superagent");
let slaps = require("../../storage/slaps.json");
const fs = require("fs");

        exports.run = async (client, message, args, level) => {
            let target =
    message.mentions.members.first() || message.guild.members.cache.get(args[0]) ||
  message.guild.members.cache.find(member => member.displayName.toLowerCase().includes(args.join(" ").toLowerCase())) || message.guild.members.cache.find(member => member.user.username.toLowerCase().includes(args.join(" ").toLowerCase())) ||
  message.guild.members.cache.find(member => member.user.tag.toLowerCase().includes(args.join(" ").toLowerCase()));
            const lewddes = new Discord.MessageEmbed()
    .setColor(`#2A2A2A`)
    .setDescription(`Sorry, you didn't mention or specify the user.`);

    var kissme;
    if (args[0] === `me` || args[0] === `myself` ) kissme = 1;
    var actor;
    if (target){
    if (target.id == message.author.id){actor = 1}
    }else actor = 0;
    if (kissme == 1 || actor == 1){
      if(!slaps[message.author.id]) {
        slaps[message.author.id] = {
          slaps: 0
        }
      }
      slaps[message.author.id] = {
        slaps: slaps[message.author.id].slaps + 1
    };
    fs.writeFile("./storage/slaps.json", JSON.stringify(slaps), (err) => {
      if(err) console.log(err)
      })
      if(slaps[message.author.id].slaps == 1) {
        actimes = "That's your first slap to yourself !";
        }; 
        if(slaps[message.author.id].slaps > 1){
          actimes = `That's ${slaps[message.author.id].slaps} slaps to themselves now `;
          }; 
          superagent.get('https://nekos.life/api/v2/img/slap')
          .end((err, response) => {
              const lewdembed = new Discord.MessageEmbed()
              .setTitle(`${message.member.displayName} slaps themselves`)
              .setImage(response.body.url, (err) => { if(err) console.log(err)})
              .setColor(`#2A2A2A`)
              .setFooter(actimes)
            message.channel.send(lewdembed).catch(e =>  message.channel.send(e)).catch(O_o => {})
          })
            return;
    }
  if (!target || !args.join(" ")) return message.channel.send(lewddes).catch(e =>  message.channel.send(e)).catch(O_o => {})
  if(!slaps[`${target.id}, ${message.author.id}`]) {
    slaps[`${target.id}, ${message.author.id}`] = {
      slaps: 0
    }
  }
  if(!slaps[`${message.author.id}, ${target.id}`]) {
    slaps[`${message.author.id}, ${target.id}`] = {
      slaps: 0
    }
  }
  slaps[`${target.id}, ${message.author.id}`] = {
    slaps: slaps[`${target.id}, ${message.author.id}`].slaps + 1
};
let amounth1 = parseInt(slaps[`${target.id}, ${message.author.id}`].slaps, 10);
let amounth2 = parseInt(slaps[`${message.author.id}, ${target.id}`].slaps, 10);
let totalac = amounth1 +amounth2
var actimes;
if(slaps[`${target.id}, ${message.author.id}`].slaps == 1){
actimes = "That's their first slap from you !";
};
if(slaps[`${target.id}, ${message.author.id}`].slaps > 1){
actimes = `That's ${slaps[`${target.id}, ${message.author.id}`].slaps} slaps now (${totalac} total) `;
}; 
fs.writeFile("./storage/slaps.json", JSON.stringify(slaps), (err) => {
if(err) console.log(err)
})
try {
superagent.get('https://nekos.life/api/v2/img/slap')
.end((err, response) => {
              const lewdembed = new Discord.MessageEmbed()
              .setTitle(`${message.member.displayName} slaps ${target.displayName}`)
              .setImage(response.body.url)
              .setColor(`#2A2A2A`)
              .setFooter(actimes)
            message.channel.send(lewdembed).catch(e =>  message.channel.send(`${message.member.displayName} slaps ${target.displayName}\n ${actimes}`))
          })
        }catch (err){
          message.channel.send(`${message.member.displayName} kisses ${target.displayName}\n ${actimes}`)
      }
        }
        module.exports.config = {
            name: "slap",
        };