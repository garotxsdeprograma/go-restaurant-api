const moment = require("moment");

const utcNow = moment().utc().format();

function User({
  id,
  name,
  email,
  salt,
  password,
  created_at = utcNow,
  updated_at = utcNow,
} = {}) {
  this.id = id;
  this.name = name;
  this.email = email;
  this.salt = salt;
  this.password = password;
  this.created_at = created_at;
  this.updated_at = updated_at;
}

User.prototype.view = function () {
  return {
    id: this.id,
    name: this.name,
    email: this.email,
    created_at: this.created_at,
    updated_at: this.updated_at,
  };
};

module.exports = User;
