/**
 * Created by critical on 4/18/15.
 */
var connectionString = function () {
    var connection_string = {
      "username": "postgres",
      "password": "postgres",
      "host": "localhost",
      "database": "test"
    };
    return connection_string;
}
exports.connectionString = connectionString;
 
