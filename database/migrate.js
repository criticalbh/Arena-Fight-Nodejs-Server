/**
 * Created by critical on 4/18/15.
 */
var pg_query = require('./pg-query');
var connection_string = require('../app/config').connectionString(); 

var drop_tables = require('./migrations/drop_all_tables').query(); 
var create_classes_table = require('./migrations/create_classes_table').query();
var create_races_table = require('./migrations/create_races_table').query();
var create_users_table = require('./migrations/create_users_table').query();
var create_rank_table = require('./migrations/create_rank_table').query();
var create_stats_global_table = require('./migrations/create_stats_global_table').query();
var create_stats_table = require('./migrations/create_stats_table').query();
var create_items_table = require('./migrations/create_items_table').query();
var create_item_stats_table = require('./migrations/create_item_stats_table').query();
var create_backpack_table = require('./migrations/create_backpack_table').query();
var create_skills_table = require('./migrations/create_skills_table').query();

//pg_query.execute(connection_string, drop_tables);
pg_query.execute(connection_string,
    create_classes_table +
    create_races_table +
    create_users_table +
    create_rank_table +
    create_stats_global_table +
    create_stats_table +
    create_items_table +
    create_item_stats_table +
    create_backpack_table +
    create_skills_table
);
