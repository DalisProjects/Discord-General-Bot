



let discord = require("discord.js");
let adminlevel = require("../../storage/adminlevel.json");

module.exports.run = async (bot, message, args) => {

const msg = args.join(' ').split(', ')
  const 𝘮𝘮m𝘶𝘯𝘪𝘵𝘺 = new discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`Sorry, you don't have permissions to use this command !`);
 if (!message.member.roles.cache.has(adminlevel[message.guild.id].lvl3) && !message.member.hasPermission("MANAGE_ROLES") && !message.member.roles.cache.has(adminlevel[message.guild.id].lvl4) && !message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(𝘮𝘮m𝘶𝘯𝘪𝘵𝘺).catch(e =>  message.channel.send(e)).catch(O_o => {})
  let rainbow = message.guild.roles.cache.find(r => r.name.toLowerCase().includes(msg[0].toLowerCase())) || message.mentions.roles.first() || message.guild.roles.cache.get(msg[0]);

  const missingArgsEmbed = new discord.MessageEmbed() // Creates the embed thats sent if the command isnt run right
        .setColor(`#000000`)
        .setTitle('Missing Arguments!')
        .setDescription(`Usage: rolecolor [RoleName, HexColor]\nTo change role color`);

const erferfaaa = new discord.MessageEmbed() // Creates the embed thats sent if the command isnt run right
        .setColor(msg[1])
        .setDescription(`You have successfully changed the role color !`);
  if(!rainbow) return message.channel.send(missingArgsEmbed);
  if (!msg[0]) return message.channel.send(missingArgsEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})
  if (!msg[1]) return message.channel.send(missingArgsEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})

rainbow.edit({
            color: msg[1]
          });
    message.channel.send(erferfaaa).catch(e =>  message.channel.send(e)).catch(O_o => {})
  return;

};
module.exports.config = {
  name: "rolecolor",
  aliases: ["rcolor"]
};
