/**
 * Created by critical on 4/18/15.
 */
var create_races_table = function () {
  var query =
        "CREATE TABLE races( \
            id SERIAL PRIMARY KEY, \
            name VARCHAR(40) not null, \
            model VARCHAR(40) not null \
        );";
  return query;
}
exports.query = create_races_table;
 
