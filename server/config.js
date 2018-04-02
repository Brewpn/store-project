const path = require('path');
const nconf = require('nconf');

const config = {
    env             : process.env.NODE_ENV,
    isTest          : process.env.NODE_ENV === 'test',
    isProduction    : process.env.NODE_ENV === 'production',
    workingDirectory: path.join(__dirname, '../')
};

const envPath = path.join(__dirname, `.env${config.env ? `.${config.env}` : ''}`).normalize();

// loads environment variables from a .env file into process.env
require('dotenv').config({
    path: envPath
});

nconf.argv().env();

// common
config.port = parseInt(nconf.get('PORT'), 10) || 4000;
config.webHost = nconf.get('WEB_HOST');

config.debug = (nconf.get('DEBUG_DEV') === 'true');
config.babelEnv = nconf.get('BABEL_ENV') || 'development';

const remoteApiHost = nconf.get('REMOTE_API_HOST');
const remoteApiPort = nconf.get('REMOTE_API_PORT');

config.remoteApiUrl = `${remoteApiHost}${remoteApiPort ? `:${remoteApiPort}` : ''}`;

module.exports = config;