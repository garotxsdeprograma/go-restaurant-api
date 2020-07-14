const { Router } = require("express");
const router = new Router();
const controller = require('../controllers/products')
const knex = require("../../database");

const routeName = "/products";
const tableName = "products";

router.get(routeName, controller.getAll);

router.get(`${routeName}/:id`, controller.getById);

router.post(routeName, controller.create);

router.patch(`${routeName}/:id`, async (req, res) => {
  try {
    const [found] = await knex(tableName).where({ id: req.params.id });
    if (!found) {
      const err = Error("Not Found");
      err.status = 404;
      throw err;
    }
    const updated = await knex(tableName)
      .where({ id: req.params.id })
      .update(req.body);
    res.json(updated);
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message });
  }
});

router.delete(`${routeName}/:id`, controller.del);

module.exports = router;
