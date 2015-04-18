/**
 * Created by critical on 4/18/15.
 */
var create_backpack_table = function () {
    var query =
        "CREATE TABLE backpack( \
            id SERIAL PRIMARY KEY, \
            player integer references users(id), \
            item integer references items(id) \
        );";
    return query;
}
exports.query = create_backpack_table;
 
