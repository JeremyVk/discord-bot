let discordUsers = [
    {
        "id": 296635121094623232,
        "name": "Corentin"
    },
     {
        "id": 271964244579188736,
        "name": "Anthony"
    },
    {
        "id": 230429341673193473,
        "name": "Jérémy",
        "phrasePerso": "Occupe toi de me rajouter des fonctionnalités !"
 
    },
    {
        "id": 231814222974156800,
        "name": "Florian",
        "phrasePerso": "Va t'occuper de Loris au lieu de faire joujou avec moi !"
    },
    {
        "id": 427848658818695178,
        "name": "Baptiste",
        "phrasePerso": "JVAIS TE BAN"
    }
    
]

module.exports = {
    name: "messageCreate",
    once: false, 
    execute(msg, client) {
    if(msg.author.bot){
        return
    }
    let name
    let phrasePerso
    discordUsers.forEach(element => {
        if(element.id == msg.author.id) {
            name = element.name
            phrasePerso = element.phrasePerso
        //    let ok = msg.reply(`${element.name}, je t'ai déja dit d'arrêter d'envoyer des messages`
        }
    });
    if(name !== undefined) {
        msg.reply(`${name}, ${phrasePerso}`)
    } else {
                msg.reply(`je ne connais pas ton nom`)
        }
    }
    
}