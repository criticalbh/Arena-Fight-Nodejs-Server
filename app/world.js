/**
 * Created by critical on 4/28/15.
 */
// players which are currently connected
var players = {};
var numUsers = 0;

var appendPlayers = function(username){
    players[username] = username;
    ++numUsers
}

var deletePlayer = function(socket){
    delete players[socket.username];
    --numUsers;
}

var getNumUsers = function(){
    return numUsers;
}

var getPlayers = function(){
    return players;
}

exports.appendPlayers = appendPlayers;
exports.deletePlayer = deletePlayer;
exports.getNumUsers = getNumUsers;
exports.getPlayers = getPlayers;