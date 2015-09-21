var socket = io.connect('http://localhost:1337');
socket.on('connect', function() {
  socket.request('/user', {}, function(users) {
    console.log(users);
  });

  socket.on('message', function(message) {
    console.log('Got message:', message);
  });
});
