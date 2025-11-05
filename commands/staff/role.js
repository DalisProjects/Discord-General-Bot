const Discord = require("discord.js");


var reason;
let adminlevel = require("../../storage/adminlevel.json");

module.exports.run = async (bot, message, args) => {
const 𝘮𝘮m𝘶𝘯𝘪𝘵𝘺 = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`Sorry, you don't have permissions to use this command !`);
    let botuser = message.guild.members.cache.get("723061621991276574");
  if(!botuser.hasPermission("ADMINISTRATOR") && !botuser.hasPermission("MANAGE_ROLES"))return message.member.send(`I don't have administrator nor manage roles permissions to run this command !`).catch(O_o => {});  
 if (!message.member.roles.cache.has(adminlevel[message.guild.id].lvl3) && !message.member.hasPermission("MANAGE_ROLES") && !message.member.roles.cache.has(adminlevel[message.guild.id].lvl4) && !message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(𝘮𝘮m𝘶𝘯𝘪𝘵𝘺).catch(e =>  message.channel.send(e)).catch(O_o => {})

let target = message.mentions.members.first() || message.guild.members.cache.get(args[0]) ||
  message.guild.members.cache.find(member => member.displayName.toLowerCase().includes(args.join(" ").toLowerCase())) || message.guild.members.cache.find(member => member.user.username.toLowerCase().includes(args.join(" ").toLowerCase())) ||
  message.guild.members.cache.find(member => member.user.tag.toLowerCase().includes(args.join(" ").toLowerCase()));
const missingArgsEmbed = new Discord.MessageEmbed() // Creates the embed thats sent if the command isnt run right
        .setColor(`#000000`)
        .setTitle('Missing Arguments!')
        .setDescription('Usage: role [User] [RoleName]')
  if (!target|| !args[0]) return message.channel.send(missingArgsEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})
const lewddddes = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`❎ | You can't change **${target.displayName}**'s roles !`);
  


reason = args.slice(1).join(" ").toLowerCase();
  if (!reason ||  !args[1]) return message.channel.send(missingArgsEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})
  if (message.guild.id === "660822589077323786"){
  if (reason === "vc mod") reason = "𝘝𝘊 𝘔𝘖𝘋🎙️";
  if (reason === "double booster") reason = "✯ 𝘋𝘰𝘶𝘣𝘭𝘦 𝘉𝘰𝘰𝘴𝘵𝘦𝘳";
  if (reason === "dj role") reason = "(光) ━━・𝘋𝘑 𝘙𝘖𝘓𝘌";
  if (reason === "djrole") reason = "(光) ━━・𝘋𝘑 𝘙𝘖𝘓𝘌";
  if (reason === "vc bypass") reason = "(光) ━━・𝘝𝘊 𝘉𝘠𝘗𝘈𝘚𝘚";
  if (reason === "vcbypass") reason = "(光) ━━・𝘝𝘊 𝘉𝘠𝘗𝘈𝘚𝘚";
  if (reason === "events manager") reason = "𝘌𝘷𝘦𝘯𝘵𝘴 𝘔𝘢𝘯𝘢𝘨𝘦𝘳";
  if (reason === "emojis manager") reason = "𝘌𝘮𝘰𝘫𝘪𝘴 𝘮𝘢𝘯𝘢𝘨𝘦𝘳";
  if (reason === "trainee mod") reason = "𝘛𝘳𝘢𝘪𝘯𝘦𝘦 𝘔𝘖𝘋"; 
  if (reason === "community mod") reason = "𝘊𝘰𝘮𝘮𝘶𝘯𝘪𝘵𝘺 𝘔𝘰𝘥"; 
  if (reason === "valid eboy") reason = "𝘝𝘢𝘭𝘪𝘥 𝘌-𝘉𝘰𝘺";
  if (reason === "valid egirl") reason = "𝘝𝘢𝘭𝘪𝘥 𝘌-𝘎𝘪𝘳𝘭";
  if (reason === "member") reason = "𝘔𝘦𝘮𝘣𝘦𝘳";
}
  let rainbow = message.guild.roles.cache.find(r => r.name.toLowerCase().includes(reason.toLowerCase())) || message.mentions.roles.first() || message.guild.roles.cache.get(args[1]);
if (!rainbow) return message.channel.send(missingArgsEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})
  if(reason === "𝘚𝘵𝘢𝘧𝘧") return message.channel.send("This role can only be given manually ! take this L");
  if (rainbow.position >= message.member.roles.highest.position)
    return message.channel.send(lewddddes).catch(e =>  message.channel.send(e)).catch(O_o => {})

  if (target.roles.cache.has(rainbow.id)) {
await target.roles.remove(rainbow.id).catch(e =>  message.channel.send(e)).catch(O_o => {})
  const lewdembedm = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`✔︎ **${message.author.username}** has removed **${target.displayName}**'s role **${rainbow.name}**!`);
    return message.channel.send(lewdembedm).catch(e =>  message.channel.send(e)).catch(O_o => {})
    return;
   }

await target.roles.add(rainbow.id).catch(e =>  message.channel.send(e)).catch(O_o => {})

  const lewdembedm = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`✔︎ | **${target.displayName}** has been given the role **${rainbow.name}**!`);
    return message.channel.send(lewdembedm).catch(e =>  message.channel.send(e)).catch(O_o => {})

};

module.exports.config = {
  name: "role"
};
