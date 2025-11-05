

let discord = require("discord.js");
let adminlevel = require("../../storage/adminlevel.json");

module.exports.run = async (bot, message, args) => {
  let botuser = message.guild.members.cache.get("723061621991276574");
  if(!botuser.hasPermission("ADMINISTRATOR") && !botuser.hasPermission("MANAGE_ROLES"))return message.member.send(`I don't have administrator nor manage roles permissions to run this command !`).catch(O_o => {});  
  const 𝘮𝘮m𝘶𝘯𝘪𝘵𝘺 = new discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`Sorry, you don't have permissions to use this command !`);
 if (!message.member.roles.cache.has(adminlevel[message.guild.id].lvl2) && !message.member.roles.cache.has(adminlevel[message.guild.id].lvl3) && !message.member.roles.cache.has(adminlevel[message.guild.id].lvl4) && !message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(𝘮𝘮m𝘶𝘯𝘪𝘵𝘺).catch(e =>  message.channel.send(e)).catch(O_o => {})
    const missingArgsEmbed = new discord.MessageEmbed() // Creates the embed thats sent if the command isnt run right
    .setColor(`#000000`)
    .setTitle('Missing Arguments!')
    .setDescription(`Usage: mentionable [Role]`);
 
    
    let reason = args.join(" ").toLowerCase();
    if (!reason) return message.channel.send(missingArgsEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})
    let rainbow = message.guild.roles.cache.find(r => r.name.toLowerCase().includes(args.join(" ").toLowerCase())) || message.mentions.roles.first() || message.guild.roles.cache.get(args[0]);
    if (!rainbow) return message.channel.send(missingArgsEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})

   

const erferfaaa = new discord.MessageEmbed() // Creates the embed thats sent if the command isnt run right
        .setColor(`#000000`)
        .setDescription(`You have successfully made **${rainbow.name}** role unmentionable`);

const dddddddd = new discord.MessageEmbed() // Creates the embed thats sent if the command isnt run right
        .setColor(`#000000`)
        .setDescription(`You have successfully made **${rainbow.name}** role mentionable`);


  if (rainbow.mentionable == true) {
    rainbow.edit({
            mentionable: false
          }).catch(e =>  message.channel.send("Error ! i don't have permission to modify this role")).catch(O_o => {})
    message.channel.send(erferfaaa).catch(e =>  message.channel.send(e)).catch(O_o => {})
  return;
};
if (rainbow.mentionable == false) {
  rainbow.edit({
            mentionable: true
          }).catch(e =>  message.channel.send("Error ! i don't have permission to modify this role")).catch(O_o => {})
  message.channel.send(dddddddd).catch(e =>  message.channel.send(e)).catch(O_o => {})
  return;
};
};
module.exports.config = {
  name: "mentionable"
};
