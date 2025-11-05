const discord = require("discord.js");
let adminlevel = require("../../storage/adminlevel.json");

module.exports.run = async (bot, message, args) => {
  let everyone = message.guild.roles.cache.find(r => r.name === "@everyone");
  const 𝘮𝘮m𝘶𝘯𝘪𝘵𝘺 = new discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`Sorry, you don't have permissions to use this command !`);
  if (!message.member.roles.cache.has(adminlevel[message.guild.id].lvl3) && !message.member.roles.cache.has(adminlevel[message.guild.id].lvl4) && !message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(𝘮𝘮m𝘶𝘯𝘪𝘵𝘺).catch(e =>  message.channel.send(e)).catch(O_o => {})
    return message.channel.send("crrently disabled");
  let channel = message.channel;
const msg = args.join(' ').split(' | ')
let cmd = msg[0].toLowerCase();

 
  let reason = cmd;
  if (!reason) return message.channel.send("u need to provide rolename");
  if (reason === "vc mod") reason = "𝘝𝘊 𝘔𝘖𝘋🎙️";
  if (reason === "double booster") reason = "✯ 𝘋𝘰𝘶𝘣𝘭𝘦 𝘉𝘰𝘰𝘴𝘵𝘦𝘳";
  if (reason === "djrole") reason = "𝘋𝘑𝘳𝘰𝘭𝘦 🎤";
  if (reason === "vc bypass") reason = "𝘝𝘊 𝘉𝘺𝘱𝘢𝘴𝘴🎤";
  if (reason === "events manager") reason = "𝘌𝘷𝘦𝘯𝘵𝘴 𝘔𝘢𝘯𝘢𝘨𝘦𝘳";
  if (reason === "emojis manager") reason = "𝘌𝘮𝘰𝘫𝘪𝘴 𝘮𝘢𝘯𝘢𝘨𝘦𝘳";
  if (reason === "trainee mod") reason = "𝘛𝘳𝘢𝘪𝘯𝘦𝘦 𝘔𝘖𝘋";
 // let reason = cmd;
  let rainbow = message.guild.roles.cache.find(r => r.name === reason); 


    channel.overwritePermissions(reason, { SEND_MESSAGES: msg[1] });
    message.channel.send(
      `This channel has been successfully locked, use **.lockdown off** to unlock it !`
    );

};

module.exports.config = {
  name: "cp",
  aliases: ["channelperm", "cperm"]
};