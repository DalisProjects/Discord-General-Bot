const discord = require("discord.js");
const roblox = require("noblox.js")
const ms = require("parse-ms");
const moment = require("moment");
module.exports.run = async (bot, message, args) => {
 let username = args[0]
   
    // if a username is supplied successfully
    if (username) {
      roblox.getIdFromUsername(username).catch(e =>  message.channel.send("Sorry, that user doesn't seem to exist, double check your spelling and try again!")).then(id => {         
        if (id) 
        {
          // next conditio
          roblox.getPlayerInfo(parseInt(id)).catch(function (err) {
            console.log(err)
          }).then(function(info)

 
            {
              try {
              // dates.. um. go try get a pear or a grape instead.
            //  let date = new moment(info.joinDate)
//              let dateInfo = bot.extractDate(date)
              // create new embed and establish some settings for it, tasty.
              let embed = new discord.MessageEmbed()
              .setColor("#FFFFFF")
              .setURL(`https://roblox.com/users/${id}/profile`)
              .setThumbnail(`https://www.roblox.com/bust-thumbnail/image?userId=${id}&width=420&height=420&format=png`)
              .addField("Username", info.username || 'Unresolvable', true)
              .addField("User ID", id || 'Unresolvable', true)
              //.addField("Friends", info.friendCount || 'Unresolvable', true)
              //.addField("Followers/Following", `${info.followerCount}/${info.followingCount}` || 'Unresolvable', true)
              .addField("Blurb", info.blurb || 'Nothing', true)
              .addField("Status", info.status || 'Nothing', true)
            //  .addField("Join date", moment(info.joinDate) || 'Unresolvable', true)
              //.addField("Account age", info.age + " days old" || 'Unresolvable', true)
          //    .addField("Register Date", `${dateInfo.month}/${dateInfo.day}/${dateInfo.year}` || 'Unresolvable')
              .addField("User Link", `https://roblox.com/users/${id}/profile`)
              .setFooter(`Search Bot`, bot.user.avatarURL())
              .setTimestamp(new Date())
              message.channel.send({embed}).catch(O_o => {})
            } catch (err){
              console.log(err)
          }
            }).catch(O_o => {})
          };
        }).catch(function (err) {
         message.channel.send("Sorry, that user doesn't seem to exist, double check your spelling and try again!").catch(O_o => {}) // catching error
         return;
        });  
}else { return message.channel.send("Please provide a valid username, e.g. '-search ROBLOX'.").catch(O_o => {}) }
};

module.exports.config = {
  name: "roblox"
};
