const UserModel = require('../models/User');
const ErrorHandler = require('../../helpers/errors');
const {errorTxt} = require ('../../constants/errorsConstants');

exports.checkId = (req, res, next, id) => {
    console.log('checkId -> ', id);
    return UserModel.findById(id)
    .then(user => {
        if (user) {
            req.user = user;
            req.userId = id;
            return next();
        }
        return next(new ErrorHandler(404, errorTxt.userDoesNotExist));
    })
    .catch(err => next(new ErrorHandler(404, errorTxt.userNotFount, err)));
}

exports.getUsers = (req, res, next) => {
    return UserModel.find({})
    .then(users => res.status(200).send(users))
    .catch(err => next(new ErrorHandler(404, errorTxt.userListNotFount, err)));
};

exports.setFavorite = (req, res, next) => {
    console.log('setFavorite');
    const {user} = req;
    user.isFavorite = !user.isFavorite;
    return user.save()
    .then(user => res.status(200).send(user))
    .catch(err => next(new ErrorHandler(404, errorTxt.userStatusNotChange, err)))
}

exports.deleteUser = (req, res, next) => {
    const {userId} = req;
    console.log('DELETE', userId)
    return UserModel.deleteOne({_id: userId})
    .then(() => {
        console.log('USER DELETED')
        return res.status(200).send(userId)
    })
    .catch(err => next(new ErrorHandler(404, errorTxt.userDelete, err)))
};
