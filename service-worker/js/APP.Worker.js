var APP = APP || {};
APP.Worker = {
  setUp: function() {
    this.register();
  },

  init: function() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/estudos/service-worker/js/APP.ServiceWorker.js', {
        scope: '/estudos/service-worker/js/'
      }).then(function(reg) {
        console.log('Yey!', reg);
      }).catch(function(err) {
        console.warn('Boo!', err);
      });
    }
  },

  register: function() {
    navigator.serviceWorker.register('/estudos/service-worker/js/APP.ServiceWorker.js').then(function() {
      console.log('Registrado!');
    }, function(error) {
      console.log('Problemas, ', error);
    });
  }
}