const { SlashCommandBuilder } = require('@discordjs/builders');
const {
	AudioPlayerStatus,
	StreamType,
	createAudioPlayer,
	createAudioResource,
	joinVoiceChannel,
    AudioPlayer,
} = require('@discordjs/voice');
const { token, clientId, guildId } = require('../config.json');
const ytdl = require('ytdl-core');
const discordTTS=require("discord-tts");
module.exports = {
	data: new SlashCommandBuilder()
		.setName('yt-player')
		.setDescription('Joue une vidéo youtube ds un channel')
        .addStringOption(option =>
		    option.setName('message')
			.setDescription('Lien de la vidéo youtube')
			.setRequired(true)),
        
	async execute(interaction, string) {
        
    // const voiceChannel = interaction.member.voice.channel.id
    // console.log(interaction.member.voice.channel.id);
    let query = interaction.options._hoistedOptions[0].value
// console.log(query);
console.log(interaction.member.voice.channel);
            if(interaction.member.voice.channel === null) {
                 return interaction.reply('tu dois être connecté à un channel vocal pour lire de la musique')
            } else {
                const connection = joinVoiceChannel({
                channelId: interaction.member.voice.channel.id,
                guildId: interaction.guild.id,
                adapterCreator: interaction.guild.voiceAdapterCreator,
        })
                const stream = ytdl(query, { filter: 'audioonly' });
                // console.log(stream);
                const resource = createAudioResource(stream, { inputType: StreamType.Arbitrary });
                const player = createAudioPlayer();
                player.play(resource)
                connection.subscribe(player);
                interaction.reply('je joue de la musique')
                player.on(AudioPlayerStatus.Idle, () => connection.destroy())
            }
            
      
        
           

        // console.log(interaction.client.actions.client);
        // console.log(interaction.member.voice.channel.id);
        // console.log(interaction.client.channel);
        // console.log(interaction.guild.id);
        // console.log(interaction.guild.voiceAdapterCreator);
        // console.log(interaction.options._hoistedOptions[0].value);


        
        // const stream= playerTask.playText('Hello world')
        // const stream=discordTTS.getVoiceStream(query);

        

	},
};