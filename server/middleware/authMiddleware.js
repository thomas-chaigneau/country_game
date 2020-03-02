const jwt = require('jsonwebtoken');
const ErrorHandler = require('../helpers/errors');
const {errorTxt} = require('../constants/errorsConstants');

const privateKey = process.env.JWT_PRIVATE_KEY;

const authMiddleware = (app) => {
    app.use((req, res, next) => {
        const token = req.headers['access-token'];
        if (token) {
            jwt.verify(token, privateKey, (err, decoded) => {      
                if (err) {
                    return next(new ErrorHandler(401, errorTxt.wrongToken, err));
                } else {
                    next();
                }
            });

        } else {
            return next(new ErrorHandler(401, errorTxt.noToken));
        }
  });
};


module.exports = authMiddleware;