/**
 * Created by critical on 4/18/15.
 */
var seed_races_table = function () {
  var query =
        "INSERT INTO races(name, model) values('Human', 'Path to some file.')";
  return query;
}
exports.query = seed_races_table;

