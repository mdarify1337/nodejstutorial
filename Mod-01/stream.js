const fs = require('fs');
const rs = fs.createReadStream('read.txt', {encoding:'utf8'});
const ws = fs.createWriteStream('write.txt');
// first Method -> using chuncked
rs.on('data', (dataChunck) => {
    console.log('data event');
    ws.write(dataChunck);
});

// second Method -> using pipe
rs.pipe(ws);