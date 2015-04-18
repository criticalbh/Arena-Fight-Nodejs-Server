/**
 * Created by critical on 4/18/15.
 */
var create_stats_global_table = function () {
    var query =
        "CREATE TABLE stats_global( \
            id SERIAL PRIMARY KEY references users(id), \
            health integer, energy integer, \
            gold integer, armor integer \
        );";
  return query;
}
exports.query = create_stats_global_table;
 
