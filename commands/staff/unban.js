const Discord = require("discord.js");
let serverset = require("../../storage/serverset.json");

let adminlevel = require("../../storage/adminlevel.json");

module.exports.run = async (bot, message, args) => {
  let botuser = message.guild.members.cache.get("723061621991276574");
  if(!botuser.hasPermission("ADMINISTRATOR") && !botuser.hasPermission("BAN_MEMBERS"))return message.member.send(`I don't have administrator nor ban permissions to run this command !`).catch(O_o => {}); 
  const 𝘮𝘮m𝘶𝘯𝘪𝘵𝘺 = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`Sorry, you don't have permissions to use this command !`);
 if (!message.member.roles.cache.has(adminlevel[message.guild.id].lvl4) && !message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(𝘮𝘮m𝘶𝘯𝘪𝘵𝘺).catch(e =>  message.channel.send(e)).catch(O_o => {})

  let idd = args.join(" ")
const missingArgsEmbed = new Discord.MessageEmbed() // Creates the embed thats sent if the command isnt run right
        .setColor(`#000000`)
        .setTitle('Missing Arguments!')
        .setDescription('Usage: unban [UserID]')
  if (!idd) return message.channel.send(missingArgsEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})

//let reason = args.slice(1).join(" ");
  

  let userID = args[0]
  if (!userID) reason = "No user ID provided";
  message.guild.fetchBans().then(bans=> {
  if(bans.size == 0) return message.channel.send("Nobody is banned from this server !").catch(e =>  message.channel.send(e)).catch(O_o => {})
  let bUser = bans.find(b => b.user.id == userID)
  if(!bUser) return message.channel.send("That user is not bannned from this server !").catch(e =>  message.channel.send(e)).catch(O_o => {})
  message.guild.members.unban(bUser.user)
  message.channel.send("User has been successfully unbanned").catch(e =>  message.channel.send(e)).catch(O_o => {})
  if(serverset[message.guild.id].stafflogschannel !== "None") {
    let logs = message.guild.channels.cache.get(serverset[message.guild.id].stafflogschannel);
    logs.send(`User ID **${userID}** has been unbanned by **${message.author.tag}**`).catch(O_o => {});
  }
})
/*const bans = await message.guild.fetchBans();
//if (!bans.has(reason)) return message.channel.send('This user is not banned in this server!')
 const member = bans.get(idd).user;
  // Now, time for a swift kick in the nuts!
await  member.guild.members.unban(idd);
 const lewdes = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`✔︎ | ${member.user.tag} has been unbanned by ${message.author.username} | ${reason}`);
    message.channel.send(lewdes).catch(e =>  message.channel.send(e)).catch(O_o => {})
    
    if(serverset[message.guild.id].stafflogschannel !== "None") {
  let logs = member.guild.channels.cache.get(serverset[message.guild.id].stafflogschannel);
  logs.send(`User **${member.user.tag}**: ID **${member.user.id}** has been unbanned by **${message.author.tag}** for **${reason}**`).catch(O_o => {});
}*/
};

module.exports.config = {
  name: "unban"
};
