const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {
  let msg = args.join(" ").toLowerCase();
  const lewddes = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`lol you cant make empty polls big brain !.`);
  if (!msg) return message.channel.send(lewddes).catch(e =>  message.channel.send(e)).catch(O_o => {})

  let embed = new Discord.MessageEmbed()
    .setColor("#000000")
    .setDescription(`\n${msg}\n`)
    .setFooter(`Requested by ${message.author.username}`)
    if (msg.includes(" or ")){
      message.channel.send(embed).then(msgg => {
        msgg.react("1️⃣").catch(e =>  message.channel.send(e)).catch(O_o => {})
        msgg.react("2️⃣").catch(e =>  message.channel.send(e)).catch(O_o => {})
     }).catch(e =>  message.channel.send(e)).catch(O_o => {})
      return;
      }
  message.channel.send(embed).then(msgg => {
     msgg.react("👍").catch(e =>  message.channel.send(e)).catch(O_o => {})
     msgg.react("👎").catch(e =>  message.channel.send(e)).catch(O_o => {})
  }).catch(e =>  message.channel.send(e)).catch(O_o => {})
};
module.exports.config = {
  name: "poll"
};
