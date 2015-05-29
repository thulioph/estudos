this.addEventListener('install', function(event) {
  var myResources = new Cache (
    "/index.html",
    "/css/style.css",
    "/images/logo.jpeg"
    );

  event.waitUntil(myResources.ready());
  
  caches.set('caches-v1', myResources);
});

this.addEventListener('fetch', function(event) {
  console.log('Url requisitada: ', event.request.url);
});

this.addEventListener('activate', function(event) {
  console.log('Activate: ', event);
});