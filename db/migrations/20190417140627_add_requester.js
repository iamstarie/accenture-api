
exports.up = function(knex, Promise) {
  return knex.schema.table('tickets', table =>{
  	table.text('requester');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('tickets', table =>{
  	table.dropColumn('requester');
  });
};