const config = require('./server/config/config');
const os = require( 'os' );
const app = require('./server/server.js');
const mongoose = require('mongoose');
const mongooseConfig = require('./server/config/mongooseConfig.js');


mongoose.connect(config.db.url, mongooseConfig);
mongoose.connection.on('error', err => console.error(err.message));
mongoose.connection.on('disconnected', () => console.log('Connection Disconnected'));
mongoose.connection.once('open', () => console.log('Connection to MongoDB ok'));

const [networkInterfaces] = os && os.networkInterfaces() && os.networkInterfaces()['Wi-Fi'] ?
    os.networkInterfaces()['Wi-Fi'] : '----';

app.listen(config.port, () => console.log(`app listeing on ${networkInterfaces.address}:${config.port}!`));