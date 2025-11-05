
const Discord = require("discord.js");
const superagent = require("superagent");
let hugs = require("../../storage/hugs.json");
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
      if(!hugs[message.author.id]) {
        hugs[message.author.id] = {
          hugs: 0
        }
      }
      hugs[message.author.id] = {
        hugs: hugs[message.author.id].hugs + 1
    };
    fs.writeFile("./storage/hugs.json", JSON.stringify(hugs), (err) => {
      if(err) console.log(err)
      })
      if(hugs[message.author.id].hugs == 1) {
        actimes = "That's your first hug to yourself !";
        }; 
        if(hugs[message.author.id].hugs > 1){
          actimes = `That's ${hugs[message.author.id].hugs} hugs to themselves now `;
          }; 
          superagent.get('https://nekos.life/api/v2/img/hug')
          .end((err, response) => {
              const lewdembed = new Discord.MessageEmbed()
              .setTitle(`${message.member.displayName} hugs themselves`)
              .setImage(response.body.url, (err) => { if(err) console.log(err)})
              .setColor(`#2A2A2A`)
              .setFooter(actimes)
            message.channel.send(lewdembed).catch(e =>  message.channel.send(e)).catch(O_o => {})
          })
            return;
    }
  if (!target|| !args.join(" ")) return message.channel.send(lewddes).catch(e =>  message.channel.send(e)).catch(O_o => {})
    if(!hugs[`${target.id}, ${message.author.id}`]) {
      hugs[`${target.id}, ${message.author.id}`] = {
        hugs: 0
      }
    }
    if(!hugs[`${message.author.id}, ${target.id}`]) {
      hugs[`${message.author.id}, ${target.id}`] = {
        hugs: 0
      }
    }
    hugs[`${target.id}, ${message.author.id}`] = {
      hugs: hugs[`${target.id}, ${message.author.id}`].hugs + 1
  };
  let amounth1 = parseInt(hugs[`${target.id}, ${message.author.id}`].hugs, 10);
  let amounth2 = parseInt(hugs[`${message.author.id}, ${target.id}`].hugs, 10);
  let totalac = amounth1 +amounth2
  var actimes;
if(hugs[`${target.id}, ${message.author.id}`].hugs == 1){
  actimes = "That's their first hug from you !";
};
if(hugs[`${target.id}, ${message.author.id}`].hugs > 1){
  actimes = `That's ${hugs[`${target.id}, ${message.author.id}`].hugs} hugs now (${totalac} total) `;
}; 
fs.writeFile("./storage/hugs.json", JSON.stringify(hugs), (err) => {
  if(err) console.log(err)
})
 try {
            superagent.get('https://nekos.life/api/v2/img/hug')
                .end((err, response) => {
              const lewdembed = new Discord.MessageEmbed()
              .setTitle(`${message.member.displayName} hugs ${target.displayName}`)
              .setImage(response.body.url)
              .setColor(`#2A2A2A`)
              .setFooter(actimes)
            message.channel.send(lewdembed).catch(e =>  message.channel.send(e)).catch(O_o => {})
            
            })
          }catch (err){
            message.channel.send(`${message.member.displayName} hugs ${target.displayName}\n ${actimes}`)
        }

        }
        module.exports.config = {
            name: "hug",
        };
