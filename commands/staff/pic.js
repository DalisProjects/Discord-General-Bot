let discord = require("discord.js");
let serverset = require("../../storage/serverset.json");
let adminlevel = require("../../storage/adminlevel.json");

module.exports.run = async (bot, message, args) => {
 // if (message.guild.id !== "691301384133410867") return message.channel.send("This command cannot be used in this server");
  let person =
    message.mentions.members.first() || message.guild.members.cache.get(args[0]) ||
  message.guild.members.cache.find(member => member.displayName.toLowerCase().includes(args.join(" ").toLowerCase())) || message.guild.members.cache.find(member => member.user.username.toLowerCase().includes(args.join(" ").toLowerCase())) ||
  message.guild.members.cache.find(member => member.user.tag.toLowerCase().includes(args.join(" ").toLowerCase()));
  let rainbow = message.guild.roles.cache.find(r => r.name === "(光) ━━・𝘗𝘐𝘊 𝘗𝘌𝘙𝘔𝘚");
  if (!rainbow)return
  const 𝘮𝘮m𝘶𝘯𝘪𝘵𝘺 = new discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`Sorry, you don't have permissions to use this command !`);
 if (!message.member.roles.cache.has(adminlevel[message.guild.id].lvl2) && !message.member.roles.cache.has(adminlevel[message.guild.id].lvl3) && !message.member.roles.cache.has(adminlevel[message.guild.id].lvl4) && !message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(𝘮𝘮m𝘶𝘯𝘪𝘵𝘺).catch(e =>  message.channel.send(e)).catch(O_o => {})
const missingArgsEmbed = new discord.MessageEmbed() // Creates the embed thats sent if the command isnt run right
        .setColor(`#000000`)
        .setTitle('Missing Arguments!')
        .setDescription('Usage: pic [User]')
  if(!person || !args.join(" ")) return message.channel.send(missingArgsEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})

  
  if (person.roles.cache.has(rainbow.id)) {
    await person.roles.remove(rainbow.id).catch(e =>  message.channel.send(e)).catch(O_o => {})
    
    if(serverset[message.guild.id].stafflogschannel !== "None") {
  let logs = message.guild.channels.cache.get(serverset[message.guild.id].stafflogschannel);
  const lewddemddbedm = new discord.MessageEmbed()
    .setColor(`#000000`)
    .setAuthor(" |  admin action", message.author.displayAvatarURL())
    .setDescription(`User **${person.user.tag}**'s pic/link perms has been removed by **${message.author.username}** `);
  logs.send(lewddemddbedm).catch(O_o => {});
}
    const lewdembedm = new discord.MessageEmbed()
      .setColor(`#000000`)
      .setDescription(`✔︎ | **${message.author.username}** has removed **${person.displayName}**'s pic/link perms !`);
    return message.channel.send(lewdembedm).catch(e =>  message.channel.send(e)).catch(O_o => {})
  }

  await person.roles.add(rainbow.id).catch(e =>  message.channel.send(e)).catch(O_o => {})
  
  if(serverset[message.guild.id].stafflogschannel !== "None") {
let logs = message.guild.channels.cache.get(serverset[message.guild.id].stafflogschannel);
  const lewdemddbedm = new discord.MessageEmbed()
    .setColor(`#000000`)
      .setAuthor(" |  admin action", message.author.displayAvatarURL())
    .setDescription(`User **${person.user.tag}** has been given pic/link perms by **${message.author.tag}** `);
  logs.send(lewdemddbedm).catch(O_o => {});
}
  const lewdembedm = new discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(
      `✔︎ | **${person.displayName}** has been given their pic/link perms !`
    );
  setTimeout(() => {message.delete().catch(O_o => {});}, 200);
  return message.channel.send(lewdembedm).catch(e =>  message.channel.send(e)).catch(O_o => {})
  
};
module.exports.config = {
  name: "pic"
};
