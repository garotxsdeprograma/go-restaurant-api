const service = require("../services/products");
const getAll = (req, res) => {
  service.getAll().then((products) => res.json(products));
};

const getById = (req, res) => {
  service.getById(req.params.id).then((product) => res.json(product));
};

const create = (req, res) => {
  service.create(req.body).then((created) => res.status(201).json(created));
};

const del = (req, res) => {
  service.del(req.params.id).then(() => res.status(204).end());
};

module.exports = {
  getAll,
  getById,
  create,
  del
};
