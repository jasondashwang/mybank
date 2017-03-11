let router = require('express').Router();

router.use('/users', require('./users'));
router.use('/accounts', require('./accounts'));
router.use('/transactions', require('./transactions'));

module.exports = router;
