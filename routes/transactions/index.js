let router = require('express').Router();
let db = require('../../database');
let User = db.model('user');
let Account = db.model('account');
let Transaction = db.model('transaction');

router.get('/', function(req, res, next){
  Transaction.findAll()
  .then(transactions => {
    res.send(transactions);
  })
})

router.get('/:id', function(req, res, next){
  Transaction.findById(req.params.id)
  .then(transaction => {
    res.send(transaction);
  })
})

router.post('/', function(req, res, next){
  // Cast to number
  let amount = +req.body.amount;
  let receiverAid = req.body.receiverAid;
  let senderAid = req.body.senderAid;

  let finalTransaction;
  Transaction.create(req.body)
  .then(transaction => {
    // Save the created transaction in a variable
    finalTransaction = transaction;
    return Account.findById(senderAid);
  })
  .then(senderAccount => {
    // Update Sender balance
    return senderAccount.update({balance: senderAccount.balance - amount});
  })
  .then(newSenderAccount => {
    return Account.findById(receiverAid);
  })
  .then(receiverAccount => {
    // Update Receiver Balance
    return receiverAccount.update({balance: receiverAccount.balance + amount});
  })
  .then(newReceiverAccount => {
    res.send(finalTransaction);
  })
})

router.put('/:id', function(req, res, next){
  Transaction.findById(req.params.id)
  .then(transaction => {
    return transaction.update(req.body);
  })
  .then(updatedTransaction => {
    res.send(updatedTransaction);
  })
})

module.exports = router;
