
const Discord = require("discord.js");
const superagent = require("superagent");
const fs = require("fs");

        exports.run = async (client, message, args, level) => {

 try {
            superagent.get('https://nekos.life/api/v2/img/waifu')
                .end((err, response) => {
              const lewdembed = new Discord.MessageEmbed()
              .setImage(response.body.url)
            message.channel.send(lewdembed).catch(e =>  message.channel.send(e)).catch(O_o => {})
            
            })
          }catch (err){
            throw err;
        }

        }
        module.exports.config = {
            name: "waifu",
            aliases: ["waifu"]
          };
          