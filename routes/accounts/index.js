let router = require('express').Router();
let db = require('../../database');
let User = db.model('user');
let Account = db.model('account');

router.get('/', function(req, res, next){
  Account.findAll()
  .then(accounts => {
    res.send(accounts);
  })
})

router.get('/:id', function(req, res, next){
  Account.findById(req.params.id)
  .then(account => {
    res.send(account);
  })
})

router.post('/', function(req, res, next){
  Account.create(req.body)
  .then(account => {
    res.send(account);
  })
})

router.put('/:id', function(req, res, next){
  Account.findById(req.params.id)
  .then(account => {
    return account.update(req.body);
  })
  .then(updatedAccount => {
    res.send(updatedAccount);
  })
})

module.exports = router;
