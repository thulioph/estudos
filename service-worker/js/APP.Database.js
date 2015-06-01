var APP = APP || {};
APP.Database = {
  setUp: function() {
    this.create();
  },

  create: function() {
    var db, request, objectStore;

    request = indexedDB.open('DBteste', 1);

    // trata o sucesso
    request.onsuccess = function(event) {
      console.log('Sucesso!');

      // retorno após o sucesso
      db = request.result;
    };

    // trata o erro
    request.onerror = function(event) {
      console.warn('Database error: ' + event.target.errorCode);
    };

    // criando ou atualizando uma versão do banco (apenas navegadores recentes)
    request.onupgradeneeded = function(event) {
      db = event.target.result;

      objectStore = db.createObjectStorage('nome', {keyPath: 'minhaChave'});
    };

  }
}