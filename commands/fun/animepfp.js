
const Discord = require("discord.js");
const superagent = require("superagent");
const fs = require("fs");

        exports.run = async (client, message, args, level) => {

 try {
            superagent.get('https://nekos.life/api/v2/img/avatar')
                .end((err, response) => {
              const lewdembed = new Discord.MessageEmbed()
              .setTitle(`Here's some anime avatar`)
              .setImage(response.body.url)
              .setColor(`#2A2A2A`)
            message.channel.send(lewdembed).catch(e =>  message.channel.send(e)).catch(O_o => {})
            
            })
          }catch (err){
            throw err;
        }

        }
        module.exports.config = {
            name: "animepfp",
            aliases: ["animeavatar"]
          };
          