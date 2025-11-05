
const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {
  if (message.guild.id !== "660822589077323786") return;// message.channel.send("This command cannot be used in this server");




  const warningdmEmbed = new Discord.MessageEmbed() // Creates the embed that's DM'ed to the user when their warned!
    .setColor("#000000")
    .setTitle(`❥ | How to play music in VC !`)
    .setDescription(`**To play music join any VoiceChat and type <a:ynvtbearmusicvibe:714132844695388190>**
**-play - !!play - *play - >play - %play - +play - ->play - /play - _play**`)
    .setFooter(`Make sure to use these commands in bots channel pleasle if you're going to play many songs !`);
message.channel.send(warningdmEmbed).catch(O_o => {})
setTimeout(() => {message.delete().catch(O_o => {});}, 500);  
};

module.exports.config = {
  name: "music"
};

