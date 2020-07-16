const tableName = "products";

exports.up = function (knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.increments();
    table.string("name").notNull();
    table.decimal("price").notNull();
    table.timestamps();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};
