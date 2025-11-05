const Discord = require("discord.js");
const imageSearch = require('image-search-google');


module.exports.run = async (bot, message, args) => {
    if (args.length < 1) {
      return message.reply('Please provide an image URL to send.');
    }
    let XD = args.join(" "); 

 
    const client = new imageSearch('ce1a4df328da89075', 'AIzaSyA5VTvT1nJ91J5ofOu5K8Dhqbn5PjlY12o');
    const options = {page:1};
    try {
    client.search(XD, options)
        .then(images => {
            if(!images) return message.reply("An error has occured, make sure the inserted text wasn't spelt wrong !")
            var avEmbed;
            for (let i = 0; i < images.length; i++) {
                const index = images[1];
        avEmbed = new Discord.MessageEmbed()
             .setThumbnail(index.thumbnail)
             .setImage(index.url)
            .setDescription(index.snippet)
            .setFooter(`Search page 1/${images.length} | Requested by ${message.author.tag}`)
          }


          async function showAvatar() {

            const response = await message.channel.send(avEmbed).catch(e =>  message.channel.send(e)).catch(O_o => {})
          .catch(error => {
            message.channel.send("An error has occured, make sure the inserted text wasn't spelt wrong !")
            console.log(error)})
            if(!bot.imageslogs[message.guild.id]){
              bot.imageslogs[message.guild.id] = {
                results: "None",
                resultslength: 0,
                imagesearcher: "None",
                currentpage: 0,
                imagechannel: "None",
                msgid: 0,
            }}
        bot.imageslogs[message.guild.id] = {
        results: images,
        resultslength: parseInt(images.length, 10) - 1,
        imagesearcher: message.author.id,
        currentpage: 1,
        imagechannel: message.channel.id,
        msgid: response.id,
      }    
          
            // wait 3 seconds
            await new Promise((resolve, reject) => setTimeout(resolve, 3000));

          }
          try {
          showAvatar();
        }catch{message.channel.send("An error has occured, make sure the inserted text wasn't spelt wrong !")
      }
    // search for certain size
 //   client.search('Mahatma Gandhi', {size: 'large'});// pm2 stop test.js  pm2 start test.js --no-daemon
     
    // search for certain type
   // client.search('Indira Gandhi', {type: 'face'});
})
}catch{
  message.channel.send("An error has occured, make sure the inserted text wasn't spelt wrong !")
}

};

module.exports.config = {
    name: "image",
  aliases: ["img", "imagesearch", "im"]
};
