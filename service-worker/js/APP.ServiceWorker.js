var APP = APP || {};
APP.ServiceWorker = {
  setUp: function() {
    this.listeners();
  },

  listeners: function() {
    var that = this;

    window.addEventListener('install', that.onInstall, false);
    window.addEventListener('fetch', that.onFetch, false);
    window.addEventListener('activate', that.onActive, false);
  },

  onInstall: function(event) {
    var version, myResources;

    console.log('Instal: ', event);

    version = 1;
    myResources = new Cache(
      '/index.html', 
      '/images/logo.jpeg'
    );

    event.waitUntil(myResources.ready());
    cache.set('caches-' + version, myResources);
  },

  onFetch: function(event) {
    console.log('Fetch: ', event);
    console.log('Url requisitada: ', event.request.url);

    event.respondWith(
      caches.match(event.request)
        .catch(function(){
          return event.default;
        })
        .catch(function(){
          return caches.match('data/post_fdallback.json');
        })
    );
  },

  onActive: function(event) {
    console.log('Active: ', event);
  }
}