const fs = require('fs');
const path = require('path');
fs.readFile(path.join(__dirname, '', 'read.txt'), 
    'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data);
});

process.on( 'uncaughtException',err => {
    console.error(`Caught exception: ${err}`);
    process.exit(1);
})


fs.writeFile(path.join(__dirname, '', 'write.txt'),
    'Nice to meet you! \n', err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File written successfully');
})

fs.appendFile(path.join(__dirname, '', 'write.txt'),
    'Nice to meet you to, how are you today ?', err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File appended successfully');
})
