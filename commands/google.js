const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('google')
		.setDescription('reply with google link')
        .addStringOption(option =>
		    option.setName('string')
			.setDescription('The input to echo back')
			.setRequired(true)),
        
	async execute(interaction, input) {
        let query = interaction.options._hoistedOptions[0].value.replace(/\s/g, '%20')

        await console.log(interaction.options._hoistedOptions[0].value);
		await interaction.reply(`https://www.google.com/search?q=${query}`);
	},
};