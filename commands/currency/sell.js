const fs = require("fs");
let Discord = require("discord.js");
let currencylogs = require("../../storage/currencylogs.json");


module.exports.run = async (bot, message, args) => {
    let premiumserver = require("../../storage/premiumserver.json");
  let embedps = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`This command can only be used in premium servers !\nclick [here](https://discord.gg/nirvana) to donate and enjoy premium nirvana features !`);
  //if(premiumserver[message.guild.id].premiumserver == 0)return message.channel.send(embedps);
    let eeeeef = args[0]
    let reason = eeeeef;
    let ucoins = currencylogs[message.author.id].coins;
    let ubank = currencylogs[message.author.id].bank;
    let amount = parseInt(ucoins, 10);
    let amount2 = parseInt(ubank, 10);
    totalbal = amount + amount2;

    let embed = new Discord.MessageEmbed()
    .setTitle("You haven't specified what are you trying to sell !")
    .setDescription(`\n**Inventory items:**\n\n:ring: ${currencylogs[message.author.id].rings} ring(s): $60000 \n:ship: ${currencylogs[message.author.id].shipnc} shipname card(s): $30000\n<:nvweed:879855728377069609> ${currencylogs[message.author.id].weed} gram(s) of weed: $300\n:military_medal: ${currencylogs[message.author.id].reps} Reputation point(s): $50000\n:fish: ${currencylogs[message.author.id].fish} fish(s): $250`)
    .setColor("RANDOM") 
    .setFooter(`You have $${totalbal} total coins`) 
    .setTimestamp();
    if(!eeeeef)return message.channel.send(embed).catch(e =>  message.channel.send(e)).catch(O_o => {})
    
    if (reason.includes("ring") || reason.includes("rings")){
        let argss = args[1];
        let amount = argss;
        
        if(!argss) return message.channel.send(`You have to specify the amount !`);
        if (argss.includes("-"))return message.channel.send(`Invalid amount !`);
        if (argss.includes("*"))return message.channel.send(`Invalid amount !`);
        if (argss.includes("+"))return message.channel.send(`Invalid amount !`);
        if (argss.includes("/"))return message.channel.send(`Invalid amount !`);
        if (isNaN(amount)) return message.channel.send(`The specified amount isn't valid`); 
        let amount1 = parseInt(amount, 10);
        let ringss = parseInt(currencylogs[message.author.id].rings, 10);
        let coinsss = parseInt(currencylogs[message.author.id].coins, 10);
        let price = 10000 * amount1;
        if(amount1 > currencylogs[message.author.id].rings) return message.channel.send(`You don't have enough rings to sell !`); 
        currencylogs[message.author.id] = {
            coins: coinsss + price,
            bank: currencylogs[message.author.id].bank,
            fish: currencylogs[message.author.id].fish,
            weed: currencylogs[message.author.id].weed,
            rings: ringss - amount1,
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
                .setDescription(`You just sold ${amount} ring(s) :ring: for $${price} `);
                message.channel.send(lewdembedmm).catch(e =>  message.channel.send(e)).catch(O_o => {})
                return;          
    }
    if (reason.includes("shipname") || reason.includes("shipname card") || reason.includes("shipcard") || reason.includes("ship name card")){
        let argss = args[1];
        let amount = argss;
        if(!argss) return message.channel.send(`You have to specify the amount !`);
        if (argss.includes("-"))return message.channel.send(`Invalid amount !`);
        if (argss.includes("*"))return message.channel.send(`Invalid amount !`);
        if (argss.includes("+"))return message.channel.send(`Invalid amount !`);
        if (argss.includes("/"))return message.channel.send(`Invalid amount !`);
        if (isNaN(amount)) return message.channel.send(`The specified amount isn't valid`); 
        let amount1 = parseInt(amount, 10);
        let shipncc = parseInt(currencylogs[message.author.id].shipnc, 10);
        let coinsss = parseInt(currencylogs[message.author.id].coins, 10);
        let price = 30000 * amount1;
        if(amount1 > currencylogs[message.author.id].shipnc) return message.channel.send(`You don't have enough shipname card to sell !`); 
        currencylogs[message.author.id] = {
            coins: coinsss + price,
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
        fs.writeFile("./storage/currencylogs.json", JSON.stringify(currencylogs), (err) => {
            if(err) console.log(err)})
            
                const lewdembedmm = new Discord.MessageEmbed()
                .setColor(`#000000`)
                .setDescription(`You just sold ${amount} shipname card(s) :ship: for $${price} `);
                message.channel.send(lewdembedmm).catch(e =>  message.channel.send(e)).catch(O_o => {})
                return;          
    }
    if (reason.includes("rep") || reason.includes("reputation") || reason.includes("reps") || reason.includes("reputations")){
        let argss = args[1];
        let amount = argss;
        if(!argss) return message.channel.send(`You have to specify the amount !`);
        if (argss.includes("-"))return message.channel.send(`Invalid amount !`);
        if (argss.includes("*"))return message.channel.send(`Invalid amount !`);
        if (argss.includes("+"))return message.channel.send(`Invalid amount !`);
        if (argss.includes("/"))return message.channel.send(`Invalid amount !`);
        if (isNaN(amount)) return message.channel.send(`The specified amount isn't valid`); 
        let amount1 = parseInt(amount, 10);
        let repss = parseInt(currencylogs[message.author.id].reps, 10);
        let coinsss = parseInt(currencylogs[message.author.id].coins, 10);
        let price = 50000 * amount1;
        if(amount1 > currencylogs[message.author.id].reps) return message.channel.send(`You don't have enough reputations to sell !`); 
        currencylogs[message.author.id] = {
            coins: coinsss + price,
            bank: currencylogs[message.author.id].bank,
            fish: currencylogs[message.author.id].fish,
            weed: currencylogs[message.author.id].weed,
            rings: currencylogs[message.author.id].rings,
            daily: currencylogs[message.author.id].daily,
            weekly: currencylogs[message.author.id].weekly,
            reps: repss - amount1,
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
                .setDescription(`You just sold ${amount} reputation(s) :military_medal: for $${price} `);
                message.channel.send(lewdembedmm).catch(e =>  message.channel.send(e)).catch(O_o => {})
                return;          
    }
    if (reason.includes("weed") || reason.includes("weeds")){
        let argss = args[1];
        let amount = argss;
        if(!argss) return message.channel.send(`You have to specify the amount !`);
        if (argss.includes("-"))return message.channel.send(`Invalid amount !`);
        if (argss.includes("*"))return message.channel.send(`Invalid amount !`);
        if (argss.includes("+"))return message.channel.send(`Invalid amount !`);
        if (argss.includes("/"))return message.channel.send(`Invalid amount !`);
        if (isNaN(amount)) return message.channel.send(`The specified amount isn't valid`); 
        let amount1 = parseInt(amount, 10);
        let weedss = parseInt(currencylogs[message.author.id].weed, 10);
        let coinsss = parseInt(currencylogs[message.author.id].coins, 10);
        let price = 300 * amount1;
        if(amount1 > currencylogs[message.author.id].weed) return message.channel.send(`You don't have enough weed to sell !`); 
        currencylogs[message.author.id] = {
            coins: coinsss + price,
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
        fs.writeFile("./storage/currencylogs.json", JSON.stringify(currencylogs), (err) => {
            if(err) console.log(err)})
                const lewdembedmm = new Discord.MessageEmbed()
                .setColor(`#000000`)
                .setDescription(`You just sold ${amount} gram of weed <:nvweed:879855728377069609> for $${price} `);
                message.channel.send(lewdembedmm).catch(e =>  message.channel.send(e)).catch(O_o => {})
                return;          
    }
    if (reason.includes("fish") || reason.includes("fishes")){
        let argss = args[1];
        let amount = argss;
        if(!argss) return message.channel.send(`You have to specify the amount !`);
        if (argss.includes("-"))return message.channel.send(`Invalid amount !`);
        if (argss.includes("*"))return message.channel.send(`Invalid amount !`);
        if (argss.includes("+"))return message.channel.send(`Invalid amount !`);
        if (argss.includes("/"))return message.channel.send(`Invalid amount !`);
        if (isNaN(amount)) return message.channel.send(`The specified amount isn't valid`); 
        let amount1 = parseInt(amount, 10);
        let fishs = parseInt(currencylogs[message.author.id].fish, 10);
        let coinsss = parseInt(currencylogs[message.author.id].coins, 10);
        let price = 250 * amount1;
        if(amount1 > currencylogs[message.author.id].fish) return message.channel.send(`You don't have enough fish to sell !`); 
        currencylogs[message.author.id] = {
            coins: coinsss + price,
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
        fs.writeFile("./storage/currencylogs.json", JSON.stringify(currencylogs), (err) => {
            if(err) console.log(err)})
            
                const lewdembedmm = new Discord.MessageEmbed()
                .setColor(`#000000`)
                .setDescription(`You just sold ${amount} :fish:(s) for $${price} `);
                message.channel.send(lewdembedmm).catch(e =>  message.channel.send(e)).catch(O_o => {})
                return;          
    }
       
};

module.exports.config = {
  name: "sell"
};