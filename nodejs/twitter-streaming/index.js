var app = require('express')();
var http = require('http').Server(app);
var Twit = require('twit');
var io = require('socket.io')(http);

http.listen(3000, function(){
  console.log('listening on *:3000');
});

app.get('/', function(req, res){
  res.sendfile('index.html');
});


// Twitter
var watchList = ['#catrina'];

var T = new Twit({
  consumer_key: 'z4ebhQjySYZcu5aIHUqKgPJiZ',
  consumer_secret: '4kVt3glKRLd9dLHIKSi578s4aoZUfmyTwvfonIoXsajOpVWkzF',
  access_token: '365489318-9syC9NODIhM5vAalAGTrz9W9THf8ToZ2Jmh6baty',
  access_token_secret: 'OrGLZBFCgSjPqSdbU1LTsSsbKGfszRGyytEfJ9iVmo3q7'
});


// Socket
io.sockets.on('connection', function(socket) {
  console.log('Connected');

  var stream = T.stream('statuses/filter', { track: watchList });

  stream.on('tweet', function(tweet) {
    
    var tweetJSON = {
      text: tweet.text,
      name: tweet.screen_name,
      image: tweet.user.profile_image_url,
      lat: tweet.geo.coordinates[0],
      lng: tweet.geo.coordinates[1],
      url: 'https://twitter.com/' + tweet.user.screen_name + '/status/' + tweet.user.id_str
    };

    io.sockets.emit('stream', tweetJSON);
    console.log(tweet);
    // console.log('lat: ', tweet.geo.coordinates[0]);
    // console.log('lng: ', tweet.geo.coordinates[1]);
    // console.log(tweet.text);
    // console.log(tweet.user.screen_name);
    // console.log(tweet.user.profile_image_url);
    // console.log(tweet.geo.coordinates);

    // lat = tweet.geo.coordinates[0];
    // lng = tweet.geo.coordinates[1];
    // io.sockets.emit('stream', tweet.text);
  });
});