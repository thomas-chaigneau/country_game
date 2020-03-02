const express = require('express');
const app = express();
const api = require('./api/api');
const auth = require('./auth/auth');
const appMiddleware = require('./middleware/appMiddleware');
const authMiddleware = require('./middleware/authMiddleware');
const errorsMiddleware = require('./middleware/errorsMiddleware');

// setup the app middlware
appMiddleware(app);

// setup the api
app.use('/', auth);
authMiddleware(app);
app.use('/api', api);

// errors management
errorsMiddleware(app)

module.exports = app;