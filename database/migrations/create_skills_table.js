/**
 * Created by critical on 4/18/15.
 */
var create_backpack_table = function () {
    var query =
        "CREATE TABLE skills( \
            id SERIAL PRIMARY KEY, \
            name VARCHAR(40) not null, \
            animation VARCHAR(40) not null \
        );";
    return query;
}
exports.query = create_backpack_table;
 
