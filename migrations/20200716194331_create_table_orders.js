const tableName = "orders";

exports.up = function (knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.increments();
    /*product_id int NOT NULL FOREIGN KEY REFERENCES products(id)*/
    table.integer("product_id").notNull().references("products.id");
    table.integer("quantity").notNull();
    table.decimal("value").notNull();
    table.timestamps();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};
