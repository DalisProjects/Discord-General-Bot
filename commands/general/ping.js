const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.channel.send("<a:NVasiankiss:875745693212479498>").then(msg => {
    setTimeout(() => {
      let ping = Math.round(bot.ws.ping);
      let botping = msg.createdTimestamp - message.createdTimestamp;
      var msgg;
      if (ping > 120) msgg = "Light Issues";
      if (ping > 1000) msgg = "Severe Issues";
      if (ping < 90) msgg = "Performing Normal";
      if (ping > 400) msgg = "Impactful Issues";
      if (ping > 240) msgg =  "Moderate issues";
      msg.edit(`API Ping: ${ping} **(${msgg})** Bot Ping: ${botping} `).catch(e =>  message.channel.send(e)).catch(O_o => {})
    }, 500);
  });
};
module.exports.config = {
  name: "ping"
};
