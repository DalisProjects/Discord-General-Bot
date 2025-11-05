const Discord = require("discord.js");
let serverset = require("../../storage/serverset.json");


module.exports.run = async (bot, message, args) => {
let prefix = serverset[message.guild.id].prefix;
  let embed = new Discord.MessageEmbed()
    .setColor("#000000")
    .setTitle("Bot updates !")
    .setDescription(`\n- Added \`${prefix}monthly\` and \`${prefix}hourly\` commands
- Incomplete invites system (tracks invites for now \`${prefix}config\`)
- New command \`${prefix}pat\` - \`${prefix}feed\` - \`${prefix}poke\` - \`${prefix}tickle\`
- New command \`${prefix}dog\` - \`${prefix}cat\`
- Updated & improved 8ball command & NSFW command \`${prefix}bj\` gifs
- New NSFW commands \`${prefix}lesbian\` - \`${prefix}lewd\` - \`${prefix}hololewd\` - \`${prefix}boobs\` - \`${prefix}feet\` - \`${prefix}cum\`
- New command \`${prefix}fact\` - \`${prefix}why\` 
- New command \`${prefix}wallpaper\` - \`${prefix}animepfp\` - \`${prefix}waifu\`
- New command \`${prefix}randomnick\`
- Bug fixes\n`)
    .setFooter(`Requested by ${message.author.username}`)
    .setTimestamp()
 
      return message.channel.send(embed).catch(O_o => {})
      

};
module.exports.config = {
  name: "updates",
  aliases: ["botupdates"]
};


