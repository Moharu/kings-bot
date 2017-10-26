const fs = require('fs')
const path = require('path')
const chalk = require('chalk')

const testsToRun = []
const it = (name, testFunction) => {
    testsToRun.push(() => {
        console.log('\n')
        console.log(chalk.magenta('Running test:\t') + name)
        try {
            testFunction()
            console.log('    ', chalk.green('OK'), '\tTest complete successfully!')
        } catch(e) {
            console.log('    ', chalk.red('Error'), '\t' + e.message)
        }
    })
}

it('Validate if moharu command exists', () => {
    const filename = path.resolve(__dirname, '../app.js')
    const fileData = fs.readFileSync(filename, 'utf-8')

    const commandIndex = fileData.indexOf('"moharu"')
    if(commandIndex === -1) {
        throw new Error('Moharu command not found!')
    }
})

it('Validate if the command message is right', () => {
    const filename = path.resolve(__dirname, '../app.js')
    const fileData = fs.readFileSync(filename, 'utf-8')

    const commandIndex = fileData.indexOf('"O MAIOR JOGADOR QUE EXISTE ALÉM DE SER O FODA DESSE TIMIZINHO BANDO DE CARREGADO AI MOHARU DEUS CARALHO VAO SE FUDER TODO MUNDO ARGENTINO NÃO TEM VEEEEEEEEEEEEEEEEEZ"')
    if(commandIndex === -1) {
        throw new Error('Moharu command message not found!')
    }
})

testsToRun.forEach(fn => fn())
