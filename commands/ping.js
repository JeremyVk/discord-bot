const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Reply whith pong'),
	async execute(message) {
		return message.reply('PONG !');
	},
};