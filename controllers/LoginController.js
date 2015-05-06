/**
 * Created by critical on 4/19/15.
 */

exports.tryLogin = function(socket, User, World, Player, returnValue){
// trying to log in
    //@TODO handle join and connect races and classes with user
    socket.on('login', function (username, password) {
        User.findByTwoKeys('name','password', username, password, function callback(response){
            if(response.length > 0){

                var user_info = response[0];

                socket.username = username;

                World.appendPlayers(username);

                addedUser = true;

                // emit only to user trying to authenticate
                socket.emit('loginResponse', {
                    id: user_info.id,
                    numUsers: World.getNumUsers(),
                    first_login: user_info.first_login,
                    race: user_info.race,
                    class: user_info.class
                });

                // echo globally (all clients) that a person has connected
                socket.broadcast.emit('player joined', {
                    username: socket.username,
                    numUsers: World.getNumUsers()
                });

                //save player globally
                console.log("Logged in: " + socket.username);
                Player.save(socket, User);
                returnValue(addedUser);
            }else{
                //@TODO handle wrong credentials
                console.log('Wrong username/password');
            }
        });
    });
};