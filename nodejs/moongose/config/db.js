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

process.on('SIGINT', function() {
  mongoose.connection.close(function() {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

require('../models/index');