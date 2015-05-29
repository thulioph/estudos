importScripts('serviceworker-cache-polyfill.js');

var cache_version = 1;

var current_caches = {
  prefetch: 'window-cache-v' + cache_version
};

self.addEventListener('install', function(event) {
  var urlsToPrefetch = [
    './index.html',
    './contato.html',
    './css/style.css',
    './images/logo.jpeg',
    './bower_components/bootstrap/dist/css/bootstrap-theme.css',
    './bower_components/bootstrap/dist/css/bootstrap.css',
    './bower_components/jquery/dist/jquery.js',
    './bower_components/handlebars/handlebars.js',
    './bower_components/APP/index.js'
  ];

  console.log('Install event. Resources to prefetch: ', urlsToPrefetch);

  event.waintUntil(
    caches.open(current_caches['prefetch'])
    .then(function(cache) {
      return cache.addAll(urlsToPrefetch.map(function(urlsToPrefetch) {
        return new Request(urlsToPrefetch, {mode: 'no-cors'});
      })).then(function() {
        console.log('All resources have been fetched and cached.');
      });
    }).catch(function(error) {
      console.log('Pre-fetching failed: ', error);
    })
  );
});

self.addEventListener('activate', function(event) {
  var expectedCacheNames = Object.keys(current_caches).map(function(key) {
    return current_caches[key];
  });

  event.waintUntil(
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