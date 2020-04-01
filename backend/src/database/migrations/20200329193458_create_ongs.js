exports.up = function (knex) { // Create all the structure and data of the migration
  return knex.schema.createTable('ongs', function (table) {
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable();
  });
};

exports.down = function (knex) { // Works like a rollback and remove all the things that you made.
  return knex.schema.dropTable('ongs');
};