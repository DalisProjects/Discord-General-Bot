const fs = require("fs");
let Discord = require("discord.js");
let currencylogs = require("../../storage/currencylogs.json");

module.exports.run = async (bot, message, args) => {
    let premiumserver = require("../../storage/premiumserver.json");
  let embedps = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`This command can only be used in premium servers !\nclick [here](https://discord.gg/nirvana) to donate and enjoy premium nirvana features !`);
  //if(premiumserver[message.guild.id].premiumserver == 0)return message.channel.send(embedps);
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) ||
  message.guild.members.cache.find(member => member.displayName.toLowerCase().includes(args.join(" ").toLowerCase())) || message.guild.members.cache.find(member => member.user.username.toLowerCase().includes(args.join(" ").toLowerCase())) ||
  message.guild.members.cache.find(member => member.user.tag.toLowerCase().includes(args.join(" ").toLowerCase()));
  if(!member || !args[0])return message.channel.send("You haven't specified who u trynna give items to ");
  let rrrrr = args[1];
  let reason = `${rrrrr}`;

    let embed = new Discord.MessageEmbed()
    .setTitle("You haven't specified an item to give !")
    .setDescription(`\n**Inventory items:**\n\n:ring: ${currencylogs[message.author.id].rings} ring(s)\n:ship: ${currencylogs[message.author.id].shipnc} shipname card(s)\n<:nvweed:879855728377069609> ${currencylogs[message.author.id].weed} gram(s) of weed\n:fish: ${currencylogs[message.author.id].fish} fish(s)`)
    .setColor("RANDOM") 
    .setTimestamp();
    const lewdembedmm = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription(`You cannot give items to yourself !`);
    if (member.id === message.author.id) return message.channel.send(lewdembedmm).catch(e =>  message.channel.send(e)).catch(O_o => {})
    if(!rrrrr)return message.channel.send(embed).catch(e =>  message.channel.send(e)).catch(O_o => {})
    if(!currencylogs[member.user.id]){
        currencylogs[member.user.id] = {
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
        if(err) console.log(err)})}
    if (reason.toLowerCase().includes("ring") || reason.toLowerCase().includes("rings")){
        let amount = args[2];
        if(!amount) amount = 1
        if(amount){
            let themm = `${amount}`;
            if (themm.includes("-"))return message.channel.send(`Invalid amount !`);
            if (themm.startsWith("0"))return message.channel.send(`Given amount cannot start with a zero !`);
            if (isNaN(themm)) return message.channel.send(`The specified amount isn't valid`);}
        let amount1 = parseInt(amount, 10);
        if(amount1 > currencylogs[message.author.id].rings) return message.channel.send(`You don't have enough rings to give !`); 
        currencylogs[message.author.id] = {
            coins: currencylogs[message.author.id].coins,
            bank: currencylogs[message.author.id].bank,
            fish: currencylogs[message.author.id].fish,
            weed: currencylogs[message.author.id].weed,
            rings: parseInt(currencylogs[message.author.id].rings, 10) - amount1,
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
        currencylogs[member.user.id] = {
            coins: currencylogs[member.user.id].coins,
            bank: currencylogs[member.user.id].bank,
            fish: currencylogs[member.user.id].fish,
            weed: currencylogs[member.user.id].weed,
            rings: parseInt(currencylogs[member.user.id].rings, 10) + amount1,
            daily: currencylogs[member.user.id].daily,
            weekly: currencylogs[member.user.id].weekly,
            reps: currencylogs[member.user.id].reps,
            reptime: currencylogs[member.user.id].reptime,
            work: currencylogs[member.user.id].work,
            shipname: currencylogs[member.user.id].shipname,
            shipnc: currencylogs[member.user.id].shipnc,
            bio: currencylogs[member.user.id].bio,
            hourly: currencylogs[member.user.id].hourly,
            monthly: currencylogs[member.user.id].monthly,
            prefix: currencylogs[member.user.id].prefix,
      
        }
        fs.writeFile("./storage/currencylogs.json", JSON.stringify(currencylogs), (err) => {
          if(err) console.log(err)})
        
                const lewdembedmm = new Discord.MessageEmbed()
                .setColor(`#000000`)
                .setDescription(`:ring: You just gave ${member.displayName} ${amount} ring(s) `);
                message.channel.send(lewdembedmm).catch(e =>  message.channel.send(e)).catch(O_o => {})
                return;          
    }
    if (reason.toLowerCase().includes("shipname") || reason.toLowerCase().includes("shipcard") || reason.toLowerCase().includes("shipnamecard")){
        let amount = args[2];
        if(!amount) amount = 1
        if(amount){
            let themm = `${amount}`;
            if (themm.includes("-"))return message.channel.send(`Invalid amount !`);
            if (themm.startsWith("0"))return message.channel.send(`Invalid amount !`);
            if (isNaN(themm)) return message.channel.send(`The specified amount isn't valid`);}
        let amount1 = parseInt(amount, 10);
        let shipncc = parseInt(currencylogs[message.author.id].shipnc, 10);
        if(amount1 > currencylogs[message.author.id].shipnc) return message.channel.send(`You don't have enough shipname card to give !`); 
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
            shipnc: shipncc - amount1,
            bio: currencylogs[message.author.id].bio,
            hourly: currencylogs[message.author.id].hourly,
        monthly: currencylogs[message.author.id].monthly,
        prefix: currencylogs[message.author.id].prefix,
      
        }
        currencylogs[member.user.id] = {
            coins: currencylogs[member.user.id].coins,
            bank: currencylogs[member.user.id].bank,
            fish: currencylogs[member.user.id].fish,
            weed: currencylogs[member.user.id].weed,
            rings: currencylogs[member.user.id].rings,
            daily: currencylogs[member.user.id].daily,
            weekly: currencylogs[member.user.id].weekly,
            reps: currencylogs[member.user.id].reps,
            reptime: currencylogs[member.user.id].reptime,
            work: currencylogs[member.user.id].work,
            shipname: currencylogs[member.user.id].shipname,
            shipnc: parseInt(currencylogs[member.user.id].shipnc, 10) + amount1,
            bio: currencylogs[member.user.id].bio,
            hourly: currencylogs[member.user.id].hourly,
            monthly: currencylogs[member.user.id].monthly,
            prefix: currencylogs[member.user.id].prefix,
      
        }
        fs.writeFile("./storage/currencylogs.json", JSON.stringify(currencylogs), (err) => {
          if(err) console.log(err)})

                const lewdembedmm = new Discord.MessageEmbed()
                .setColor(`#000000`)
                .setDescription(`:ship: You just gave ${member.displayName} ${amount} shipname card(s) `);
                message.channel.send(lewdembedmm).catch(e =>  message.channel.send(e)).catch(O_o => {})
                return;          
    }
  
    if (reason.toLowerCase().includes("weed") || reason.toLowerCase().includes("weeds")){
        let amount = args[2];
        if(!amount) amount = 1
        if(amount){
            let themm = `${amount}`;
            if (themm.includes("-"))return message.channel.send(`Invalid amount !`);
            if (themm.startsWith("0"))return message.channel.send(`Invalid amount !`);
            if (isNaN(themm)) return message.channel.send(`The specified amount isn't valid`);}
        let amount1 = parseInt(amount, 10);
        let weedss = parseInt(currencylogs[message.author.id].weed, 10);
        let mmweeds = parseInt(currencylogs[member.user.id].weed, 10);       
         if(amount1 > currencylogs[message.author.id].weed) return message.channel.send(`You don't have enough weed to give !`); 
         currencylogs[message.author.id] = {
            coins: currencylogs[message.author.id].coins,
            bank: currencylogs[message.author.id].bank,
            fish: currencylogs[message.author.id].fish,
            weed: weedss - amount1,
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
        currencylogs[member.user.id] = {
            coins: currencylogs[member.user.id].coins,
            bank: currencylogs[member.user.id].bank,
            fish: currencylogs[member.user.id].fish,
            weed: amount1 + mmweeds,
            rings: currencylogs[member.user.id].rings,
            daily: currencylogs[member.user.id].daily,
            weekly: currencylogs[member.user.id].weekly,
            reps: currencylogs[member.user.id].reps,
            reptime: currencylogs[member.user.id].reptime,
            work: currencylogs[member.user.id].work,
            shipname: currencylogs[member.user.id].shipname,
            shipnc: currencylogs[member.user.id].shipnc,
            bio: currencylogs[member.user.id].bio,
            hourly: currencylogs[member.user.id].hourly,
            monthly: currencylogs[member.user.id].monthly,
            prefix: currencylogs[member.user.id].prefix,
      
        }
        fs.writeFile("./storage/currencylogs.json", JSON.stringify(currencylogs), (err) => {
          if(err) console.log(err)})


                const lewdembedmm = new Discord.MessageEmbed()
                .setColor(`#000000`)
                .setDescription(`<:nvweed:879855728377069609> You just gave ${member.displayName} ${amount} gram(s) of weed `);
                message.channel.send(lewdembedmm).catch(e =>  message.channel.send(e)).catch(O_o => {})
                return;          
    }
    if (reason.toLowerCase().includes("fish") || reason.toLowerCase().includes("fishes")){
        let amount = args[2];
        if(!amount) amount = 1
        if(amount){
            let themm = `${amount}`;
            if (themm.includes("-"))return message.channel.send(`Invalid amount !`);
            if (themm.startsWith("0"))return message.channel.send(`Invalid amount !`);
            if (isNaN(themm)) return message.channel.send(`The specified amount isn't valid`);}
        let amount1 = parseInt(amount, 10);
        let fishs = parseInt(currencylogs[message.author.id].fish, 10);
        if(amount1 > currencylogs[message.author.id].fish) return message.channel.send(`You don't have enough fish to give !`); 
        currencylogs[message.author.id] = {
            coins: currencylogs[message.author.id].coins,
            bank: currencylogs[message.author.id].bank,
            fish: fishs - amount1,
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
        currencylogs[member.user.id] = {
            coins: currencylogs[member.user.id].coins,
            bank: currencylogs[member.user.id].bank,
            fish: parseInt(currencylogs[member.user.id].fish, 10) + amount1,
            weed: currencylogs[member.user.id].weed,
            rings: currencylogs[member.user.id].rings,
            daily: currencylogs[member.user.id].daily,
            weekly: currencylogs[member.user.id].weekly,
            reps: currencylogs[member.user.id].reps,
            reptime: currencylogs[member.user.id].reptime,
            work: currencylogs[member.user.id].work,
            shipname: currencylogs[member.user.id].shipname,
            shipnc: currencylogs[member.user.id].shipnc,
            bio: currencylogs[member.user.id].bio,
            hourly: currencylogs[member.user.id].hourly,
            monthly: currencylogs[member.user.id].monthly,
            prefix: currencylogs[member.user.id].prefix,
      
        }
        fs.writeFile("./storage/currencylogs.json", JSON.stringify(currencylogs), (err) => {
          if(err) console.log(err)})

                const lewdembedmm = new Discord.MessageEmbed()
                .setColor(`#000000`)
                .setDescription(`:fish: You just gave ${member.displayName} ${amount}  fish(s) `);
                message.channel.send(lewdembedmm).catch(e =>  message.channel.send(e)).catch(O_o => {})
                return;          
    }
       
};

module.exports.config = {
  name: "give"
};