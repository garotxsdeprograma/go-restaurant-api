const moment = require('moment');
const utcNow = moment().utc().format();

module.exports = function Product(data) {
  this.id = data.id;
  this.name = data.name;
  this.price = data.price;
  this.created_at = data.created_at || utcNow;
  this.updated_at = data.updated_at || utcNow;
};
