

         
const Discord = require("discord.js");

let adminlevel = require("../../storage/adminlevel.json");

module.exports.run = async (bot, message, args) => {
const 𝘮𝘮m𝘶𝘯𝘪𝘵𝘺 = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`Sorry, you don't have permissions to use this command !`);
 if (!message.member.roles.cache.has(adminlevel[message.guild.id].lvl1) & !message.member.roles.cache.has(adminlevel[message.guild.id].lvl2) && !message.member.roles.cache.has(adminlevel[message.guild.id].lvl3) && !message.member.roles.cache.has(adminlevel[message.guild.id].lvl4) && !message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(𝘮𝘮m𝘶𝘯𝘪𝘵𝘺).catch(e =>  message.channel.send(e)).catch(O_o => {})

const missingArgsEmbed = new Discord.MessageEmbed() // Creates the embed thats sent if the command isnt run right
        .setColor(`#000000`)
        .setTitle('Missing Arguments!')
        .setDescription('Usage: inrole [RoleName]')
 
  let reason = args.join(" ").toLowerCase();
  if (!reason) return message.channel.send(missingArgsEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})
  let rainbow = message.guild.roles.cache.find(r => r.name.toLowerCase().includes(args.join(" ").toLowerCase())) || message.mentions.roles.first() || message.guild.roles.cache.get(args.join(" "));
 if (!rainbow) return message.channel.send("Role not found !");
var memroles;
if(rainbow.members.size > 60){
 memroles = `Too many members to show (${rainbow.members.size}).`;
};
if(rainbow.members.size <= 60){
 memroles = rainbow.members.map(m=>m.user.tag).join(`\n`)
}; 
    const ListEmbed = new Discord.MessageEmbed()
            .setTitle(`Users with **${rainbow.name}** role [${rainbow.members.size}]:`)
            .setDescription(memroles);
        message.channel.send(ListEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})     

};

module.exports.config = {
  name: "inrole",
  aliases: ["members"]
};
