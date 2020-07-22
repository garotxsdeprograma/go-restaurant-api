const moment = require("moment");

const utcNow = moment().utc().format();

module.exports = function User({
  id,
  name,
  email,
  created_at = utcNow,
  updated_at = utcNow,
} = {}) {
  this.id = id;
  this.name = name;
  this.email = email;
  this.created_at = created_at;
  this.updated_at = updated_at;
};
