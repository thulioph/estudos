self.addEventListener('install', function(event) {
  event.waitUntil(
    fetchStuffAndInitDatabases()
  );
});

self.addEventListener('activate', function(event) {
  console.log('Activate: ', event);
});