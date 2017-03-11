let router = require('express').Router();
let db = require('../../database');
let User = db.model('user');

router.get('/', function(req, res, next){
  User.findAll()
  .then(users => {
    res.send(users);
  })
})

router.get('/:id', function(req, res, next){
  User.findById(req.params.id)
  .then(user => {
    res.send(user);
  })
})

router.post('/', function(req, res, next){
  User.create(req.body)
  .then(user => {
    res.send(user);
  })
})

router.put('/:id', function(req, res, next){
  User.findById(req.params.id)
  .then(user => {
    return user.update(req.body);
  })
  .then(updatedUser => {
    res.send(updatedUser);
  })
})

module.exports = router;
