module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Le bot est en route vers la lune !`);

        client.user.setActivity('coding', { type: 'PLAYING' })
	},
};