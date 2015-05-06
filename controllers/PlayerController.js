/**
 * Created by critical on 4/28/15.
 */

 //save current players state

exports.save = function(socket, User){
    socket.on('savePlayer', function(object){
        var values = "";
        for(var i in object){
        	if(i != 'id' && i!='numUsers')
		  		values += i + "='" + object[i] + "',";
		}

        values = values.slice(0, -1);
        var clause = "id=" + object.id;
        User.save(values, clause);

        //save object but first lets make module from this shit authentication :D
        console.log(values);
    });
}