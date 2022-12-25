const os = require('os');

console.log('Version SO', os.release());
console.log('Memoria libre', os.freemem());
console.log('Memoria total', os.totalmem());
console.log('Memoria usada', os.totalmem() - os.freemem());
console.log('Memoria usada %', (os.totalmem() - os.freemem()) / os.totalmem() * 100);