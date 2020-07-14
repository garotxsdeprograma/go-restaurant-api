const repository = require("../repositories/products");

const getAll = () => repository.getAll();

const getById = (id) => repository.getById(id);

const create = async (product) => {
  const id = await repository.create(product);
  const created = await repository.getById(id);
  return created;
};

const del = (id) => repository.del(id);

module.exports = {
  getAll,
  getById,
  create,
  del,
};
