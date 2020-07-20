const repository = require("../repositories/orders");

const getAll = () => repository.getAll();

module.exports = {
  getAll,
};
