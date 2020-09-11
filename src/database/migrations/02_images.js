exports.up = function (knex) {
  return knex.schema.createTable('images', function (table) {
    table.increments('id');
    table.string('path').notNullable();
    table.string('id_immobile').notNullable();
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('images')
};
