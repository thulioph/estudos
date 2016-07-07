(function() {

  'use strict';

  var version, offlineAssets;

  version = 'v2::';
  offlineAssets = [
    '/'
  ];

  self.addEventListener('install', installer);
  self.addEventListener('activate', activator);
  self.addEventListener('fetch', fetcher);


  function installer(event) {
    self.skipWaiting();

    event.waitUntil(
      caches
        .open(version + 'assets')
        .then(prefill)
    );

    function prefill (cache) {
      return cache.addAll(offlineAssets);
    }
  }

  function activator(event) {
    event.waitUntil(
      caches
        .keys()
        .then(getKeys)
    );

    function getKeys(keys) {
      return Promise.all(keys
        .filter(function(key) {
        return key.indexOf(version) !== 0;
      })
      .map(function(key) {
        return caches.delete(key);
      }));
    }
  }

  function fetcher(event) {
    var request;

    request = event.request;

    if (request.method !== 'GET') {
      event.respondWith(
        fetch(request)
      );

      return;
    }
  }

})();
