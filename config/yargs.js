const argv = require('yargs/yargs')(process.argv.slice(2))
.option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'multiply base number'
})
.option('l', {
    alias: 'list',
    type: 'boolean',
    default: false,
    describe: 'shows the table'
})
.option('t', {
    alias: 'times',
    type: 'number',
    default: 10,
    describe: 'set times lenght'
})
.check((argv, options) => {

    if (isNaN(argv.b)) {
        throw new Error('la base debe de ser un numero');
    }
    if (isNaN(argv.t)) {
        throw new Error('el limite debe de ser un numero');
    }
    return true;
})
.argv
;

module.exports = argv;