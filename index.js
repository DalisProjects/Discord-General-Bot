const Discord = require("discord.js");
const bot = new Discord.Client({ disableEveryone: true});// , restRequestTimeout: 50000
const invites = {};
const ms = require("parse-ms");
const serverset = require("./storage/serverset.json");
const talkedRecently = new Set();
const botconfig = require("./botconfig.json");
const afklogs = require("./storage/afklogs.json");
const token = botconfig.token;
const fs = require("fs");
const marriagelogs = require("./storage/marriagelogs.json");
const jailrole = require("./storage/jailrole.json");
const confession = require("./storage/confession.json");
const mutelogs = require("./storage/mutelogs.json");
const adminlevel = require("./storage/adminlevel.json");
const cmsgs = {};
bot.snipe = {};
bot.editsnipe = {};
bot.offed = {};
bot.antiraid = {};
bot.imageslogs = {};
const currencylogs = require("./storage/currencylogs.json");
const jailreason = require("./storage/jailreason.json");
const jaildate = require("./storage/jaildate.json");
const chatgameslogs = {}
const premiumserver = require("./storage/premiumserver.json");
const randomwords = [ `stepbro wyd`,
`can we edate`,
`imagine edating`,
`gave you my heart and you broke it`,
`i love you babygirl`,
`join vc listen to music with me`,
`thats why your short`,  `im 5ft tbh`,
`my penis 2 inches`,
`love large cock`,
`love flat bitches`,
`get bullied who cares`,
`puto`,
`who u`,  
`ur dumb as shit`,
`dont care`,
`im homo`, 
`i got hoes`,
`did your uncle teach you that ?`,  `imma big weeb`,
`xxxtentacion`,
`mic up lol talk shit in vc`,
`ur cute tho`,
`join vc rq`,
`i mean i love you`,
`mom joke in 2020 lol`,
`i mean i guess`,
`juice wrld`, `can you dont`,
`black lives matter`,
`im ghetto`,
`i catfish for nitro`,
`single for life period`,
`why ur so toxic`,
`imagine being toxic for attention`,
`im so horny`,
`playboi carti`,  `no hablas english`,
`travis scott`, 
`im virgin`, `bruh go shower u stink`,
`lil uzi so cute`,
`im homo`,
`chopa mi polla`,
`mad for what`,
`i edate`,
`who asked lol`,
`im sus`,
`mad over discord`,
`ur mad lol`,
`cock`,
`imagine getting mad over discord`,
`have my kids`,
`sad nibba hours`,
`i listen to kpop everyday`,
`bts on top`,
`u aint got no life`,
`stop trynna be me`,
`slide in dms sexy`,
`i mean yeah`,`fake ass shoes just like their hoes`,
`i know you want me`,`traitor headass`,
`im dyke`, `can you dont`,
`shut up slave`,`want me to eat you out ?`,
`you will need a good lawyer`,
 `you want hickeys bae ?`,
`nle choppa`,`kinda gay from you`,
`hands up`,`given up already ?`,
`peace was never an option`,
`you gay as shit`,
 `can you dont swear`,
`join vc imma sing`,
`young boy never broke again`,
`i eat dicks tbh`,
 `how could you betray me`,
`chicken`,  `thats why ur white`,
`nirvana`,
`im daddy`, `u really think i care ?`,
`bitchgang`,
`im gay`,
`mexican`,
`arab`,
`baguette`,
`cock`, `stay mad`,
`french`, 
`it iz what it iz`,
`suck my toes`,
`cock`, `thats why ur gay`,
`homiesexual`,
`tunisian`,
`africa`,
`school shooter`,
`taco`, `uwu lol`,
`love me already`,
`i ate my cat`,
`fake ass hoes just like their shoes`,
`im fake`, `all my friends fake`,
`it be like that sometimes`,`babygirl are you lost ?`,
`pop smoke`, `mawh lol`,
`i love bts`,
`i hate it here`,
`im kinda gay tbh`,
`bitch`];


bot.commands = new Discord.Collection();

fs.readdir("./commands/general", (err, files) => {
  if (err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if (jsfile.length <= 0) {
    console.log("Couldn't find the general commands.");
    return;
  }

  jsfile.forEach((f, i) => {
    let props = require(`./commands/general/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.config.name, {
      run: props.run,
      ...props.config
    });
  });
});
fs.readdir("./commands/currency", (err, files) => {
  if (err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if (jsfile.length <= 0) {
    console.log("Couldn't find the currency commands.");
    return;
  }

  jsfile.forEach((f, i) => {
    let props = require(`./commands/currency/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.config.name, {
      run: props.run,
      ...props.config
    });
  });
});
fs.readdir("./commands/marriage", (err, files) => {
  if (err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if (jsfile.length <= 0) {
    console.log("Couldn't find the marriage commands.");
    return;
  }

  jsfile.forEach((f, i) => {
    let props = require(`./commands/marriage/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.config.name, {
      run: props.run,
      ...props.config
    });
  });
});


fs.readdir("./commands/fun", (err, files) => {
  if (err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if (jsfile.length <= 0) {
    console.log("Couldn't find the fun commands.");
    return;
  }

  jsfile.forEach((f, i) => {
    let props = require(`./commands/fun/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.config.name, {
      run: props.run,
      ...props.config
    });
  });
});

fs.readdir("./commands/staff", (err, files) => {
  if (err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if (jsfile.length <= 0) {
    console.log("Couldn't find the staff commands.");
    return;
  }

  jsfile.forEach((f, i) => {
    let props = require(`./commands/staff/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.config.name, {
      run: props.run,
      ...props.config
    });
  });
});
fs.readdir("./commands/music", (err, files) => {
  if (err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if (jsfile.length <= 0) {
    console.log("Couldn't find the music commands.");
    return;
  }

  jsfile.forEach((f, i) => {
    let props = require(`./commands/music/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.config.name, {
      run: props.run,
      ...props.config
    });
  });
});

fs.readdir("./commands/nsfw", (err, files) => {
  if (err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if (jsfile.length <= 0) {
    console.log("Couldn't find the nsfw commands.");
    return;
  }

  jsfile.forEach((f, i) => {
    let props = require(`./commands/nsfw/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.config.name, {
      run: props.run,
      ...props.config
    });
  });
});


bot.on("ready", () => {
 
   bot.guilds.cache.forEach(g => {
    g.fetchInvites().catch(O_o => {}).then(guildInvites => {
      invites[g.id] = guildInvites;

    }).catch(O_o => {})
  });
  

  let voiceChannels = bot.guilds.cache.get("691301384133410867").channels.cache.filter(c => c.type === "voice")
  if (voiceChannels) {let chan = bot.guilds.cache.get("691301384133410867").channels.cache.get("866318310051151882")
   if (!chan) return console.log("channel not found vcn");
  let count = 0;
  for (const [id, voiceChannel] of voiceChannels)
    count += voiceChannel.members.size;
  chan.setName(`・𝘝𝘊 𝘊𝘰𝘶𝘯𝘵︰${count}`).catch(O_o => {})}
  

   /* let logs = bot.guilds.cache.get("691301384133410867").channels.cache.get("705128875058790420");
  setInterval(() => {
    logs.send(`bump the server please :rolling_eyes: !
Use !d bump`).catch(O_o => {});
  }, 999 * 60 * 60);
  setInterval(() => {
    logs.send(`join our backup server https://discord.gg/8vJNj7fjNw
`);
  }, 1000 * 60 * 60);*/

  bot.user.setStatus("online");
    bot.user.setPresence({
      activity: {
        name: ".help for the list of commands || DM me to .confess",
       //name: "Under maintenance, new update",
        type: "STREAMING"
      }
    });

});
bot.on("channelCreate", async channel => {
  if (channel.type === "dm")return;
  let botuser = channel.guild.members.cache.get("723061621991276574");
  if(!botuser.hasPermission("ADMINISTRATOR"))return;
  let mutedrole = channel.guild.roles.cache.find(r => r.name === "Muted");
  if(!mutedrole) {
    channel.guild.roles.create({data:{ name: "Muted"}}).then(async(role) =>{
        channel.createOverwrite(role, { SEND_MESSAGES: false, CONNECT: false, SPEAK: false, ADD_REACTIONS: false });
    })
    return;
  }
  else channel.createOverwrite(mutedrole, { SEND_MESSAGES: false, CONNECT: false, SPEAK: false, ADD_REACTIONS: false });
});
bot.on("guildCreate", async guild =>{
  //console.log(guild)
  let nirbotc = bot.guilds.cache.get("872837138570436620").channels.cache.find(ch => ch.name === "nv-logs")
  let Discorch = guild.channels.cache.random();
  await Discorch.createInvite({ maxAge: 0 }).catch(O_o => {}).then(invite => nirbotc.send(new Discord.MessageEmbed()
    .setTitle(":white_check_mark: **__Bot joined guild__**")
    .setColor("#00FF00")
    .setDescription(`**Guild name:** ${guild.name} 
(**id:** ${guild.id})

**Owner:** <@${guild.ownerID}>
(**id:** ${guild.ownerID})

**Total members:** ${guild.memberCount}

[Server invite Link](https://discord.gg/${invite.code})`)
.setFooter(`The bot is now in ${bot.guilds.cache.size.toLocaleString()} servers & ${bot.users.cache.size.toLocaleString()} users.`))).catch(O_o => {})});

bot.on("guildDelete", async guild => {
  let nirbotc = bot.guilds.cache.get("872837138570436620").channels.cache.find(ch => ch.name === "nv-logs")
  nirbotc.send(new Discord.MessageEmbed()
    .setTitle(":no_entry:**__Bot removed from guild__**")
    .setColor("#FF0000")
    .setDescription(`**Guild name:** ${guild.name} 
(**id:** ${guild.id})
    
**Owner:** <@${guild.ownerID}>
(**id:** ${guild.ownerID})
    
**Total members:** ${guild.memberCount}`)
.setFooter(`The bot is now in ${bot.guilds.cache.size.toLocaleString()} servers & ${bot.users.cache.size.toLocaleString()} users.`))});

bot.on("inviteCreate", async Invite => {
  Invite.channel.guild.fetchInvites().catch(O_o => {}).then(guildInvites => {
    invites[Invite.channel.guild.id] = guildInvites;
  }).catch(O_o => {})});
  bot.on("inviteDelete", async Invite => {
    Invite.channel.guild.fetchInvites().catch(O_o => {}).then(guildInvites => {
      invites[Invite.channel.guild.id] = guildInvites;
    }).catch(O_o => {})});
bot.on("guildMemberAdd", member => {
  let botuser = member.guild.members.cache.get("723061621991276574");
  if(!botuser.hasPermission("ADMINISTRATOR"))return;

  if(!serverset[member.guild.id]) {
    serverset[member.guild.id] = {
      welcomechannel: "None",
      chatgameschannel: "None",
      membercountmessage: "members :",
      deletedmsgschannel: "None",
      membercount: "None",
      membermodulechannel: "None",
      stafflogschannel: "None",
      welcomemsg: "Hey, Welcome to the server",
      inviteschannel: "None",
    leaveschannel: "None",
      prefix: "."
  }
  fs.writeFile("./storage/serverset.json", JSON.stringify(serverset), (err) => {
    if(err) console.log(err)})
  }
  if(!bot.antiraid[member.guild.id]){
    bot.antiraid[member.guild.id] = {
      antiraid: 0
  }}
  if(bot.antiraid[member.guild.id].antiraid == 1 ){
    member.guild.members.ban(member, {reason: "Anti-Nuke autoban"})
    if(serverset[member.guild.id].stafflogschannel !== "None") {let loe = new Discord.MessageEmbed()
      .setTitle(`:no_entry: | Anti-nuke enabled`)
      .setColor("#ff0000")
      .setFooter(`Auto-ban ${member.user.tag}`);
      let ccaaedhadn = member.guild.channels.cache.get(serverset[member.guild.id].stafflogschannel);
      if(ccaaedhadn)ccaaedhadn.send(loe).catch(O_o => {});
      }
  }
  if(member.user.bot){
    member.guild.fetchAuditLogs({type: 28}).then(audit => {
    let executor = audit.entries.first().executor;
    let botinviter = member.guild.members.cache.get(executor.id);
      let loe = new Discord.MessageEmbed()
      .setTitle(`:no_entry: | Attention | ${member.user.tag}`)
       .setDescription(`** A bot <@${member.user.id}> has been added to the server by ${botinviter.user.tag} <@${botinviter.id}>**`)
      .setTimestamp(new Date())
      .setColor("#ff0000")
      .setFooter(`Added by ${botinviter.user.tag}`);
      member.guild.owner.send(loe).catch(O_o => {});
  if(serverset[member.guild.id].stafflogschannel !== "None") {
   let caaedhadn = member.guild.channels.cache.get(serverset[member.guild.id].stafflogschannel);
   if(caaedhadn)caaedhadn.send(loe).catch(O_o => {});
   } })
}
if(serverset[member.guild.id].inviteschannel !== "None" && !member.user.bot){
  member.guild.fetchInvites().catch(O_o => {}).then(guildInvites => {
    try {
    const ei = invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = bot.users.cache.get(invite.inviter.id);
    let sssssss = member.guild.channels.cache.get(serverset[member.guild.id].inviteschannel)
    if(sssssss)sssssss.send(`<@${member.user.id}> joined using invite code ${invite.code} from <@${inviter.id}>. Invite was used ${invite.uses} times since its creation.`).catch(O_o => {})
  } catch (err){
    let logChandnel = member.guild.channels.cache.get(serverset[member.guild.id].inviteschannel)
    if(logChandnel)logChandnel.send(`<@${member.user.id}> joined, Can't track inviter ! `).catch(O_o => {})
} 
  }).catch(O_o => {})
}
  
  if(serverset[member.guild.id].membercount !== "None"){
  let memberschan = member.guild.channels.cache.get(serverset[member.guild.id].membercount);
  if(memberschan)memberschan.setName(`${serverset[member.guild.id].membercountmessage}${member.guild.memberCount}`).catch(O_o => {})
}

let d = (Date.now() - member.user.createdTimestamp) / 1000;
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
   if(serverset[member.guild.id].membermodulechannel !== "None"){
  let logs = member.guild.channels.cache.get(serverset[member.guild.id].membermodulechannel);
   let log = new Discord.MessageEmbed()
    .setDescription(`**User:** <@${member.id}> (${member.user.tag})\n**User ID:** ${member.user.id}\n**Acc Creation:** ${years} years, ${months} months, ${days} days, ${hours} hours and ${minutes} mins ago`)
    .setTitle("Member Joined")
    .setTimestamp(new Date())
    .setThumbnail(member.user.displayAvatarURL())
    .setColor("#30c00e")
    .setFooter(`${member.guild.memberCount}ᵗʰ member`);
    if(logs)logs.send(log).catch(O_o => {});
}

if(!mutelogs[`${member.guild.id}, ${member.user.id}`]) {
  mutelogs[`${member.guild.id}, ${member.user.id}`] = {
  mutedby: `None}`,
  mreason: "None",
  mdate: "None",
  mrole: 0
}
fs.writeFile("./storage/mutelogs.json", JSON.stringify(mutelogs), (err) => {
  if(err) console.log(err)
})
}
if(mutelogs[`${member.guild.id}, ${member.user.id}`].mrole > 0) {
  let muterole = member.guild.roles.cache.find(r => r.name === "Muted");
 // let memberrole = member.guild.roles.cache.find(r => r.name === "𝘔𝘦𝘮𝘣𝘦𝘳");
  //member.roles.remove(memberrole).catch(O_o => {})
  member.roles.add(muterole).catch(O_o => {});
  mutelogs[`${member.guild.id}, ${member.user.id}`] = {
    mutedby: `The Bot`,
    mreason: "Mute evading, rejoining the server while muted",
    mdate: Date.now(),
    mrole: 1
  }
  fs.writeFile("./storage/mutelogs.json", JSON.stringify(mutelogs), (err) => {
    if(err) console.log(err)
  })
  if(serverset[member.guild.id].stafflogschannel !== "None") {
  let loe = new Discord.MessageEmbed()
  .setTitle(`Mute evading | ${member.user.tag}`)
  .setDescription(`**<@${member.user.id}> has been muted automatically after they left and rejoined during their mute time !**`)
  .setTimestamp(new Date())
  .setColor("#ff0000")
  .setFooter(`${member.id}`);
let caaedhadn = member.guild.channels.cache.get(serverset[member.guild.id].stafflogschannel);
if(caaedhadn)caaedhadn.send(loe).catch(O_o => {});
} return;
}
if (serverset[member.guild.id].altsprotection === "ON"){

if(years === 0 && months === 0){
if(days < 16){
let mutedrole = channel.guild.roles.cache.find(r => r.name === "Muted");
  if(!mutedrole) {
    channel.guild.roles.create({data:{ name: "Muted"}}).then(async(role) =>{
    });
  }
  if (!mutelogs[`${member.guild.id}, ${member.user.id}`]){
    mutelogs[`${member.guild.id}, ${member.user.id}`] = {
          mutedby: `ALTS Protection`,
          mreason: "Automated Mute: Possible alternative account !",
          mdate: Date.now(),
          mrole: 1
  }
  }
  mutelogs[`${member.guild.id}, ${member.user.id}`] = {
    mutedby: `ALTS Protection`,
    mreason: "Automated Mute: Possible alternative account !",
    mdate: Date.now(),
    mrole: 1
  }
  fs.writeFile("./storage/mutelogs.json", JSON.stringify(mutelogs), (err) => {
    if(err) console.log(err)
  })
member.roles.add(mutedrole).catch(e =>  message.channel.send(e)).catch(O_o => {})

if(serverset[member.guild.id].stafflogschannel !== "None") {
 let loe = new Discord.MessageEmbed()
    .setTitle(`Possible ALT | ${member.user.tag}`)
    .setDescription(`**<@${member.user.id}> has been muted automatically because their account could be an ALT !**\n**Acc Creation:** ${days} days, ${hours} hours and ${minutes} mins ago`)
    .setTimestamp(new Date())
    .setColor("#ff0000")
    .setFooter(`${member.id}`);
let caaedhadn = member.guild.channels.cache.get(serverset[member.guild.id].stafflogschannel);
if(caaedhadn)caaedhadn.send(loe).catch(O_o => {});
}
const warningdmEmbed = new Discord.MessageEmbed() 
    .setColor("#000000")
    .setTitle(`Quarentined`)
 .setDescription(`You have been jailed automatically in ${member.guild.name} server because your account is new and could be an ALT !`)
    .setFooter(`You need admins approval, Contact staff team and be patient please !`);
member.send(warningdmEmbed).catch(O_o => {});
return;};}}
if(serverset[member.guild.id].welcomechannel !== "None"){
  let wlcchannel = member.guild.channels.cache.get(serverset[member.guild.id].welcomechannel);
  if(wlcchannel)wlcchannel.send(`<@${member.user.id}> ${serverset[member.guild.id].welcomemsg}`); }
})
bot.on("guildMemberRemove", member => {
 
 let d = (Date.now() - member.user.createdTimestamp) / 1000;

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
if(!serverset[member.guild.id]) {
  serverset[member.guild.id] = {
    welcomechannel: "None",
    chatgameschannel: "None",
    membercountmessage: "members :",
    deletedmsgschannel: "None",
    membercount: "None",
    membermodulechannel: "None",
    stafflogschannel: "None",
    welcomemsg: "Hey, Welcome to the server",
    inviteschannel: "None",
    leaveschannel: "None",
    prefix: "."
}}
fs.writeFile("./storage/serverset.json", JSON.stringify(serverset), (err) => {
  if(err) console.log(err)})
   if(serverset[member.guild.id].membermodulechannel !== "None"){
   let log = new Discord.MessageEmbed()
    .setDescription(`**User:** <@${member.id}> (${member.user.tag})\n**User ID:** ${member.user.id}\n**Acc Creation:** ${years} year(s), ${months} month(s), ${days} day(s), ${hours} hour(s) and ${minutes} minute(s) ago`)
    .setTitle("Member Left")
    .setTimestamp(new Date())
    .setThumbnail(member.user.displayAvatarURL())
    .setColor("#da1a1a")
    .setFooter(`${member.guild.memberCount}ᵗʰ member`);
  let logs = member.guild.channels.cache.get(serverset[member.guild.id].membermodulechannel);
  if(logs)logs.send(log).catch(O_o => {});
}

  if(serverset[member.guild.id].membercount !== "None") {
  let memberschan = member.guild.channels.cache.get(serverset[member.guild.id].membercount);
  if(memberschan)memberschan.setName(`${serverset[member.guild.id].membercountmessage} ${member.guild.memberCount}`).catch(O_o => {})
}
});
bot.on("voiceStateUpdate", (oldState, newState) => {
let guildid = bot.guilds.cache.get("691301384133410867")
  let voiceChannels = guildid.channels.cache.filter(c => c.type === "voice");
  let chan = guildid.channels.cache.get("866318310051151882");
  let count = 0;
  for (const [id, voiceChannel] of voiceChannels)
    count += voiceChannel.members.size;
  chan.setName(`・𝘝𝘊 𝘊𝘰𝘶𝘯𝘵︰${count}`);
});


bot.on("messageUpdate", async (oldMessage, newMessage) => {
  if (newMessage.channel.type === "dm")return;
  let botuser = oldMessage.guild.members.cache.get("723061621991276574");
  if(!botuser.hasPermission("ADMINISTRATOR"))return;
  if (oldMessage.content === newMessage.content) {
    return;
  }
  if (oldMessage.author.bot) return;

if (serverset[oldMessage.guild.id].deletedmsgschannel !== "None"){
let logs = oldMessage.guild.channels.cache.get(serverset[oldMessage.guild.id].deletedmsgschannel);
  let Message = new Discord.MessageEmbed()
    .setAuthor(
      `${newMessage.author.tag}, (${newMessage.author.id})`,
      `${newMessage.author.displayAvatarURL()}`
    )
    .addField("Before", `${oldMessage} `)
    .addField("After", `${newMessage}`)
    .setFooter(`${newMessage.channel.name}`)
    .setColor("#32EBE8")
    .setTimestamp(new Date());
  if(logs)logs.send(Message).catch(O_o => {});
}
if (newMessage.guild.id === "691301384133410867"){
  if(newMessage === "welcome"){
    await newMessage.react("764558971011858444");
  }
}
if(!bot.editsnipe[newMessage.guild.id]){
  bot.editsnipe[newMessage.guild.id] = {
    firstsentby: `${newMessage.author.tag}`,
    firstav: newMessage.author.displayAvatarURL(),
    firstdate: Date.now(),
    firstchannel: newMessage.channel.name,
    firstmsg: `${oldMessage.content}`,
}}
  bot.editsnipe[newMessage.guild.id] = {
    firstsentby: `${newMessage.author.tag}`,
    firstav: newMessage.author.displayAvatarURL(),
    firstdate: Date.now(),
    firstchannel: newMessage.channel.name,
    firstmsg: `${oldMessage.content}`,
}
});

bot.on("messageDelete", async messageDelete => {
  if (messageDelete.channel.type === "dm")return;
  let botuser = messageDelete.guild.members.cache.get("723061621991276574");
  if(!botuser.hasPermission("ADMINISTRATOR"))return;
  if (messageDelete.author.bot) return;
  if (serverset[messageDelete.guild.id].deletedmsgschannel !== "None"){
let logs = messageDelete.guild.channels.cache.get(serverset[messageDelete.guild.id].deletedmsgschannel);
  let Message = new Discord.MessageEmbed()
    .setAuthor(`${messageDelete.author.tag} (${messageDelete.author.id})`,`${messageDelete.author.displayAvatarURL()}`)
    .setDescription(`${messageDelete.content}`)
    .setFooter(`${messageDelete.channel.name}`)
    .setColor("#32EBE8")
    .setTimestamp(new Date());
  if(messageDelete.content.length < 3)return;
  if(logs)logs.send(Message).catch(O_o => {});
}
if(!bot.offed[`${messageDelete.guild.id}, ${messageDelete.author.id}`]){
  bot.offed[`${messageDelete.guild.id}, ${messageDelete.author.id}`] = {
    offed: 0
}}

if (bot.offed[`${messageDelete.guild.id}, ${messageDelete.author.id}`].offed == 1)return
if (messageDelete.guild.id === "691301384133410867"){
   if (messageDelete.content.toLowerCase().includes(`discord.gg/`))return;
}
if(!bot.snipe[messageDelete.guild.id]){
bot.snipe[messageDelete.guild.id] = {
  thirdsentby: messageDelete.author.tag,
  thirdav: messageDelete.author.displayAvatarURL(),
  thirddate: Date.now(),
  thirdchannel: messageDelete.channel.name,
  thirdmsg: "None",

  secondsentby: messageDelete.author.tag,
  secondav: messageDelete.author.displayAvatarURL(),
  seconddate: Date.now(),
  secondchannel: messageDelete.channel.name,
  secondmsg: "None",
  
  firstsentby: messageDelete.author.tag,
  firstav: messageDelete.author.displayAvatarURL(),
  firstdate: Date.now(),
  firstchannel: messageDelete.channel.name,
  firstmsg: messageDelete.content,
}}
bot.snipe[messageDelete.guild.id] = {
  thirdsentby: bot.snipe[messageDelete.guild.id].secondsentby,
  thirdav: bot.snipe[messageDelete.guild.id].secondav,
  thirddate: bot.snipe[messageDelete.guild.id].seconddate,
  thirdchannel: bot.snipe[messageDelete.guild.id].secondchannel,
  thirdmsg: bot.snipe[messageDelete.guild.id].secondmsg,
  secondsentby: bot.snipe[messageDelete.guild.id].firstsentby,
  secondav: bot.snipe[messageDelete.guild.id].firstav,
  seconddate: bot.snipe[messageDelete.guild.id].firstdate,
  secondchannel: bot.snipe[messageDelete.guild.id].firstchannel,
  secondmsg: bot.snipe[messageDelete.guild.id].firstmsg,
  firstsentby: `${messageDelete.author.tag}`,
  firstav: messageDelete.author.displayAvatarURL(),
  firstdate: Date.now(),
  firstchannel: messageDelete.channel.name,
  firstmsg: `${messageDelete.content}`,
}


});

/*bot.on('voiceStateUpdate', (oldState, newState) => {
let guildid = bot.guilds.cache.get("691301384133410867");
  let newUserChannel = oldState.channel;
  let oldUserChannel = oldState.channel;
  let logs = guildid.channels.cache.find(ch => ch.name === "logs_channel");
  if (oldUserChannel === undefined && newUserChannel !== undefined) {
    let join = new Discord.MessageEmbed()
      .setAuthor(`${newState.user.tag}`, `${newState.user.displayAvatarURL()}`)
      .setDescription(
        `**<@${oldState}> joined voice channel \`#${newUserChannel.name}\`**`
      )
      .setFooter("Arlo")
      .setColor("#32EBE8")
      .setTimestamp(new Date());
    if (!logs) return;
    logs.send(join);
  } else if (newUserChannel === undefined) {
    let leave = new Discord.MessageEmbed()
      .setAuthor(`${newState.user.tag}`, `${newState.user.displayAvatarURL()}`)
      .setDescription(
        `**<@${newState.id}> left voice channel \`#${oldUserChannel.name}\`**`
      )
      .setFooter("Arlo")
      .setColor("#32EBE8")
      .setTimestamp(new Date());
    if (!logs) return;
    logs.send(leave);
  } else {
    let channelSwitch = new Discord.MessageEmbed()
      .setAuthor(`${newState.tag}`, `${newState.displayAvatarURL()}`)
      .setDescription(
        `**<@${newState.id}> switched voice channel \`#${oldUserChannel.name}\` -> \`#${newUserChannel.name}\`**`
      )
      .setFooter("Arlo")
      .setColor("#32EBE8")
      .setTimestamp(new Date());
    if (!logs) return;
    logs.send(channelSwitch);
  }
});*/

bot.on("message", async message => {
 //if (message.author.id != "290536979110690816")return;  

  if(message.channel.type === "dm"){
    if(message.content.toLowerCase().includes(`confess`) && !message.content.toLowerCase().startsWith(`.`)){const missingAfrgsEmbed = new Discord.MessageEmbed() // Creates the embed thats sent if the command isnt run right
      .setColor("#000000")
      .setTitle("Missing Arguments !")
      .setDescription("Usage: confess [ServerID] [Confesstion text]\n\n**Example:** \`.confess 691301384133410867 Hey everyone im actually gay\`")
     return message.channel.send(missingAfrgsEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})}
    if(message.content.toLowerCase().startsWith(`.confess`)){
    if (message.author.bot) return;
    let messageAreray = message.content.split(" ");
  let acrgs = message.content.slice(1).split(/ +/);
    let commandNamee = acrgs[0].toLowerCase();
    const command = bot.commands.get(commandNamee) || bot.commands.find(ddcmd => ddcmd.aliases && ddcmd.aliases.includes(commandNamee));
      if (command) command.run(bot, message, messageAreray.slice(1));
    } else{
      if (message.author.bot)return;
      let randomwordds = ["Hey bae wsg","use .confess if you trynna confess","yoo","ok lol","ur cute aren't you ?","ur so pretty","can i give you head rq :see_no_evil:","i just wanna say ilyyyyy","wsg daddy <a:ynvpplohcmon:706206645591474277>", "hi daddy :heart_eyes:","<a:ynvpplohcmon:706206645591474277>","so like uhm wanna esex <a:ynvpplohcmon:706206645591474277> ?","ur funny ngl","ily lol...","sleep call bb ?","send pics pls..","bb ur too thick","mwah"]
      let resultrp = randomwordds[Math.floor(Math.random() * randomwordds.length)];
      message.channel.send(resultrp).catch(O_o => {})
      return;
    }
  }
  if(message.webhookID)return;
  if(message.channel.type === "dm")return;
  if (!adminlevel[message.guild.id]){
    adminlevel[message.guild.id] = {
      lvl1: "None",
      lvl2: "None",
      lvl3: "None",
      lvl4: "None"
  }
  fs.writeFile("./storage/adminlevel.json", JSON.stringify(adminlevel), (err) => {
    if(err) console.log(err)})
  }
  if(!bot.editsnipe[message.guild.id]){
    bot.editsnipe[message.guild.id] = {
      firstsentby: `${message.author.tag}`,
      firstav: message.author.displayAvatarURL(),
      firstdate: Date.now(),
      firstchannel: message.channel.name,
      firstmsg: "None",
  }}
  if(!bot.snipe[message.guild.id]){
    bot.snipe[message.guild.id] = {
      thirdsentby: message.author.tag,
      thirdav: message.author.displayAvatarURL(),
      thirddate: Date.now(),
      thirdchannel: message.channel.name,
      thirdmsg: "None",
    
      secondsentby: message.author.tag,
      secondav: message.author.displayAvatarURL(),
      seconddate: Date.now(),
      secondchannel: message.channel.name,
      secondmsg: "None",
      
      firstsentby: message.author.tag,
      firstav: message.author.displayAvatarURL(),
      firstdate: Date.now(),
      firstchannel: message.channel.name,
      firstmsg: "None",
    }}
  if (!currencylogs[message.author.id]){
    currencylogs[message.author.id] = {
      coins: 0,
      bank: 0,
      fish: 0,
      weed: 0,
      rings: 0,
      daily: 86400 * 1000,
      weekly: 604800000,
      reps: 0,
      reptime: 86400 * 1000,
      work: 600000,
      shipname: "Not set yet",
      shipnc: 0,
      bio: "None",
      hourly: 3600 * 1000,
    monthly: 2628000 * 1000,
    prefix: "None"
  }
  fs.writeFile("./storage/currencylogs.json", JSON.stringify(currencylogs), (err) => {
    if(err) console.log(err)})
  }
  if(!serverset[message.guild.id]) {//
    serverset[message.guild.id] = {
      welcomechannel: "None",
      chatgameschannel: "None",
      membercountmessage: "members :",
      deletedmsgschannel: "None",
      membercount: "None",
      membermodulechannel: "None",
      stafflogschannel: "None",
      welcomemsg: "Hey, Welcome to the server",
      inviteschannel: "None",
    leaveschannel: "None",
      prefix: ".",
      altsprotection: "OFF"
  }
  fs.writeFile("./storage/serverset.json", JSON.stringify(serverset), (err) => {
    if(err) console.log(err)})
} 

  let cmd = message.content.toLowerCase();
  if (message.content.toLowerCase().startsWith(`.myprefix`)){
    let args = message.content.slice(10).split(/ +/);
   let newargs = args[0].toLowerCase();
   if(!newargs) return message.reply("Invalid input !")
   if(newargs.includes("."))return message.reply("Invalid input ! that connot be your personal prefix")
   if(newargs.includes("`"))return message.reply("Invalid input ! that connot be your personal prefix")
   if(newargs == serverset[message.guild.id].prefix)return message.reply("Invalid input ! your personal prefix cannot be similar to the server prefix !")
   if(newargs.length > 10)return message.reply("Invalid input ! your new prefix cannot contain longer than 10 characters")
   currencylogs[message.author.id] = {
    coins: currencylogs[message.author.id].coins,
    bank: currencylogs[message.author.id].bank,
    fish: currencylogs[message.author.id].fish,
    weed: currencylogs[message.author.id].weed,
    rings: currencylogs[message.author.id].rings,
    daily: currencylogs[message.author.id].daily,
    weekly: currencylogs[message.author.id].weekly,
    reps: currencylogs[message.author.id].reps,
    reptime: currencylogs[message.author.id].reptime,
    work: currencylogs[message.author.id].work,
    shipname: currencylogs[message.author.id].shipname,
    shipnc: currencylogs[message.author.id].shipnc,
    bio: currencylogs[message.author.id].bio,
    hourly: currencylogs[message.author.id].hourly,
      monthly: currencylogs[message.author.id].monthly,
      prefix: newargs,
  }
  fs.writeFile("./storage/currencylogs.json", JSON.stringify(currencylogs), (err) => {
  if(err) console.log(err)})
   return message.channel.send(embed = new Discord.MessageEmbed()
  .setColor(`#f76ff1`)
  .setAuthor("Personal prefix changed !", message.author.displayAvatarURL())
  .setDescription(`Your personal prefix has been changed to ${newargs} `))
   }
   if (currencylogs[message.author.id].prefix == serverset[message.guild.id].prefix){
    return message.channel.send(`Your prefix ${currencylogs[message.author.id].prefix} cannot be similar to the server prefix
    type \`.prefix NewPrefix\` to change it`)
  }
 
    let botuser = message.guild.members.cache.get("723061621991276574");
  if(!botuser.hasPermission("SEND_MESSAGES") || !botuser.hasPermission("EMBED_LINKS")){
    if (cmd == `<@723061621991276574>`){ 
      message.member.send(`I need admin permission inorder to type in ${message.guild.name} !`).catch(O_o => {});  
      return
    };
  }
  
  if(!bot.offed[`${message.guild.id}, ${message.author.id}`]){
    bot.offed[`${message.guild.id}, ${message.author.id}`] = {
      offed: 0
  }}
  if (bot.offed[`${message.guild.id}, ${message.author.id}`].offed == 1){
// setTimeout(() => { 
message.delete().catch(O_o => {});//}, 70);
return;
};

if (!message.author.bot){
  if(message.channel.id === "720074827561566289" || message.channel.id === "720074709558886460" || message.channel.id === "705129008559423539"){
  if (message.author.bot) return;
const talkedddd = new Discord.MessageEmbed()
    .setColor(`#f76ff1`)
    .setAuthor(" |  This channel is for selfies only !", message.author.displayAvatarURL());
if(message.attachments.size < 1 && !message.member.roles.cache.has(adminlevel[message.guild.id].lvl1) && !message.member.roles.cache.has(adminlevel[message.guild.id].lvl2) && !message.member.roles.cache.has(adminlevel[message.guild.id].lvl3) && !message.member.roles.cache.has(adminlevel[message.guild.id].lvl4) && !message.member.hasPermission("ADMINISTRATOR")){
message.channel.send(talkedddd).catch(e =>  message.channel.send(e)).catch(O_o => {}).then(msg => {
      setTimeout(() => {
        msg.delete().catch(e =>  message.channel.send(e)).catch(O_o => {})
      }, 8000 * 2);
    });
setTimeout(() => {message.delete().catch(O_o => {});}, 8000 * 2);
  return;
}
if(message.attachments.size > 0){ 
await message.react("706263905550336050");
 }
}
  
  

    
    if(!confession[message.guild.id]) {
      confession[message.guild.id] = {
        confession: 0,
        confch: "None"
      }
      fs.writeFile("./storage/confession.json", JSON.stringify(confession), (err) => {
        if(err) console.log(err)})
    } 
     
      
        if(!premiumserver[message.guild.id]) {
          premiumserver[message.guild.id] = {
              premiumserver: 0
          }
          fs.writeFile("./storage/premiumserver.json", JSON.stringify(premiumserver), (err) => {
            if(err) console.log(err)})
       }
       
        if (!afklogs[`${message.guild.id}, ${message.author.id}`]){
          afklogs[`${message.guild.id}, ${message.author.id}`] = {
            isafk: 0,
            afknick: message.author.username,
            afkmsg: "None",
            afkdate: Date.now()
          }
        }
    if(afklogs[`${message.guild.id}, ${message.author.id}`].isafk > 0) {
      afklogs[`${message.guild.id}, ${message.author.id}`] = {
            isafk: 0,
            afknick: afklogs[`${message.guild.id}, ${message.author.id}`].afknick,
            afkmsg: afklogs[`${message.guild.id}, ${message.author.id}`].afkmsg,
            afkdate: afklogs[`${message.guild.id}, ${message.author.id}`].afkdate
      }
    let gonefor = afklogs[`${message.guild.id}, ${message.author.id}`].afkdate;
    let time = ms(Date.now() - gonefor);
      message.channel.send(`Welcome back <@${message.author.id}>, You are no longer AFK -  "${afklogs[`${message.guild.id}, ${message.author.id}`].afkmsg}"\n*You have been gone for ${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s*`).catch(e =>  message.channel.send(e)).catch(O_o => {}).then(msg => {
        setTimeout(() => {msg.delete() }, 10000);
      });
      if (message.member.bannable){
      let user = message.member
  await user
    .setNickname(`${afklogs[`${message.guild.id}, ${message.author.id}`].afknick}`).catch(O_o => {})
  }
  }
  fs.writeFile("./storage/afklogs.json", JSON.stringify(afklogs), (err) => {
    if(err) console.log(err)})
    
    

    let mentionedafk = message.mentions.members.first()
        if (mentionedafk){
          if (!afklogs[`${message.guild.id}, ${mentionedafk.user.id}`]){
            afklogs[`${message.guild.id}, ${mentionedafk.user.id}`] = {
              isafk: 0,
              afknick: message.author.username,
              afkmsg: "None",
              afkdate: Date.now()
            }
          }
            fs.writeFile("./storage/afklogs.json", JSON.stringify(afklogs), (err) => {
              if(err) console.log(err)})
        if(afklogs[`${message.guild.id}, ${mentionedafk.user.id}`].isafk > 0){
          let afkreaseon = afklogs[`${message.guild.id}, ${mentionedafk.user.id}`].afkmsg;
          let afkreaseoezn = afklogs[`${message.guild.id}, ${mentionedafk.user.id}`].afkdate;
           let time = ms(Date.now() - afkreaseoezn);
          message.channel.send(`${mentionedafk.user.username} is AFK, ${afkreaseon} -  ${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s ago`);
        };
      };

      if (!marriagelogs[message.author.id]){
      marriagelogs[message.author.id] = {
        marry: "None",
        marprop: 0,
        marrypropname: 0,
        marrysince: 0,
    }
    fs.writeFile("./storage/marriagelogs.json", JSON.stringify(marriagelogs), (err) => {
      if(err) console.log(err)})}
      
      if(!bot.antiraid[message.guild.id]){
        bot.antiraid[message.guild.id] = {
          antiraid: 0
      }}
      if(!chatgameslogs[message.guild.id]){
        chatgameslogs[message.guild.id] = {
          pingevent: 0,
          pingeventuser: 0,
          pingeventaction: 0,
          peventamount: 0,
          wordsevent: 0,
          wordseventword: 0,
          wordseventamount: 0,
          
      }}
      

      if(!cmsgs[message.author.id]) {
        cmsgs[message.author.id] = {
          cmsgs: 1
        }
    }
    
    cmsgs[message.author.id] = {
      cmsgs: cmsgs[message.author.id].cmsgs + 1
  };




      let messagefetch = cmsgs[message.author.id].cmsgs;
   
    let messagesss;

  let fulled = Math.floor(Math.random() * 150);
if (messagefetch == fulled) messagesss = 1; 
if(chatgameslogs[message.guild.id].pingevent == 1){ 
  setTimeout(() => {
    chatgameslogs[message.guild.id] = {
      pingevent: 0,
      pingeventuser: 0,
      pingeventaction: 0,
      peventamount: 0,
      wordsevent: chatgameslogs[message.guild.id].wordsevent,
      wordseventword: chatgameslogs[message.guild.id].wordseventword,
      wordseventamount: chatgameslogs[message.guild.id].wordseventamount,
      
  }
  }, 80000);
}
if(chatgameslogs[message.guild.id].wordsevent == 1){ 
  setTimeout(() => {
    chatgameslogs[message.guild.id] = {
      pingevent: chatgameslogs[message.guild.id].pingevent,
      pingeventuser: chatgameslogs[message.guild.id].pingeventuser,
      pingeventaction: chatgameslogs[message.guild.id].pingeventaction,
      peventamount: chatgameslogs[message.guild.id].peventamount,
      wordsevent: 0,
      wordseventword: 0,
      wordseventamount: 0, 
  }
  }, 80000);
}

if(message.channel.id == serverset[message.guild.id].chatgameschannel) {

    if (!isNaN(messagesss)){
      let amountt = Math.floor(Math.random() * 501) + 140;
      messagesss = 0;
     let amount = parseInt(amountt, 10);
    let amount2 = parseInt(currencylogs[message.author.id].coins, 10);
    currencylogs[message.author.id] = {
      coins: amount2 + amount,
      bank: currencylogs[message.author.id].bank,
      fish: currencylogs[message.author.id].fish,
      weed: currencylogs[message.author.id].weed,
      rings: currencylogs[message.author.id].rings,
      daily: currencylogs[message.author.id].daily,
      weekly: currencylogs[message.author.id].weekly,
      reps: currencylogs[message.author.id].reps,
      reptime: currencylogs[message.author.id].reptime,
      work: currencylogs[message.author.id].work,
      shipname: currencylogs[message.author.id].shipname,
      shipnc: currencylogs[message.author.id].shipnc,
      bio: currencylogs[message.author.id].bio,
      hourly: currencylogs[message.author.id].hourly,
        monthly: currencylogs[message.author.id].monthly,
        prefix: currencylogs[message.author.id].prefix,
  }
  fs.writeFile("./storage/currencylogs.json", JSON.stringify(currencylogs), (err) => {
    if(err) console.log(err)})
    message.channel.send(`Congratulations ${message.author.username}, You just got \`${amount}\` coins`)

    cmsgs[message.author.id] = {
      cmsgs: 0
  };

     if(chatgameslogs[message.guild.id].wordsevent == 0){ 
     setTimeout(() => {
      
       let result = randomwords[Math.floor(Math.random() * randomwords.length)];
       let amountev = Math.floor(Math.random() * 2000) + 8000;
        chatgameslogs[message.guild.id] = {
          pingevent: chatgameslogs[message.guild.id].pingevent,
          pingeventuser: chatgameslogs[message.guild.id].pingeventuser,
          pingeventaction: chatgameslogs[message.guild.id].pingeventaction,
          peventamount: chatgameslogs[message.guild.id].peventamount,
          wordsevent: 1,
          wordseventword: result,
          wordseventamount: amountev, 
      }
       message.channel.send(`__**Quick event !**__\nWhoever types \`${result}\` first in chat wins **$${amountev}**!`)
      }, 15000);
} 
if(chatgameslogs[message.guild.id].pingevent == 0){ 
  setTimeout(() => {
    let randomping = message.guild.members.cache.random();
    let amountpev = Math.floor(Math.random() * 2000) + 8000;
    let randomwordsrp = [`kisses`, `hugs`, `spanks`, `gives head to`,`fucks`]
let resultrp = randomwordsrp[Math.floor(Math.random() * randomwordsrp.length)];
if(resultrp.includes(`kisses`)) pingeventaction = "kiss";
if(resultrp.includes(`hugs`)) pingeventaction = "hug";
if(resultrp.includes(`spanks`)) pingeventaction = "spank";
if(resultrp.includes(`fucks`)) pingeventaction = "fuck";
if(resultrp.includes(`gives head to`)) pingeventaction = "bj";


   message.channel.send("<a:nvcount5:733834394409631856>").catch(e =>  message.channel.send(e)).catch(O_o => {}).then(msg => {
    setTimeout(() => {
      chatgameslogs[message.guild.id] = {
        pingevent: 1,
        pingeventuser: randomping.id,
        pingeventaction: pingeventaction,
        peventamount: amountpev,
        wordsevent: chatgameslogs[message.guild.id].wordsevent,
        wordseventword: chatgameslogs[message.guild.id].wordseventword,
        wordseventamount: chatgameslogs[message.guild.id].wordseventamount,   
    }
      msg.edit(`<:NVgodsaid:875744189533532191>`).catch(e =>  message.channel.send(e)).catch(O_o => {})
      message.channel.send(`__**Random ping event !**__\nWhoever ${resultrp} <@${randomping.user.id}> first wins **$${amountpev}** !`);
    
    }, 4700);});
}, 40000);
}
};
  };

if (cmd == `.rpevent`){
  if(!message.member.roles.cache.has(adminlevel[message.guild.id].lvl2) && !message.member.roles.cache.has(adminlevel[message.guild.id].lvl3) && !message.member.roles.cache.has(adminlevel[message.guild.id].lvl4) && !message.member.hasPermission("ADMINISTRATOR"))
  return message.channel.send(`You do not have permission to use that command !`).catch(e =>  message.channel.send(e)).catch(O_o => {})  
  let embedps = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`This command can only be used in premium servers !\nclick [here](https://discord.gg/nirvana) to donate and enjoy premium nirvana features !`);
  //if(premiumserver[message.guild.id].premiumserver == 0)return message.channel.send(embedps).catch(e =>  message.channel.send(e)).catch(O_o => {})
      
    let result = randomwords[Math.floor(Math.random() * randomwords.length)];
    let amountev = Math.floor(Math.random() * 2000) + 8000;
     chatgameslogs[message.guild.id] = {
       pingevent: chatgameslogs[message.guild.id].pingevent,
       pingeventuser: chatgameslogs[message.guild.id].pingeventuser,
       pingeventaction: chatgameslogs[message.guild.id].pingeventaction,
       peventamount: chatgameslogs[message.guild.id].peventamount,
       wordsevent: 1,
       wordseventword: result,
       wordseventamount: amountev, 
   }
    message.channel.send(`__**Quick event !**__\nWhoever types \`${result}\` first in chat wins **$${amountev}**!`);
 setTimeout(() => {
   chatgameslogs[message.guild.id] = {
     pingevent: chatgameslogs[message.guild.id].pingevent,
     pingeventuser: chatgameslogs[message.guild.id].pingeventuser,
     pingeventaction: chatgameslogs[message.guild.id].pingeventaction,
     peventamount: chatgameslogs[message.guild.id].peventamount,
     wordsevent: 0,
     wordseventword: 0,
     wordseventamount: 0, 
 }}, 15000);  
   return;
}
  };

  let mentionedd = message.mentions.members.first()
  if (mentionedd){
    if (!marriagelogs[mentionedd.user.id]){
      marriagelogs[mentionedd.user.id] = {
        marry: "None",
        marprop: 0,
        marrypropname: 0,
        marrysince: 0,
    }
    fs.writeFile("./storage/marriagelogs.json", JSON.stringify(marriagelogs), (err) => {
      if(err) console.log(err)})}
      if (!currencylogs[mentionedd.user.id]){
        currencylogs[mentionedd.user.id] = {
          coins: 0,
          bank: 0,
          fish: 0,
          weed: 0,
          rings: 0,
          daily: 86400 * 1000,
          weekly: 604800000,
          reps: 0,
          reptime: 86400 * 1000,
          work: 600000,
          shipname: "Not set yet",
          shipnc: 0,
          bio: "None",
          hourly: 3600 * 1000,
        monthly: 2628000 * 1000,
        prefix: "None"
      }
      fs.writeFile("./storage/currencylogs.json", JSON.stringify(currencylogs), (err) => {
        if(err) console.log(err)})
      }
  }
    if(!chatgameslogs[message.guild.id]){
      chatgameslogs[message.guild.id] = {
        pingevent: 0,
        pingeventuser: 0,
        pingeventaction: 0,
        peventamount: 0,
        wordsevent: 0,
        wordseventword: 0,
        wordseventamount: 0,
        
    }}
  if (mentionedd == chatgameslogs[message.guild.id].pingeventuser){
    const array = [currencylogs[message.author.id].prefix, "nir",serverset[message.guild.id].prefix, "<@723061621991276574>", "<@723061621991276574> "];//
    for (let i = 0; i < array.length; i++) {
      const index = array[i];
    if (message.content.toLowerCase().startsWith(`${index}blowjob`) && chatgameslogs[message.guild.id].pingeventaction === "bj" && !message.content.toLowerCase().includes(`whoever`) && !message.content.toLowerCase().includes(`first`)){ 
      if(chatgameslogs[message.guild.id].pingevent == 1){ 
        let amount22 = parseInt(currencylogs[message.author.id].coins, 10);
        let amountyy2 = parseInt(chatgameslogs[message.guild.id].peventamount, 10);
        chatgameslogs[message.guild.id] = {
          pingevent: 0,
          pingeventuser: chatgameslogs[message.guild.id].pingeventuser,
          pingeventaction: chatgameslogs[message.guild.id].pingeventaction,
          peventamount: chatgameslogs[message.guild.id].peventamount,
          wordsevent: chatgameslogs[message.guild.id].wordsevent,
          wordseventword: chatgameslogs[message.guild.id].wordseventword,
          wordseventamount: chatgameslogs[message.guild.id].wordseventamount, 
      }
        setTimeout(() => {
        message.channel.send(`Congratulations <@${message.author.id}> you were the first to give head to __${mentionedd.user.tag}__ and won $${chatgameslogs[message.guild.id].peventamount} !`)

        currencylogs[message.author.id] = {
          coins: amount22 + amountyy2,
          bank: currencylogs[message.author.id].bank,
          fish: currencylogs[message.author.id].fish,
          weed: currencylogs[message.author.id].weed,
          rings: currencylogs[message.author.id].rings,
          daily: currencylogs[message.author.id].daily,
          weekly: currencylogs[message.author.id].weekly,
          reps: currencylogs[message.author.id].reps,
          reptime: currencylogs[message.author.id].reptime,
          work: currencylogs[message.author.id].work,
          shipname: currencylogs[message.author.id].shipname,
          shipnc: currencylogs[message.author.id].shipnc,
          bio: currencylogs[message.author.id].bio,
          hourly: currencylogs[message.author.id].hourly,
            monthly: currencylogs[message.author.id].monthly,
            prefix: currencylogs[message.author.id].prefix,
      }
      fs.writeFile("./storage/currencylogs.json", JSON.stringify(currencylogs), (err) => {
        if(err) console.log(err)})
        }, 900);
        };
      };
      
if (message.content.toLowerCase().startsWith(`${index}${chatgameslogs[message.guild.id].pingeventaction} `) && !message.content.toLowerCase().includes(`whoever`) && !message.content.toLowerCase().includes(`first`)){ 
  if(chatgameslogs[message.guild.id].pingevent == 1){ 
    let amount22 = parseInt(currencylogs[message.author.id].coins, 10);
    let amountyy2 = parseInt(chatgameslogs[message.guild.id].peventamount, 10);
    chatgameslogs[message.guild.id] = {
      pingevent: 0,
      pingeventuser: chatgameslogs[message.guild.id].pingeventuser,
      pingeventaction: chatgameslogs[message.guild.id].pingeventaction,
      peventamount: chatgameslogs[message.guild.id].peventamount,
      wordsevent: chatgameslogs[message.guild.id].wordsevent,
      wordseventword: chatgameslogs[message.guild.id].wordseventword,
      wordseventamount: chatgameslogs[message.guild.id].wordseventamount, 
  } 
    setTimeout(() => {
    
    currencylogs[message.author.id] = {
      coins: amount22 + amountyy2,
      bank: currencylogs[message.author.id].bank,
      fish: currencylogs[message.author.id].fish,
      weed: currencylogs[message.author.id].weed,
      rings: currencylogs[message.author.id].rings,
      daily: currencylogs[message.author.id].daily,
      weekly: currencylogs[message.author.id].weekly,
      reps: currencylogs[message.author.id].reps,
      reptime: currencylogs[message.author.id].reptime,
      work: currencylogs[message.author.id].work,
      shipname: currencylogs[message.author.id].shipname,
      shipnc: currencylogs[message.author.id].shipnc,
      bio: currencylogs[message.author.id].bio,
      hourly: currencylogs[message.author.id].hourly,
        monthly: currencylogs[message.author.id].monthly,
        prefix: currencylogs[message.author.id].prefix,
  }
  fs.writeFile("./storage/currencylogs.json", JSON.stringify(currencylogs), (err) => {
    if(err) console.log(err)})
    message.channel.send(`Congratulations <@${message.author.id}> you were the first to ${chatgameslogs[message.guild.id].pingeventaction} __${mentionedd.user.tag}__ and won $${chatgameslogs[message.guild.id].peventamount} !`)
  }, 900);
    };
  }};
  };

if (cmd == chatgameslogs[message.guild.id].wordseventword){ 
  if(chatgameslogs[message.guild.id].wordsevent == 1){
  message.channel.send(`Congratulations <@${message.author.id}> you were the first to type \`${chatgameslogs[message.guild.id].wordseventword}\` and won $${chatgameslogs[message.guild.id].wordseventamount} !`).catch(e =>  message.channel.send(e)).catch(O_o => {})
  let amount2 = parseInt(currencylogs[message.author.id].coins, 10);
  let amountyy = parseInt(chatgameslogs[message.guild.id].wordseventamount, 10);
  currencylogs[message.author.id] = {
    coins: amount2 + amountyy,
    bank: currencylogs[message.author.id].bank,
    fish: currencylogs[message.author.id].fish,
    weed: currencylogs[message.author.id].weed,
    rings: currencylogs[message.author.id].rings,
    daily: currencylogs[message.author.id].daily,
    weekly: currencylogs[message.author.id].weekly,
    reps: currencylogs[message.author.id].reps,
    reptime: currencylogs[message.author.id].reptime,
    work: currencylogs[message.author.id].work,
    shipname: currencylogs[message.author.id].shipname,
    shipnc: currencylogs[message.author.id].shipnc,
    bio: currencylogs[message.author.id].bio,
    hourly: currencylogs[message.author.id].hourly,
        monthly: currencylogs[message.author.id].monthly,
        prefix: currencylogs[message.author.id].prefix,
}
fs.writeFile("./storage/currencylogs.json", JSON.stringify(currencylogs), (err) => {
  if(err) console.log(err)})
chatgameslogs[message.guild.id] = {
  pingevent: chatgameslogs[message.guild.id].pingevent,
  pingeventuser: chatgameslogs[message.guild.id].pingeventuser,
  pingeventaction: chatgameslogs[message.guild.id].pingeventaction,
  peventamount: chatgameslogs[message.guild.id].peventamount,
  wordsevent: 0,
  wordseventword: 0,
  wordseventamount: 0, 
}
      };
};

if(!bot.imageslogs[message.guild.id]){
  bot.imageslogs[message.guild.id] = {
    results: "None",
    resultslength: 0,
    imagesearcher: "None",
    currentpage: 0,
    imagechannel: "None",
    msgid: 0,
}}
if(cmd == "n" || cmd == "next"){
  if(!bot.imageslogs[message.guild.id].results !== "None" && message.channel.id == bot.imageslogs[message.guild.id].imagechannel && message.author.id == bot.imageslogs[message.guild.id].imagesearcher && bot.imageslogs[message.guild.id].resultslength > bot.imageslogs[message.guild.id].currentpage){
    let searchpage = parseInt(bot.imageslogs[message.guild.id].currentpage, 10) + 1;
    let searchresults = bot.imageslogs[message.guild.id].results;
    let index = searchresults[searchpage];
      bot.imageslogs[message.guild.id] = {
        results: bot.imageslogs[message.guild.id].results,
        resultslength: bot.imageslogs[message.guild.id].resultslength,
        imagesearcher: bot.imageslogs[message.guild.id].imagesearcher,
        currentpage: searchpage,
        imagechannel: bot.imageslogs[message.guild.id].imagechannel,
        msgid: bot.imageslogs[message.guild.id].msgid
    }
message.delete();
avEmbed = new Discord.MessageEmbed()
   .setThumbnail(index.thumbnail)
   .setImage(index.url)
  .setDescription(index.snippet)
  .setFooter(`Search page ${searchpage}/${bot.imageslogs[message.guild.id].resultslength} | Requested by ${message.author.tag}`)
  message.channel.messages.fetch(bot.imageslogs[message.guild.id].msgid).then(msg => msg.edit(avEmbed));
  return
}
 }
 if(cmd == "b" || cmd == "back"){
  if(!bot.imageslogs[message.guild.id].results !== "None" && message.channel.id == bot.imageslogs[message.guild.id].imagechannel && message.author.id == bot.imageslogs[message.guild.id].imagesearcher && bot.imageslogs[message.guild.id].currentpage > 1){
    let searchpage = parseInt(bot.imageslogs[message.guild.id].currentpage, 10) - 1;
    let searchresults = bot.imageslogs[message.guild.id].results;
      let index = searchresults[searchpage];
      bot.imageslogs[message.guild.id] = {
        results: bot.imageslogs[message.guild.id].results,
        resultslength: bot.imageslogs[message.guild.id].resultslength,
        imagesearcher: bot.imageslogs[message.guild.id].imagesearcher,
        currentpage: searchpage,
        imagechannel: bot.imageslogs[message.guild.id].imagechannel,
        msgid: bot.imageslogs[message.guild.id].msgid
    }
message.delete();
avEmbed = new Discord.MessageEmbed()
   .setThumbnail(index.thumbnail)
   .setImage(index.url)
  .setDescription(index.snippet)
  .setFooter(`Search page ${searchpage}/${bot.imageslogs[message.guild.id].resultslength} | Requested by ${message.author.tag}`)
  message.channel.messages.fetch(bot.imageslogs[message.guild.id].msgid).then(msg => msg.edit(avEmbed));
  return
}
 }
   
  if (cmd == `nah` || cmd == `no` || cmd == `reject` || cmd == `nope` || cmd == `na`){ 

    if(marriagelogs[message.author.id].marprop == 2) {
      let husband = marriagelogs[message.author.id].marrypropname;
      message.channel.send(`<@${husband}>, ${message.author.username} has rejected marriage proposal :pensive: !\nSucks to be you lol`);
      marriagelogs[husband] = {
        marry: "None",
        marprop: 0,
        marrypropname: 0,
        marrysince: 0,
    }
    marriagelogs[message.author.id] = {
        marry: "None",
        marprop: 0,
        marrypropname: 0,
        marrysince: 0,
    }
    fs.writeFile("./storage/marriagelogs.json", JSON.stringify(marriagelogs), (err) => {
      if(err) console.log(err)})
    };
  };
  if (cmd == `yes` || cmd == `accept` ||cmd == `yep` || cmd == `yea` || cmd == `yeah` || cmd == `ofc` || cmd == `ofcourse` || cmd == `i accept`){ 

    if(marriagelogs[message.author.id].marprop == 2) {
      let husband = marriagelogs[message.author.id].marrypropname;
      message.channel.send(`__**Congratulations**__\n ${message.author.username} has accepted <@${husband}>s marriage proposal !\n**I pronounce y'all as a husband and a wife now :partying_face: !**`);
      marriagelogs[husband] = {
        marry: message.author.id,
        marprop: 0,
        marrypropname: 0,
        marrysince: Date.now(),
    }
    marriagelogs[message.author.id] = {
        marry: husband,
        marprop: 0,
        marrypropname: 0,
        marrysince: Date.now(),
    }
    fs.writeFile("./storage/marriagelogs.json", JSON.stringify(marriagelogs), (err) => {
      if(err) console.log(err)})

    let amountrn = parseInt(currencylogs[husband].rings, 10);
    currencylogs[husband] = {
      coins: currencylogs[husband].coins,
      bank: currencylogs[husband].bank,
      fish: currencylogs[husband].fish,
      weed: currencylogs[husband].weed,
      rings: amountrn - 2,
      daily: currencylogs[husband].daily,
      weekly: currencylogs[husband].weekly,
      reps: currencylogs[husband].reps,
      reptime: currencylogs[husband].reptime,
      work: currencylogs[husband].work,
      shipname: currencylogs[husband].shipname,
      shipnc: currencylogs[husband].shipnc,
      bio: currencylogs[husband].bio,
      hourly: currencylogs[husband].hourly,
      monthly: currencylogs[husband].monthly,
      prefix: currencylogs[husband].prefix,
  }
  fs.writeFile("./storage/currencylogs.json", JSON.stringify(currencylogs), (err) => {
    if(err) console.log(err)})

    };
  };


 if (message.guild.id === "691301384133410867"){
 if (message.content.toLowerCase().includes(`nigger`)) {
  setTimeout(() => {
    message.delete().catch(O_o => {})
  }, 500);
  return;
}

/*if (!message.author.bot){
if (message.content.toLowerCase().startsWith("welcome")){ 
  await message.react("764558971011858444");
   };
if (cmd == `welc`){ 
  await message.react("764558971011858444");
   };
   if (cmd == `wlc`){ 
    await message.react("764558971011858444");
     };
if (cmd == `gay`){ 
await message.react("714886639956262993");
 };
}*/}


  if (message.guild.id === "691301384133410867"){
  if (message.content.toLowerCase().includes(`discord.gg/`) && !message.content.toLowerCase().includes(`discord.gg/Casanova`)) {
    if (message.author.id === "723061621991276574")return;
    if (message.author.id !== "290536979110690816") {
    if (message.channel.id === "866318355643105300") return;
    if (message.channel.id === "866318384164765746") return;
    if (message.member.roles.cache.has(adminlevel[message.guild.id].lvl1) || message.member.roles.cache.has(adminlevel[message.guild.id].lvl2) || message.member.roles.cache.has(adminlevel[message.guild.id].lvl3) || message.member.roles.cache.has(adminlevel[message.guild.id].lvl4) || message.member.hasPermission("ADMINISTRATOR"))
    return setTimeout(() => { message.delete().catch(O_o => {});}, 300);
    if (message.author.bot) return setTimeout(() => { message.delete().catch(O_o => {});}, 300);
    let muted = message.guild.roles.cache.find(r => r.name === "NVJail");
    let memberrole = message.guild.roles.cache.find(r => r.name === "𝘔𝘦𝘮𝘣𝘦𝘳");
    
message.member.roles.remove(memberrole);
message.member.roles.add(muted);
if(!jailreason[`${message.guild.id}, ${message.author.id}`]) {
  jailreason[`${message.guild.id}, ${message.author.id}`] = {
    jailreason: "Invite link"
  }
}
jailreason[`${message.guild.id}, ${message.author.id}`] = {
  jailreason: "Invite link"
};
fs.writeFile("./storage/jailreason.json", JSON.stringify(jailreason), (err) => {
  if(err) console.log(err)})
if(!jailrole[`${message.guild.id}, ${message.author.id}`]) {
  jailrole[`${message.guild.id}, ${message.author.id}`] = {
    jailrole: 1
  }
}
jailrole[`${message.guild.id}, ${message.author.id}`] = {
  jailrole: 1
};
fs.writeFile("./storage/jailrole.json", JSON.stringify(jailrole), (err) => {
if(err) console.log(err)
})
if(!jaildate[`${message.guild.id}, ${message.author.id}`]) {
  jaildate[`${message.guild.id}, ${message.author.id}`] = {
    jaildate: Date.now()
  }
}
jaildate[`${message.guild.id}, ${message.author.id}`] = {
  jaildate: Date.now()
};
fs.writeFile("./storage/jaildate.json", JSON.stringify(jaildate), (err) => {
  if(err) console.log(err)
})
const warningddbed = new Discord.MessageEmbed()
    .setColor("#000000")
    .setThumbnail(message.author.displayAvatarURL())
    .setTitle(`You have been jailed in ${message.guild.name}`)
    .addField("Reason", "Sending invite links in chat")
    .setFooter(`Contact a staff member to appeal !`);
    message.member.send(warningddbed).catch(O_o => {});
    if(serverset[message.guild.id].stafflogschannel !== "None") {
    let logscdcd = message.guild.channels.cache.get(serverset[message.guild.id].stafflogschannel);
    const ddddnew = new Discord.MessageEmbed()
    .setColor(`#ff0000`)
    .setDescription(`User **${message.author.tag}**: ID **${message.author.id}** has been automatically jailed for sending invite link(${cmd})`)
    .setFooter(`deleted in ${message.channel.name})`);
    if(logscdcd)logscdcd.send(ddddnew);
    }
    const lewdddes = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`${message.author.username} has been automatically Muted & Jailed for sending an invite link !`);
    message.channel.send(lewdddes).catch(e =>  message.channel.send(e)).catch(O_o => {})
    setTimeout(() => { message.delete().catch(O_o => {});}, 500);
    return;
  }
}}
  
if (cmd == `<@723061621991276574>`){ 
await message.channel.send(`My prefix is \`${serverset[message.guild.id].prefix}\` \`nir\` also use \`nirhelp\` for all commands and \`nirconfig prefix\` to change the prefix !`);
};


  if (message.author.bot) return;
  if (message.channel.type !== "dm"){
  if (!message.member.hasPermission("ADMINISTRATOR")){
  if (message.content.toLowerCase().includes("@everyone")) return;
  if (message.content.toLowerCase().includes("@here")) return;
}}
    const talkedd = new Discord.MessageEmbed()
    .setColor(`#f76ff1`)
    .setAuthor(" |  Please wait a bit before using commands again", message.author.displayAvatarURL());
 
    const array = [currencylogs[message.author.id].prefix, "nir",serverset[message.guild.id].prefix, "<@723061621991276574>", "<@723061621991276574> "];//
    if(!message.content.toLowerCase().startsWith(array[0]) && !message.content.toLowerCase().startsWith(array[1]) && !message.content.toLowerCase().startsWith(array[2]) && !message.content.toLowerCase().startsWith(array[3]) && !message.content.toLowerCase().startsWith(array[4]))return
    if(message.content.toLowerCase().startsWith("None"))return;
    if (talkedRecently.has(message.author.id) && message.content.length > 2)
    return message.channel.send(talkedd).then(msg => {
      setTimeout(() => {
        msg.delete().catch(e =>  message.channel.send(e)).catch(O_o => {})
      }, 4000);
    });
    if(message.content.toLowerCase().startsWith(array[0])) index = currencylogs[message.author.id].prefix;
    if(message.content.toLowerCase().startsWith(array[1])) index = "nir";
    if(message.content.toLowerCase().startsWith(array[2])) index = serverset[message.guild.id].prefix;
    if(message.content.toLowerCase().startsWith(array[3])) index = "<@723061621991276574>";
    if(message.content.toLowerCase().startsWith(array[4])) index = "<@723061621991276574> ";
  let args = message.content.slice(index.length).split(/ +/);
  let commandName = args[0].toLowerCase();
  let argds = message.content.split(" ")
  const command = bot.commands.get(commandName) || bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
  if (!command)return;
  if (command) command.run(bot, message, argds.slice(1));
  if (message.author.id === "290536979110690816") return;
  if (message.content.length < 3)return;
  talkedRecently.add(message.author.id);
  setTimeout(() => {
  talkedRecently.delete(message.author.id);
  }, 2000);
  });
  bot.login(token);
    
    //  message.reply("An error has occured while using this command, please inform the bot developer !")
      //message.channel.createInvite({ maxAge: 0 }).catch(O_o => {}).then(invite => nirbotc.send(`Error in ${message.guild.name}: ${error}\n  \`${invite.code}\``).catch(O_o => {}));
