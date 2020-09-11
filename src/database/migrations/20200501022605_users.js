
exports.up = function (knex) {
    return knex.schema.createTable('users', function (table) {
        table.increments('id_user')
        table.string('name').notNullable()
        table.string('age').notNullable()
        table.string('photo').notNullable()
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('users')
};
