const http = require('http');
const { listenerCount } = require('process');

/*
const server = http.createServer();

server.on('connection', (socket)=>{
  console.log('nueva conexión detectada');
})

server.listen(2012);
console.log('escuchando en el puerto 2012');
*/

/*
const server = http.createServer((req, res)=>{
  if(req.url == '/') {
    res.write('Hola Mundo');
    res.write('desde Node.js');
    res.end();
  }
  if(req.url == '/coches') {
    res.write('Audi');
    res.end();
  }
})

server.listen(2012);
console.log('escuchando en el puerto 2012');
*/

const server = http.createServer((req, res)=>{
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1>Hola Mundo</h1>');
  res.write('<p>desde Node.js</p>');
  res.end
}).listen(2012);

