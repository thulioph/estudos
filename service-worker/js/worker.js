// Definindo uma versão
this.version = 1;

// Listener para a instalação.
this.addEventListener('install', install);

// Listener para requests.
this.addEventListener('fetch', fetch);


install = function(event) {
 
 var myResources = new Cache(
  '/index.html', 
  '/images/logo.jpeg'
  );

 event.waitUntil(myResources.ready());
 cache.set('caches-'+ this.version, myResources);

 // Atualizações ou novas versões de arquivos.
 // if (parseInt(event.previousVersion) == parseInt(this.version) {
 //  event.replace();
 // });
};


fetch = function(event) {
  console.log('Url requisitada: ', event.request.url);

  event.respondWith(
    caches.match(event.request)
      .catch(function() {
        return event.default;
      })
      .catch(function() {
        return caches.match('/data/post_fallback.json'); 
      })
    );
};