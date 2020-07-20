const knex = require("../../database");
const tableName = "orders";

/*
SELECT * FROM orders
 */
const getAll = () => knex(tableName);

module.exports = { getAll };
