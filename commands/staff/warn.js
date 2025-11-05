let serverset = require("../../storage/serverset.json");
let adminlevel = require("../../storage/adminlevel.json");
const Discord = require("discord.js")
exports.run = (client, message, args) => {
  const 𝘮𝘮m𝘶𝘯𝘪𝘵𝘺 = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`Sorry, you don't have permissions to use this command !`);
  if (!message.member.roles.cache.has(adminlevel[message.guild.id].lvl1) && !message.member.roles.cache.has(adminlevel[message.guild.id].lvl2) && !message.member.roles.cache.has(adminlevel[message.guild.id].lvl3) && !message.member.roles.cache.has(adminlevel[message.guild.id].lvl4) && !message.member.hasPermission("ADMINISTRATOR"))
 
    return message.channel.send(𝘮𝘮m𝘶𝘯𝘪𝘵𝘺).catch(e =>  message.channel.send(e)).catch(O_o => {})

  let mentioned =
    message.mentions.members.first() || message.guild.members.cache.get(args[0]) ||
  message.guild.members.cache.find(member => member.displayName.toLowerCase().includes(args.join(" ").toLowerCase())) || message.guild.members.cache.find(member => member.user.username.toLowerCase().includes(args.join(" ").toLowerCase())) ||
  message.guild.members.cache.find(member => member.user.tag.toLowerCase().includes(args.join(" ").toLowerCase()));

  const missingArgsEmbed = new Discord.MessageEmbed() // Creates the embed thats sent if the command isnt run right
    .setColor("#000000")
    .setTitle("Missing Arguments!")
    .setDescription("Usage: warn [User] [Reason]");
  if(!mentioned) return message.channel.send(missingArgsEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})

const missingAfrgsEmbed = new Discord.MessageEmbed() // Creates the embed thats sent if the command isnt run right
    .setColor("#000000")
    .setTitle("Missing Arguments!")
    .setDescription("Usage: warn [User] [Reason]")
  // Triggers if the user donsn't tag a user in the message
  let reason = args.slice(1).join(" "); // .slice(1) removes the user mention, .join(' ') joins all the words in the message, instead of just sending 1 word
  if (!reason) return message.channel.send(missingAfrgsEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {}) // Triggers if the user dosn't provide a reason for the warning
  
  if(serverset[message.guild.id].stafflogschannel !== "None") {
  let logs = mentioned.guild.channels.cache.get(serverset[message.guild.id].stafflogschannel);
  const lewddemddbedm = new Discord.MessageEmbed()
    .setColor(`#ff0000`)
    .setAuthor(" |  admin action", message.author.displayAvatarURL())
    .setDescription(
      `User <@${mentioned.user.id}> **(${mentioned.user.tag})**'s has been warned by **${message.author.tag}** for **${reason}**`
    )
    .setTimestamp(new Date())
    .setFooter(`${mentioned.user.id}`);
    if(logs)logs.send(lewddemddbedm).catch(O_o => {});
}
const warningdmEmbed = new Discord.MessageEmbed() // Creates the embed that's DM'ed to the user when their warned!
    .setColor("#000000")
    .setThumbnail(mentioned.user.avatarURL())
    .setTitle(`You have been warned in ${message.guild.name}`)
    .addField("Reason", `${reason}\nChat: <#705128836513136751> `)
    .setFooter(`Read rules please to not get muted the next time.`);

  const warningEmbed = new Discord.MessageEmbed() // Creates the embed that's DM'ed to the user when their warned!
    .setColor("#000000")
    .setThumbnail(mentioned.user.avatarURL())
    .setTitle(`${mentioned.user.tag} has been been warned !`)
    .addField("Reason", reason);
  message.channel.send(warningEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {}) // DMs the user the above embed!
mentioned.send(warningdmEmbed).catch(O_o => {})
  setTimeout(() => {message.delete().catch(O_o => {});}, 500);
};

module.exports.config = {
  name: "warn"
};
