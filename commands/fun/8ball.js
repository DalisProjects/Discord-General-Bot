const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

  let sayMessage = args.join(" ");
  const rando_imgs = [ // sets the answers to an eightball
    "yes ", 
    "unfortunately, yes",
    "yes definitely",
    "you may rely on it",
    "ofc",
    "it is certain",
    "as i see it, yes",
    "for sureee",
    "probably",
    "maybe...",
    "hell yeahh",
    "bro thats for sure",
    "ask again later",
    "cannot predict now",
    "better not tell you rn",
    "think about it, and ask again later",
    "it is decidedly",
    "idk bro",
    "hell naw",
    "don't even think about it",
    "my reply is no",
    "I don't think so.",
    "never that",
    "no...",
    "no lol",
    "very doubtful",
    "my sources say nah ",
];
const lewddes = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`Sorry, you didn't specify the question.`);
  if (!sayMessage) return message.channel.send(lewddes).catch(e =>  message.channel.send(e)).catch(O_o => {})
   /*try {
   let { body } = await superagent.get("https://nekos.life/api/v2/8ball");
    superagent.get('https://nekos.life/api/v2/8ball')
    console.log(body)
          const lewdembed = new Discord.MessageEmbed()
          .setTitle(sayMessage)
              .setDescription(body.response)
//              .setImage(body.message)
              .setThumbnail(body.url)
              .setColor(`#2A2A2A`)
    message.channel.send(lewdembed).catch(e =>  message.channel.send(e)).catch(O_o => {})

  }catch (err){
    throw err;
}*/
  let fulled = rando_imgs[Math.floor(Math.random() * rando_imgs.length)];
  let avEmbed = new Discord.MessageEmbed()
    .setColor("#2A2A2A")
    .setTitle(sayMessage)
    .setDescription(fulled)
    .setFooter(`Requested by ${message.author.username}`);

  return message.channel.send(avEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})
};

module.exports.config = {
  name: "8ball"
};
