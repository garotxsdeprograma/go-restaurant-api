const { Router } = require("express");
const orders = require("./orders");
const products = require("./products");
const users = require("./users");

const router = new Router();

router.use(orders);
router.use(products);
router.use(users);

router.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

module.exports = router;
