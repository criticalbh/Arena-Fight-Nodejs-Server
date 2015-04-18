/**
 * Created by critical on 4/18/15.
 */
var create_item_stats_table = function () {
    var query =
        "CREATE TABLE item_stats( \
            id SERIAL PRIMARY KEY references items(id), \
            health integer, energy integer, \
            gold integer, armor integer, \
            stamina integer, intellect integer, \
            strength integer, spirit integer, agility integer \
        );";
    return query;
}
exports.query = create_item_stats_table;
 
