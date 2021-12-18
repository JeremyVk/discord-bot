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
const say = require('say')
const FS = require('fs')
module.exports = {
	data: new SlashCommandBuilder()
		.setName('tts')
		.setDescription('Joue une vidéo youtube ds un channel')
        .addStringOption(option =>
		    option.setName('message')
			.setDescription('Lien de la vidéo youtube')
			.setRequired(true)),
        
	async execute(interaction, string) {

    let query = interaction.options._hoistedOptions[0].value
// console.log(query);



    function tts(interaction, query) {
    if (!FS.existsSync('./temp')){
        FS.mkdirSync('./temp');
    }
    const timestamp = new Date().getTime();
    const soundPath = `./temp/${timestamp}.wav`;
    say.export(query, 'Thomas', 1, soundPath, (err) => {
        if (err) {
            console.error(err);
            return;
        }else {
            const connection = joinVoiceChannel({
            channelId: interaction.member.voice.channel.id,
            guildId: interaction.guild.id,
            adapterCreator: interaction.guild.voiceAdapterCreator,
        })
            const player = createAudioPlayer()
            console.log(soundPath);
            const ressource = createAudioResource(soundPath)
            player.play(ressource)
            connection.subscribe(player)

        //    connection.playFile(soundPath).on('end', () => {
        //             connection.disconnect();
        //             FS.unlinkSync(soundPath);
        //         }).on('error', (err) => {
        //             console.error(err);
        //             connection.disconnect();
        //             FS.unlinkSync(soundPath);
        //         }); 
        };
        })
    }


    tts(interaction, query)
    }}
