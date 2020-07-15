const service = require("../services/products");
const handleError = require("./handleError");

const getAll = (req, res) => {
  service
    .getAll()
    .then((products) => res.json(products))
    .catch((error) => handleError(res, error));
};

const getById = (req, res) => {
  service
    .getById(req.params.id)
    .then((product) => res.json(product))
    .catch((error) => handleError(res, error));
};

const create = async (req, res) => {
  try {
    const created = await service.create(req.body);
    res.status(201).json(created);
  } catch (error) {
    handleError(res, error);
  }
};

const update = async (req, res) => {
  try {
    const updated = await service.update(req.params.id, req.body);
    res.json(updated);
  } catch (error) {
    handleError(res, error);
  }
};

const del = (req, res) => {
  service
    .del(req.params.id)
    .then(() => res.status(204).end())
    .catch((error) => handleError(res, error));
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  del,
};
