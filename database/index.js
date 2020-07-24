const knex = require("knex");
const config = require("../knexfile");

const nodeEnv = process.env.NODE_ENV;

module.exports = knex(config[nodeEnv]);
