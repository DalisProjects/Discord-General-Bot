

let discord = require("discord.js");
let serverset = require("../../storage/serverset.json");
let confession = require("../../storage/confession.json");
let premiumserver = require("../../storage/premiumserver.json");
let adminlevel = require("../../storage/adminlevel.json");

const fs = require("fs");


module.exports.run = async (bot, message, args) => {


    let ssssss = args[0];
    let sayMessage = `${ssssss}`;
// let sayMessage = args.slice(0).join(" ").toLowerCase();
  const 𝘮𝘮m𝘶𝘯𝘪𝘵𝘺 = new discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`Only server administrators have permission to use this command`);
 if (!message.member.hasPermission("ADMINISTRATOR") && message.author.id != "290536979110690816")
    return message.channel.send(𝘮𝘮m𝘶𝘯𝘪𝘵𝘺).catch(e =>  message.channel.send(e)).catch(O_o => {})
  const missingArgsEmbed = new discord.MessageEmbed() // Creates the embed thats sent if the command isnt run right
        .setColor(`#000000`)
        .setTitle('Missing Arguments!')
        .setDescription(`Usage: config [Variable] [Option]
\n**__Variables:__** \n\` prefix - confessions - inviteschannel - leaveschannel - adminlevel - welcomechannel - welcomemessage - membermodulechannel - deletedmessages - stafflogs - membercount - membercountmessage - chatgameschannel - altsprotection\``)//chatgames - anti-invites - antiswear - imagesonlychannel
        .setFooter(`Type "OFF" as an option to disable any of these modules`)     
        
  if (!ssssss) return message.channel.send(missingArgsEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})
  if (sayMessage.toLowerCase().includes("setup")) {
    var wcfffec;
if(confession[message.guild.id].confch === "None"){
  wcfffec = "Not set up";
}
else{
  wcfffec = `<#${confession[message.guild.id].confch}>`;
}; 
var invcc;
if(serverset[message.guild.id].inviteschannel === "None"){
  invcc = "Not set up";
}
else{
  invcc = `<#${serverset[message.guild.id].inviteschannel}>`;
};
var lvcc;
if(serverset[message.guild.id].leaveschannel === "None"){
  lvcc = "Not set up";
}
else{
  lvcc = `<#${serverset[message.guild.id].leaveschannel}>`;
};
var wcc;
if(serverset[message.guild.id].welcomechannel === "None"){
  wcc = "Not set up";
}
else{
  wcc = `<#${serverset[message.guild.id].welcomechannel}>`;
}; 
var mmcc;
if(serverset[message.guild.id].membermodulechannel === "None"){
  mmcc = "Not set up";
}
else{
  mmcc = `<#${serverset[message.guild.id].membermodulechannel}>`;
}; 
var ddcc;
if(serverset[message.guild.id].deletedmsgschannel === "None"){
  ddcc = "Not set up";
}
else{
  ddcc = `<#${serverset[message.guild.id].deletedmsgschannel}>`;
}; 
var sscc;
if(serverset[message.guild.id].stafflogschannel === "None"){
  sscc = "Not set up";
}
else{
  sscc = `<#${serverset[message.guild.id].stafflogschannel}>`;
}; 
var mmccc;
if(serverset[message.guild.id].membercount === "None"){
  mmccc = "Not set up";
}
else{
  mmccc = `<#${serverset[message.guild.id].membercount}>`;
}; 
var ccggc;
if(serverset[message.guild.id].chatgameschannel === "None"){
  ccggc = "Not set up";
}
else{
  ccggc = `<#${serverset[message.guild.id].chatgameschannel}>`;
}; 
var altss;
if(serverset[message.guild.id].chatgameschannel === "ON"){
  altss = "Enabled";
}
else{
  altss = `Disabled`;
}; 
  const missingArgsdEmbed = new discord.MessageEmbed() // Creates the embed thats sent if the command isnt run right
        .setColor(`#000000`)
        .setTitle(`Your current ${message.guild.name} setup !`)
        .setDescription(`**Server prefix :** ${serverset[message.guild.id].prefix}
**Confessions channel :** ${wcfffec}
**Welcome channel :** ${wcc}
**Invites channel :** ${invcc}
**Leaves channel :** ${lvcc}
**Alts Protection:** ${altss}
**Member Module channel :** ${mmcc}
**Deleted messages channel** : ${ddcc}
**Staff logs channel :** ${sscc}
**Member count VC :** ${mmccc}
**Chat Games Channel :** ${ccggc} `)//chatgames- altsprotection - anti-invites - antiswear - imagesonlychannel
     //   .setFooter(`The rest of modules such as welcome message and rejoin message... cannot be viewed !`) 
        message.channel.send(missingArgsdEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})
        return;
        
  }

  if (sayMessage.toLowerCase().includes("confessionschannel") || sayMessage.toLowerCase().includes("confchannel") || sayMessage.toLowerCase().includes("confessions")) {
    let opddtion = args[1];
    let option = `${opddtion}`;
    if (!opddtion) return message.channel.send(missingArgsEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})
    
    if (option.toLowerCase().includes("off") || option.toLowerCase().includes("default")) {
      confession[message.guild.id] = {
        confession:confession[message.guild.id].confession,
        confch: "None"
      }
    fs.writeFile("./storage/confession.json", JSON.stringify(confession), (err) => {
      if(err) console.log(err)})
      let incorr = new discord.MessageEmbed()
    .setColor("#000000")
    .setTitle("Variable changed !")
    .setDescription(`\nServer confessions channel has been reset.`)
    message.channel.send(incorr).catch(e =>  message.channel.send(e)).catch(O_o => {})
    return;
    }
    let chaneloi = message.guild.channels.cache.find(c => c.name.toLowerCase().includes(option.toLowerCase())) || message.mentions.channels.first() || message.guild.channels.cache.get(option); 
    if (!chaneloi) return message.channel.send(missingArgsEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})
    confession[message.guild.id] = {
      confession:confession[message.guild.id].confession,
      confch: chaneloi.id
    }
  fs.writeFile("./storage/confession.json", JSON.stringify(confession), (err) => {
    if(err) console.log(err)})
    let incorr = new discord.MessageEmbed()
    .setColor("#000000")
    .setTitle("Variable changed !")
    .setDescription(`\nConfessions channel has been set to <#${option}>`)
    message.channel.send(incorr).catch(e =>  message.channel.send(e)).catch(O_o => {})
    return;
  }
  if (sayMessage.toLowerCase().includes("prefix")) {
     let opddtion = args[1];
    let option = `${opddtion}`;
    if (!opddtion) return message.channel.send(missingArgsEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})

    if (option.toLowerCase().includes("off") || option.toLowerCase().includes("default")) {
      serverset[message.guild.id] = {
        welcomechannel: serverset[message.guild.id].welcomechannel,
        chatgameschannel: serverset[message.guild.id].chatgameschannel,
        membercountmessage: serverset[message.guild.id].membercountmessage,
        deletedmsgschannel: serverset[message.guild.id].deletedmsgschannel,
        membercount: serverset[message.guild.id].membercount,
        membermodulechannel: serverset[message.guild.id].membermodulechannel,
        stafflogschannel: serverset[message.guild.id].stafflogschannel,
        welcomemsg: serverset[message.guild.id].welcomemsg,
        inviteschannel: serverset[message.guild.id].inviteschannel,
        leaveschannel: serverset[message.guild.id].leaveschannel,
      prefix: ".",
      altsprotection: serverset[message.guild.id].altsprotection,
}
    fs.writeFile("./storage/serverset.json", JSON.stringify(serverset), (err) => {
      if(err) console.log(err)})
      let incorr = new discord.MessageEmbed()
    .setColor("#000000")
    .setTitle("Variable changed !")
    .setDescription(`\nServer prefix has been set to default "."`)
    message.channel.send(incorr).catch(e =>  message.channel.send(e)).catch(O_o => {})
    return;
    }
    if (!option) return message.channel.send(missingArgsEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})
    if (option.length > 5) return message.channel.send("The prefix cannot be longer than 5 characters").catch(e =>  message.channel.send(e)).catch(O_o => {})
    if (option.includes("`"))return message.channel.send("The prefix cannot include that character").catch(e =>  message.channel.send(e)).catch(O_o => {})
    serverset[message.guild.id] = {
      welcomechannel: serverset[message.guild.id].welcomechannel,
      chatgameschannel: serverset[message.guild.id].chatgameschannel,
      membercountmessage: serverset[message.guild.id].membercountmessage,
      deletedmsgschannel: serverset[message.guild.id].deletedmsgschannel,
      membercount: serverset[message.guild.id].membercount,
      membermodulechannel: serverset[message.guild.id].membermodulechannel,
      stafflogschannel: serverset[message.guild.id].stafflogschannel,
      welcomemsg: serverset[message.guild.id].welcomemsg,
        inviteschannel: serverset[message.guild.id].inviteschannel,
        leaveschannel: serverset[message.guild.id].leaveschannel,
      prefix: option,
      altsprotection: serverset[message.guild.id].altsprotection,
  }
  fs.writeFile("./storage/serverset.json", JSON.stringify(serverset), (err) => {
    if(err) console.log(err)})
    let incorr = new discord.MessageEmbed()
    .setColor("#000000")
    .setTitle("Variable changed !")
    .setDescription(`\nServer prefix has been set to ${serverset[message.guild.id].prefix}`)
    message.channel.send(incorr).catch(e =>  message.channel.send(e)).catch(O_o => {})
    return;
  }
  
  if (sayMessage.toLowerCase().includes("adminlevel")) {
    let option = args[1].toLowerCase()
    if (!option) return message.channel.send(`You can only step up 4 admin levels (lvl1 - lvl2 - lvl3 - lvl4)!
    **Example:** \`.config adminlevel lvl1 @moderator\``).catch(e =>  message.channel.send(e)).catch(O_o => {})
    if (option.toLowerCase().includes("off") || option.toLowerCase().includes("default")) {
      adminlevel[message.guild.id] = {
      lvl1: "None",
      lvl2: "None",
      lvl3: "None",
      lvl4: "None"
    }
    fs.writeFile("./storage/adminlevel.json", JSON.stringify(adminlevel), (err) => {
      if(err) console.log(err)})
      let incorr = new discord.MessageEmbed()
    .setColor("#000000")
    .setTitle("Variable changed !")
    .setDescription(`\n All admin levels have been set to default`)
    message.channel.send(incorr).catch(e =>  message.channel.send(e)).catch(O_o => {})
    return;
    }
    let optionlvl = args[2];
    if (!optionlvl)return message.channel.send(`You haven't mentioned any staff role to set up )!
  **Example:** \`.config adminlevel lvl1 @moderator\``);
    if (option.toLowerCase().includes("lvl1")){
    let gchannel = message.guild.roles.cache.find(r => r.name.toLowerCase().includes(optionlvl.toLowerCase())) || message.mentions.roles.first() || message.guild.roles.cache.get(optionlvl); 
    if (!gchannel) return message.channel.send(missingArgsEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})
    adminlevel[message.guild.id] = {
      lvl1: gchannel.id,
      lvl2: adminlevel[message.guild.id].lvl2,
      lvl3: adminlevel[message.guild.id].lvl3,
      lvl4: adminlevel[message.guild.id].lvl4
  }
  fs.writeFile("./storage/adminlevel.json", JSON.stringify(adminlevel), (err) => {
    if(err) console.log(err)})
    let incorr = new discord.MessageEmbed()
    .setColor("#000000")
    .setTitle("Variable changed !")
    .setDescription(`\nAdmin level 1 has been set to : <@&${adminlevel[message.guild.id].lvl1}>`)
    message.channel.send(incorr).catch(e =>  message.channel.send(e)).catch(O_o => {})
    return;
  }
  if (option.toLowerCase().includes("lvl2")){
    let gchannel = message.guild.roles.cache.find(r => r.name.toLowerCase().includes(optionlvl.toLowerCase())) || message.mentions.roles.first() || message.guild.roles.cache.get(optionlvl); 
    if (!gchannel) return message.channel.send(missingArgsEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})
    adminlevel[message.guild.id] = {
      lvl1: adminlevel[message.guild.id].lvl1,
      lvl2: gchannel.id,
      lvl3: adminlevel[message.guild.id].lvl3,
      lvl4: adminlevel[message.guild.id].lvl4
  }
  fs.writeFile("./storage/adminlevel.json", JSON.stringify(adminlevel), (err) => {
    if(err) console.log(err)})
    let incorr = new discord.MessageEmbed()
    .setColor("#000000")
    .setTitle("Variable changed !")
    .setDescription(`\nAdmin level 2 has been set to : <@&${adminlevel[message.guild.id].lvl2}>`)
    message.channel.send(incorr).catch(e =>  message.channel.send(e)).catch(O_o => {})
    return;
  }
  if (option.toLowerCase().includes("lvl3")){
    let gchannel = message.guild.roles.cache.find(r => r.name.toLowerCase().includes(optionlvl.toLowerCase())) || message.mentions.roles.first() || message.guild.roles.cache.get(optionlvl); 
    if (!gchannel) return message.channel.send(missingArgsEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})
    adminlevel[message.guild.id] = {
      lvl1: adminlevel[message.guild.id].lvl1,
      lvl2: adminlevel[message.guild.id].lvl2,
      lvl3: gchannel.id,
      lvl4: adminlevel[message.guild.id].lvl4
  }
  fs.writeFile("./storage/adminlevel.json", JSON.stringify(adminlevel), (err) => {
    if(err) console.log(err)})
    let incorr = new discord.MessageEmbed()
    .setColor("#000000")
    .setTitle("Variable changed !")
    .setDescription(`\nAdmin level 3 has been set to : <@&${adminlevel[message.guild.id].lvl3}>`)
    message.channel.send(incorr).catch(e =>  message.channel.send(e)).catch(O_o => {})
    return;
  }
  if (option.toLowerCase().includes("lvl4")){
    let gchannel = message.guild.roles.cache.find(r => r.name.toLowerCase().includes(optionlvl.toLowerCase())) || message.mentions.roles.first() || message.guild.roles.cache.get(optionlvl); 
    if (!gchannel) return message.channel.send(missingArgsEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})
    adminlevel[message.guild.id] = {
      lvl1: adminlevel[message.guild.id].lvl1,
      lvl2: adminlevel[message.guild.id].lvl2,
      lvl3: adminlevel[message.guild.id].lvl3,
      lvl4: gchannel.id
  }
  fs.writeFile("./storage/adminlevel.json", JSON.stringify(adminlevel), (err) => {
    if(err) console.log(err)})
    let incorr = new discord.MessageEmbed()
    .setColor("#000000")
    .setTitle("Variable changed !")
    .setDescription(`\nAdmin level 4 has been set to : <@&${adminlevel[message.guild.id].lvl4}>`)
    message.channel.send(incorr).catch(e =>  message.channel.send(e)).catch(O_o => {})
    return;
  }
  else {message.channel.send(`You can only step up 4 admin levels (lvl1 - lvl2 - lvl3 - lvl4)!
  **Example:** \`.config adminlevel lvl1 @moderator\``);
    return;}
  }

  if (sayMessage.toLowerCase().includes("inviteschannel")) {
    let opddtion = args[1];
   let option = `${opddtion}`;
   if (!opddtion) return message.channel.send(missingArgsEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})
   if (option.toLowerCase().includes("off") || option.toLowerCase().includes("default")) {
     serverset[message.guild.id] = {
       welcomechannel: serverset[message.guild.id].welcomechannel,
       chatgameschannel: serverset[message.guild.id].chatgameschannel,
       membercountmessage: serverset[message.guild.id].membercountmessage,
       deletedmsgschannel: serverset[message.guild.id].deletedmsgschannel,
       membercount: serverset[message.guild.id].membercount,
       membermodulechannel: serverset[message.guild.id].membermodulechannel,
       stafflogschannel: serverset[message.guild.id].stafflogschannel,
       welcomemsg: serverset[message.guild.id].welcomemsg,
       inviteschannel: "None",
       leaveschannel: serverset[message.guild.id].leaveschannel,
     prefix: serverset[message.guild.id].prefix,
          altsprotection: serverset[message.guild.id].altsprotection,
}
   fs.writeFile("./storage/serverset.json", JSON.stringify(serverset), (err) => {
     if(err) console.log(err)})
     let incorr = new discord.MessageEmbed()
   .setColor("#000000")
   .setTitle("Variable changed !")
   .setDescription(`\nInvites channel has been set to default 0`)
   message.channel.send(incorr).catch(e =>  message.channel.send(e)).catch(O_o => {})
   return;
   }
   let gchannel = message.guild.channels.cache.find(c => c.name.toLowerCase().includes(option.toLowerCase())) || message.mentions.channels.first() || message.guild.channels.cache.get(option); 
   if (!gchannel) return message.channel.send(missingArgsEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})
   serverset[message.guild.id] = {
     welcomechannel: serverset[message.guild.id].welcomechannel,
     chatgameschannel: serverset[message.guild.id].chatgameschannel,
     membercountmessage: serverset[message.guild.id].membercountmessage,
     deletedmsgschannel: serverset[message.guild.id].deletedmsgschannel,
     membercount: serverset[message.guild.id].membercount,
     membermodulechannel: serverset[message.guild.id].membermodulechannel,
     stafflogschannel: serverset[message.guild.id].stafflogschannel,
     welcomemsg: serverset[message.guild.id].welcomemsg,
       inviteschannel: gchannel.id,
       leaveschannel: serverset[message.guild.id].leaveschannel,
     prefix: serverset[message.guild.id].prefix,
          altsprotection: serverset[message.guild.id].altsprotection,
 }
 fs.writeFile("./storage/serverset.json", JSON.stringify(serverset), (err) => {
   if(err) console.log(err)})
   let incorr = new discord.MessageEmbed()
   .setColor("#000000")
   .setTitle("Variable changed !")
   .setDescription(`\nInvites channel has been set to : <#${serverset[message.guild.id].inviteschannel}>`)
   message.channel.send(incorr).catch(e =>  message.channel.send(e)).catch(O_o => {})
   return;
 }

 if (sayMessage.toLowerCase().includes("leaveschannel")) {
  let opddtion = args[1];
 let option = `${opddtion}`;
 if (!opddtion) return message.channel.send(missingArgsEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})
 if (option.toLowerCase().includes("off") || option.toLowerCase().includes("default")) {
   serverset[message.guild.id] = {
     welcomechannel: serverset[message.guild.id].welcomechannel,
     chatgameschannel: serverset[message.guild.id].chatgameschannel,
     membercountmessage: serverset[message.guild.id].membercountmessage,
     deletedmsgschannel: serverset[message.guild.id].deletedmsgschannel,
     membercount: serverset[message.guild.id].membercount,
     membermodulechannel: serverset[message.guild.id].membermodulechannel,
     stafflogschannel: serverset[message.guild.id].stafflogschannel,
     welcomemsg: serverset[message.guild.id].welcomemsg,
     inviteschannel: serverset[message.guild.id].inviteschannel,
     leaveschannel: "None",
   prefix: serverset[message.guild.id].prefix,
          altsprotection: serverset[message.guild.id].altsprotection,
}
 fs.writeFile("./storage/serverset.json", JSON.stringify(serverset), (err) => {
   if(err) console.log(err)})
   let incorr = new discord.MessageEmbed()
 .setColor("#000000")
 .setTitle("Variable changed !")
 .setDescription(`\nLeaves invites has been set to default 0`)
 message.channel.send(incorr).catch(e =>  message.channel.send(e)).catch(O_o => {})
 return;
 }
 let gchannel = message.guild.channels.cache.find(c => c.name.toLowerCase().includes(option.toLowerCase())) || message.mentions.channels.first() || message.guild.channels.cache.get(option); 
 if (!gchannel) return message.channel.send(missingArgsEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})
 serverset[message.guild.id] = {
   welcomechannel: serverset[message.guild.id].welcomechannel,
   chatgameschannel: serverset[message.guild.id].chatgameschannel,
   membercountmessage: serverset[message.guild.id].membercountmessage,
   deletedmsgschannel: serverset[message.guild.id].deletedmsgschannel,
   membercount: serverset[message.guild.id].membercount,
   membermodulechannel: serverset[message.guild.id].membermodulechannel,
   stafflogschannel: serverset[message.guild.id].stafflogschannel,
   welcomemsg: serverset[message.guild.id].welcomemsg,
     inviteschannel: serverset[message.guild.id].inviteschannel,
     leaveschannel: gchannel.id,
   prefix: serverset[message.guild.id].prefix,
          altsprotection: serverset[message.guild.id].altsprotection,
}
fs.writeFile("./storage/serverset.json", JSON.stringify(serverset), (err) => {
 if(err) console.log(err)})
 let incorr = new discord.MessageEmbed()
 .setColor("#000000")
 .setTitle("Variable changed !")
 .setDescription(`\nLeaves invites channel has been set to : <#${serverset[message.guild.id].leaveschannel}>`)
 message.channel.send(incorr).catch(e =>  message.channel.send(e)).catch(O_o => {})
 return;
}

  if (sayMessage.toLowerCase().includes("welcomechannel")) {
     let opddtion = args[1];
    let option = `${opddtion}`;
    if (!opddtion) return message.channel.send(missingArgsEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})
    if (option.toLowerCase().includes("off") || option.toLowerCase().includes("default")) {
      serverset[message.guild.id] = {
        welcomechannel: "None",
        chatgameschannel: serverset[message.guild.id].chatgameschannel,
        membercountmessage: serverset[message.guild.id].membercountmessage,
        deletedmsgschannel: serverset[message.guild.id].deletedmsgschannel,
        membercount: serverset[message.guild.id].membercount,
        membermodulechannel: serverset[message.guild.id].membermodulechannel,
        stafflogschannel: serverset[message.guild.id].stafflogschannel,
        welcomemsg: serverset[message.guild.id].welcomemsg,
        inviteschannel: serverset[message.guild.id].inviteschannel,
        leaveschannel: serverset[message.guild.id].leaveschannel,
      prefix: serverset[message.guild.id].prefix,
          altsprotection: serverset[message.guild.id].altsprotection,
}
    fs.writeFile("./storage/serverset.json", JSON.stringify(serverset), (err) => {
      if(err) console.log(err)})
      let incorr = new discord.MessageEmbed()
    .setColor("#000000")
    .setTitle("Variable changed !")
    .setDescription(`\nWelcome message channel has been set to default 0`)
    message.channel.send(incorr).catch(e =>  message.channel.send(e)).catch(O_o => {})
    return;
    }
    let gchannel = message.guild.channels.cache.find(c => c.name.toLowerCase().includes(option.toLowerCase())) || message.mentions.channels.first() || message.guild.channels.cache.get(option); 
    if (!gchannel) return message.channel.send(missingArgsEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})
    serverset[message.guild.id] = {
      welcomechannel: gchannel.id,
      chatgameschannel: serverset[message.guild.id].chatgameschannel,
      membercountmessage: serverset[message.guild.id].membercountmessage,
      deletedmsgschannel: serverset[message.guild.id].deletedmsgschannel,
      membercount: serverset[message.guild.id].membercount,
      membermodulechannel: serverset[message.guild.id].membermodulechannel,
      stafflogschannel: serverset[message.guild.id].stafflogschannel,
      welcomemsg: serverset[message.guild.id].welcomemsg,
        inviteschannel: serverset[message.guild.id].inviteschannel,
        leaveschannel: serverset[message.guild.id].leaveschannel,
      prefix: serverset[message.guild.id].prefix,
          altsprotection: serverset[message.guild.id].altsprotection,
  }
  fs.writeFile("./storage/serverset.json", JSON.stringify(serverset), (err) => {
    if(err) console.log(err)})
    let incorr = new discord.MessageEmbed()
    .setColor("#000000")
    .setTitle("Variable changed !")
    .setDescription(`\nWelcome message channel has been set to : <#${serverset[message.guild.id].welcomechannel}>`)
    message.channel.send(incorr).catch(e =>  message.channel.send(e)).catch(O_o => {})
    return;
  }

  if (sayMessage.toLowerCase().includes("welcomemessage")) {
    let option = args.slice(1).join(" ");
    if (!option) return message.channel.send(missingArgsEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})
    let incoreer = new discord.MessageEmbed()
    .setColor("#000000")
    .setTitle("Invalid welcome message !")
    .setDescription("\nExample: .config welcomemessage \`Welcome ${member} to ${servername} enjoy your stay !\` \nVariables: \`${member} - Ping new member\n${servername} - Server name\`\n\n*TIP: You can also add any roles or emojis or fonts to your welcome message as you wish*")
   if (!option) return message.channel.send(incoreer);
   serverset[message.guild.id] = {
    welcomechannel: serverset[message.guild.id].welcomechannel,
    chatgameschannel: serverset[message.guild.id].chatgameschannel,
    membercountmessage: serverset[message.guild.id].membercountmessage,
    deletedmsgschannel: serverset[message.guild.id].deletedmsgschannel,
    membercount: serverset[message.guild.id].membercount,
    membermodulechannel: serverset[message.guild.id].membermodulechannel,
    stafflogschannel: serverset[message.guild.id].stafflogschannel,
    welcomemsg: option,
    inviteschannel: serverset[message.guild.id].inviteschannel,
    leaveschannel: serverset[message.guild.id].leaveschannel,
    prefix: serverset[message.guild.id].prefix,
          altsprotection: serverset[message.guild.id].altsprotection,
}
fs.writeFile("./storage/serverset.json", JSON.stringify(serverset), (err) => {
  if(err) console.log(err)})
    let incorr = new discord.MessageEmbed()
    .setColor("#000000")
    .setTitle("Welcome message has been successfully set up !")
    .setDescription(`\n${serverset[message.guild.id].welcomemsg}`)
    message.channel.send(incorr).catch(e =>  message.channel.send(e)).catch(O_o => {})
    return;
  }

  
  if (sayMessage.toLowerCase() == "membercount") {
     let opddtion = args[1];
    let option = `${opddtion}`;
    if (!opddtion) return message.channel.send(missingArgsEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})
    if (option.toLowerCase().includes("off") || option.toLowerCase().includes("default")) {
      serverset[message.guild.id] = {
        welcomechannel: serverset[message.guild.id].welcomechannel,
       
        chatgameschannel: serverset[message.guild.id].chatgameschannel,
        membercountmessage: serverset[message.guild.id].membercountmessage,
        deletedmsgschannel: serverset[message.guild.id].deletedmsgschannel,
        membercount: "None",
        membermodulechannel: serverset[message.guild.id].membermodulechannel,
        stafflogschannel: serverset[message.guild.id].stafflogschannel,
        welcomemsg: serverset[message.guild.id].welcomemsg,
        inviteschannel: serverset[message.guild.id].inviteschannel,
        leaveschannel: serverset[message.guild.id].leaveschannel,
      prefix: serverset[message.guild.id].prefix,
          altsprotection: serverset[message.guild.id].altsprotection,
}
    fs.writeFile("./storage/serverset.json", JSON.stringify(serverset), (err) => {
      if(err) console.log(err)})
      let incorr = new discord.MessageEmbed()
    .setColor("#000000")
    .setTitle("Variable changed !")
    .setDescription(`\nThe member count channel has been set to default 0`)
    message.channel.send(incorr).catch(e =>  message.channel.send(e)).catch(O_o => {})
    return;
    }
    let gchannel = message.guild.channels.cache.find(c => c.name.toLowerCase().includes(option.toLowerCase())) || message.mentions.channels.first() || message.guild.channels.cache.get(option); 
    if (!gchannel) return message.channel.send(missingArgsEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})
    serverset[message.guild.id] = {
      welcomechannel: serverset[message.guild.id].welcomechannel,
      chatgameschannel: serverset[message.guild.id].chatgameschannel,
      membercountmessage: serverset[message.guild.id].membercountmessage,
      deletedmsgschannel: serverset[message.guild.id].deletedmsgschannel,
      membercount: gchannel.id,
      membermodulechannel: serverset[message.guild.id].membermodulechannel,
      stafflogschannel: serverset[message.guild.id].stafflogschannel,
      welcomemsg: serverset[message.guild.id].welcomemsg,
        inviteschannel: serverset[message.guild.id].inviteschannel,
        leaveschannel: serverset[message.guild.id].leaveschannel,
      prefix: serverset[message.guild.id].prefix,
          altsprotection: serverset[message.guild.id].altsprotection,
}
  fs.writeFile("./storage/serverset.json", JSON.stringify(serverset), (err) => {
    if(err) console.log(err)})
    let incorr = new discord.MessageEmbed()
    .setColor("#000000")
    .setTitle("Variable changed !")
    .setDescription(`\nThe member count channel has been set to : <#${serverset[message.guild.id].membercount}>`)
    message.channel.send(incorr).catch(e =>  message.channel.send(e)).catch(O_o => {})
    return;
  }

  if (sayMessage.toLowerCase().includes("membercountmessage")) {
    let option = args.slice(1).join(" ");
    if (!option) return message.channel.send(missingArgsEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})
    let incoreer = new discord.MessageEmbed()
    .setColor("#000000")
    .setTitle("Invalid welcome message !")
    .setDescription("\nExample: '.config membercountmessage members :' \nTIP: *The members count amount will be put right next to your chosen channel name*")
   if (!option) return message.channel.send(incoreer);
   if (option.length > 20)return message.channel.send(`Your member count cannot contain more than 30 characters`);
  
   
  serverset[message.guild.id] = {
    welcomechannel: serverset[message.guild.id].welcomechannel,
   
    chatgameschannel: serverset[message.guild.id].chatgameschannel,
    membercountmessage: option,
    deletedmsgschannel: serverset[message.guild.id].deletedmsgschannel,
    membercount: serverset[message.guild.id].membercount,
    membermodulechannel: serverset[message.guild.id].membermodulechannel,
    stafflogschannel: serverset[message.guild.id].stafflogschannel,
    welcomemsg: serverset[message.guild.id].welcomemsg,
        inviteschannel: serverset[message.guild.id].inviteschannel,
        leaveschannel: serverset[message.guild.id].leaveschannel,
    prefix: serverset[message.guild.id].prefix,
          altsprotection: serverset[message.guild.id].altsprotection,
}
fs.writeFile("./storage/serverset.json", JSON.stringify(serverset), (err) => {
  if(err) console.log(err)})
      if(serverset[message.guild.id].membercount !== "None") {
        let memberschan = message.guild.channels.cache.get(serverset[message.guild.id].membercount);
        memberschan.setName(`${option}${message.guild.memberCount}`);
      }
    let incorr = new discord.MessageEmbed()
    .setColor("#000000")
    .setTitle("Member count message has been successfully set up !")
    .setDescription(`\n${serverset[message.guild.id].membercountmessage}`)
    message.channel.send(incorr).catch(e =>  message.channel.send(e)).catch(O_o => {})
    return;
  }

  if (sayMessage.toLowerCase().includes("membermodulechannel")) {
     let opddtion = args[1];
    let option = `${opddtion}`;
    if (!opddtion) return message.channel.send(missingArgsEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})
    if (option.toLowerCase().includes("off") || option.toLowerCase().includes("default")) {
      serverset[message.guild.id] = {
        welcomechannel: serverset[message.guild.id].welcomechannel,
       
        chatgameschannel: serverset[message.guild.id].chatgameschannel,
        membercountmessage: serverset[message.guild.id].membercountmessage,
        deletedmsgschannel: serverset[message.guild.id].deletedmsgschannel,
        membercount: serverset[message.guild.id].membercount,
        membermodulechannel: "None",
        stafflogschannel: serverset[message.guild.id].stafflogschannel,
        welcomemsg: serverset[message.guild.id].welcomemsg,
        inviteschannel: serverset[message.guild.id].inviteschannel,
        leaveschannel: serverset[message.guild.id].leaveschannel,
      prefix: serverset[message.guild.id].prefix,
          altsprotection: serverset[message.guild.id].altsprotection,
}
    fs.writeFile("./storage/serverset.json", JSON.stringify(serverset), (err) => {
      if(err) console.log(err)})
      let incorr = new discord.MessageEmbed()
    .setColor("#000000")
    .setTitle("Variable changed !")
    .setDescription(`\nMember module channel has been set to default 0`)
    message.channel.send(incorr).catch(e =>  message.channel.send(e)).catch(O_o => {})
    
    return;
    }
    let gchannel = message.guild.channels.cache.find(c => c.name.toLowerCase().includes(option.toLowerCase())) || message.mentions.channels.first() || message.guild.channels.cache.get(option); 
    if (!gchannel) return message.channel.send(missingArgsEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})
    serverset[message.guild.id] = {
      welcomechannel: serverset[message.guild.id].welcomechannel,
      chatgameschannel: serverset[message.guild.id].chatgameschannel,
      membercountmessage: serverset[message.guild.id].membercountmessage,
      deletedmsgschannel: serverset[message.guild.id].deletedmsgschannel,
      membercount: serverset[message.guild.id].membercount,
            membermodulechannel: gchannel.id,
      stafflogschannel: serverset[message.guild.id].stafflogschannel,
      welcomemsg: serverset[message.guild.id].welcomemsg,
        inviteschannel: serverset[message.guild.id].inviteschannel,
        leaveschannel: serverset[message.guild.id].leaveschannel,
      prefix: serverset[message.guild.id].prefix,
          altsprotection: serverset[message.guild.id].altsprotection,
  }
  fs.writeFile("./storage/serverset.json", JSON.stringify(serverset), (err) => {
    if(err) console.log(err)})
    let incorr = new discord.MessageEmbed()
    .setColor("#000000")
    .setTitle("Variable changed !")
    .setDescription(`\nMember module channel has been set to : <#${serverset[message.guild.id].membermodulechannel}>`)
    message.channel.send(incorr).catch(e =>  message.channel.send(e)).catch(O_o => {})
    return;
  }

  if (sayMessage.toLowerCase().includes("deletedmessages")) {
     let opddtion = args[1];
    let option = `${opddtion}`;
    if (!opddtion) return message.channel.send("slice 1 not found");
    if (option.toLowerCase().includes("off") || option.toLowerCase().includes("default")) {
      serverset[message.guild.id] = {
        welcomechannel: serverset[message.guild.id].welcomechannel,
       
        chatgameschannel: serverset[message.guild.id].chatgameschannel,
        membercountmessage: serverset[message.guild.id].membercountmessage,
        deletedmsgschannel: "None",
        membercount: serverset[message.guild.id].membercount,
        membermodulechannel: serverset[message.guild.id].membermodulechannel,
        stafflogschannel: serverset[message.guild.id].stafflogschannel,
        welcomemsg: serverset[message.guild.id].welcomemsg,
        inviteschannel: serverset[message.guild.id].inviteschannel,
        leaveschannel: serverset[message.guild.id].leaveschannel,
      prefix: serverset[message.guild.id].prefix,
          altsprotection: serverset[message.guild.id].altsprotection,
}
    fs.writeFile("./storage/serverset.json", JSON.stringify(serverset), (err) => {
      if(err) console.log(err)})
      let incorr = new discord.MessageEmbed()
    .setColor("#000000")
    .setTitle("Variable changed !")
    .setDescription(`\nDeleted messages channel has been set to default 0`)
    message.channel.send(incorr).catch(e =>  message.channel.send(e)).catch(O_o => {})
    return;
    }
    let gchannel = message.guild.channels.cache.find(c => c.name.toLowerCase().includes(option.toLowerCase())) || message.mentions.channels.first() || message.guild.channels.cache.get(option); 
    if (!gchannel) return message.channel.send(missingArgsEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})
    serverset[message.guild.id] = {
      welcomechannel: serverset[message.guild.id].welcomechannel,
      chatgameschannel: serverset[message.guild.id].chatgameschannel,
      membercountmessage: serverset[message.guild.id].membercountmessage,
      deletedmsgschannel: gchannel.id,
      membercount: serverset[message.guild.id].membercount,
            membermodulechannel: serverset[message.guild.id].membermodulechannel,
      stafflogschannel: serverset[message.guild.id].stafflogschannel,
      welcomemsg: serverset[message.guild.id].welcomemsg,
        inviteschannel: serverset[message.guild.id].inviteschannel,
        leaveschannel: serverset[message.guild.id].leaveschannel,
      prefix: serverset[message.guild.id].prefix,
          altsprotection: serverset[message.guild.id].altsprotection,
}
  fs.writeFile("./storage/serverset.json", JSON.stringify(serverset), (err) => {
    if(err) console.log(err)})
    let incorr = new discord.MessageEmbed()
    .setColor("#000000")
    .setTitle("Variable changed !")
    .setDescription(`\nDeleted messages channel has been set to : <#${serverset[message.guild.id].deletedmsgschannel}>`)
    message.channel.send(incorr).catch(e =>  message.channel.send(e)).catch(O_o => {})
    return;
  }

  if (sayMessage.toLowerCase().includes("stafflogs")) {
     let opddtion = args[1];
    let option = `${opddtion}`;
    if (!opddtion) return message.channel.send(missingArgsEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})
    if (option.toLowerCase().includes("off") || option.toLowerCase().includes("default")) {
      serverset[message.guild.id] = {
        welcomechannel: serverset[message.guild.id].welcomechannel,
       
        chatgameschannel: serverset[message.guild.id].chatgameschannel,
        membercountmessage: serverset[message.guild.id].membercountmessage,
        deletedmsgschannel: serverset[message.guild.id].deletedmsgschannel,
        membercount: serverset[message.guild.id].membercount,
        membermodulechannel: serverset[message.guild.id].membermodulechannel,
        stafflogschannel: "None",
        welcomemsg: serverset[message.guild.id].welcomemsg,
        inviteschannel: serverset[message.guild.id].inviteschannel,
        leaveschannel: serverset[message.guild.id].leaveschannel,
        prefix: serverset[message.guild.id].prefix,
          altsprotection: serverset[message.guild.id].altsprotection,
    }
    fs.writeFile("./storage/serverset.json", JSON.stringify(serverset), (err) => {
      if(err) console.log(err)})
      let incorr = new discord.MessageEmbed()
    .setColor("#000000")
    .setTitle("Variable changed !")
    .setDescription(`\nStaff logs channel has been set to default 0`)
    message.channel.send(incorr).catch(e =>  message.channel.send(e)).catch(O_o => {})
    return;
    }
    let gchannel = message.guild.channels.cache.find(c => c.name.toLowerCase().includes(option.toLowerCase())) || message.mentions.channels.first() || message.guild.channels.cache.get(option); 
    if (!gchannel) return message.channel.send(missingArgsEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})
    serverset[message.guild.id] = {
      welcomechannel: serverset[message.guild.id].welcomechannel,
      chatgameschannel: serverset[message.guild.id].chatgameschannel,
      membercountmessage: serverset[message.guild.id].membercountmessage,
      deletedmsgschannel: serverset[message.guild.id].deletedmsgschannel,
      membercount: serverset[message.guild.id].membercount,
            membermodulechannel: serverset[message.guild.id].membermodulechannel,
      stafflogschannel: gchannel.id,
      welcomemsg: serverset[message.guild.id].welcomemsg,
        inviteschannel: serverset[message.guild.id].inviteschannel,
        leaveschannel: serverset[message.guild.id].leaveschannel,
      prefix: serverset[message.guild.id].prefix,
          altsprotection: serverset[message.guild.id].altsprotection,
  }
  fs.writeFile("./storage/serverset.json", JSON.stringify(serverset), (err) => {
    if(err) console.log(err)})
    let incorr = new discord.MessageEmbed()
    .setColor("#000000")
    .setTitle("Variable changed !")
    .setDescription(`\nStaff logs channel has been set to : <#${serverset[message.guild.id].stafflogschannel}>`)
    message.channel.send(incorr).catch(e =>  message.channel.send(e)).catch(O_o => {})
    return;
  }
  if (sayMessage.toLowerCase().includes("altsprotection") || sayMessage.toLowerCase().includes("altprotection")) {
    let embedps = new discord.MessageEmbed()
                  .setColor("RANDOM")
                  .setDescription(`This feature can only be used in premium servers !\nclick [here](https://discord.gg/nirvana) to donate and enjoy premium nirvana features !`);
    if(premiumserver[message.guild.id].premiumserver == 0)return message.channel.send(embedps);
       let opddtion = args[1];
      let option = `${opddtion}`;
      if (!opddtion) return message.channel.send("Invalid choice, you have to either enable or disable alts protection !\nExample: .config altsprotection ON/OFF");
      if (option.toLowerCase().includes("off") || option.toLowerCase().includes("disable")) {
        serverset[message.guild.id] = {
          welcomechannel: serverset[message.guild.id].welcomechannel,
          chatgameschannel: serverset[message.guild.id].chatgameschannel,
          membercountmessage: serverset[message.guild.id].membercountmessage,
          deletedmsgschannel: serverset[message.guild.id].deletedmsgschannel,
          membercount: serverset[message.guild.id].membercount,
          membermodulechannel: serverset[message.guild.id].membermodulechannel,
          stafflogschannel: serverset[message.guild.id].stafflogschannel,
          welcomemsg: serverset[message.guild.id].welcomemsg,
          inviteschannel: serverset[message.guild.id].inviteschannel,
          leaveschannel: serverset[message.guild.id].leaveschannel,
          prefix: serverset[message.guild.id].prefix,
          altsprotection: "OFF",
      }
      fs.writeFile("./storage/serverset.json", JSON.stringify(serverset), (err) => {
        if(err) console.log(err)})
        let incorr = new discord.MessageEmbed()
      .setColor("#000000")
      .setTitle("Variable changed !")
      .setDescription(`\nAlternative accounts protection has been disabled ! New accounts will no longer get muted !`)
      message.channel.send(incorr).catch(e =>  message.channel.send(e)).catch(O_o => {})
      return;
      }
      if (option.toLowerCase().includes("on") || option.toLowerCase().includes("Enable")) {
        serverset[message.guild.id] = {
          welcomechannel: serverset[message.guild.id].welcomechannel,
          chatgameschannel: serverset[message.guild.id].chatgameschannel,
          membercountmessage: serverset[message.guild.id].membercountmessage,
          deletedmsgschannel: serverset[message.guild.id].deletedmsgschannel,
          membercount: serverset[message.guild.id].membercount,
          membermodulechannel: serverset[message.guild.id].membermodulechannel,
          stafflogschannel: serverset[message.guild.id].stafflogschannel,
          welcomemsg: serverset[message.guild.id].welcomemsg,
          inviteschannel: serverset[message.guild.id].inviteschannel,
          leaveschannel: serverset[message.guild.id].leaveschannel,
          prefix: serverset[message.guild.id].prefix,
          altsprotection: "ON",
      }
      fs.writeFile("./storage/serverset.json", JSON.stringify(serverset), (err) => {
        if(err) console.log(err)})
        let incorr = new discord.MessageEmbed()
      .setColor("#000000")
      .setTitle("Variable changed !")
      .setDescription(`\nAlternative accounts protection has been enabled ! New accounts that are created 15 days ago or less will get muted automatically as they join !`)
      message.channel.send(incorr).catch(e =>  message.channel.send(e)).catch(O_o => {})
      return;
      }
    }
  if (sayMessage.toLowerCase().includes("chatgameschannel")) {
  let embedps = new discord.MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`This feature can only be used in premium servers !\nclick [here](https://discord.gg/nirvana) to donate and enjoy premium nirvana features !`);
  if(premiumserver[message.guild.id].premiumserver == 0)return message.channel.send(embedps);
     let opddtion = args[1];
    let option = `${opddtion}`;
    if (!opddtion) return message.channel.send("slice 1 not found");
    if (option.toLowerCase().includes("off") || option.toLowerCase().includes("default")) {
      serverset[message.guild.id] = {
        welcomechannel: serverset[message.guild.id].welcomechannel,
       
        chatgameschannel: "None",
        membercountmessage: serverset[message.guild.id].membercountmessage,
        deletedmsgschannel: serverset[message.guild.id].deletedmsgschannel,
        membercount: serverset[message.guild.id].membercount,
        membermodulechannel: serverset[message.guild.id].membermodulechannel,
        stafflogschannel: serverset[message.guild.id].stafflogschannel,
        welcomemsg: serverset[message.guild.id].welcomemsg,
        inviteschannel: serverset[message.guild.id].inviteschannel,
        leaveschannel: serverset[message.guild.id].leaveschannel,
        prefix: serverset[message.guild.id].prefix,
          altsprotection: serverset[message.guild.id].altsprotection,
    }
    fs.writeFile("./storage/serverset.json", JSON.stringify(serverset), (err) => {
      if(err) console.log(err)})
      let incorr = new discord.MessageEmbed()
    .setColor("#000000")
    .setTitle("Variable changed !")
    .setDescription(`\nChat games channel has been set to default 0`)
    message.channel.send(incorr).catch(e =>  message.channel.send(e)).catch(O_o => {})
    return;
    }
    let gchannel = message.guild.channels.cache.find(c => c.name.toLowerCase().includes(option.toLowerCase())) || message.mentions.channels.first() || message.guild.channels.cache.get(option); 
    if (!gchannel) return message.channel.send(missingArgsEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})
    serverset[message.guild.id] = {
      welcomechannel: serverset[message.guild.id].welcomechannel,
     
      chatgameschannel: gchannel.id,
      membercountmessage: serverset[message.guild.id].membercountmessage,
      deletedmsgschannel: serverset[message.guild.id].deletedmsgschannel,
      membercount: serverset[message.guild.id].membercount,
            membermodulechannel: serverset[message.guild.id].membermodulechannel,
      stafflogschannel: serverset[message.guild.id].stafflogschannel,
      welcomemsg: serverset[message.guild.id].welcomemsg,
        inviteschannel: serverset[message.guild.id].inviteschannel,
        leaveschannel: serverset[message.guild.id].leaveschannel,
      prefix: serverset[message.guild.id].prefix,
          altsprotection: serverset[message.guild.id].altsprotection,
}
  fs.writeFile("./storage/serverset.json", JSON.stringify(serverset), (err) => {
    if(err) console.log(err)})
    let incorr = new discord.MessageEmbed()
    .setColor("#000000")
    .setTitle("Variable changed !")
    .setDescription(`\nChat games channel has been set to : <#${serverset[message.guild.id].chatgameschannel}>`)
    message.channel.send(incorr).catch(e =>  message.channel.send(e)).catch(O_o => {})
    return;
  }
  else {
    const missingArgsEmbed = new discord.MessageEmbed() // Creates the embed thats sent if the command isnt run right
    .setColor(`#000000`)
    .setTitle('Missing Arguments!')
    .setDescription(`Usage: config [Variable] [Option]
\n**__Variables:__** \n\` prefix - confessions - inviteschannel - leaveschannel - adminlevel - welcomechannel - welcomemessage - membermodulechannel - deletedmessages - stafflogs - membercount - membercountmessage - chatgameschannel - altsprotection\``)//chatgames - anti-invites - antiswear - imagesonlychannel
    .setFooter(`Type "OFF" as an option to disable any of these modules`)     
    
return message.channel.send(missingArgsEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})}
};
module.exports.config = {
  name: "config",
  aliases: ["setting", "settings"]
};
