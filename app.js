/**
 * Created by critical on 4/18/15.
 */
var User = require('./models/User');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var LoginController = require('./controllers/LoginController');
var Player = require('./controllers/PlayerController');
var World = require('./app/world');
var port = process.env.PORT || 3000;

http.listen(port, function () {
    console.log('Server listening at port %d', port);
});

io.on('connection', function (socket) {
    World.connectedPlayerNumbers();
    console.log("Connected: " + World.getNumUsers());
    var addedUser = false;

    LoginController.tryLogin(socket, User, World, Player, function callback(response){
        addedUser = response;
    });
    

    // when the user disconnects.. perform this
    socket.on('disconnect', function () {
        // remove the username from global players list
        if (addedUser) {
            // echo globally that this client has left
            socket.broadcast.emit('user left', {
                username: socket.username,
                numUsers: World.getNumUsers()
            });
            console.log(socket.username + " has been disconnected.");
            World.deletePlayer(socket);
            World.disconnectedPlayerNumbers();
            console.log("Connected: " + World.getNumUsers());
        }
    });
});
