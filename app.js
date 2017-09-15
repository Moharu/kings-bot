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
    client.user.setGame(`96 de dps`)
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

if(command === "costinhas") {
    message.channel.send("https://clips.twitch.tv/TalentedTallWombatTF2John/edit?muted=true")
}

if(command === "tedio") {
    message.channel.send("https://im4.ezgif.com/tmp/ezgif-4-dda00fe9e8.gif")
}
    
if(command === "felsp") {
    message.channel.send("https://gfycat.com/gifs/detail/FamiliarSpanishBlesbok")
}

})

client.login(config.token)
