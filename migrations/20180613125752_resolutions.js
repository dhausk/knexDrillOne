
exports.up = function (knex, Promise) {
  return knex.schema.createTable('resolutions', function (table) {
    table.increments('id');
    table.date('dueDate');
    table.text('resolution');
  });
};
exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('resolutions');
};
