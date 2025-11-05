const fs = require("fs");
const math = require("mathjs");
let Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   
  
  
  let amount1 = args.join(" ");
    if(!amount1) return message.channel.send("Invalid equation ! ").catch(e =>  message.channel.send(e)).catch(O_o => {})
    try{
    let equa = math.evaluate(amount1)
    message.channel.send(`Results for \`${amount1}\` : __**${equa}**__ `).catch(e =>  message.channel.send(e)).catch(O_o => {})
  }catch {
    return message.channel.send("Invalid equation ! ")
  }
  };
module.exports.config = {
  name: "calculate",
  aliases: ["equation", "math", "cl"]
};