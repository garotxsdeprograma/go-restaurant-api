const tableName = "users";
exports.up = function (knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.increments();
    table.string("name").notNull();
    table.string("email").notNull().unique();
    table.string("password").notNull();
    table.timestamps();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};
