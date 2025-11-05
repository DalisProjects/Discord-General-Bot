const Discord = require("discord.js");


let adminlevel = require("../../storage/adminlevel.json");

module.exports.run = async (bot, message, args) => {
   if (message.guild.id !== "660822589077323786") return message.channel.send("This command cannot be used in this server yet");
   const 𝘮𝘮m𝘶𝘯𝘪𝘵𝘺 = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`Sorry, you don't have permissions to use this command !`);
 if (!message.member.roles.cache.has(adminlevel[message.guild.id].lvl3) && !message.member.roles.cache.has(adminlevel[message.guild.id].lvl4) && !message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(𝘮𝘮m𝘶𝘯𝘪𝘵𝘺).catch(e =>  message.channel.send(e)).catch(O_o => {})
  
  //let msg = args.join(" ");
   const msg = args.join(' ');
if(!msg) return message.channel.send("what u trynnna react to");

await msg.react("706263905550336050");
await msg.react("706278993879498866");
await msg.react("706248845192986665");
await msg.react("706263900819292281");
await msg.react("706248793871352012");
await msg.react("708620104027471894");
await msg.react("714859856141484153");
await msg.react("706233731580428359");
await msg.react("706233721635864656");
await msg.react("706425133920682015");
await msg.react("706203642453164152");
await msg.react("706233705152118856");
await msg.react("706233722508410951");
};
module.exports.config = {
  name: "reactselfie"
};