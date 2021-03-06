/**
 * Created by critical on 4/28/15.
 */
// players which are currently connected
var players = {};
var numUsers = 0;
var first_player = false;

var appendPlayers = function(username){
    players[username] = username;
}

var deletePlayer = function(socket){
    delete players[socket.username];
}

var getNumUsers = function(){
    return numUsers;
}

var getPlayers = function(){
    return players;
}

var connectedPlayerNumbers = function(){
	numUsers++;
}

var disconnectedPlayerNumbers = function(){
	numUsers--;
}

function setFirstPlayer(what){
  first_player = what;
}
function getFirstPlayer(){
  return first_player;
}

exports.appendPlayers = appendPlayers;
exports.deletePlayer = deletePlayer;
exports.getNumUsers = getNumUsers;
exports.getPlayers = getPlayers;
exports.connectedPlayerNumbers = connectedPlayerNumbers;
exports.disconnectedPlayerNumbers = disconnectedPlayerNumbers;
exports.setFirstPlayer=setFirstPlayer;
exports.getFirstPlayer=getFirstPlayer;