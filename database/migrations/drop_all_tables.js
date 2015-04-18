/**
 * Created by critical on 4/18/15.
 */
var drop_all_tables = function () {
  var query = "DROP TABLE users, ranks, stats_global, stats, items, item_stats, backpack, skills, classes, races;"
  return query;
}
exports.query = drop_all_tables;
 
