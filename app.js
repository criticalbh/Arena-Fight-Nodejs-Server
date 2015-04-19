/**
 * Created by critical on 4/18/15.
 */
var User = require('./models/User');

User.findByKey('id', '2', function callback(response){
    console.log(response);
});

