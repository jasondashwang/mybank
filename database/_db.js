let Sequelize = require('sequelize');

let db = new Sequelize('postgres://localhost:5432/mybank', {
  logging: false,
  native: true
});

module.exports = db;
