/**
 * Created by critical on 4/18/15.
 */
var create_users_table = function () {
    var query =
        "CREATE TABLE users( \
            id SERIAL PRIMARY KEY, \
            name VARCHAR(40) not null, \
            password VARCHAR(40) not null, \
            email VARCHAR(40) not null, \
            active boolean, \
            class integer references classes(id), \
            race integer references races(id), \
            created_at date, \
            updated_at date \
        );";
  return query;
}
exports.query = create_users_table;
 
