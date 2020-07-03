const { Router } = require("express");
const orders = require("./orders");
const products = require("./products");

const router = new Router();

router.use(orders);
router.use(products);

module.exports = router;
