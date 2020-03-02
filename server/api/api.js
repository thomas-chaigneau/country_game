const router = require('express').Router();

router.use('/users', require('./routes/usersRoute'));
router.use('/games', require('./routes/gamesRoute'));

module.exports = router;
