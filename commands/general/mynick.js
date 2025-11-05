const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

  const missingArgsEmbed = new Discord.MessageEmbed() // Creates the embed thats sent if the command isnt run right
        .setColor(`#000000`)
        .setTitle('Missing Arguments!')
        .setDescription('Usage: mynick [Nickname]')

  let reason = args.join(" ");
  if (!reason) return message.channel.send(missingArgsEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})
let user = message.member
  await user
    .setNickname(reason)
    .catch(error =>
     message.channel.send(`Sorry I couldn't make changes due to : ${error}`)
    );
  const lewdddes = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(
      `✔︎ | Your name has been successfully changed to **${reason}** !`
    );
  await message.channel.send(lewdddes).catch(e =>  message.channel.send(e)).catch(O_o => {})
};

module.exports.config = {
  name: "mynick",
  aliases: ["changenick"]
};
