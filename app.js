// express stuff to keep it alive
var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  response.send('its alive')
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


const _ = require('lodash')

// Load up the discord.js library
const Discord = require("discord.js")

// This is your client. Some people call it `bot`, some people call it `self`, 
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client()
// Here we load the config.json file that contains our token and our prefix values. 
const config = {
    prefix: '+',
    token: process.env.DISCORD_TOKEN
}

const fetch = require('node-fetch').default
const querystring = require('querystring')

const owHeroes = ["doomfist", "genji", "mccree", "sombra", "reaper", "soldier", "tracer", "pharah", "widowmaker", "hanzo", "mei", "bastion", "torb", "junkrat","rein", "winston", "dva", "orisa", "hog", "zarya", "ana", "mercy", "zen", "lucio", "symmetra"]

const ranksEmoji = { none: '<:FeelsBadMan:320994518315040768>', master: '<:Master:359128052900298763>', diamond: '<:Diamond:359128052678131725>', grandmaster: '<:Grandmaster:301744808400257024>', top500: '<:Top500:359128053164539934>'}

const members = ['Moharu-1328', 'ANƘLE-1261', 'Apocalypse35-1232', 'TedioF-1526', 'VinnyMǶ-1658', 'RochaFelpuda-11761']
const memberNames = ['Moharu', 'ANƘLE', 'Apocalypse35', 'TedioF', 'VinnyMǶ', 'RochaFelpuda']
const getMemberRanks = async m => {
    let ranks = []
    for(let member of m){
        let r = await fetch(`https://owapi.net/api/v3/u/${querystring.escape(member)}/stats`).then(r => r.json()).then(r => r.us.stats.competitive.overall_stats)
        ranks.push({ rank: r.comprank, tier: r.tier })
        await new Promise((resolve, reject) => setTimeout(() => resolve(), 1000))
    }
    return ranks
}

const membrosMessage = `
Roster:

    KING ARochaFelpuda - Flex (SP) :star: CAPITÃO
    KING Apocostinha35 - DPS - (SP) :crossed_swords:
    KING VinnyTearing - DPS/Flex (SP) :crossed_swords:
    KING Ancli - Tank (SP) :shield:
    KING Tedi ofi - Suporte (SP) :ambulance:
    KING Menino ali Moharu - Suporte (RS) :ambulance:
`
// config.token contains the bot's token
// config.prefix contains the message prefix.
client.on("ready", () => {
    // This event will run if the bot starts, and logs in, successfully.
    console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`) 
    // Example of changing the bot's playing game to something useful. `client.user` is what the
    // docs refer to as the "ClientUser".
    client.user.setGame(`flashbang e dando 96 de d dps`)
})
client.on("message", async message => {
    // This event will run on every single message received, from any channel or DM.
    // It's good practice to ignore other bots. This also makes your bot ignore itself
    // and not get into a spam loop (we call that "botception").
    if(message.author.bot) return
    // Also good practice to ignore any message that does not start with our prefix, 
    // which is set in the configuration file.
    if(message.content.indexOf(config.prefix) !== 0) return
    // Here we separate our "command" name, and our "arguments" for the command. 
    // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
    // command = say
    // args = ["Is", "this", "the", "real", "life?"]
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()
    // Let's go with a few common example commands! Feel free to delete or change those.
    if(command === "scrim") {
        // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
        // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
        await message.channel.send("Meu nome é Felipe Rocha e eu sou o homem mais rápido à achar uma scrim vivo. Quando era criança, vi minha mãe ficar sem scrim por algo impossível, meu pai foi condenado por dar disband no time dela, então a SAOC me tornou o impossível. Para o mundo externo, sou um Jogador de OW, mas secretamente uso minha velocidade em achar scrims para combater os memes e ajudar outros como eu, e um dia, encontrarei quem desmarcou a scrim e  terei justiça para o meu time. Eu sou o FELSP!")
    }

    if(command === "membros") {
        message.channel.send(membrosMessage)
    }

    if(command === "soquinho") {
        message.channel.send("PROCURA-SE: Soquinho do ANKLE, caso você tenha visto ele favor contatar A Rocha Felpuda.")
    }

    if(command === "costinhas" || command === "apoca" || command === "apocostinhas") {
        message.channel.send("https://gfycat.com/gifs/detail/PartialRawBlackbear")
    }

    if(command === "tedio") {
        message.channel.send("https://gfycat.com/gifs/detail/CraftyAchingBobcat")
    }
     
    if(command === "tapita") {
        message.channel.send("VAI TOMA NO CUUU!!!")
    }
  
    if(command === "felsp") {
        message.channel.send("https://gfycat.com/gifs/detail/FamiliarSpanishBlesbok")
    }
    
    if(command === "rodolpho") {
        message.channel.send("https://www.youtube.com/watch?v=6iHdVa9YQtI")
    }
    
    if(command === "comets") {
        message.channel.send("RIP :candle:")
    }
  
    if(command === "help") {
        message.channel.send("sorry no help for you :)")
    }

    if(command === "godzin") {
        message.channel.send("https://gfycat.com/gifs/detail/AgedAcidicAlpaca")
    }
    
    if((command === "bom" && args[0] === "dia") || (command === "boa" && (args[0] === "tarde" || args[0] === "noite"))) {
        message.channel.send("hehe.. Depende do ponto de vista")
    }
    
    if(command === "lugatao") message.channel.send("rakz god ...")
  
    if(command === "treino) message.channel.send("Treino todo dia as 20 seu vagabundo!")

    if(command === "rakz" && args[0] === "god") message.channel.send(owHeroes[Math.round(Math.random()*owHeroes.length)])

    if(command === "ranks") {
        const m = await message.channel.send("Loading ranks...");
        let msg = ''
        let avg = 0
        let count = 0

        try {
            let ranks = await getMemberRanks(members)
            msg = ranks.map((info, i) => {
                if(info.rank !== null){
                    avg += Number(info.rank)
                    count += 1
                }
                let tier = info.tier ? info.tier : 'none'
                return `${ranksEmoji[tier]}\t**${info.rank || 'md10'}**\t${memberNames[i]}`
            }).join('\n')
            let average = avg/count
            m.edit(msg + `\n\nMédia do time: **${Math.round(average)}**`)
        } catch (e) {
            console.log('cant fetch ranks')
            console.log(e)
            msg = 'Error searching ranks, try calling Moharu to make him fix this shit'
            m.edit(msg)
        }
    }

})

client.login(config.token)
