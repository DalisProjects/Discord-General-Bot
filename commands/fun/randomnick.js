const Discord = require("discord.js");
const superagent = require("superagent");


module.exports.run = async (bot, message, args) => {



    try {
        superagent.get('https://nekos.life/api/v2/name')
            .end((err, response) => {
            console.log(response)
  let user = message.member
   user
    .setNickname(response.body.name)
    .catch(error => {
     return message.channel.send(`Missing permissions, your name cannot be changed !`)}
    );
  const lewdddes = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(
      `✔︎ | Your name has been randomly changed to **${response.body.name}** !`
    );
   message.channel.send(lewdddes).catch(e =>  message.channel.send(e)).catch(O_o => {})
})
}catch (err){
  throw err;
}
};

module.exports.config = {
  name: "randomnick",
  aliases: ["randomname"]
};
