// Setup basic express server
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var User = require('../models/User');


var port = process.env.PORT || 3000;





http.listen(port, function () {
  console.log('Server listening at port %d', port);

});



// players which are currently connected to the chat
var players = {};
var numUsers = 0;

io.on('connection', function (socket) {
  console.log("connected");
  var addedUser = false;

  // trying to log in
  //@TODO handle join and connect races and classes with user
  socket.on('login', function (username, password) {
    console.log(username + password);
        User.findByTwoKeys('name','password', username, password, function callback(response){
	if(response.length > 0){
	    var user_info = response[0];
	    socket.username = username;
	    players[username] = username;
	    ++numUsers;
	    addedUser = true;
	    // emit only to user trying to authenticate
	    socket.emit('loginResponse', {
	      id: user_info.id,
	      numUsers: numUsers,
	      first_login: user_info.first_login,
	      race: user_info.race,
	      class: user_info.class
	    });
	    // echo globally (all clients) that a person has connected
	    socket.broadcast.emit('player joined', {
	      username: socket.username,
	      numUsers: numUsers
	    });
	    
	}else{
	  //@TODO handle wrong credentials
	  console.log('Wrong username/password');
	}
    });  
  
  });


  // when the user disconnects.. perform this
  socket.on('disconnect', function () {
    // remove the username from global players list
    if (addedUser) {
      delete players[socket.username];
      --numUsers;
      
      // echo globally that this client has left
      socket.broadcast.emit('user left', {
        username: socket.username,
        numUsers: numUsers
      });
    }
  });
});
