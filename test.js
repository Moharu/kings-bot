const fetch = require('node-fetch').default
const querystring = require('querystring')

const members = ['Moharu-1328', 'ANƘLE-1261', 'Apocalypse35-1232', 'TedioF-1526', 'VinnyMǶ-1658']
const getMemberRanks = async function(m) {
    let ranks = []
    for(let member of m){
        let r = await fetch(`https://owapi.net/api/v3/u/${querystring.escape(member)}/stats`).then(r => r.json()).then(r => r.us.stats.competitive.overall_stats)
        let string = `${member}: ${r.comprank || 'memede10'}`
        ranks.push(string)
        await new Promise((resolve, reject) => setTimeout(() => resolve(), 1000))
    }
    console.log(ranks)
    return ranks
}

getMemberRanks(members)

