/**
 * Created by critical on 4/19/15.
 */

var query = require('../database/pg-query.js');
var table = "races"

exports.findByKey = function(key, value, callback){
    query.read("SELECT * FROM " + table + " WHERE " + key + "=" + value, function(response){
         callback(response);
    });
}
