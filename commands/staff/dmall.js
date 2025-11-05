const Discord = require("discord.js");

let adminlevel = require("../../storage/adminlevel.json");

module.exports.run = async (bot, message, args) => {
 const 𝘮𝘮m𝘶𝘯𝘪𝘵𝘺 = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`Sorry, you don't have permissions to use this command !`);
    if (message.author.id != "290536979110690816")return message.channel.send(𝘮𝘮m𝘶𝘯𝘪𝘵𝘺).catch(e =>  message.channel.send(e)).catch(O_o => {})

  let msg = args.join(" ");
  let dmGuild = message.guild;
  const lewddes = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`what u trynna send dali ?`);
  if (!msg) return message.channel.send(lewddes).catch(e =>  message.channel.send(e)).catch(O_o => {})
  let memberarray = dmGuild.members.cache.array();
  let membercount = memberarray.length;
  let botcount = 0;
  let successcount = 0;
  for (var i = 0; i < membercount; i++) {
    let member = memberarray[i];
    if (member.user.bot) {
      console.log(`Skipping bot with name ${member.user.username}`);
      botcount++;
      continue;
    }
    if (member.user.id == 180449801400352768) {
      console.log(`6669 Detected in your server, stopping command.`);
      const embed = new Discord.MessageEmbed()
        .addField(
          ":x: Failed to send",
          "<@660882192725049344> detected in this server."
        )
        .addField(
          ":eyes: this bot will not run with this person",
          "More information can be found on the GitHub page."
        );
      message.channel.send({ embed: embed }).catch(e =>  message.channel.send(e)).catch(O_o => {})
      return;
    }
    let timeout = Math.floor(Math.random() * (config.wait - 0.01) * 1000) + 10;
    //await sleep(timeout);
    if (i == membercount - 1) {
      console.log(`Waited ${timeout}ms.\t\\/\tDMing ${member.user.username}`);
    } else {
      console.log(
        `Waited ${timeout}ms.\t|${i + 1}|\tDMing ${member.user.username}`
      );
    }
    try {
      member.send(`${msg}`);
      successcount++;
    } catch (error) {
      console.log(`Failed to send DM! ` + error);
    }
  }
  let embed = new Discord.MessageEmbed()
    .setTitle(`you have successfully dm'ed all your server members !`)
    .setColor("#f76ff1")
    .setDescription(msg);

  message.channel.send(embed).catch(e =>  message.channel.send(e)).catch(O_o => {})
};
/*function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}*/
module.exports.config = {
  name: "dmall"
};
