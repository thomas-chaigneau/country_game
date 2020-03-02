const router = require('express').Router();
const {getUsers, checkId, deleteUser, setFavorite} = require('../controllers/usersController');

router
.route('/')
.get(getUsers)

router
.param('id', checkId);

router
.route('/:id/setFavorite')
.patch(setFavorite)

router
.route('/:id')
.delete(deleteUser)

module.exports = router;