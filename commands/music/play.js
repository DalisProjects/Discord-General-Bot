const discord = require("discord.js");


const ytdl = require('ytdl-core');

module.exports.run = async (bot, message, args) => {
const songname = message.content.split(" ");

const lewdddddzees = new discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription("You need to join a voice channel first!");
  if (!message.member.voice.channel)return message.channel.send(lewdddddzees);
    const connection = await message.member.voice.channel.join();
connection.play(ytdl(songname, { filter: 'audioonly' }));
};

module.exports.config = {
  name: "pglay"
};
