let Sequelize = require('sequelize');
let db = require('../_db');

module.exports = db.define('account', {
  aid: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  balance: {
    type: Sequelize.DOUBLE,
    allowNull: false,
    validate: {
      min: 0
    },
    defaultValue: 0
  },
  accountType: {
    type: Sequelize.ENUM('savings', 'checkings'),
    allowNull: false
  }
})
