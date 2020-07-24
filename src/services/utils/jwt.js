const jwt = require("jsonwebtoken");

const privateKey = process.env.JWT_PRIVATE_KEY;

const createToken = (userId) => {
  const token = jwt.sign({ id: userId }, privateKey);
  return token;
};

const verifyToken = (token) => {
  try {
    const result = jwt.verify(token, privateKey);
    return result;
  } catch (error) {
    throw { status: 403, message: "Invalid token" };
  }
};

module.exports = {
  createToken,
  verifyToken,
};
