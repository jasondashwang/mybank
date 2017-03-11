let db = require('./_db');

let User = require('./models/user');
let Account = require('./models/account');
let Transaction = require('./models/transaction')

Account.belongsTo(User, {foreignKey: 'uid'});
Account.hasOne(Transaction, {as: 'ReceiverAid', foreignKey: 'receiverAid'});
Account.hasOne(Transaction, {as: 'SenderAid', foreignKey: 'senderAid'});

module.exports = db;
