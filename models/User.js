/**
 * Created by critical on 4/19/15.
 */

var query = require('../database/pg-query.js');
var table = "users"

exports.findByKey = function(key, value, callback){
    query.read("SELECT * FROM " + table + " WHERE " + key + "='" + value + "';", function(response){
         callback(response);
    });
}

exports.findByTwoKeys = function(key1, key2, value1, value2, callback){
    query.read("SELECT * FROM " + table + " WHERE " + key1 + "= '" + value1 + "' AND " + key2 + " = '" + value2 + "';", function(response){
         callback(response);
    });
}