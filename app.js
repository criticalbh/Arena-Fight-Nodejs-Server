/**
 * Created by critical on 4/18/15.
 */
var User = require('./models/User');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var LoginController = require('./controllers/LoginController');
var World = require('./app/world');
var port = process.env.PORT || 3000;

http.listen(port, function () {
    console.log('Server listening at port %d', port);
});





io.on('connection', function (socket) {
    console.log("connected");
    var addedUser = false;

    LoginController.tryLogin(socket, User, World);

    socket.on('savePlayer', function(object){
        //save object but first lets make module from this shit authentication :D
        console.log(object);
    });


    // when the user disconnects.. perform this
    socket.on('disconnect', function () {
        // remove the username from global players list
        if (addedUser) {
            World.deletePlayer(socket)
            // echo globally that this client has left
            socket.broadcast.emit('user left', {
                username: socket.username,
                numUsers: numUsers
            });
        }
    });
});
