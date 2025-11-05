
const Discord = require("discord.js");
const superagent = require("superagent");
const fs = require("fs");

        exports.run = async (client, message, args, level) => {


 
 try {
  let { body } = await superagent.get("https://nekos.life/api/v2/fact");
            message.channel.send(body.fact).catch(e =>  message.channel.send(e)).catch(O_o => {})
          }catch (err){
            throw err;
        }

        }
        module.exports.config = {
            name: "fact",
            aliases: ["facts"]
          };//pm2 restart test.js