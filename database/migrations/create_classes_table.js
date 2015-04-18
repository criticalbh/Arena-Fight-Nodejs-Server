/**
 * Created by critical on 4/18/15.
 */
var create_classes_table = function () {
  var query = "CREATE TABLE classes(" +
             "id SERIAL PRIMARY KEY," +
             "name VARCHAR(40) not null);";
  return query;
}
exports.query = create_classes_table;
 
