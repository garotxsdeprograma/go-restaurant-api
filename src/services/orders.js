const moment = require("moment");
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

  const id = await repository.create({
    ...order,
    value: Number(value.toFixed(2)),
  });
  return repository.getById(id);
};

const update = async (id, data) => {
  const order = await repository.getById(id);
  if (!order.id) {
    throw { status: 404, message: "Not found" };
  }

  const merged = Object.assign({}, order, data);

  const product = await productService.getById(merged.product_id);

  const newOrder = new Order({
    ...merged,
    id: undefined,
    created_at: undefined,
    value: product.price * merged.quantity,
    updated_at: moment().utc().format(),
  });

  await repository.update(id, newOrder);

  return repository.getById(id);
};

module.exports = {
  getAll,
  create,
  update,
};
