const knexConfig = require('../config');
const knex = require('knex')(knexConfig);

knex.schema.createTable('products', table => {
    table.increments('id'),
    table.string('name'),
    table.string('code'),
    table.float('precio'),
    table.integer('stock')
}).then(() => {
    console.info('Table created');
}).catch(err => {
    console.error(err)
}).finally(() => {
    knex.destroy();
});