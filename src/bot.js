// Bot token saved as environmental variable 
require('dotenv').config();

const { Client, Intents, Message } = require('discord.js'); 
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
    console.log(`${client.user.tag} has logged in!`);
})

client.login(process.env.DISCORDJS_BOT_TOKEN);
