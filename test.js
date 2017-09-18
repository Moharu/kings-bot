const fetch = require('node-fetch').default
const querystring = require('querystring')

const members = ['Moharu-1328', 'ANƘLE-1261', 'Apocalypse35-1232', 'TedioF-1526', 'VinnyMǶ-1658', 'RochaFelpuda-11761']
const memberNames = ['Moharu', 'ANƘLE', 'Apocalypse35', 'TedioF', 'VinnyMǶ', 'RochaFelpuda']
const getMemberRanks = async function(m) {
    let ranks = []
    for(let member of m){
        let r = await fetch(`https://owapi.net/api/v3/u/${querystring.escape(member)}/stats`).then(r => r.json()).then(r => r.us.stats.competitive.overall_stats)
        let string = r.comprank
        ranks.push(string)
        await new Promise((resolve, reject) => setTimeout(() => resolve(), 1000))
    }
    console.log(ranks)
    let msg = ''
    let avg = 0
    let count = 0
    try {
        msg = ranks.map((rank, i) => {
            if(rank !== null){
                avg += Number(rank)
                count += 1
            }
            return `**${memberNames[i]}:**   ${rank || 'memeDe10'}`
        }).join('\n')
        let average = avg/count
        console.log(avg, count)
        console.log(msg + `\nMédia do time: ${Math.round(average)}`)
    } catch (e) {
        console.log('cant fetch ranks')
        console.log(e)
        msg = 'Error searching ranks, try calling Moharu to make him fix this shit'
        console.log(msg)
    }
    return ranks
}

getMemberRanks(members)

