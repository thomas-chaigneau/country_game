const _ = require('lodash');
require('dotenv').config();

const config = {
	dev: 'development',
	test: 'testing',
	prod: 'production',
	port: process.env.PORT || 3004,
	db: {
		url: process.env.MONGO_URI
	},
};

process.env.NODE_ENV = process.env.NODE_ENV || config.dev
config.env = process.env.NODE_ENV

let envConfig

/**
 * 'require' may return an error if the file doesn't exist
 * so we use a try/catch statement & return an empty object if the error occurs
 */
try {
	envConfig = require(`./${config.env}`) // eslint-disable-line

	envConfig = envConfig || {} // if it find the file but returns 'null'...
} catch (e) {
	envConfig = {}
}

/**
 * During the merge of the two config  objects,
 * 'envConfig' properties will overwrite the 'config' ones
 */
module.exports = _.merge(config, envConfig)