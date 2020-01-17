const fs = require('fs')

fs.readFile(process.argv[2], function (err, read) {
    let amountOfLines = read.toString().split('\n').length - 1;
    console.log(amountOfLines);
})