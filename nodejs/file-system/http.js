var http = require('http'),
    fs   = require('fs');

http.createServer(function(req, res) {
  var index = fs.readFileSync('index.html');
  
  res.writeHead(200, {'Content-type' : 'text/html;charset=utf-8'});
  res.end(index);
}).listen('2000');

console.log('Server running at http://localhost:2000/');