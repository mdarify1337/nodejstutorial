console.log('hello Nodejs');
// const { console } = require('inspector');
// Complete course of nodejs
// how nodejs differs from vanilla js
// 1 -> node runs on a server and not on a browser (backend not frontend)
// 2 -> the console is the terminal window
// 3 -> global object instead of window object
// console.log('global -> \n',global); // global object in nodejs
// 4 -> has common core modules that well be exploring
// 5 -> Commonjs modules instead of ES6 modules


const os = require('os');
console.log('os -> \n',
    os.type(), 
    os.version(), 
    os.homedir()
); // os module in nodejs

const path = require('path');

console.log(__dirname, '  ', __filename); // __dirname and __filename in nodejs
console.log(path.dirname(__filename)); // path module in nodejs
console.log(path.basename(__filename));
console.log(path.extname(__filename));

console.log(path.parse(__filename)); // path.parse() in nodejs

const math = require('./Math');


console.log(math.add(1, 2));
console.log(math.substract(1, 2));
console.log(math.multiply(1, 2));
console.log(math.divide(1, 2));