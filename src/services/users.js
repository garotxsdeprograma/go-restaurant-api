const User = require("../models/User");
const { encryptPassword } = require("./utils/encrypt");
const repository = require("../repositories/users");
const { createToken } = require("./utils/jwt");

const create = async (data) => {
  const user = new User({
    ...data,
    id: undefined,
    created_at: undefined,
    updated_at: undefined,
  });

  const { salt, encryptedPassword: password } = encryptPassword(data.password);

  const id = await repository.create({ ...user, password, salt });

  const created = await repository.getOne({ id: id });
  return created.view();
};

const login = async (loginData) => {
  const user = await repository.getOne({ email: loginData.email });
  if (!user) {
    throw { status: 401, message: "Not authorized" };
  }
  const { encryptedPassword } = encryptPassword(loginData.password, user.salt);
  if (encryptedPassword !== user.password) {
    throw { status: 401, message: "Not authorized" };
  }
  const token = createToken(user.id);
  return {
    user: user.view(),
    token,
  };
};

const getById = async (id) => {
  const user = await repository.getOne({ id: id });
  if (!user.id) {
    throw { status: 404, message: "Not found" };
  }
  return user;
};

module.exports = {
  create,
  login,
  getById,
};
