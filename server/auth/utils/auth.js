const jwt =require('jsonwebtoken');
const bcrypt = require('bcrypt');

const privateKey = process.env.JWT_PRIVATE_KEY;

exports.encrypt = (password) => bcrypt.hash(password, 10)

exports.getTokenFor = (user) => jwt.sign({sub: user._id}, privateKey);

exports.isSamePasswords = (givenPassword, DbPassword) => bcrypt.compareSync(givenPassword, DbPassword);

exports.validateEmail = email => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}
exports.checkPasswordSecurity = password => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    return regex.test(String(password));
}

exports.checkName = (firstName, lastName) => {
    const regex = /^[_A-z]*((-|\s)*[_A-z])*$/;
    return regex.test(String(firstName))
    && regex.test(String(lastName))
    && typeof firstName === 'string'
    && typeof lastName === 'string'
};
