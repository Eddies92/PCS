const fs = require('fs')

let read = fs.readFileSync(process.argv[2]);
let amountOfLines = read.toString().split('\n').length - 1;
console.log(amountOfLines);