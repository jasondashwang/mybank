let Sequelize = require('sequelize');
let db = require('../_db');

module.exports = db.define('transaction', {
  receiverAid: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  senderAid: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  amount: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  text: {
    type: Sequelize.STRING
  },
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }

})
