const knex = require("../../database");
const User = require("../models/User");
const tableName = "users";

/*
INSERT INTO users (name, email, password, created_at, updated_at) values (?,?,?,?)
*/
const create = async (user) => {
  const [id] = await knex(tableName).insert(user);
  return id;
};

/*
SELECT * FROM users WHERE id=?
*/
const getOne = async (filter) => {
  const [user] = await knex(tableName).where(filter);
  return new User(user);
};

module.exports = {
  create,
  getOne,
};
