
const {mkFile, mkFileAsync} = require("./helpers/multiply.js")
const argv = require('./config/yargs');

console.clear();

console.log(argv);
console.log('base: yargs', argv.base);

mkFileAsync(argv.list,argv.base,argv.times)
    .then(fileName => console.log(fileName, 'creado async'))
    .catch(err => console.log(err));