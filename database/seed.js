/**
 * Created by critical on 4/18/15.
 */
var pg_query = require('./pg-query');
var connection_string = require('../app/config').connectionString(); 

var seed_races_table = require('./seeds/seed_races_table').query();

/*
 * Clean before seed
 */

pg_query.execute(connection_string,
    "DELETE FROM races;"
);

pg_query.execute(connection_string,
    seed_races_table
);

//@TODO create seeds for rest of the tables