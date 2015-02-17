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

var Beer = mongoose.model('Beer', BeerSchema), _beer = {
      create: function (req, res) {
        var dados = {
          name: 'Skol',
          description: 'Mijo de rato',
          alcohol: 4.5,
          price: 3.0,
          category: 'pilsen'
        }

        var model = new Beer(dados);

        model.save(function(err, data) {
          if (err) {
            console.log('Erro: ', err);
            msg = 'Erro: ' + err;
          } else {
            console.log('Cerveja inserida: ', data);
            msg = 'Cerveja inserida: ' + JSON.stringify(data);
          }
          res.end(msg);
        });
      },

      retrieve: function(req, res) {
        var query = {};

        Beer.find(query, function(err, data) {
          if (err) {
            console.log('Erro: ', err);
            msg = 'Erro: ' + err;
          } else {
            console.log('Listagem: ', data);
            msg = 'Cervejas listadas: ' + JSON.stringify(data);
          }
          res.end(msg);
        });
      }, 

      update: function(req, res) {
        var query = { 
          name: /skol/i 
        };

        var mod = {
          alcohol : 666
        };

        var optional = {
          upsert: false,
          multi: true
        };

        Beer.update(query, mod, optional, function(err, data) {
          if (err) {
            console.log('Erro ', err);
            msg = 'Erro: ' + err;
          } else {
            console.log('Cervejas alteradas ', data);
            msg = 'Cervejas Alteradas: ' + data;
          }
          res.end(msg);
        });
      }, 

      delete: function(req, res) {
        var query = {
          name: /skol/i
        };

       Beer.remove(query, function(err, data) {
          if (err) {
            console.log(err);
            msg = 'Erro: ' + err;
          } else {
            console.log('Cerveja deletada com sucesso, quantidade: ', data);
            msg = 'Cervejas deletadas: ' + data;
          }
          res.end(msg);
       });
      }, 
    }

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