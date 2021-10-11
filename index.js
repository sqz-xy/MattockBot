// Token saved in config.json
const config = require('./config.json');
const fs = require('fs');
const { Client, Intents, Collection, Message } = require('discord.js'); 
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}

client.on('ready', () => {
    console.log(`${client.user.tag} has logged in!`);
})

client.on('messageCreate', (message) => {
	console.log(message);
	if (message.content.toLowerCase().includes('balls')) {
		message.reply({
			content: "guhhhh",
		})
	}
})

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
})

client.login(config.token);

