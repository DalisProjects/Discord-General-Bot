let discord = require("discord.js");
let adminlevel = require("../../storage/adminlevel.json");

module.exports.run = async (bot, message, args) => {
  let person =
    message.mentions.members.first() || message.guild.members.cache.get(args[0]) ||
  message.guild.members.cache.find(member => member.displayName.toLowerCase().includes(args.join(" ").toLowerCase())) || message.guild.members.cache.find(member => member.user.username.toLowerCase().includes(args.join(" ").toLowerCase())) ||
  message.guild.members.cache.find(member => member.user.tag.toLowerCase().includes(args.join(" ").toLowerCase()));
  let rainbow = message.guild.roles.cache.find(r => r.name === "Partner Manager");
  const 𝘮𝘮m𝘶𝘯𝘪𝘵𝘺 = new discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`Sorry, you don't have permissions to use this command !`);
    if (!message.member.roles.cache.has(adminlevel[message.guild.id].lvl2) && !message.member.roles.cache.has(adminlevel[message.guild.id].lvl3) && !message.member.roles.cache.has(adminlevel[message.guild.id].lvl4) && !message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(𝘮𝘮m𝘶𝘯𝘪𝘵𝘺).catch(e =>  message.channel.send(e)).catch(O_o => {})
const missingArgsEmbed = new discord.MessageEmbed() // Creates the embed thats sent if the command isnt run right
        .setColor(`#000000`)
        .setTitle('Missing Arguments!')
        .setDescription('Usage: hirepm [User]')
  if(!rainbow)return message.channel.send("There's no role called 'Partner manager' found in this server");
  if(!person || !args.join(" ")) return message.channel.send(missingArgsEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})

  
  if (person.roles.cache.has(rainbow.id)) {
    await person.roles.remove(rainbow.id).catch(e =>  message.channel.send(e)).catch(O_o => {})

    const lewdembedm = new discord.MessageEmbed()
      .setColor(`#000000`)
      .setDescription(`✔︎ | **${message.author.username}** has removed **${person.displayName}**'s Partner Manager role!`);
    return message.channel.send(lewdembedm).catch(e =>  message.channel.send(e)).catch(O_o => {})
    //  member.roles.add(rainbow.id).catch(e =>  message.channel.send(e)).catch(O_o => {})
    return;
  }

  await person.roles.add(rainbow.id).catch(e =>  message.channel.send(e)).catch(O_o => {})
  const lewdembedm = new discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(
      `✔︎ | **${person.displayName}** has been hired as a **Partner Manager** by ${message.author.username}`
    );
  setTimeout(() => {message.delete().catch(O_o => {});}, 200);
  return message.channel.send(lewdembedm).catch(e =>  message.channel.send(e)).catch(O_o => {})
  
};
module.exports.config = {
  name: "hirepm"
};
