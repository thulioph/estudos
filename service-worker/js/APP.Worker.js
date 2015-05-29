var APP = APP || {};
APP.Worker = function() {
  setUp: function() {
    this.init();
  },

  init: function() {
    var that = this;

    navigator.serviceWorker.register('/js/APP.ServiceWorker.js').then(success, error);

    this.success = function(serviceWorker) {
      serviceWorker.postMessage('ServiceWorker instalado com sucesso.');
    }

    this.error = function(error) {
      console.error('Ops.. não rolou a instalação, ',™ error);
    }
  }
}