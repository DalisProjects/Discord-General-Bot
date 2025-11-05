const Discord = require("discord.js");
let serverset = require("../../storage/serverset.json");

module.exports.run = async (bot, message, args) => {
var nsfwsection;
  if (!message.channel.nsfw){
    nsfwsection = `*15 commands can only be viewed in NSFW channels*`
  }
  if (message.channel.nsfw){
    nsfwsection = `\`fuck - bj - hentai - lesbian - porn - ass - boobs - feet - cum - thigh - 4k - pussy - anal - lewd - hololewd\``
  }
  let membedrEmbed = new Discord.MessageEmbed()
    .setColor("#f76ff1")
    .setTimestamp()
    .setThumbnail("https://i.imgur.com/GihXAVA.gif?size=128")
    .setTitle("Command List")
    .setFooter(`Requested by ${message.author.username}`)
    .setAuthor("Nirvana", `https://i.imgur.com/GihXAVA.gif?size=128`)
    .setDescription(
      `These are all the commands the bot has to offer !\nServer Prefix: \`${serverset[message.guild.id].prefix}\``)
    .addField(`General Commands`,"\`av(atar) - myprefix - image - profile - rep - afk - bio - help - mynick - confess - calculate - snipe(1-2) - esnipe - roblox - robloxavatar - serverinfo  - say - info - poll - ping - verify - join - weather - urban - botstats - membercount - invite - ahelp\`")
    .addField(`Fun Commands`,"\` animepfp - dog - cat - match - 8ball - fact - why - randomnick - howgay - howsimp - howthicc - pp - height - weight - rate - feed - pat - lick - tickle - poke - hug - kiss - spank - waifu - yomomma - unfunny - secretban\`")
    .addField(`Currency`,"\`marry - divorce - spouse - ship - shipname - work - bal - inventory - weekly - daily - pay - gamble - fish - rob - shop - buy - daily - weed\`")//[Premium commands](https://discord.gg/nirvana) :
    .addField(`NSFW`, nsfwsection)
    .addField(`Information`,"\n [Support server](https://discord.gg/cNpRJ23MSQ) | [Bot Invite Link](https://discord.com/api/oauth2/authorize?client_id=723061621991276574&permissions=8&scope=bot)");// | [Vote for me please](https://top.gg/bot/723061621991276574)");
  message.channel.send(membedrEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})
}


module.exports.config = {
  name: "help",
  aliases: ["commands", "cmds"]
};

