const Discord = require("discord.js");
let spanks = require("../../storage/spanks.json");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
  let target =
    message.mentions.members.first() || message.guild.members.cache.get(args[0]) ||
  message.guild.members.cache.find(member => member.displayName.toLowerCase().includes(args.join(" ").toLowerCase())) || message.guild.members.cache.find(member => member.user.username.toLowerCase().includes(args.join(" ").toLowerCase())) ||
  message.guild.members.cache.find(member => member.user.tag.toLowerCase().includes(args.join(" ").toLowerCase()));
  const rando_imgs = [
    "https://media1.tenor.com/images/ef5f040254c2fbf91232088b91fe2341/tenor.gif?itemid=13569259",
    "https://media1.tenor.com/images/1235505dc4abd822a7f540ad00e24a17/tenor.gif?itemid=15788982",
    "https://media1.tenor.com/images/a7ed1e6575b047ae219c8bdef3cdb799/tenor.gif?itemid=16082139",
    "https://c.tenor.com/bbAQ2wzoecoAAAAM/spank-tom-and-jerry.gif",
    "https://c.tenor.com/KsAbF7SIY6wAAAAM/spank-bad-girl.gif",
    "https://c.tenor.com/DJWFhpWjyooAAAAM/spanking-drake.gif",
    "https://c.tenor.com/Sp7yE5UzqFMAAAAM/spank-slap.gif",
    "https://c.tenor.com/u8wG4ggzjkkAAAAM/spank-spanking.gif",
    "https://c.tenor.com/xJ2AVIHrCPIAAAAM/spank-chicken.gif",
    "https://c.tenor.com/meoJQIsMG3EAAAAM/otk-over-the-knee.gif",
    "https://c.tenor.com/zlM4Im2DJO4AAAAM/spank-spanked.gif",
    "https://c.tenor.com/CAesvxP0KyEAAAAM/shinobu-kocho-giyuu-tomioka.gif",

  ];

  let fulled = rando_imgs[Math.floor(Math.random() * rando_imgs.length)];

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
      if(!spanks[message.author.id]) {
        spanks[message.author.id] = {
          spanks: 0
        }
      }
      spanks[message.author.id] = {
        spanks: spanks[message.author.id].spanks + 1
    };
    fs.writeFile("./storage/spanks.json", JSON.stringify(spanks), (err) => {
      if(err) console.log(err)
      })
      if(spanks[message.author.id].spanks == 1) {
        actimes = "That's your first spank to yourself !";
        }; 
        if(spanks[message.author.id].spanks > 1){
          actimes = `That's ${spanks[message.author.id].spanks} spanks to themselves now `;
          }; 
              const lewdembed = new Discord.MessageEmbed()
              .setTitle(`${message.member.displayName} spanks themselves`)
              .setImage(fulled)
              .setColor(`#2A2A2A`)
              .setFooter(actimes)
            message.channel.send(lewdembed).catch(e =>  message.channel.send(e)).catch(O_o => {})
            return;
    }
  if (!target|| !args.join(" ")) return message.channel.send(lewddes).catch(e =>  message.channel.send(e)).catch(O_o => {})
  if(!spanks[`${target.id}, ${message.author.id}`]) {
    spanks[`${target.id}, ${message.author.id}`] = {
      spanks: 0
    }
  }
  if(!spanks[`${message.author.id}, ${target.id}`]) {
    spanks[`${message.author.id}, ${target.id}`] = {
      spanks: 0
    }
  }
  spanks[`${target.id}, ${message.author.id}`] = {
    spanks: spanks[`${target.id}, ${message.author.id}`].spanks + 1
};
let amounth1 = parseInt(spanks[`${target.id}, ${message.author.id}`].spanks, 10);
let amounth2 = parseInt(spanks[`${message.author.id}, ${target.id}`].spanks, 10);
let totalac = amounth1 +amounth2
var actimes;
if(spanks[`${target.id}, ${message.author.id}`].spanks == 1){
actimes = "That's their first spank from you !";
};
if(spanks[`${target.id}, ${message.author.id}`].spanks > 1){
actimes = `That's ${spanks[`${target.id}, ${message.author.id}`].spanks} spanks now (${totalac} total) `;
}; 
fs.writeFile("./storage/spanks.json", JSON.stringify(spanks), (err) => {
if(err) console.log(err)
})

  let avEmbed = new Discord.MessageEmbed()
    .setColor("#2A2A2A")
    .setTitle(
      `${message.author.username} spanks ${target.displayName}`
    )
    .setImage(fulled)
    .setFooter(actimes)

  return message.channel.send(avEmbed).catch(e =>  message.channel.send(`${message.member.displayName} spanks ${target.displayName}\n ${actimes}`))
};

module.exports.config = {
  name: "spank"
};
