/**
 * Created by critical on 4/18/15.
 */
var pg = require('pg');
var connection_string = require('../app/config').connectionString();

var connection_string_parsed =
    "postgres://" +
    connection_string.username + ":" +
    connection_string.password + "@" +
    connection_string.host + "/" +
    connection_string.database;

/**
 * Execute query
 *
 * @param  {String} query query to be executed
 */
var execute_query = function (query) {
    var client = new pg.Client(connection_string_parsed);
    client.connect();
    var query = client.query(query);
    query.on('end', function() { client.end(); });
}

/**
 * Execute query and return read values.
 *
 * @param  {String} query_execution query to be executed
 * @return {Function} callback, value to be returned
 */
var execute_read_query = function(query_execution, callback){
    var response = [];
    pg.connect(connection_string_parsed, function(err, client, done) {
        // SQL Query > Select Data
        var query = client.query(query_execution);

        // Stream results back one row at a time
        query.on('row', function(row) {
            response.push(row);
        });

        // After all data is returned, close connection and return results
        query.on('end', function() {
            client.end();
            callback(response);
        });
        // Handle Errors
        if(err) {
            console.log(err);
        }
    });
}

exports.execute = execute_query;
exports.read = execute_read_query;
