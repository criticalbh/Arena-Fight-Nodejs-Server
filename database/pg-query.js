/**
 * Created by critical on 4/18/15.
 */
var pg = require('pg');
var execute_query = function (connection_string, query) {
    var connectionString =
        "postgres://" +
        connection_string.username + ":" +
        connection_string.password + "@" +
        connection_string.host + "/" +
        connection_string.database;
    var client = new pg.Client(connectionString);
    client.connect();
    var query = client.query(query);
    query.on('end', function() { client.end(); });
}
exports.execute = execute_query;
 
