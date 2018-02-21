const Discord = require("discord.js");
const client = new Discord.Client();

client.on("message", message => {
  if (message.author.id === "415330227451985920") message.reply("**Fool** you ank suppose to be in here.");
});

client.on('message', msg => {
  if (msg.content === "hey cj") {
    msg.reply("**Shut the fuck up, Bitch!**");
  }
});
                 
client.login(process.env.BOT_TOKEN);
