
const Discord = require("discord.js");
const superagent = require("superagent");
let kisses = require("../../storage/kisses.json");
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
      if(!kisses[message.author.id]) {
        kisses[message.author.id] = {
          kisses: 0
        }
      }
      kisses[message.author.id] = {
        kisses: kisses[message.author.id].kisses + 1
    };
    fs.writeFile("./storage/kisses.json", JSON.stringify(kisses), (err) => {
      if(err) console.log(err)
      })
      if(kisses[message.author.id].kisses == 1) {
        actimes = "That's your first kiss to yourself !";
        }; 
        if(kisses[message.author.id].kisses > 1){
          actimes = `That's ${kisses[message.author.id].kisses} kisses to themselves now `;
          }; 
          superagent.get('https://nekos.life/api/v2/img/kiss')
          .end((err, response) => {
              const lewdembed = new Discord.MessageEmbed()
              .setTitle(`${message.member.displayName} kisses themselves`)
              .setImage(response.body.url, (err) => { if(err) console.log(err)})
              .setColor(`#2A2A2A`)
              .setFooter(actimes)
            message.channel.send(lewdembed).catch(e =>  message.channel.send(`${message.member.displayName} kisses themselves\n ${actimes}`))
          })
            return;
    }
  if (!target|| !args.join(" ")) return message.channel.send(lewddes).catch(e =>  message.channel.send(e)).catch(O_o => {})
  if(!kisses[`${target.id}, ${message.author.id}`]) {
    kisses[`${target.id}, ${message.author.id}`] = {
      kisses: 0
    }
  }
  if(!kisses[`${message.author.id}, ${target.id}`]) {
    kisses[`${message.author.id}, ${target.id}`] = {
      kisses: 0
    }
  }
  kisses[`${target.id}, ${message.author.id}`] = {
    kisses: kisses[`${target.id}, ${message.author.id}`].kisses + 1
};
let amounth1 = parseInt(kisses[`${target.id}, ${message.author.id}`].kisses, 10);
let amounth2 = parseInt(kisses[`${message.author.id}, ${target.id}`].kisses, 10);
let totalac = amounth1 +amounth2
var actimes;
if(kisses[`${target.id}, ${message.author.id}`].kisses == 1){
actimes = "That's their first kiss from you !";
};
if(kisses[`${target.id}, ${message.author.id}`].kisses > 1){
actimes = `That's ${kisses[`${target.id}, ${message.author.id}`].kisses} kisses now (${totalac} total) `;
}; 
fs.writeFile("./storage/kisses.json", JSON.stringify(kisses), (err) => {
if(err) console.log(err)
})
           try {
            superagent.get('https://nekos.life/api/v2/img/kiss')
                .end((err, response) => {
              const lewdembed = new Discord.MessageEmbed()
              .setTitle(`${message.member.displayName} kisses ${target.displayName}`)
              .setImage(response.body.url)
              .setColor(`#2A2A2A`)
              .setFooter(actimes)
            message.channel.send(lewdembed).catch(e =>  message.channel.send(`${message.member.displayName} kisses ${target.displayName}\n ${actimes}`))
            })
          }catch (err){
            message.channel.send(`${message.member.displayName} kisses ${target.displayName}\n ${actimes}`)
        }
        }             

        module.exports.config = {
            name: "kiss",
        };
