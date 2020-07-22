const User = require("../models/User");
const repository = require("../repositories/users");

const create = async (data) => {
  const user = new User({
    ...data,
    id: undefined,
    created_at: undefined,
    updated_at: undefined,
  });

  const id = await repository.create({ ...user, password: data.password });

  return repository.getById(id);
};

module.exports = {
  create,
};
