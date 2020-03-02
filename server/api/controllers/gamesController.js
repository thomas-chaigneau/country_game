const getQuestionService = require('../../services/games/getQuestionService/getQuestionService');
const getAnswer = require('../../services/games/getAswerService/getAnswerService');
const {errorTxt} = require('../../constants/errorsConstants');

const ErrorHandler = require('../../helpers/errors');
const {isGoodFormatNumber, isGoodFormatBorders} = require('../../utils/utils');


exports.getQuestion = (req, res, next) => {
    console.log('getQuestion654654')
    const gameType = req.originalUrl.split('/').pop();
    getQuestionService.getQuestion(gameType)
    .then(questions => res.status(200).send(questions))
    .catch(err => next(new ErrorHandler(404, errorTxt.noQuestion, err)));
}

exports.checkPopAnswer = (req, res, next) => {
    const {answer} = req.body;
    const {country} = req.params;
    const goodFormatNumber = isGoodFormatNumber(answer.population);
    if (!goodFormatNumber) {
        return next(new ErrorHandler(404, errorTxt.isNotANumber))
    }
    if (!country) {
        return next(new ErrorHandler(404, errorTxt.noAnswer))
    }
    req.answer = goodFormatNumber;
    req.country = unescape(encodeURIComponent(country));
    next()
}

exports.checkBordersAnswer = (req, res, next) => {
    const {answer} = req.body;
    const {country} = req.params;
    console.log({answer})
    const goodFormatBorders = isGoodFormatBorders(answer);
    if (!goodFormatBorders) {
        return next(new ErrorHandler(404, errorTxt.isNotANumber))
    }
    if (!country) {
        return next(new ErrorHandler(404, errorTxt.noAnswer))
    }
    req.answer = goodFormatBorders;
    req.country = unescape(encodeURIComponent(country));
    next()
}

exports.controlPopulationAnswer = (req, res, next) => {
    const {answer, country} = req;
    getAnswer.population(country, answer)
    .then(answerStatus => res.status(200).send(answerStatus))
    .catch(err => next(new ErrorHandler(404, errorTxt.noAnswer, err)));
}

exports.controlBorderAnswer = (req, res, next) => {
    const {answer, country} = req;
    getAnswer.borders(country, answer)
    .then(answerStatus => res.status(200).send(answerStatus))
    .catch(err => next(new ErrorHandler(404, errorTxt.noAnswer, err)));
}

exports.postPoints = (req, res, next) => {
    const {user} = req;
    const {points} = req.body;
    user.points = user.points + points;
    user.bestScore = points > user.bestScore ? points : user.bestScore;
    user.worstScore = points < user.worstScore ? points : user.worstScore;
    user.nbOfGames = user.nbOfGames + 1;
    user.averageScore = Math.round(user.points / user.nbOfGames);
    return user.save()
    .then(user => res.status(200).send(user))
    .catch(err => next(new ErrorHandler(404, errorTxt.userStatusNotChange, err)))
};