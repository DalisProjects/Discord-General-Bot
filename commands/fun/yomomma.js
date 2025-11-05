const yoMamma = require('yo-mamma').default;

module.exports.run = async (bot, message, args) => {

    let insult = yoMamma();
let user =
    message.mentions.members.first() || message.guild.members.cache.get(args[0]) ||
  message.guild.members.cache.find(member => member.displayName.toLowerCase().includes(args.join(" ").toLowerCase())) || message.guild.members.cache.find(member => member.user.username.toLowerCase().includes(args.join(" ").toLowerCase())) ||
  message.guild.members.cache.find(member => member.user.tag.toLowerCase().includes(args.join(" ").toLowerCase()));
 if (args < 1 || !["user"]) {
   return message.channel.send(insult).catch(e =>  message.channel.send(e)).catch(O_o => {})
  }
    message.channel.send(`${insult}`).catch(e =>  message.channel.send(e)).catch(O_o => {})

}

module.exports.config = {
    name: "yomama",
  aliases: ["yomomma", "yomom"]
};
