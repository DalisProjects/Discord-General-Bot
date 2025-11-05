const Discord = require("discord.js");



module.exports.run = async (bot, msg, args) => {
  let sayMessage = args.join(" ").toLowerCase();
  if (args.length < 1) {
        throw 'You must input text to be reversed!';
    }
    if (reason.includes("@")) return message.channel.send("You can't @ people and roles !");
   if (sayMessage.includes("nigger")) {
    msg.channel.send(`my mans ${msg.author.username} trynna say hard r <a:ynvpplspitt:706206966284025937> !`).catch(e =>  message.channel.send(e)).catch(O_o => {})
    msg.delete().catch(e =>  message.channel.send(e)).catch(O_o => {})
    return;
  }
  msg.channel.send(args.join(' ').split('').reverse().join('')).catch(e =>  message.channel.send(e)).catch(O_o => {})
};

module.exports.config = {
  name: "reverse"
};
