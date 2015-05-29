var APP = APP || {};
APP.Worker = {
  setUp: function() {
    this.init();
  },

  init: function() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js', { scope: './'})
      .then(function(reg) {
        console.log('Yey!', reg);
      }).catch(function(err) {
        console.warn('Boo!', err);
      });
    } else {
      console.warn('Seu navegador não suporta service worker.');
    }
  },

  register: function() {
    var that;

    that = this;

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js', {scope: './'})
      .then(that.waitUntilInstalled)
      .then(that.initializeUI)
      .catch(function(error) {
        console.warn('Problema: ', error);
      })
    } else {
      console.warn('Seu navegador não suporta service worker.');
    }

  },

  waitUntilInstalled: function(registration) {
    return new Promise(function(resolve, reject) {
      if (registration.installing) {
        registration.installing.addEventListener('statechange', function(event) {
          if (event.target.state == 'installed') {
            resolve();
          } else if (event.target.state == 'redundant') {
            reject();
          }
        })
      } else {
        resolve();
      }
    });
  },

  initializeUI: function() {
    var that = this;

    document.querySelector('#files').style.display = 'block';

    document.querySelector('#add').addEventListener('click', function() {
      var url = document.querySelector('#url').value;

      if (url) {
        that.addUrlToCache(url);
      }
    });

    showList();
  },

  addUrlToCache: function(url) {
    var that = this;

    window.fetch(url, {mode: 'no-cors'}).then(function(response) {
      if (response.status < 400) {
        caches.open(CACHE_NAME).then(function(cache) {
          cache.put(url, response).then(that.showList);
        });
      }
    }).catch(function(error) {
      console.log('Error:, ', error);
    });
  },

  showList: function() {
    var that = this;

    while(cacheEntriesUl.firstChild) {
      cacheEntriesUl.removeChild(cacheEntriesUl.firstChild);
    }

    window.caches.keys().then(function(cacheNames) {
      cacheNames.forEach(function(cacheName) {
        window.caches.open(cacheName).then(function(cache) {
          cache.keys().then(function(requests) {
            requests.forEach(function(requests) {
              that.addRequestToList(cacheName, request);
            });
          });
        });
      })
    });
  },

  addRequestToList: function(cacheName, request) {
    var that = this;
    var url = request.url;

    var spanElement = document.createElement('span');
        spanElement.textContent = url;

    var buttonElement = document.createElement('button');
        buttonElement.textContent = 'Remove';
        buttonElement.dataset.url = url;
        buttonElement.dataset.cacheName = cacheName;
        
        buttonElement.addEventListener('click', function() {
          that.removeCachedResponse(this.dataset.cacheName, this.dataset.url).then(function() {
            var parent = this.parentNode;
            var grandParent = parent.parentNode;
            grandParent.removeChild(parent);
          }.bind(this));
        });
  },

  handler: function() {
    var CACHE_NAME = 'window-cache-v1';
    // var cacheEntriesUl = 
  }
}