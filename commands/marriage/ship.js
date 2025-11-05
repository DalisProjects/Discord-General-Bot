
const Discord = require("discord.js");
let kisses = require("../../storage/kisses.json");
let marriagelogs = require("../../storage/marriagelogs.json");
const ms = require("parse-ms");
let currencylogs = require("../../storage/currencylogs.json");
let hugs = require("../../storage/hugs.json");
let slaps = require("../../storage/slaps.json");
let spanks = require("../../storage/spanks.json");
const moment = require("moment");
const fs = require("fs");


        exports.run = async (client, message, args, level) => {

  if(marriagelogs[message.author.id].marry === "None") return message.reply(`You are not married to anyone, therefore you have no ship to check !`);
  let husbando = marriagelogs[message.author.id].marry;

  if(!kisses[`${husbando}, ${message.author.id}`]) {
    kisses[`${husbando}, ${message.author.id}`] = {
      kisses: 0
    }
  }
  if(!kisses[`${message.author.id}, ${husbando}`]) {
    kisses[`${message.author.id}, ${husbando}`] = {
      kisses: 0
    }
  }
  if(!hugs[`${husbando}, ${message.author.id}`]) {
    hugs[`${husbando}, ${message.author.id}`] = {
        hugs: 0
    }
  }
  if(!hugs[`${message.author.id}, ${husbando}`]) {
    hugs[`${message.author.id}, ${husbando}`] = {
        hugs: 0
    }
  }
  if(!slaps[`${husbando}, ${message.author.id}`]) {
    slaps[`${husbando}, ${message.author.id}`] = {
        slaps: 0
    }
  }
  if(!slaps[`${message.author.id}, ${husbando}`]) {
    slaps[`${message.author.id}, ${husbando}`] = {
        slaps: 0
    }
  }
  if(!spanks[`${husbando}, ${message.author.id}`]) {
    spanks[`${husbando}, ${message.author.id}`] = {
        spanks: 0
    }
  }
  if(!spanks[`${message.author.id}, ${husbando}`]) {
    spanks[`${message.author.id}, ${husbando}`] = {
        spanks: 0
    }
  }

let amountk1 = parseInt(kisses[`${husbando}, ${message.author.id}`].kisses, 10);
let amountk2 = parseInt(kisses[`${message.author.id}, ${husbando}`].kisses, 10);
let totalkac = amountk1 + amountk2

let amounth1 = parseInt(hugs[`${husbando}, ${message.author.id}`].hugs, 10);
let amounth2 = parseInt(hugs[`${message.author.id}, ${husbando}`].hugs, 10);
let totalhac = amounth1 + amounth2

let amountsp1 = parseInt(spanks[`${husbando}, ${message.author.id}`].spanks, 10);
let amountsp2 = parseInt(spanks[`${message.author.id}, ${husbando}`].spanks, 10);
let totalspac = amountsp1 + amountsp2

let amountsl1 = parseInt(slaps[`${husbando}, ${message.author.id}`].slaps, 10);
let amountsl2 = parseInt(slaps[`${message.author.id}, ${husbando}`].slaps, 10);
let totalslac = amountsl1 + amountsl2

let coidnd = moment(marriagelogs[message.author.id].marrysince).format("llll");

let d = (Date.now() - marriagelogs[message.author.id].marrysince) / 1000;


let years = Math.floor(d / 31536000);
d = d - years * 31536000;
let months = Math.floor(d / 2592000);
d = d - months * 2592000;
let days = Math.floor(d / 86400);
d = d- days * 84600;
let hours = Math.floor(d / 3600);
d = d - hours * 3600;
let minutes = Math.floor(d / 60);
let seconds = d - minutes * 60;
              const lewdembed = new Discord.MessageEmbed()
              .setTitle(`:ship: | __**${currencylogs[message.author.id].shipname}**__: Ship statistics `)
              .setColor(`#2A2A2A`)
              .setDescription(`\n\n<@${husbando}> x <@${message.author.id}>\n\n:hugging: **Total Hugs:** ${totalhac}\n:kiss: **Total Kisses:** ${totalkac}\n:man_facepalming: **Total slaps:** ${totalslac}\n:clap: **Total spanks:** ${totalspac}\n
              Duration: ${months}month(s), ${days}day(s), ${hours}hour(s), ${minutes}minute(s) `)
              .setFooter(`married since ${coidnd}`)
            message.channel.send(lewdembed).catch(e =>  message.channel.send(e)).catch(O_o => {})    

        };

        module.exports.config = {
            name: "ship",
        };
