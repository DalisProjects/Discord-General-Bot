const Discord = require("discord.js");
const urban = require("urban");

module.exports.run = async (bot, message, args) => {
     const lewddes = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`Please enter something!`);
    if(args.length < 1) return message.reply(lewddes).catch(e =>  message.channel.send(e)).catch(O_o => {})
    let XD = args.join(" "); 

    urban(XD).first(json => {

        if(!json) return message.reply("No results found!").catch(O_o => {})
        let urbEmbed = new Discord.MessageEmbed()
        .setColor("00ff00")
        .setTitle(json.word)
        .setDescription(`
${json.definition}\n\n**Example:** 
${json.example}`)
        .setFooter(`Written by: ${json.author}`);

        message.channel.send(urbEmbed).catch(O_o => {})
    }).catch(O_o => {})


}

module.exports.config = {
    name: "urban",
  aliases: ["ub", "ud"]
};
