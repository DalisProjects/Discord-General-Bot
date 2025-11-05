const fs = require("fs");
let Discord = require("discord.js");
let currencylogs = require("../../storage/currencylogs.json");


module.exports.run = async (bot, message, args) => {
  let premiumserver = require("../../storage/premiumserver.json");
  let embedps = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`This command can only be used in premium servers !\nclick [here](https://discord.gg/nirvana) to donate and enjoy premium nirvana features !`);
  //if(premiumserver[message.guild.id].premiumserver == 0)return message.channel.send(embedps);

    let reason = args.join(" ").toLowerCase();
    if(!reason)return message.channel.send("You haven't specified what are you trying to buy, use .shop again !");
   
    if (reason.includes("ring") || reason.includes("rings")){
        let amount = args.slice(1).join(" ");
        if (amount.includes("-"))returnmessage.channel.send(`Invalid amount !`);
        if(!amount) amount = 1;
        if (isNaN(amount)) return message.channel.send(`The specified amount isn't valid`); 
        let amount1 = parseInt(amount, 10);
        let ringss = parseInt(currencylogs[message.author.id].rings, 10);
        let coinsss = parseInt(currencylogs[message.author.id].coins, 10);
        let price = 20000 * amount1;
        if(price > currencylogs[message.author.id].coins) return message.channel.send(`You don't have enough money in your wallet to buy ${amount} ring(s) !`); 
        currencylogs[message.author.id] = {
            coins: coinsss - price,
            bank: currencylogs[message.author.id].bank,
            fish: currencylogs[message.author.id].fish,
            weed: currencylogs[message.author.id].weed,
            rings: ringss + amount1,
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
            
                const lewdembedmm = new Discord.MessageEmbed()
                .setColor(`#000000`)
                .setDescription(`You have bought ${amount} ring(s) :ring: for $${price} `);
                message.channel.send(lewdembedmm).catch(e =>  message.channel.send(e)).catch(O_o => {})
                return;          
    }
    if (reason.includes("shipname") || reason.includes("shipnamecard") || reason.includes("shipcard")){
        let amount = args.slice(1).join(" ");
        if (amount.includes("-"))returnmessage.channel.send(`Invalid amount !`);
        if(!amount) amount = 1;
        if (isNaN(amount)) return message.channel.send(`The specified amount isn't valid`); 
        let amount1 = parseInt(amount, 10);
        let shipncc = parseInt(currencylogs[message.author.id].shipnc, 10);
        let coinsss = parseInt(currencylogs[message.author.id].coins, 10);
        let price = 50000 * amount1;
        if(price > currencylogs[message.author.id].coins) return message.channel.send(`You don't have enough money in your wallet to buy ${amount} shipname card(s) !`); 
        currencylogs[message.author.id] = {
            coins: coinsss - price,
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
            shipnc: shipncc + amount1,
            bio: currencylogs[message.author.id].bio,
            hourly: currencylogs[message.author.id].hourly,
        monthly: currencylogs[message.author.id].monthly,
        prefix: currencylogs[message.author.id].prefix,
  
        }
        fs.writeFile("./storage/currencylogs.json", JSON.stringify(currencylogs), (err) => {
          if(err) console.log(err)})

                const lewdembedmm = new Discord.MessageEmbed()
                .setColor(`#000000`)
                .setDescription(`You have bought ${amount} shipname card(s) :ship: for $${price} `);
                message.channel.send(lewdembedmm).catch(e =>  message.channel.send(e)).catch(O_o => {})
                return;          
    }
    if (reason.includes("rep") || reason.includes("reputation") || reason.includes("reps") || reason.includes("reputations")){
        let amount = args.slice(1).join(" ");
        if (amount.includes("-"))return message.channel.send(`Invalid amount !`);
        if(!amount) amount = 1;
        if (isNaN(amount)) return message.channel.send(`The specified amount isn't valid`); 
        let amount1 = parseInt(amount, 10);
        let repss = parseInt(currencylogs[message.author.id].reps, 10);
        let coinsss = parseInt(currencylogs[message.author.id].coins, 10);
        let price = 300000 * amount1;
        if(price > currencylogs[message.author.id].coins) return message.channel.send(`You don't have enough money in your wallet to buy ${amount} reputation(s) !`); 
        currencylogs[message.author.id] = {
            coins: coinsss - price,
            bank: currencylogs[message.author.id].bank,
            fish: currencylogs[message.author.id].fish,
            weed: currencylogs[message.author.id].weed,
            rings: currencylogs[message.author.id].rings,
            daily: currencylogs[message.author.id].daily,
            weekly: currencylogs[message.author.id].weekly,
            reps: repss + amount1,
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
            
                const lewdembedmm = new Discord.MessageEmbed()
                .setColor(`#000000`)
                .setDescription(`You have bought ${amount} reputations(s) :military_medal: for $${price} `);
                message.channel.send(lewdembedmm).catch(e =>  message.channel.send(e)).catch(O_o => {})
                return;          
    }
    if (reason.includes("fish")){
      let amount = args.slice(1).join(" ");
      if (amount.includes("-"))return message.channel.send(`Invalid amount !`);
      if(!amount) amount = 1;
      if (isNaN(amount)) return message.channel.send(`The specified amount isn't valid`); 
      if (amount < 1) return message.channel.send(`You cannot buy less than 1 fish`)
      let amount1 = parseInt(amount, 10);
      let fishss = parseInt(currencylogs[message.author.id].fish, 10);
      let coinsss = parseInt(currencylogs[message.author.id].coins, 10);
      let price = 300 * amount1;
      if(price > currencylogs[message.author.id].coins) return message.channel.send(`You don't have enough money in your wallet to buy ${amount} fish !`); 
      currencylogs[message.author.id] = {
          coins: coinsss - price,
          bank: currencylogs[message.author.id].bank,
          fish: fishss + amount1,
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
          
              const lewdembedmm = new Discord.MessageEmbed()
              .setColor(`#000000`)
              .setDescription(`You have bought ${amount} fish :fish: for $${price} `);
              message.channel.send(lewdembedmm).catch(e =>  message.channel.send(e)).catch(O_o => {})
              return;          
  }
    if (reason.includes("weed")){
        let amount = args.slice(1).join(" ");
        if (amount.includes("-"))return message.channel.send(`Invalid amount !`);
        if(!amount) amount = 10;
        if (isNaN(amount)) return message.channel.send(`The specified amount isn't valid`); 
        if (amount < 10) return message.channel.send(`You cannot buy less than 10 grams of weed`)
        let amount1 = parseInt(amount, 10);
        let weedss = parseInt(currencylogs[message.author.id].weed, 10);
        let coinsss = parseInt(currencylogs[message.author.id].coins, 10);
        let price = 500 * amount1;
        if(price > currencylogs[message.author.id].coins) return message.channel.send(`You don't have enough money in your wallet to buy ${amount} gram(s) of weed !`); 
        currencylogs[message.author.id] = {
            coins: coinsss - price,
            bank: currencylogs[message.author.id].bank,
            fish: currencylogs[message.author.id].fish,
            weed: weedss + amount1,
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
            
                const lewdembedmm = new Discord.MessageEmbed()
                .setColor(`#000000`)
                .setDescription(`You have bought ${amount} gram(s) of weed <:nvweed:879855728377069609> for $${price} `);
                message.channel.send(lewdembedmm).catch(e =>  message.channel.send(e)).catch(O_o => {})
                return;          
    }
    


};

module.exports.config = {
  name: "buy"
};