let discord = require("discord.js");

let adminlevel = require("../../storage/adminlevel.json");

module.exports.run = async (bot, message, args) => {
  //if (message.guild.id !== 691301384133410867"") return message.channel.send("This command cannot be used in this server");
  let person =
    message.mentions.members.first() || message.guild.members.cache.get(args[0]) ||
  message.guild.members.cache.find(member => member.displayName.toLowerCase().includes(args.join(" ").toLowerCase())) || message.guild.members.cache.find(member => member.user.username.toLowerCase().includes(args.join(" ").toLowerCase())) ||
  message.guild.members.cache.find(member => member.user.tag.toLowerCase().includes(args.join(" ").toLowerCase()));
  let rainbow = message.guild.roles.cache.find(r => r.name === "(光) ━━・𝘗𝘐𝘊 𝘗𝘌𝘙𝘔𝘚");
  if (!rainbow)return
let richkid = message.guild.roles.cache.find(r => r.name === "$𝑅𝑖𝑐ℎ 𝑘𝑖𝑑");
let vcbypass = message.guild.roles.cache.find(r => r.name === "(光) ━━・𝘝𝘊 𝘉𝘠𝘗𝘈𝘚𝘚");
//let nitro = message.guild.roles.cache.get("");
  const 𝘮𝘮m𝘶𝘯𝘪𝘵𝘺 = new discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`Sorry, you don't have permissions to use this command !`);
 if (!message.member.roles.cache.has(adminlevel[message.guild.id].lvl2) && !message.member.roles.cache.has(adminlevel[message.guild.id].lvl3) && !message.member.roles.cache.has(adminlevel[message.guild.id].lvl4) && !message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(𝘮𝘮m𝘶𝘯𝘪𝘵𝘺).catch(e =>  message.channel.send(e)).catch(O_o => {})
const missingArgsEmbed = new discord.MessageEmbed() // Creates the embed thats sent if the command isnt run right
        .setColor(`#000000`)
        .setTitle('Missing Arguments!')
        .setDescription('Usage: booster [User]')
  if(!person || !args.join(" ")) return message.channel.send(missingArgsEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})

const lewddddes = new discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`Sorry but this specified member is not a nitro booster therefore they cannot have any of these roles !`);
//if (!person.roles.cache.has(nitro.id))return message.channel.send(lewddddes).catch(e =>  message.channel.send(e)).catch(O_o => {})
  


  await person.roles.add(rainbow.id).catch(e =>  message.channel.send(e)).catch(O_o => {})
await person.roles.add(richkid.id);
await person.roles.add(vcbypass.id);
  const lewdembedm = new discord.MessageEmbed()
    .setColor(`#000000`)
.setDescription(`✔︎ | **${person.user.tag}** has been given Pic/Link perms !\n✔︎ | **${person.user.tag}** has been **$𝑅𝑖𝑐ℎ 𝑘𝑖𝑑** role !\n✔︎ | **${person.user.tag}** has been **𝘝𝘊 𝘉𝘺𝘱𝘢𝘴𝘴🎤** perms !`)
.setFooter(`By admin ${message.author.tag}`);
  setTimeout(() => {message.delete().catch(O_o => {});}, 200);
  return message.channel.send(lewdembedm).catch(e =>  message.channel.send(e)).catch(O_o => {})
  
};
module.exports.config = {
  name: "booster"
};
