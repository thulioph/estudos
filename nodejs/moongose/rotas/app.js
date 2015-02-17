var http = require('http'), 
    db = require('./config/db'),
    Beer = require('./controllers/beers');

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-type' : 'text/html;charset=uft-8'});
  
  console.log('URL: ', req.url);
  var route = req.url, 
      msg = '';

      switch (route) {
        case '/beer/create' :
          _beer.create(req, res);
        break;

        case '/beer/retrieve' :
          _beer.retrieve(req, res);
        break;

        case '/beer/update' :
          _beer.update(req, res);
        break;

        case '/beer/delete' :
          _beer.delete(req, res);
        break;

       default: res.end('Rota não encontrada');
      };

}).listen('3000');

console.log('Server running at http://localhost:3000/');