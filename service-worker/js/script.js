// Instanciando um service worker
navigator.serviceWorker.register('/js/worker.js').then(function(serviceWorker) {
  serviceWorker.postMessage('ServiceWorker instalado com sucesso.');
},
  function(error){
    console.log('Ops.. não rolou a instalação do ServiceWorker, ', error);
  });