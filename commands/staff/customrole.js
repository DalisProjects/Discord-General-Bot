

let discord = require("discord.js");
let adminlevel = require("../../storage/adminlevel.json");

module.exports.run = async (bot, message, args) => {
  let botuser = message.guild.members.cache.get("723061621991276574");
  if(!botuser.hasPermission("ADMINISTRATOR") && !botuser.hasPermission("MANAGE_ROLES"))return message.member.send(`I don't have administrator nor manage roles permissions to run this command !`).catch(O_o => {});  
let target = message.mentions.members.first() || message.guild.members.cache.get(args[0]) ||
  message.guild.members.cache.find(member => member.displayName.toLowerCase().includes(args.join(" ").toLowerCase())) || message.guild.members.cache.find(member => member.user.username.toLowerCase().includes(args.join(" ").toLowerCase())) ||
  message.guild.members.cache.find(member => member.user.tag.toLowerCase().includes(args.join(" ").toLowerCase()));
const missingArgsEmbed = new discord.MessageEmbed() // Creates the embed thats sent if the command isnt run right
        .setColor(`#000000`)
        .setTitle('Missing Arguments!')
        .setDescription('Usage: customrole [User] [RoleName]')
  if (!target|| !args.join(" ")) return message.channel.send(missingArgsEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})

let sayMessage = args.slice(1).join(" ").toLowerCase() || message.mentions.roles.first();
  const 𝘮𝘮m𝘶𝘯𝘪𝘵𝘺 = new discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`Sorry, you don't have permissions to use this command !`);
 if (!message.member.roles.cache.has(adminlevel[message.guild.id].lvl3) && !message.member.roles.cache.has(adminlevel[message.guild.id].lvl4) && !message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(𝘮𝘮m𝘶𝘯𝘪𝘵𝘺).catch(e =>  message.channel.send(e)).catch(O_o => {})
  

  if (!sayMessage) return message.channel.send(missingArgsEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})
const dazdzf = new discord.MessageEmbed() // Creates the embed thats sent if the command isnt run right
        .setColor(`#000000`)
        .setDescription(`${sayMessage} has been created and assigned to ${target.displayName}`)
message.guild.roles.create({data:{ name: sayMessage, position: 149}}).then(async(role) =>{
  target.roles.add(role);
})

  message.channel.send(dazdzf);
  return;
};
module.exports.config = {
  name: "customrole"
};
