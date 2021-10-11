// Token saved in config.json
const config = require('./config.json');

const { Client, Intents, Message } = require('discord.js'); 
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
    console.log(`${client.user.tag} has logged in!`);
})

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	}
});

client.login(config.token);

