/**
 * Created by critical on 4/18/15.
 */
var create_rank_table = function () {
    var query =
        "CREATE TABLE ranks( \
            id SERIAL PRIMARY KEY references users(id), \
            points integer \
        );";
  return query;
}
exports.query = create_rank_table;
 
