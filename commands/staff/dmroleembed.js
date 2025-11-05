const Discord = require("discord.js");

let adminlevel = require("../../storage/adminlevel.json");

module.exports.run = async (bot, message, args) => {
 const 𝘮𝘮m𝘶𝘯𝘪𝘵𝘺 = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`Sorry, you don't have permissions to use this command !`);
    if (message.author.id != "290536979110690816")return message.channel.send(𝘮𝘮m𝘶𝘯𝘪𝘵𝘺).catch(e =>  message.channel.send(e)).catch(O_o => {})

// let somethingThere = message.content.split(/\s+/g).slice(1).join(" ");
let role = message.mentions.roles.first();

const lewddes = new Discord.MessageEmbed()
.setColor(`#000000`)
.setDescription(`Sorry, you didn't mention or specify the role.`);
if (!role) return message.channel.send(lewddes).catch(e =>  message.channel.send(e)).catch(O_o => {})

const lewdddes = new Discord.MessageEmbed()
.setColor(`#000000`)
.setDescription(`Sorry, you didn't mention what u trynna say.`);
let reason = args.slice(1).join(" ");
if (!reason) return message.channel.send(lewdddes).catch(e =>  message.channel.send(e)).catch(O_o => {})

let memberarray = role.members.array();
let membercount = memberarray.length;
let botcount = 0;
let successcount = 0;
console.log(
`Responding to ${message.author.username} : Sending message to all ${membercount} members of role ${role.name}.`
);
for (var i = 0; i < membercount; i++) {
let member = memberarray[i];
if (member.user.bot) {
console.log(`Skipping bot with name ${member.displayName}`);
botcount++;
continue;
}
let timeout = Math.floor(Math.random() * (config.wait - 0.01) * 1000) + 10;

// await sleep(timeout);
if (i == membercount - 1) {
console.log(`Waited ${timeout}ms.\t\\/\tDMing ${member.displayName}`);
} else {
console.log(`Waited ${timeout}ms.\t|${i + 1}|\tDMing ${member.displayName}`);
}
try {
let embedddd = new Discord.MessageEmbed()
.setTitle(`❥︎ | Giveaway`)
.setColor("#f76ff1")
.setDescription(`${reason}`);
member.send(embedddd);
successcount++;
} catch (error) {
console.log(`--Failed to send DM! ` + error);
}
}
console.log(
`Sent ${successcount} ${
successcount != 1 ? `messages` : `message`
} successfully, ` +
`${botcount} ${botcount != 1 ? `bots were` : `bot was`} skipped.`
);
let embed = new Discord.MessageEmbed()
.setTitle(`you have successfully dm'ed everyone who had that role !`)
.setColor("#f76ff1")
.setDescription(reason);
message.channel.send(embed).catch(e =>  message.channel.send(e)).catch(O_o => {})
};


module.exports.config = {
name: "dmroleembed"
};
