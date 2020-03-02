const router = require('express').Router();
const {register, authenticate, checkReqBody} = require('../controllers/authController');

router
.route('/*')
.all(checkReqBody)

router
.route('/register')
.post(register)

router
.route('/authenticate')
.post(authenticate)

module.exports = router;