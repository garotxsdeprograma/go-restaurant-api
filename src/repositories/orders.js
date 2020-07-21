const knex = require("../../database");
const Order = require("../models/Order");
const tableName = "orders";

/*
SELECT * FROM orders
 */
const getAll = async () => {
  const orders = await knex(tableName);
  return orders.map((order) => new Order(order));
};

/*
SELECT * FROM orders WHERE id = ?
*/
const getById = async (id) => {
  const [order] = await knex(tableName).where({ id: id });
  return new Order(order);
};

/*
INSERT INTO orders (product_id, ...) VALUES (?, ...)
*/
const create = async (order) => {
  const [id] = await knex(tableName).insert(order);
  return id;
};

module.exports = {
  getAll,
  getById,
  create,
};
