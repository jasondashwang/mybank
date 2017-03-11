let Sequelize = require('sequelize');
let db = require('../_db');

module.exports = db.define('user', {
  uid: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  fullName: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
}, {
  hooks: {
    beforeCreate: function(user){
      user.fullName = user.firstName + ' ' + user.lastName;
    }
  }
})
