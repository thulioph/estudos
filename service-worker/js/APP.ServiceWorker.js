var CACHE_VERSION = 1;

// Shorthand identifier mapped to specific versioned cache.
var CURRENT_CACHES = {
  font: 'font-cache-v' + CACHE_VERSION
};

self.addEventListener('activate', function(event) {
  var expectedCacheNames = Object.keys(CURRENT_CACHES).map(function(key) {
    return CURRENT_CACHES[key];
  });

  // Active worker won't be treated as activated until promise resolves successfully.
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (expectedCacheNames.indexOf(cacheName) == -1) {
            console.log('Deleting out of date cache:', cacheName);
            
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  console.log('Handling fetch event for', event.request.url);

  event.respondWith(
    
    // Opens Cache objects that start with 'font'.
    caches.open(CURRENT_CACHES['font']).then(function(cache) {
      return cache.match(event.request).then(function(response) {
        if (response) {
          console.log(' Found response in cache:', response);

          return response;
        } 
      }).catch(function(error) {
        
        // Handles exceptions that arise from match() or fetch().
        console.error('  Error in fetch handler:', error);

        throw error;
      });
    })
  );
});

// // =============
// // Tudo é baseado em promisses
// // =============

// // Dispara durante a instalação, baixando os recursos.
// this.oninstall = function(event) {
  
//   event.waitUntil(
//     caches.open('aplicacao-v2').then(function(cache) {
//       return cache.addAll([
//         '/index.html',
//         '/contato.html',
//         '/images/logo.jpeg',
//         '/css/style.css',
//         '/js/APP.Request.js'
//       ]);
//     })
//   );
// };

// // Terminou de baixar e vai ficar valendo.
// this.onactive = function(event) {
//   console.log('Ativou!');
// };

// // Dispara todas as requisições da minha página (intercepta a url).
// this.onfetch = function(event) {
//   console.log('URL -> ', event.request.url);

//   event.respondWith(
//     caches.match(event.request).then(function(response) {
//       // caso não tenha nada no cache, dispara a requisição e pega na rede.
//       return response || event.default();
//     }).catch(function() { // tratando erro da promisses com o catch (fallback)
//       // exibe algo que realmente esteja no cache
//       return caches.match('/contato.html');
//     });
//   );
// };