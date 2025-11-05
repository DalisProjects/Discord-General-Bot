const discord = require("discord.js");
const roblox = require("noblox.js")
const ms = require("parse-ms");
const moment = require("moment");
module.exports.run = async (bot, message, args) => {
 let username = args[0]
   
    if (username) {
      roblox.getIdFromUsername(username).catch(e =>  message.channel.send("Sorry, that user doesn't seem to exist, double check your spelling and try again!")).then(id => {         
        if (id) 
        {
          roblox.getPlayerInfo(parseInt(id)).catch(function (err) {
            console.log(err)
          }).then(function(info)

 
            {
              try {
              let embed = new discord.MessageEmbed()
              .setColor("#FFFFFF")
              .setDescription(`https://roblox.com/users/${id}/profile`)
              .setImage(`https://www.roblox.com/bust-thumbnail/image?userId=${id}&width=420&height=420&format=png`)
              .setTitle(`${info.username}'s roblox avatar`)
              .setFooter(`Roblox user ID: ${id}`, bot.user.avatarURL())
          //    .setTimestamp(new Date())
              message.channel.send({embed}).catch(O_o => {})
            } catch (err){
                message.channel.send("Sorry, that user doesn't seem to exist, double check your spelling and try again!").catch(O_o => {}) // catching error
              console.log(err)
          }
            }).catch(O_o => {})
          };
        }).catch(function (err) {
         message.channel.send("Sorry, that user doesn't seem to exist, double check your spelling and try again!").catch(O_o => {}) // catching error
       });  
}else { message.channel.send("Please provide a valid username, e.g. '-search ROBLOX'.").catch(O_o => {}) }
};

module.exports.config = {
  name: "robloxcharactar",
  aliases: ["robloxpfp", "robloxavatar", "robloxpfp"]
};