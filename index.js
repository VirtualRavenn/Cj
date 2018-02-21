const Discord = require("discord.js");
const client = new Discord.Client();

client.on("message", message => {
  if (message.author.id === "292545042059624449") message.reply("**Fool** you ank suppose to be in here.");
});

client.on('message', msg => {
  if (msg.content.toLowerCase()=== "@Cj#7244") {
    msg.reply("Shut the fuck up, Bitch!");
  }
});
                 
client.login(process.env.BOT_TOKEN);
