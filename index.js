const Discord = require("discord.js");
const client = new Discord.Client();

client.on("message", message => {
  if (message.author.id === "415330227451985920") message.reply("Want any more fatass?");
});
                 
client.login(process.env.BOT_TOKEN);
