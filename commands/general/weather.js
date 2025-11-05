const Discord = module.require("discord.js")
const weather = require("weather-js")

module.exports.run = async (bot, message, args) => {

    weather.find({search: args.join(" ").toLowerCase(), degreeType: "C"}, function(err, result) {
        if(err) message.channel.send(err)
const missingArgsEmbed = new Discord.MessageEmbed() // Creates the embed thats sent if the command isnt run right
        .setColor(`#000000`)
      //  .setTitle('Missing Arguments!')
        .setDescription('**please enter a valid location**')
        //If the place entered is invalid
        if(!result)return message.channel.send(missingArgsEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})
        if(result.length == 0) {
          message.channel.send(missingArgsEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})
            return
        }

        //Variables
        var current = result[0].current //Variable for the current part of the JSON Output
        var location = result[0].location //This is a variable for the location part of the JSON Output

        //Sends weather log in embed
        let embeddd = new Discord.MessageEmbed()
           .setDescription(`**${current.skytext}**`) //How the sky looks like
           .setAuthor(`Weather for ${current.observationpoint}`) //Shows the current location of the weater
           .setThumbnail(current.imageUrl) 
           .setColor(0x00AE86)
           .addField("Timezone", `UTC${location.timezone}`, true) //Shows the timezone
         //  .addField("Degree Type", location.degreetype, true) //Shows the degrees in Celcius
           .addField("Temperature", `${current.temperature} ${location.degreetype}`, true)
           .addField("Feels like", `${current.feelslike} Degrees`, true)
           .addField("Winds", current.winddisplay, true)
           .addField("Humidity", ` ${current.humidity}%`, true)
           .addField("Date", `${current.day} ${current.date}`, true)
          // .addField("Date", `${current.date}`, true)
  
           message.channel.send(embeddd).catch(e =>  message.channel.send(e)).catch(O_o => {})

    })
    
    }
module.exports.config = {
    name: "weather"
}