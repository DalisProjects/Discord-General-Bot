const Discord = require("discord.js");


let adminlevel = require("../../storage/adminlevel.json");

module.exports.run = async (bot, message, args) => {
  const 𝘮𝘮m𝘶𝘯𝘪𝘵𝘺 = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`Sorry, only the bot developer can use this command !`);
 if (message.author.id != "290536979110690816" && message.author.id != "615080634133512202")
    return message.channel.send(𝘮𝘮m𝘶𝘯𝘪𝘵𝘺).catch(e =>  message.channel.send(e)).catch(O_o => {})

  let idd = args.join(" ")
  if (!idd) return message.channel.send("What u trynna put as status nigga");
  message.channel.send("bot stats has been successfully updated !");
  bot.user.setStatus("online");
  bot.user.setPresence({
    activity: {
      name: idd,
      type: "STREAMING"
    }
  });
};

module.exports.config = {
  name: "setstatus"
};
