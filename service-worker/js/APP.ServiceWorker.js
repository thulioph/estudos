self.addEventListener('install', function(event) {

  event.waitUntil(
    caches.open('my-cache-v1').then(function(cache) {
      return cache.addAll([
        '/',
        '/css/style.css',
        '/images/logo.jpeg',
        '/js/APP.Request.js'
      ]);
    })
  )

});

self.addEventListener('fetch', function(event) {
  console.log('Urls: ', event.request);

  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  )
});

self.addEventListener('activate', function(event) {
  console.log('Activate: ', event);
});