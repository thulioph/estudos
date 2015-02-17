var mongoose = require('mongoose'),
    Beer = mongoose.model('Beer'),
    msg = '';

module.exports = {
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