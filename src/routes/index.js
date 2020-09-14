const { Router } = require("express");
const users = require("./users");

const router = new Router();

router.use(users);

router.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

module.exports = router;
