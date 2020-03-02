const bodyParser = require('body-parser');
const cors = require('cors');

const appMiddleware = (app) => {
    app.use( bodyParser.json() );
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(cors());
}

module.exports = appMiddleware;

