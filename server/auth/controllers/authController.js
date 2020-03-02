const ErrorHandler = require('../../helpers/errors');
const {errorTxt} = require('../../constants/errorsConstants');

const {encrypt, getTokenFor, isSamePasswords, validateEmail, checkPasswordSecurity, checkName} = require('../utils/auth.js')

const UserModel = require('../../api/models/User.js')

exports.checkReqBody = (req, res, next) => {
    const userInfo = req.body;
    console.log('TOTOTO', userInfo)
    const {password, email} = userInfo;
    if (!email && !password) {
        return next(new ErrorHandler(400, errorTxt.emptyAuthInfo));
    }
    if (!email) {
        return next(new ErrorHandler(400, errorTxt.emptyAuthMail));
    }
    if (!password) {
        return next(new ErrorHandler(400, errorTxt.emptyAuthPsw));
    }
    const isValideEmail = validateEmail(email)
    if (!isValideEmail) {
        return next(new ErrorHandler(404, errorTxt.invalidEmail));
    }
    req.body.email = email.toLowerCase();
    next();
}

exports.register = (req, res, next) => {
    const userInfo = req.body;
    console.log('*****', userInfo)
    const isPasswordSecureEnough = checkPasswordSecurity(userInfo.password)
    if (!isPasswordSecureEnough) {
        return next(new ErrorHandler(404, errorTxt.weakPsw));
    }
    encrypt(userInfo.password)
    .then(hash => {
        const user = new UserModel({...userInfo, password: hash});
        return UserModel.create(user)
        .then(user => {
            const createdUser = user.toObject()
            delete createdUser.password;
            return res.status(200).send(createdUser);
        })
        .catch(err => next(new ErrorHandler(404, errorTxt.accountCreation, err)))
    })
    .catch(err => next(new ErrorHandler(500, errorTxt.hash, err)));
}

exports.authenticate = async (req, res, next) => {
    console.log('****authenticate****')
    const {email, password} = req.body;
    UserModel.findOne({email})
    .then((foundUser) => {
        if (!foundUser) {
            return next(new ErrorHandler(404, errorTxt.authUserNotFount));
        }
        if (isSamePasswords(password, foundUser.password)) {
                const token = getTokenFor(foundUser);
                const userWithToken = {...foundUser.toObject(), token};
                delete userWithToken.password;
                return res.status(200).send(userWithToken);
        }
        return next(new ErrorHandler(403, errorTxt.wrongPsw));
    })
    .catch(err => next(new ErrorHandler(500, errorTxt.connection, err)));
}
