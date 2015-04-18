/**
 * Created by critical on 4/18/15.
 */
var create_stats_table = function () {
    var query =
        "CREATE TABLE stats( \
            id SERIAL PRIMARY KEY references users(id), \
            stamina integer, intellect integer, \
            strength integer, spirit integer, agility integer \
        );";
    return query;
}
exports.query = create_stats_table;
 
