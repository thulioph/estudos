// utilizando o módulo mongoose para se conectar ao mongodb através da função connect.
var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/thuliophData');

// alguns eventos que auxiliam no gerenciamento da conexão com o MongoDB.
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