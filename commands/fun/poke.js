
const Discord = require("discord.js");
const superagent = require("superagent");
const fs = require("fs");

        exports.run = async (client, message, args, level) => {
            let target =
    message.mentions.members.first() || message.guild.members.cache.get(args[0]) ||
  message.guild.members.cache.find(member => member.displayName.toLowerCase().includes(args.join(" ").toLowerCase())) || message.guild.members.cache.find(member => member.user.username.toLowerCase().includes(args.join(" ").toLowerCase())) ||
  message.guild.members.cache.find(member => member.user.tag.toLowerCase().includes(args.join(" ").toLowerCase()));
            const lewddes = new Discord.MessageEmbed()
    .setColor(`#2A2A2A`)
    .setDescription(`Sorry, you didn't mention or specify the user.`);

  if (!target|| !args.join(" ")) return message.channel.send(lewddes).catch(e =>  message.channel.send(e)).catch(O_o => {})
 
 try {
            superagent.get('https://nekos.life/api/v2/img/poke')
                .end((err, response) => {
              const lewdembed = new Discord.MessageEmbed()
              .setTitle(`${message.member.displayName} wants ${target.displayName}'s attention`)
              .setImage(response.body.url)
              .setColor(`#2A2A2A`)
            message.channel.send(lewdembed).catch(e =>  message.channel.send(e)).catch(O_o => {})
            
            })
          }catch (err){
            message.channel.send(`${message.member.displayName} feeds ${target.displayName}`)
        }

        }
        module.exports.config = {
            name: "poke"
          };
          