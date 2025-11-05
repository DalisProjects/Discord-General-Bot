const Discord = require("discord.js");
let serverset = require("../../storage/serverset.json");
let adminlevel = require("../../storage/adminlevel.json");

module.exports.run = async (bot, message, args) => {
  let botuser = message.guild.members.cache.get("723061621991276574");
  if(!botuser.hasPermission("ADMINISTRATOR") && !botuser.hasPermission("MANAGE_MESSAGES"))return message.member.send(`I don't have administrator nor manage messages permissions to run this command !`).catch(O_o => {});  
  let deleteCount = args.join(" ").toLowerCase();
  let ratus = message.mentions.members.first();

  const 𝘮𝘮m𝘶𝘯𝘪𝘵𝘺 = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`Sorry, you don't have permissions to use this command !`);
   if (!message.member.roles.cache.has(adminlevel[message.guild.id].lvl1) & !message.member.roles.cache.has(adminlevel[message.guild.id].lvl2) && !message.member.roles.cache.has(adminlevel[message.guild.id].lvl3) && !message.member.roles.cache.has(adminlevel[message.guild.id].lvl4) && !message.member.hasPermission("ADMINISTRATOR") && !message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(𝘮𝘮m𝘶𝘯𝘪𝘵𝘺).catch(e =>  message.channel.send(e)).catch(O_o => {})

    if (ratus){
       setTimeout(() => {message.delete().catch(O_o => {});}, 500);
       let fetched = await message.channel.messages.fetch({ limit: 30 }).catch(O_o => {})
       let flushable = fetched.filter(m => m.id == ratus.user.id);
       await message.channel.bulkDelete(flushable).catch(O_o => {})
     return;
     };
     if (deleteCount == 'help'){
      const 𝘮𝘮m𝘶𝘯𝘪𝘵𝘺 = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setTitle(`Available options !`)
    .setDescription(`bots, text, images, links\n*If you don't mention any of these options the bot would purge all bot messages and used commands in chat !*`);
      await message.channel.send(𝘮𝘮m𝘶𝘯𝘪𝘵𝘺).catch(O_o => {})
    return;
    };
if (deleteCount == 'bots' || deleteCount == 'bot'){
  setTimeout(() => {message.delete().catch(O_o => {});}, 500);
  let fetched = await message.channel.messages.fetch({ limit: 30 }).catch(O_o => {})
  let flushable = fetched.filter(m => m.author.bot);
  await message.channel.bulkDelete(flushable).catch(O_o => {})
return;
};
if (deleteCount == 'text' || deleteCount == 'texts'){
  const ddm𝘶𝘯𝘪𝘵𝘺 = new Discord.MessageEmbed()
      .setColor(`#000000`)
      .setDescription("Sorry, this command cannot be used in the main channel !");
  if(message.channel.id === "705128836513136751")  return message.channel.send(ddm𝘶𝘯𝘪𝘵𝘺);
  const LinkRegex = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  const ImageRegex = /(?:([^:/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*\.(?:png|jpe?g|gifv?|webp|bmp|tiff|jfif))(?:\?([^#]*))?(?:#(.*))?/gi;
   setTimeout(() => { message.delete().catch(O_o => { }); }, 500);
  let attachments = await message.channel.messages.fetch(m =>[LinkRegex, ImageRegex].test(m.content))
    let fetched = await message.channel.messages.fetch({ limit: 30 }).catch(O_o => {})
    let urls = await fetched.filter(m => m.attachments.size < 1 &&  m.embeds.length < 1)
    await message.channel.bulkDelete(urls).catch(O_o => {})
    return;
  };
if (deleteCount == 'image' || deleteCount == 'images'){
const ddm𝘶𝘯𝘪𝘵𝘺 = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription("Sorry, this command cannot be used in selfiles channels !");
if(message.channel.id === "720074709558886460" || message.channel.id === "720074827561566289" || message.channel.id === "705128968147435611" )  return message.channel.send(ddm𝘶𝘯𝘪𝘵𝘺);
const ImageRegex = /(?:([^:/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*\.(?:png|jpe?g|gifv?|webp|bmp|tiff|jfif))(?:\?([^#]*))?(?:#(.*))?/gi;
 setTimeout(() => { message.delete().catch(O_o => { }); }, 500);
let attachments = await message.channel.messages.fetch(m => ImageRegex.test(m.content))
  let fetched = await message.channel.messages.fetch({ limit: 30 }).catch(O_o => {})
  let urls = await fetched.filter(m => m.attachments.size > 0)
  await message.channel.bulkDelete(urls).catch(O_o => {})
  return;
};
if (deleteCount == 'link' || deleteCount == 'links'){
const LinkRegex = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
 setTimeout(() => { message.delete().catch(O_o => { }); }, 500);
  let fetched = await message.channel.messages.fetch({ limit: 30 }).catch(O_o => {})
  let flushable = fetched.filter(m => LinkRegex.test(m.content));
  await message.channel.bulkDelete(flushable).catch(O_o => {})
  return;
};
const ddm𝘶𝘯𝘪𝘵𝘺 = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription("Sorry, this command cannot be used in this channel !");
if(message.channel.id === "705128875058790420"  || message.channel.id === "722693060856905789")  return message.channel.send(ddm𝘶𝘯𝘪𝘵𝘺);

 if (!deleteCount || isNaN(deleteCount)) deleteCount = 30;
  setTimeout(() => { message.delete().catch(O_o => { }); }, 500);
  let fetched = await message.channel.messages.fetch({ limit: deleteCount });
  let flushable = fetched.filter(m => m.author.bot);
  let flushable1 = fetched.filter(m => m.content.startsWith("-"));
  let flushable2 = fetched.filter(m => m.content.startsWith("/"));
  let flushable4 = fetched.filter(m => m.content.startsWith("+"));
  let flushable6 = fetched.filter(m => m.content.startsWith(serverset[message.guild.id].prefix));
  let flushable7 = fetched.filter(m => m.content.toLowerCase().startsWith("yui"));
  let flushable8 = fetched.filter(m => m.content.startsWith("!"));
  let flushable10 = fetched.filter(m => m.content.toLowerCase().startsWith("y!"));
  let flushable11 = fetched.filter(m => m.content.toLowerCase().startsWith("owo "));
  let flushable12 = fetched.filter(m => m.content.startsWith("?"));
  let flushable14 = fetched.filter(m => m.content.toLowerCase().startsWith("pls ")); 
  let flushable16 = fetched.filter(m => m.content.toLowerCase().startsWith("m!"));

  await message.channel.bulkDelete(flushable).catch(O_o => {})
  await message.channel.bulkDelete(flushable1).catch(O_o => {})
  await message.channel.bulkDelete(flushable2).catch(O_o => {})
  await message.channel.bulkDelete(flushable4).catch(O_o => {})
  await message.channel.bulkDelete(flushable6).catch(O_o => {})
  await message.channel.bulkDelete(flushable7).catch(O_o => {})
  await message.channel.bulkDelete(flushable8).catch(O_o => {})
  await message.channel.bulkDelete(flushable10).catch(O_o => {})
  await message.channel.bulkDelete(flushable11).catch(O_o => {})
  await message.channel.bulkDelete(flushable12).catch(O_o => {})
 await message.channel.bulkDelete(flushable14).catch(O_o => {})
 await message.channel.bulkDelete(flushable16).catch(O_o => {})

};

module.exports.config = {
  name: "purge",
  aliases: ["prune"]
};
