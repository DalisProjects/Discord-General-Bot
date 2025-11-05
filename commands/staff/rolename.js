



let discord = require("discord.js");
let adminlevel = require("../../storage/adminlevel.json");

module.exports.run = async (bot, message, args) => {
  let botuser = message.guild.members.cache.get("723061621991276574");
  if(!botuser.hasPermission("ADMINISTRATOR") && !botuser.hasPermission("MANAGE_ROLES"))return message.member.send(`I don't have administrator nor manage roles permissions to run this command !`).catch(O_o => {});  

const msg = args.join(' ').split(', ')
  const 𝘮𝘮m𝘶𝘯𝘪𝘵𝘺 = new discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`Sorry, you don't have permissions to use this command !`);
 if (!message.member.roles.cache.has(adminlevel[message.guild.id].lvl4) && !message.member.hasPermission("MANAGE_ROLES") && !message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(𝘮𝘮m𝘶𝘯𝘪𝘵𝘺).catch(e =>  message.channel.send(e)).catch(O_o => {})
    
  let rainbow = message.guild.roles.cache.find(r => r.name.toLowerCase().includes(msg[0].toLowerCase())) || message.mentions.roles.first() || message.guild.roles.cache.get(msg[0]); 

  const missingArgsEmbed = new discord.MessageEmbed() // Creates the embed thats sent if the command isnt run right
        .setColor(`#000000`)
        .setTitle('Missing Arguments!')
        .setDescription(`Usage: rolename [rolename, newName]`);

const erferfaaa = new discord.MessageEmbed() // Creates the embed thats sent if the command isnt run right
        .setColor(rainbow.color)
        .setDescription(`You have successfully changed the role name **${rainbow.name}** to **${msg[1]}** !`);

  if (!msg[0]) return message.channel.send(missingArgsEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})
  if (!msg[1]) return message.channel.send(missingArgsEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})
if (!rainbow) return message.channel.send(missingArgsEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})
rainbow.edit({
            name: msg[1]
          });
    message.channel.send(erferfaaa).catch(e =>  message.channel.send(e)).catch(O_o => {})
  return;

};
module.exports.config = {
  name: "rolename",
  aliases: ["rname"]
};
