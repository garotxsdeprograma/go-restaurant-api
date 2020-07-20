const service = require("../services/orders");
const handleError = require("./handleError");

const getAll = async (req, res) => {
  try {
    const orders = await service.getAll();
    res.json(orders);
  } catch (error) {
    handleError(res, error);
  }
};

module.exports = {
  getAll,
};
