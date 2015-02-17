var http = require('http');
var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/thuliophData');

var db = mongoose.connection;

// error
db.on('error', function(error) {
  console.log('Erro de conexão', error);
});

// open
db.on('open', function(){
  console.log('Conexão aberta');
});

// connected
db.on('connected', function(error) {
  console.log('Conectado');
});

// disconnected
db.on('disconnected', function(error) {
  console.log('Desconectado.');
});

var Schema = mongoose.Schema;
var BeerSchema = new Schema({
  name: { type: String, default: '', required: true },
  description: { type: String, default: '' },
  alcohol: { type: Number, min: 0 },
  price: { type: Number, min: 0 },
  category: { type: String, default: '' },
  created_at: { type: Date, default: Date.now }
});

var Beer = mongoose.model('Beer', BeerSchema);

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-type' : 'text/plain'});
  
  console.log('URL: ', req.url);
  
  var route = req.url;

  if (route === '/beer/create') {
    var dados = {
      name: 'Skol',
      description: 'Mijo de rato',
      alcohol: 4.5,
      price: 3.0,
      category: 'pilsen'
    }

    var model = new Beer(dados),
        msg = '';

    model.save(function(err, data) {
      if (err) {
        console.log('Erro: ', err);
        msg = 'Erro: ' + err;
      } else {
        console.log('Cerveja inserida:', data);
        msg = 'Cerveja inserida: ' + JSON.stringify(data);
      }

      res.end(msg);
    });
  } else {
    res.end('Rota não encontrada');
  }

}).listen('3000');

console.log('Server running at http://localhost:3000/');