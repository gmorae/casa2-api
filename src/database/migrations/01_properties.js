exports.up = function (knex) {
  return knex.schema.createTable('properties', function (table) {
    table.increments('id');
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.string('image').notNullable();

    table.string('id_category').notNullable();
    table.foreign('id_category').references('id').inTable('categories');
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('properties')
};
