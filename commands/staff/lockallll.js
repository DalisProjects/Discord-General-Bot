const discord = require("discord.js");
let adminlevel = require("../../storage/adminlevel.json");

module.exports.run = async (bot, message, args) => {
  let everyone = message.guild.roles.cache.find(r => r.name === "@everyone");
  const 𝘮𝘮m𝘶𝘯𝘪𝘵𝘺 = new discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`Sorry, you don't have permissions to use this command !`);
 if (!message.member.roles.cache.some(r =>["シ", "シ"].includes(r.name)))
    return message.channel.send(𝘮𝘮m𝘶𝘯𝘪𝘵𝘺).catch(e =>  message.channel.send(e)).catch(O_o => {})
    if (message.guild.id !== "660822589077323786") return message.channel.send("This command cannot be used in this server");
 
let rainboww = message.guild.roles.cache.find(r => r.name === "@𝘔𝘦𝘮𝘣𝘦𝘳");
  let incorr = new discord.MessageEmbed()
    .setColor("#000000")
    .setTitle("Incorrect Usage!")
    .setDescription("\n.lockall on to turn on\n.lockall off to turn off");

  if (!args[0]) return message.reply(incorr);
//let channell = message.channelmessage.guild.channels
  if (args[0] === "on") {
    message.guild.channels.cache.forEach(channel => {
      channel.createOverwrite(everyone, {
        SEND_MESSAGES: false,
       // READ_MESSAGES: false
      });
    });
    message.channel.send(`Lockdown initiated! <@${message.author.id}>`);
  }
  if (args[0] === "off") {
    message.guild.channels.cache.forEach(channel => {
      channel.createOverwrite(everyone, {
        SEND_MESSAGES: null
    //    READ_MESSAGES: true
      });
    });
    message.channel.send(`Lockdown terminated! <@${message.author.id}>`);
  }
};
module.exports.config = {
  name: "lockalldali"
};
