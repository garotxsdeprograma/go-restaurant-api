const crypto = require("crypto");

const generateSalt = () => {
  return crypto.randomBytes(16).toString("hex");
};

const encryptPassword = (password, salt = generateSalt()) => {
  const encryptedPassword = crypto.pbkdf2Sync(
    password,
    salt,
    100000,
    64,
    "sha512"
  );

  return {
    salt,
    encryptedPassword: encryptedPassword.toString("hex"),
  };
};

module.exports = {
  encryptPassword,
};
