const Discord = require("discord.js");


let adminlevel = require("../../storage/adminlevel.json");

module.exports.run = async (bot, message, args) => {
  let botuser = message.guild.members.cache.get("723061621991276574");
  if(!botuser.hasPermission("ADMINISTRATOR") && !botuser.hasPermission("MANAGE_NICKNAMES"))return message.member.send(`I don't have administrator nor manage nicknames permissions to run this command !`).catch(O_o => {});  
  const 𝘮𝘮m𝘶𝘯𝘪𝘵𝘺 = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`Sorry, you don't have permissions to use this command !`);
  if (!message.member.roles.cache.has(adminlevel[message.guild.id].lvl1) & !message.member.roles.cache.has(adminlevel[message.guild.id].lvl2) && !message.member.roles.cache.has(adminlevel[message.guild.id].lvl3) && !message.member.roles.cache.has(adminlevel[message.guild.id].lvl4) && !message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(𝘮𝘮m𝘶𝘯𝘪𝘵𝘺).catch(e =>  message.channel.send(e)).catch(O_o => {})

  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) ||
  message.guild.members.cache.find(member => member.displayName.toLowerCase().includes(args.join(" ").toLowerCase())) || message.guild.members.cache.find(member => member.user.username.toLowerCase().includes(args.join(" ").toLowerCase())) ||
  message.guild.members.cache.find(member => member.user.tag.toLowerCase().includes(args.join(" ").toLowerCase()));
  const missingArgsEmbed = new Discord.MessageEmbed() // Creates the embed thats sent if the command isnt run right
        .setColor(`#000000`)
        .setTitle('Missing Arguments!')
        .setDescription('Usage: nickname [User] [Nickname]')

  if (!member || !args.join(" ")) return message.channel.send(missingArgsEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})
  let reason = args.slice(1).join(" ");
  if (!reason) return message.channel.send(missingArgsEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})

  const lewddddes = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(
      `❎ | You can't change **${member.user.username}**'s nickname !`
    );
  if (member.roles.highest.position >
    message.member.roles.highest.position
  )
    return message.channel.send(lewddddes).catch(e =>  message.channel.send(e)).catch(O_o => {})
  if (!member.bannable) return message.channel.send(lewddddes).catch(e =>  message.channel.send(e)).catch(O_o => {})
  await member
    .setNickname(reason)
    .catch(error =>
      message.channel.send(`Sorry I couldn't make changes due to : ${error}`)
      
    );
  const lewdddes = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(
      `✔︎ | **${member.user.username}**'s name has been changed to **${reason}** !`
    );
  await message.channel.send(lewdddes).catch(e =>  message.channel.send(e)).catch(O_o => {})
};

module.exports.config = {
  name: "nickname",
  aliases: ["setnick"]
};
