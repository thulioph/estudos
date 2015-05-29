importScripts('serviceworker-cache-polyfill.js');

var cache_version, current_cache, preFetchUrls, expectedCacheNames;

cache_version = 3;
current_cache = { prefetch: 'cache-v' + cache_version };

self.addEventListener('install', function(event) {
  
  // Antes de fazer o fetch é indicado quais arquivos serão cacheados.
  preFetchUrls = [
    './index.html',
    './contato.html',
    './css/style.css',
    './images/user.jpeg',
    './bower_components/bootstrap/dist/css/bootstrap.min.css',
    './bower_components/bootstrap/dist/css/bootstrap-theme.min.css',
    './bower_components/jquery/dist/jquery.min.js',
    './bower_components/handlebars/handlebars.js',
    './bower_components/APP/index.js',
    './js/APP.Request.js'
  ];

  console.log('Recursos para prefetch: ', preFetchUrls);

  event.waitUntil(
    caches.open(current_cache['prefetch'])
    .then(function(cache) {
      return cache.addAll(preFetchUrls.map(function(preFetchUrls) {
        return new Request(preFetchUrls, {mode: 'no-cors'});
      })).then(function() {
        console.log('Todos os recursos foram buscados e armazenados em cache.');
      });
    }).catch(function(error) {
      console.log('Prefetch error: ', error);
    })
  );
});

self.addEventListener('activate', function(event) {
  expectedCacheNames = Object.keys(current_cache).map(function(key) {
    return current_cache[key];
  });

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (expectedCacheNames.indexOf(cacheName) == -1) {
            console.log('Deletando cache antigo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// self.addEventListener('fetch', function(event) {
//   console.log('Urls requisitadas:: ', event.request.url);

//   event.respondWith(
//     caches.match(event.request)
//     .then(function(response) {
//       if (response) {
//         return response;
//       }

//       return fetch(event.request);
//     })
//   );
// });