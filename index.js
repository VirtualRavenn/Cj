const Discord = require("discord.js");
const client = new Discord.Client();

client.on("message", message => {
  if (message.author.id === "415704844221808640") message.reply("**Fool** you aren't suppose to be in here.");
});

client.on('message', msg => {
  if (msg.content.toLowerCase()=== "what's ya order?") {
    msg.reply("I'll have 2 number nines, a number nine large, a number six with extra dip, a number seven, 2 number 45's, one with cheese and a large soda.");
  }
});

if(command === "purge") {
        let messagecount = parseInt(args[1]) || 1;

        var deletedMessages = -1;

        message.channel.fetchMessages({limit: Math.min(messagecount + 1, 100)}).then(messages => {
            messages.forEach(m => {
                if (m.author.id == bot.user.id) {
                    m.delete().catch(console.error);
                    deletedMessages++;
                }
            });
        }).then(() => {
                if (deletedMessages === -1) deletedMessages = 0;
                message.channel.send(`:white_check_mark: Purged \`${deletedMessages}\` messages.`)
                    .then(m => m.delete(2000));
        }).catch(console.error);
    }

client.login(process.env.BOT_TOKEN);
