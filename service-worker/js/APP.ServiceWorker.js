// =============
// Tudo é baseado em promisses
// =============


// Dispara durante a instalação, baixando os recursos.
this.oninstall = function(event) {
  
  event.waitUntil(
    caches.open('aplicacao').then(function(cache) {
      return cache.addAll([
        '/index.html',
        '/css/style.css',
        '/js/APP.Request.js'
      ]);
    })
  );
};

// Terminou de baixar e vai ficar valendo.
this.onactive = function(event) {
  console.log('Ativou!');
};

// Dispara todas as requisições da minha página (intercepta a url).
this.onfetch = function(event) {
  console.log('URL -> ', event.request.url);

  event.respondWith(
    caches.match(event.request).then(function(response) {
      // caso não tenha nada no cache, dispara a requisição e pega na rede.
      return response || event.default();
    }).catch(function() { // tratando erro da promisses com o catch (fallback)
      // exibe algo que realmente esteja no cache
      return caches.match('/contato.html');
    });
  );
}