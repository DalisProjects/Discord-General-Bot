const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {
  let sayMessage = args.join(" ").toLowerCase();
  const lewddes = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`lol you cant send empty msgs big brain !.`);
  if (!sayMessage) return message.channel.send(lewddes).catch(e =>  message.channel.send(e)).catch(O_o => {})
if (sayMessage.includes("<@&")) return message.channel.send("You can't @ roles !");
  const lewdddes = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`You can't use say to post invite links !`);
    if (sayMessage.includes("discord.gg/")) {
    message.channel.send(lewdddes).catch(e =>  message.channel.send(e)).catch(O_o => {})
    message.delete().catch(e =>  message.channel.send(e)).catch(O_o => {})
    return;
  }

  message.channel.send(sayMessage);
  setTimeout(() => {message.delete().catch(O_o => {});}, 500);  
};

module.exports.config = {
  name: "say"
};
