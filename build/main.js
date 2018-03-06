'use strict';

var _nodeEnvFile = require('node-env-file');

var _nodeEnvFile2 = _interopRequireDefault(_nodeEnvFile);

var _restify = require('restify');

var _restify2 = _interopRequireDefault(_restify);

var _ramda = require('ramda');

var _paths = require('../config/paths');

var _botBuilder = require('./botBuilder');

var _botBuilder2 = _interopRequireDefault(_botBuilder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _nodeEnvFile2.default)((0, _paths.basePath)() + '/.env');

var credentials = {
  appId: process.env.MICROSOFT_APP_ID,
  appPassword: process.env.MICROSOFT_APP_PASSWORD
};

var bot = _botBuilder2.default.build(credentials);

var server = _restify2.default.createServer();
server.listen(process.env.PORT || 3987, function () {
  console.log('%s listening on %s', server.name, server.url);
});

var connector = (0, _ramda.path)(['connectors', '*'], bot);
server.post('/v1/messages', connector.listen());