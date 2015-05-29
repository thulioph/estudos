var APP = APP || {};
APP.Worker = {
  setUp: function() {
    this.init();
  },

  init: function() {
    var that = this;

    navigator.serviceWorker.register('/js/APP.ServiceWorker.js').then(that.handleSuccess, that.handleError);
  },

  handleSuccess: function(serviceWorker) {
      serviceWorker.postMessage('ServiceWorker instalado com sucesso.');
  },

  handleError: function(error) {
    console.error('Ops.. não rolou a instalação, ',™ error);
  }
}