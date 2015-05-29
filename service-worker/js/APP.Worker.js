var APP = APP || {};
APP.Worker = {
  setUp: function() {
    this.register();
  },

  register: function() {
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
  }
}