// criando e startando um servidor web na porta 3000
var http = require('http');

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-type' : 'text/plain'});
  res.end('Hello World');
}).listen('3000');

console.log('Server running at http://localhost:3000/');
// ===

