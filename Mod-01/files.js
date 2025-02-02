const { fi } = require('date-fns/locale');
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

process.on('uncaughtException', err => {
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
    'start -> : Nice to meet you to, how are you today ?', err => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('File appended successfully');
    })

fs.writeFile(path.join(__dirname, '', 'reply.txt'), 
    'start -> : Nice to meet you to, how are you today ?\n', err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File written successfully');
    fs.appendFile(path.join(__dirname, '', 'reply.txt'),
        'Nice to meet you to, how are you today ? <- end', err => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('File appended successfully');
            fs.rename(path.join(__dirname, '', 'reply.txt'),
                path.join(__dirname, '', 'renamed.txt'), err => {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    console.log('result -> File renamed successfully');
                })
        }
    )
})

const fspromise = require('fs').promises;

async function fileops() {
    try {
        const data = await fspromise.readFile(path.join(__dirname, '', 'read.txt'), 
        'utf8');
        console.log('data -> ',data);
        await fspromise.writeFile(path.join(__dirname, '', 'write.txt'), 
        data);
        await fspromise.appendFile(path.join(__dirname, '', 'write.txt'), 
        '\nend -> : Nice to meet you to, how are you today ?');
        await fspromise.rename(path.join(__dirname, '', 'renamed.txt'),
        path.join(__dirname, '', 're-file.txt'));
        const newdata = await fspromise.readFile(path.join(__dirname, '', 're-file.txt'), 'utf8' );
        console.log('new data -> ',newdata);
    } catch (err) {
        console.error(err);
    }
}

fileops();
