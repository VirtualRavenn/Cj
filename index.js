const Discord = require("discord.js");
const client = new Discord.Client();

client.on("message", message => {
  if (message.author.id === "415330227451985920") message.reply("Want some more **FATASS?**");
});

client.on("message", message => {
  if (message.author.id === "416405151050366976") message.reply("**I HATE GRAVITY!**");
});

client.on("message", message => {
  if (message.author.id === "416418286184431636") message.reply("I don't want a **nightstick up the ass**.");
});417500499424706560

client.on("message", message => {
  if (message.author.id === "417500499424706560") message.reply("**OH SHIT!**");
});

client.on('message', msg => {
  if (msg.content.toLowerCase()=== "") {
    msg.reply("");
  }
});

client.login(process.env.BOT_TOKEN);
