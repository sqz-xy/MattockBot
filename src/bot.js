// Token saved in config.json
const config = require('./config.json');

const { Client, Intents, Message } = require('discord.js'); 
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
    console.log(`${client.user.tag} has logged in!`);
})

client.login(config.token);

