const discord = require("discord.js");
let adminlevel = require("../../storage/adminlevel.json");
let serverset = require("../../storage/serverset.json");

module.exports.run = async (bot, message, args) => {


  let botuser = message.guild.members.cache.get("723061621991276574");
  if(!botuser.hasPermission("ADMINISTRATOR") && !botuser.hasPermission("MANAGE_CHANNELS"))return message.member.send(`I don't have administrator nor manage channels permissions to run this command !`).catch(O_o => {}); 
  let everyone = message.guild.roles.cache.find(r => r.name === "@everyone");
  const 𝘮𝘮m𝘶𝘯𝘪𝘵𝘺 = new discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`Sorry, you don't have permissions to use this command !`);
 if (!message.member.roles.cache.has(adminlevel[message.guild.id].lvl4) && !message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(𝘮𝘮m𝘶𝘯𝘪𝘵𝘺).catch(e =>  message.channel.send(e)).catch(O_o => {})
    let incorr = new discord.MessageEmbed()
    .setColor("#000000")
    .setTitle("Incorrect Usage!")
    .setDescription("\n.lockall on to turn on\n.lockall off to turn off");

  if (!args[0]) return message.channel.send(incorr).catch(e =>  message.channel.send(e)).catch(O_o => {})
    if (message.guild.id === "660822589077323786"){// return message.channel.send("This command cannot be used in this server");
let main = message.guild.channels.cache.find(ch => ch.name === "・𝘭𝘰𝘶𝘯𝘨𝘦");
let bots = message.guild.channels.cache.find(ch => ch.name === "・𝘣𝘰𝘵𝘴");
let images = message.guild.channels.cache.find(ch => ch.name === "・𝘪𝘮𝘢𝘨𝘦𝘴");
let ships = message.guild.channels.cache.find(ch => ch.name === "・𝘴𝘩𝘪𝘱𝘴");
let userphone = message.guild.channels.cache.find(ch => ch.name === "・𝘶𝘴𝘦𝘳𝘱𝘩𝘰𝘯𝘦");
let selfies = message.guild.channels.cache.find(ch => ch.name === "・𝘴𝘦𝘭𝘧𝘪𝘦𝘴");
let birthdays = message.guild.channels.cache.find(ch => ch.name === "・𝘣𝘪𝘳𝘵𝘩𝘥𝘢𝘺𝘴");
let nsfw = message.guild.channels.cache.find(ch => ch.name === "・𝘯𝘴𝘧𝘸");
let pokemon = message.guild.channels.cache.find(ch => ch.name === "・𝘱𝘰𝘬𝘦𝘮𝘰𝘯");
let nomicusers = message.guild.channels.cache.find(ch => ch.name === "・𝘢𝘶𝘹");

  if (args[0] === "on") {
    await main.createOverwrite(everyone, { SEND_MESSAGES: false, READ_MESSAGES: false });
      await bots.createOverwrite(everyone, { SEND_MESSAGES: false, READ_MESSAGES: false });
      await images.createOverwrite(everyone, { SEND_MESSAGES: false, READ_MESSAGES: false });
      await selfies.createOverwrite(everyone, { SEND_MESSAGES: false, READ_MESSAGES: false });
      await ships.createOverwrite(everyone, { SEND_MESSAGES: false, READ_MESSAGES: false });
      await userphone.createOverwrite(everyone, { SEND_MESSAGES: false, READ_MESSAGES: false });
      await birthdays.createOverwrite(everyone, { SEND_MESSAGES: false, READ_MESSAGES: false });
      await nsfw.createOverwrite(everyone, { SEND_MESSAGES: false, READ_MESSAGES: false });
      await pokemon.createOverwrite(everyone, { SEND_MESSAGES: false, READ_MESSAGES: false });
     await nomicusers.createOverwrite(everyone, { SEND_MESSAGES: false, READ_MESSAGES: false });
     if(serverset[message.guild.id].stafflogschannel !== "None") {
      let logs = message.guild.channels.cache.get(serverset[message.guild.id].stafflogschannel);
       const lewddemddbedm = new discord.MessageEmbed()
         .setColor(`#ff0000`)
         .setAuthor(" |  admin action", message.author.displayAvatarURL())
         .setDescription(`all channels has been locked by ${message.author.tag}`);
         if(logs)logs.send(lewddemddbedm).catch(O_o => {});
     }

    message.channel.send(`All channels have been successfully locked ! <@${message.author.id}>`);
  }
  if (args[0] === "off") {
    await main.createOverwrite(everyone, { SEND_MESSAGES: null, READ_MESSAGES: false });
    await bots.createOverwrite(everyone, { SEND_MESSAGES: null, READ_MESSAGES: false });
    await images.createOverwrite(everyone, { SEND_MESSAGES: null, READ_MESSAGES: false });
    await selfies.createOverwrite(everyone, { SEND_MESSAGES: null, READ_MESSAGES: false });
    await ships.createOverwrite(everyone, { SEND_MESSAGES: null, READ_MESSAGES: false });
    await userphone.createOverwrite(everyone, { SEND_MESSAGES: null, READ_MESSAGES: false });
    await birthdays.createOverwrite(everyone, { SEND_MESSAGES: null, READ_MESSAGES: false });
     await nomicusers.createOverwrite(everyone, { SEND_MESSAGES: null, READ_MESSAGES: false });
    message.channel.send(`All channels have been successfully unlocked ! <@${message.author.id}>`);
    if(serverset[message.guild.id].stafflogschannel !== "None") {
      let logs = message.guild.channels.cache.get(serverset[message.guild.id].stafflogschannel);
       const lewddemddbedm = new discord.MessageEmbed()
         .setColor(`#ff0000`)
         .setAuthor(" |  admin action", message.author.displayAvatarURL())
         .setDescription(`all channels has been unlocked by ${message.author.tag}`);
         if(logs)logs.send(lewddemddbedm).catch(O_o => {});
     }
  }
}
else{
  if (args[0] === "on") {
    message.guild.channels.cache.forEach(channel => {
      channel.createOverwrite(everyone, {
        SEND_MESSAGES: false,
       // READ_MESSAGES: false
      });
    });
    message.channel.send(`Lockdown initiated! <@${message.author.id}>`);
    if(serverset[message.guild.id].stafflogschannel !== "None") {
      let logs = message.guild.channels.cache.get(serverset[message.guild.id].stafflogschannel);
       const lewddemddbedm = new discord.MessageEmbed()
         .setColor(`#ff0000`)
         .setAuthor(" |  admin action", message.author.displayAvatarURL())
         .setDescription(`all channels has been locked by ${message.author.tag}`);
         if(logs)logs.send(lewddemddbedm).catch(O_o => {});
     }
  }
  if (args[0] === "off") {
    message.guild.channels.cache.forEach(channel => {
      channel.createOverwrite(everyone, {
        SEND_MESSAGES: null
    //    READ_MESSAGES: true
      });
    });
    message.channel.send(`Lockdown terminated! <@${message.author.id}>`);
    if(serverset[message.guild.id].stafflogschannel !== "None") {
      let logs = message.guild.channels.cache.get(serverset[message.guild.id].stafflogschannel);
       const lewddemddbedm = new discord.MessageEmbed()
         .setColor(`#ff0000`)
         .setAuthor(" |  admin action", message.author.displayAvatarURL())
         .setDescription(`all channels has been unlocked by ${message.author.tag}`);
         if(logs)logs.send(lewddemddbedm).catch(O_o => {});
     }
  }
}
};
module.exports.config = {
  name: "lockall"
};



