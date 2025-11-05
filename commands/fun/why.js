
const Discord = require("discord.js");
const superagent = require("superagent");
const fs = require("fs");

        exports.run = async (client, message, args, level) => {

 try {
  let { body } = await superagent.get("https://nekos.life/api/v2/why");
            message.channel.send(body.why).catch(e =>  message.channel.send(e)).catch(O_o => {})
            
          }catch (err){
            throw err;
        }

        }
        module.exports.config = {
            name: "why",
            aliases: ["why?"]
          };