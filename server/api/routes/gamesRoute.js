const router = require('express').Router();
const {
    getQuestion,
    checkPopAnswer,
    checkBordersAnswer,
    controlPopulationAnswer,
    controlBorderAnswer,
    postPoints,
} = require('../controllers/gamesController');

const {checkId} = require('../controllers/usersController');

router
.route(['/population', '/borders'])
.get(getQuestion)


router
.route('/population/answer/:country')
.post(checkPopAnswer, controlPopulationAnswer)

router
.route('/borders/answer/:country')
.post(checkBordersAnswer, controlBorderAnswer)

router
.param('userId', checkId);

router
.route('/*/user/:userId/closeGame')
.post(postPoints)

module.exports = router;