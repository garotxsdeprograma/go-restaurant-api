const repository = require("../repositories/orders");
const productService = require("./products");
const Order = require("../models/Order");

const getAll = () => repository.getAll();

const create = async (data) => {
  const order = new Order({
    ...data,
    id: undefined,
    created_at: undefined,
    updated_at: undefined,
  });

  const product = await productService.getById(order.product_id);

  const value = order.quantity * product.price;

  const id = await repository.create({ ...order, value: Number(value.toFixed(2)) });
  return repository.getById(id);
};

module.exports = {
  getAll,
  create,
};
