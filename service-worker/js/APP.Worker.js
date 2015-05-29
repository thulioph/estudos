var APP = APP || {};
APP.Worker = {
  setUp: function() {
    this.init();
  },

  init: function() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/estudos/service-worker/js/APP.ServiceWorker.js', {
        scope: '/estudos/service-worker/'
      }).then(function(reg) {
        console.log('Yey!', reg);
      }).catch(function(err) {
        console.warn('Boo!', err);
      });
    }
  }
}