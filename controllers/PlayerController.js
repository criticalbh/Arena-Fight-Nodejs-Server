/**
 * Created by critical on 4/28/15.
 */

 //save current players state

exports.save = function(socket, User){
    socket.on('savePlayer', function(object){
        var values = null;
       // id: 1, numUsers: 1, first_login: false, race: 2, class: 1


        //save object but first lets make module from this shit authentication :D
        console.log(object);
    });
}