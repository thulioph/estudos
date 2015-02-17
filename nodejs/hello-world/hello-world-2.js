var http = require('http');

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-type' : 'text/html;charset=utf-8'});
  res.write('<h1>Hello World</h1>');
  res.end('<h2>Hoje está um belo dia :)</h2>');
}).listen('4000');

console.log('Server running at http://localhost:4000/');